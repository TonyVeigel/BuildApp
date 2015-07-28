var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var swig  = require('swig');
var React = require('react');
var Router = require('react-router');
var routes = require('./app/routes');
var mongoose = require('mongoose');
var async = require('async');
var request = require('request');
var Deploy = require('./models/deploy')
var uuid = require('node-uuid');
var ssh2 = require("ssh2");
var exec = require('child_process').exec;
var app = express();
var client = new ssh2();


mongoose.connect('mongodb://tony.veigel:Granite2015!@ds051630.mongolab.com:51630/deployapp');

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.post('/api/deploy', function(req, res){

  var appName = req.body.appName;
  var environment = req.body.environment;
  var localLoc = req.body.localLoc;
  var server = req.body.server;
  var deployTime = req.body.deployTime;
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;

  async.waterfall([
    function(callback){
      try {
        process.chdir(localLoc);
        io.sockets.emit('statusMessage', 'Building war file......');
        exec ('grails war ' + appName + '.war', function(err, stdout, stderr){
          callback(err, "Building war failed.");
        });
      }
      catch (err) {
        callback(err, "Could not find directory.");
      }
    },
    function(message, callback){
      io.sockets.emit('statusMessage', 'Running tests.....');
      exec ('grails test-app', function(err, stdout, stderr){
        callback(null, stdout ? stdout : "Running tests failed.");
      });
    },
    function(message, callback){
      io.sockets.emit('statusMessage', 'Connecting to server......');
      client.connect({
        host: environment,
        username: username,
        password: password
      });
      client.on('error', function(err) {
        callback(err, "Connecting to server failed.");
      });
      client.on('ready', function(err) {
        callback(null, "Ready.");
      });
    },
    function(message, callback){
      io.sockets.emit('statusMessage', 'Transferring file to server......');
      var remoteLocation = "/home/" + username + "/" + appName + ".war";
      client.sftp(function (err, sftp) {
        if (err) {
          callback(err, "SFTP Failed.");
        }else{
          sftp.fastPut(localLoc + '/' + appName + '.war', remoteLocation, {}, function (err) {
            callback(err, "Transferring file failed.");
          });
        }
      });
    },
    function(message, callback){
      io.sockets.emit('statusMessage', 'Copying file from home directoy to devstaging......');
      var location = "cp /home/" + username +"/" + appName + ".war /apps/build/" + appName + "/devstaging\n"
      client.exec('sudo su - jboss', {end:false, pty: true}, function(err, stream){

        if(err){
          callback(err)
        }

        var b = '', pwsent = false;
        stream.on('data', function(data) {
          if (!pwsent) {
            b += data.toString();
            if (b.substr(-2) === ': ') {
              pwsent = true;
              stream.write(password + '\n');
              stream.write(location);
              b = '';
              callback(err, "Done.");
            }else{
              stream.write(location);
              callback(err, "Done.");
            }
          }
        });
      });
    },
    function (message, callback){
      io.sockets.emit('statusMessage', 'Getting devstaging file information......');
      var file = null;
      client.exec("ls -ltr /apps/build/college-search/devstaging", function(err, stream){

        if(err){
          callback(err);
        }

        stream.on('data', function(data) {
          file = data.toString();
          callback(err,file);
        });
      });
    }],
    function(err, message){

      client.end();

      var deployRecord = new Deploy({
        deployId: uuid.v4(),
        appName: appName,
        environment: environment,
        user: username,
        time: new Date(),
        status: err ? "Deploy failed" : "Deployed successfuly",
        reason: message
      });
      deployRecord.save(function(err){
        if(err){
          return res.status(500).send({message:"Could not save record to DB."});
        }
      });
      if(err){
        return res.status(500).send({message:message});
      }
      return res.status(200).send({message:"War deployed successfully. Please veryify that " + message + " is the correct war to be deployed."});
    });
  });

  app.get('/api/deploys', function(req, res){

    Deploy
    .find()
    .sort('time')
    .exec(function(err, deploys) {
      if(err){
        return res.status(500).send({message:'error'});
      }
      return res.send(deploys);
    });
  });

  app.use(function(req, res) {
    Router.run(routes, req.path, function(Handler) {
      var html = React.renderToString(React.createElement(Handler));
      var page = swig.renderFile('views/index.html', { html: html });
      res.send(page);
    });
  });

  var server = require('http').createServer(app);
  var io = require('socket.io')(server);

  io.sockets.on('connection', function(socket) {
    socket.on('statusMessage', function(msg){
      io.emit('statusMessage', msg);
    });
  });

  server.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
  });

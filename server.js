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

var app = express();
var client = new ssh2();


mongoose.connect('mongodb://tony.veigel:Granite2015!@ds051630.mongolab.com:51630/deployapp');

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.post('/api/deploy', function(req, res, next){

  var appName = req.body.appName;
  var environment = req.body.environment;
  var localLoc = req.body.localLoc;
  var server = req.body.server;
  var deployTime = req.body.deployTime;
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  var remoteLocation = "/home/" + username + "/" + appName + ".war";

  async.waterfall([
    function(callback){
      client.connect({
        host: environment,
        username: username,
        password: password
      });

      client.on('error', function(err) {
        callback(err);
      });

      client.on('ready', function() {

        console.log("ready");

        client.sftp(function (err, sftp) {
          if (err) {
            callback(err);
          };
          sftp.fastPut(localLoc, remoteLocation, {}, function (err) {
            if(err){
              callback(err);
          }
              callback(null);
          });
      });
    });
  }, function(callback){

    client.exec('cp /home/veigelto/college-search.war /apps/build/college-search/devstaging ', function(err, stream){
      console.log("copying");
        if(err){
              console.log(err);
              callback(err);
        }
        callback(null);
    });

  }], function(err, result){

      var deployRecord = new Deploy({
        deployId: uuid.v4(),
        appName: appName,
        environment: environment,
        user: username,
        time: new Date().toString(),
        status: err ? "Deploy failed" : "Deployed successfuly"
      });

      deployRecord.save(function(err){
        if(err){
          console.log(err);
          return res.status(500).send({message:err});
        }
      });

      if(err){
        console.log(err);
        return res.status(500).send({message:err});
      }
      return res.status(200).send({message:err});
    });
});


app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    var html = React.renderToString(React.createElement(Handler));
    var page = swig.renderFile('views/index.html', { html: html });
    res.send(page);
  });
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

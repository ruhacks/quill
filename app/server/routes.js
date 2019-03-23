var User = require('./models/User');

module.exports = function(app) {

  // Application ------------------------------------------
  app.get('/', function(req, res){
    res.sendfile('./app/client/index.html');
  });
  app.get('/.well-known/acme-challenge/:content',function(req,res){
    res.send('fNZENkGzNsyIou9EyHsJw6NZRHzmpf6qy9GXYoIlvk0.FyolXQRsUO5Tp5NSU47unP4onAc9bhB7T9hWXE89GNI')})

  // Wildcard all other GET requests to the angular app
  app.get('*', function(req, res){
    res.sendfile('./app/client/index.html');
  });

};

var http = require('http'),
    app =  require('./index');

http.createServer(app).listen(3002, function() {
    console.log("Express server listening on port " + 3002);
});

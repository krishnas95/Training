var Hapi = require('hapi');
var server = new Hapi.Server();
const fs = require('fs');

server.connection({ port: 8000 });


server.route({
    method: 'GET'
    , path: '/snippet'
    , handler: function (req, reply) {
      
    }
});
server.route({
    method: 'GET'
    , path: '/snippet/{id}'
    , handler: function (req, reply) {
        reply("Codes of given userid"+{id}+"!");
    }
});
server.route({
    method: 'POST'
    , path: '/snippet'
    , handler: function (req, reply) {
        var name=req.payload.name;
        var id=req.payload.id;
        var lang=req.payload.lang;
        reply({Name:name,Id:id,language:lang});
    }
});

server.start(function () { // boots your server 
    console.log('Now Visit: http://localhost:8000/')
});

module.exports = server;
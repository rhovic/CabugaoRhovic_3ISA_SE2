const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req, res){

    fs.readFile("./info.txt", "utf8", (err, data) => {
        if(!err){
            console.log(data);
        }
        else{
            console.log("no file found");
        }
    })

});

server.listen(5000); 
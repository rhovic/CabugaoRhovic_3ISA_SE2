const fs = require('fs');

fs.readFile("./info.txt", "utf8", (err, data) => {
    if(!err){
        console.log(data);
    }
    else{
        console.log("no file found");
    }
})
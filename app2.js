const fs = require('fs');
const path = require('path');
   
fs.mkdir(path.join(__dirname, 'data'), (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Good');



});

let readableStream = fs.createReadStream("./info.txt", "utf8");
let writeableStream = fs.createWriteStream("./info2.txt" , "utf8");
readableStream.pipe(writeableStream);

fs.readFile("./info2.txt", "utf8", (err, data) => {
    if(!err){
        console.log(data);
    }
    else{
        console.log("no file found");
    }
});
import fs from 'fs'

//readable stream 
const readStream = fs.createReadStream("intro.txt",{encoding:"utf-8"})

readStream.on("data",(chunk)=>{
    connsole.log("Data received")
    console.log("Data:",chunk);

})
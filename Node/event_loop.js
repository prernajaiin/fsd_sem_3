//import fs from 'fs'
//setTimeout(()=>{
  //  console.log("SetTime Out");
//})

fs.readFile("intro.txt","utf8",(err,data)=>{
    setTimeout(()=>{
        console.log("setTimeout inside fs");
    },0)
    setImmediate(()=>{
        console.log("setImmediate inside fs");
    })
    console.log("File data read completetd");
})

setInterval(()=>{
    console.log("set interval");

},1000)

setImmediate(()=>{
    console.log("set immediate");

})
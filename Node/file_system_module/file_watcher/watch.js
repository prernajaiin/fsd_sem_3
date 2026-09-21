const fs = require ('fs')

fs.watch("notes.txt",(eventType,filename)=>{
    console.log("Event: ",eventType)
    console.log("Filename ",filename)
})

setTimeout(()=>{
    watcher.unwatchFie()
    console.log("File watching closed")
},5000)
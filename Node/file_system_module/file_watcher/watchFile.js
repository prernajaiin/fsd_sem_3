import fs from 'fs'

fs.watchFile("notes.txt",(prev,curr)=>{
    console.log("Previous",prev)
    console.log("Current",curr)
})
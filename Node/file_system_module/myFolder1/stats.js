import fs from 'fs'

fs.stat("notes.txt",(err,stats)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Information of [notes.txt]",stats);
    console.log("Size of the file:",stats.size,"Bytes");
    console.log("creation time of the file: ",stats.birthtime.toISOString().split("T")[0]);
    console.log("modification time of the file: ", stats.mtime.toISOString());
    console.log("access time of the file: ", stats.atime.toISOString());
    console.log("changed time of the file: ", stats.ctime.toISOString());

console.log("Is it a file: ",stats.isFile())
console.log("Is it a directory: ",stats.isDirectory())
});
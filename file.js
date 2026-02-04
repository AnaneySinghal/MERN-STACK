// import { log } from "console";
import fs from "fs";
import path from "path";

// const add=()=>{};

// module.exports ={
//     add,
// };

// const add =require("add")


const cpPath = path.join("functions", "..", "functions.js");
console.log("corssPlatformPathName",cpPath);



fs.readfile("file.txt","utf8",(err,data)=>{
    console.log("err",err);
    console.log("data:",data);
    
});
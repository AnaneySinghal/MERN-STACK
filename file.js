//TOPICS =IMPORT , EXPORT , DESTRUCURE,require,catch

// import { log } from "console";
// import fs from "fs";
// import path from "path";

// // const add=()=>{};

// module.exports ={
//     add,
// };

// const add =require("add")


// const cpPath = path.join("functions", "..", "functions.js");
// console.log("corssPlatformPathName",cpPath);



// fs.readfile("file.txt","utf8",(err,data)=>{
//     console.log("err",err);
//     console.log("data:",data);
    
// });


// import os from "os"

// const arch=os.arch()
// console.log(("arch:",arch));
// const platform =os.platform;
// console.log("platform",platform);

// const freeMemory =os.freemem()/1024/1024/1024
// console.log("freeMemory",freeMemory);



const {add ,multi}=require("./utils");

const addition=add(1,7);
console.log("addition:",addition);

const multiplication =multi(3,2);
console.log("multiplication",multiplication);

let obj={
    key: "add"
};

const{count,names}=require()
const getfile2Info =()=>{
    console.log("count:",count);
    console.log("names from fie 2",names);

};

module.exports=getfile2Info;


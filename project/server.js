// const express =require("express");

// const app = express()

// app.get("/",(req,res)=>{
//     res.json({
//         messgae:"Server Setup Done",
//         status:200,
//     });
// });

// app.get("/home/:uid",(req,res)=>{
//     const clientData =req.params.uid;
//     res.json({
//         messgae:"Home page",
//         clientData:clientData,
//         status:200,
//     });
// });

// app.listen(3000,()=>{
//     "Server running aqt Port 3000"
//     console.log("Server running at port 3000");
    
// })


const express =require("express")

const userRoutes =require("./routes/userRouts")

const app =express()

app.use("/",userRoutes)

app.listen(3000,()=>{
    console.log("Server is running at port 3000");
    
})

const express =require("express");

const app = express();
const customMiddleWare =(req,res,next)=>{
    //logic goes here

console.log(req.query.skip);
if(req.query.skip==="true"){
    next();
}
else{
    res.send("condiion failed");
}

    //if failure case
    //res.send("condition failed");

    //if success
    //next();
};

app.use(customMiddleWare);
app.use(express.json());


app.get("/home",(req,res)=>{
    res.send("Home Page");
});

const userRoutes =require("./routes/userRoutes");

app.use("/",userRoutes);
module.exports=app;
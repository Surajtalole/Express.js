const express = require("express");
const app =express();

const reqFilter = (reqobject,resobject,next)=>{
    console.log("reqFilter");
    next();
}

app.use(reqFilter)


app.get("/",(req,res)=>{
    res.send("Wellcome to My Page")
})


app.get("/home",(req,res)=>{
    res.send("Wellcome to home page")
})

app.listen(
   4000,
    ()=>console.log("Server is running on port no 4000")
);


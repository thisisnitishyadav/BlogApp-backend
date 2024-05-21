//initiate the server
const express=require("express");
const app=express();

require("dotenv").config();
const PORT =process.env.PORT ||3000;

//middleware
app.use(express.json());

//mount routes
const blog =require("./routes/blog");

app.use("/api/v1",blog);

//connect with db
const connectWithDb=require("./config/database");
connectWithDb();

//start the server
app.listen(PORT,()=>{
    console.log(`app is started at port no. ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send(`<h1>This is homepage babes</h1>`)
})

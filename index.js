const express = require("express");
const mDB = require("mongoose");
const url = "mongodb://localhost:27017/hospitalInventory";

const app = express();

mDB.connect(url, {useNewUrlParse:true});
const con = mDB.connection;

con.on('open', function(){
    console.log("Connected.....");
});

const hospInvRouter = require("./hospitalData");
app.use("/hospitalData", hospInvRouter);

app.listen(3000, function(){
    console.log("Server started");
});

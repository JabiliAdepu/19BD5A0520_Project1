const express = require("express");
const mDB = require("mongoose");
const url = "mongodb://localhost:27017/hospitalInventory";

const app = express();
app.use(express.json());
const con = mDB.connect(url, {useNewUrlParse:true});

con.then((db) => {
    console.log("Connected.....");
});

const hospInvRouter = require("./hospitalData");
app.use("/hospitalData", hospInvRouter);

app.listen(3000, function(){
    console.log("Server started");
});

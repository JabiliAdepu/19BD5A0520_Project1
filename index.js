const express = require("express");
const mDB = require("mongoose");
const url = "mongodb://localhost:27017/hospitalInventory";

mDB.set('useNewUrlParser', true);
mDB.set('useFindAndModify', false);
mDB.set('useCreateIndex', true);
mDB.set('useUnifiedTopology', true);

const app = express();
app.use(express.json());
const con = mDB.connect(url, {useNewUrlParse:true});

con.then((db) => {
    console.log("Connected.....");
});

const hospRouter = require("./routes/hospitalData");
app.use("/hospitalData", hospRouter);

const ventilatorRouter = require("./routes/ventilatorData");
app.use("/ventilatorData", ventilatorRouter);

app.listen(3000, function(){
    console.log("Server started");
});

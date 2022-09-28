const db = require("mongoose")
db.connect("mongodb://localhost/FastLink").then(()=>{console.log("connected to database");}).catch((err)=>{console.log(err);})


const dbschema = new db.Schema({
orginalurl: String,
shorturl: String,
datecreated: Number,
lastuseddate: Number
})

const urls = db.model("URL", dbschema)

module.exports = urls
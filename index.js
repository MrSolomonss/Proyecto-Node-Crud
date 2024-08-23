let cool = require("cool-ascii-faces");
let express = require("express");


 let app = express();

 const PORT = process.env.PORT || 10000;


app.use("/", express.static("./public"));



app.get("/cool", (req, res)=>{
    res.send(cool());
});
 app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}.`);

 });//tarda un ratito

console.log(`Server initializing...`);

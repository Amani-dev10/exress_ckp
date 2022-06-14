const express = require("express");

var app = express();
var PORT = 5000 ;
app.listen(PORT, (err) =>
err ? console.error(err) : console.log(`server is running on port ${PORT}`));

const date = new Date() 
const hours =new Hours ()

 const verif = (req,res,next) =>{
     if ((date >= 1 && date < 6) && ( 9<= hours <= 19)){
         console.log(<h1>hello</h1>)
         next();
     }else
     console.log("site fermé")
 }

  


app.get("/Home",verif,(req, res) => {
res.send(<h1>hello</h1>)
    }

   module.exports = server ;
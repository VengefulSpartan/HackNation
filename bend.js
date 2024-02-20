import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname=dirname(fileURLToPath(import.meta.url));
const app = express();
app.listen("3000",()=>{
    console.log("ready to roll")
});
app.get('/login.css', function(req, res) {
    res.sendFile(__dirname + "/" + "login.css");
  });
  app.get('/image.jpeg', function(req, res) {
    res.sendFile(__dirname + "/" + "image.jpeg");
  });
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/login.html");
});

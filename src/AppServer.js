let express = require('express');

let app = express();

app.get("/1.html", (req, res)=>{
  let output = {"title" : "Atom Editor, Atom Bomb se kam hai kya!!!"};
  res.json(output);
});

app.listen(3001, ()=>{
  console.log("Server Started @3001 Port.");
});

var express = require("express");
var path = require("path");
var fs = require ("fs")
var db = require ("./db/db")
var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
console.log(db);
//GET /notes - Should return the notes.html file.

    // res.sendFile(path.join(__dirname, "notes.html"));

    // console.log( "these are the notes");
  

// //GET * - Should return the index.html file
// app.get("api")   

// url: "/api/notes",

app.get("/", function(req, res) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname,"public/index.html"));
    console.log(req, res)
  });

app.get("/api/notes", function(req, res){
    res.json(db)
    
});

app.post("/api/notes", function(req,res) {
  db.push(req.body);
  fs.writeFile("./db/db.json", JSON.stringify(db), function(){
    res.send('Added');
  })
})

app.delete("/api/notes/:id", function(req,res) {
  req.params.id
  console.log(req.params.id)
  //db[req.params.id] = null;
  db.splice(req.params.id, 1);
  // db.push(req.body);
  fs.writeFile("./db/db.json", JSON.stringify(db), function(){
    res.send('Added');
  })
})






 // button should fire this for notes, connect note page)
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));

    console.log( "these are the notes")
  });

// //GET * - Should return the index.html file
// app.get("api")   

// url: "/api/notes",

// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
//   });

// app.get("/api/notes", function(req, res){
//     fs.readFile(funciton(err, result));
//     res.json()
// });


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });







  //ajax call to db for id
  //jquery change
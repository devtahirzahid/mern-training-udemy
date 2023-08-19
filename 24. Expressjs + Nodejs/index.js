import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

app.put("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

// 1
// app.get("/", (req, res) => {
//     res.send("<h1>Hello Browser!!!</h1>")
//     // res.send("Hello Browser!!!")
//     // console.log(req.rawHeaders);
// });

// app.get("/home", (req, res) => {
//     res.send("<h3>Hello Browser from my home request</h3><p>Welcome Home!</p>")
// });

// app.get("/about", (req, res) => {
//     res.send("<h2>Contact @03064446763!</h2><p>My name is Tahir Zahid. :)</p>")
// });

app.listen(port, ()=> {
   console.log(`first server of tahir running on ${port}!`)
});
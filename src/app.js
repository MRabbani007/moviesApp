// Import express
import express from "express";
// Import Mongodb
// import collection from "./mongo.js";

// Create express app
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.send("hello world");
});

app.post("/", (req, res) => {
  res.send("hello");
});

app.get("/signin/", (req, res) => {
  console.log(req.body);
  res.json("hello world");
});

app.post("/signin/", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.json("received");
  // try {
  //   const check = await collection.findOne({ email: email });
  //   if (check) {
  //     res.json("exist");
  //   } else {
  //     res.json("notexist");
  //   }
  // } catch (e) {
  //   res.json("error");
  // }
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const data = {
    email: email,
    password: password,
  };
  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      res.json("alreadyexist");
    } else {
      await collection.insertOne([data]);
      res.json("added");
    }
  } catch (e) {
    res.json("error");
  }
});

app.listen(PORT, () => {
  console.log("port connected", PORT);
});

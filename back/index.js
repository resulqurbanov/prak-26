const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json());

const { Schema } = mongoose;

const userSchema = Schema({
  imageUrl: { type: String },
  description: { type: String },
  title: { type: String },
  price: { type: Number },
});

const Users = mongoose.model("mehsul", userSchema);

app.get("/", (req, res) => {
  res.send("basladi eeeeeeeeee");
});

app.get("/mehsul", (req, res) => {
  Users.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(404).json({ message: err });
    }
  });
});

app.get("/mehsul/:id", (req, res) => {
  const { id } = req.params;
  Users.findById(id, (err, doc) => {
    if (!err) {
      if (doc) {
        res.send(doc);
      }
    } else {
      res.status(404).json({ message: err });
    }
  });
});

app.delete("/mehsul/:id", (req, res) => {
  const { id } = req.params;

  Users.findByIdAndDelete(id, (err, doc) => {
    if (!err) {
      res.send("Succesfully deleted");
    } else {
      res.status(404).json({ message: err });
    }
  });
});

app.post("/mehsul", (req, res) => {
  const obj = {
    imageUrl: req.body.imageUrl,
    description: req.body.description,
    title: req.body.title,
    price: req.body.price,
  };
  console.log(obj);
  let user = new Users(obj);
  user.save();

  res.send({ message: " Succesfully added" });
});

const PORT = process.env.PORT;

const url = process.env.URL.replace("<password>", process.env.PASSWORD);
mongoose.set("strictQuery", true);

mongoose.connect(url, (err) => {
  if (!err) {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log("Server start");
    });
  }
});

import express from "express";
import db from "./connection.js";

const app = express();

//Get all episodes
app.get("/episodes", async (request, response, next) => {
  try {
    const results = await db.collection("episodes").find({}).toArray();
    // console.log("results : ", results);
    response.status(200).json(results);
  } catch (error) {
    next(error);
  }
});

//Get all letters
app.get("/letters", async (request, response, next) => {
  try {
    const results = await db
      .collection("letters")
      .find({ publish: true })
      .toArray();
    // console.log("results : ", results);
    response.status(200).json(results);
  } catch (error) {
    next(error);
  }
});

//Add-one-memory
app.post("/add-one-memory", async (req, res, next) => {
  const { title, body, author } = req.body;
  console.log(title, body, author);
  try {
    if (!title || !body || !author) {
      return res.status(400).send("Error : Missing required fields!");
    } else {
      console.log(title, body, author);
      let collection = await db.collection("letters");
      const results = await collection.insertOne({
        title: title,
        body: body,
        author: author,
        publish: false,
      });
      console.log(`${results.insertedId} inserted`);
      const inserted = await collection.findOne({ _id: results.insertedId });
      res.status(201).json(inserted);
    }
  } catch (error) {
    next(error);
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || "Internal Server Error",
    },
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hi, Server is ON!");
});

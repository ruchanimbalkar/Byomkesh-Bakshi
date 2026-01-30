import express from "express";
import db from "./connection.js";

const app = express();

//Get all episodes
app.get("/episodes", async (request, response, next) => {
  try {
    const results = await db.collection("episodes").find({}).toArray();
    console.log("results", results);
    response.status(200).json(results);
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

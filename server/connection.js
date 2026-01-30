import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import documents from "./data.js";

dotenv.config();
const uri = process.env.ATLAS_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("byomkeshbakshi_dd");
    const episodes = database.collection("episodes");
    const result = await episodes.insertMany(documents);
    console.log(`${result.insertedCount} documents were inserted!`);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

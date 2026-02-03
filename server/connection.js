import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import documents from "./data.js";
dotenv.config();
const uri = process.env.ATLAS_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

let connection;
try {
  connection = await client.connect();
  console.log("connected!");
} catch (error) {
  console.log(error);
}

const db = connection.db("byomkeshbakshi_ddserial");

export default db;

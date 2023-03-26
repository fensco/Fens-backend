import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 3500;

app.get("/", (req, res) => {
  console.log(`Starting...`);
});

app.listen(port, () => {
  console.log(`At port ${port}`);
});

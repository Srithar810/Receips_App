import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbConfig.js";
import receipeRouter from "./Routers/receipeRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

//  check route
app.get("/", (req, res) => {
  res.status(200).send("Welcome To our Backend");
});

// recipe routes
app.use("/api/receipes", receipeRouter);

// Use .env port or fallback to 5000
const port = process.env.PORT || 5000;

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(port, () => {
      console.log(`Server is successfully listening on port ${port}...`);
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected! " + err.message);
  });

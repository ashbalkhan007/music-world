require("dotenv").config();

const express = require("express");
const app = express();

const router = require("./router/auth-router");

const connectDb = require("./utils/db");

//Middleware
app.use(express.json());
//Middleware
app.use("/api/auth", router);

const PORT = process.env.PORT || 5001;
connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Listen on PORT: ${PORT}`);
      console.log(`http://localhost:${PORT}/api/auth`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

const express = require("express");
const cors = require("cors");
const counterRouter = require("./routes/counterRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", counterRouter);

module.exports = app;

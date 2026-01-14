const express = require("express");
const app = express();

app.use(express.json());
const tourRouter = require("./Routes/tourRoutes");
const userRouter = require("./Routes/userRoutes");

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;

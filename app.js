const express = require("express");
const app = express();
const PORT = 1414;

const tourRouter = require("./Routes/tourRoutes");
const userRouter = require("./Routes/userRoutes");

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});

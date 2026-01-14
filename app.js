const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 1414;
app.use(express.json());
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`),
);

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "Success",
    result: tours.length,
    data: {
      tours,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});

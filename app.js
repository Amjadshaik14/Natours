const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 1414;
app.use(express.json());
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`),
);

// GET Method to get all tours
app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "Success",
    result: tours.length,
    data: {
      tours,
    },
  });
});

// POST Method to create a tour
app.post("/api/v1/tours", (req, res) => {
  console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: "Success",
        data: {
          tour: newTour,
        },
      });
    },
  );
});

// GET method with an id parameter to get a specific tour

app.get("/api/v1/tours/:id", (req, res) => {
  console.log(req.params); // {id: "4"}
  const id = req.params.id * 1; // This is to convert the id from a string to an int.
  if (id > tours.length) {
    return res.status(404).json({
      status: "Failed",
      message: "Invalid ID",
    });
  }
  const tour = tours.find((el) => el.id === id);
  res.status(200).json({
    status: "Success",
    data: {
      // tour: tours[req.params.id], // you can also do this assuming that all the data is in ascending order sorted by id.
      tour,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});

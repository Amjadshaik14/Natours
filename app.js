const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 1414;
app.use(express.json());
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`),
);

// GET Method to get all tours

const getAllTours = (req, res) => {
  res.status(200).json({
    status: "Success",
    result: tours.length,
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
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
};

const createTour = (req, res) => {
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
};

const updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "Failed",
      messge: "Invalid ID",
    });
  }

  res.status(200).json({
    status: "Success",
    tour: "<---Your updated tour here--->",
  });
};

const deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "Failed",
      messge: "Invalid ID",
    });
  }

  res.status(204).json({
    status: "Success",
    data: null,
  });
};

// app.get("/api/v1/tours", getAllTours);

// POST Method to create a tour
// app.post("/api/v1/tours", createTour);

// GET method with an id parameter to get a specific tour

// app.get("/api/v1/tours/:id", getTour);

// PATCH method to update a specific tour

// app.patch("/api/v1/tours/:id", updateTour);

// DELETE method to delete a tour
// app.delete("/api/v1/tours/:id", deleteTour);

app.route("/api/v1/tours").get(getAllTours).post(createTour);
app
  .route("/api/v1/tours/:id")
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});

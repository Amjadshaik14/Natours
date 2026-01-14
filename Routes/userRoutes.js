const express = require("express");
const router = express.Router();

// Users Routes
const getAllUsers = (req, res) => {
  res.status(500).json({
    status: "Error",
    message: "This route is not yet defined!",
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: "Error",
    message: "This route is not yet defined!",
  });
};
// app.get("/api/v1/tours", getAllTours);
const createUser = (req, res) => {
  res.status(500).json({
    status: "Error",
    message: "This route is not yet defined!",
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: "Error",
    message: "This route is not yet defined!",
  });
};
// POST Method to create a tour
const deleteUser = (req, res) => {
  res.status(500).json({
    status: "Error",
    message: "This route is not yet defined!",
  });
};

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;

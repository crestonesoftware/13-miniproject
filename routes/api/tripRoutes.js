const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Traveller, Location, Trip } = require("../../models");

router.delete("/:id", async (req, res) => {
  const typeData = Trip.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(typeData);
});

router.post("/", async (req, res) => {
  const typeData = Trip.create({
    traveller_id: req.body.traveller_id,
    location_id: req.body.location_id,
    trip_budget: req.body.trip_budget,
    traveller_amount: req.body.traveller_amount,
  });
  res.status(200).json(typeData);
});

module.exports = router;

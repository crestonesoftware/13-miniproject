const router = require("express").Router();
const { Model } = require("sequelize");
const sequelize = require("../../config/connection");
const { Location, Traveller, Trip } = require("../../models");

router.get("/", async (req, res) => {
  const typeData = await Location.findAll();
  res.status(200).json(typeData);
});

router.get("/:id", async (req, res) => {
  const typeData = await Location.findByPk(req.params.id, {
    include: [{ model: Traveller }],
  });
  res.status(200).json(typeData);
});

router.post("/", async (req, res) => {
  const typeData = await Location.create({
    location_name: req.body.location_name,
  });
  res.status(200).json(typeData);
});

router.delete("/:id", async (req, res) => {
  const typeData = await Location.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(typeData);
});

module.exports = router;

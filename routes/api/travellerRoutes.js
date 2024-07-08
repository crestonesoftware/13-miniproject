const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Traveller, Location, Trip } = require("../../models");

router.get("/", async (req, res) => {
  const typeData = await Traveller.findAll();
  res.status(200).json(typeData);
});

router.get("/:id", async (req, res) => {
  const typeData = await Traveller.findByPk(
    req.params.id,

    {
      include: [{ model: Location }],
    }
  );
  res.status(200).json(typeData);
});

router.post("/", async (req, res) => {
  const typeData = await Traveller.create({
    name: req.body.name,
    email: req.body.email,
  });
  res.status(200).json(typeData);
});

router.delete("/:id", async (req, res) => {
  const typeData = await Traveller.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(typeData);
});

module.exports = router;

const Traveller = require("./travellers");
const Location = require("./locations");
const Trip = require("./trips");

Traveller.belongsToMany(Location, {
  through: {
    model: Trip,
    unique: false,
  },
});
Location.belongsToMany(Traveller, {
  through: {
    model: Trip,
    unique: false,
  },
});

module.exports = { Traveller, Location, Trip };

const { User } = require("../models");

const userdata = [
  {
    username: "DarthGary",
    password: "password1",
  },
  {
    username: "CommanderSarah",
    password: "password2",
  },
  {
    username: "JediPete",
    password: "password3",
  },
  {
    username: "GeneralCarol",
    password: "password4",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
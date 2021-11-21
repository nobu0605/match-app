var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const { UserModel } = require("../models/user-model");

const getUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
    const user = await UserModel.find({}).exec();

    return user;
  } catch (error) {
    console.error(error);
  }
};

router.get("/", async function (req, res, next) {
  const users = await getUsers();

  res.status(200).send(users);
});

module.exports = router;

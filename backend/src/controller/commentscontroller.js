const { UseComments } = require("../models/commentsmodel");

exports.createAnewComment = async (req, res) => {
  try {
    const newcomment = new UseComments(req.body);
    await newcomment.save();
    res.status(201).send(newcomment);
  } catch (error) {
    res.status(400).send(error);
  }
};

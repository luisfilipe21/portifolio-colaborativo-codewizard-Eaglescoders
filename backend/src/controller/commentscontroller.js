const { UseComments } = require("../models/commentsmodel");

exports.createAnewComment = async (req, res) => {
  try {
    const newcomment = new UseComments(req.body);
    await newcomment.save();
    res.status(201).send(newcomment);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.getAllComments = async (req, res) => {
  try {
    const getcomments = await UseComments.find()
    res.status(200).send(getcomments)
    console.log("Dados Obtidos com Sucesso")
  } catch (error) {
    console.error("Falha ao Obter dados", error)
    res.status(500).send({ error: error.message })
  }
}

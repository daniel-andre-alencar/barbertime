const Servico = require("../models/servicos.js");

exports.getServico = async (req, res) => {
  try {
    const servicos = await Servico.ServicoModel.find();
    res.json(servicos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getServicoId = async (req, res) => {
  try {
    res.status(201).json(await Servico.ServicoModel.findById(req.params.id));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createServico = async (req, res) => {
  try {
    res.status(201).json(await Servico.ServicoModel.create(req.body));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateServico = async (req, res) => {
  try {
    res
      .status(201)
      .json(await Servico.ServicoModel.findByIdAndUpdate(req.params.id, req.body));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteServico = async (req, res) => {
  try {
    res.status(201).json(await Servico.ServicoModel.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

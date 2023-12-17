import { Request, Response } from "express";
const BloodType = require("../models/bloodType");

exports.getBloodTypes = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const response = await BloodType.find(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addBloodType = async (req: Request, res: Response) => {
  try {
    const bloodType = new BloodType(req.body.tipo, req.body.fator);
    await bloodType.save();
    res.status(201).json({ message: "Tipo sanguíneo adicionado com sucesso!" });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.updateBloodType = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const bloodType = new BloodType(req.body.tipo, req.body.fator);
    await bloodType.update(id);
    res.status(200).json({ message: "Tipo sanguíneo atualizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteBloodType = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await BloodType.delete(id);
    if (result.affectedRows === 0) {
      throw new Error("Tipo sanguíneo não encontrado");
    }
    res.status(200).json({ message: "Tipo sanguíneo deletado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

import { Request, Response } from "express";

const Donation = require("../models/donation");

exports.addDonation = async (req: Request, res: Response) => {
  try {
    const donation = new Donation(
      req.body.pessoaId,
      req.body.localId,
      req.body.data
    );

    const data = await donation.save();
    if (data.affectedRows === 0) {
      throw new Error("Erro ao adicionar doação");
    }
    res.status(201).json({ message: "Doação adicionada com sucesso!", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDonation = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const response = await Donation.find(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateDonation = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const donation = new Donation(
      req.body.pessoaId,
      req.body.localId,
      req.body.data
    );
    const result = await donation.update(id);
    if (result.affectedRows === 0) {
      throw new Error("Doação não encontrada");
    }
    res.status(200).json({ message: "Doação atualizada com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteDonation = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await Donation.delete(id);
    if (result.affectedRows === 0) {
      throw new Error("Doação não encontrada");
    }
    res.status(200).json({ message: "Doação deletada com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

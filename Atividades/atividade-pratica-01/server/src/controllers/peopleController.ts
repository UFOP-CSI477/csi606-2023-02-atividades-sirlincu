const People = require("../models/people");
import { Request, Response } from "express";

exports.getPeople = async (req: Request, res: Response) => {
  try {
    let [result, _] = await People.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addPeople = async (req: Request, res: Response) => {
  try {
    let result = new People(
      req.body.nome,
      req.body.rua,
      req.body.numero,
      req.body.complemento,
      req.body.rg,
      req.body.cidade_id,
      req.body.tipo_id
    );

    await result.save();
    res.status(201).json({ message: "Pessoa adicionada com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePeople = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    let result = new People(
      req.body.nome,
      req.body.rua,
      req.body.numero,
      req.body.complemento,
      req.body.rg,
      req.body.cidade_id,
      req.body.tipo_id
    );

    const data = await result.update(id);

    if (data.affectedRows === 0) {
      throw new Error("Pessoa não encontrada");
    }

    res.status(200).json({ message: "Pessoa atualizada com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePeople = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await People.delete(id);
    res.status(200).json({ message: "Pessoa deletada com sucesso!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

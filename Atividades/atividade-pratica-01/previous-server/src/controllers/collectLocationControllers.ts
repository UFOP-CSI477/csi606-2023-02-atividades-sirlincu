import { Request, Response } from "express";
const CollectLocation = require("../models/collectLocation");

exports.addCollectLocation = async (req: Request, res: Response) => {
  try {
    const collectLocation = new CollectLocation(
      req.body.nome,
      req.body.rua,
      req.body.numero,
      req.body.complemento,
      req.body.cidade_id
    );
    await collectLocation.save();
    res
      .status(201)
      .json({ message: "Local de coleta adicionado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCollectLocation = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = await CollectLocation.get(id);

    if (data.length === 0) {
      throw new Error("Local de coleta não encontrado");
    }
    res
      .status(200)
      .json({ message: "Local de coleta encontrado com sucesso!", data: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCollectLocation = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const collectLocation = new CollectLocation(
      req.body.nome,
      req.body.rua,
      req.body.numero,
      req.body.complemento,
      req.body.cidade_id
    );
    const data = await collectLocation.update(id);

    if (data.affectedRows === 0) {
      throw new Error("Local de coleta não encontrado");
    }

    res
      .status(200)
      .json({ message: "Local de coleta atualizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteCollectLocation = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await CollectLocation.delete(id);
    if (result.affectedRows === 0) {
      throw new Error("Local de coleta não encontrado");
    }
    res.status(200).json({ message: "Local de coleta deletado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

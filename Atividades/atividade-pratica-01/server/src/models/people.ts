const db = require("../config/database");
const DateTime = require("../utils/getDateTime");

class People {
  nome: string;
  rua: string;
  numero: number;
  complemento: string;
  rg: string;
  cidade_id: number;
  tipo_id: number;

  constructor(
    nome: string,
    rua: string,
    numero: number,
    complemento: string,
    rg: string,
    cidade_id: number,
    tipo_id: number
  ) {
    this.nome = nome;
    this.rua = rua;
    this.numero = numero;
    this.complemento = complemento;
    this.rg = rg;
    this.cidade_id = cidade_id;
    this.tipo_id = tipo_id;
  }

  static findAll() {
    try {
      const sql = `SELECT * FROM pessoas`;

      return db.execute(sql);
    } catch (error) {
      throw error;
    }
  }

  async save() {
    try {
      const createdAt = DateTime.getDateTime();
      const updatedAt = createdAt;

      const sql = `
      INSERT INTO pessoas (nome, rua, numero, complemento, rg, cidade_id, tipo_id, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      const [result, _] = await db.execute(sql, [
        this.nome,
        this.rua,
        this.numero,
        this.complemento,
        this.rg,
        this.cidade_id,
        this.tipo_id,
        createdAt,
        updatedAt,
      ]);

      return result;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number) {
    const updatedAt = DateTime.getDateTime();

    try {
      const sql = `
      UPDATE pessoas
      SET
          nome = ?,
          rua = ?,
          numero = ?,
          complemento = ?,
          rg = ?,
          cidade_id = ?,
          tipo_id = ?,
          updated_at = ?
      WHERE id = ?`;

      const [result, _] = await db.execute(sql, [
        this.nome,
        this.rua,
        this.numero,
        this.complemento,
        this.rg,
        this.cidade_id,
        this.tipo_id,
        updatedAt,
        id,
      ]);

      return result;
    } catch (error) {
      throw error;
    }
  }

  static delete(id: number) {
    try {
      const sql = `DELETE FROM pessoas WHERE id = ?`;

      return db.execute(sql, [id]);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = People;

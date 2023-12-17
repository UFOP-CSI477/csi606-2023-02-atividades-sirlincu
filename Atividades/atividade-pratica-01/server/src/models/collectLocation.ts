const db = require("../config/database");
const DateTime = require("../utils/getDateTime");

class CollectLocation {
  nome: string;
  rua: string;
  complemento: string;
  numero: number;
  cidadeId: number;

  constructor(
    nome: string,
    rua: string,
    complemento: string,
    numero: number,
    cidadeId: number
  ) {
    this.nome = nome;
    this.rua = rua;
    this.complemento = complemento;
    this.numero = numero;
    this.cidadeId = cidadeId;
  }

  static async get(id?: number) {
    try {
      if (id) {
        const sql = `SELECT * FROM locais_coleta WHERE id = ?`;
        const [result, _] = await db.execute(sql, [id]);
        return result;
      }

      const sql = `SELECT * FROM locais_coleta`;
      const [result, _] = await db.execute(sql);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async save() {
    const createdAt = DateTime.getDateTime();
    const updatedAt = createdAt;

    try {
      const sql = `INSERT INTO locais_coleta (nome, rua, numero, complemento, cidade_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)`;
      const [result, _] = await db.execute(sql, [
        this.nome,
        this.rua,
        this.complemento,
        this.numero,
        this.cidadeId,
        createdAt,
        updatedAt,
      ]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number) {
    try {
      const sql = `UPDATE locais_coleta SET nome = ?, rua = ?, numero = ?, complemento = ?, cidade_id = ? WHERE id = ?`;
      const [result, _] = await db.execute(sql, [
        this.nome,
        this.rua,
        this.numero,
        this.complemento,
        this.cidadeId,
        id,
      ]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number) {
    try {
      if (id) {
        const sql = `DELETE FROM locais_coleta WHERE id = ?`;
        const [result, _] = await db.execute(sql, [id]);
        return result;
      } else {
        const sql = `DELETE FROM locais_coleta`;
        const [result, _] = await db.execute(sql);
        return result;
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CollectLocation;

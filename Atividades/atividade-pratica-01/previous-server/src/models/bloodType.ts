const db = require("../config/database");
const DateTime = require("../utils/getDateTime");

type Tipo = "A" | "B" | "AB" | "O";
type Fator = "POSITIVO" | "NEGATIVO";

class BloodType {
  tipo: Tipo;
  fator: Fator;

  constructor(tipo: Tipo, fator: Fator) {
    this.tipo = tipo;
    this.fator = fator;
  }

  static async find(id?: number) {
    try {
      if (id) {
        const sql = `SELECT * FROM tipos_sanguineos WHERE id = ?`;
        const [result, _] = await db.execute(sql, [id]);
        return result;
      }

      const sql = `SELECT * FROM tipos_sanguineos`;

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
      const sql = `INSERT INTO tipos_sanguineos (tipo, fator, created_at, updated_at) VALUES (?, ?, ?, ?)`;
      const [result, _] = await db.execute(sql, [
        this.tipo,
        this.fator,
        createdAt,
        updatedAt,
      ]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number) {
    const date = DateTime.getDateTime();
    const updatedAt = date;

    try {
      const sql = `UPDATE tipos_sanguineos SET tipo = ?, fator = ?, updated_at = ? WHERE id = ?`;
      const [result, _] = await db.execute(sql, [
        this.tipo,
        this.fator,
        updatedAt,
        id,
      ]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id: number) {
    try {
      if (id) {
        const sql = `DELETE FROM tipos_sanguineos WHERE id = ?`;
        const [result, _] = await db.execute(sql, [id]);
        return result;
      }
      const sql = `DELETE FROM tipos_sanguineos`;
      const [result, _] = await db.execute(sql);

      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BloodType;

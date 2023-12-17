const db = require("../config/database");
const DateTime = require("../utils/getDateTime");

class Donation {
  pessoaId: number;
  localId: number;
  data: Date;

  constructor(pessoaId: number, localId: number, data: Date) {
    this.pessoaId = pessoaId;
    this.localId = localId;
    this.data = data;
  }

  async find(id?: number) {
    try {
      if (id) {
        const sql = `SELECT * FROM doacoes WHERE id = ?`;
        const [result, _] = await db.execute(sql, [id]);
        return result;
      }

      const sql = `SELECT * FROM doacoes`;

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
      const sql = `INSERT INTO doacoes (pessoa_id, local_id, data, created_at, updated_at) VALUES (?, ?, ?, ?, ?)`;
      const [result, _] = await db.execute(sql, [
        this.pessoaId,
        this.localId,
        this.data,
        createdAt,
        updatedAt,
      ]);
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number) {
    const date = DateTime.getDateTime();
    const updatedAt = date;

    try {
      const sql = `UPDATE doacoes SET pessoa_id = ?, local_id = ?, data = ?, updated_at = ? WHERE id = ?`;
      const [result, _] = await db.execute(sql, [
        this.pessoaId,
        this.localId,
        this.data,
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
      const sql = `DELETE FROM doacoes WHERE id = ?`;
      const [result, _] = await db.execute(sql, [id]);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Donation;

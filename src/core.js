import mysql from "mysql2";
import dotenv from "dotenv";
import _ from "jquery";
import constant from "./constant.js";

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

// Custom (không chỉnh sửa đoạn code bên dưới)
export const getAll = (res, tableName, queryCondition) => {
  const query = `SELECT * FROM ${tableName}`;
  query += queryCondition;
  connection.query(query, (error, results) => {
    if (error) {
      console.error(`Error querying get all table name ${tableName}`, error);
      res.status(500).json({
        query: `Error querying get all table name ${tableName}`,
        msg: constant.msg.SERVER_ERROR,
      });
      return;
    }
    return res
      .status(200)
      .json({ msg: constant.msg.GET_SUCCESS, data: results });
  });
}

export const getByID = (req, res, tableName) => {
  if (
    req.query.id === undefined ||
    req.query.id === null ||
    req.query.id === ""
  ) {
    console.error(`Error querying get by id table name ${tableName}`);
    res.status(500).json({
      query: `Error querying get by id table name ${tableName}`,
      msg: constant.msg.SERVER_ERROR,
    });
    return;
  }

  connection.query(
    `SELECT * FROM ${tableName} WHERE ${req.query.id}`,
    (error, results) => {
      if (error) {
        console.error(
          `Error querying get by id table name ${tableName}`,
          error
        );
        res.status(500).json({
          query: `Error querying get by id table name ${tableName}`,
          msg: constant.msg.SERVER_ERROR,
        });
        return;
      }
      return res
        .status(200)
        .json({ msg: constant.msg.GET_SUCCESS, data: results });
    }
  );
}

export const deleteByID = (req, res, tableName) => {
  if (
    req.query.id === undefined ||
    req.query.id === null ||
    req.query.id === ""
  ) {
    console.error(`Error querying delete by id table name ${tableName}`);
    res.status(500).json({
      query: `Error querying delete by id table name ${tableName}`,
      msg: constant.msg.SERVER_ERROR,
    });
    return;
  }

  connection.query(
    `DELETE FROM ${tableName} WHERE id = ?`,
    req.query.id,
    (error, results) => {
      if (error) {
        console.error(
          `Error querying delete by id table name ${tableName}`,
          error
        );
        res.status(500).json({
          query: `Error querying delete by id table name ${tableName}`,
          msg: constant.msg.SERVER_ERROR,
        });
        return;
      }
      return res.status(200).json({ msg: constant.msg.DELETE_SUCCESS });
    }
  );
}

export const create = (req, res, tableName, newData) => {
  for (let key in newData) {
    if (
      newData[key] === undefined ||
      newData[key] === null ||
      newData[key] === ""
    ) {
      console.error(`Error querying create data table name ${tableName}`);
      res.status(500).json({ msg: constant.msg.SERVER_ERROR });
      return;
    }
  }

  connection.query(
    `INSERT INTO ${tableName} SET ?`,
    newData,
    (error, result) => {
      if (error) {
        console.error("Error creating role:", error);
        res.status(500).json({
          query: `Error querying create data table name ${tableName}`,
          msg: constant.msg.SERVER_ERROR,
        });
        return;
      }

      res.json({
        message: constant.msg.CREATE_SUCCESS,
        newDataId: result.insertId,
      });
    }
  );
}

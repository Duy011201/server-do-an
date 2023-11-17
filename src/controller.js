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
function getAll(res, tableName) {
  connection.query(`SELECT * FROM ${tableName}`, (error, results) => {
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

function getByID(req, res, tableName) {
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

function deleteByID(req, res, tableName) {
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

function create(req, res, tableName, newData) {
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
















// Role
export const getAllRole = (req, res) => {
  return getAll(res, constant.tableNameBD.ROLES);
};

export const getByRoleID = (req, res) => {
  return getByID(req, res, constant.tableNameBD.ROLES);
};

export const createRole = (req, res) => {
  const newRole = {
    code: req.body.code,
  };

  return create(req, res, constant.tableNameBD.ROLES, newRole);
};

// CommentReview
export const getAllComment = (req, res) => {
  return getAll(res, constant.tableNameBD.COMMENTS);
};

export const getCommentByID = (req, res) => {
  return getByID(req, res, constant.tableNameBD.COMMENTS);
};

export const deleteCommentByID = (req, res) => {
  return deleteByID(req, res, constant.tableNameBD.COMMENTS);
};

export const createComment = (req, res) => {
  const newComment = {
    userID: req.body.userID,
    productID: req.body.productID,
    noiDung: req.body.noiDung,
  };

  return create(req, res, constant.tableNameBD.COMMENTS, newComment);
};

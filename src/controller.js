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

// Role
export const getAllRole = (req, res) => {
  connection.query("SELECT * FROM roles", (error, results) => {
    if (error) {
      console.error("Error querying roles:", error);
      res.status(500).json(constant.msg.SERVER_ERROR);
      return;
    }
    return res
      .status(200)
      .json({ msg: constant.msg.GET_SUCCESS, data: results });
  });
};

export const getCreateRole = (req, res) => {
  const roleData = {
    code: req.body.code,
  };

  if (
    roleData.code === undefined ||
    roleData.code === null ||
    roleData.code === ""
  ) {
    return res.status(500).json(constant.msg.SERVER_ERROR);
  }

  connection.query("INSERT INTO roles SET ?", roleData, (error, result) => {
    if (error) {
      console.error("Error creating role:", error);
      res.status(500).send(constant.msg.SERVER_ERROR);
      return;
    }

    res.json({
      message: constant.msg.GET_SUCCESS,
      newRoleId: result.insertId,
    });
  });
};

// CommentReview

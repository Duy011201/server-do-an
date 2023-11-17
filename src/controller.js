import constant from "./constant.js";
import { getAll, getByID, create, deleteByID } from "./core.js";

// Role
export const getAllRole = (req, res) => {
  const queryCondition = "";
  return getAll(res, constant.tableNameBD.ROLES, queryCondition);
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
  const queryCondition = "";
  return getAll(res, constant.tableNameBD.COMMENTS, queryCondition);
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
    status: constant.commentStatus.PENDING,
  };

  return create(req, res, constant.tableNameBD.COMMENTS, newComment);
};

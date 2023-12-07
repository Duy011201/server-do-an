import express from "express";
import {
  getAllRole,
  createRole,
  getAllComment,
  createComment,
  getByRoleID,
  getCommentByID,
  updateCommentByID,
  deleteCommentByID,
  createProduct,
  getAllProduct,
  Login,
  createLogin,
  getAllLogin,
} from "./controller.js";

const router = express.Router();
//LOGIN
router.post("/login", Login);
router.post("/login/create", createLogin);
router.get("/login/all", getAllLogin);

// Role
router.get("/role/all", getAllRole);
router.get("/role", getByRoleID);
router.post("/role/create", createRole);

// CommentReview
router.get("/comment/all", getAllComment);
router.get("/comment", getCommentByID);
router.post("/comment/update", updateCommentByID);
router.post("/comment/create", createComment);
router.post("/comment/delete", deleteCommentByID);

// Product
router.post("/product/create", createProduct);
router.get("/product/all", getAllProduct);

// router.post("/comment/update", getUpdateComment);
// router.post("/comment/update", getDeleteComment);

export default router;

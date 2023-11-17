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
} from "./controller.js";

const router = express.Router();

// Role
router.get("/role/all", getAllRole);
router.get("/role", getByRoleID);
router.post("/role/create", createRole);

// CommentReview
router.get("/comment/all", getAllComment);
router.get("/comment", getCommentByID);
router.put("/comment/update", updateCommentByID);
router.post("/comment/create", createComment);
router.delete("/comment", deleteCommentByID);

// Product
router.post("/product", createProduct);
router.get("/product/all", getAllProduct);

// router.post("/comment/update", getUpdateComment);
// router.post("/comment/update", getDeleteComment);

export default router;

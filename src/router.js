import express from "express";
import {
  getAllRole,
  createRole,
  getAllComment,
  createComment,
  getByRoleID,
  getCommentByID,
  deleteCommentByID,
} from "./controller.js";

const router = express.Router();

// Role
router.get("/role/all", getAllRole);
router.get("/role", getByRoleID);
router.post("/role/create", createRole);

// CommentReview
router.get("/comment/all", getAllComment);
router.get("/comment", getCommentByID);
router.post("/comment/create", createComment);
router.delete("/comment", deleteCommentByID);

// router.post("/comment/update", getUpdateComment);
// router.post("/comment/update", getDeleteComment);

export default router;

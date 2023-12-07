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

  getAllPromotion,
  createPromotion,
  getPromotionByID,
  updatePromotionByID,
  deletePromotionByID,

  Login,
} from "./controller.js";

const router = express.Router();
//Login
router.post("/login", Login);

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


// Promotion
router.post("/promotion/all", getAllPromotion);
router.post("/promotion", getPromotionByID);
router.post("/promotion/update", updatePromotionByID);
router.post("/promotion/create", createPromotion);
router.post("/promotion/delete", deletePromotionByID);


export default router;

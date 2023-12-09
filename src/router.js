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
  deleteSupplierByID,
  createSupplier,
  updateSupplierByID,
  getSupplierByID,
  getAllSupplier,
} from "./controller.js";

const router = express.Router();
//LOGIN
router.post("/login", Login);
router.post("/login/create", createLogin);
router.get("/login/all", getAllLogin);

// Role
router.post("/role/all", getAllRole);
router.post("/role", getByRoleID);
router.post("/role/create", createRole);

// CommentReview
router.post("/comment/all", getAllComment);
router.post("/comment", getCommentByID);
router.post("/comment/update", updateCommentByID);
router.post("/comment/create", createComment);
router.post("/comment/delete", deleteCommentByID);

// Supplier
router.post("/supplier/all", getAllSupplier);
router.post("/supplier", getSupplierByID);
router.post("/supplier/update", updateSupplierByID);
router.post("/supplier/create", createSupplier);
router.post("/supplier/delete", deleteSupplierByID);

// Product
router.post("/product/create", createProduct);
router.post("/product/all", getAllProduct);

// router.post("/comment/update", getUpdateComment);
// router.post("/comment/update", getDeleteComment);

export default router;

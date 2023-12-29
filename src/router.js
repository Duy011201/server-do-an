import express from "express";
import {
  getAllUser,
  createUser,
  updateUserByID,
  deleteUserByID,
  getAllRole,
  createRole,
  updateRoleByID,
  deleteRoleByID,
  getAllComment,
  createComment,
  getByRoleID,
  getCommentByID,
  updateCommentByID,
  deleteCommentByID,
  createProduct,
  getAllProduct,
  deleteSupplierByID,
  createSupplier,
  updateSupplierByID,
  getSupplierByID,
  getAllSupplier,
} from "./controller.js";

const router = express.Router();

// User
router.post("/user/all", getAllUser);
router.post("/user/create", createUser);
router.post("/user/update", updateUserByID);
router.post("/user/delete", deleteUserByID);

// Role
router.post("/role/all", getAllRole);
router.post("/role", getByRoleID);
router.post("/role/create", createRole);
router.post("/role/update", updateRoleByID);
router.post("/role/delete", deleteRoleByID);

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

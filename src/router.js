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
  getProductByID,
  updateProductByID,
  deleteProductByID,
  // Login,
  // createLogin,
  // getAllLogin,
  deleteSupplierByID,
  createSupplier,
  updateSupplierByID,
  getSupplierByID,
  getAllSupplier,
  getAllPromotions,
} from "./controller.js";

const router = express.Router();
//LOGIN
// router.post("/login", Login);
// router.post("/login/create", createLogin);
// router.get("/login/all", getAllLogin);

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
router.post("/product", getProductByID);
router.post("/product/update", updateProductByID);
router.post("/product/delete", deleteProductByID);

// Promptions
router.post("/promotions/all", getAllPromotions);


// router.post("/comment/update", getUpdateComment);
// router.post("/comment/update", getDeleteComment);

export default router;

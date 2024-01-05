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
  Login,
  createLogin,
  getAllLogin,
  checkEmail,
  getProductByID,
  updateProductByID,
  deleteProductByID,
  deleteSupplierByID,
  createSupplier,
  updateSupplierByID,
  getSupplierByID,
  getAllSupplier,
  fogotPassword,
  getProfileByID,
  updateProfileByID,
  getAllPromotion,
  createPromotion,
  getPromotionByID,
  updatePromotionByID,
  deletePromotionByID,
  getAllInvoice,
  createInvoice,
  getInvoiceByID,
  updateInvoiceByID,
  deleteInvoiceByID,
  getAllInvoiceDetail,
  createInvoiceDetail,
  getInvoiceDetailByID,
  updateInvoiceDetailByID,
  deleteInvoiceDetailByID,
  getAllReportInvoice,
  getAllReportProduct,
} from "./controller.js";

const router = express.Router();
//LOGIN
router.post("/forgot/checkemail", checkEmail);
router.post("/login", Login);
router.post("/login/create", createLogin);
router.post("/forgot/update", fogotPassword);
router.get("/login/all", getAllLogin);
router.post("/profile", getProfileByID);
router.post("/profile/update", updateProfileByID);

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

//ProductDetails
router.post("/productDetails/", getProductByID);

// Promptions

// Promotion
router.post("/promotion/all", getAllPromotion);
router.post("/promotion", getPromotionByID);
router.post("/promotion/update", updatePromotionByID);
router.post("/promotion/create", createPromotion);
router.post("/promotion/delete", deletePromotionByID);

// Invoice
router.post("/invoice/all", getAllInvoice);
router.post("/invoice", getInvoiceByID);
router.post("/invoice/update", updateInvoiceByID);
router.post("/invoice/create", createInvoice);
router.post("/invoice/delete", deleteInvoiceByID);

// InvoiceDetail
router.post("/invoice-detail/all", getAllInvoiceDetail);
router.post("/invoice-detail", getInvoiceDetailByID);
router.post("/invoice-detail/update", updateInvoiceDetailByID);
router.post("/invoice-detail/create", createInvoiceDetail);
router.post("/invoice-detail/delete", deleteInvoiceDetailByID);

// report
router.post("/report/product", getAllReportProduct);
router.post("/report/invoice", getAllReportInvoice);

export default router;

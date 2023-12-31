import constant from "./constant.js";
import { getAll, getByID, create, update, deleteByID } from "./core.js";

// Role
export const getAllRole = (req, res) => {
  const queryCondition = "";
  return getAll(res, constant.tableNameBD.ROLES, queryCondition);
};

export const getByRoleID = (req, res) => {
  let queryCondition = "";
  return getByID(req, res, constant.tableNameBD.ROLES, queryCondition);
};

export const createRole = (req, res) => {
  const newRole = {
    code: req.body.code,
  };

  return create(req, res, constant.tableNameBD.ROLES, newRole);
};
//LOGIN
export const Login = (req, res) => {
  const queryCondition = `SELECT * FROM ${constant.tableNameBD.USERS} as us where us.email = '${req.body.email}' and us.matKhau = '${req.body.matKhau}'`;
  let querySearch = "";
  return getAll(
    res,
    constant.tableNameBD.USERS,
    queryCondition,
    querySearch
  );
};

// CommentReview
export const getAllComment = (req, res) => {
  const queryCondition =
    "SELECT cm.id, cm.noiDung, cm.trangThai, cm.ngayTao, cm.ngaySua, pd.ten as tenSanPham, us.email, us.hoten" +
    " FROM comments as cm" +
    " INNER JOIN users as us ON us.id = cm.userID" +
    " INNER JOIN products as pd ON pd.id = cm.productID";

  let querySearch = "";

  if (Object.keys(req.query).length !== 0) {
    querySearch += " WHERE ";

    if (req.query.tenSanPham) {
      querySearch += "pd.ten like " + `'${req.query.tenSanPham}'`;
    }

    if (req.query.hoten) {
      querySearch += "us.hoten like " + `'${req.query.hoten}'`;
    }
  }

  return getAll(
    res,
    constant.tableNameBD.COMMENTS,
    queryCondition,
    querySearch
  );
};

export const getCommentByID = (req, res) => {
  const queryCondition = "";
  return getByID(req, res, constant.tableNameBD.COMMENTS, queryCondition);
};

export const deleteCommentByID = (req, res) => {
  return deleteByID(req, res, constant.tableNameBD.COMMENTS);
};

export const createComment = (req, res) => {
  const newComment = {
    userID: req.body.userID,
    productID: req.body.productID,
    noiDung: req.body.noiDung,
    trangThai: constant.commentStatus.PENDING,
  };

  return create(req, res, constant.tableNameBD.COMMENTS, newComment);
};

export const updateCommentByID = (req, res) => {
  const updateComment = {
    userID: req.body.userID,
    productID: req.body.productID,
    noiDung: req.body.noiDung,
    trangThai: req.body.trangThai,
  };

  return update(req, res, constant.tableNameBD.COMMENTS, updateComment);
};

// Product
export const getAllProduct = (req, res) => {
  const queryCondition = "";
  let querySearch = "";
  return getAll(
    res,
    constant.tableNameBD.PRODUCTS,
    queryCondition,
    querySearch
  );
};

export const createProduct = (req, res) => {
  const newComment = {
    userID: req.body.userID,
    productID: req.body.productID,
    noiDung: req.body.noiDung,
    promotionID: req.body.promotionID,
    supplierID: req.body.supplierID,
    ten: req.body.ten,
    moTa: req.body.moTa,
    heDieuHanh: req.body.heDieuHanh,
    anh: req.body.anh,
    donGia: req.body.donGia,
    baoHanh: req.body.baoHanh,
    mauSac: req.body.mauSac,
  };

  return create(req, res, constant.tableNameBD.PRODUCTS, newComment);
};


// Promotion
export const getAllPromotion = (req, res) => {
  const queryCondition =
    "SELECT pm.id, pm.productID, pm.noiDung, pm.giaTriGiam, pm.tuNgay, pm.denNgay, pm.ngayTao, pm.ngaySua, pd.ten as tenSanPham" +
    " FROM promotions as pm" +
    " INNER JOIN products as pd ON pd.id = pm.productID";

  let querySearch = "";

  if (Object.keys(req.query).length !== 0) {
    querySearch += " WHERE ";

    if (req.query.tenSanPham) {
      querySearch += "pd.ten like " + `'${req.query.tenSanPham}'`;
    }
  }

  return getAll(
    res,
    constant.tableNameBD.PROMOTIONS,
    queryCondition,
    querySearch
  );
};

export const getPromotionByID = (req, res) => {
  const queryCondition = "";
  return getByID(req, res, constant.tableNameBD.PROMOTIONS, queryCondition);
};

export const deletePromotionByID = (req, res) => {
  const deleteColumns = {
    id: req.query.id,
  };
  return deleteByID(req, res, constant.tableNameBD.PROMOTIONS, deleteColumns);
};

export const createPromotion = (req, res) => {
  const newPromotion = {
    productID: req.body.productID,
    noiDung: req.body.noiDung,
    giaTriGiam: req.body.giaTriGiam,
    tuNgay: req.body.tuNgay,
    denNgay: req.body.denNgay,
  };

  return create(req, res, constant.tableNameBD.PROMOTIONS, newPromotion);
};

export const updatePromotionByID = (req, res) => {
  const updatePromotion = {
    productID: req.body.productID,
    noiDung: req.body.noiDung,
    giaTriGiam: req.body.giaTriGiam,
    tuNgay: req.body.tuNgay,
    denNgay: req.body.denNgay,
  };
  const updateColumns = {
    id: req.body.id,
  };

  return update(req, res, constant.tableNameBD.PROMOTIONS, updatePromotion, updateColumns);
};
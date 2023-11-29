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

// CommentReview
export const getAllComment = (req, res) => {
  const queryCondition =
    "SELECT cm.id, cm.productID, cm.noiDung, cm.trangThai, cm.ngayTao, cm.ngaySua, pd.ten as tenSanPham, us.email, us.hoten" +
    " FROM comments as cm" +
    " INNER JOIN users as us ON us.id = cm.userID" +
    " INNER JOIN products as pd ON pd.id = cm.productID";

  let querySearch = "";

  if (Object.keys(req.query).length !== 0) {
    querySearch += " WHERE ";

    if (req.query.tenSanPham) {
      querySearch += "pd.ten like " + `'${req.query.tenSanPham}'`;
    }

    if (req.query.price) {
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
    id: req.body.id,
    noiDung: req.body.noiDung,
    trangThai: req.body.trangThai,
  };
  return update(req, res, constant.tableNameBD.COMMENTS, updateComment);
};

// Supplier
export const getAllSupplier = (req, res) => {
  const queryCondition = "";
  let querySearch = "";

  return getAll(
    res,
    constant.tableNameBD.SUPPlIERS,
    queryCondition,
    querySearch
  );
};

export const getSupplierByID = (req, res) => {
  const queryCondition = "";
  return getByID(req, res, constant.tableNameBD.SUPPlIERS, queryCondition);
};

export const deleteSupplierByID = (req, res) => {
  return deleteByID(req, res, constant.tableNameBD.SUPPlIERS);
};

export const createSupplier = (req, res) => {
  const newSupplier = {
    ten: req.body.ten,
    diaChi: req.body.diaChi,
    email: req.body.email,
    sdt: req.body.sdt,
  };

  return create(req, res, constant.tableNameBD.SUPPlIERS, newSupplier);
};

export const updateSupplierByID = (req, res) => {
  const updateSupplier = {
    id: req.body.id,
    ten: req.body.ten,
    diaChi: req.body.diaChi,
    email: req.body.email,
    sdt: req.body.sdt,
  };
  return update(req, res, constant.tableNameBD.SUPPlIERS, updateSupplier);
};

// Product
export const getAllProduct = (req, res) => {
  const queryCondition =
    "SELECT pd.id, pd.ten, pd.moTa, pd.heDieuHanh, pd.anh, pd.donGia, pd.baoHanh, pd.mauSac, pd.ngayTao, " +
    " sp.ten as tenNhaCungCap, pt.code, pt.noiDung, pt.tuNgay, pt.denNgay" +
    " FROM products as pd" +
    " INNER JOIN suppliers as sp ON sp.id = pd.supplierID" +
    " INNER JOIN promotions as pt ON pt.id = pd.promotionID";
  let querySearch = "";
  if (req.body && req.body.producer && req.body.producer.length > 0) {
    querySearch += ` AND sp.ten IN (${req.body.producer
      .map((producer) => `'${producer}'`)
      .join(", ")})`;
  }

  if (req.body && req.body.price && req.body.price.length > 0) {
    let priceConditions = req.body.price
      .map((key) => {
        switch (key) {
          case "<2":
            return `(CAST(REPLACE(pd.donGia, ',', '') AS DECIMAL(10, 2)) < 2000000)`;
          case "2-4":
            return `(CAST(REPLACE(pd.donGia, ',', '') AS DECIMAL(10, 2)) BETWEEN 2000000 AND 4000000)`;
          case "4-7":
            return `(CAST(REPLACE(pd.donGia, ',', '') AS DECIMAL(10, 2)) BETWEEN 4000000 AND 7000000)`;
          case ">7":
            return `(CAST(REPLACE(pd.donGia, ',', '') AS DECIMAL(10, 2)) > 7000000)`;
          default:
            return "";
        }
      })
      .join(" OR ");

    if (priceConditions) {
      querySearch += ` AND ${priceConditions}`;
    }
  }

  return getAll(
    res,
    constant.tableNameBD.PRODUCTS,
    queryCondition,
    querySearch
  );
};

export const createProduct = (req, res) => {
  const newProduct = {
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

  return create(req, res, constant.tableNameBD.PRODUCTS, newProduct);
};

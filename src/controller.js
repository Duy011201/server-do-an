import constant from "./constant.js";
import {
  getAll,
  getByID,
  create,
  update,
  deleteByID,
  signUpEmail,
  forgotEmail,
  updatePassword,
} from "./core.js";

// User
export const getAllUser = (req, res) => {
  const queryCondition =
    "SELECT us.id, us.hoten, us.email, us.sdt, us.matKhau, us.roleID,GROUP_CONCAT(DISTINCT roles.code) AS roleCodes FROM users AS us inner join roles on FIND_IN_SET(roles.id, us.roleID) > 0 GROUP BY us.id";
  let querySearch = "";
  if (Object.keys(req.query).length !== 0) {
    querySearch += " WHERE ";
    if (req.query.code) {
      querySearch += `users.roleID LIKE '${req.query.roleID}'`;
    }
  }
  return getAll(res, constant.tableNameBD.USERS, queryCondition, querySearch);
};

export const createUser = (req, res) => {
  const newRole = {
    hoten: req.body.hoten,
    email: req.body.email,
    sdt: req.body.sdt,
    matKhau: "123456",
    roleID: req.body.roleID.join(","),
  };

  // console.log(newRole);

  return create(req, res, constant.tableNameBD.USERS, newRole);
};

export const updateUserByID = (req, res) => {
  const updateRole = {
    id: req.body.id,
    hoten: req.body.hoten,
    email: req.body.email,
    sdt: req.body.sdt,
    matKhau: "123456",
    roleID: req.body.roleID.join(","),
  };

  return update(req, res, constant.tableNameBD.USERS, updateRole);
};

export const deleteUserByID = (req, res) => {
  return deleteByID(req, res, constant.tableNameBD.USERS);
};
// Role
export const getAllRole = (req, res) => {
  const queryCondition = "select * from roles";
  let querySearch = "";
  return getAll(res, constant.tableNameBD.ROLES, queryCondition, querySearch);
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

export const updateRoleByID = (req, res) => {
  const updateRole = {
    id: req.body.id,
    code: req.body.code,
  };

  return update(req, res, constant.tableNameBD.ROLES, updateRole);
};
export const deleteRoleByID = (req, res) => {
  return deleteByID(req, res, constant.tableNameBD.ROLES);
};

// LOGIN
export const Login = (req, res) => {
  const queryCondition = `SELECT * FROM ${constant.tableNameBD.USERS} as us where us.email = '${req.body.email}' and us.matKhau = '${req.body.matKhau}'`;
  let querySearch = "";
  return getAll(res, constant.tableNameBD.USERS, queryCondition, querySearch);
};

export const getAllLogin = (req, res) => {
  const queryCondition =
    "SELECT us.id, us.hoten, us.email, us.sdt, us.matKhau, us.roleID, us.ngayTao, us.ngaySua, " +
    " rl.code as tenQuyen" +
    " FROM users as us" +
    " INNER JOIN roles as rl ON rl.id = us.roleID";
  let querySearch = "";

  if (req.query.email) {
    querySearch += "us.email like" + `'${req.query.email}'`;
  }
  return getAll(res, constant.tableNameBD.USERS, queryCondition, querySearch);
};
export const createLogin = (req, res) => {
  const newUser = {
    hoten: req.body.username,
    email: req.body.email,
    sdt: "",
    matKhau: req.body.password,
    roleID: 1,
  };
  return signUpEmail(req, res, newUser);
};
export const checkEmail = (req, res) => {
  const checkEmail = {
    id: req.body.id,
    email: req.body.email,
    hoten: "",
    matKhau: "",
    roleID: 1,
  };

  return forgotEmail(req, res, checkEmail);
};

export const fogotPassword = (req, res) => {
  const updateLogin = {
    email: req.body.email,
    matKhau: req.body.matKhau,
    roleID: 1,
  };
  return updatePassword(req, res, updateLogin);
};

export const getProfile = (req, res) => {
  const queryCondition = `SELECT us.id, us.hoten, us.email, us.matKhau, us.sdt, us.roleID FROM ${constant.tableNameBD.USERS} as us`;
  return getByID(req, res, constant.tableNameBD.USERS, queryCondition);
};
export const getProfileByID = (req, res) => {
  const queryCondition =
    "SELECT us.id, us.hoten, us.email, us.matKhau, us.sdt, us.roleID" +
    " FROM users as us " +
    " INNER JOIN roles as rl ON rl.id = us.roleID" +
    ` WHERE us.id = ${req.query.id}`;
  return getByID(req, res, constant.tableNameBD.USERS, queryCondition);
};

export const updateProfileByID = (req, res) => {
  const updateProfile = {
    id: req.body.id,
    hoten: req.body.hoten,
    matKhau: req.body.matKhau,
    email: req.body.email,
    sdt: req.body.sdt,
    roleID: 1,
  };

  return update(req, res, constant.tableNameBD.USERS, updateProfile);
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
    "SELECT pd.id, pd.ten, pd.moTa, pd.heDieuHanh, pd.anh, pd.donGia, pd.soLuong, pd.baoHanh, pd.mauSac, pd.ngayTao, pd.ngaySua, " +
    " sp.ten as tenNhaCungCap, sp.id as supplierID, pd.id as promotionID, pt.code, pt.noiDung, pt.tuNgay, pt.denNgay" +
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
  console.log(req.body);

  const newProduct = {
    promotionID: req.body.promotionID,
    supplierID: req.body.supplierID,
    ten: req.body.ten,
    moTa: req.body.moTa,
    heDieuHanh: req.body.heDieuHanh,
    anh: req.body.anh,
    donGia: req.body.donGia,
    soLuong: req.body.soLuong,
    baoHanh: req.body.baoHanh,
    mauSac: req.body.mauSac,
  };

  return create(req, res, constant.tableNameBD.PRODUCTS, newProduct);
};

export const getProductByID = (req, res) => {
  const queryCondition =
    "SELECT pd.id, pd.ten, pd.moTa, pd.heDieuHanh, pd.anh, pd.donGia, pd.soLuong, pd.baoHanh, pd.mauSac, pd.ngayTao, pd.ngaySua, " +
    " sp.ten as tenNhaCungCap, sp.id as supplierID, pd.id as promotionID, pt.code, pt.noiDung, pt.tuNgay, pt.denNgay" +
    " FROM products as pd" +
    " INNER JOIN suppliers as sp ON sp.id = pd.supplierID" +
    " INNER JOIN promotions as pt ON pt.id = pd.promotionID" +
    ` WHERE pd.id = ${req.query.id}`;
  return getByID(req, res, constant.tableNameBD.PRODUCTS, queryCondition);
};

export const updateProductByID = (req, res) => {
  const updateProduct = {
    id: req.body.id,
    promotionID: req.body.promotionID,
    supplierID: req.body.supplierID,
    ten: req.body.ten,
    moTa: req.body.moTa,
    heDieuHanh: req.body.heDieuHanh,
    anh: req.body.anh,
    donGia: req.body.donGia,
    soLuong: req.body.soLuong,
    baoHanh: req.body.baoHanh,
    mauSac: req.body.mauSac,
  };
  return update(req, res, constant.tableNameBD.PRODUCTS, updateProduct);
};

export const deleteProductByID = (req, res) => {
  return deleteByID(req, res, constant.tableNameBD.PRODUCTS);
};

// //Promotions
// export const getAllPromotions = (req, res) => {
//   const queryCondition = "";
//   let querySearch = "";

//   return getAll(
//     res,
//     constant.tableNameBD.PROMOTIONS,
//     queryCondition,
//     querySearch
//   );
// };
// Promotion
export const getAllPromotion = (req, res) => {
  const queryCondition =
    "SELECT pm.id,  pm.noiDung, pm.code, pm.tuNgay, pm.denNgay, pm.ngayTao, pm.ngaySua FROM promotions as pm";
  // +
  // " INNER JOIN products as pd ON pd.id = pm.productID";

  let querySearch = "";

  // if (Object.keys(req.query).length !== 0) {
  //   querySearch += " WHERE ";

  //   // if (req.query.tenSanPham) {
  //   //   querySearch += "pd.ten like " + `'${req.query.tenSanPham}'`;
  //   // }
  // }

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
  // const deleteColumns = {
  //   id: req.query.id,
  // };
  return deleteByID(req, res, constant.tableNameBD.PROMOTIONS);
};

export const createPromotion = (req, res) => {
  const newPromotion = {
    // productID: req.body.productID,
    noiDung: req.body.noiDung,
    code: req.body.code,
    tuNgay: req.body.tuNgay,
    denNgay: req.body.denNgay,
  };

  return create(req, res, constant.tableNameBD.PROMOTIONS, newPromotion);
};

export const updatePromotionByID = (req, res) => {
  const updatePromotion = {
    id: req.body.id,
    // productID: req.body.productID,
    noiDung: req.body.noiDung,
    code: req.body.code,
    tuNgay: req.body.tuNgay,
    denNgay: req.body.denNgay,
  };
  // const updateColumns = {
  //   id: req.body.id,
  // };

  return update(req, res, constant.tableNameBD.PROMOTIONS, updatePromotion);
};

// Invoice
export const getAllInvoice = (req, res) => {
  const queryCondition = `SELECT inv.id, inv.userID, inv.tongTien, inv.diaChiGiaoHang, inv.trangThai, inv.phuongThucThanhToan FROM ${constant.tableNameBD.INVOICES} as inv`;
  let querySearch = "";

  return getAll(
    res,
    constant.tableNameBD.INVOICES,
    queryCondition,
    querySearch
  );
};

export const getInvoiceByID = (req, res) => {
  const queryCondition = "";
  return getByID(req, res, constant.tableNameBD.INVOICES, queryCondition);
};

export const deleteInvoiceByID = (req, res) => {
  // const deleteColumns = {
  //   id: req.query.id,
  // };
  return deleteByID(
    req,
    res,
    constant.tableNameBD.INVOICES
    // deleteColumns
  );
};

export const createInvoice = (req, res) => {
  const newInvoice = {
    userID: req.body.userID,
    tongTien: req.body.tongTien,
    diaChiGiaoHang: req.body.diaChiGiaoHang,
    trangThai: req.body.trangThai,
    phuongThucThanhToan: req.body.phuongThucThanhToan,
  };

  return create(req, res, constant.tableNameBD.INVOICES, newInvoice);
};

export const updateInvoiceByID = (req, res) => {
  const updateInvoice = {
    id: req.body.id,
    userID: req.body.userID,
    tongTien: req.body.tongTien,
    diaChiGiaoHang: req.body.diaChiGiaoHang,
    trangThai: req.body.trangThai,
    phuongThucThanhToan: req.body.phuongThucThanhToan,
  };

  // const updateColumns = {
  //   id: req.body.id,
  // };

  return update(
    req,
    res,
    constant.tableNameBD.INVOICES,
    updateInvoice
    // updateColumns
  );
};

// Invoice Detail
export const getAllInvoiceDetail = (req, res) => {
  const queryCondition =
    `SELECT invdt.id, invdt.invoiceID , invdt.productID , invdt.soLuong, invdt.trangThai, invdt.tongTien, pd.ten as productName, pd.moTa FROM ${constant.tableNameBD.INVOICEDETAILS} as invdt ` +
    `INNER JOIN ${constant.tableNameBD.PRODUCTS} as pd ON pd.id = invdt.productID`;
  let querySearch = "";
  // if (req.body.invoiceID && req.body.invoiceID !== "") {
  querySearch += ` WHERE invdt.invoiceID = ${req.body.invoiceID}`;
  // }

  return getAll(
    res,
    constant.tableNameBD.INVOICEDETAILS,
    queryCondition,
    querySearch
  );
};

export const getInvoiceDetailByID = (req, res) => {
  const queryCondition = "";
  return getByID(req, res, constant.tableNameBD.INVOICEDETAILS, queryCondition);
};

export const deleteInvoiceDetailByID = (req, res) => {
  // const deleteColumns = {
  //   id: req.query.id,
  // };
  return deleteByID(
    req,
    res,
    constant.tableNameBD.INVOICEDETAILS
    // deleteColumns
  );
};

export const createInvoiceDetail = (req, res) => {
  const newInvoiceDetail = {
    invoiceID: req.body.invoiceID,
    productID: req.body.productID,
    soLuong: req.body.soLuong,
    trangThai: req.body.trangThai,
    tongTien: req.body.tongTien,
  };

  return create(
    req,
    res,
    constant.tableNameBD.INVOICEDETAILS,
    newInvoiceDetail
  );
};

export const updateInvoiceDetailByID = (req, res) => {
  const updateInvoiceDetail = {
    id: req.body.id,
    invoiceID: req.body.invoiceID,
    productID: req.body.productID,
    soLuong: req.body.soLuong,
    trangThai: req.body.trangThai,
    tongTien: req.body.tongTien,
  };

  // const updateColumns = {
  //   id: req.body.id,
  // };

  return update(
    req,
    res,
    constant.tableNameBD.INVOICEDETAILS,
    updateInvoiceDetail
    // updateColumns
  );
};

// Report
export const getAllReportProduct = (req, res) => {
  let queryCondition = "";
  if (req.body.time === "MONTH") {
    queryCondition +=
      "SELECT MONTH(ngayTao) AS month, COUNT(pd.soLuong) AS soLuong FROM products as pd GROUP BY month ORDER BY month";
  } else if (req.body.time === "YEAR") {
    queryCondition +=
      "SELECT YEAR(ngayTao) AS year, COUNT(pd.soLuong) AS soLuong FROM products as pd GROUP BY year ORDER BY year";
  }

  let querySearch = "";
  return getAll(
    res,
    constant.tableNameBD.PRODUCTS,
    queryCondition,
    querySearch
  );
};

export const getAllReportInvoice = (req, res) => {
  let queryCondition = "";
  if (req.body.time === "MONTH") {
    queryCondition +=
      "SELECT MONTH(ngayTao) AS month, COUNT(id.soLuong) AS soLuong FROM invoicedetails as id GROUP BY month ORDER BY month";
  } else if (req.body.time === "YEAR") {
    queryCondition +=
      "SELECT YEAR(ngayTao) AS year, COUNT(id.soLuong) AS soLuong FROM invoicedetails as id GROUP BY year ORDER BY year";
  }
  let querySearch = "";
  return getAll(
    res,
    constant.tableNameBD.INVOICEDETAILS,
    queryCondition,
    querySearch
  );
};

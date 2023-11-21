const constant = {
  msg: {
    CREATE_SUCCESS: "Created data successfully",
    UPDATE_SUCCESS: "Updated data successfully",
    DELETE_SUCCESS: "Deleted data successfully",
    GET_SUCCESS: "Get data successfully",

    SERVER_ERROR: "Internal Server Error",
  },
  code: {
    OK: 200,
    NOT_FOUND: 404,
    SERVER_ERROR: 500
  },
  tableNameBD: {
    USERS: "users",
    ROLES: "roles",
    COMMENTS: "comments",
    PRODUCTS: "products",
  },
  commentStatus: {
    PENDING: "pending",
    APPROVED: "approved",
  },
};

export default constant;

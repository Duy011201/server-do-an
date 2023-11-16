import express from "express";
import { getAllRole, getCreateRole } from "./controller.js";

const router = express.Router();

//Role
router.get("/role/all", getAllRole);
router.post("/role", getCreateRole);

export default router;

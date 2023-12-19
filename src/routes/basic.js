import express from "express";
import basicController from "../app/controllers/BasicController.js";

const router = express.Router();

//basicController.index
router.use("/search", basicController.search);
router.use("/", basicController.index);

export default router;

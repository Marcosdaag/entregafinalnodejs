import { Router } from "express";
import { getAllProducts, getProductById, createProduct, deleteProduct } from "../controllers/products.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/products", verifyToken, getAllProducts);
router.get("/products/:id", verifyToken, getProductById);
router.post("/products/create", verifyToken, createProduct);
router.delete("/products/:id", verifyToken, deleteProduct);

export default router;

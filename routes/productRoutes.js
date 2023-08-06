import { Router } from "express";
import { protect } from '../middleware/authMiddleware.js';


import { createProduct, getProducts, getProduct, deleteProduct, updateProduct } from "../controllers/productController.js";

const router = Router();

router.get("/products", protect, getProducts);

router.post("/products", protect, createProduct);

router.get("/products/:id", protect, getProduct);

router.put("/products/:id", protect, updateProduct);

router.delete("/products/:id", protect, deleteProduct);

export default router;
import express from "express"
import { ProductController } from "../controller/ProductController"

export const productRouter = express.Router()

productRouter.post("/", new ProductController().createProduct)
productRouter.put("/:id", new ProductController().editProduct)
productRouter.get("/:id", new ProductController().getProduct)
productRouter.delete("/:id", new ProductController().deleteProduct)
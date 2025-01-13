import { Router } from "express";
import { myMiddleware } from "../middleware/my-middleware";
import { ProductsController } from "../controllers/ProductsController";

const productRoutes = Router();
const productsController = new ProductsController();

productRoutes.get("/", productsController.index);

productRoutes.post("/", myMiddleware, productsController.create);

export { productRoutes };

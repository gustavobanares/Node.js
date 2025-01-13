import { Router } from "express";
import { myMiddleware } from "../middleware/my-middleware";

const productRoutes = Router()

productRoutes.get("/", (request, response) => {
    const { page, limit } = request.query;
  
    response.send(`Pagina ${page} de ${limit}`);
  });
  
  productRoutes.post("/", myMiddleware, (request, response) => {
    const { name, price } = request.body;
  
    // response.send(`Produto ${name} custa $${price}`);
    response.status(201).json({ name, price, user_id:request.user_id });
  });

export {productRoutes}
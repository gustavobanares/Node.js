import { Request, Response } from "express";
import { AppError } from "../utils/AppError";

class ProductsController {
  /**
   * index - GET para listar varios registros
   * show - GET para exibir um registro especifico
   * create - POST para criar um registro
   * update - PUT para atualizar um registro
   * remove - DELETE para deletar um registro
   */

  index(request: Request, response: Response) {
    const { page, limit } = request.query;

    response.send(`Pagina ${page} de ${limit}`);
  }

  create(request: Request, response: Response) {
    const { name, price } = request.body;

    // throw new Error('Erro ao tentar ao criar um produto!')
    // throw new AppError("Erro ao tentar ao criar um produto!");

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}

export { ProductsController };

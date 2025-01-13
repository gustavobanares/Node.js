import { Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { z } from "zod";

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
    const bodySchema = z.object({
      name: z.string(),
      price: z.number(),
    });

    const {name, price} = bodySchema.parse(request.body);

    /* create
    if (!name) {
      throw new AppError("Nome do produto e obrigatorio!");
    }

    if (name.trim.length < 6) {
      throw new AppError(
        "Nome do produto precisa ter pelo menos 6 caracteres!"
      );
    }

    if (!price) {
      throw new AppError("Preco do produto e obrigatorio!");
    }

    if (price < 0) {
      throw new AppError("Preco do produto nao pode ser menor do que zero!");
    }

    */

    // throw new Error('Erro ao tentar ao criar um produto!')
    // throw new AppError("Erro ao tentar ao criar um produto!");

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}

export { ProductsController };

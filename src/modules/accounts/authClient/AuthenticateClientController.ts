import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";

export class AuthenticateClientController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body;

    const authenticateUserUseCase = new AuthenticateClientUseCase();

    const result = await authenticateUserUseCase.execute({
      username,
      password,
    });

    return res.json(result);
  }
}

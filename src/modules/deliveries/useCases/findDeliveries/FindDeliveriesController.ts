import { Request, Response } from "express";
import { FindDeliveriesUseCase } from "./FindDeliveriesUseCase";

export class FindDeliveriesController {
  async handle(request: Request, response: Response) {
    const findDeliveriesUseCase = new FindDeliveriesUseCase();

    const deliveries = await findDeliveriesUseCase.execute();

    return response.json(deliveries);
  }
}

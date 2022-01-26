import { Request, Response } from "express";
import { FindDeliveriesDeliverymanUseCase } from "./FindDeliveriesDeliverymanUseCase";

export class FindDeliveriesDeliverymanController {
  async handle(req: Request, res: Response) {
    const { id_deliveryman } = req;

    const findDeliveriesDeliverymanUseCase =
      new FindDeliveriesDeliverymanUseCase();

    const deliveries = await findDeliveriesDeliverymanUseCase.execute(
      id_deliveryman
    );

    return res.json(deliveries);
  }
}

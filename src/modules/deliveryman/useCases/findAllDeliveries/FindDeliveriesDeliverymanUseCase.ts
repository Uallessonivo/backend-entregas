import { prisma } from "../../../../database/prismaClient";

export class FindDeliveriesDeliverymanUseCase {
  async execute(id_deliveryman: string) {
    const deliveries = await prisma.clients.findMany({
      where: {
        id: id_deliveryman,
      },
      select: {
        Deliveries: true,
        id: true,
        username: true,
      },
    });

    return deliveries;
  }
}

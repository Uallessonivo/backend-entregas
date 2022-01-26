import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/accounts/authClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/accounts/authDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/CreateClient/CreateClienteController";
import { FindAllDeliveriesClientController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesClientController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindDeliveriesController } from "./modules/deliveries/useCases/findDeliveries/FindDeliveriesController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { UpdateEndDateController } from "./modules/deliveries/useCases/updateEndDate/UpdateEndDateController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { FindDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveries/FindDeliveriesDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliverymanController();
const deliveryController = new CreateDeliveryController();
const findDeliveriesController = new FindDeliveriesController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllDeliveriesClientController =
  new FindAllDeliveriesClientController();

const findDeliveriesDeliverymanController =
  new FindDeliveriesDeliverymanController();

const updateEndDateController = new UpdateEndDateController();

routes.post("/client/authenticate", authenticateClientController.handle);

routes.post(
  "/deliveryman/authenticate",
  authenticateDeliverymanController.handle
);
routes.post("/client/", createClientController.handle);

routes.post("/deliveryman", createDeliveryController.handle);

routes.post("/delivery", ensureAuthenticateClient, deliveryController.handle);

routes.get(
  "/deliveri/available",
  ensureAuthenticateDeliveryman,
  findDeliveriesController.handle
);

routes.put(
  "/delivery/update/:id",
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle
);

routes.get(
  "/client/deliveries",
  ensureAuthenticateClient,
  findAllDeliveriesClientController.handle
);

routes.get(
  "/deliveryman/deliveries",
  ensureAuthenticateDeliveryman,
  findDeliveriesDeliverymanController.handle
);

routes.put(
  "/delivery/updateEndDate/:id",
  ensureAuthenticateDeliveryman,
  updateEndDateController.handle
);

export { routes };

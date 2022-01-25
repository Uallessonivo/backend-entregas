import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/CreateClient/CreateClienteController";

const routes = Router();

const createClientController = new CreateClientController();

routes.post("/client/", createClientController.handle);

export { routes };

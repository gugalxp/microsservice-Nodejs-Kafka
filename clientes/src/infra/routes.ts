import { Router } from "express";
import { CreateClientController } from "../modules/create-client/create-client.controller";

const router = Router();

router.post('/client', new CreateClientController().handle)

export { router };
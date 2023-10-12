import { Request, Response } from "express";
import { CreateClientUseCase } from "./create-client.usecase";

export class CreateClientController {

    constructor() {};

    async handle(request: Request, response: Response) {

        const data = request.body
        const createClientUseCase = new CreateClientUseCase();

        try {
            const result = await createClientUseCase.execute(data);
            return response.json(result)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ error: error.message });
            } else {
                return response.status(400).json({ error: 'Erro desconhecido' });
            }
        }
    }
}

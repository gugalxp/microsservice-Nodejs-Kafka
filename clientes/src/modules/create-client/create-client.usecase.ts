import { prismaClient } from "../../infra/database/prismaClient"
import { KafkaSendMessage } from "../../infra/provider/kafka/producer"

type CreateClientRequest = {
    name: string
    password: string
    email: string
    phone: string
}

export class CreateClientUseCase {

    constructor(){};

    async execute(data: CreateClientRequest) {
        const clientExist = await prismaClient.client.findFirst({
            where: {
                email: data.email,
            }
        })
        
        if (clientExist) throw new Error('Cliente já existe!');
        
        const createClient = await prismaClient.client.create({
            data: {
                ...data
            }
        })

        const kafkaProducer = new KafkaSendMessage()
        await kafkaProducer.execute("curso-kafka", {
            id: createClient.id,
            email: createClient.email
        })

        return createClient;
    }
}
import { prismaClient } from "../../../database/prismaCliente";
import { kafkaConsumer } from "./kafka.consumer"

type CustomerConsumer = {
    email: string,
    id: string
}

export async function createClientConsumer() {
    const consumer = await kafkaConsumer("curso-kafka");
    console.log("CUSTOMER CONSUMER")
    await consumer.run({
        eachMessage: async ({ message }) => {
            const messageToString = message.value!.toString();
            const customer = JSON.parse(messageToString) as CustomerConsumer;


            await prismaClient.client.create({
                data: {
                    externalId: customer.id,
                    email: customer.email
                }
            })
        }
    })
}

createClientConsumer();
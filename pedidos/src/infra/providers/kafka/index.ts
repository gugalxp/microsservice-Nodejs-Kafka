import { Kafka } from "kafkajs";

const kafka = new Kafka({
    brokers: ['driven-satyr-13517-us1-kafka.upstash.io:9092'],
    sasl: {
      mechanism: 'scram-sha-256',
      username: 'ZHJpdmVuLXNhdHlyLTEzNTE3JEE2DtyC9D5GKvBufKDifT4rW99CZ0klql4Pzg4',
      password: 'ZTk4M2M0MGYtOTZlZi00YTEzLWIwNzUtMjVhNWRkNjAwZGQ0',
    },
    ssl: true,
  })

  export { kafka }
import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
  constructor() {
    super({
      client: {
        brokers: ['enough-marten-13887-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: 'ZW5vdWdoLW1hcnRlbi0xMzg4NyTyQnHocfnX93EjqKVpFLJgtBcyjTecI-awoBE',
          password: '********',
        },
        ssl: true,
      },
    });
  }
}
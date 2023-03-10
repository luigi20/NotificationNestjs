import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka, Transport } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy {
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['enough-marten-13887-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'ZW5vdWdoLW1hcnRlbi0xMzg4NyTyQnHocfnX93EjqKVpFLJgtBcyjTecI-awoBE',
          password: '57eb33a4134c4f9d98ed9bd47f6c097f',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}

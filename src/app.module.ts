import { Module } from '@nestjs/common';
import { PrismaModule } from './infra/prisma/prisma.module';
import { SendNotificationModule } from './notification/send_notification/send_notification.module';

@Module({
  imports: [PrismaModule, SendNotificationModule],
  controllers: [],
  providers: [],
})
export class AppModule { }

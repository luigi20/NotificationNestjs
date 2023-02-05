import { Module } from '@nestjs/common';
import { PrismaModule } from './infra/prisma/prisma.module';
import { SendNotificationService } from './notification/send_notification/service/send_notification.service';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [SendNotificationService],
})
export class AppModule { }

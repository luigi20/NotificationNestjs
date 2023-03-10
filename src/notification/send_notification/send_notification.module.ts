import { Module } from '@nestjs/common';
import { PrismaModule } from '../../infra/prisma/prisma.module';
import { INotificationRepository } from '@model/repositories/abstract_class/INotificationRepository';
import { NotificationRepository } from '@model/repositories/NotificationRepository';
import { SendNotificationController } from './controllers/send-notification-controller';
import { SendNotificationService } from './service/send_notification.service';

@Module({
  imports: [PrismaModule],
  controllers: [SendNotificationController],
  providers: [
    SendNotificationService,
    {
      provide: INotificationRepository,
      useClass: NotificationRepository,
    },
  ],
})
export class SendNotificationModule { }

import { Module } from '@nestjs/common';
import { PrismaModule } from '../../infra/prisma/prisma.module';
import { INotificationRepository } from '@model/repositories/abstract_class/INotificationRepository';
import { NotificationRepository } from '@model/repositories/NotificationRepository';
import { CountNotificationController } from './controllers/count-notification-controller';
import { CountRecipientNotifications } from './service/count_notification.service';

@Module({
  imports: [PrismaModule],
  controllers: [CountNotificationController],
  providers: [
    CountRecipientNotifications,
    {
      provide: INotificationRepository,
      useClass: NotificationRepository,
    },
  ],
})
export class CountNotificationModule { }

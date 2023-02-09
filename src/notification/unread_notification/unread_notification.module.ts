import { Module } from '@nestjs/common';
import { PrismaModule } from '../../infra/prisma/prisma.module';
import { INotificationRepository } from '@model/repositories/abstract_class/INotificationRepository';
import { NotificationRepository } from '@model/repositories/NotificationRepository';
import { UnreadNotificationController } from './controllers/unread-notification-controller';
import { UnreadNotificationService } from './service/unread_notification.service';

@Module({
  imports: [PrismaModule],
  controllers: [UnreadNotificationController],
  providers: [
    UnreadNotificationService,
    {
      provide: INotificationRepository,
      useClass: NotificationRepository,
    },
  ],
})
export class UnreadNotificationModule { }

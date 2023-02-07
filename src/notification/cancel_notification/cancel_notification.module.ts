import { Module } from '@nestjs/common';
import { PrismaModule } from '../../infra/prisma/prisma.module';
import { INotificationRepository } from '@model/repositories/abstract_class/INotificationRepository';
import { NotificationRepository } from '@model/repositories/NotificationRepository';
import { CancelNotificationController } from './controllers/cancel-notification-controller';
import { CancelNotificationService } from './service/cancel_notification.service';

@Module({
  imports: [PrismaModule],
  controllers: [CancelNotificationController],
  providers: [
    CancelNotificationService,
    {
      provide: INotificationRepository,
      useClass: NotificationRepository,
    },
  ],
})
export class CancelNotificationModule { }

import { Module } from '@nestjs/common';
import { PrismaModule } from '../../infra/prisma/prisma.module';
import { INotificationRepository } from '../shared/repositories/interfaces/INotificationRepository';
import { NotificationRepository } from '../shared/repositories/NotificationRepository';
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

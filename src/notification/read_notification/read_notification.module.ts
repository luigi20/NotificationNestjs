import { Module } from '@nestjs/common';
import { PrismaModule } from '../../infra/prisma/prisma.module';
import { INotificationRepository } from '@model/repositories/abstract_class/INotificationRepository';
import { NotificationRepository } from '@model/repositories/NotificationRepository';
import { ReadNotificationController } from './controllers/read-notification-controller';
import { ReadNotificationService } from './service/read_notification.service';

@Module({
  imports: [PrismaModule],
  controllers: [ReadNotificationController],
  providers: [
    ReadNotificationService,
    {
      provide: INotificationRepository,
      useClass: NotificationRepository,
    },
  ],
})
export class ReadNotificationModule { }

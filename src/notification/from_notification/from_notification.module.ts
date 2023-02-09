import { Module } from '@nestjs/common';
import { PrismaModule } from '../../infra/prisma/prisma.module';
import { INotificationRepository } from '@model/repositories/abstract_class/INotificationRepository';
import { NotificationRepository } from '@model/repositories/NotificationRepository';
import { FromNotificationController } from './controllers/from-notification-controller';
import { FromNotificationService } from './service/from_notification.service';

@Module({
  imports: [PrismaModule],
  controllers: [FromNotificationController],
  providers: [
    FromNotificationService,
    {
      provide: INotificationRepository,
      useClass: NotificationRepository,
    },
  ],
})
export class FromNotificationModule { }

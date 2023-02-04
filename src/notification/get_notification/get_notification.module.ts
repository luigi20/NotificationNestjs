import { Module } from '@nestjs/common';
import { GetNotificationService } from './service/get_notification.service';
import { GetNotificationController } from './controller/get_notification.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GetNotificationController],
  providers: [GetNotificationService]
})
export class GetNotificationModule { }

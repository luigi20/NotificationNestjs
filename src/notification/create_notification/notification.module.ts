import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { NotificationController } from './controller/notification.controller';
import { NotificationService } from './service/notification.service';

@Module({
  imports: [PrismaModule],
  controllers: [NotificationController],
  providers: [NotificationService]
})
export class NotificationModule { }

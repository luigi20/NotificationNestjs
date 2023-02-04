import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { NotificationModule } from './notification/create_notification/notification.module';
import { GetNotificationModule } from './notification/get_notification/get_notification.module';

@Module({
  imports: [GetNotificationModule, PrismaModule, NotificationModule],
  controllers: [],
  providers: [],
})
export class AppModule { }

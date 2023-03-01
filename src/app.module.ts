import { Module } from '@nestjs/common';
import { MessagingModule } from './infra/messaging/messaging.module';
import { PrismaModule } from './infra/prisma/prisma.module';
import { CancelNotificationModule } from './notification/cancel_notification/cancel_notification.module';
import { CountNotificationModule } from './notification/count_recipient_notification/count_notification.module';
import { FromNotificationModule } from './notification/from_notification/from_notification.module';
import { ReadNotificationModule } from './notification/read_notification/read_notification.module';
import { SendNotificationModule } from './notification/send_notification/send_notification.module';
import { UnreadNotificationModule } from './notification/unread_notification/unread_notification.module';

@Module({
  imports: [
    PrismaModule,
    SendNotificationModule,
    ReadNotificationModule,
    UnreadNotificationModule,
    FromNotificationModule,
    CountNotificationModule,
    CancelNotificationModule,
    MessagingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../infra/prisma/prisma.service';
import { Notification } from '../model/notification';
import { INotificationRepository } from './interfaces/INotificationRepository';

@Injectable()
class NotificationRepository implements INotificationRepository {
  constructor(private prismaService: PrismaService) { }
  async create(notification: Notification): Promise<void> {
    await this.prismaService.notifications.create({
      data: {
        category: notification.category,
        content: notification.content.value,
        recipient_id: notification.recipientId,
        readAt: notification.readAt,
      },
    });
  }
}
export { NotificationRepository };

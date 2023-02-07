import { Notifications as RawNotification } from '@prisma/client';
import { Notification } from '@model/model/notification';
import { Content } from '@model/model/notification-content';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      category: notification.category,
      content: notification.content.value,
      recipient_id: notification.recipient_id,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content),
        recipient_id: raw.recipient_id,
        readAt: raw.readAt,
        // canceledAt: raw.canceledAt,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
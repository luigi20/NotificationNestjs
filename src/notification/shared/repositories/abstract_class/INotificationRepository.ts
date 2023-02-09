import { Notification } from '@model/model/notification';

abstract class INotificationRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(id: string, notification: Notification): Promise<void>;
  abstract countManyByRecipientId(recipient_id: string): Promise<number>;
  abstract findManyByRecipientId(recipient_id: string): Promise<Notification[]>;
}

export { INotificationRepository };

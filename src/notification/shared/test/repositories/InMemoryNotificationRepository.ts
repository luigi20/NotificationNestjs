import { Notification } from '../../model/notification';
import { INotificationRepository } from '../../repositories/abstract_class/INotificationRepository';

class InMemoryNotificationRepository implements INotificationRepository {
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (item) => item._id === notificationId,
    );

    if (!notification) {
      return null;
    }

    return notification;
  }

  async findManyByRecipientId(recipient_id: string): Promise<Notification[]> {
    return this.notifications.filter(
      (notification) => notification.recipient_id === recipient_id,
    );
  }

  async countManyByRecipientId(recipient_id: string): Promise<number> {
    return this.notifications.filter(
      (notification) => notification.recipient_id === recipient_id,
    ).length;
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async save(id: string, notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item._id === notification._id,
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }
}
export { InMemoryNotificationRepository };

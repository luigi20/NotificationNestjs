import { Notification } from '../../shared/model/notification';
import { INotificationRepository } from '../../shared/repositories/interfaces/INotificationRepository';

class InMemoryNotificationRepository implements INotificationRepository {
  public notifications: Notification[] = [];
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
export { InMemoryNotificationRepository };

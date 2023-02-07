import { Notification } from '../../shared/model/notification';
import { INotificationRepository } from '../../shared/repositories/abstract_class/INotificationRepository';

class InMemoryNotificationRepository implements INotificationRepository {
  public notifications: Notification[] = [];
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
export { InMemoryNotificationRepository };

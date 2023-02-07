import { Notification } from '../../model/notification';

abstract class INotificationRepository {
  abstract create(notification: Notification): Promise<void>;
}

export { INotificationRepository };

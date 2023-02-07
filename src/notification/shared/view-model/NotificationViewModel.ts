import { Notification } from '@model/model/notification';
export class NotificationViewModel {
  static toHTTP(notification: Notification) {
    return {
      id: notification._id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipient_id,
    };
  }
}

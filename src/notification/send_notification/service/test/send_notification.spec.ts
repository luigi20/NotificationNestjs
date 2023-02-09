import { Notification } from '../../../shared/model/notification';
import { InMemoryNotificationRepository } from '../../../shared/test/repositories/InMemoryNotificationRepository';
import { SendNotificationService } from '../send_notification.service';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotificationService(
      notificationRepository,
    );
    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'Essa é uma notificação',
      recipient_id: 'example-recipient-id',
    });
    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});

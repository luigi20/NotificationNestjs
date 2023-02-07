import { Notification } from '@model/model/notification';
import { InMemoryNotificationRepository } from '../../../test/repositories/InMemoryNotificationRepository';
import { SendNotificationService } from '../cancel_notification.service';


describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotificationService(
      notificationRepository,
    );
    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'Essa é uma notificação',
      recipientId: 'example-recipient-id',
    });
    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});

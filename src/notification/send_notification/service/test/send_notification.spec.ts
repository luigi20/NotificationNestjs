import { SendNotificationService } from '../send_notification.service';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotificationService();
    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'Essa é uma notificação',
      recipientId: 'example-recipient-id',
    });
    expect(notification).toBeTruthy();
  });
});

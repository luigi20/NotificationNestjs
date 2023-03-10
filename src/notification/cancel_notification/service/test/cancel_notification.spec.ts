import { NotificationNotFound } from '../../../shared/errors/NotificationNotFound';
import { makeNotification } from '../../../shared/test/factory/notification-factory';
import { InMemoryNotificationRepository } from '../../../shared/test/repositories/InMemoryNotificationRepository';
import { CancelNotificationService } from '../cancel_notification.service';

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotificationService(
      notificationsRepository,
    );
    const notification = makeNotification();
    await notificationsRepository.create(notification);
    await cancelNotification.execute({
      notificationId: notification._id,
    });
    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotificationService(
      notificationsRepository,
    );

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});

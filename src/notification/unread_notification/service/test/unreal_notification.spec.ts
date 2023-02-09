import { NotificationNotFound } from '../../../shared/errors/NotificationNotFound';
import { makeNotification } from '../../../shared/test/factory/notification-factory';
import { InMemoryNotificationRepository } from '../../../shared/test/repositories/InMemoryNotificationRepository';
import { UnreadNotificationService } from '../unread_notification.service';

describe('Unread notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const unreadNotification = new UnreadNotificationService(
      notificationsRepository,
    );

    const notification = makeNotification({
      readAt: new Date(),
    });

    await notificationsRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification._id,
    });

    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to unread a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const unreadNotification = new UnreadNotificationService(
      notificationsRepository,
    );
    expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});

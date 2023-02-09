import { NotificationNotFound } from '../../../shared/errors/NotificationNotFound';
import { makeNotification } from '../../../shared/test/factory/notification-factory';
import { InMemoryNotificationRepository } from '../../../shared/test/repositories/InMemoryNotificationRepository';
import { ReadNotificationService } from '../read_notification.service';

describe('Read notification', () => {
  it('should be able to read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const readNotification = new ReadNotificationService(
      notificationsRepository,
    );
    const notification = makeNotification();
    await notificationsRepository.create(notification);
    await readNotification.execute({
      notificationId: notification._id,
    });
    expect(notificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });
  it('should not be able to read a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const readNotification = new ReadNotificationService(
      notificationsRepository,
    );
    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});

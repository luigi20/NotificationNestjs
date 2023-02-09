import { makeNotification } from '../../../shared/test/factory/notification-factory';
import { InMemoryNotificationRepository } from '../../../shared/test/repositories/InMemoryNotificationRepository';
import { CountRecipientNotifications } from '../count_notification.service';

describe('Count recipients notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );
    await notificationsRepository.create(
      makeNotification({ recipient_id: 'recipient-1' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipient_id: 'recipient-1' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipient_id: 'recipient-2' }),
    );
    const { count } = await countRecipientNotifications.execute({
      recipient_id: 'recipient-1',
    });
    expect(count).toEqual(2);
  });
});

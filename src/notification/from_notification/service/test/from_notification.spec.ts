import { makeNotification } from '../../../shared/test/factory/notification-factory';
import { InMemoryNotificationRepository } from '../../../shared/test/repositories/InMemoryNotificationRepository';
import { FromNotificationService } from '../from_notification.service';

describe('Get recipients notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const getRecipientNotifications = new FromNotificationService(
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
    const { notifications } = await getRecipientNotifications.execute({
      recipient_id: 'recipient-1',
    });
    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipient_id: 'recipient-1' }),
        expect.objectContaining({ recipient_id: 'recipient-1' }),
      ]),
    );
  });
});

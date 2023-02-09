import { Notification, NotificationProps } from '../../model/notification';
import { Content } from '../../model/notification-content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade!'),
    recipient_id: 'recipient-2',
    ...override,
  });
}

import { Notification } from '../model/notification';
import { Content } from '../model/notification-content';

it('it should be able to create a notification', () => {
  const content = new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade'),
    recipient_id: 'example-recipient',
  });
  expect(content).toBeTruthy();
});

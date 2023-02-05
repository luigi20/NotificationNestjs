import { Notification } from '../shared/model/notification';
import { Content } from '../shared/model/notification-content';

it('it should be able to create a notification', () => {
  const content = new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade'),
    recipientId: 'example-recipient',
  });
  expect(content).toBeTruthy();
});

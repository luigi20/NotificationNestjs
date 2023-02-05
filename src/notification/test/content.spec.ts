import { Content } from '../shared/model/notification-content';

describe('Notification content', () => {
  it('it should be able to create a notification content ', () => {
    const content = new Content('Você recebeu uma nova solicitação de amizade');
    expect(content).toBeTruthy();
  });

  it('it not should be able to create a notification content with less than 5 caracteres', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('it not should be able to create a notification content with motr than 240 caracteres', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});

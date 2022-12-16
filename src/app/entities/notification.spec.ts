import { Content } from './content';
import { Notification } from './notification';

describe('notification Content', () => {
  it('should be able to create a notification.', () => {
    const notification = new Notification({
      content: new Content('hello world!'),
      category: 'social',
      recipientId: 'ABC123',
    });

    expect(notification).toBeTruthy();
  });
});

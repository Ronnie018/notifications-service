import { Content } from './content';

describe('notification Content', () => {

  it('should be able to create notification content.', () => {
    const content = new Content('você recebeu uma solicitação de amizade!');

    expect(content).toBeTruthy();
  });

  it('should not be able to create notification content with less than 5 characters.', () => {
    expect(() => new Content('rrr')).toThrowError('content length error');
  });

  it('should not be able to create notification content with more than 240 characters.', () => {
    expect(() => new Content('r'.repeat(241))).toThrowError(
      'content length error',
    );
  });

});


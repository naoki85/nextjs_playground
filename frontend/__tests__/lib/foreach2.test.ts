import forEach from '../../lib/foreach';

jest.mock('../../lib/foreach');

describe('foreach', () => {
  test('forEach mock function', () => {
    (forEach as jest.Mock).mockReturnValue(30);
    const items = [0, 1];
    const callback = jest.fn();
    expect(forEach(items, callback)).toBe(30);
  });
});

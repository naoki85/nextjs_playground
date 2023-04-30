import forEach from '../../lib/foreach';

const mockCallback = jest.fn((x) => x + 42);

describe('foreach', () => {
  test('forEach mock function', () => {
    const ret = forEach([0, 1], mockCallback);
    expect(ret).toBe(85);
    // モック関数が呼ばれた回数。 2 回
    expect(mockCallback.mock.calls).toHaveLength(2);
    // 最初のモック関数実行時の第一引数。 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    // 2 回目のモック関数実行時の第二引数。 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    // 最初の実行時の戻り値。 0 = 42 = 42
    expect(mockCallback.mock.results[0].value).toBe(42);
  });
});

const huffman = require('..'),
      assert = require('assert');

describe('huffman', function() {
  it('simple test', function() {
    const a = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
    };

    const code = {
      "a": "1000",
      "b": "1001",
      "c": "101",
      "d": "00",
      "e": "01",
      "f": "11",
    };

    assert.deepStrictEqual(huffman(a), code);
  });
});

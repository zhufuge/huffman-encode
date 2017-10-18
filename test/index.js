const huffman = require('..'),
      assert = require('assert')

describe('huffman', function() {
  it('simple test', function() {
    const probabilities = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
    }

    const code = {
      'a': '1110',
      'b': '1111',
      'c': '110',
      'd': '00',
      'e': '01',
      'f': '10',
    }

    assert.deepStrictEqual(huffman(probabilities), code)
  })

  it('string test', function() {
    const probabilities = {
      'C': 2,
      'B': 6,
      'E': 7,
      '_': 10,
      'D': 10,
      'A': 11,
    }

    const code = {
      '_': '00',
      'D': '01',
      'A': '10',
      'E': '110',
      'C': '1110',
      'B': '1111',
    }

    assert.deepStrictEqual(huffman(probabilities), code)
  })

  it('illegal value test', function() {
    const probabilities = {
      'H': undefined,           // illegal value will be ignore
      'G': -10,                 // must be positive, it will be ignore
      'C': '2',                 // string will be transform
      'B': 6.2,                 // float will be transform too
      'E': 7,
      '_': 10,
      'D': 10,
      'A': 11,
    }

    const code = {
      '_': '00',
      'D': '01',
      'A': '10',
      'E': '110',
      'C': '1110',
      'B': '1111',
    }

    assert.deepStrictEqual(huffman(probabilities), code)
  })
})

# Installation
```shell
    $ npm install huffman-encode
    // or
    $ yarn add huffman-encode
```



<a id="orgfff3194"></a>

# Usage
```javascript
    const huffmanEncode = require('huffman-encode')
    
    const probabilities = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6
    }
    
    huffmanEncode(probabilities)
    // => {
    //   "a": "1110",
    //   "b": "1111",
    //   "c": "110",
    //   "d": "00",
    //   "e": "01",
    //   "f": "10",
    // }
```

<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#org6c3fb63">1. Installation</a></li>
<li><a href="#org783188d">2. Usage</a></li>
</ul>
</div>
</div>


<a id="org6c3fb63"></a>

# Installation
```sh
    $ npm install huffman-encode
```

<a id="org783188d"></a>

# Usage
```js
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
    //   "a": "1000",
    //   "b": "1001",
    //   "c": "101",
    //   "d": "00",
    //   "e": "01",
    //   "f": "11"
    // }
```

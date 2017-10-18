function createTree(probabilities) {
  const array = []
  for (let key in probabilities) {
    const value = parseInt(probabilities[key])
    if (probabilities.hasOwnProperty(key) &&
        !isNaN(value) &&
        value >= 1) {
      array.push({ key, value: probabilities[key] })
    }
  }

  array.sort((a, b) => a.value - b.value)

  while (array.length > 1) {
    const [left, right] = array.splice(0, 2)
    const value = left.value + right.value
    array.splice(binaryIndexOf(value, array), 0, { left, right, value })
  }

  return array[0]
}

function binaryIndexOf(value, array) {
  let low = 0, high = array.length
  while (low < high) {
    const mid = (low + high) >>> 1
    const computed = array[mid].value
    if (computed <= value) {
      low = mid + 1
    } else if (computed > value){
      high = mid
    }
  }
  return high
}

function encodeTree(tree) {
  if (!tree) return {}
  const huf = {}
  encodeTreeIter(tree, '', huf)
  return huf
}

function encodeTreeIter(tree, str, huf) {
  if (tree.key) {
    huf[tree.key] = str
  } else {
    encodeTreeIter(tree.left, str + '0', huf)
    encodeTreeIter(tree.right, str + '1', huf)
  }
}

function huffman(probabilities) {
  return encodeTree(createTree(probabilities))
}

module.exports = huffman

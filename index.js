function createTree(probabilities) {
  const bTree = [];
  for (let key in probabilities) {
    bTree.push([probabilities[key], key]);
  }

  bTree.sort((a, b) => a[0] - b[0]);

  while (bTree.length > 1) {
    const a = bTree.shift(),
          b = bTree.shift();
    binaryInsert([a[0] + b[0], a, b], bTree);
  }
  return bTree[0];
}

function binaryInsert(sub, bTree) {
  const len = bTree.length,
        weight = sub[0];
  if (len === 0) {
    bTree.push(sub);
    return ;
  }

  let left = 0,
      right = len - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2),
          midWeight = bTree[mid][0];

    if (weight > midWeight) {
      left = mid + 1;
    } else if (weight < midWeight){
      right = mid - 1;
    } else {
      bTree.splice(mid, 0, sub);
      return ;
    }
  }

  bTree.splice(left, 0, sub);
}

function encodeTree(tree) {
  const huf = {};
  encodeTreeIter(tree, '', huf);
  return huf;
}

function encodeTreeIter(tree, str, huf) {
  if (typeof tree[1] === 'string') {
    huf[tree[1]] = str;
  } else {
    encodeTreeIter(tree[1], str + '0', huf);
    encodeTreeIter(tree[2], str + '1', huf);
  }
}

function huffman(probabilities) {
  return encodeTree(createTree(probabilities));
}

module.exports = huffman;

function getPrefixes(data){
  return Object.keys(data);
}

function getNamespaceViaPrefix(prefix, data) {
  return data[prefix];
}

function getPrefixViaNamespace(namespace, data) {
  const prefixes = Object.keys(data);
  let i = 0;

  while (i < prefixes.length && data[prefixes[i]] !== namespace) {
    i ++;
  }

  if (i < prefixes.length) {
    return prefixes[i];
  } else {
    return null;
  }
}

module.exports = {
  getPrefixes,
  getNamespaceViaPrefix,
  getPrefixViaNamespace
}

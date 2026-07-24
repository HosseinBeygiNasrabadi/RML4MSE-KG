const utils = require('./utils.cjs');
const data = require('./data.json')['@context'];

module.exports = {
  getPrefixes: () => {
    return utils.getPrefixes(data)
  },
  asMap: () => {
    return data;
  },
  getNamespaceViaPrefix: (prefix) => {
    return utils.getNamespaceViaPrefix(prefix, data)
  },
  getPrefixViaNamespace: (prefix) => {
    return utils.getPrefixViaNamespace(prefix, data)
  }
}

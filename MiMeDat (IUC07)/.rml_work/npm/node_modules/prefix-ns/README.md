# prefix-ns

This npm module gives easy access to the prefixes and namespaces of [prefix.cc](https://prefix.cc).
Upon installation of this module, the latest dump is downloaded from prefix.cc and stored locally.
The dump is only updated when the module is re-installed.
A default dump (`data.json`) is available if the download of the dump fails.

## Usage

```$JavaScript
import * as prefixns from 'prefix-ns';

//The following method returns an array of all prefixes.
const allPrefixes = prefixns.getPrefixes();
console.log(allPrefixes);

// --> ['rdf', 'foaf', ...]

//The following method returns the namespace of a given prefix.
//null is returned when the prefix is not found.
const namespace = prefixns.getNamespaceViaPrefix('foaf');
console.log(namespace);

// --> http://xmlns.com/foaf/0.1/

//The following method returns the prefix of a given namespace.
//null is returned when the namespace is not found.
const prefix = prefixns.getPrefixViaNamespace('http://xmlns.com/foaf/0.1/');
console.log(prefix);

// --> foaf

//The following method returns a map where the prefixes are the keys and the namesapces are the values.
const map = prefixns.asMap();
console.log(map.foaf);

// --> http://xmlns.com/foaf/0.1/
```

If you want to use `require`, 
you do

```javascript
const prefixns = require('prefix-ns/index.cjs');
```

## License
MIT

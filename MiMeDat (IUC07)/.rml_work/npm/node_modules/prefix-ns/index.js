/**
 * Created by pheyvaer on 18.04.17.
 */

import fs from 'fs-extra';
import * as path from "node:path";
import * as utils from "./utils.cjs";

const data = (await fs.readJson(path.join(import.meta.dirname, 'data.json')))["@context"];

const getPrefixes = () => {return utils.getPrefixes(data)};
const asMap = () => { return data; };
const getNamespaceViaPrefix = (prefix) => {return utils.getNamespaceViaPrefix(prefix, data)};
const getPrefixViaNamespace = (prefix) => {return utils.getPrefixViaNamespace(prefix,data)};

export {getPrefixes, asMap, getNamespaceViaPrefix, getPrefixViaNamespace};

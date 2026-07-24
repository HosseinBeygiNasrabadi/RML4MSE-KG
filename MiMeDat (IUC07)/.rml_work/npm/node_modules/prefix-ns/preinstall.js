/**
 * Created by pheyvaer on 18.04.17.
 */

import fs from 'fs-extra';
const url = 'https://prefix.cc/context';

try {
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    await fs.writeJson('data.json', data, {spaces: 2});
  } else {
    throw Error(`Request returned status code: ${response.status}`);
  }
} catch (err) {
  console.error('Failed to fetch data from ' + url);
  console.error('Error:', err.message);

  process.exit(0);
}

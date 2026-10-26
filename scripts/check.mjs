import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const config = JSON.parse(readFileSync('vercel.json', 'utf8'));
assert.equal(config.outputDirectory, 'dist');
assert.equal(config.framework, null);
for (const file of ['dist/index.html', 'dist/style.css', 'dist/app.js']) {
  assert.ok(existsSync(file), `Missing deployment file: ${file}`);
}
const html = readFileSync('dist/index.html', 'utf8');
assert.match(html, /href="style\.css"/);
assert.match(html, /src="app\.js"/);
console.log('Static deployment files and Vercel configuration verified.');

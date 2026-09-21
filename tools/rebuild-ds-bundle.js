/* Rebuild _ds_bundle.js from the repo sources it was compiled from.

   The bundle concatenates every source listed in its own header manifest,
   Babel-transpiled, each wrapped in a try/catch section. Component sources
   additionally have their imports stripped, references to sibling components
   rewritten onto the shared __ds_scope, and their export registered there.

   Usage:  node tools/rebuild-ds-bundle.js [--check] [--only <path>[,<path>…]]
             --check  report which sections would change; write nothing
             --only   rebuild just these source paths (default: all)
*/
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const babel = require('@babel/standalone');

const ROOT = path.join(__dirname, '..');
const BUNDLE = path.join(ROOT, '_ds_bundle.js');

const argv = process.argv.slice(2);
const CHECK = argv.includes('--check');
const onlyIdx = argv.indexOf('--only');
const ONLY = onlyIdx >= 0 && argv[onlyIdx + 1] ? argv[onlyIdx + 1].split(',') : null;

const sha12 = (s) => crypto.createHash('sha256').update(s).digest('hex').slice(0, 12);

function compile(srcPath, source) {
  const isComponent = srcPath.startsWith('components/');
  let code = source;
  const scoped = [];
  if (isComponent) {
    // Imports are resolved by the bundle scope, not at runtime.
    code = code.replace(/^import\s+(?:(\w+)|\{([^}]*)\})\s+from\s+'[^']*';\n/gm, (_m, dflt, named) => {
      if (named) named.split(',').map((n) => n.trim()).filter(Boolean).forEach((n) => scoped.push(n));
      else if (dflt && dflt !== 'React') scoped.push(dflt);
      return '';
    }).replace(/^\n+/, '');
  }
  if (isComponent) code = code.replace(/^export\s+function\s/gm, 'function ');
  let out = babel.transform(code, { presets: ['react'] }).code;
  if (scoped.length) {
    for (const name of scoped) {
      out = out.replace(new RegExp(`(React\\.createElement\\()${name}\\b`, 'g'), `$1__ds_scope.${name}`);
    }
  }
  if (isComponent) {
    const exported = path.basename(srcPath, path.extname(srcPath));
    out += `\nObject.assign(__ds_scope, { ${exported} });`;
  }
  return out;
}

const bundle = fs.readFileSync(BUNDLE, 'utf8');
const lines = bundle.split('\n');
const sections = [];
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(/^\/\/ (.+\.(?:jsx|js))$/);
  if (!m || lines[i + 1] !== 'try { (() => {') continue;
  const close = `})(); } catch (e) { __ds_ns.__errors.push({ path: "${m[1]}"`;
  let j = i + 2;
  while (j < lines.length && !lines[j].startsWith(close)) j++;
  sections.push({ srcPath: m[1], from: i + 2, to: j });
  i = j;
}

const header = JSON.parse(lines[0].match(/^\/\* @ds-bundle: (.*) \*\/$/)[1]);
const changed = [];
// Rebuild back-to-front so earlier line offsets stay valid.
for (const s of [...sections].reverse()) {
  if (ONLY && !ONLY.includes(s.srcPath)) continue;
  const source = fs.readFileSync(path.join(ROOT, s.srcPath), 'utf8');
  const body = compile(s.srcPath, source);
  const before = lines.slice(s.from, s.to).join('\n');
  if (body.trim() === before.trim()) continue;
  changed.push(s.srcPath);
  lines.splice(s.from, s.to - s.from, ...body.split('\n'));
  header.sourceHashes[s.srcPath] = sha12(source);
}
lines[0] = `/* @ds-bundle: ${JSON.stringify(header)} */`;

if (!changed.length) { console.log('Bundle already up to date.'); process.exit(0); }
console.log((CHECK ? 'Would rebuild' : 'Rebuilt') + ' ' + changed.length + ' section(s):');
changed.reverse().forEach((p) => console.log('  ' + p));
if (!CHECK) fs.writeFileSync(BUNDLE, lines.join('\n'));

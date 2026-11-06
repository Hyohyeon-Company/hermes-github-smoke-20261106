import { readFileSync, readdirSync } from 'node:fs';
const fail = (msg) => { console.error('doc-check FAIL:', msg); process.exit(1); };
let readme;
try { readme = readFileSync('README.md', 'utf8'); } catch { fail('README.md missing'); }
let acc;
try { acc = JSON.parse(readFileSync('acceptance.json', 'utf8')); } catch { fail('acceptance.json missing or invalid'); }
if (!Array.isArray(acc.criteria) || acc.criteria.length === 0) fail('acceptance.json has no criteria');
for (const c of acc.criteria) {
  if (c.check === 'section_exists') {
    if (typeof c.value !== 'string' || !readme.includes('## ' + c.value)) {
      fail(`AC ${c.id}: missing section "## ${c.value}"`);
    }
  } else if (c.check === 'max_readme_chars') {
    if (typeof c.value !== 'number' || readme.length > c.value) {
      fail(`AC ${c.id}: README length ${readme.length} exceeds ${c.value}`);
    }
  } else {
    fail(`AC ${c.id}: unknown check type ${c.check}`);
  }
}
const forbidden = [/gh[posur]_[A-Za-z0-9]{16,}/, /BEGIN [A-Z ]*PRIVATE KEY/];
const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() && !e.name.startsWith('.') ? walk(`${dir}/${e.name}`)
    : (e.name.endsWith('.md') ? [`${dir}/${e.name}`] : []));
for (const f of walk('.')) {
  const text = readFileSync(f, 'utf8');
  for (const re of forbidden) if (re.test(text)) fail(`secret-like pattern in ${f}`);
}
console.log(`doc-check OK: ${acc.criteria.length} criteria validated`);

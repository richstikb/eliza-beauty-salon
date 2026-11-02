import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const script = fs.readFileSync('.webprojekt/forms.js', 'utf8');
const fields = [];
for (const page of ['index.html', 'rolunk.html', 'kapcsolat.html']) {
  const html = fs.readFileSync(`public/${page}`, 'utf8');
  const forms = [...html.matchAll(/<form\b[^>]*name="kapcsolat"[\s\S]*?<\/form>/g)];
  assert.equal(forms.length, 1, page);
  const form = forms[0][0];
  assert.match(form, /method="POST"/);
  assert.match(form, /data-netlify="true"/);
  assert.match(form, /name="form-name" value="kapcsolat"/);
  assert.match(form, /name="privacy-consent" value="yes" required/);
  assert.match(form, /netlify-honeypot="bot-field"/);
  fields.push([...form.matchAll(/<(?:input|textarea)\b[^>]*name="([^"]+)"/g)].map(m => m[1]).sort());
}
assert.deepEqual(fields[0], fields[1]);
assert.deepEqual(fields[1], fields[2]);
for (const name of ['kapcsolat', 'kisokos']) {
  for (const hostname of ['eliza-study.netlify.app', 'localhost', '127.0.0.1']) {
    // Simulate deployed HTML: data-netlify is absent, hidden form-name remains.
    let handler, prevented = false;
    const status = {textContent: '', append() {}};
    const form = {
      getAttribute: key => key === 'name' ? name : null,
      hasAttribute: () => false,
      querySelector: selector => selector === 'input[name="form-name"]' ? {value: name} : status,
      addEventListener: (_, callback) => { handler = callback; }
    };
    vm.runInNewContext(script, {
      location: {hostname, protocol: 'https:'},
      document: {querySelectorAll: () => [form], createElement: () => ({})}
    });
    handler({preventDefault: () => { prevented = true; }});
    assert.equal(prevented, hostname !== 'eliza-study.netlify.app', `${name}: ${hostname}`);
  }
}
console.log('PASS: both deployed forms allow native POST without data-netlify; local previews prevent sending.');

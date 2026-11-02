import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const script = fs.readFileSync('.webprojekt/forms.js', 'utf8');
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

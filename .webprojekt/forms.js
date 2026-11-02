// Production uses native POST and Netlify's success redirect; no false success on errors.
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', event => {
    const local = ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname) || location.protocol === 'file:';
    // Netlify removes data-netlify during HTML processing. The form name and
    // hidden form-name field survive deployment and identify enabled forms.
    const name = form.getAttribute('name');
    const enabled = ['kapcsolat', 'kisokos'].includes(name)
      && form.querySelector('input[name="form-name"]')?.value === name;
    if (enabled && !local) return;
    event.preventDefault();
    const status = form.querySelector('.form-status');
    status.textContent = enabled
      ? 'Helyi előnézet: nem küldtünk adatot. A beküldés a Netlify Forms aktiválása és a publikálás után működik.'
      : 'Ez bemutató űrlap, nem küldtünk adatot. Tesztüzenetet a Kapcsolat oldalon küldhetsz.';
    if (form.getAttribute('name') === 'kisokos') {
      const link = document.createElement('a');
      link.href = 'kisokos-letoltes.html';
      link.className = 'text-link';
      link.textContent = 'A letöltési oldal helyi előnézete';
      status.append(document.createElement('br'), link);
    }
  });
});

// Production uses native POST and Netlify's success redirect; no false success on errors.
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', event => {
    const local = ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname) || location.protocol === 'file:';
    if (form.hasAttribute('data-netlify') && !local) return;
    event.preventDefault();
    const status = form.querySelector('.form-status');
    status.textContent = form.hasAttribute('data-netlify')
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

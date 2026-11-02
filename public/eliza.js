const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');function closeMenu(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menü'}toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'Bezárás':'Menü'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();toggle.focus()}});matchMedia('(min-width:761px)').addEventListener('change',e=>{if(e.matches)closeMenu()});document.querySelectorAll('[data-package]').forEach(a=>a.addEventListener('click',()=>{const box=document.querySelector('form[data-kind="booking"] textarea');if(box)box.value='A következő csomag érdekel: '+a.dataset.package+'.';}));// Production uses native POST and Netlify's success redirect; no false success on errors.
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

const selectedPackage=new URLSearchParams(location.search).get('csomag');if(selectedPackage&&['Anti-Age','Anti-Age Plus','Tini Anti-Akné'].includes(selectedPackage)){const message=document.querySelector('form[data-kind="booking"] textarea');if(message)message.value='A következő csomag érdekel: '+selectedPackage+'.';}
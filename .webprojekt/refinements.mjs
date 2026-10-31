export function refinePage(html, file) {
  if (file === 'index.html' || file === 'kezelesek.html') {
    html = html.replace(/Figyelem a bőröd(?:<br>| )változó igényeire\.?/g, 'Fiatalosabb megjelenés, természetes hatás');
    html = html.replace('Sipos Eliza vagyok. Személyre szabott kezelésekkel és otthoni bőrápolási tanácsokkal segítek megtalálni a bőrödnek megfelelő törődést.', 'Sipos Eliza vagyok. Segítek kiválasztani a bőrödnek megfelelő kezelést, és tanácsot adok az otthoni bőrápoláshoz is.');
    html = html.replace(/Újra egyensúlyban(?:<br>| )a bőröd\.?/g, 'Ápolás a bőröd igényei szerint');
    html = html.replace('Célzott arcfiatalító kezelések, gondosan kiválasztott hatóanyagokkal. Arckezelés, illetve arc-nyak-dekoltázs kezelés a személyes kezelési terved részeként.', 'Célzott arcfiatalító kezelések, gondosan kiválasztott hatóanyagokkal. A bőröd állapota alapján együtt választjuk ki, hogy arckezelésre vagy az arc, a nyak és a dekoltázs együttes ápolására van szükséged.');
    html = html.replace('Növényi összetevők, aktív hatóanyagok és a bőröd állapotához igazított ápolás. A választást az első találkozáskor közösen beszéljük át.', 'A Belico kezelések során növényi összetevőket és a bőröd állapotához illő hatóanyagokat használok. Az első találkozáskor közösen választjuk ki a számodra megfelelő kezelést.');
  }
  if (file === 'kezelesek.html') {
    html = html.replace(/<section class="section wrap closing"[\s\S]*?<\/section>/, '');
    html = html.replace(/<section class="section p-process"[\s\S]*?<\/section>/, '<section class="section compact-process" aria-labelledby="process-title"><div class="wrap"><div class="compact-process-heading"><div><p class="kicker">Az első lépéstől együtt</p><h2 id="process-title">Hogyan működik?</h2></div><a class="button" href="kapcsolat.html#idopont">Időpontot kérek</a></div><ol class="compact-steps"><li><span>01</span><div><h3>Egyeztetünk</h3><p>Megbeszéljük, miben segíthetek, és időpontot választunk.</p></div></li><li><span>02</span><div><h3>Személyre szabjuk</h3><p>Felmérjük a bőröd állapotát, és összeállítjuk a kezelési tervedet.</p></div></li><li><span>03</span><div><h3>Gondoskodunk rólad</h3><p>A kezelés mellé otthoni bőrápolási tanácsokat is kapsz.</p></div></li></ol></div></section>');
    html = html.replace(/class="text-link"/g, 'class="button secondary treatment-cta"');
    html = html.replace(/href="#idopont" data-package="([^"]+)"/g, (_, name) => 'href="kapcsolat.html?csomag='+encodeURIComponent(name)+'#idopont" data-package="'+name+'"');
    html = html.replaceAll('href="#idopont"', 'href="kapcsolat.html#idopont"');
    html = html.replace('class="section powder"', 'class="section powder needs-section"');
    html = html.replace('class="section powder needs-section"><div class="wrap">', 'class="section powder needs-section"><div class="wrap needs-layout">');
    html = html.replace('amire most szükséged van.</p></div><div class="needs-grid">', 'amire most szükséged van.</p></div><img class="needs-illustration" src="assets/images/orchidea-vonalrajz.webp" width="600" height="540" alt="" aria-hidden="true" loading="lazy" decoding="async"><div class="needs-grid">');
    html = html.replace('class="section wrap"><div class="section-lead"><p class="kicker">A bőröd hálás', 'class="section wrap results-section"><div class="section-lead"><p class="kicker">A bőröd hálás');
    html = html.replace('<div class="b-guarantee"><h3>Elégedettségi garancia</h3><p>', '<div class="b-guarantee package-guarantee"><div class="guarantee-heading"><svg viewBox="0 0 40 44" fill="none" aria-hidden="true"><path d="M20 3 35 9v12c0 10-15 19-15 19S5 31 5 21V9L20 3Z" stroke="currentColor" stroke-width="1.5"/><path d="m12 21 6 6 11-13" stroke="currentColor" stroke-width="1.5"/></svg><h3>Elégedettségi garancia</h3></div><p>');
    html = html.replace('visszatérítem a díj 50%-át.</p></div>', 'visszatérítem a díj <strong>50%-át.</strong></p></div>');
  }
  if (file === 'rolunk.html') {
    html = html.replace('<div class="wrap story-layout"><div><p class="kicker">Az én történetem</p><h2>Egy álomból született szalon.</h2><ol', '<div class="wrap story-layout"><header class="story-heading"><p class="kicker">Az én történetem</p><h2>Egy álomból született szalon.</h2></header><div class="story-timeline"><ol');
    html = html.replace('class="section wrap"><div class="section-lead"><p class="kicker">Ami igazán fontos', 'class="section wrap values-section"><div class="section-lead"><p class="kicker">Ami igazán fontos');
    html = html.replace('class="section wrap values-section"><div class="section-lead">', 'class="section wrap values-section"><div class="values-heading"><img class="values-line-art" src="assets/images/noi-arc-vonalrajz-hajjal.webp" width="197" height="252" alt="" aria-hidden="true" loading="lazy"><div class="section-lead">');
    html = html.replace('Ezekből épül fel minden találkozásunk.</p></div><div class="value-grid">', 'Ezekből épül fel minden találkozásunk.</p></div></div><div class="value-grid">');
  }
  if (file === 'kapcsolat.html') {
    html = html.replace('</main>', `<section class="section location-section" aria-labelledby="location-title"><div class="wrap location-grid"><div class="location-copy"><p class="kicker">Itt találkozunk</p><h2 id="location-title">Egy kis nyugalom<br>a város szívében.</h2><p class="location-address">Eliza Beauty Salon<br><strong>1092 Budapest, Ráday u. 1.</strong></p><p>Hétfőtől péntekig 9:00–16:00.<br>Kizárólag előre egyeztetett időpontban.</p><a class="button secondary" href="https://www.google.com/maps/dir/?api=1&amp;destination=1092+Budapest,+R%C3%A1day+utca+1" target="_blank" rel="noopener noreferrer">Útvonaltervezés</a></div><div class="map-frame"><iframe title="A szalon címe a térképen: Budapest, Ráday utca 1." src="https://maps.google.com/maps?q=1092%20Budapest%20R%C3%A1day%20utca%201&amp;z=16&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe><p>1092 Budapest, Ráday u. 1. <span>Előre egyeztetett időpontban várlak.</span></p></div></div></section></main>`);
  }
  if (file === 'adatkezeles.html') html = html.replace('<h2>Az élesítés előtt elkészítendő</h2>', '<h2>Térkép</h2><p>A Kapcsolat oldalon Google Maps térkép segíti a tájékozódást. A térkép betöltésekor a böngésző kapcsolatot létesít a Google szolgáltatásával.</p><h2>Az élesítés előtt elkészítendő</h2>');
  return html;
}

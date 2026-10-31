const botanical = `<svg class="values-botanical" viewBox="0 0 240 220" fill="none" aria-hidden="true" focusable="false"><g stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M57 204C110 161 147 110 177 22M90 170C56 167 32 146 28 117C63 117 89 135 90 170ZM116 139C113 105 93 83 64 77C64 107 83 132 116 139ZM142 98C144 67 130 43 108 29C99 60 111 86 142 98ZM117 140C151 147 181 133 196 105C163 97 135 111 117 140ZM145 95C175 102 202 86 216 61C187 53 161 65 145 95ZM174 32C167 17 172 8 186 3C192 17 188 27 174 32Z"/><path d="M39 211H203" opacity=".5"/></g></svg>`;
export function refinePage(html, file) {
  if (file === 'kezelesek.html') {
    html = html.replace('class="section powder"', 'class="section powder needs-section"');
    html = html.replace('class="section wrap"><div class="section-lead"><p class="kicker">A bőröd hálás', 'class="section wrap results-section"><div class="section-lead"><p class="kicker">A bőröd hálás');
    html = html.replace('<div class="b-guarantee"><h3>Elégedettségi garancia</h3><p>', '<div class="b-guarantee package-guarantee"><div class="guarantee-heading"><svg viewBox="0 0 40 44" fill="none" aria-hidden="true"><path d="M20 3 35 9v12c0 10-15 19-15 19S5 31 5 21V9L20 3Z" stroke="currentColor" stroke-width="1.5"/><path d="m12 21 6 6 11-13" stroke="currentColor" stroke-width="1.5"/></svg><h3>Elégedettségi garancia</h3></div><p>');
    html = html.replace('visszatérítem a díj 50%-át.</p></div>', 'visszatérítem a díj <strong>50%-át.</strong></p></div>');
  }
  if (file === 'rolunk.html') {
    html = html.replace('<div class="wrap story-layout"><div><p class="kicker">Az én történetem</p><h2>Egy álomból született szalon.</h2><ol', '<div class="wrap story-layout"><header class="story-heading"><p class="kicker">Az én történetem</p><h2>Egy álomból született szalon.</h2></header><div class="story-timeline"><ol');
    html = html.replace('class="section wrap"><div class="section-lead"><p class="kicker">Ami igazán fontos', 'class="section wrap values-section"><div class="section-lead"><p class="kicker">Ami igazán fontos');
    html = html.replace('Nálam időt kapsz önmagadra.</p></article></div>', `Nálam időt kapsz önmagadra.</p></article><div class="botanical-panel">${botanical}</div></div>`);
  }
  if (file === 'kapcsolat.html') {
    html = html.replace('</main>', `<section class="section location-section" aria-labelledby="location-title"><div class="wrap location-grid"><div class="location-copy"><p class="kicker">Itt találkozunk</p><h2 id="location-title">Egy kis nyugalom<br>a város szívében.</h2><p class="location-address">Eliza Beauty Salon<br><strong>1092 Budapest, Ráday u. 1.</strong></p><p>Hétfőtől péntekig 9:00–16:00.<br>Kizárólag előre egyeztetett időpontban.</p><a class="button secondary" href="https://www.google.com/maps/dir/?api=1&amp;destination=1092+Budapest,+R%C3%A1day+utca+1" target="_blank" rel="noopener noreferrer">Útvonaltervezés</a></div><div class="map-frame"><iframe title="A szalon címe a térképen: Budapest, Ráday utca 1." src="https://maps.google.com/maps?q=1092%20Budapest%20R%C3%A1day%20utca%201&amp;z=16&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe><p>1092 Budapest, Ráday u. 1. <span>Előre egyeztetett időpontban várlak.</span></p></div></div></section></main>`);
  }
  if (file === 'adatkezeles.html') html = html.replace('<h2>Az élesítés előtt elkészítendő</h2>', '<h2>Térkép</h2><p>A Kapcsolat oldalon Google Maps térkép segíti a tájékozódást. A térkép betöltésekor a böngésző kapcsolatot létesít a Google szolgáltatásával.</p><h2>Az élesítés előtt elkészítendő</h2>');
  return html;
}

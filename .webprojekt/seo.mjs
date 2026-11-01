import fs from 'node:fs';

export const origin = 'https://eliza-study.netlify.app';
const image = '/assets/images/arckezeles-vilagos-szalonban-fekvo-1200.webp';
const pages = {
  'index.html': ['Kozmetikai arckezelések Budapesten | Eliza Beauty Salon', 'Személyre szabott arckezelések, bőrfiatalítás és hidratálás Sipos Eliza mesterkozmetikussal Budapesten, a Ráday utcában. Ismerd meg a kezeléseket és a szalont!'],
  'kezelesek.html': ['Belico és Mesotica arckezelések | Eliza Beauty Salon', 'Belico és Mesotica arckezelések, hidratálás és anti-akné programok Budapesten. Nézd meg a kezelések időtartamát, a csomagokat és válaszd ki a hozzád illő ápolást!'],
  'rolunk.html': ['Sipos Eliza mesterkozmetikus | Eliza Beauty Salon', 'Ismerd meg Sipos Eliza mesterkozmetikust, szakmai útját és értékeit. Személyes figyelem és nyugodt szalonkörnyezet Budapest Ráday utcájában. Nézz körül nálunk!'],
  'kapcsolat.html': ['Kapcsolat és nyitvatartás Budapesten | Eliza Beauty Salon', 'Az Eliza Beauty Salon elérhetőségei: 1092 Budapest, Ráday utca 1. Telefon, e-mail, nyitvatartás, térkép és válaszok a gyakori kérdésekre. Tervezd meg érkezésed!'],
  'adatkezeles.html': ['Adatkezelési tájékoztató – bemutató | Eliza Beauty Salon', 'Az Eliza Beauty Salon bemutató oldalának adatkezelési tudnivalói: az űrlapok működése, külső betűkészletek és térkép. Olvasd el a jelenlegi működés részleteit!']
};
const urlFor = file => origin + (file === 'index.html' ? '/' : '/' + file);
const esc = text => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
const plain = text => text.replace(/<[^>]*>/g, '').replaceAll('&amp;', '&').replace(/\s+/g, ' ').trim();

export function seoMarkup(html, file) {
  const [title, description] = pages[file];
  const url = urlFor(file);
  const salon = {
    '@type': 'BeautySalon', '@id': origin + '/#salon', name: 'Eliza Beauty Salon',
    url: origin + '/', image: origin + image, logo: origin + '/logo/logo.svg',
    telephone: '+36203449272', email: 'hello.elizabeauty@gmail.com',
    address: {'@type':'PostalAddress', streetAddress:'Ráday u. 1.', postalCode:'1092', addressLocality:'Budapest', addressCountry:'HU'},
    openingHoursSpecification: [{'@type':'OpeningHoursSpecification', dayOfWeek:['Monday','Tuesday','Wednesday','Thursday','Friday'], opens:'09:00', closes:'16:00'}]
  };
  const page = {'@type': file === 'rolunk.html' ? 'AboutPage' : file === 'kapcsolat.html' ? 'ContactPage' : 'WebPage', '@id': url + '#webpage', url, name:title, description, inLanguage:'hu-HU', about:{'@id':salon['@id']}};
  const graph = [salon, page];
  if (file === 'rolunk.html') {
    const person = {'@type':'Person','@id':origin+'/#eliza',name:'Sipos Eliza',jobTitle:'Mesterkozmetikus',worksFor:{'@id':salon['@id']},image:origin+'/assets/images/mosolygo-szoke-no-turkiz-felsoben-asztalnal-1200.webp'};
    graph.push(person); page.mainEntity = {'@id':person['@id']};
  }
  // Mark up the visible FAQ only once, on its dedicated contact destination.
  if (file === 'kapcsolat.html') {
    const questions = [...html.matchAll(/<details><summary>([\s\S]*?)<\/summary><p>([\s\S]*?)<\/p><\/details>/g)].map(m => ({'@type':'Question',name:plain(m[1]),acceptedAnswer:{'@type':'Answer',text:plain(m[2])}}));
    if (questions.length) graph.push({'@type':'FAQPage','@id':url+'#faq',url:url+'#faq-title',inLanguage:'hu-HU',mainEntity:questions});
  }
  html = html.replace(/<title>[\s\S]*?<\/title>/, '<title>'+esc(title)+'</title>')
    .replace(/<meta name="description"[^>]*>/, '<meta name="description" content="'+esc(description)+'">');
  // Replace our own block on repeat invocation; never duplicate metadata.
  html = html.replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/g, '');
  const tags = [
    `<link rel="canonical" href="${url}">`,
    `<meta name="robots" content="${file === 'adatkezeles.html' ? 'noindex, follow' : 'index, follow, max-image-preview:large'}">`,
    ...Object.entries({'og:title':title,'og:description':description,'og:url':url,'og:type':'website','og:locale':'hu_HU','og:site_name':'Eliza Beauty Salon','og:image':origin+image,'og:image:alt':'Kozmetikai arckezelés világos szalonban'}).map(([k,v])=>`<meta property="${k}" content="${esc(v)}">`),
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:title" content="${esc(title)}">`,
    `<meta name="twitter:description" content="${esc(description)}">`,
    `<meta name="twitter:image" content="${origin+image}">`,
    '<script type="application/ld+json">'+JSON.stringify({'@context':'https://schema.org','@graph':graph}).replaceAll('<','\\u003c')+'</script>'
  ];
  return html.replace('</head>', '<!-- seo:start -->\n'+tags.join('\n')+'\n<!-- seo:end -->\n</head>');
}

export function writeDiscoveryFiles() {
  const urls = Object.keys(pages).filter(file=>file!=='adatkezeles.html').map(file=>`  <url><loc>${urlFor(file)}</loc></url>`);
  fs.writeFileSync('public/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+urls.join('\n')+'\n</urlset>\n');
  fs.writeFileSync('public/robots.txt',`User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
}

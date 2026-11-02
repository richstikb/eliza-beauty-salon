## Mappák és publikálás

- public/: kizárólag az aktuális oldal, aloldalak és a hivatkozott WebP/SVG eszközök. A hosting publish directory beállítása: public.
- .webprojekt/: generátorok, képmanifest és ellenőrzések.
- képek/, logo/, assets/: megőrzött eredetik és újraépítéshez szükséges eszközforrások.
- koncepcio-*.html, koncepciok.html: megőrzött tervek, nem kerülnek publikálásra.
- A gyökér Markdown-fájljai projektleírások és munkaanyagok.

Újraépítés: node .webprojekt/build-selected.mjs. A generátor ellenőrzi a helyi hivatkozásokat és csak a használt eszközöket másolja a public mappába. A korábbi orchidea helyén a legújabb virágos női vonalrajz jelenik meg.

# Eliza — Nyugodt gondoskodás

A kiválasztott és egyetlen aktív irány az 5. koncepció. A publikálható oldal a public/index.html fájlból indul.

- index.html: teljes főoldal.
- kezelesek.html: kezelések, időtartamok, csomagok és csomagválasztás.
- rolunk.html: Eliza története, értékei és a szalon.
- kapcsolat.html: elérhetőségek, időpontkérő és GYIK.
- adatkezeles.html: a kurzus Word-mintájából készített tanulmányi adatkezelési tájékoztató.
- kisokos-letoltes.html: beküldés utáni letöltési oldal; a fájl assets/downloads/eliza-kisokos-teszt.txt.

Közös arculat: eliza.css; működés: eliza.js. A Google Fonts betűihez internetkapcsolat szükséges. A menü oldalakat kapcsol össze; mobilon nyitható és Escape-pel bezárható. A csomagválasztás előtölti az időpontkérő üzenetét.

A Kapcsolat oldal űrlapja Netlify Forms bekötésére előkészített; helyi előnézetben nem küld adatot. A főoldali Kisokos-űrlap szintén Netlify Forms bekötésére előkészített, a többi űrlap bemutató. A Kisokos tanulmányi tesztfájl, nem hírlevél vagy automatikus e-mail. Az adatkezelési oldal tanulmányi minta, nem valódi szalon teljes jogi dokumentuma. A 62 eredeti kép változatlan. Az aktív oldalak 8 fényképe optimalizált WebP formátumot használ, reszponzív méretekkel (assets/images/). A logók megmaradnak éles, vektoros SVG formátumban.

## Kapcsolati űrlap bekötése

A kapcsolat.html űrlap neve kapcsolat: natív POST-küldés, data-netlify jelölés, form-name rejtett mező és bot-field spamcsapda. Kötelező a név, e-mail, üzenet és az adatkezelési hozzájárulás. A hozzájárulás és a tájékoztató verziója külön mezőben kerül beküldésre. Sikeres fogadás után a Netlify alapértelmezett visszaigazoló oldala jelenik meg.

Bekötés: a Netlify projekt Forms paneljén Enable form detection, majd az új változat külön engedélyezett publikálása. Ezután ellenőrizd, hogy megjelent a kapcsolat nevű űrlap, és próbaüzenettel igazold a fogadást. E-mail-értesítés külön állítható be a Submission notifications résznél. A kód helyi ellenőrzése nem igazolja a Netlify-oldali kézbesítést. A tanulmányi tájékoztató kapcsolattartási címe alt.boglarka@gmail.com; Sipos Eliza fiktív szereplő. Valódi üzleti használathoz a tényleges adatkezelő teljes azonosítása és a szolgáltatásokhoz igazított tájékoztató szükséges.

Dokumentáció: https://docs.netlify.com/manage/forms/setup/

Korábbi koncepciók: koncepciok.html. Az eredeti három változat megmaradt; a 4. és 5. összehangolt főoldal is külön fájlban megtekinthető.

Ellenőrzés: helyi fájlok és hivatkozások, egyedi azonosítók, oldalanként egy H1; 375 px mobilnézetben nincs vízszintes túlcsordulás; mobilmenü, Escape, GYIK, csomagválasztás és a bemutató űrlap-visszajelzés működik. Asztali és mobil képi ellenőrzés megtörtént.

Helyi előnézet: node .webprojekt/preview.mjs, majd http://127.0.0.1:4173.

Az aktív oldalak újraépítése: node .webprojekt/build-selected.mjs. A generátor az 5. koncepció szakaszait és közös arculatát használja.

Képoptimalizálás: .webprojekt/optimize-images.py (Pillow/WebP), majd node .webprojekt/build-selected.mjs. A forrás–WebP megfeleltetés és méretek: .webprojekt/image-manifest.json. A 8 egyedi kép összmérete 11 091 891 bájtról 575 038 bájtra csökkent a legnagyobb WebP-változatokkal számolva (94,8%). Az archivált koncepciók változatlanok.

2026. október 31. – A nyolc böngészős megjegyzés alapján finomított szakaszelválasztók, kezelési bevezető, eredményblokk, kiemelt garancia, történeti elrendezés, növényi vonalrajz, rövidebb űrlap–GYIK térköz és Google Maps térkép útvonaltervezéssel. A térkép internetkapcsolatot használ. A változtatások forrása: .webprojekt/refinements.mjs és .webprojekt/refinements.css; a közös generátor ezeket is alkalmazza. Ellenőrizve 1280, 484 és 375 px szélességen.

Újabb finomítás: visszafogott krém garanciablokk, körvonalas kezelési CTA-k; a Kezelések oldalon nincs űrlap, a rövid, púder folyamatleírás után a lábléc következik. A csomagválasztás a Kapcsolat oldal űrlapjába viszi a csomagnevet. Az értékek fejlécének dekorációja az eredeti noi-arc-vonalrajz-hajjal.png veszteségmentes WebP-másolata, a levélrajz eltávolítva.

A Kezelések bevezetőjében asztali nézetben a korábban nem használt pumpas-kozmetikum-levelekkel-nagy.png optimalizált WebP-másolata tölti ki a jobb oldali teret. A Kapcsolat GYIK előtti elválasztó rövid, rombuszos lett. A főoldali és Belico-szövegek természetesebb megfogalmazást kaptak.

## SEO / GEO / AEO – 2026. november 1.

Az öt aktív oldal egyedi title, meta description, canonical, Open Graph és Twitter megosztási metaadatokat kapott. A domain https://eliza-study.netlify.app. Új domain esetén a .webprojekt/seo.mjs origin értékét kell módosítani, majd újraépíteni.

A strukturált adatok a látható tartalomból származnak: BeautySalon + WebPage, a Rólunk oldalon Person/AboutPage, a Kapcsolat oldalon ContactPage és a négy látható kérdéssel pontosan egyező FAQPage. Az ismétlődő főoldali GYIK-et nem jelöljük másodszor. Nincsenek kitalált koordináták, közösségi profilok vagy értékelési pontszámok.

A public/sitemap.xml négy tartalmi oldalt sorol fel. A befejezetlen adatkezelési oldal noindex, follow jelölést kapott, a sitemapből kimarad, de a robotok hozzáférhetnek. A robots.txt a sitemapre mutat. Az eredeti favicon, alt szövegek, egy H1/oldal és reszponzív WebP-k megmaradtak. A body tartalma minden oldalon bájtra egyezik az előző commitéval.

Ellenőrzés: a vikingo-seo ellenőrzője 17 hibáról 0 hibára javult. JSON-LD gráfok, egyedi azonosítók, duplikációmentes metaadatok, pontos GYIK-szövegegyezés és helyi böngészős megjelenés ellenőrizve. Egyetlen figyelmeztetés: nincs HTML-ben látható Search Console-hitelesítés; DNS-hitelesítés ettől még lehetséges.

A változás nincs automatikusan élesítve. Külön publikálás után javasolt a sitemap beküldése Search Console-ba, Schema Markup Validator / Rich Results Test és PageSpeed mérés. A projekt fiktív tanulmányi feladat: valódi Google Business Profile regisztrációt nem végzünk. A strukturált adatok nem garantálnak Google-helyezést, FAQ-kiemelést vagy AI-válaszokba kerülést.

## Kisokos és adatkezelési teszt – 2026. november 1.

A főoldali kisokos nevű Netlify-űrlap POST-küldés után a /kisokos-letoltes.html oldalra irányít. Az e-mail és a külön, alapból üres hozzájárulási jelölőnégyzet kötelező, a név opcionális. Hírlevél-szolgáltatás és automatikus levélküldés nincs bekötve. A TXT letöltés böngészőben ellenőrzött; a fájl nyilvánosan is elérhető, nem védett tartalom. Helyi előnézetben nem történik adatküldés, külön előnézeti link vezet a letöltési oldalra.

A 30 napos megőrzés a kapcsolati és a Kisokos-tesztadatokra is vonatkozik. A projektkészítőnek legkésőbb a beküldéstől számított 30. napon törölnie kell a Netlify Forms beküldéseket és az esetleges exportokat/e-mail-másolatokat. Automatikus törlési feladat nem készült. Visszavonás esetén korábban is törölni kell.

Publikálás után ellenőrizendő: Forms-felismerés aktív; kapcsolat és kisokos megjelenik a Forms panelen; mindkét próbabeküldés valóban beérkezik; a Kisokos-küldés a letöltési oldalra vezet. A helyi ellenőrzés ezt nem helyettesíti. Az e-mail-cím szöveges megadása nem állít be Netlify-értesítést. A változtatás önmagában nem indít éles publikálást.

A tájékoztató forrása .webprojekt/privacy-content.mjs, az űrlapkezelésé .webprojekt/forms.js és .webprojekt/refinements.mjs. Az eredeti Word-fájl változatlan. A footerlinkek minden oldalon ellenőrizve; adatkezeles.html és kisokos-letoltes.html noindex, a sitemapben nem szerepelnek.

## Űrlapjavítás – 2026. november 2.

A Netlify az éles HTML-ből eltávolítja a data-netlify attribútumot. A JavaScript ezért most az űrlap nevét és a megmaradó rejtett form-name értékét ellenőrzi; a korábbi feltétel tévesen megállította az éles POST-küldést. Regressziós ellenőrzés: node .webprojekt/check-forms.mjs. A főoldali és Rólunk oldali időpontkérők továbbra is bemutatók; működő üzenetküldés a Kapcsolat oldalon van.

A Netlify kapcsolat űrlapjához beállított e-mail-értesítés: alt.boglarka@gmail.com. A mentett beállítás ellenőrizve; postaládába érkezés még nincs igazolva. A Kisokoshoz nem állítottunk be e-mail-értesítést.

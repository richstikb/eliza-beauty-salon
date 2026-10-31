# Eliza — Nyugodt gondoskodás

A kiválasztott és egyetlen aktív irány az 5. koncepció. Nyisd meg az index.html fájlt böngészőben.

- index.html: teljes főoldal.
- kezelesek.html: kezelések, időtartamok, csomagok és csomagválasztás.
- rolunk.html: Eliza története, értékei és a szalon.
- kapcsolat.html: elérhetőségek, időpontkérő és GYIK.
- adatkezeles.html: a még hiányzó végleges tájékoztatót jelző oldal.

Közös arculat: eliza.css; működés: eliza.js. A Google Fonts betűihez internetkapcsolat szükséges. A menü oldalakat kapcsol össze; mobilon nyitható és Escape-pel bezárható. A csomagválasztás előtölti az időpontkérő üzenetét.

Az űrlapok bemutatók, nem küldenek adatot. A Kisokos letöltése és a végleges adatkezelési tájékoztató későbbi feladat. A 62 eredeti kép változatlan. Az aktív oldalak 8 fényképe optimalizált WebP formátumot használ, reszponzív méretekkel (assets/images/). A logók megmaradnak éles, vektoros SVG formátumban.

Korábbi koncepciók: koncepciok.html. Az eredeti három változat megmaradt; a 4. és 5. összehangolt főoldal is külön fájlban megtekinthető.

Ellenőrzés: helyi fájlok és hivatkozások, egyedi azonosítók, oldalanként egy H1; 375 px mobilnézetben nincs vízszintes túlcsordulás; mobilmenü, Escape, GYIK, csomagválasztás és a bemutató űrlap-visszajelzés működik. Asztali és mobil képi ellenőrzés megtörtént.

Helyi előnézet: node .webprojekt/preview.mjs, majd http://127.0.0.1:4173.

Az aktív oldalak újraépítése: node .webprojekt/build-selected.mjs. A generátor az 5. koncepció szakaszait és közös arculatát használja.

Képoptimalizálás: .webprojekt/optimize-images.py (Pillow/WebP), majd node .webprojekt/build-selected.mjs. A forrás–WebP megfeleltetés és méretek: .webprojekt/image-manifest.json. A 8 egyedi kép összmérete 11 091 891 bájtról 575 038 bájtra csökkent a legnagyobb WebP-változatokkal számolva (94,8%). Az archivált koncepciók változatlanok.

2026. október 31. – A nyolc böngészős megjegyzés alapján finomított szakaszelválasztók, kezelési bevezető, eredményblokk, kiemelt garancia, történeti elrendezés, növényi vonalrajz, rövidebb űrlap–GYIK térköz és Google Maps térkép útvonaltervezéssel. A térkép internetkapcsolatot használ. A változtatások forrása: .webprojekt/refinements.mjs és .webprojekt/refinements.css; a közös generátor ezeket is alkalmazza. Ellenőrizve 1280, 484 és 375 px szélességen.

Újabb finomítás: visszafogott krém garanciablokk, körvonalas kezelési CTA-k; a Kezelések oldalon nincs űrlap, a rövid, púder folyamatleírás után a lábléc következik. A csomagválasztás a Kapcsolat oldal űrlapjába viszi a csomagnevet. Az értékek fejlécének dekorációja az eredeti noi-arc-vonalrajz-hajjal.png veszteségmentes WebP-másolata, a levélrajz eltávolítva.

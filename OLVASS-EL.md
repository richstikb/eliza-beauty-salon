# Eliza — Nyugodt gondoskodás

A kiválasztott és egyetlen aktív irány az 5. koncepció. Nyisd meg az index.html fájlt böngészőben.

- index.html: teljes főoldal.
- kezelesek.html: kezelések, időtartamok, csomagok és csomagválasztás.
- rolunk.html: Eliza története, értékei és a szalon.
- kapcsolat.html: elérhetőségek, időpontkérő és GYIK.
- adatkezeles.html: a még hiányzó végleges tájékoztatót jelző oldal.

Közös arculat: eliza.css; működés: eliza.js. A Google Fonts betűihez internetkapcsolat szükséges. A menü oldalakat kapcsol össze; mobilon nyitható és Escape-pel bezárható. A csomagválasztás előtölti az időpontkérő üzenetét.

Az űrlapok bemutatók, nem küldenek adatot. A Kisokos letöltése és a végleges adatkezelési tájékoztató későbbi feladat. A 62 eredeti kép változatlan; optimalizálás nem történt.

Korábbi koncepciók: koncepciok.html. Az eredeti három változat megmaradt; a 4. és 5. összehangolt főoldal is külön fájlban megtekinthető.

Ellenőrzés: helyi fájlok és hivatkozások, egyedi azonosítók, oldalanként egy H1; 375 px mobilnézetben nincs vízszintes túlcsordulás; mobilmenü, Escape, GYIK, csomagválasztás és a bemutató űrlap-visszajelzés működik. Asztali és mobil képi ellenőrzés megtörtént.

Helyi előnézet: node .webprojekt/preview.mjs, majd http://127.0.0.1:4173.

Az aktív oldalak újraépítése: node .webprojekt/build-selected.mjs. A generátor az 5. koncepció szakaszait és közös arculatát használja.

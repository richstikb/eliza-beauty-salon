# Főoldalkoncepciók

Nyisd meg az `index.html` fájlt böngészőben. Innen mindhárom teljes főoldal elérhető. A Google Fonts betűk betöltéséhez internetkapcsolat szükséges.

1. Személyes törődés: Eliza portréjával nyitó, személyes megközelítés.
2. Egy óra magadra: nyugodt, képközpontú főoldal.
3. A bőrödre hangolva: kezelésekre és könnyű tájékozódásra épülő változat.

A fő navigáció a főoldal megfelelő részeihez vezet; külön aloldalak még nem készültek. Az űrlapok nem küldenek adatot. A Kisokos és a végleges adatkezelési tájékoztató később kerül bekötésre. Az eredeti képek változatlanok, optimalizálás később.

Ellenőrzés: mindhárom koncepció asztali és 375 px-es mobilnézetben; mobilmenü nyitás és Escape bezárás; GYIK nyitás; időpontkérő helyi bemutató-visszajelzés; képek és belső hivatkozások; 62 eredeti kép SHA-256 egyezése.

A külső Tailwind Play CDN-t eltávolítottam, mert a későn betöltött reset felülírta a helyi címsorstílusokat. Minden oldal saját, teljes inline CSS-t tartalmaz, a megadott design system szerint.

Opcionális helyi előnézet Node.js-szel: `node .webprojekt/preview.mjs`, majd http://127.0.0.1:4173.

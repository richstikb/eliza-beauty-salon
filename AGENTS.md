# Projektutasítások

- Az aktív weboldal kizárólag az 5. „Nyugodt gondoskodás” koncepcióra épül.
- Minden elkészült változtatást ellenőrzés után Git commitban kell menteni. A felhasználó ezt 2026. október 31-én kifejezetten kérte.
- Az aktív oldalakat a `.webprojekt/build-selected.mjs` generálja. A módosításokat a generátorban, illetve a használt forrásmodulokban is vezesd át, hogy újraépítéskor megmaradjanak.
- Az eredeti képeket és az archivált koncepciókat őrizd meg. Az aktív oldalak raszteres képei optimalizált WebP-fájlokat használjanak.

- Az aktív generált oldal a public/ mappában van. A generátor futtatása után ellenőrizd a public/ tartalmát; munkaanyag ne kerüljön bele.
- Éles publikálást csak a felhasználó külön, kifejezett kérésére végezz. A commit és a GitHub push nem jelent publikálási engedélyt. Az eliza-study Netlify-projekt Build status beállítása Stopped (2026-11-01); kézi CLI/API deploy előtt építsd újra és ellenőrizd a public/ mappát. Ne kapcsold vissza tartósan az automatikus buildeket.

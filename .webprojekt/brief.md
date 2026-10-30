# Eliza Beauty Salon – projektbrief

Állapot: a meglévő ügyfélanyagok és a felhasználó 2026. október 30-i döntései alapján rögzített munkabrief. A felhasználó mindhárom koncepció megvalósítását kérte.

## Források és kötelező döntések
- `../eliza-jegyzet.md`: ügyfél, célok, funkciók, oldalak.
- `../szovegek.md`: a tartalom, adatok, ajánlatok és vélemények forrása. Új ár, statisztika, minősítés vagy eredményígéret nem található ki.
- `../design-system.md`: kötelező arculat; az ott szereplő opcionális minősítést a felhasználó felülírta.
- Fiktív ügyfélprojekt, valós ügyfélmunkához illő gondossággal. A felületen nincs szükség fiktív ügyfélre utaló feliratokra.
- Eliza kijelölt portréja: `../képek/02_Portrek/mosolygo-szoke-no-turkiz-felsoben-asztalnal.jpg`. A projektben Sipos Elizaként szerepelhet, felhasználói kijelölés alapján. Az eredeti fájlt és a forrásnaplót változatlanul megőrizzük.
- Most csak a főoldal három lehetséges iránya készül. Képoptimalizálás később; most nincs átméretezés, konvertálás vagy tömörítés.

## Pozicionálás
Sipos Eliza személyre szabott kozmetikai kezeléseket kínál bőrfiatalításra és problémás bőr ápolására, személyes figyelemmel, természetes hatóanyagokkal és modern technológiákkal.

A kezelési kínálatból következő célcsoport: bőrfiatalítást, hidratálást kereső 35–40 év feletti vendégek, illetve aknés bőrrel küzdő fiatalok. Ez a tartalom alapján levont tervezési következtetés, nem külön ügyfélkutatás.

Elsődleges cselekvés: időpontkérés. Felirat: „Időpontot kérek”. Másodlagos: „Megnézem a kezeléseket”. Nincs azonnal visszaigazolt online foglalás; Eliza egyezteti vissza a kérést.

## Kötelező vizuális rendszer
- Elsődleges rózsafa: #8E4A5A; aktív/hover: #6E3644.
- Homokarany: #C9A27E, csak díszítésre, illetve megfelelő sötét felületen.
- Krém: #FAF6F2; púder: #F1E6DF; kakaó: #2E2626; másodlagos szöveg: #6B5F5C; vonal: #E3D6CF.
- Cormorant Garamond 500/600 címsorok, Jost 400/500 törzsszöveg és kezelőfelület.
- H1 64/40 px, H2 44/32 px, törzs 18/16 px, desktop/mobil.
- 1200 px tartalomszélesség; legfeljebb 680 px szövegoszlop; mobilon 20 px oldalsó margó.
- 8 px térközrendszer; szakaszok desktopon 96–128 px, mobilon 64 px.
- Képek és kártyák 16 px, mezők 12 px lekerekítéssel; kapszulagombok.
- Nyugodt, nőies, prémium és személyes. Nincs harsány effekt, neon, erős színátmenet vagy túldíszítés.

## Teljes oldalstruktúra, későbbi megvalósításhoz
Főoldal; Kezelések (egyetlen gyűjtőoldal); Rólunk; Kapcsolat; Adatkezelési tájékoztató.

## Közös főoldaltartalom
Nyitószakasz, kezelési előnézet, előnyök és garancia, Eliza bemutatkozása, Fruzsi és Magdi véleménye, a négy lépéses folyamat, GYIK, Arcápolási Kisokos feliratkozás, időpontkérő és lábléc. Az elemek sorrendje koncepciónként eltérhet. Az önálló felhívás beépíthető az időpontkérőbe, így nem ismétlődik ugyanaz az üzenet.

## Megvalósítási határok
A következő kör böngészhető főoldal-prototípusokat adhat. Az aloldalakat később építjük. A prototípusban a fő navigáció a megfelelő főoldalszakaszokhoz vezethet. A mobilmenü, GYIK és belső navigáció működjön. Külső űrlapküldés és hírlevél-szolgáltatás még nincs bekötve; a prototípus nem jelezhet valótlan sikeres küldést vagy letöltést.

A Kisokos és a végleges adatkezelési szöveg még hiányzik; ezek nem akadályozzák a vizuális tervezést. A garancia megfogalmazását a főoldali forráshoz igazítjuk: öt alkalom után elégedetlenség esetén 50% visszatérítés. A későbbi aloldalakon ugyanezt kell következetesen használni.

## Véleményekhez kijelölt portrék
A felhasználó engedélyével a fiktív projektben a véleményekhez is társítunk portrét. A szerepek mindhárom koncepcióban azonosak:
- Fruzsi: `../képek/02_Portrek/mosolygo-hosszu-haju-no-rozsaszin-felsoben-kisfelbontasu.png`.
- Magdi: `../képek/02_Portrek/mosolygo-rovid-barna-haju-no-kisfelbontasu.png`.
- Eliza türkiz felsős, asztalnál ülő portréja kizárólag Eliza bemutatására használható, vendégvéleményhez nem.
A hozzárendelés a fiktív projekt szereposztása, nem a képen szereplő személyek valós azonosítása. A képek kisebb, 64–80 px-es, 16 px lekerekítésű portréként jelenjenek meg a vélemény mellett. A kivágás CSS-sel történjen, arcra igazítva; az eredeti képfájlok és az idézetek változatlanok maradnak. Optimalizálás később.


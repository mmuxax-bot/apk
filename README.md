# Hər Gün Ərəbcə

Ərəbcə öyrənmək üçün sadə veb tətbiq. Feillər, dialoqlar, testlər, flash kartlar, irəliləyiş sistemi (XP, səviyyə, nişanlar) və statistika bölmələrindən ibarətdir.

## Bölmələr

- **Feillər** — 350 ərəbcə feil (keçmiş, indiki, əmr formaları və nümunə cümlələrlə), favoritə əlavə etmək mümkündür
- **Dialoqlar** — 300 gündəlik dialoq nümunəsi
- **Testlər** — Adi test, Sürətli cavab rejimi və Söz birləşdirmə oyunu
- **Flash kartlar** — Bütün sözlər / Öyrənilməmişlər / Favoritlər üzrə kart-çevirmə məşqi
- **Statistika** — öyrənilən sözlər, dialoqlar, testlər, uğur faizi, davamlılıq seriyası, nişanlar

## İstifadə

`index.html` faylını brauzerdə açmaq kifayətdir. Əlavə quraşdırma tələb olunmur.

GitHub Pages ilə yayımlamaq üçün: Settings → Pages → Branch seçib saxlayın, bir neçə dəqiqədən sonra tətbiq canlı linkdə görünəcək.

### Offline istifadə (PWA)

Tətbiq indi "Progressive Web App" kimi qurulub:
- Telefonda saytı açıb brauzerin menyusundan **"Ana ekrana əlavə et" / "Add to Home Screen"** seçsəniz, tətbiq ikon şəklində quraşdırılır və internetsiz də açılır.
- Bu, `manifest.json` və `sw.js` (Service Worker) fayllarının əsas fayl və şəkilləri keşləməsi ilə işləyir.
- **Vacib:** tətbiqdə dəyişiklik edib yenidən yüklədikdən sonra istifadəçilərin köhnə keşlənmiş versiyanı görməməsi üçün `sw.js` faylındakı `CACHE_NAME` dəyərini hər real yeniləmədə artırın.

### Günlük bildiriş xatırlatması

Statistika səhifəsində "🔔 Günlük xatırlatma" bölməsindən aktivləşdirilir:
- Bildirişlərə icazə verib, xatırlatma vaxtını seçirsiniz (məs. 19:00).
- Tətbiq açıq olduğu müddətdə (və ya Chrome/Android-də quraşdırılmış PWA arxa fonda "Periodic Background Sync" dəstəkləyirsə) seçilən vaxtdan sonra gündə bir dəfə bildiriş göndərilməyə çalışılır.
- **Vacib məhdudiyyət:** bu, real push-bildiriş serveri olmadığı üçün 100% zəmanətli deyil — brauzer dəstəyindən (əsasən Chrome/Android-də işləyir, Safari/iOS-da məhdud və ya işləməyə bilər), telefonun enerji qənaəti ayarlarından və tətbiqin nə qədər tez-tez açıldığından asılıdır. Tam zəmanətli bildiriş üçün arxa server (Web Push) lazımdır.
- "Sınaq bildirişi göndər" düyməsi ilə bildirişin telefonunuzda göründüyünü yoxlaya bilərsiniz.

## Fayl strukturu

- `index.html` — əsas səhifə, stillər və PWA meta teqləri
- `app.js` — əsas məntiq (menyu, öyrənmə, test, flash kart, XP/statistika)
- `verbs.js` — feillərin məlumat bazası
- `dialogues.js` — dialoqların məlumat bazası
- `tests.js` — test suallarının məlumat bazası
- `manifest.json` — PWA quraşdırma məlumatları (ad, ikon, rənglər)
- `sw.js` — Service Worker (offline keşləmə)
- `icons/` — tətbiq ikonları (192px, 512px, maskable, apple-touch)

Öyrənilən məlumatlar, favoritlər, XP və nişanlar brauzerin `localStorage`-ında saxlanılır.

## Versiya

Cari versiya: **v1.1.0**

### v1.1.0 yenilikləri
- Ərəbcə tələffüz (🔊 TTS) — feillər, nümunə cümlələr və dialoqlarda
- Feillər və dialoqlar üçün axtarış + filtr (öyrənilmiş / öyrənilməmiş / favorit)
- Siyahı görünüşü (☰) — bütün feil və dialoqlara tez baxış
- Proqressi JSON kimi yükləmə / ixrac etmə (statistika səhifəsində)
- Daha yaxşı ərəbcə şrifti (Noto Naskh Arabic + Amiri)
- Service Worker keş versiyası yeniləndi

Ekranın altında versiya göstərilir. Yeni funksiya əlavə olunanda "Kiçik" rəqəm (`v1.2.0`), xəta düzəlişində "Düzəliş" rəqəmi (`v1.1.1`) artacaq.

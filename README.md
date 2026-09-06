# Hər Gün Ərəbcə — Capacitor (Android) layihəsi

Bu, "Hər Gün Ərəbcə" tətbiqinin **əsl Android APK** versiyasıdır. Sadə WebView-wrapper (Appilix və s.) yerinə [Capacitor](https://capacitorjs.com) istifadə olunur ki, bildirişlər kimi funksiyalar native Android sistemi üzərindən, tam etibarlı işləsin.

## Build necə edilir?

Bax: **[README-TERMUX.md](./README-TERMUX.md)** — Termux-da addım-addım APK build təlimatı.

Kompüterdə Android Studio ilə build etmək istəsəniz: `npm install`, sonra `npx cap add android`, sonra `npx cap open android` ilə Android Studio-da açıb adi qaydada build edin.

## Play Store-a çıxarmaq

Bax: **[PLAY_STORE_GUIDE.md](./PLAY_STORE_GUIDE.md)** — imzalama açarı (keystore) yaratmaq, rəsmi (release) build almaq, Google Play Console-da mağaza səhifəsi qurmaq və göndərmək üçün tam bələdçi. Məxfilik siyasəti hazır fayl kimi `privacy-policy.html`-də var.

## Fayl strukturu

- `www/` — tətbiqin veb məzmunu (HTML/CSS/JS, data faylları). Capacitor bunu native "webview" daxilində göstərir.
  - `app.js` içində `isCapacitorApp()` yoxlaması var: native APK-da işləyəndə bildirişlər üçün `@capacitor/local-notifications` (əsl Android bildirişi), sadə brauzerdə açılanda isə köhnə veb-əsaslı fallback istifadə olunur — yəni eyni kodu həm test üçün brauzerdə, həm də real tətbiqdə işlədə bilərsiniz.
- `capacitor.config.json` — tətbiqin adı, App ID, ikon rəngləri
- `package.json` — lazımi Capacitor paketləri (`@capacitor/core`, `@capacitor/android`, `@capacitor/local-notifications`)
- `resources/` — Android tətbiq ikonu üçün mənbə şəkillər (istəsəniz `npx @capacitor/assets generate` ilə bütün ölçüləri avtomatik yarada bilərsiniz)
- `android/` — `npx cap add android` işlətdikdən sonra avtomatik yaranacaq (bu zip-də yoxdur, ilk build zamanı yaradılır)

## Nə dəyişdi (əvvəlki veb versiyaya nisbətən)

- **🔊 Səsləndirmə (tələffüz)** — Feillər, Dialoqlar, Flash kartlar və Gündəlik söz bölmələrində 🔊 ikonuna basaraq sözün/cümlənin **əsl ərəb dilində** (telefonun native Android TTS mühərriki ilə, `ar-SA`) səsləndirilməsini eşidə bilərsiniz. Kod hər zaman ərəbcə (`ar-SA`) dilini məcburi tələb edir — əgər telefonda ərəbcə səs paketi quraşdırılmayıbsa, səhv dildə oxumaq əvəzinə sadəcə səssiz qalır.
  - **Keyfiyyəti artırmaq üçün:** telefonun Ayarlar → Sistem → Dillər və daxiletmə → Mətndən nitqə (Text-to-speech) → Google mühərriki → "Install voice data" bölməsindən **Ərəbcə (العربية)** səsini yükləyin. Bir neçə fərqli keyfiyyət/aksent seçimi ola bilər.

- Bildiriş sistemi native `LocalNotifications` plagini ilə işləyir: gündə bir dəfə, seçilən saatda, **tətbiq tam bağlı olsa belə** Android sistemi tərəfindən göstərilir.
- Service Worker (`sw.js`) yalnız veb mühitində qeydiyyatdan keçir, native APK-da lazım olmadığı üçün avtomatik keçilir.
- **💾 Ehtiyat nüsxə (Backup/Bərpa)** — Ayarlar bölməsindən proqresinizi (öyrənilən sözlər, XP, seriya, favoritlər və s.) JSON fayl kimi çıxarıb (Share menyusu ilə Google Drive/Telegram/faylınıza saxlaya bilərsiniz) və lazım olanda geri bərpa edə bilərsiniz. Bu, tətbiqi silsəniz və ya telefon dəyişsəniz məlumatınızın itməməsi üçündür.
- **Android geri düyməsi düzgün idarə olunur** — istənilən bölmədə geri düyməsi/jesti ana menyuya qaytarır, yalnız ana menyudan basılanda tətbiqi bağlayır (təsadüfən bağlanma olmur).
- **Splash screen (açılış ekranı)** — tətbiqin öz brend rənglərinə uyğun açılış ekranı, ağ boş ekran yerinə.
- **✍️ Yazı məşqi** — 28 ərəb əlifbası hərfinin hamısı üçün barmaqla izləyərək (tracing) yazı məşqi, boz hərfin üzərindən keçmək üsulu ilə.
- **🎤 Tələffüz yoxlaması** — Feillər və Dialoqlar bölmələrində 🎤 ikonuna basıb sözü/cümləni tələffüz edin, Android-in native nitq-tanıma sistemi dediyinizi mətnə çevirib düzgünlüyünü yoxlayır (mikrofon icazəsi tələb olunur).
- **📚 Söz öyrənməyə başla** — ana səhifədə "Feillər" düyməsi indi 3 yarımbölməli qapıya çevrilib: **Feillər** (fellər), **Sözlər** (132 ümumi isim/sifət — ailə, rəqəmlər, rənglər, bədən üzvləri, yemək və s.), **Qarışıq** (hər ikisi bir siyahıda, ardıcıl gəzinti). Sözlər öz favorit/öyrənilmə izləməsinə malikdir.
- **❓ Sual köməyi** — Testlərdə tam ərəbcə yazılmış suallarda (əsasən dini test bankında) sualın yanında ❓ ikonu görünür, basanda Azərbaycanca izah/tərcümə göstərir.
- **🔟 Bütün babları gör** — Feillər bölməsində, kökü tam sağlam (zəif hərfsiz) 3 hərfli olan fellərdə (hazırda 321 fel, 275 unikal kök) "Bütün babları gör" düyməsi görünür — kökün 10 klassik ərəb fel qəlibinə (babına) necə uyğunlaşdığını göstərir. Hər bab üçün kökün mənasına əsaslanan izah var. Aydın qeyd olunur ki, bu, nəzəri qəlib nümayişidir — hər bab mütləq real, gündəlik işlənən söz olmaya bilər. Zəif hərfli (و ي ا ء) köklər hələ dəstəklənmir. **Bab I həmişə felin əsl (data-dakı) formasını göstərir** — çünki Bab I-in özündə 3 alt-qəlib var (فَعَلَ / فَعِلَ / فَعُلَ, orta hərfin hərəkəsi felə görə dəyişir), mexaniki fəthə fərziyyəsi 133 feldə (məs. شَرِبَ، فَهِمَ، عَمِلَ) səhv nəticə verirdi — düzəldildi. Bab cədvəli Ayarlardakı "Hərəkəsiz oxu" rejimindən asılı olmayaraq həmişə tam hərəkəli göstərilir.
- **👋 İlk istifadə bələdçisi** — tətbiq ilk dəfə açılanda 6 addımlıq qısa tanışlıq turu göstərir (əsas bölmələr izah olunur). Ayarlar bölməsindən istənilən vaxt "Tanışlıq turunu yenidən göstər" ilə təkrar baxmaq olar.
- **📊 Son 7 gün qrafiki** — Statistika səhifəsində son həftənin gündəlik XP dinamikasını göstərən sütun qrafiki.
- **🔍 Genişləndirilmiş axtarış** — indi Dialoqlar və Sözlər bölmələrində də 🔍 axtarış mövcuddur (Feillərdəki kimi). Testlərdə axtarış əlavə edilmədi, çünki testlər ardıcıl keçilməli olan formatdır, "axtarıb tapmaq" məntiqi uyğun gəlmir.
- **Testlər sıfırlanıb** — dini test bankı (2500+ sual) tamamilə silindi. Hazırda yalnız **250 "söz mənası" sualı** qalıb (fellərin mənasını soruşan, Azərbaycanca sual + ərəbcə/Azərbaycanca cavab formatında). Yeni hazır testlər əlavə olunacaq.
- Bütün digər funksiyalar (Feillər, Dialoqlar, Flash kartlar, SRS, Statistika, Ayarlar və s.) olduğu kimi qalır — heç nə itməyib.

## Kodu redaktə etmək

Bütün əsas iş `www/` qovluğunda gedir — `app.js`, `verbs.js`, `dialogues.js`, `tests.js`, `index.html`. Dəyişiklik etdikdən sonra:

```bash
npx cap sync android
cd android && ./gradlew assembleDebug
```

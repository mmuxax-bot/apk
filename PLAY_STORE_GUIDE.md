# Play Store-a Çıxarma Bələdçisi

Bu sənəd "Hər Gün Ərəbcə" tətbiqini Google Play Store-a rəsmi olaraq yükləmək üçün lazım olan bütün addımları izah edir.

## 1-ci addım: İmzalama açarı (keystore) yaratmaq

Google Play yalnız **imzalanmış (signed)** tətbiqləri qəbul edir. Bunun üçün özünüzə məxsus, unikal bir "keystore" faylı yaratmalısınız.

**⚠️ ÇOX VACİB:** Bu faylı və onun şifrələrini **heç kimlə paylaşmayın, GitHub-a yükləməyin**. Onu itirsəniz, tətbiqinizi Play Store-da **bir daha yeniləyə bilməzsiniz** (tamam yeni tətbiq kimi yenidən yükləməli olarsınız). Faylı təhlükəsiz yerdə (məs. Google Drive-ın şəxsi, paylaşılmayan qovluğunda) ehtiyat nüsxələyin.

Termux-da:

```bash
cd ~
keytool -genkeypair -v -keystore hergun-erebce-release.keystore -alias hergun-erebce -keyalg RSA -keysize 2048 -validity 10000
```

Sizdən bir neçə sual soruşulacaq (ad, təşkilat, şəhər və s.) — istədiyinizi yaza bilərsiniz, bunlar tətbiqin işləməsinə təsir etmir. **Ən vacib hissə: parolları unutmayın və yadda saxlayın.**

Bu, `~/hergun-erebce-release.keystore` faylını yaradacaq.

## 2-ci addım: İmzalama məlumatlarını layihəyə bağlamaq

`android/` qovluğunun içində (yəni `npx cap add android`-dan sonra) bu faylı yaradın: `android/keystore.properties`

```properties
storeFile=/data/data/com.termux/files/home/hergun-erebce-release.keystore
storePassword=BURAYA_STORE_PAROLUNU_YAZIN
keyAlias=hergun-erebce
keyPassword=BURAYA_KEY_PAROLUNU_YAZIN
```

Sonra `android/app/build.gradle` faylını açıb (`nano android/app/build.gradle`), `android { ... }` blokunun içinə, `defaultConfig` bölməsindən əvvələ bunu əlavə edin:

```groovy
def keystorePropertiesFile = rootProject.file("keystore.properties")
def keystoreProperties = new Properties()
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}
```

Sonra `android { ... }` blokunun içində `signingConfigs` və `buildTypes` bölmələrini tapıb (yoxdursa əlavə edin):

```groovy
android {
    ...
    signingConfigs {
        release {
            if (keystorePropertiesFile.exists()) {
                storeFile file(keystoreProperties['storeFile'])
                storePassword keystoreProperties['storePassword']
                keyAlias keystoreProperties['keyAlias']
                keyPassword keystoreProperties['keyPassword']
            }
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled false
        }
    }
}
```

**Bu layihədə `android/keystore.properties` faylı `.gitignore`-a artıq əlavə edilib** — yəni təsadüfən GitHub-a yüklənməyəcək.

## 3-cü addım: Rəsmi (release) build yaratmaq

Play Store artıq `.apk` yox, **`.aab` (Android App Bundle)** formatını tələb edir:

```bash
cd android
./gradlew bundleRelease
```

Fayl bu yolda olacaq:

```
android/app/build/outputs/bundle/release/app-release.aab
```

Bunu birbaşa Play Console-a yükləyəcəksiniz.

## 4-cü addım: Google Play Console hesabı

1. [play.google.com/console](https://play.google.com/console) saytına daxil olun
2. Developer hesabı yaradın (**bir dəfəlik 25$ ödəniş** tələb olunur)
3. "Create app" ilə yeni tətbiq yaradın

## 5-ci addım: Store Listing (mağaza səhifəsi) məlumatları

**Qısa təsvir (short description, max 80 simvol):**
> Ərəbcə öyrən: feillər, dialoqlar, testlər, tələffüz məşqi — gündəlik vərdiş qur

**Tam təsvir (full description) — nümunə, istəyinizə görə redaktə edin:**
> Hər Gün Ərəbcə — ərəbcə öyrənməyi gündəlik vərdişə çevirən tam funksional tətbiq.
>
> 🔤 350 ərəbcə feil (keçmiş, indiki, əmr formaları və nümunə cümlələrlə)
> 💬 300 gündəlik dialoq nümunəsi
> 📝 Adi test, sürətli cavab rejimi, söz birləşdirmə oyunu
> 🃏 Flash kartlar və ağıllı təkrar sistemi (Spaced Repetition)
> 🔊 Native səsləndirmə — sözləri əsl ərəb tələffüzü ilə eşidin
> 🎤 Tələffüzünüzü yoxlayın
> ✍️ Ərəb əlifbası yazı məşqi
> 🔥 Davamlılıq seriyası, XP, səviyyələr, nişanlar
> 📴 İnternetsiz tam işləyir
>
> Qeydiyyat tələb olunmur. Bütün irəliləyiş telefonunuzda saxlanılır.

**Kateqoriya:** Təhsil (Education)

**Əlaqə email:** [öz email-inizi yazın]

**Feature graphic (1024×500):** `resources/feature-graphic.png` faylı hazırdır, birbaşa yükləyə bilərsiniz.

**App icon (512×512):** `resources/icon.png` faylından istifadə edin (və ya Play Console avtomatik `android/app/src/main/res/` altındakı yaradılmış ikonlardan çəkəcək).

**Skrinşotlar:** Bunları özünüz tətbiqi telefonda işlədərək çəkməlisiniz (ekran görüntüsü, adətən Power+Volume Down). Ən azı 2 ədəd (telefon üçün) lazımdır — Ana səhifə, Feillər, Testlər kimi fərqli ekranlardan çəkin.

## 6-cı addım: Content Rating (Məzmun reytinqi)

Play Console-da sual anketini dolduracaqsınız. Bu tətbiq üçün gözlənilən cavablar:
- Zorakılıq, seksual məzmun, narkotik və s. — **Yoxdur**
- Nəticə: adətən "Everyone" (Hər kəs üçün) reytinqi alacaq

## 7-ci addım: Data Safety (Məlumat təhlükəsizliyi) bölməsi

Bu, Play Console-un ən vacib hissələrindən biridir. Bu tətbiq üçün düzgün cavablar:

- **Does your app collect or share any of the required user data types?** → **No** (heç bir məlumat toplanmır və ya paylaşılmır)
- Əgər mikrofon icazəsi ilə bağlı sual çıxsa: mikrofon yalnız cihaz daxilində (on-device) nitq tanıma üçün istifadə olunur, səs qeydə alınmır və ya ötürülmür
- **Is all user data encrypted in transit?** → Aidiyyatı yoxdur (heç bir məlumat ötürülmür)
- **Do you provide a way for users to request data deletion?** → Aidiyyatı yoxdur (server-də məlumat saxlanılmır), amma "Proqressi sıfırla" düyməsi ilə istifadəçi öz cihazındakı məlumatı istənilən vaxt silə bilər

## 8-ci addım: Məxfilik siyasəti (Privacy Policy)

Play Store **mütləq** açıq bir URL tələb edir. Bu layihədə hazır `privacy-policy.html` faylı var:

1. Faylı açıb `[email ünvanınızı bura yazın]` yerlərini öz email-inizlə əvəz edin
2. Bu faylı GitHub Pages-də yayımlayın (əvvəlki təcrübənizdən istifadə edərək — repo-ya yükləyib Settings → Pages ilə aktivləşdirin)
3. Alınan linki (məs. `https://username.github.io/repo/privacy-policy.html`) Play Console-un "App content → Privacy Policy" bölməsinə yapışdırın

## 9-cu addım: Test mərhələsi (tövsiyə olunur)

Birbaşa "Production"a yükləmədən əvvəl **"Internal testing"** treyindən istifadə edin — bu, tətbiqi yalnız sizin əlavə etdiyiniz test istifadəçilərinə göstərir, təhlükəsiz sınaq üçün idealdır.

## 10-cu addım: Yoxlama üçün göndərmək

Hər şey doldurulduqdan sonra "Submit for review" düyməsinə basın. Google-un yoxlaması adətən **bir neçə saatdan bir neçə günə** qədər çəkə bilər.

---

## Xülasə checklist

- [ ] Keystore yaradıldı və təhlükəsiz yerdə saxlanıldı
- [ ] `android/keystore.properties` qurulub, `.gitignore`-dadır
- [ ] `./gradlew bundleRelease` uğurla işlədi, `.aab` faylı hazırdır
- [ ] Play Console developer hesabı yaradılıb (25$ ödənilib)
- [ ] Store listing (təsvir, ikon, feature graphic, skrinşotlar) dolduruldu
- [ ] Content rating anketi dolduruldu
- [ ] Data Safety bölməsi dolduruldu
- [ ] Məxfilik siyasəti GitHub Pages-də yayımlanıb, linki əlavə edilib
- [ ] Internal testing-də sınanıb
- [ ] Production-a göndərilib

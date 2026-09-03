# Termux-da APK Build Təlimatı (Capacitor)

Bu təlimat "Hər Gün Ərəbcə" layihəsini Termux-da real Android APK-ya çevirmək üçündür. Native bildirişlər (`@capacitor/local-notifications`) daxildir — bunlar Android sistemi tərəfindən idarə olunur və tətbiq bağlı olsa belə işləyir.

**Vacib qeyd:** Bu proses bir qədər vaxt aparır (paketlərin ölçüsünə görə ilk build 20-40 dəqiqə çəkə bilər) və ən azı 4-6 GB boş yer, sabit internet tələb edir. Səbirli olun, addımları ardıcıl izləyin.

## 1-ci addım: Termux-u hazırlamaq

```bash
pkg update && pkg upgrade -y
pkg install -y nodejs-lts git openjdk-17 wget unzip
```

## 2-ci addım: Android SDK komponentlərini quraşdırmaq

Termux-da tam Android Studio olmur, amma komanda-sətri alətləri (cmdline-tools) ilə build etmək mümkündür.

```bash
pkg install -y android-tools
mkdir -p ~/android-sdk/cmdline-tools
cd ~/android-sdk/cmdline-tools
wget https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip -O sdk.zip
unzip sdk.zip
mv cmdline-tools latest
```

Sonra `~/.bashrc` faylına bu sətirləri əlavə edin:

```bash
echo 'export ANDROID_HOME=$HOME/android-sdk' >> ~/.bashrc
echo 'export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools' >> ~/.bashrc
source ~/.bashrc
```

Lazımi SDK paketlərini yükləyin (lisenziyaları qəbul etməyi unutmayın — hər sualda `y` yazın):

```bash
yes | sdkmanager --licenses
sdkmanager "platform-tools" "platforms;android-34" "build-tools;34.0.0"
```

## 3-cü addım: Layihəni Termux-a köçürmək

Bu zip-in içindəkiləri telefonunuzda bir qovluğa açın (məs. `~/hergun-erebce`), sonra Termux-dan həmin qovluğa keçin:

```bash
cd ~/hergun-erebce
```

*(Əgər fayllar `Download` qovluğundadırsa, əvvəlcə `termux-setup-storage` işlədib `~/storage/downloads/` altından tapa bilərsiniz.)*

## 4-cü addım: Paketləri quraşdırmaq

```bash
npm install
```

*(Bu, native bildiriş (`@capacitor/local-notifications`) və səsləndirmə (`@capacitor-community/text-to-speech`) plaginlərini də quraşdıracaq. Əgər layihəni əvvəllər build etmisinizsə və `package.json` yenilənibsə, `npm install`-u yenidən işlədib, sonra `npx cap sync android` etməyi unutmayın.)*

## 5-ci addım: Android platformasını əlavə etmək

```bash
npx cap add android
npx cap sync android
```

Bu, `android/` adlı yeni qovluq yaradacaq — bu, tam funksional Android Studio layihəsidir.

## 5.1-ci addım: Tətbiq ikonu və açılış ekranını (splash) yaratmaq

Layihədə `resources/` qovluğunda ikon və splash mənbə şəkilləri hazırdır. Bunları bütün Android ölçülərinə avtomatik çevirmək üçün:

```bash
npx @capacitor/assets generate --android
npx cap sync android
```

Bu əmr `android/app/src/main/res/` altında bütün lazımi ikon/splash ölçülərini avtomatik yaradacaq (mipmap-larda adaptiv ikon, drawable-larda splash). Bir daha `npx cap sync android` etmək vacibdir ki, dəyişikliklər Android layihəsinə köçürülsün.

## 6-cı addım: APK-nı build etmək

```bash
cd android
chmod +x gradlew
./gradlew assembleDebug
```

Uğurlu olsa, APK bu yolda olacaq:

```
android/app/build/outputs/apk/debug/app-debug.apk
```

Bu faylı telefonunuzda açıb quraşdıra bilərsiniz (naməlum mənbələrdən quraşdırmaya icazə verməli ola bilərsiniz).

## Kodda dəyişiklik etdikdən sonra

Hər dəfə `www/` qovluğundakı faylları (app.js, verbs.js və s.) dəyişəndə:

```bash
npx cap sync android
cd android && ./gradlew assembleDebug
```

Bunu etmək kifayətdir — `android/` qovluğunu silib yenidən yaratmağa ehtiyac yoxdur.

## Nişanlı (release) APK üçün

Yuxarıdakı `assembleDebug` sınaq/inkişaf üçündür. Google Play-ə yükləmək və ya rəsmi paylaşım üçün imzalanmış "release" APK lazımdır — bu, ayrıca imza açarı (keystore) yaratmağı tələb edir. Bu mərhələyə çatanda mənə deyin, addım-addım keçərik.

## Ümumi xətalar

- **"SDK location not found"** → `android/local.properties` faylında `sdk.dir=/data/data/com.termux/files/home/android-sdk` sətrinin olduğuna əmin olun.
- **Gradle çox yavaş/asılıb qalır** → ilk dəfə asılı paketləri internetdən yükləyir, sadəcə gözləyin.
- **"Permission denied" (gradlew)** → `chmod +x gradlew` işlədin.

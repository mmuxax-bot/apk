# Hər Gün Ərəbcə — Səsləndirmə düzəlişi

Bu versiyada Android TTS üçün aşağıdakı düzəlişlər edildi:

- Capacitor 6 ilə uyğun `@capacitor-community/text-to-speech` 4.1.1 istifadə olunur.
- `ar-SA` məcburi dil kimi qəbul edilmir; cihazda mövcud olan ərəb locale avtomatik seçilir.
- Əvvəlki TTS dayandırılır ki, ardıcıl kliklərdə səs növbəyə yığılmasın.
- Ərəb dili/səs paketi yoxdursa Android TTS quraşdırma ekranı açılır.
- TTS xətaları artıq səssizcə gizlədilmir; istifadəçiyə xəbərdarlıq göstərilir.
- Hərəkəli ərəb mətninin TTS-ə ötürülməsi qorunub saxlanılıb.

## Termux-da APK-ni yenidən yığmaq

Layihə qovluğunda:

```bash
rm -rf node_modules package-lock.json android
npm install
npx cap add android
npx cap sync android
cd android
chmod +x gradlew
./gradlew assembleDebug
```

APK adətən bu qovluqda yaranır:

`android/app/build/outputs/apk/debug/app-debug.apk`

Qeyd: Telefonda/planşetdə Android TTS mühərrikində ərəb dili quraşdırılmış olmalıdır. Tətbiq bunu aşkar edib quraşdırma bölməsini açmağa çalışır.

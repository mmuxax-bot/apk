// dialogues.js — Müəllim-Şagird Dərs Dialoqları (ID: 1 – 67)
// Mövzu: Ərəb Dili Qrammatika Məşqləri (İşarə əvəzlikləri, Hərfi-cərlər, Sifətlər)

const dialoguesData = [
    {
        id: 1,
        title: "Bu Nədir? (Əşyaların Adları)",
        dialogue: [
            { arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ.", translation: "Allahın salamı, rəhməti və bərəkəti üzərinizə olsun." },
            { arabic: "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ.", translation: "Və əleykum salam, Allahın rəhməti və bərəkəti sizin də üzərinizə olsun." },
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "هَلْ هٰذَا كِتَابٌ؟", translation: "Bu, kitabdırmı?" },
            { arabic: "نَعَمْ، هٰذَا كِتَابٌ.", translation: "Bəli, bu, kitabdır." }
        ]
    },
    {
        id: 2,
        title: "Bu Nədir? (Əşyaların Adları)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا مَكْتَبٌ.", translation: "Bu, masadır." },
            { arabic: "هَلْ هٰذَا مَكْتَبٌ؟", translation: "Bu, masadırmı?" },
            { arabic: "نَعَمْ، هٰذَا مَكْتَبٌ.", translation: "Bəli, bu, masadır." }
        ]
    },
    {
        id: 3,
        title: "Bu Nədir? (Əşyaların Adları)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا وَلَدٌ.", translation: "Bu, oğlandır." },
            { arabic: "هَلْ هٰذَا وَلَدٌ؟", translation: "Bu, oğlandırmı?" },
            { arabic: "نَعَمْ، هٰذَا وَلَدٌ.", translation: "Bəli, bu, oğlandır." }
        ]
    },
    {
        id: 4,
        title: "Bu Nədir? (Əşyaların Adları)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ جَدِيدٌ.", translation: "Bu, yeni kitabdır." },
            { arabic: "هَلْ هٰذَا كِتَابٌ جَدِيدٌ؟", translation: "Bu, yeni kitabdırmı?" },
            { arabic: "نَعَمْ، هٰذَا كِتَابٌ جَدِيدٌ.", translation: "Bəli, bu, yeni kitabdır." }
        ]
    },
    {
        id: 5,
        title: "Müzəkkər İsimlər və Qayda",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "مَاذَا نَقُولُ مَعَ «كِتَابٌ»؟", translation: "\"Kitab\" sözü ilə nə deyirik?" },
            { arabic: "نَقُولُ: «هٰذَا كِتَابٌ».", translation: "\"Bu, kitabdır\" deyirik." },
            { arabic: "لِمَاذَا؟", translation: "Niyə?" },
            { arabic: "لِأَنَّ «كِتَابٌ» مُذَكَّرٌ.", translation: "Çünki \"kitab\" müzəkkərdir (kişi cinsindədir)." }
        ]
    },
    {
        id: 6,
        title: "Müzəkkər İsimlər və Qayda",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا قَلَمٌ.", translation: "Bu, qələmdir." },
            { arabic: "هَلْ «قَلَمٌ» مُذَكَّرٌ؟", translation: "\"Qələm\" müzəkkərdirmi?" },
            { arabic: "نَعَمْ، «قَلَمٌ» مُذَكَّرٌ.", translation: "Bəli, \"qələm\" müzəkkərdir." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "نَقُولُ: «هٰذَا قَلَمٌ».", translation: "\"Bu, qələmdir\" deyirik." }
        ]
    },
    {
        id: 7,
        title: "Müzəkkər İsimlər və Qayda",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "هَلْ نَقُولُ: «هٰذَا كِتَابٌ»؟", translation: "\"Bu, kitabdır\" deyirikmi?" },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "هَلْ نَقُولُ: «هٰذِهِ كِتَابٌ»؟", translation: "\"Həzihi kitabun\" deyirikmi?" },
            { arabic: "لَا.", translation: "Xeyr." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Bəs nə deyirik?" },
            { arabic: "نَقُولُ: «هٰذَا كِتَابٌ».", translation: "\"Bu, kitabdır\" deyirik." }
        ]
    },
    {
        id: 8,
        title: "Müzəkkər İsimlər və Qayda",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا بَابٌ.", translation: "Bu, qapıdır." },
            { arabic: "هَلْ «بَابٌ» مُذَكَّرٌ؟", translation: "\"Qapı\" müzəkkərdirmi?" },
            { arabic: "نَعَمْ، «بَابٌ» مُذَكَّرٌ.", translation: "Bəli, \"qapı\" müzəkkərdir." },
            { arabic: "مَاذَا نَقُولُ مَعَهُ؟", translation: "Onunla nə deyirik?" },
            { arabic: "نَقُولُ: «هٰذَا بَابٌ».", translation: "\"Bu, qapıdır\" deyirik." }
        ]
    },
    {
        id: 9,
        title: "Müzəkkər İsimlər və Qayda",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كُرْسِيٌّ.", translation: "Bu, stuldur." },
            { arabic: "هَلْ «كُرْسِيٌّ» مُذَكَّرٌ؟", translation: "\"Stul\" müzəkkərdirmi?" },
            { arabic: "نَعَمْ، «كُرْسِيٌّ» مُذَكَّرٌ.", translation: "Bəli, \"stul\" müzəkkərdir." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "نَقُولُ: «هٰذَا كُرْسِيٌّ».", translation: "\"Bu, stuldur\" deyirik." }
        ]
    },
    {
        id: 10,
        title: "Müzəkkər İsimlər və Qayda",
        dialogue: [
            { arabic: "مَاذَا نَقُولُ: «قَلَمٌ»؟", translation: "\"Qələm\" üçün nə deyirik?" },
            { arabic: "هٰذَا قَلَمٌ.", translation: "Bu, qələmdir." },
            { arabic: "مَاذَا نَقُولُ: «بَيْتٌ»؟", translation: "\"Ev\" üçün nə deyirik?" },
            { arabic: "هٰذَا بَيْتٌ.", translation: "Bu, evdir." },
            { arabic: "مَاذَا نَقُولُ: «بَابٌ»؟", translation: "\"Qapı\" üçün nə deyirik?" },
            { arabic: "هٰذَا بَابٌ.", translation: "Bu, qapıdır." }
        ]
    },
    {
        id: 11,
        title: "Müzəkkər İsimlər və Qayda",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا قَلَمٌ.", translation: "Bu, qələmdir." },
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا بَيْتٌ.", translation: "Bu, evdir." },
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا بَابٌ.", translation: "Bu, qapıdır." }
        ]
    },
    {
        id: 12,
        title: "Müzəkkər İsimlər və Qayda",
        dialogue: [
            { arabic: "هَلْ هٰذَا كِتَابٌ؟", translation: "Bu, kitabdırmı?" },
            { arabic: "نَعَمْ، هٰذَا كِتَابٌ.", translation: "Bəli, bu, kitabdır." },
            { arabic: "هَلْ هٰذَا قَلَمٌ؟", translation: "Bu, qələmdirmi?" },
            { arabic: "نَعَمْ، هٰذَا قَلَمٌ.", translation: "Bəli, bu, qələmdir." },
            { arabic: "هَلْ هٰذَا بَيْتٌ؟", translation: "Bu, evdirmi?" },
            { arabic: "نَعَمْ، هٰذَا بَيْتٌ.", translation: "Bəli, bu, evdir." }
        ]
    },
    {
        id: 13,
        title: "Müzəkkər İsimlər və Qayda",
        dialogue: [
            { arabic: "كِتَابٌ مُذَكَّرٌ أَمْ مُؤَنَّثٌ؟", translation: "\"Kitab\" müzəkkərdir (kişi cinsi), yoxsa müənnəs (qadın cinsi)?" },
            { arabic: "مُذَكَّرٌ.", translation: "Müzəkkərdir." },
            { arabic: "قَلَمٌ مُذَكَّرٌ أَمْ مُؤَنَّثٌ؟", translation: "\"Qələm\" müzəkkərdir, yoxsa müənnəs?" },
            { arabic: "مُذَكَّرٌ.", translation: "Müzəkkərdir." },
            { arabic: "بَيْتٌ مُذَكَّرٌ أَمْ مُؤَنَّثٌ؟", translation: "\"Ev\" müzəkkərdir, yoxsa müənnəs?" },
            { arabic: "مُذَكَّرٌ.", translation: "Müzəkkərdir." }
        ]
    },
    {
        id: 14,
        title: "Müzəkkər İsimlər və Qayda",
        dialogue: [
            { arabic: "مَا الْقَاعِدَةُ؟", translation: "Qayda nədir?" },
            { arabic: "نَقُولُ: «هٰذَا» مَعَ الِاسْمِ الْمُذَكَّرِ.", translation: "Müzəkkər (kişi cinsində olan) isimlə \"هٰذَا\" (həzə - bu) işlədirik." },
            { arabic: "مِثْلَ مَاذَا؟", translation: "Məsələn nə kimi?" },
            { arabic: "مِثْلَ: «هٰذَا كِتَابٌ».", translation: "Məsələn: \"Bu, kitabdır\"." },
            { arabic: "وَمِثْلَ مَاذَا؟", translation: "Və daha nə kimi?" },
            { arabic: "«هٰذَا قَلَمٌ».", translation: "\"Bu, qələmdir\"." },
            { arabic: "وَمِثْلَ مَاذَا؟", translation: "Və daha nə kimi?" },
            { arabic: "«هٰذَا بَيْتٌ».", translation: "\"Bu, evdir\"." }
        ]
    },
    {
        id: 15,
        title: "Yer Bildirən Sözlər (Fi, İla, Min)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "أَيْنَ الْكِتَابُ؟", translation: "Kitab haradadır?" },
            { arabic: "الْكِتَابُ فِي الْبَيْتِ.", translation: "Kitab evdədir." },
            { arabic: "هَلِ الْكِتَابُ فِي الْبَيْتِ؟", translation: "Kitab evdədirmi?" },
            { arabic: "نَعَمْ، الْكِتَابُ فِي الْبَيْتِ.", translation: "Bəli, kitab evdədir." }
        ]
    },
    {
        id: 16,
        title: "Yer Bildirən Sözlər (Fi, İla, Min)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا قَلَمٌ.", translation: "Bu, qələmdir." },
            { arabic: "أَيْنَ الْقَلَمُ؟", translation: "Qələm haradadır?" },
            { arabic: "الْقَلَمُ عَلَى الْمَكْتَبِ.", translation: "Qələm masanın üzərindədir." },
            { arabic: "هَلِ الْقَلَمُ عَلَى الْمَكْتَبِ؟", translation: "Qələm masanın üzərindədirmi?" },
            { arabic: "نَعَمْ، الْقَلَمُ عَلَى الْمَكْتَبِ.", translation: "Bəli, qələm masanın üzərindədir." }
        ]
    },
    {
        id: 17,
        title: "Yer Bildirən Sözlər (Fi, İla, Min)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كُرْسِيٌّ.", translation: "Bu, stuldur." },
            { arabic: "أَيْنَ الْكُرْسِيُّ؟", translation: "Stul haradadır?" },
            { arabic: "الْكُرْسِيُّ فِي الْفَصْلِ.", translation: "Stul sinifdədir." },
            { arabic: "هَلِ الْكُرْسِيُّ فِي الْفَصْلِ؟", translation: "Stul sinifdədirmi?" },
            { arabic: "نَعَمْ، الْكُرْسِيُّ فِي الْفَصْلِ.", translation: "Bəli, stul sinifdədir." }
        ]
    },
    {
        id: 18,
        title: "Yer Bildirən Sözlər (Fi, İla, Min)",
        dialogue: [
            { arabic: "مِنْ أَيْنَ هٰذَا؟", translation: "Bu haradandır?" },
            { arabic: "هٰذَا مِنَ الْبَيْتِ.", translation: "Bu, evdəndir." },
            { arabic: "هَلْ هٰذَا مِنَ الْبَيْتِ؟", translation: "Bu, evdəndirmi?" },
            { arabic: "نَعَمْ، هٰذَا مِنَ الْبَيْتِ.", translation: "Bəli, bu, evdəndir." }
        ]
    },
    {
        id: 19,
        title: "Yer Bildirən Sözlər (Fi, İla, Min)",
        dialogue: [
            { arabic: "إِلَى أَيْنَ هٰذَا؟", translation: "Bu harayadır?" },
            { arabic: "هٰذَا إِلَى الْبَيْتِ.", translation: "Bu, evədir (evə tərəfdir)." },
            { arabic: "هَلْ هٰذَا إِلَى الْبَيْتِ؟", translation: "Bu, evədirmi?" },
            { arabic: "نَعَمْ، هٰذَا إِلَى الْبَيْتِ.", translation: "Bəli, bu, evədir." }
        ]
    },
    {
        id: 20,
        title: "Hərfi-Cərin Adını Tapmaq",
        dialogue: [
            { arabic: "أَيْنَ الْكِتَابُ؟", translation: "Kitab haradadır?" },
            { arabic: "الْكِتَابُ عَلَى الطَّاوِلَةِ.", translation: "Kitab masanın üzərindədir." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "نَقُولُ: «الْكِتَابُ عَلَى الطَّاوِلَةِ».", translation: "\"Kitab masanın üzərindədir\" deyirik." },
            { arabic: "مَا حَرْفُ الْجَرِّ؟", translation: "Hərfi-cər (sözönü) hansıdır?" },
            { arabic: "«عَلَى».", translation: "\"عَلَى\" (üzərində)." }
        ]
    },
    {
        id: 21,
        title: "Hərfi-Cərin Adını Tapmaq",
        dialogue: [
            { arabic: "أَيْنَ الْقَلَمُ؟", translation: "Qələm haradadır?" },
            { arabic: "الْقَلَمُ فِي الْحَقِيبَةِ.", translation: "Qələm çantadadır." },
            { arabic: "مَا حَرْفُ الْجَرِّ؟", translation: "Hərfi-cər hansıdır?" },
            { arabic: "«فِي».", translation: "\"فِي\" (içində / -da, -də)." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "«الْقَلَمُ فِي الْحَقِيبَةِ».", translation: "\"Qələm çantadadır\"." }
        ]
    },
    {
        id: 22,
        title: "Hərfi-Cərin Adını Tapmaq",
        dialogue: [
            { arabic: "مِنْ أَيْنَ هٰذَا الْكِتَابُ؟", translation: "Bu kitab haradandır?" },
            { arabic: "هٰذَا الْكِتَابُ مِنَ الْمَكْتَبَةِ.", translation: "Bu kitab kitabxanadandır." },
            { arabic: "مَا حَرْفُ الْجَرِّ؟", translation: "Hərfi-cər hansıdır?" },
            { arabic: "«مِنْ».", translation: "\"مِنْ\" (-dan, -dən)." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "«هٰذَا الْكِتَابُ مِنَ الْمَكْتَبَةِ».", translation: "\"Bu kitab kitabxanadandır\"." }
        ]
    },
    {
        id: 23,
        title: "Hərfi-Cərin Adını Tapmaq",
        dialogue: [
            { arabic: "إِلَى أَيْنَ تَذْهَبُ؟", translation: "Haraya gedirsən?" },
            { arabic: "أَذْهَبُ إِلَى الْفَصْلِ.", translation: "Sinifə gedirəm." },
            { arabic: "مَا حَرْفُ الْجَرِّ؟", translation: "Hərfi-cər hansıdır?" },
            { arabic: "«إِلَى».", translation: "\"إِلَى\" (-a, -ə / tərəf)." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "«أَذْهَبُ إِلَى الْفَصْلِ».", translation: "\"Sinifə gedirəm\"." }
        ]
    },
    {
        id: 24,
        title: "Hərfi-Cərin Adını Tapmaq",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "أَيْنَ الْكِتَابُ؟", translation: "Kitab haradadır?" },
            { arabic: "الْكِتَابُ فِي الْبَيْتِ.", translation: "Kitab evdədir." },
            { arabic: "وَأَيْنَ الْقَلَمُ؟", translation: "Bəs qələm haradadır?" },
            { arabic: "الْقَلَمُ عَلَى الْمَكْتَبِ.", translation: "Qələm masanın üzərindədir." },
            { arabic: "مِنْ أَيْنَ الْكِتَابُ؟", translation: "Kitab haradandır?" },
            { arabic: "الْكِتَابُ مِنَ الْمَكْتَبَةِ.", translation: "Kitab kitabxanadandır." },
            { arabic: "إِلَى أَيْنَ تَذْهَبُ؟", translation: "Haraya gedirsən?" },
            { arabic: "أَذْهَبُ إِلَى الْفَصْلِ.", translation: "Sinifə gedirəm." }
        ]
    },
    {
        id: 25,
        title: "Hərfi-Cərlərin Mənası",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "أَيْنَ الْكِتَابُ؟", translation: "Kitab haradadır?" },
            { arabic: "الْكِتَابُ فِي الْبَيْتِ.", translation: "Kitab evdədir." },
            { arabic: "مَا مَعْنَى «فِي»؟", translation: "\"فِي\" nə məna verir?" },
            { arabic: "«فِي» لِلْمَكَانِ.", translation: "\"فِي\" məkan bildirmək üçündür (-da, -də / içində)." },
            { arabic: "مَثَلًا؟", translation: "Məsələn?" },
            { arabic: "الْكِتَابُ فِي الْبَيْتِ.", translation: "Kitab evdədir." }
        ]
    },
    {
        id: 26,
        title: "Hərfi-Cərlərin Mənası",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا قَلَمٌ.", translation: "Bu, qələmdir." },
            { arabic: "أَيْنَ الْقَلَمُ؟", translation: "Qələm haradadır?" },
            { arabic: "الْقَلَمُ عَلَى الْمَكْتَبِ.", translation: "Qələm masanın üzərindədir." },
            { arabic: "مَا مَعْنَى «عَلَى»؟", translation: "\"عَلَى\" nə məna verir?" },
            { arabic: "«عَلَى» لِشَيْءٍ فَوْقَ شَيْءٍ.", translation: "\"عَلَى\" bir şeyin başqa bir şeyin üzərində olduğunu bildirir." },
            { arabic: "مَثَلًا؟", translation: "Məsələn?" },
            { arabic: "الْقَلَمُ عَلَى الْمَكْتَبِ.", translation: "Qələm masanın üzərindədir." }
        ]
    },
    {
        id: 27,
        title: "Hərfi-Cərlərin Mənası",
        dialogue: [
            { arabic: "مِنْ أَيْنَ هٰذَا؟", translation: "Bu haradandır?" },
            { arabic: "هٰذَا مِنَ الْبَيْتِ.", translation: "Bu, evdəndir." },
            { arabic: "مَا مَعْنَى «مِنْ»؟", translation: "\"مِنْ\" nə məna verir?" },
            { arabic: "«مِنْ» لِبِدَايَةِ الشَّيْءِ.", translation: "\"مِنْ\" bir şeyin başlanğıcını bildirir (-dan, -dən)." },
            { arabic: "مَثَلًا؟", translation: "Məsələn?" },
            { arabic: "هٰذَا مِنَ الْبَيْتِ.", translation: "Bu, evdəndir." }
        ]
    },
    {
        id: 28,
        title: "Hərfi-Cərlərin Mənası",
        dialogue: [
            { arabic: "إِلَى أَيْنَ تَذْهَبُ؟", translation: "Haraya gedirsən?" },
            { arabic: "أَذْهَبُ إِلَى الْمَسْجِدِ.", translation: "Məscidə gedirəm." },
            { arabic: "مَا مَعْنَى «إِلَى»؟", translation: "\"إِلَى\" nə məna verir?" },
            { arabic: "«إِلَى» لِلذَّهَابِ إِلَى مَكَانٍ.", translation: "\"إِلَى\" bir məkana getməyi bildirir (-a, -ə)." },
            { arabic: "مَثَلًا؟", translation: "Məsələn?" },
            { arabic: "أَذْهَبُ إِلَى الْمَسْجِدِ.", translation: "Məscidə gedirəm." }
        ]
    },
    {
        id: 29,
        title: "Hərfi-Cərlərin Mənası",
        dialogue: [
            { arabic: "كَمْ حَرْفَ جَرٍّ تَعَلَّمْنَا؟", translation: "Neçə hərfi-cər (sözönü) öyrəndik?" },
            { arabic: "أَرْبَعَةً.", translation: "Dörd." },
            { arabic: "مَا هِيَ؟", translation: "Hansılardır?" },
            { arabic: "«فِي، عَلَى، مِنْ، إِلَى».", translation: "\"فِي, عَلَى, مِنْ, إِلَى\"." },
            { arabic: "جَيِّدٌ.", translation: "Yaxşı." }
        ]
    },
    {
        id: 30,
        title: "Hərfi-Cərlərin Mənası",
        dialogue: [
            { arabic: "مَاذَا نَقُولُ؟ «الْكِتَابُ ... الْحَقِيبَةِ»؟", translation: "Nə deyirik? \"الْكِتَابُ ... الْحَقِيبَةِ\"?" },
            { arabic: "الْكِتَابُ فِي الْحَقِيبَةِ.", translation: "Kitab çantadadır (الْكِتَابُ فِي الْحَقِيبَةِ)." },
            { arabic: "لِمَاذَا «فِي»؟", translation: "Niyə \"فِي\"?" },
            { arabic: "لِأَنَّ الْكِتَابَ دَاخِلَ الْحَقِيبَةِ.", translation: "Çünki kitab çantanın içindədir." }
        ]
    },
    {
        id: 31,
        title: "Hərfi-Cərlərin Mənası",
        dialogue: [
            { arabic: "مَاذَا نَقُولُ؟ «الْقَلَمُ ... الطَّاوِلَةِ»؟", translation: "Nə deyirik? \"الْقَلَمُ ... الطَّاوِلَةِ\"?" },
            { arabic: "الْقَلَمُ عَلَى الطَّاوِلَةِ.", translation: "Qələm masanın üzərindədir (الْقَلَمُ عَلَى الطَّاوِلَةِ)." },
            { arabic: "لِمَاذَا «عَلَى»؟", translation: "Niyə \"عَلَى\"?" },
            { arabic: "لِأَنَّ الْقَلَمَ فَوْقَ الطَّاوِلَةِ.", translation: "Çünki qələm masanın üstündədir." }
        ]
    },
    {
        id: 32,
        title: "Hərfi-Cərlərin Mənası",
        dialogue: [
            { arabic: "مَاذَا نَقُولُ؟ «ذَهَبْتُ ... الْبَيْتِ»؟", translation: "Nə deyirik? \"ذَهَبْتُ ... الْبَيْتِ\"?" },
            { arabic: "ذَهَبْتُ مِنَ الْبَيْتِ.", translation: "Evdən çıxdım / getdim (ذَهَبْتُ مِنَ الْبَيْتِ)." },
            { arabic: "مَاذَا نَقُولُ لِلْجِهَةِ؟", translation: "İstiqamət üçün nə deyirik?" },
            { arabic: "ذَهَبْتُ إِلَى الْمَسْجِدِ.", translation: "Məscidə getdim (ذَهَبْتُ إِلَى الْمَسْجِدِ)." }
        ]
    },
    {
        id: 33,
        title: "Hərfi-Cərlərin Mənası",
        dialogue: [
            { arabic: "هَلْ «فِي» حَرْفُ جَرٍّ؟", translation: "\"فِي\" hərfi-cərdirmi?" },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "هَلْ «عَلَى» حَرْفُ جَرٍّ؟", translation: "\"عَلَى\" hərfi-cərdirmi?" },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "هَلْ «مِنْ» حَرْفُ جَرٍّ؟", translation: "\"مِنْ\" hərfi-cərdirmi?" },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "هَلْ «إِلَى» حَرْفُ جَرٍّ؟", translation: "\"إِلَى\" hərfi-cərdirmi?" },
            { arabic: "نَعَمْ.", translation: "Bəli." }
        ]
    },
    {
        id: 34,
        title: "Hərfi-Cərlərin Mənası",
        dialogue: [
            { arabic: "مَا حُرُوفُ الْجَرِّ الَّتِي تَعَلَّمْنَاهَا؟", translation: "Öyrəndiyimiz hərfi-cərlər hansılardır?" },
            { arabic: "«فِي، عَلَى، مِنْ، إِلَى».", translation: "\"فِي, عَلَى, مِنْ, إِلَى\"." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "الْكِتَابُ فِي الْبَيْتِ.", translation: "Kitab evdədir." },
            { arabic: "وَمَاذَا نَقُولُ؟", translation: "Və nə deyirik?" },
            { arabic: "الْقَلَمُ عَلَى الْمَكْتَبِ.", translation: "Qələm masanın üzərindədir." },
            { arabic: "وَمَاذَا نَقُولُ؟", translation: "Və nə deyirik?" },
            { arabic: "ذَهَبْتُ إِلَى الْمَسْجِدِ.", translation: "Məscidə getdim." },
            { arabic: "وَمَاذَا نَقُولُ؟", translation: "Və nə deyirik?" },
            { arabic: "جِئْتُ مِنَ الْبَيْتِ.", translation: "Evdən gəldim." }
        ]
    },
    {
        id: 35,
        title: "Yer Sualları (Təsdiq və İnkar)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "أَيْنَ الْكِتَابُ؟", translation: "Kitab haradadır?" },
            { arabic: "الْكِتَابُ فِي الْحَقِيبَةِ.", translation: "Kitab çantadadır." },
            { arabic: "هَلِ الْحَقِيبَةُ عَلَى الطَّاوِلَةِ؟", translation: "Çanta masanın üzərindədirmi?" },
            { arabic: "نَعَمْ، الْحَقِيبَةُ عَلَى الطَّاوِلَةِ.", translation: "Bəli, çanta masanın üzərindədir." }
        ]
    },
    {
        id: 36,
        title: "Yer Sualları (Təsdiq və İnkar)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا قَلَمٌ.", translation: "Bu, qələmdir." },
            { arabic: "أَيْنَ الْقَلَمُ؟", translation: "Qələm haradadır?" },
            { arabic: "الْقَلَمُ فِي الْحَقِيبَةِ.", translation: "Qələm çantadadır." },
            { arabic: "هَلِ الْقَلَمُ عَلَى الطَّاوِلَةِ؟", translation: "Qələm masanın üzərindədirmi?" },
            { arabic: "لَا، الْقَلَمُ فِي الْحَقِيبَةِ.", translation: "Xeyr, qələm çantadadır." }
        ]
    },
    {
        id: 37,
        title: "Yer Sualları (Təsdiq və İnkar)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا مَفْتَاحٌ.", translation: "Bu, açardır." },
            { arabic: "أَيْنَ الْمِفْتَاحُ؟", translation: "Açar haradadır?" },
            { arabic: "الْمِفْتَاحُ عَلَى الطَّاوِلَةِ.", translation: "Açar masanın üzərindədir." },
            { arabic: "هَلِ الْمِفْتَاحُ فِي الْحَقِيبَةِ؟", translation: "Açar çantadadırmı?" },
            { arabic: "لَا، الْمِفْتَاحُ عَلَى الطَّاوِلَةِ.", translation: "Xeyr, açar masanın üzərindədir." }
        ]
    },
    {
        id: 38,
        title: "Yer Sualları (Təsdiq və İnkar)",
        dialogue: [
            { arabic: "مِنْ أَيْنَ هٰذَا؟", translation: "Bu haradandır?" },
            { arabic: "هٰذَا مِنَ الْبَيْتِ.", translation: "Bu, evdəndir." },
            { arabic: "هَلْ هٰذَا مِنَ الْفَصْلِ؟", translation: "Bu, sinifdəndirmi?" },
            { arabic: "لَا، هٰذَا مِنَ الْبَيْتِ.", translation: "Xeyr, bu, evdəndir." }
        ]
    },
    {
        id: 39,
        title: "Yer Sualları (Təsdiq və İnkar)",
        dialogue: [
            { arabic: "إِلَى أَيْنَ تَذْهَبُ؟", translation: "Haraya gedirsən?" },
            { arabic: "أَذْهَبُ إِلَى الْمَسْجِدِ.", translation: "Məscidə gedirəm." },
            { arabic: "هَلْ تَذْهَبُ إِلَى الْبَيْتِ؟", translation: "Evə gedirsənmi?" },
            { arabic: "لَا، أَذْهَبُ إِلَى الْمَسْجِدِ.", translation: "Xeyr, məscidə gedirəm." }
        ]
    },
    {
        id: 40,
        title: "Yer Sualları (Təsdiq və İnkar)",
        dialogue: [
            { arabic: "أَيْنَ الْكِتَابُ؟", translation: "Kitab haradadır?" },
            { arabic: "الْكِتَابُ فِي الْفَصْلِ.", translation: "Kitab sinifdədir." },
            { arabic: "أَيْنَ الْقَلَمُ؟", translation: "Qələm haradadır?" },
            { arabic: "الْقَلَمُ عَلَى الْمَكْتَبِ.", translation: "Qələm masanın üzərindədir." },
            { arabic: "أَيْنَ الْمُعَلِّمُ؟", translation: "Müəllim haradadır?" },
            { arabic: "الْمُعَلِّمُ فِي الْفَصْلِ.", translation: "Müəllim sinifdədir." }
        ]
    },
    {
        id: 41,
        title: "Yer Sualları (Təsdiq və İnkar)",
        dialogue: [
            { arabic: "هَلْ هٰذَا قَلَمٌ؟", translation: "Bu, qələmdirmi?" },
            { arabic: "نَعَمْ، هٰذَا قَلَمٌ.", translation: "Bəli, bu, qələmdir." },
            { arabic: "أَيْنَ الْقَلَمُ؟", translation: "Qələm haradadır?" },
            { arabic: "الْقَلَمُ عَلَى الْكِتَابِ.", translation: "Qələm kitabın üzərindədir." },
            { arabic: "هَلِ الْكِتَابُ عَلَى الطَّاوِلَةِ؟", translation: "Kitab masanın üzərindədirmi?" },
            { arabic: "نَعَمْ، الْكِتَابُ عَلَى الطَّاوِلَةِ.", translation: "Bəli, kitab masanın üzərindədir." }
        ]
    },
    {
        id: 42,
        title: "Yer Sualları (Təsdiq və İnkar)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا مَكْتَبٌ.", translation: "Bu, masadır." },
            { arabic: "مَاذَا عَلَى الْمَكْتَبِ؟", translation: "Masanın üzərində nə var?" },
            { arabic: "الْكِتَابُ عَلَى الْمَكْتَبِ.", translation: "Kitab masanın üzərindədir." },
            { arabic: "وَأَيْنَ الْقَلَمُ؟", translation: "Bəs qələm haradadır?" },
            { arabic: "الْقَلَمُ عَلَى الْكِتَابِ.", translation: "Qələm kitabın üzərindədir." }
        ]
    },
    {
        id: 43,
        title: "Yer Sualları (Təsdiq və İnkar)",
        dialogue: [
            { arabic: "مِنْ أَيْنَ جِئْتَ؟", translation: "Haradan gəldin?" },
            { arabic: "جِئْتُ مِنَ الْبَيْتِ.", translation: "Evdən gəldim." },
            { arabic: "وَإِلَى أَيْنَ تَذْهَبُ؟", translation: "Bəs haraya gedirsən?" },
            { arabic: "أَذْهَبُ إِلَى الْمَسْجِدِ.", translation: "Məscidə gedirəm." },
            { arabic: "هَلْ تَذْهَبُ إِلَى الْفَصْلِ؟", translation: "Sinifə gedirsənmi?" },
            { arabic: "لَا، أَذْهَبُ إِلَى الْمَسْجِدِ.", translation: "Xeyr, məscidə gedirəm." }
        ]
    },
    {
        id: 44,
        title: "Yer Sualları (Təsdiq və İnkar)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ.", translation: "Bu, kitabdır." },
            { arabic: "أَيْنَ الْكِتَابُ؟", translation: "Kitab haradadır?" },
            { arabic: "الْكِتَابُ فِي الْحَقِيبَةِ.", translation: "Kitab çantadadır." },
            { arabic: "وَأَيْنَ الْحَقِيبَةُ؟", translation: "Bəs çanta haradadır?" },
            { arabic: "الْحَقِيبَةُ عَلَى الْكُرْسِيِّ.", translation: "Çanta stulun üzərindədir." },
            { arabic: "مِنْ أَيْنَ جَاءَتِ الْحَقِيبَةُ؟", translation: "Çanta haradan gəldi?" },
            { arabic: "جَاءَتْ مِنَ الْبَيْتِ.", translation: "Evdən gəldi." },
            { arabic: "وَإِلَى أَيْنَ تَذْهَبُ الْحَقِيبَةُ؟", translation: "Bəs çanta haraya gedir?" },
            { arabic: "تَذْهَبُ إِلَى الْفَصْلِ.", translation: "Sinifə gedir." }
        ]
    },
    {
        id: 45,
        title: "Sifət (Müzəkkər): Yeni, Böyük, Gözəl, Kiçik",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ جَدِيدٌ.", translation: "Bu, yeni kitabdır." },
            { arabic: "هَلْ هُوَ جَدِيدٌ؟", translation: "O, yenidirmi?" },
            { arabic: "نَعَمْ، هُوَ جَدِيدٌ.", translation: "Bəli, o, yenidir." }
        ]
    },
    {
        id: 46,
        title: "Sifət (Müzəkkər): Yeni, Böyük, Gözəl, Kiçik",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا بَيْتٌ كَبِيرٌ.", translation: "Bu, böyük evdir." },
            { arabic: "هَلْ هُوَ كَبِيرٌ؟", translation: "O, böyükdürmü?" },
            { arabic: "نَعَمْ، هُوَ كَبِيرٌ.", translation: "Bəli, o, böyükdür." }
        ]
    },
    {
        id: 47,
        title: "Sifət (Müzəkkər): Yeni, Böyük, Gözəl, Kiçik",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا بَيْتٌ جَمِيلٌ.", translation: "Bu, gözəl evdir." },
            { arabic: "هَلْ هُوَ جَمِيلٌ؟", translation: "O, gözəldirmi?" },
            { arabic: "نَعَمْ، هُوَ جَمِيلٌ.", translation: "Bəli, o, gözəldir." }
        ]
    },
    {
        id: 48,
        title: "Sifət (Müzəkkər): Yeni, Böyük, Gözəl, Kiçik",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir? (və ya Bu kimdir?)" },
            { arabic: "هٰذَا وَلَدٌ صَغِيرٌ.", translation: "Bu, balaca oğlandır." },
            { arabic: "هَلْ هُوَ صَغِيرٌ؟", translation: "O, balacadırmı?" },
            { arabic: "نَعَمْ، هُوَ صَغِيرٌ.", translation: "Bəli, o, balacadır." }
        ]
    },
    {
        id: 49,
        title: "Sifət (Müənnəs): Maşın, Məktəb, Çanta, Ağac",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ سَيَّارَةٌ.", translation: "Bu, maşındır." },
            { arabic: "هَلْ هِيَ سَيَّارَةٌ؟", translation: "O, maşındırmı?" },
            { arabic: "نَعَمْ، هِيَ سَيَّارَةٌ.", translation: "Bəli, o, maşındır." }
        ]
    },
    {
        id: 50,
        title: "Sifət (Müənnəs): Maşın, Məktəb, Çanta, Ağac",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ مَدْرَسَةٌ.", translation: "Bu, məktəbdir." },
            { arabic: "هَلْ هِيَ مَدْرَسَةٌ؟", translation: "O, məktəbdirmi?" },
            { arabic: "نَعَمْ، هِيَ مَدْرَسَةٌ.", translation: "Bəli, o, məktəbdir." }
        ]
    },
    {
        id: 51,
        title: "Sifət (Müənnəs): Maşın, Məktəb, Çanta, Ağac",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ حَقِيبَةٌ كَبِيرَةٌ.", translation: "Bu, böyük çantadır." },
            { arabic: "هَلْ هِيَ كَبِيرَةٌ؟", translation: "O, böyükdürmü?" },
            { arabic: "نَعَمْ، هِيَ كَبِيرَةٌ.", translation: "Bəli, o, böyükdür." }
        ]
    },
    {
        id: 52,
        title: "Sifət (Müənnəs): Maşın, Məktəb, Çanta, Ağac",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ شَجَرَةٌ كَبِيرَةٌ.", translation: "Bu, böyük ağacdır." },
            { arabic: "هَلْ هِيَ كَبِيرَةٌ؟", translation: "O, böyükdürmü?" },
            { arabic: "نَعَمْ، هِيَ كَبِيرَةٌ.", translation: "Bəli, o, böyükdür." }
        ]
    },
    {
        id: 53,
        title: "Sifət Qaydası (Uzlaşma)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ جَدِيدٌ.", translation: "Bu, yeni kitabdır." },
            { arabic: "مَا «جَدِيدٌ»؟", translation: "\"Yeni\" nədir?" },
            { arabic: "«جَدِيدٌ» صِفَةٌ.", translation: "\"Yeni\" sifətdir." },
            { arabic: "صِفَةُ مَاذَا؟", translation: "Nəyin sifətidir?" },
            { arabic: "صِفَةُ «كِتَابٍ».", translation: "\"Kitab\"ın sifətidir." }
        ]
    },
    {
        id: 54,
        title: "Sifət Qaydası (Uzlaşma)",
        dialogue: [
            { arabic: "أَيْنَ الصِّفَةُ فِي «بَيْتٌ كَبِيرٌ»؟", translation: "\"بَيْتٌ كَبِيرٌ\" (böyük ev) ifadəsində sifət haradadır?" },
            { arabic: "«كَبِيرٌ» صِفَةٌ.", translation: "\"كَبِيرٌ\" (böyük) sifətdir." },
            { arabic: "أَيْنَ الِاسْمُ؟", translation: "İsim haradadır?" },
            { arabic: "«بَيْتٌ» هُوَ الِاسْمُ.", translation: "\"بَيْتٌ\" (ev) isimdir." },
            { arabic: "أَيْنَ الصِّفَةُ؟", translation: "Sifət haradadır?" },
            { arabic: "«كَبِيرٌ» بَعْدَ الِاسْمِ.", translation: "\"كَبِيرٌ\" (böyük) isimdən sonradır." }
        ]
    },
    {
        id: 55,
        title: "Sifət Qaydası (Uzlaşma)",
        dialogue: [
            { arabic: "مَاذَا نَقُولُ: «كِتَابٌ جَدِيدٌ» أَمْ «جَدِيدٌ كِتَابٌ»؟", translation: "Hansını deyirik: \"كِتَابٌ جَدِيدٌ\", yoxsa \"جَدِيدٌ كِتَابٌ\"?" },
            { arabic: "نَقُولُ: «كِتَابٌ جَدِيدٌ».", translation: "\"كِتَابٌ جَدِيدٌ\" deyirik." },
            { arabic: "أَيْنَ الصِّفَةُ؟", translation: "Sifət haradadır?" },
            { arabic: "بَعْدَ الِاسْمِ.", translation: "İsimdən sonradır." }
        ]
    },
    {
        id: 56,
        title: "Sifət Qaydası (Uzlaşma)",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ سَيَّارَةٌ جَدِيدَةٌ.", translation: "Bu, yeni maşındır." },
            { arabic: "مَا صِفَةُ «سَيَّارَةٌ»؟", translation: "\"Maşın\" sözünün sifəti nədir?" },
            { arabic: "«جَدِيدَةٌ».", translation: "\"جَدِيدَةٌ\" (yeni)." },
            { arabic: "هَلْ نَقُولُ «جَدِيدٌ»؟", translation: "\"جَدِيدٌ\" deyirikmi?" },
            { arabic: "لَا، نَقُولُ «جَدِيدَةٌ».", translation: "Xeyr, \"جَدِيدَةٌ\" deyirik." }
        ]
    },
    {
        id: 57,
        title: "Sifət Qaydası (Uzlaşma)",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا بَيْتٌ كَبِيرٌ.", translation: "Bu, böyük evdir." },
            { arabic: "هَلْ نَقُولُ «بَيْتٌ كَبِيرَةٌ»؟", translation: "\"بَيْتٌ كَبِيرَةٌ\" deyirikmi?" },
            { arabic: "لَا.", translation: "Xeyr." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "نَقُولُ: «بَيْتٌ كَبِيرٌ».", translation: "\"بَيْتٌ كَبِيرٌ\" deyirik." }
        ]
    },
    {
        id: 58,
        title: "Sifət Qaydası (Uzlaşma)",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ حَقِيبَةٌ كَبِيرَةٌ.", translation: "Bu, böyük çantadır." },
            { arabic: "هَلْ نَقُولُ «حَقِيبَةٌ كَبِيرٌ»؟", translation: "\"حَقِيبَةٌ كَبِيرٌ\" deyirikmi?" },
            { arabic: "لَا.", translation: "Xeyr." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "نَقُولُ: «حَقِيبَةٌ كَبِيرَةٌ».", translation: "\"حَقِيبَةٌ كَبِيرَةٌ\" deyirik." }
        ]
    },
    {
        id: 59,
        title: "Sifət Qaydası (Uzlaşma)",
        dialogue: [
            { arabic: "هٰذَا كِتَابٌ جَدِيدٌ.", translation: "Bu, yeni kitabdır." },
            { arabic: "هَلْ «كِتَابٌ» مُذَكَّرٌ؟", translation: "\"Kitab\" müzəkkərdirmi (kişi cinsindədir)?" },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "هَلْ «جَدِيدٌ» مُذَكَّرٌ؟", translation: "\"Yeni\" müzəkkərdirmi?" },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "إِذَنْ؟", translation: "Deməli?" },
            { arabic: "الصِّفَةُ تُوَافِقُ الِاسْمَ.", translation: "Sifət ismə uyğunlaşır." }
        ]
    },
    {
        id: 60,
        title: "Sifət Qaydası (Uzlaşma)",
        dialogue: [
            { arabic: "هٰذِهِ سَيَّارَةٌ جَدِيدَةٌ.", translation: "Bu, yeni maşındır." },
            { arabic: "هَلْ «سَيَّارَةٌ» مُؤَنَّثٌ؟", translation: "\"Maşın\" müənnəsdirmi (qadın cinsindədir)?" },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "هَلْ «جَدِيدَةٌ» مُؤَنَّثٌ؟", translation: "\"Yeni\" müənnəsdirmi?" },
            { arabic: "نَعَمْ.", translation: "Bəli." },
            { arabic: "إِذَنْ؟", translation: "Deməli?" },
            { arabic: "الصِّفَةُ تُوَافِقُ الِاسْمَ.", translation: "Sifət ismə uyğunlaşır." }
        ]
    },
    {
        id: 61,
        title: "Sifət Qaydası (Uzlaşma)",
        dialogue: [
            { arabic: "مَا صِفَةُ «وَلَدٌ»؟", translation: "\"Oğlan\" sözünün sifəti nədir?" },
            { arabic: "صَغِيرٌ.", translation: "Balaca (صَغِيرٌ)." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "وَلَدٌ صَغِيرٌ.", translation: "Balaca oğlan (وَلَدٌ صَغِيرٌ)." },
            { arabic: "وَمَا صِفَةُ «بِنْتٌ»؟", translation: "Bəs \"qız\" sözünün sifəti nədir?" },
            { arabic: "صَغِيرَةٌ.", translation: "Balaca (صَغِيرَةٌ)." },
            { arabic: "مَاذَا نَقُولُ؟", translation: "Nə deyirik?" },
            { arabic: "بِنْتٌ صَغِيرَةٌ.", translation: "Balaca qız (بِنْتٌ صَغِيرَةٌ)." }
        ]
    },
    {
        id: 62,
        title: "Sifət Qaydası (Uzlaşma)",
        dialogue: [
            { arabic: "مَا الْقَاعِدَةُ؟", translation: "Qayda nədir?" },
            { arabic: "الصِّفَةُ تَأْتِي بَعْدَ الِاسْمِ.", translation: "Sifət ismdən sonra gəlir." },
            { arabic: "وَمَاذَا تَفْعَلُ الصِّفَةُ؟", translation: "Bəs sifət nə edir?" },
            { arabic: "تَصِفُ الِاسْمَ.", translation: "İsmi təsvir edir." },
            { arabic: "هَلْ تُوَافِقُ الصِّفَةُ الِاسْمَ؟", translation: "Sifət ismə uyğunlaşdırmı?" },
            { arabic: "نَعَمْ، تُوَافِقُهُ فِي التَّذْكِيرِ وَالتَّأْنِيثِ.", translation: "Bəli, cins baxımından (müzəkkərlik və müənnəslikdə) ismə uyğunlaşır." }
        ]
    },
    {
        id: 63,
        title: "Sifətlərlə Təsdiq və İnkar",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا كِتَابٌ جَدِيدٌ.", translation: "Bu, yeni kitabdır." },
            { arabic: "هَلْ هُوَ كَبِيرٌ؟", translation: "O, böyükdürmü?" },
            { arabic: "نَعَمْ، هُوَ كَبِيرٌ.", translation: "Bəli, o, böyükdür." }
        ]
    },
    {
        id: 64,
        title: "Sifətlərlə Təsdiq və İnkar",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا بَيْتٌ جَمِيلٌ.", translation: "Bu, gözəl evdir." },
            { arabic: "هَلْ هُوَ كَبِيرٌ؟", translation: "O, böyükdürmü?" },
            { arabic: "لَا، هُوَ صَغِيرٌ.", translation: "Xeyr, o, kiçikdir." }
        ]
    },
    {
        id: 65,
        title: "Sifətlərlə Təsdiq və İnkar",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا قَلَمٌ صَغِيرٌ.", translation: "Bu, kiçik qələmdir." },
            { arabic: "هَلْ هُوَ جَدِيدٌ؟", translation: "O, yenidirmi?" },
            { arabic: "لَا، هُوَ قَدِيمٌ.", translation: "Xeyr, o, köhnədir." }
        ]
    },
    {
        id: 66,
        title: "Sifətlərlə Təsdiq və İnkar",
        dialogue: [
            { arabic: "مَا هٰذَا؟", translation: "Bu nədir?" },
            { arabic: "هٰذَا بَابٌ قَدِيمٌ.", translation: "Bu, köhnə qapıdır." },
            { arabic: "هَلْ هُوَ كَبِيرٌ؟", translation: "O, böyükdürmü?" },
            { arabic: "نَعَمْ، هُوَ كَبِيرٌ.", translation: "Bəli, o, böyükdür." }
        ]
    },
    {
        id: 67,
        title: "Sifətlərlə Təsdiq və İnkar",
        dialogue: [
            { arabic: "مَا هٰذِهِ؟", translation: "Bu nədir?" },
            { arabic: "هٰذِهِ مَدْرَسَةٌ كَبِيرَةٌ.", translation: "Bu, böyük məktəbdir." },
            { arabic: "هَلْ هِيَ جَمِيلَةٌ؟", translation: "O, gözəldirmi?" },
            { arabic: "نَعَمْ، هِيَ جَمِيلَةٌ.", translation: "Bəli, o, gözəldir." }
        ]
    }
];

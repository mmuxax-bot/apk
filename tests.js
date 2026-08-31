// tests.js
const questionsData = [
    {
        id: 1,
        type: "choice",
        question: "كَتَبَ felinin indiki zaman forması hansıdır?",
        options: ["كَتَبَ", "يَكْتُبُ", "اُكْتُبْ"],
        correct: 1
    },
    {
        id: 2,
        type: "input",
        question: "قَرَأَ felinin əmr formasını yazın:",
        correctAnswer: "اِقْرَأْ"
    },
    {
        id: 3,
        type: "choice",
        question: "ذَهَبَ felinin əmr forması hansıdır?",
        options: ["يَذْهَبُ", "ذَهَبَ", "اِذْهَبْ"],
        correct: 2
    },
    {
        id: 4,
        type: "input",
        question: "شَرِبَ felinin indiki zaman formasını yazın:",
        correctAnswer: "يَشْرَبُ"
    },
    {
        id: 5,
        type: "choice",
        question: "أَكَلَ felinin keçmiş zaman forması hansıdır?",
        options: ["أَكَلَ", "يَأْكُلُ", "كُلْ"],
        correct: 0
    },
    {
        id: 6,
        type: "input",
        question: "السَّلَامُ عَلَيْكُمْ ifadəsinin tərcüməsini yazın:",
        correctAnswer: "salam əleyküm"
    },
    {
        id: 7,
        type: "choice",
        question: "وَعَلَيْكُمُ السَّلَامُ nə deməkdir?",
        options: ["Salam", "Əleyküm salam", "Sabahınız xeyir", "Gecəniz xeyir"],
        correct: 1
    },
    {
        id: 8,
        type: "input",
        question: "مَا اسْمُكَ؟ sualının tərcüməsini yazın:",
        correctAnswer: "adın nədir"
    },
    {
        id: 9,
        type: "choice",
        question: "بِكَمْ هَذَا؟ ifadəsinin mənası nədir?",
        options: ["Bu nədir?", "Bu neçəyədir?", "Haralısan?", "Necəsən?"],
        correct: 1
    },
    {
        id: 10,
        type: "input",
        question: "أُرِيدُ شِرَاءَ هَذَا cümləsinin tərcüməsini yazın:",
        correctAnswer: "bunu almaq istəyirəm"

    },
    {
        id: 11,
        type: "choice",
        question: "أَنَا əvəzliyinin mənası nədir?",
        options: ["Mən", "Sən", "O", "Biz"],
        correct: 0
    },
    {
        id: 12,
        type: "input",
        question: "كَيْفَ حَالُكَ؟ ifadəsinin tərcüməsini yazın:",
        correctAnswer: "necəsən"
    },
    {
        id: 13,
        type: "choice",
        question: "أَنْتَ (kişi cinsində) nə deməkdir?",
        options: ["Mən", "Sən", "Biz", "Siz"],
        correct: 1
    },
    {
        id: 14,
        type: "input",
        question: "بِخَيْرٍ sözünün azərbaycanca tərcüməsini yazın:",
        correctAnswer: "yaxşıyam"
    },
    {
        id: 15,
        type: "choice",
        question: "شُكْرًا ifadəsinin tərcüməsi hansıdır?",
        options: ["Çox sağ ol", "Xahiş edirəm", "Xoş gəldiniz", "Salam"],
        correct: 0
    },
    {
        id: 16,
        type: "input",
        question: "عَفْوًا ifadəsinin tərcüməsini yazın:",
        correctAnswer: "xahiş edirəm"
    },
    {
        id: 17,
        type: "choice",
        question: "هُوَ əvəzliyi hansı mənanı verir?",
        options: ["O (kişi)", "O (qadın)", "Biz", "Siz"],
        correct: 0
    },
    {
        id: 18,
        type: "input",
        question: "هِيَ əvəzliyinin Azərbaycan dilində qarşılığını yazın:",
        correctAnswer: "o"
    },
    {
        id: 19,
        type: "choice",
        question: "كِتَابٌ sözünün mənası hansıdır?",
        options: ["Məktəb", "Kitab", "Qələm", "Dəftər"],
        correct: 1
    },
    {
        id: 20,
        type: "input",
        question: "قَلَمٌ sözünün azərbaycanca tərcüməsini yazın:",
        correctAnswer: "qələm"
    },
    {
        id: 21,
        type: "choice",
        question: "مَدْرَسَةٌ nə deməkdir?",
        options: ["Məktəb", "Ev", "Məscid", "Şəhər"],
        correct: 0
    },
    {
        id: 22,
        type: "input",
        question: "بَيْتٌ sözünün mənası nədir?",
        correctAnswer: "ev"
    },
    {
        id: 23,
        type: "choice",
        question: "مَسْجِدٌ sözünün tərcüməsi hansıdır?",
        options: ["Məscid", "Məktəb", "Ev", "Bazar"],
        correct: 0
    },
    {
        id: 24,
        type: "input",
        question: "مَاءٌ sözünün azərbaycanca mənası nədir?",
        correctAnswer: "su"
    },
    {
        id: 25,
        type: "choice",
        question: "طَعَامٌ sözünün mənası nədir?",
        options: ["Yemək", "İçki", "Meyvə", "Çörək"],
        correct: 0
    },
    {
        id: 26,
        type: "input",
        question: "خُبْزٌ sözünün tərcüməsini yazın:",
        correctAnswer: "çörək"
    },
    {
        id: 27,
        type: "choice",
        question: "وَلَدٌ nə deməkdir?",
        options: ["Oğlan uşağı", "Qız uşağı", "Kişi", "Qadın"],
        correct: 0
    },
    {
        id: 28,
        type: "input",
        question: "بِنْتٌ sözünün tərcüməsini yazın:",
        correctAnswer: "qız"
    },
    {
        id: 29,
        type: "choice",
        question: "رَجُلٌ sözünün mənası nədir?",
        options: ["Kişi", "Qadın", "Uşaq", "Qoca"],
        correct: 0
    },
    {
        id: 30,
        type: "input",
        question: "امْرَأَةٌ sözünün azərbaycanca mənası nədir?",
        correctAnswer: "qadın"
    },
    {
        id: 31,
        type: "choice",
        question: "جَمِيلٌ sifətinin mənası hansıdır?",
        options: ["Gözəl", "Çirkin", "Böyük", "Kiçik"],
        correct: 0
    },
    {
        id: 32,
        type: "input",
        question: "كَبِيرٌ sözünün tərcüməsini yazın:",
        correctAnswer: "böyük"
    },
    {
        id: 33,
        type: "choice",
        question: "صَغِيرٌ sifətinin mənası nədir?",
        options: ["Kiçik", "Böyük", "Uzun", "Qısa"],
        correct: 0
    },
    {
        id: 34,
        type: "input",
        question: "كَبِيرَةٌ sözünün mənası nədir?",
        correctAnswer: "böyük"
    },
    {
        id: 35,
        type: "choice",
        question: "نَعَمْ sözünün mənası nədir?",
        options: ["Bəli", "Xeyr", "Bəlkə", "Həmişə"],
        correct: 0
    },
    {
        id: 36,
        type: "input",
        question: "لَا sözünün azərbaycanca mənası nədir?",
        correctAnswer: "xeyr"
    },
    {
        id: 37,
        type: "choice",
        question: "مَنْ هَذَا؟ sualının tərcüməsi hansıdır?",
        options: ["Bu kimdir?", "Bu nədir?", "O kimdir?", "Bura haradır?"],
        correct: 0
    },
    {
        id: 38,
        type: "input",
        question: "مَا هَذَا؟ ifadəsinin mənası nədir?",
        correctAnswer: "bu nədir"
    },
    {
        id: 39,
        type: "choice",
        question: "أَيْنَ sual əvəzliyinin mənası nədir?",
        options: ["Harada", "Kim", "Nə", "Necə"],
        correct: 0
    },
    {
        id: 40,
        type: "input",
        question: "مَتَى sual əvəzliyinin azərbaycanca tərcüməsini yazın:",
        correctAnswer: "ne vaxt"
    },
    {
        id: 41,
        type: "choice",
        question: "لِمَاذَا sual sözünün mənası nədir?",
        options: ["Nə üçün", "Harada", "Kim", "Ne vaxt"],
        correct: 0
    },
    {
        id: 42,
        type: "input",
        question: "كَيْفَ sual əvəzliyinin mənası nədir?",
        correctAnswer: "necə"
    },
    {
        id: 43,
        type: "choice",
        question: "طَالِبٌ sözünün mənası hansıdır?",
        options: ["Tələbə", "Müəllim", "Həkim", "Tacir"],
        correct: 0
    },
    {
        id: 44,
        type: "input",
        question: "مُدَرِّسٌ sözünün azərbaycanca tərcüməsini yazın:",
        correctAnswer: "müəllim"
    },
    {
        id: 45,
        type: "choice",
        question: "طَبِيبٌ sözünün mənası nədir?",
        options: ["Həkim", "Müəllim", "Mühəndis", "Sürücü"],
        correct: 0
    },
    {
        id: 46,
        type: "input",
        question: "تَاجِرٌ sözünün azərbaycanca tərcüməsini yazın:",
        correctAnswer: "tacir"
    },
    {
        id: 47,
        type: "choice",
        question: "شَمْسٌ sözünün tərcüməsi hansıdır?",
        options: ["Günəş", "Ay", "Ulduz", "Səma"],
        correct: 0
    },
    {
        id: 48,
        type: "input",
        question: "قَمَرٌ sözünün azərbaycanca mənası nədir?",
        correctAnswer: "ay"
    },
    {
        id: 49,
        type: "choice",
        question: "يَوْمٌ sözünün mənası nədir?",
        options: ["Gün", "Gecə", "Həftə", "Ay"],
        correct: 0
    },
    {
        id: 50,
        type: "input",
        question: "لَيْلٌ sözünün azərbaycanca mənası nədir?",
        correctAnswer: "gecə"
    },
    {
        id: 51,
        type: "choice",
        question: "فِي sözönünün mənası nədir?",
        options: ["İçində / -da, -də", "Üstündə", "Yanında", "Arxasında"],
        correct: 0
    },
    {
        id: 52,
        type: "input",
        question: "عَلَى sözönünün mənası nədir?",
        correctAnswer: "üstündə"
    },
    {
        id: 53,
        type: "choice",
        question: "مِنْ sözönünün tərcüməsi hansıdır?",
        options: ["-dan, -dən", "-a, -ə", "haqqında", "ilə"],
        correct: 0
    },
    {
        id: 54,
        type: "input",
        question: "إِلَى sözönünün azərbaycanca mənası nədir?",
        correctAnswer: "-a, -ə"
    },
    {
        id: 55,
        type: "choice",
        question: "هَذِهِ hansı cins üçün işlədilir?",
        options: ["Qadın cinsi", "Kişi cinsi", "Orta cins", "Cəm xitab"],
        correct: 0
    },
    {
        id: 56,
        type: "input",
        question: "ذَلِكَ işarə əvəzliyinin tərcüməsini yazın:",
        correctAnswer: "o"
    },
    {
        id: 57,
        type: "choice",
        question: "تِلْكَ sözünün mənası nədir (qadın cinsi üçün)?",
        options: ["O", "Bu", "Biz", "Siz"],
        correct: 0
    },
    {
        id: 58,
        type: "input",
        question: "كِتَابِي ifadəsinin tərcüməsini yazın:",
        correctAnswer: "mənim kitabım"
    },
    {
        id: 59,
        type: "choice",
        question: "كِتَابُكَ nə deməkdir?",
        options: ["Sənin kitabın (kişi)", "Mənim kitabım", "Onun kitabı", "Bizim kitabımız"],
        correct: 0
    },
    {
        id: 60,
        type: "input",
        question: "كِتَابُهُ ifadəsinin tərcüməsini yazın:",
        correctAnswer: "onun kitabı"
    },
    {
        id: 61,
        type: "choice",
        question: "كِتَابُهَا nə deməkdir?",
        options: ["Onun kitabı (qadın)", "Onun kitabı (kişi)", "Mənim kitabım", "Sənin kitabın"],
        correct: 0
    },
    {
        id: 62,
        type: "input",
        question: "أُمٌّ sözünün azərbaycanca tərcüməsini yazın:",
        correctAnswer: "ana"
    },
    {
        id: 63,
        type: "choice",
        question: "أَبٌ sözünün mənası nədir?",
        options: ["Ata", "Ana", "Qardaş", "Bacı"],
        correct: 0
    },
    {
        id: 64,
        type: "input",
        question: "أَخٌ sözünün mənası nədir?",
        correctAnswer: "qardaş"
    },
    {
        id: 65,
        type: "choice",
        question: "أُخْتٌ nə deməkdir?",
        options: ["Bacı", "Ana", "Qız", "Xala"],
        correct: 0
    },
    {
        id: 66,
        type: "input",
        question: "عَمٌّ sözünün azərbaycanca mənası nədir?",
        correctAnswer: "əmi"
    },
    {
        id: 67,
        type: "choice",
        question: "خَالٌ sözünün mənası hansıdır?",
        options: ["Dayı", "Əmi", "Ata", "Baba"],
        correct: 0
    },
    {
        id: 68,
        type: "input",
        question: "جَدٌّ sözünün mənası nədir?",
        correctAnswer: "baba"
    },
    {
        id: 69,
        type: "choice",
        question: "جَدَّةٌ nə deməkdir?",
        options: ["Nənə", "Bacı", "Ana", "Xala"],
        correct: 0
    },
    {
        id: 70,
        type: "input",
        question: "مَدِينَةٌ sözünün azərbaycanca mənası nədir?",
        correctAnswer: "şəhər"
    },
    {
        id: 71,
        type: "choice",
        question: "قَرْيَةٌ sözünün mənası nədir?",
        options: ["Kənd", "Şəhər", "Küçə", "Bina"],
        correct: 0
    },
    {
        id: 72,
        type: "input",
        question: "شَارِعٌ sözünün mənası nədir?",
        correctAnswer: "küçə"
    },
    {
        id: 73,
        type: "choice",
        question: "سَيَّارَةٌ nə deməkdir?",
        options: ["Avtomobil", "Təyyarə", "Avtobus", "Qatar"],
        correct: 0
    },
    {
        id: 74,
        type: "input",
        question: "طَائِرَةٌ sözünün tərcüməsini yazın:",
        correctAnswer: "təyyarə"
    },
    {
        id: 75,
        type: "choice",
        question: "حَافِلَةٌ sözünün mənası nədir?",
        options: ["Avtobus", "Təyyarə", "Gəmi", "Moped"],
        correct: 0
    },
    {
        id: 76,
        type: "input",
        question: "سَفِينَةٌ sözünün mənası nədir?",
        correctAnswer: "gəmi"
    },
    {
        id: 77,
        type: "choice",
        question: "بَابٌ nə deməkdir?",
        options: ["Qapı", "Pəncərə", "Otaq", "Masa"],
        correct: 0
    },
    {
        id: 78,
        type: "input",
        question: "نَافِذَةٌ sözünün tərcüməsini yazın:",
        correctAnswer: "pəncərə"
    },
    {
        id: 79,
        type: "choice",
        question: "غُرْفَةٌ sözünün mənası nədir?",
        options: ["Otaq", "Ev", "Mətbəx", "Həyət"],
        correct: 0
    },
    {
        id: 80,
        type: "input",
        question: "مَطْبَخٌ sözünün azərbaycanca mənası nədir?",
        correctAnswer: "mətbəx"
    },
    {
        id: 81,
        type: "choice",
        question: "حَمَّامٌ nə deməkdir?",
        options: ["Hamam", "Mətbəx", "Otaq", "Dəhliz"],
        correct: 0
    },
    {
        id: 82,
        type: "input",
        question: "طَاوِلَةٌ sözünün mənası nədir?",
        correctAnswer: "masa"
    },
    {
        id: 83,
        type: "choice",
        question: "كُرْسِيٌّ sözünün mənası nədir?",
        options: ["Stul", "Masa", "Şkaf", "Çarpayı"],
        correct: 0
    },
    {
        id: 84,
        type: "input",
        question: "سَرِيرٌ sözünün azərbaycanca mənası nədir?",
        correctAnswer: "çarpayı"
    },
    {
        id: 85,
        type: "choice",
        question: "سَاعَةٌ nə deməkdir?",
        options: ["Saat", "Dəqiqə", "Gün", "Saniyə"],
        correct: 0
    },
    {
        id: 86,
        type: "input",
        question: "صَبَاحٌ sözünün azərbaycanca mənası nədir?",
        correctAnswer: "səhər"
    },
    {
        id: 87,
        type: "choice",
        question: "مَسَاءٌ nə deməkdir?",
        options: ["Axşam", "Səhər", "Günorta", "Gecə"],
        correct: 0
    },
    {
        id: 88,
        type: "input",
        question: "صَبَاحُ الْخَيْرِ ifadəsinin tərcüməsini yazın:",
        correctAnswer: "sabahınız xeyir"
    },
    {
        id: 89,
        type: "choice",
        question: "مَسَاءُ الْخَيْرِ ifadəsinin mənası nədir?",
        options: ["Axşamınız xeyir", "Sabahınız xeyir", "Gecəniz xeyir", "Xoş gəldiniz"],
        correct: 0
    },
    {
        id: 90,
        type: "input",
        question: "أَهْلًا وَسَهْلًا ifadəsinin tərcüməsini yazın:",
        correctAnswer: "xoş gəlmisiniz"
    },
    {
        id: 91,
        type: "choice",
        question: "مَعَ السَّلَامَةِ nə deməkdir?",
        options: ["Sağ olun", "Sabahınız xeyir", "Xoş gördük", "Səfəriniz uğurlu olsun"],
        correct: 0
    },
    {
        id: 92,
        type: "input",
        question: "كُتُبٌ sözünün tək formasını yazın:",
        correctAnswer: "كِتَابٌ"
    },
    {
        id: 93,
        type: "choice",
        question: "أَقْلَامٌ sözünün tək forması hansıdır?",
        options: ["قَلَمٌ", "كِتَابٌ", "قَلَمَانِ", "مَقْلَمَةٌ"],
        correct: 0
    },
    {
        id: 94,
        type: "input",
        question: "أَوْلَادٌ sözünün mənası nədir?",
        correctAnswer: "uşaqlar"
    },
    {
        id: 95,
        type: "choice",
        question: "بَنَاتٌ nə deməkdir?",
        options: ["Qızlar", "Oğlanlar", "Uşaqlar", "Qadınlar"],
        correct: 0
    },
    {
        id: 96,
        type: "input",
        question: "رِجَالٌ sözünün azərbaycanca mənası nədir?",
        correctAnswer: "kişilər"
    },
    {
        id: 97,
        type: "choice",
        question: "نِسَاءٌ sözünün mənası hansıdır?",
        options: ["Qadınlar", "Kişilər", "Qızlar", "Uşaqlar"],
        correct: 0
    },
    {
        id: 98,
        type: "input",
        question: "بُيُوتٌ sözünün tək formasını yazın:",
        correctAnswer: "بَيْتٌ"
    },
    {
        id: 99,
        type: "choice",
        question: "مَدَارِسُ cəm sözünün tək forması hansıdır?",
        options: ["مَدْرَسَةٌ", "مُدَرِّسٌ", "دَرْسٌ", "مَدْرَسَتَانِ"],
        correct: 0
    },
    {
        id: 100,
        type: "input",
        question: "طُلَّابٌ cəm sözünün tək formasını yazın:",
        correctAnswer: "طَالِبٌ"
    },
    {
        id: 101,
        type: "choice",
        question: "كِتَابَانِ sözünün mənası nədir?",
        options: ["İki kitab", "Kitablar", "Bir kitab", "Mənim kitabım"],
        correct: 0
    },
    {
        id: 102,
        type: "input",
        question: "قَلَمَانِ sözünün azərbaycanca mənası nədir?",
        correctAnswer: "iki qələm"
    },
    {
        id: 103,
        type: "choice",
        question: "Ərəb dilində ikişər cəm (təsniyə) şəkilçisi hansıdır?",
        options: ["َانِ / َيْنِ", "ُونَ", "َاتٌ", "يَّ"],
        correct: 0
    },
    {
        id: 104,
        type: "input",
        question: "مُسْلِمُونَ sözünün mənası nədir?",
        correctAnswer: "müsəlmanlar"
    },
    {
        id: 105,
        type: "choice",
        question: "مُسْلِمَاتٌ sözünün mənası hansıdır?",
        options: ["Müsəlman qadınlar", "Müsəlman kişilər", "İki müsəlman", "Müsəlman uşaq"],
        correct: 0
    },
    {
        id: 106,
        type: "input",
        question: "وَاحِدٌ sayının tərcüməsini yazın:",
        correctAnswer: "bir"
    },
    {
        id: 107,
        type: "choice",
        question: "اثْنَانِ neçə deməkdir?",
        options: ["İki", "Bir", "Üç", "Dörd"],
        correct: 0
    },
    {
        id: 108,
        type: "input",
        question: "ثَلَاثَةٌ sayının azərbaycanca tərcüməsini yazın:",
        correctAnswer: "üç"
    },
    {
        id: 109,
        type: "choice",
        question: "أَرْبَعَةٌ sayının mənası nədir?",
        options: ["Dörd", "Beş", "Altı", "Yeddi"],
        correct: 0
    },
    {
        id: 110,
        type: "input",
        question: "خَمْسَةٌ sayının tərcüməsini yazın:",
        correctAnswer: "beş"
    },
    {
        id: 111,
        type: "choice",
        question: "سِتَّةٌ sayının mənası hansıdır?",
        options: ["Altı", "Yeddi", "Səkkiz", "Doqquz"],
        correct: 0
    },
    {
        id: 112,
        type: "input",
        question: "سَبْعَةٌ sayının tərcüməsini yazın:",
        correctAnswer: "yeddi"
    },
    {
        id: 113,
        type: "choice",
        question: "ثَمَانِيَةٌ sayının mənası nədir?",
        options: ["Səkkiz", "Doqquz", "On", "Altı"],
        correct: 0
    },
    {
        id: 114,
        type: "input",
        question: "تِسْعَةٌ sayının tərcüməsini yazın:",
        correctAnswer: "doqquz"
    },
    {
        id: 115,
        type: "choice",
        question: "عَشَرَةٌ neçə deməkdir?",
        options: ["On", "Yüz", "Min", "İyirmi"],
        correct: 0
    },
    {
        id: 116,
        type: "input",
        question: "أَبْيَضُ rənginin azərbaycanca mənası nədir?",
        correctAnswer: "ağ"
    },
    {
        id: 117,
        type: "choice",
        question: "أَسْوَدُ rəngi nə deməkdir?",
        options: ["Qara", "Ağ", "Qırmızı", "Yaşıl"],
        correct: 0
    },
    {
        id: 118,
        type: "input",
        question: "أَحْمَرُ rənginin mənası nədir?",
        correctAnswer: "qırmızı"
    },
    {
        id: 119,
        type: "choice",
        question: "أَخْضَرُ rəngi hansıdır?",
        options: ["Yaşıl", "Mavi", "Sarı", "Qara"],
        correct: 0
    },
    {
        id: 120,
        type: "input",
        question: "أَصْفَرُ rənginin azərbaycanca mənası nədir?",
        correctAnswer: "sarı"
    },
    {
        id: 121,
        type: "choice",
        question: "أَزْرَقُ rəngi nə deməkdir?",
        options: ["Mavi", "Qırmızı", "Qara", "Ağ"],
        correct: 0
    },
    {
        id: 122,
        type: "input",
        question: "كِتَابُ الطَّالِبِ izafət birləşməsinin tərcüməsini yazın:",
        correctAnswer: "tələbənin kitabı"
    },
    {
        id: 123,
        type: "choice",
        question: "بَيْتُ الْمُدَرِّسِ nə deməkdir?",
        options: ["Müəllimin evi", "Tələbənin evi", "Məktəbin həyəti", "Yeni ev"],
        correct: 0
    },
    {
        id: 124,
        type: "input",
        question: "بَابُ الْمَسْجِدِ birləşməsinin mənası nədir?",
        correctAnswer: "məscidin qapısı"
    },
    {
        id: 125,
        type: "choice",
        question: "İzafət birləşməsində birinci tərəf (Məzaf) nə qəbul etmir?",
        options: ["'Əl' (ال) artikli və tənvin", "Şəkilçi", "Hərəkə", "Son hərf"],
        correct: 0
    },
    {
        id: 126,
        type: "input",
        question: "سَيَّارَةُ الطَّبِيبِ ifadəsinin tərcüməsini yazın:",
        correctAnswer: "həkimin maşını"
    },
    {
        id: 127,
        type: "choice",
        question: "ذَهَبَتْ felinin mənası nədir?",
        options: ["O (qadın) getdi", "O (kişi) getdi", "Mən getdim", "Sən getdin"],
        correct: 0
    },
    {
        id: 128,
        type: "input",
        question: "ذَهَبْتُ felinin tərcüməsini yazın:",
        correctAnswer: "mən getdim"
    },
    {
        id: 129,
        type: "choice",
        question: "ذَهَبْتَ nə deməkdir?",
        options: ["Sən getdin (kişi)", "Sən getdin (qadın)", "Mən getdim", "O getdi"],
        correct: 0
    },
    {
        id: 130,
        type: "input",
        question: "ذَهَبْتِ felinin tərcüməsini yazın:",
        correctAnswer: "sən getdin (qadın)"
    },
    {
        id: 131,
        type: "choice",
        question: "ذَهَبْنَا felinin mənası nədir?",
        options: ["Biz getdik", "Onlar getdilər", "Siz getdiniz", "Mən getdim"],
        correct: 0
    },
    {
        id: 132,
        type: "input",
        question: "يَذْهَبُونَ felinin azərbaycanca mənası nədir?",
        correctAnswer: "onlar gedirlər"
    },
    {
        id: 133,
        type: "choice",
        question: "تَكْتُبِينَ nə deməkdir?",
        options: ["Sən yazırsan (qadın)", "Sən yazırsan (kişi)", "Mən yazıram", "O yazır"],
        correct: 0
    },
    {
        id: 134,
        type: "input",
        question: "نَكْتُبُ felinin tərcüməsini yazın:",
        correctAnswer: "biz yazırıq"
    },
    {
        id: 135,
        type: "choice",
        question: "اِكْتُبِي əmr felinin mənası nədir?",
        options: ["Yaz (qadın üçün)", "Yaz (kişi üçün)", "Yazın (cəm)", "Yazırıq"],
        correct: 0
    },
    {
        id: 136,
        type: "input",
        question: "اِكْتُبُوا əmr felinin tərcüməsini yazın:",
        correctAnswer: "yazın"
    },
    {
        id: 137,
        type: "choice",
        question: "لَمْ يَكْتُبْ nə deməkdir?",
        options: ["Yazmadı", "Yazmır", "Yazmayacaq", "Yazsa"],
        correct: 0
    },
    {
        id: 138,
        type: "input",
        question: "لَنْ يَكْتُبَ ifadəsinin tərcüməsini yazın:",
        correctAnswer: "yazmayacaq"
    },
    {
        id: 139,
        type: "choice",
        question: "سَيَكْتُبُ felinin mənası nədir?",
        options: ["Yazacaq (yaxın gələcək)", "Yazdı", "Yazır", "Yazmadı"],
        correct: 0
    },
    {
        id: 140,
        type: "input",
        question: "سَوْفَ يَكْتُبُ ifadəsinin tərcüməsini yazın:",
        correctAnswer: "yazacaq"
    },
    {
        id: 141,
        type: "choice",
        question: "كَانَ felinin mənası nədir?",
        options: ["İdi / Oldu", "Olacaq", "Yoxdur", "Var"],
        correct: 0
    },
    {
        id: 142,
        type: "input",
        question: "لَيْسَ felinin azərbaycanca mənası nədir?",
        correctAnswer: "deyil"
    },
    {
        id: 143,
        type: "choice",
        question: "عِنْدِي ifadəsinin mənası nədir?",
        options: ["Mənim varımdır", "Sənin varındır", "Mən getdim", "Bura mənimdir"],
        correct: 0
    },
    {
        id: 144,
        type: "input",
        question: "لِي ifadəsinin tərcüməsini yazın:",
        correctAnswer: "mənim varımdır"
    },
    {
        id: 145,
        type: "choice",
        question: "مَعِي nə deməkdir?",
        options: ["Mənimlə", "Səninlə", "Onunla", "Bizimlə"],
        correct: 0
    },
    {
        id: 146,
        type: "input",
        question: "أَمَامَ sözünün mənası nədir?",
        correctAnswer: "qarşısında"
    },
    {
        id: 147,
        type: "choice",
        question: "خَلْفَ nə deməkdir?",
        options: ["Arxasında", "Qarşısında", "Üstündə", "Altında"],
        correct: 0
    },
    {
        id: 148,
        type: "input",
        question: "تَحْتَ sözünün azərbaycanca tərcüməsini yazın:",
        correctAnswer: "altında"
    },
    {
        id: 149,
        type: "choice",
        question: "فَوْقَ sözünün mənası nədir?",
        options: ["Üstündə", "Altında", "Yanında", "İçində"],
        correct: 0
    },
    {
        id: 150,
        type: "input",
        question: "بَيْنَ sözünün azərbaycanca mənası nədir?",
        correctAnswer: "arasında"
    },
    {
        id: 151,
        type: "choice",
        question: "إِنَّ (İnnə) hərfi isminə və xəbərinə necə təsir edir?",
        options: ["İsmini mənsub (fəthəli), xəbərini mərfu (zəmməli) edir", "İsmini mərfu, xəbərini mənsub edir", "Hər ikisini məjrur edir", "Hər ikisini mənsub edir"],
        correct: 0
    },
    {
        id: 152,
        type: "input",
        question: "كَأنَّ edatının azərbaycanca tərcüməsini yazın:",
        correctAnswer: "sanki"
    },
    {
        id: 153,
        type: "choice",
        question: "لَكِنَّ hərfi cümlədə hansı mənada işlənir?",
        options: ["Lakin / Amma", "Çünki", "Sanki", "Kaş ki"],
        correct: 0
    },
    {
        id: 154,
        type: "input",
        question: "لَيْتَ edatının azərbaycanca tərcüməsini yazın:",
        correctAnswer: "kaş ki"
    },
    {
        id: 155,
        type: "choice",
        question: "لَعَلَّ sözünün mənası nədir?",
        options: ["Bəlkə / Ola bilsin ki", "Çünki", "Kaş ki", "Hətta"],
        correct: 0
    },
    {
        id: 156,
        type: "input",
        question: "إِنَّ اللَّهَ غَفُورٌ cümləsində اللَّهَ sözünün e'rab (qrammatik) halı nədir?",
        correctAnswer: "mənsub"
    },
    {
        id: 157,
        type: "choice",
        question: "كَانَ (Kənə) felinin isminə və xəbərinə təsiri necədir?",
        options: ["İsmini mərfu (zəmməli), xəbərini mənsub (fəthəli) edir", "İsmini mənsub, xəbərini mərfu edir", "Hər ikisini mərfu edir", "Hər ikisini məjrur edir"],
        correct: 0
    },
    {
        id: 158,
        type: "input",
        question: "كَانَ اللَّهُ عَلِيمًا cümləsində عَلِيمًا sözünün e'rab halı nədir?",
        correctAnswer: "mənsub"
    },
    {
        id: 159,
        type: "choice",
        question: "أَصْبَحَ (Əsbəhə) felinin mənası nədir?",
        options: ["Səhərə çıxdı / Oldu", "Gecələdi", "Deyil", "Hələ də"],
        correct: 0
    },
    {
        id: 160,
        type: "input",
        question: "مَا زَالَ (Mə zələ) ifadəsinin azərbaycanca mənası nədir?",
        correctAnswer: "hələ də"
    },
    {
        id: 161,
        type: "choice",
        question: "الْمَفْعُولُ بِهِ (Məf'ul bihi) nəyə deyilir?",
        options: ["Təsirli felin təsirinə məruz qalan vasitəsiz tamamlığa", "Zaman və məkan zərfinə", "Səbəb bildirən sözə", "Mübtədaya"],
        correct: 0
    },
    {
        id: 162,
        type: "input",
        question: "قَرَأَ الطَّالِبُ الْكِتَابَ cümləsində Məf'ul bihi olan sözü yazın:",
        correctAnswer: "الْكِتَابَ"
    },
    {
        id: 163,
        type: "choice",
        question: "الْمَفْعُولُ فِيهِ (Məf'ul fihi) cümlədə nəyi bildirir?",
        options: ["Hərəkətin zamanını və ya məkanını (zərf)", "İşin səbəbini", "Hərəkətin tərzini", "İcraçını"],
        correct: 0
    },
    {
        id: 164,
        type: "input",
        question: "صَامَ الْمُسْلِمُ يَوْمًا cümləsində Məf'ul fihi olan sözü yazın:",
        correctAnswer: "يَوْمًا"
    },
    {
        id: 165,
        type: "choice",
        question: "الْمَفْعُولُ لِأَجْلِهِ (Məf'ul li-əclihi) nəyi bildirir?",
        options: ["Hərəkətin edilmə səbəbini/məqsədini", "Hərəkətin zamanını", "Vasitəsiz tamamlığı", "Məkanı"],
        correct: 0
    },
    {
        id: 166,
        type: "input",
        question: "قُمْتُ إِجْلَالًا لِلْمُعَلِّمِ cümləsində Məf'ul li-əclihi hansı sözdür?",
        correctAnswer: "إِجْلَالًا"
    },
    {
        id: 167,
        type: "choice",
        question: "الْحَالُ (Hal) qrammatikada nəyi göstərir?",
        options: ["Subyektin və ya obyektin hərəkət anındakı vəziyyətini/tərzini", "Zamanı", "Məkanı", "Səbəbi"],
        correct: 0
    },
    {
        id: 168,
        type: "input",
        question: "جَاءَ الطَّالِبُ ضَاحِكًا cümləsində Hal olan sözü yazın:",
        correctAnswer: "ضَاحِكًا"
    },
    {
        id: 169,
        type: "choice",
        question: "التَّمْيِيزُ (Tamyiz) nə üçün işlənir?",
        options: ["Cümlədəki və ya sözdəki qeyri-müəyyənliyi (mübhəmliyi) itirmək üçün", "Təkid üçün", "Zaman bildirmək üçün", "İnkar üçün"],
        correct: 0
    },
    {
        id: 170,
        type: "input",
        question: "اشْتَرَيْتُ عِشْرِينَ كِتَابًا cümləsində Tamyiz olan sözü yazın:",
        correctAnswer: "كِتَابًا"
    },
    {
        id: 171,
        type: "choice",
        question: "Sifət (النَّعْتُ) mövsufuna (الْمَنْعُوتُ) neçə cəhətdən tabe olur?",
        options: ["4 cəhətdən (cins, kəmiyyət, müəyyənlik/qeyri-müəyyənlik, e'rab)", "2 cəhətdən", "Hər zaman sabitdir", "Təkcə cəmdə"],
        correct: 0
    },
    {
        id: 172,
        type: "input",
        question: "رَجُلٌ صَالِحٌ ifadəsində sifət olan sözü yazın:",
        correctAnswer: "صَالِحٌ"
    },
    {
        id: 173,
        type: "choice",
        question: "Qeyri-aqil (ağılsız varlıqların) cəmlərinin sifəti hansı formada gəlir?",
        options: ["Tək qadın cinsində", "Tək kişi cinsində", "Cəm kişi cinsində", "Cəm qadın cinsində"],
        correct: 0
    },
    {
        id: 174,
        type: "input",
        question: "كُتُبٌ جَدِيدَةٌ birləşməsində sifət olan sözü yazın:",
        correctAnswer: "جَدِيدَةٌ"
    },
    {
        id: 175,
        type: "choice",
        question: "الَّذِي nisbi əvəzliyi hansı məqamda işlənir?",
        options: ["Tək kişi cinsi üçün", "Tək qadın cinsi üçün", "Cəm kişi cinsi üçün", "Cəm qadın cinsi üçün"],
        correct: 0
    },
    {
        id: 176,
        type: "input",
        question: "Tək qadın cinsi üçün nisbi əvəzliyi (ism-i məusul) yazın:",
        correctAnswer: "الَّتِي"
    },
    {
        id: 177,
        type: "choice",
        question: "الَّذِينَ nisbi əvəzliyinin mənası nədir?",
        options: ["O kəslər ki (cəm kişi)", "O iki kişi ki", "O qadın ki", "O iki qadın ki"],
        correct: 0
    },
    {
        id: 178,
        type: "input",
        question: "الَّلَاتِي nisbi əvəzliyi kimlər üçün işlənir?",
        correctAnswer: "qadınlar"
    },
    {
        id: 179,
        type: "choice",
        question: "فَاعِلٌ şəklində olan ism necə adlanır?",
        options: ["İsm-i Fail (İcraçı ism)", "İsm-i Məf'ul", "Məsdər", "Zərf"],
        correct: 0
    },
    {
        id: 180,
        type: "input",
        question: "كَتَبَ felindən İsm-i Fail forması yazın:",
        correctAnswer: "كَاتِبٌ"
    },
    {
        id: 181,
        type: "choice",
        question: "مَفْعُولٌ vəznində olan ism necə adlanır?",
        options: ["İsm-i Məf'ul (Təsirə məruz qalan)", "İsm-i Fail", "İsm-i Məkan", "İsm-i Alət"],
        correct: 0
    },
    {
        id: 182,
        type: "input",
        question: "كَتَبَ felindən İsm-i Məf'ul forması yazın:",
        correctAnswer: "مَكْتُوبٌ"
    },
    {
        id: 183,
        type: "choice",
        question: "مَكْتَبٌ sözü hansı vəzndədir və nə bildirir?",
        options: ["Məf'alun - İsm-i Məkan (Məkan ismi)", "İsm-i Alət", "İsm-i Fail", "İsm-i Zaman"],
        correct: 0
    },
    {
        id: 184,
        type: "input",
        question: "مِفْتَاحٌ sözü hansı ism növünə aiddir?",
        correctAnswer: "ism-i alət"
    },
    {
        id: 185,
        type: "choice",
        question: "I Bab (Sülasi mücərrəd) üçhərfli fellərin əsas forması hansıdır?",
        options: ["فَعَلَ - يَفْعُلُ", "فَعَلَ - يَفْعِلُ", "فَعَلَ - يَفْعَلُ", "فَعِلَ - يَفْعَلُ"],
        correct: 0
    },
    {
        id: 186,
        type: "input",
        question: "عَلِمَ felinin indiki zaman formasını yazın:",
        correctAnswer: "يَعْلَمُ"
    },
    {
        id: 187,
        type: "choice",
        question: "II Bab (Təf'īl باب التَّفْعِيل) feli necə düzəlir?",
        options: ["Orta kök hərfi şəddələməklə (فَعَّلَ)", "Əvvəlinə əlif artırmaqla", "Tə artırmaqla", "İki hərf artırmaqla"],
        correct: 0
    },
    {
        id: 188,
        type: "input",
        question: "عَلَّمَ felinin məsdər formasını yazın:",
        correctAnswer: "تَعْلِيمٌ"
    },
    {
        id: 189,
        type: "choice",
        question: "III Bab (Mufā'alah باب الْمُفَاعَلَة) feli hansı vəzndədir?",
        options: ["فَاعَلَ - يُفَاعِلُ", "فَعَّلَ - يُفَعِّلُ", "أَفْعَلَ - يُفْعِلُ", "تَفَعَّلَ - يَتَفَعَّلُ"],
        correct: 0
    },
    {
        id: 190,
        type: "input",
        question: "جَاهَدَ felinin məsdər formasını yazın:",
        correctAnswer: "جِهَادٌ"
    },
    {
        id: 191,
        type: "choice",
        question: "IV Bab (İf'āl باب الإِفْعَال) feli hansıdır?",
        options: ["أَرْسَلَ - يُرْسِلُ - إِرْسَالٌ", "سَالَمَ - يُسَالِمُ", "تَكَلَّمَ - يَتَكَلَّمُ", "اسْتَغْفَرَ - يَسْتَغْفِرُ"],
        correct: 0
    },
    {
        id: 192,
        type: "input",
        question: "أَسْلَمَ felinin məsdərini yazın:",
        correctAnswer: "إِسْلَامٌ"
    },
    {
        id: 193,
        type: "choice",
        question: "V Bab (Təfə''ul باب التَّفَعُّل) feli hansı vəzndədir?",
        options: ["تَفَعَّلَ - يَتَفَعَّلُ", "تَفَاعَلَ - يَتَفَاعَلُ", "إِنْفَعَلَ - يَنْفَعِلُ", "اِفْتَعَلَ - يَفْتَعِلُ"],
        correct: 0
    },
    {
        id: 194,
        type: "input",
        question: "تَعَلَّمَ felinin məsdərini yazın:",
        correctAnswer: "تَعَلُّمٌ"
    },
    {
        id: 195,
        type: "choice",
        question: "VI Bab (Təfā'ul باب التَّفَاعُل) feli əsasən nəyi bildirir?",
        options: ["İki və ya daha çox şəxs arasında qarşılıqlı işi", "Təkbaşına işi", "Tələb etməyi", "Məchulluğu"],
        correct: 0
    },
    {
        id: 196,
        type: "input",
        question: "تَعَاوَنَ felinin məsdərini yazın:",
        correctAnswer: "تَعَاوُنٌ"
    },
    {
        id: 197,
        type: "choice",
        question: "VII Bab (İnfı'āl باب الإِنْفِعَال) feli hansı xüsusiyyətə malikdir?",
        options: ["Mütava'at (təsirli felin qayıdış/təsirsiz halı)", "Tələb mənalı", "Şəddəli", "Təsirli"],
        correct: 0
    },
    {
        id: 198,
        type: "input",
        question: "اِنْكَسَرَ felinin məsdərini yazın:",
        correctAnswer: "اِنْكِسَارٌ"
    },
    {
        id: 199,
        type: "choice",
        question: "VIII Bab (İftı'āl باب الإِفْتِعَال) feli hansıdır?",
        options: ["اِجْتَمَعَ - يَجْتَمِعُ - اِجْتِمَاعٌ", "اِنْفَطَرَ - يَنْفَطِرُ", "اسْتَخْرَجَ - يَسْتَخْرِجُ", "تَعَلَّمَ - يَتَعَلَّمُ"],
        correct: 0
    },
    {
        id: 200,
        type: "input",
        question: "اِتَّبَعَ felinin məsdərini yazın:",
        correctAnswer: "اِتِّبَاعٌ"
    },
    {
        id: 201,
        type: "choice",
        question: "X Bab (İstif'āl باب الإِسْتِفْعَال) feli əsasən nəyi ifadə edir?",
        options: ["Bir şeyi tələb etmək / istəməyi", "Qarşılıqlı əlaqəni", "Qayıdışı", "Rəngləri"],
        correct: 0
    },
    {
        id: 202,
        type: "input",
        question: "اسْتَغْفَرَ felinin məsdərini yazın:",
        correctAnswer: "اسْتِغْفَارٌ"
    },
    {
        id: 203,
        type: "choice",
        question: "Məchul növ (الفِعْلُ الْمَبْنِيُّ لِلْمَجْهُولِ) keçmiş zamanda necə düzəlir?",
        options: ["İlk hərf zəmmə, sondan əvvəlki hərf kəsrə olunur (فُعِلَ)", "İlk hərf fəthə olunur", "İlk hərf kəsrə olunur", "Sondan əvvəlki zəmmə olunur"],
        correct: 0
    },
    {
        id: 204,
        type: "input",
        question: "كَتَبَ felinin məchul formasını yazın:",
        correctAnswer: "كُتِبَ"
    },
    {
        id: 205,
        type: "choice",
        question: "Məchul felin cümlədəki subyektinə (əvəzedici mübtədaya) nə deyilir?",
        options: ["Nəib-i Fail (نَائِبُ الْفَاعِلِ)", "Məf'ul bihi", "Hal", "Tamyiz"],
        correct: 0
    },
    {
        id: 206,
        type: "input",
        question: "كُتِبَ عَلَيْكُمُ الصِّيَامُ cümləsində Nəib-i Fail olan sözü yazın:",
        correctAnswer: "الصِّيَامُ"
    },
    {
        id: 207,
        type: "choice",
        question: "إِذَا şərt ədatı hansı zaman mənasında işlənir?",
        options: ["Gələcək zaman / Əgər ...sa", "Keçmiş zaman", "İnkar zamanı", "Qadağa"],
        correct: 0
    },
    {
        id: 208,
        type: "input",
        question: "إِنْ şərt ədatının azərbaycanca tərcüməsini yazın:",
        correctAnswer: "əgər"
    },
    {
        id: 209,
        type: "choice",
        question: "Cəzm edən şərt ədatları neçə feli cəzm edir?",
        options: ["İki feli (şərt feli və cavab feli)", "Bir feli", "Üç feli", "Heç birini"],
        correct: 0
    },
    {
        id: 210,
        type: "input",
        question: "مَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ cümləsində şərt ədatı hansıdır?",
        correctAnswer: "مَنْ"
    },
    {
        id: 211,
        type: "choice",
        question: "Məmnun minəs-Sərf (المَمْنُوعُ مِنَ الصَّرْفِ) sözlər nə qəbul etmir?",
        options: ["Tənvin və kəsrə hərəkəsi", "Zəmmə", "Fəthə", "Sükun"],
        correct: 0
    },
    {
        id: 212,
        type: "input",
        question: "مَسَاجِدُ sözünün məjrur halda hərəkəsi nə olur?",
        correctAnswer: "fəthə"
    },
    {
        id: 213,
        type: "choice",
        question: "Hansı adlar Məmnun minəs-sərfə aiddir?",
        options: ["Qadın adları, fərqli şəkilçili adlar və əcnəbi (əcəmi) adlar", "Yalnız tək sözlər", "Tənvinli sözlər", "Təşdidli sözlər"],
        correct: 0
    },
    {
        id: 214,
        type: "input",
        question: "إِبْرَاهِيمُ ismi məjrur halda necə oxunur?",
        correctAnswer: "إِبْرَاهِيمَ"
    },
    {
        id: 215,
        type: "choice",
        question: "Nəfyi-Cins لا (La əl-nafiya lil-cins) nəyi inkar edir?",
        options: ["Cinsin bütün fərdlərindən xəbəri mütləq inkar edir", "Təkcə bir şəxsi", "Keçmiş zamanı", "Gələcəyi"],
        correct: 0
    },
    {
        id: 216,
        type: "input",
        question: "لا إِلَهَ إِلا اللَّهُ cümləsində Nəfyi-cins La-sının ismini yazın:",
        correctAnswer: "إِلَهَ"
    },
    {
        id: 217,
        type: "choice",
        question: "Müstəsna (الإِسْتِثْنَاءُ) cümləsində إِلَّا edatından sonra gələn ism necə adlanır?",
        options: ["Müstəsna (المُسْتَثْنَى)", "Müstəsna minhu", "Nəib fail", "Bədəl"],
        correct: 0
    },
    {
        id: 218,
        type: "input",
        question: "جَاءَ الطُّلاَّبُ إِلاَّ طَالِبًا cümləsində Müstəsna olan sözü yazın:",
        correctAnswer: "طَالِبًا"
    },
    {
        id: 219,
        type: "choice",
        question: "غَيْرُ və سِوَى istisna edatlarından sonra gələn ism hansı halda olur?",
        options: ["Məjrur (İzafət kimi)", "Mənsub", "Mərfu", "Sükunlu"],
        correct: 0
    },
    {
        id: 220,
        type: "input",
        question: "جَاءَ القَوْمُ غَيْرَ زَيْدٍ cümləsində زَيْدٍ sözünün halını yazın:",
        correctAnswer: "məjrur"
    },
    {
        id: 221,
        type: "choice",
        question: "Nida (Çağırış) edatı olan يا (Ya) sözündən sonra tək xüsusi ism gələrsə hərəkəsi nə olar?",
        options: ["Zəmmə üzərə məbni (zəmməli)", "Fəthəli", "Kəsrəli", "Tənvinli"],
        correct: 0
    },
    {
        id: 222,
        type: "input",
        question: "يا مُحَمَّدُ ifadəsində مُحَمَّدُ sözünün son hərəkəsini yazın:",
        correctAnswer: "zəmmə"
    },
    {
        id: 223,
        type: "choice",
        question: "Nida olunan ism izafət (mudaflı) olarsa (məs: يا عَبْدَ اللَّهِ) halı necə olar?",
        options: ["Mənsub (fəthəli)", "Mərfu (zəmməli)", "Məjrur", "Sükun"],
        correct: 0
    },
    {
        id: 224,
        type: "input",
        question: "يا رَبَّ العَالَمِينَ ifadəsində رَبَّ sözünün hərəkəsini yazın:",
        correctAnswer: "fəthə"
    },
    {
        id: 225,
        type: "choice",
        question: "Məsdər nəyə deyilir?",
        options: ["Zaman bildirmədən hərəkətin/işin adını bildirən ismə", "Zaman bildirən felə", "Sifətə", "Əvəzliyə"],
        correct: 0
    },
    {
        id: 226,
        type: "input",
        question: "قَرَأَ felinin məsdərini yazın:",
        correctAnswer: "قِرَاءَةٌ"
    },
    {
        id: 227,
        type: "choice",
        question: "Ərəb dilində fellər kök hərflərinin sayına görə əsasən neçə yerə bölünür?",
        options: ["Sülasi (3 hərfli) və Ruba'i (4 hərfli)", "Tək və cəm", "Keçmiş və gələcək", "İsmi və feli"],
        correct: 0
    },
    {
        id: 228,
        type: "input",
        question: "دَخَلَ felinin məsdərini yazın:",
        correctAnswer: "دُخُولٌ"
    },
    {
        id: 229,
        type: "choice",
        question: "İf'āl (إِفْعَال) babının feli lazım (təsirsiz) felə nə edir?",
        options: ["Onu müətəddi (təsirli) edir", "Məchul edir", "Təsirsiz edir", "İnkar edir"],
        correct: 0
    },
    {
        id: 230,
        type: "input",
        question: "خَرَجَ (çıxdı) felini IV baba salaraq 'çıxartdı' mənasını verən feli yazın:",
        correctAnswer: "أَخْرَجَ"
    },
    {
        id: 231,
        type: "choice",
        question: "التَّوْحِيدُ sözünün dilçilik baxımından məsdər vəzn hansıdır?",
        options: ["التَّفْعِيلُ (Təf'īl)", "الإِفْعَالُ", "المُفَاعَلَةُ", "التَّفَعُّلُ"],
        correct: 0
    },
    {
        id: 232,
        type: "input",
        question: "تَوْحِيدٌ sözünün üçhərfli kökünü yazın:",
        correctAnswer: "و ح د"
    },
    {
        id: 233,
        type: "choice",
        question: "لا إِلَهَ إِلا اللَّهُ kəlməsində لا nə adlanır?",
        options: ["Nəfyi-Cins La-sı (Cinsi inkar edən La)", "Nəhy La-sı (Qadağa)", "Atıf La-sı", "Zaidə La"],
        correct: 0
    },
    {
        id: 234,
        type: "input",
        question: "الشِّرْكُ الأَكْبَرُ birləşməsində الأَكْبَرُ sözünün qrammatik nə olduğunu yazın:",
        correctAnswer: "sifət"
    },
    {
        id: 235,
        type: "choice",
        question: "اللَّهُ خَالِقُ كُلِّ شَيْءٍ cümləsində خَالِقُ sözünün qrammatik vəzifəsi nədir?",
        options: ["Xəbər (الخَبَرُ)", "Mübtəda", "Məf'ul", "Sifət"],
        correct: 0
    },
    {
        id: 236,
        type: "input",
        question: "الرَّحْمَنُ عَلَى الْعَرْشِ اسْتَوَى cümləsində mübtəda olan sözü yazın:",
        correctAnswer: "الرَّحْمَنُ"
    },
    {
        id: 237,
        type: "choice",
        question: "لَيْسَ كَمِثْلِهِ شَيْءٌ ayəsində شَيْءٌ sözünün e'rabı nədir?",
        options: ["Mərfu (İsm-i Ləysə)", "Mənsub", "Məjrur", "Sükun"],
        correct: 0
    },
    {
        id: 238,
        type: "input",
        question: "لَا تَجْعَلُوا مَعَ اللَّهِ إِلَهًا آخَرَ cümləsində تَجْعَلُوا felinin önündəki لَا nədir?",
        correctAnswer: "qadağa la-sı"
    },
    {
        id: 239,
        type: "choice",
        question: "إنَّمَا الأَعْمَالُ بِالنِّيَّاتِ cümləsində إنَّمَا nəyi bildirir?",
        options: ["Hasr / Qəsər (Məhdudlaşdırma - 'Yalnız / Ancaq')", "Şərt", "İstisna", "Nida"],
        correct: 0
    },
    {
        id: 240,
        type: "input",
        question: "عَالِمُ الْغَيْبِ وَالشَّهَادَةِ birləşməsində الْغَيْبِ sözünün e'rab halını yazın:",
        correctAnswer: "məjrur"
    },
    {
        id: 241,
        type: "choice",
        question: "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ cümləsində الصَّالِحَاتِ sözünün mənsubluq əlaməti nədir?",
        options: ["Kəsrə (Cəm مؤنث سالم olduğu üçün)", "Fəthə", "Zəmmə", "Sükun"],
        correct: 0
    },
    {
        id: 242,
        type: "input",
        question: "مَنْ يَتَّقِ اللَّهَ cümləsində يَتَّقِ felinin son hərfinin düşmə səbəbini yazın:",
        correctAnswer: "cəzm"
    },
    {
        id: 243,
        type: "choice",
        question: "أَلا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ cümləsində الْقُلُوبُ sözünün vəzifəsi nədir?",
        options: ["Fail (فَاعِلٌ)", "Məf'ul", "Mübtəda", "Xəbər"],
        correct: 0
    },
    {
        id: 244,
        type: "input",
        question: "قُلْ هُوَ اللَّهُ أَحَدٌ cümləsində قُلْ felinin qrammatik formasını yazın:",
        correctAnswer: "əmr"
    },
    {
        id: 245,
        type: "choice",
        question: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ cümləsində الْمُسْتَقِيمَ sözü nədir?",
        options: ["Sifət (Na't)", "Məf'ul", "Fail", "Xəbər"],
        correct: 0
    },
    {
        id: 246,
        type: "input",
        question: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ cümləsində أَعُوذُ felinin zamanını yazın:",
        correctAnswer: "indiki zaman"
    },
    {
        id: 247,
        type: "choice",
        question: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ cümləsində أَنْعَمْتَ felindəki تَ nəyi bildirir?",
        options: ["Sən (ikinci şəxs kişi keçmiş zaman faili)", "Mən", "O", "Biz"],
        correct: 0
    },
    {
        id: 248,
        type: "input",
        question: "وَلا الضَّالِّينَ ifadəsində الضَّالِّينَ sözünün tək formasını yazın:",
        correctAnswer: "ضَالٌّ"
    },
    {
        id: 249,
        type: "choice",
        question: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ cümləsində أَحَدٌ sözünün vəzifəsi nədir?",
        options: ["İsm-i Yakun (Mərfu)", "Xəbər", "Məf'ul", "Hal"],
        correct: 0
    },
    {
        id: 250,
        type: "input",
        question: "إِيَّاكَ نَعْبُدُ cümləsində إِيَّاكَ qrammatik olaraq nədir?",
        correctAnswer: "məf'ul bihi"
    }
];


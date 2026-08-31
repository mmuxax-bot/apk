const verbsData = [
{
        id: 1,
        arabic: "كَتَبَ",
        meaning: "yazmaq",
        forms: {
            past: { arabic: "كَتَبَ", translation: "yazdı", examples: [
                { arabic: "كَتَبَ الطَّالِبُ الدَّرْسَ", translation: "Tələbə dərsi yazdı." },
                { arabic: "كَتَبَتْ فَاطِمَةُ الرِّسَالَةَ", translation: "Fatimə məktubu yazdı." }
            ]},
            present: { arabic: "يَكْتُبُ", translation: "yazır", examples: [
                { arabic: "يَكْتُبُ الرِّسَالَةَ", translation: "Məktubu yazır." },
                { arabic: "يَكْتُبُ المُدَرِّسُ الدَّرْسَ", translation: "Müəllim dərsi yazır." }
            ]},
            imperative: { arabic: "اُكْتُبْ", translation: "yaz!", examples: [
                { arabic: "اُكْتُبْ وَاجِبَكَ", translation: "Tapşırığını yaz!" },
                { arabic: "اُكْتُبْ هَذَا الدَّرْسَ", translation: "Bu dərsi yaz!" }
            ]}
        }
    },
{
        id: 2,
        arabic: "قَرَأَ",
        meaning: "oxumaq",
        forms: {
            past: { arabic: "قَرَأَ", translation: "oxudu", examples: [
                { arabic: "قَرَأَ الكِتَابَ", translation: "Kitabı oxudu." },
                { arabic: "قَرَأَتْ الجَرِيدَةَ", translation: "Qəzeti oxudu." }
            ]},
            present: { arabic: "يَقْرَأُ", translation: "oxuyur", examples: [
                { arabic: "يَقْرَأُ الجَرِيدَةَ", translation: "Qəzeti oxuyur." },
                { arabic: "يَقْرَأُ الطَّالِبُ القُرْآنَ", translation: "Tələbə Quran oxuyur." }
            ]},
            imperative: { arabic: "اِقْرَأْ", translation: "oxu!", examples: [
                { arabic: "اِقْرَأْ الكِتَابَ", translation: "Kitabı oxu!" },
                { arabic: "اِقْرَأْ بِصَوْتٍ عَالٍ", translation: "Uca səslə oxu!" }
            ]}
        }
    },
{
        id: 3,
        arabic: "ذَهَبَ",
        meaning: "getmək",
        forms: {
            past: { arabic: "ذَهَبَ", translation: "getdi", examples: [
                { arabic: "ذَهَبَ إِلَى المَدْرَسَةِ", translation: "Məktəbə getdi." },
                { arabic: "ذَهَبَ أَحْمَدُ إِلَى السُّوقِ", translation: "Əhməd bazara getdi." }
            ]},
            present: { arabic: "يَذْهَبُ", translation: "gedir", examples: [
                { arabic: "يَذْهَبُ إِلَى العَمَلِ", translation: "İşə gedir." },
                { arabic: "يَذْهَبُ إِلَى المَسْجِدِ", translation: "Məscidə gedir." }
            ]},
            imperative: { arabic: "اِذْهَبْ", translation: "get!", examples: [
                { arabic: "اِذْهَبْ إِلَى البَيْتِ", translation: "Evə get!" },
                { arabic: "اِذْهَبْ مَعَ أَخِيكَ", translation: "Qardaşınla get!" }
            ]}
        }
    },
{
        id: 4,
        arabic: "أَكَلَ",
        meaning: "yemək",
        forms: {
            past: { arabic: "أَكَلَ", translation: "yedi", examples: [
                { arabic: "أَكَلَ التُّفَّاحَةَ", translation: "Almanı yedi." },
                { arabic: "أَكَلُوا العَشَاءَ مَعًا", translation: "Onlar birlikdə şam yeməyi yedilər." }
            ]},
            present: { arabic: "يَأْكُلُ", translation: "yeyir", examples: [
                { arabic: "يَأْكُلُ الخُبْزَ", translation: "Çörək yeyir." },
                { arabic: "تَأْكُلُ فَاطِمَةُ التُّفَّاحَ", translation: "Fatimə alma yeyir." }
            ]},
            imperative: { arabic: "كُلْ", translation: "ye!", examples: [
                { arabic: "كُلْ طَعَامَكَ", translation: "Yeməyini ye!" },
                { arabic: "كُلْ بِبُطْءٍ", translation: "Yavaş ye!" }
            ]}
        }
    },
{
        id: 5,
        arabic: "شَرِبَ",
        meaning: "içmək",
        forms: {
            past: { arabic: "شَرِبَ", translation: "içdi", examples: [
                { arabic: "شَرِبَ المَاءَ", translation: "Su içdi." },
                { arabic: "شَرِبَتْ الشَّايَ", translation: "Çay içdi." }
            ]},
            present: { arabic: "يَشْرَبُ", translation: "içir", examples: [
                { arabic: "يَشْرَبُ الشَّايَ", translation: "Çay içir." },
                { arabic: "يَشْرَبُ الطِّفْلُ الحَلِيبَ", translation: "Uşaq süd içir." }
            ]},
            imperative: { arabic: "اِشْرَبْ", translation: "iç!", examples: [
                { arabic: "اِشْرَبْ المَاءَ", translation: "Su iç!" },
                { arabic: "اِشْرَبْ عَصِيرَ تُفَّاحٍ", translation: "Alma şirəsi iç!" }
            ]}
        }
    },
{
        id: 6,
        arabic: "فَهِمَ",
        meaning: "anlamaq",
        forms: {
            past: { arabic: "فَهِمَ", translation: "anladı", examples: [
                { arabic: "فَهِمَ الطَّالِبُ الدَّرْسَ", translation: "Tələbə dərsi anladı." },
                { arabic: "فَهِمَتْ الْمَسْأَلَةَ", translation: "Məsələni anladı." }
            ]},
            present: { arabic: "يَفْهَمُ", translation: "anlayır", examples: [
                { arabic: "يَفْهَمُ اللُّغَةَ", translation: "Dili başa düşür." },
                { arabic: "يَفْهَمُ السُّؤَالَ", translation: "Sualı anlayır." }
            ]},
            imperative: { arabic: "اِفْهَمْ", translation: "anla!", examples: [
                { arabic: "اِفْهَمْ مَا أَقُولُ", translation: "Dediyimi anla!" },
                { arabic: "اِفْهَمْ الدَّرْسَ جَيِّدًا", translation: "Dərsi yaxşı anla!" }
            ]}
        }
    },
{
        id: 7,
        arabic: "حَفِظَ",
        meaning: "əzbərləmək",
        forms: {
            past: { arabic: "حَفِظَ", translation: "əzbərlədi", examples: [
                { arabic: "حَفِظَ القُرْآنَ", translation: "Quranı əzbərlədi." },
                { arabic: "حَفِظَتْ القَصِيدَةَ", translation: "Şeiri əzbərlədi." }
            ]},
            present: { arabic: "يَحْفَظُ", translation: "əzbərləyir", examples: [
                { arabic: "يَحْفَظُ الدَّرْسَ", translation: "Dərsi əzbərləyir." },
                { arabic: "يَحْفَظُ الأَحَادِيثَ", translation: "Hədisləri əzbərləyir." }
            ]},
            imperative: { arabic: "اِحْفَظْ", translation: "əzbərlə!", examples: [
                { arabic: "اِحْفَظْ هَذِهِ الآيَةَ", translation: "Bu ayəni əzbərlə!" },
                { arabic: "اِحْفَظْ أَرْبَعِينَ حَدِيثًا", translation: "Qırx hədis əzbərlə!" }
            ]}
        }
    },
{
        id: 8,
        arabic: "عَمِلَ",
        meaning: "işləmək",
        forms: {
            past: { arabic: "عَمِلَ", translation: "işlədi", examples: [
                { arabic: "عَمِلَ فِي المَصْنَعِ", translation: "Zavodda işlədi." },
                { arabic: "عَمِلَتْ مُدَرِّسَةً", translation: "Müəllimə işlədi." }
            ]},
            present: { arabic: "يَعْمَلُ", translation: "işləyir", examples: [
                { arabic: "يَعْمَلُ فِي الشَّرِكَةِ", translation: "Şirkətdə işləyir." },
                { arabic: "يَعْمَلُ بِجِدٍّ", translation: "Səylə işləyir." }
            ]},
            imperative: { arabic: "اِعْمَلْ", translation: "işlə!", examples: [
                { arabic: "اِعْمَلْ بِجِدٍّ", translation: "Səylə işlə!" },
                { arabic: "اِعْمَلْ خَيْرًا", translation: "Xeyir iş gör!" }
            ]}
        }
    },
{
        id: 9,
        arabic: "دَرَسَ",
        meaning: "öyrənmək, dərs oxumaq",
        forms: {
            past: { arabic: "دَرَسَ", translation: "öyrəndi", examples: [
                { arabic: "دَرَسَ الطَّالِبُ اللُّغَةَ", translation: "Tələbə dili öyrəndi." },
                { arabic: "دَرَسَتْ الرِّيَاضِيَّاتِ", translation: "Riyaziyyatı öyrəndi." }
            ]},
            present: { arabic: "يَدْرُسُ", translation: "öyrənir", examples: [
                { arabic: "يَدْرُسُ فِي الجَامِعَةِ", translation: "Universitetdə oxuyur." },
                { arabic: "يَدْرُسُ كُلَّ يَوْمٍ", translation: "Hər gün dərs oxuyur." }
            ]},
            imperative: { arabic: "اُدْرُسْ", translation: "öyrən!", examples: [
                { arabic: "اُدْرُسْ جَيِّدًا", translation: "Yaxşı oxu!" },
                { arabic: "اُدْرُسْ اللُّغَةَ العَرَبِيَّةَ", translation: "Ərəb dilini öyrən!" }
            ]}
        }
    },
{
        id: 10,
        arabic: "نَظَرَ",
        meaning: "baxmaq",
        forms: {
            past: { arabic: "نَظَرَ", translation: "baxdı", examples: [
                { arabic: "نَظَرَ إِلَى السَّمَاءِ", translation: "Göyə baxdı." },
                { arabic: "نَظَرَتْ إِلَى المِرْآةِ", translation: "Güzgüyə baxdı." }
            ]},
            present: { arabic: "يَنْظُرُ", translation: "baxır", examples: [
                { arabic: "يَنْظُرُ إِلَى الكِتَابِ", translation: "Kitaba baxır." },
                { arabic: "يَنْظُرُ إِلَى الطَّرِيقِ", translation: "Yola baxır." }
            ]},
            imperative: { arabic: "اُنْظُرْ", translation: "bax!", examples: [
                { arabic: "اُنْظُرْ هُنَا", translation: "Bura bax!" },
                { arabic: "اُنْظُرْ إِلَى اللَّوْحَةِ", translation: "Lövhəyə bax!" }
            ]}
        }
    },
{
        id: 11,
        arabic: "سَمِعَ",
        meaning: "eşitmək",
        forms: {
            past: { arabic: "سَمِعَ", translation: "eşitdi", examples: [
                { arabic: "سَمِعَ الصَّوْتَ", translation: "Səsi eşitdi." },
                { arabic: "سَمِعَتْ الأَذَانَ", translation: "Azanı eşitdi." }
            ]},
            present: { arabic: "يَسْمَعُ", translation: "eşidir", examples: [
                { arabic: "يَسْمَعُ القُرْآنَ", translation: "Quranı eşidir." },
                { arabic: "يَسْمَعُ كَلَامَ المُعَلِّمِ", translation: "Müəllimin sözünü eşidir." }
            ]},
            imperative: { arabic: "اِسْمَعْ", translation: "eşit!", examples: [
                { arabic: "اِسْمَعْ مَا أَقُولُ", translation: "Dediyimi eşit!" },
                { arabic: "اِسْمَعْ النَّصِيحَةَ", translation: "Nəsihəti eşit!" }
            ]}
        }
    },
{
        id: 12,
        arabic: "قَالَ",
        meaning: "demək",
        forms: {
            past: { arabic: "قَالَ", translation: "dedi", examples: [
                { arabic: "قَالَ الحَقَّ", translation: "Həqiqəti dedi." },
                { arabic: "قَالَتْ لَهُ السَّلَامَ", translation: "Ona salam dedi." }
            ]},
            present: { arabic: "يَقُولُ", translation: "deyir", examples: [
                { arabic: "يَقُولُ الصِّدْقَ", translation: "Doğrunu deyir." },
                { arabic: "يَقُولُ الشِّعْرَ", translation: "Şeir deyir." }
            ]},
            imperative: { arabic: "قُلْ", translation: "de!", examples: [
                { arabic: "قُلْ الحَقَّ", translation: "Həqiqəti de!" },
                { arabic: "قُلْ بِسْمِ اللَّهِ", translation: "Bismillah de!" }
            ]}
        }
    },
{
        id: 13,
        arabic: "فَعَلَ",
        meaning: "etmək",
        forms: {
            past: { arabic: "فَعَلَ", translation: "etdi", examples: [
                { arabic: "فَعَلَ خَيْرًا", translation: "Xeyir iş gördü." },
                { arabic: "فَعَلَتْ الوَاجِبَ", translation: "Tapşırığı etdi." }
            ]},
            present: { arabic: "يَفْعَلُ", translation: "edir", examples: [
                { arabic: "يَفْعَلُ الخَيْرَ", translation: "Xeyir iş görür." },
                { arabic: "يَفْعَلُ مَا يُؤْمَرُ", translation: "Əmr olunanı edir." }
            ]},
            imperative: { arabic: "اِفْعَلْ", translation: "et!", examples: [
                { arabic: "اِفْعَلْ الخَيْرَ", translation: "Xeyir iş gör!" },
                { arabic: "اِفْعَلْ مَا تُؤْمَرُ", translation: "Əmr olunanı et!" }
            ]}
        }
    },
{
        id: 14,
        arabic: "أَخَذَ",
        meaning: "almaq, götürmək",
        forms: {
            past: { arabic: "أَخَذَ", translation: "aldı", examples: [
                { arabic: "أَخَذَ الكِتَابَ", translation: "Kitabı aldı." },
                { arabic: "أَخَذَتْ الحَقِيبَةَ", translation: "Çantanı götürdü." }
            ]},
            present: { arabic: "يَأْخُذُ", translation: "alır", examples: [
                { arabic: "يَأْخُذُ القَلَمَ", translation: "Qələmi alır." },
                { arabic: "يَأْخُذُ الطَّعَامَ", translation: "Yeməyi alır." }
            ]},
            imperative: { arabic: "خُذْ", translation: "al!", examples: [
                { arabic: "خُذْ هَذَا الكِتَابَ", translation: "Bu kitabı al!" },
                { arabic: "خُذْ بِيَدِي", translation: "Əlimdən tut!" }
            ]}
        }
    },
{
        id: 15,
        arabic: "جَاءَ",
        meaning: "gəlmək",
        forms: {
            past: { arabic: "جَاءَ", translation: "gəldi", examples: [
                { arabic: "جَاءَ إِلَى البَيْتِ", translation: "Evə gəldi." },
                { arabic: "جَاءَتْ إِلَى المَدْرَسَةِ", translation: "Məktəbə gəldi." }
            ]},
            present: { arabic: "يَجِيءُ", translation: "gəlir", examples: [
                { arabic: "يَجِيءُ إِلَى العَمَلِ", translation: "İşə gəlir." },
                { arabic: "يَجِيءُ كُلَّ صَبَاحٍ", translation: "Hər səhər gəlir." }
            ]},
            imperative: { arabic: "تَعَالَ", translation: "gəl!", examples: [
                { arabic: "تَعَالَ إِلَى هُنَا", translation: "Bura gəl!" },
                { arabic: "تَعَالَ مَعَنَا", translation: "Bizimlə gəl!" }
            ]}
        }
    },
{
        id: 16,
        arabic: "خَرَجَ",
        meaning: "çıxmaq",
        forms: {
            past: { arabic: "خَرَجَ", translation: "çıxdı", examples: [
                { arabic: "خَرَجَ مِنَ البَيْتِ", translation: "Evdən çıxdı." },
                { arabic: "خَرَجَتْ مِنَ الفَصْلِ", translation: "Sinifdən çıxdı." }
            ]},
            present: { arabic: "يَخْرُجُ", translation: "çıxır", examples: [
                { arabic: "يَخْرُجُ مِنَ المَسْجِدِ", translation: "Məsciddən çıxır." },
                { arabic: "يَخْرُجُ فِي الصَّبَاحِ", translation: "Səhər çıxır." }
            ]},
            imperative: { arabic: "اُخْرُجْ", translation: "çıx!", examples: [
                { arabic: "اُخْرُجْ مِنَ الغُرْفَةِ", translation: "Otaqdan çıx!" },
                { arabic: "اُخْرُجْ مَعَنَا", translation: "Bizimlə çıx!" }
            ]}
        }
    },
{
        id: 17,
        arabic: "دَخَلَ",
        meaning: "girmək",
        forms: {
            past: { arabic: "دَخَلَ", translation: "girdi", examples: [
                { arabic: "دَخَلَ البَيْتَ", translation: "Evə girdi." },
                { arabic: "دَخَلَتْ الفَصْلَ", translation: "Sinifə girdi." }
            ]},
            present: { arabic: "يَدْخُلُ", translation: "girir", examples: [
                { arabic: "يَدْخُلُ المَسْجِدَ", translation: "Məscidə girir." },
                { arabic: "يَدْخُلُ الغُرْفَةَ", translation: "Otağa girir." }
            ]},
            imperative: { arabic: "اُدْخُلْ", translation: "gir!", examples: [
                { arabic: "اُدْخُلْ بِسَلَامٍ", translation: "Salamla gir!" },
                { arabic: "اُدْخُلْ مِنَ البَابِ", translation: "Qapıdan gir!" }
            ]}
        }
    },
{
        id: 18,
        arabic: "جَلَسَ",
        meaning: "oturmaq",
        forms: {
            past: { arabic: "جَلَسَ", translation: "oturdu", examples: [
                { arabic: "جَلَسَ عَلَى الكُرْسِيِّ", translation: "Kresloda oturdu." },
                { arabic: "جَلَسَتْ تَحْتَ الشَّجَرَةِ", translation: "Ağacın altında oturdu." }
            ]},
            present: { arabic: "يَجْلِسُ", translation: "oturur", examples: [
                { arabic: "يَجْلِسُ فِي الصَّفِّ", translation: "Sinifdə oturur." },
                { arabic: "يَجْلِسُ مَعَ أَصْدِقَائِهِ", translation: "Dostları ilə oturur." }
            ]},
            imperative: { arabic: "اِجْلِسْ", translation: "otur!", examples: [
                { arabic: "اِجْلِسْ هُنَا", translation: "Burada otur!" },
                { arabic: "اِجْلِسْ بِهُدُوءٍ", translation: "Sakit otur!" }
            ]}
        }
    },
{
        id: 19,
        arabic: "قَامَ",
        meaning: "qalxmaq, durmaq",
        forms: {
            past: { arabic: "قَامَ", translation: "qalxdı", examples: [
                { arabic: "قَامَ مِنَ النَّوْمِ", translation: "Yuxudan qalxdı." },
                { arabic: "قَامَتْ مِنْ مَكَانِهَا", translation: "Yerindən qalxdı." }
            ]},
            present: { arabic: "يَقُومُ", translation: "qalxır", examples: [
                { arabic: "يَقُومُ مِنَ النَّوْمِ مُبَكِّرًا", translation: "Yuxudan erkən qalxır." },
                { arabic: "يَقُومُ بِالوَاجِبِ", translation: "Tapşırığı yerinə yetirir." }
            ]},
            imperative: { arabic: "قُمْ", translation: "qalx!", examples: [
                { arabic: "قُمْ مِنْ مَكَانِكَ", translation: "Yerindən qalx!" },
                { arabic: "قُمْ بِعَمَلِكَ", translation: "İşini gör!" }
            ]}
        }
    },
{
        id: 20,
        arabic: "رَجَعَ",
        meaning: "qayıtmaq",
        forms: {
            past: { arabic: "رَجَعَ", translation: "qayıtdı", examples: [
                { arabic: "رَجَعَ إِلَى البَيْتِ", translation: "Evə qayıtdı." },
                { arabic: "رَجَعَتْ مِنَ السَّفَرِ", translation: "Səfərdən qayıtdı." }
            ]},
            present: { arabic: "يَرْجِعُ", translation: "qayıdır", examples: [
                { arabic: "يَرْجِعُ مِنَ العَمَلِ", translation: "İşdən qayıdır." },
                { arabic: "يَرْجِعُ إِلَى الوَطَنِ", translation: "Vətənə qayıdır." }
            ]},
            imperative: { arabic: "اِرْجِعْ", translation: "qayıt!", examples: [
                { arabic: "اِرْجِعْ إِلَى بَيْتِكَ", translation: "Evinə qayıt!" },
                { arabic: "اِرْجِعْ بِسُرْعَةٍ", translation: "Tez qayıt!" }
            ]}
        }
    },
{
        id: 21,
        arabic: "وَصَلَ",
        meaning: "çatmaq, gəlib çatmaq",
        forms: {
            past: { arabic: "وَصَلَ", translation: "çatdı", examples: [
                { arabic: "وَصَلَ إِلَى المَطَارِ", translation: "Hava limanına çatdı." },
                { arabic: "وَصَلَتِ الرِّسَالَةُ", translation: "Məktub gəldi." }
            ]},
            present: { arabic: "يَصِلُ", translation: "çatır", examples: [
                { arabic: "يَصِلُ إِلَى المَدِينَةِ", translation: "Şəhərə çatır." },
                { arabic: "يَصِلُ القِطَارُ", translation: "Qatar gəlir." }
            ]},
            imperative: { arabic: "صِلْ", translation: "çat!", examples: [
                { arabic: "صِلْ إِلَى هَدَفِكَ", translation: "Məqsədinə çat!" },
                { arabic: "صِلْ قَبْلَ الغُرُوبِ", translation: "Gün batmadan çat!" }
            ]}
        }
    },
{
        id: 22,
        arabic: "سَافَرَ",
        meaning: "səyahət etmək",
        forms: {
            past: { arabic: "سَافَرَ", translation: "səyahət etdi", examples: [
                { arabic: "سَافَرَ إِلَى تُرْكِيَا", translation: "Türkiyəyə səyahət etdi." },
                { arabic: "سَافَرَتْ بِالطَّائِرَةِ", translation: "Təyyarə ilə getdi." }
            ]},
            present: { arabic: "يُسَافِرُ", translation: "səyahət edir", examples: [
                { arabic: "يُسَافِرُ كُلَّ صَيْفٍ", translation: "Hər yay səyahət edir." },
                { arabic: "يُسَافِرُ إِلَى مَكَّةَ", translation: "Məkkəyə gedir." }
            ]},
            imperative: { arabic: "سَافِرْ", translation: "səyahət et!", examples: [
                { arabic: "سَافِرْ إِلَى بَلَدٍ جَدِيدٍ", translation: "Yeni ölkəyə səyahət et!" },
                { arabic: "سَافِرْ مَعَ عَائِلَتِكَ", translation: "Ailənlə səyahət et!" }
            ]}
        }
    },
{
        id: 23,
        arabic: "نَامَ",
        meaning: "yatmaq",
        forms: {
            past: { arabic: "نَامَ", translation: "yatdı", examples: [
                { arabic: "نَامَ مُبَكِّرًا", translation: "Erkən yatdı." },
                { arabic: "نَامَتْ بَعْدَ العَشَاءِ", translation: "Şamdan sonra yatdı." }
            ]},
            present: { arabic: "يَنَامُ", translation: "yatır", examples: [
                { arabic: "يَنَامُ فِي الغُرْفَةِ", translation: "Otaqda yatır." },
                { arabic: "يَنَامُ ثَمَانِيَ سَاعَاتٍ", translation: "Səkkiz saat yatır." }
            ]},
            imperative: { arabic: "نَمْ", translation: "yat!", examples: [
                { arabic: "نَمْ جَيِّدًا", translation: "Yaxşı yat!" },
                { arabic: "نَمْ بَاكِرًا", translation: "Erkən yat!" }
            ]}
        }
    },
{
        id: 24,
        arabic: "صَحَا",
        meaning: "oyanmaq",
        forms: {
            past: { arabic: "صَحَا", translation: "oyandı", examples: [
                { arabic: "صَحَا مِنَ النَّوْمِ", translation: "Yuxudan oyandı." },
                { arabic: "صَحَتْ مُبَكِّرَةً", translation: "Erkən oyandı." }
            ]},
            present: { arabic: "يَصْحُو", translation: "oyanır", examples: [
                { arabic: "يَصْحُو فِي الصَّبَاحِ", translation: "Səhər oyanır." },
                { arabic: "يَصْحُو مُتَأَخِّرًا", translation: "Gec oyanır." }
            ]},
            imperative: { arabic: "اِصْحَ", translation: "oyan!", examples: [
                { arabic: "اِصْحَ مِنْ نَوْمِكَ", translation: "Yuxudan oyan!" },
                { arabic: "اِصْحَ لِلصَّلَاةِ", translation: "Namaza oyan!" }
            ]}
        }
    },
{
        id: 25,
        arabic: "مَشَى",
        meaning: "yerimək",
        forms: {
            past: { arabic: "مَشَى", translation: "yeridi", examples: [
                { arabic: "مَشَى فِي الشَّارِعِ", translation: "Küçədə yeridi." },
                { arabic: "مَشَتْ إِلَى المَدْرَسَةِ", translation: "Məktəbə piyada getdi." }
            ]},
            present: { arabic: "يَمْشِي", translation: "yeriyir", examples: [
                { arabic: "يَمْشِي فِي الحَدِيقَةِ", translation: "Bağda gəzir." },
                { arabic: "يَمْشِي بِسُرْعَةٍ", translation: "Sürətlə yeriyir." }
            ]},
            imperative: { arabic: "اِمْشِ", translation: "yeri!", examples: [
                { arabic: "اِمْشِ مَعِي", translation: "Mənimlə gəl!" },
                { arabic: "اِمْشِ بِهُدُوءٍ", translation: "Yavaş yerimə!" }
            ]}
        }
    },
{
        id: 26,
        arabic: "رَكِبَ",
        meaning: "minmək",
        forms: {
            past: { arabic: "رَكِبَ", translation: "minddi", examples: [
                { arabic: "رَكِبَ الحَافِلَةَ", translation: "Avtobusa mindi." },
                { arabic: "رَكِبَتِ القِطَارَ", translation: "Qatara mindi." }
            ]},
            present: { arabic: "يَرْكَبُ", translation: "minir", examples: [
                { arabic: "يَرْكَبُ السَّيَّارَةَ", translation: "Maşına minir." },
                { arabic: "يَرْكَبُ الدَّرَّاجَةَ", translation: "Velosipedə minir." }
            ]},
            imperative: { arabic: "اِرْكَبْ", translation: "min!", examples: [
                { arabic: "اِرْكَبْ الحَافِلَةَ", translation: "Avtobusa min!" },
                { arabic: "اِرْكَبْ السَّيَّارَةَ", translation: "Maşına min!" }
            ]}
        }
    },
{
        id: 27,
        arabic: "نَزَلَ",
        meaning: "enmək, düşmək",
        forms: {
            past: { arabic: "نَزَلَ", translation: "enddi", examples: [
                { arabic: "نَزَلَ مِنَ الحَافِلَةِ", translation: "Avtobusdan endi." },
                { arabic: "نَزَلَ المَطَرُ", translation: "Yağış yağdı." }
            ]},
            present: { arabic: "يَنْزِلُ", translation: "enir", examples: [
                { arabic: "يَنْزِلُ مِنَ القِطَارِ", translation: "Qatardan enir." },
                { arabic: "يَنْزِلُ المَطَرُ", translation: "Yağış yağır." }
            ]},
            imperative: { arabic: "اِنْزِلْ", translation: "en!", examples: [
                { arabic: "اِنْزِلْ هُنَا", translation: "Burada en!" },
                { arabic: "اِنْزِلْ مِنَ السَّيَّارَةِ", translation: "Maşından düş!" }
            ]}
        }
    },
{
        id: 28,
        arabic: "فَتَحَ",
        meaning: "açmaq",
        forms: {
            past: { arabic: "فَتَحَ", translation: "açdı", examples: [
                { arabic: "فَتَحَ البَابَ", translation: "Qapını açdı." },
                { arabic: "فَتَحَتِ النَّافِذَةَ", translation: "Pəncərəni açdı." }
            ]},
            present: { arabic: "يَفْتَحُ", translation: "açır", examples: [
                { arabic: "يَفْتَحُ الكِتَابَ", translation: "Kitabı açır." },
                { arabic: "يَفْتَحُ الدُّكَّانَ", translation: "Dükanı açır." }
            ]},
            imperative: { arabic: "اِفْتَحْ", translation: "aç!", examples: [
                { arabic: "اِفْتَحِ البَابَ", translation: "Qapını aç!" },
                { arabic: "اِفْتَحْ عَيْنَيْكَ", translation: "Gözlərini aç!" }
            ]}
        }
    },
{
        id: 29,
        arabic: "أَغْلَقَ",
        meaning: "bağlamaq, qapatmaq",
        forms: {
            past: { arabic: "أَغْلَقَ", translation: "bağladı", examples: [
                { arabic: "أَغْلَقَ البَابَ", translation: "Qapını bağladı." },
                { arabic: "أَغْلَقَتِ النَّافِذَةَ", translation: "Pəncərəni bağladı." }
            ]},
            present: { arabic: "يُغْلِقُ", translation: "bağlayır", examples: [
                { arabic: "يُغْلِقُ المَحَلَّ", translation: "Mağazanı bağlayır." },
                { arabic: "يُغْلِقُ الكِتَابَ", translation: "Kitabı bağlayır." }
            ]},
            imperative: { arabic: "أَغْلِقْ", translation: "bağla!", examples: [
                { arabic: "أَغْلِقِ البَابَ", translation: "Qapını bağla!" },
                { arabic: "أَغْلِقْ عَيْنَيْكَ", translation: "Gözlərini yum!" }
            ]}
        }
    },
{
        id: 30,
        arabic: "غَسَلَ",
        meaning: "yumaq",
        forms: {
            past: { arabic: "غَسَلَ", translation: "yudu", examples: [
                { arabic: "غَسَلَ يَدَيْهِ", translation: "Əllərini yudu." },
                { arabic: "غَسَلَتِ المَلَابِسَ", translation: "Paltarları yudu." }
            ]},
            present: { arabic: "يَغْسِلُ", translation: "yuyur", examples: [
                { arabic: "يَغْسِلُ الصُّحُونَ", translation: "Boşqabları yuyur." },
                { arabic: "يَغْسِلُ وَجْهَهُ", translation: "Üzünü yuyur." }
            ]},
            imperative: { arabic: "اِغْسِلْ", translation: "yu!", examples: [
                { arabic: "اِغْسِلْ يَدَيْكَ", translation: "Əllərini yu!" },
                { arabic: "اِغْسِلِ الصُّحُونَ", translation: "Boşqabları yu!" }
            ]}
        }
    },
{
        id: 31,
        arabic: "لَبِسَ",
        meaning: "geyinmək",
        forms: {
            past: { arabic: "لَبِسَ", translation: "geyindi", examples: [
                { arabic: "لَبِسَ القَمِيصَ", translation: "Köynəyi geyindi." },
                { arabic: "لَبِسَتِ الحِجَابَ", translation: "Hicab taxdı." }
            ]},
            present: { arabic: "يَلْبَسُ", translation: "geyinir", examples: [
                { arabic: "يَلْبَسُ البَدْلَةَ", translation: "Kostyum geyinir." },
                { arabic: "يَلْبَسُ المِعْطَفَ", translation: "Palto geyinir." }
            ]},
            imperative: { arabic: "اِلْبَسْ", translation: "geyin!", examples: [
                { arabic: "اِلْبَسْ مَلَابِسَكَ", translation: "Paltarını geyin!" },
                { arabic: "اِلْبَسْ سُتْرَتَكَ", translation: "Gödəkçəni geyin!" }
            ]}
        }
    },
{
        id: 32,
        arabic: "خَلَعَ",
        meaning: "çıxarmaq (paltarı)",
        forms: {
            past: { arabic: "خَلَعَ", translation: "çıxardı", examples: [
                { arabic: "خَلَعَ الحِذَاءَ", translation: "Ayaqqabını çıxardı." },
                { arabic: "خَلَعَتِ المِعْطَفَ", translation: "Paltonu çıxardı." }
            ]},
            present: { arabic: "يَخْلَعُ", translation: "çıxarır", examples: [
                { arabic: "يَخْلَعُ النَّظَّارَةَ", translation: "Eynəyi çıxarır." },
                { arabic: "يَخْلَعُ القَمِيصَ", translation: "Köynəyi çıxarır." }
            ]},
            imperative: { arabic: "اِخْلَعْ", translation: "çıxar!", examples: [
                { arabic: "اِخْلَعْ حِذَاءَكَ", translation: "Ayaqqabını çıxar!" },
                { arabic: "اِخْلَعْ مِعْطَفَكَ", translation: "Paltonu çıxar!" }
            ]}
        }
    },
{
        id: 33,
        arabic: "لَعِبَ",
        meaning: "oynamaq",
        forms: {
            past: { arabic: "لَعِبَ", translation: "oynadı", examples: [
                { arabic: "لَعِبَ الكُرَةَ", translation: "Top oynadı." },
                { arabic: "لَعِبَتْ مَعَ الأَطْفَالِ", translation: "Uşaqlarla oynadı." }
            ]},
            present: { arabic: "يَلْعَبُ", translation: "oynayır", examples: [
                { arabic: "يَلْعَبُ فِي الحَدِيقَةِ", translation: "Bağda oynayır." },
                { arabic: "يَلْعَبُ الشِّطْرَنْجَ", translation: "Şahmat oynayır." }
            ]},
            imperative: { arabic: "اِلْعَبْ", translation: "oyna!", examples: [
                { arabic: "اِلْعَبْ مَعَنَا", translation: "Bizimlə oyna!" },
                { arabic: "اِلْعَبْ بِالكُرَةِ", translation: "Top oyna!" }
            ]}
        }
    },
{
        id: 34,
        arabic: "رَسَمَ",
        meaning: "çəkmək (rəsm)",
        forms: {
            past: { arabic: "رَسَمَ", translation: "çəkdi", examples: [
                { arabic: "رَسَمَ صُورَةً", translation: "Şəkil çəkdi." },
                { arabic: "رَسَمَتْ مَنْظَرًا", translation: "Mənzərə çəkdi." }
            ]},
            present: { arabic: "يَرْسُمُ", translation: "çəkir", examples: [
                { arabic: "يَرْسُمُ البَيْتِ", translation: "Evi çəkir." },
                { arabic: "يَرْسُمُ عَلَى الوَرَقِ", translation: "Kağıza çəkir." }
            ]},
            imperative: { arabic: "اُرْسُمْ", translation: "çək!", examples: [
                { arabic: "اُرْسُمْ شَجَرَةً", translation: "Ağac çək!" },
                { arabic: "اُرْسُمْ مَا تَرَى", translation: "Gördüyünü çək!" }
            ]}
        }
    },
{
        id: 35,
        arabic: "طَبَخَ",
        meaning: "bişirmək",
        forms: {
            past: { arabic: "طَبَخَ", translation: "bişirdi", examples: [
                { arabic: "طَبَخَ الطَّعَامَ", translation: "Yeməyi bişirdi." },
                { arabic: "طَبَخَتِ الأُمُّ", translation: "Ana yemək bişirdi." }
            ]},
            present: { arabic: "يَطْبُخُ", translation: "bişirir", examples: [
                { arabic: "يَطْبُخُ العَشَاءَ", translation: "Şam yeməyi bişirir." },
                { arabic: "يَطْبُخُ كُلَّ يَوْمٍ", translation: "Hər gün yemək bişirir." }
            ]},
            imperative: { arabic: "اُطْبُخْ", translation: "bişir!", examples: [
                { arabic: "اُطْبُخْ الغَدَاءَ", translation: "Nahar bişir!" },
                { arabic: "اُطْبُخْ مَا تُرِيدُ", translation: "İstədiyini bişir!" }
            ]}
        }
    },
{
        id: 36,
        arabic: "نَظَّفَ",
        meaning: "təmizləmək",
        forms: {
            past: { arabic: "نَظَّفَ", translation: "təmizlədi", examples: [
                { arabic: "نَظَّفَ الغُرْفَةَ", translation: "Otağı təmizlədi." },
                { arabic: "نَظَّفَتِ المَائِدَةَ", translation: "Masanı təmizlədi." }
            ]},
            present: { arabic: "يُنَظِّفُ", translation: "təmizləyir", examples: [
                { arabic: "يُنَظِّفُ البَيْتَ", translation: "Evi təmizləyir." },
                { arabic: "يُنَظِّفُ الحَمَّامَ", translation: "Hamamı təmizləyir." }
            ]},
            imperative: { arabic: "نَظِّفْ", translation: "təmizlə!", examples: [
                { arabic: "نَظِّفْ غُرْفَتَكَ", translation: "Otağını təmizlə!" },
                { arabic: "نَظِّفِ السَّيَّارَةَ", translation: "Maşını təmizlə!" }
            ]}
        }
    },
{
        id: 37,
        arabic: "صَلَّى",
        meaning: "namaz qılmaq",
        forms: {
            past: { arabic: "صَلَّى", translation: "namaz qıldı", examples: [
                { arabic: "صَلَّى فِي المَسْجِدِ", translation: "Məsciddə namaz qıldı." },
                { arabic: "صَلَّتْ الصُّبْحَ", translation: "Səhər namazını qıldı." }
            ]},
            present: { arabic: "يُصَلِّي", translation: "namaz qılır", examples: [
                { arabic: "يُصَلِّي كُلَّ يَوْمٍ", translation: "Hər gün namaz qılır." },
                { arabic: "يُصَلِّي فِي البَيْتِ", translation: "Evdə namaz qılır." }
            ]},
            imperative: { arabic: "صَلِّ", translation: "namaz qıl!", examples: [
                { arabic: "صَلِّ فِي الوَقْتِ", translation: "Vaxtında namaz qıl!" },
                { arabic: "صَلِّ الصُّبْحَ", translation: "Səhər namazını qıl!" }
            ]}
        }
    },
{
        id: 38,
        arabic: "صَامَ",
        meaning: "oruc tutmaq",
        forms: {
            past: { arabic: "صَامَ", translation: "oruc tutdu", examples: [
                { arabic: "صَامَ رَمَضَانَ", translation: "Ramazanı oruc tutdu." },
                { arabic: "صَامَتْ يَوْمًا", translation: "Bir gün oruc tutdu." }
            ]},
            present: { arabic: "يَصُومُ", translation: "oruc tutur", examples: [
                { arabic: "يَصُومُ فِي رَمَضَانَ", translation: "Ramazanda oruc tutur." },
                { arabic: "يَصُومُ كُلَّ اثْنَيْنِ", translation: "Hər bazar ertəsi oruc tutur." }
            ]},
            imperative: { arabic: "صُمْ", translation: "oruc tut!", examples: [
                { arabic: "صُمْ يَوْمًا لِلَّهِ", translation: "Allah üçün bir gün oruc tut!" },
                { arabic: "صُمْ رَمَضَانَ", translation: "Ramazanı oruc tut!" }
            ]}
        }
    },
{
        id: 39,
        arabic: "حَجَّ",
        meaning: "həccə getmək",
        forms: {
            past: { arabic: "حَجَّ", translation: "həcc etdi", examples: [
                { arabic: "حَجَّ البَيْتَ", translation: "Kəbəni ziyarət etdi." },
                { arabic: "حَجَّتْ مَعَ أَبِيهَا", translation: "Atası ilə həccə getdi." }
            ]},
            present: { arabic: "يَحُجُّ", translation: "həcc edir", examples: [
                { arabic: "يَحُجُّ كُلَّ عَامٍ", translation: "Hər il həccə gedir." },
                { arabic: "يَحُجُّ إِلَى مَكَّةَ", translation: "Məkkəyə həccə gedir." }
            ]},
            imperative: { arabic: "حُجَّ", translation: "həcc et!", examples: [
                { arabic: "حُجَّ إِلَى بَيْتِ اللَّهِ", translation: "Allahın evinə həcc et!" },
                { arabic: "حُجَّ مَعَ عَائِلَتِكَ", translation: "Ailənlə həccə get!" }
            ]}
        }
    },
{
        id: 40,
        arabic: "عَادَ",
        meaning: "qayıtmaq, geri dönmək",
        forms: {
            past: { arabic: "عَادَ", translation: "qayıtdı", examples: [
                { arabic: "عَادَ إِلَى الوَطَنِ", translation: "Vətənə qayıtdı." },
                { arabic: "عَادَتْ مِنَ المَدْرَسَةِ", translation: "Məktəbdən qayıtdı." }
            ]},
            present: { arabic: "يَعُودُ", translation: "qayıdır", examples: [
                { arabic: "يَعُودُ إِلَى البَيْتِ", translation: "Evə qayıdır." },
                { arabic: "يَعُودُ مِنَ العَمَلِ", translation: "İşdən qayıdır." }
            ]},
            imperative: { arabic: "عُدْ", translation: "qayıt!", examples: [
                { arabic: "عُدْ إِلَى بَيْتِكَ", translation: "Evinə qayıt!" },
                { arabic: "عُدْ سَرِيعًا", translation: "Tez qayıt!" }
            ]}
        }
    },
{
        id: 41,
        arabic: "اِشْتَرَى",
        meaning: "almaq (satın almaq)",
        forms: {
            past: { arabic: "اِشْتَرَى", translation: "aldı", examples: [
                { arabic: "اِشْتَرَى كِتَابًا", translation: "Kitab aldı." },
                { arabic: "اِشْتَرَتْ فُسْتَانًا", translation: "Paltar aldı." }
            ]},
            present: { arabic: "يَشْتَرِي", translation: "alır", examples: [
                { arabic: "يَشْتَرِي الخُبْزَ", translation: "Çörək alır." },
                { arabic: "يَشْتَرِي الخَضْرَوَاتِ", translation: "Tərəvəz alır." }
            ]},
            imperative: { arabic: "اِشْتَرِ", translation: "al!", examples: [
                { arabic: "اِشْتَرِ مَا تَحْتَاجُ", translation: "Ehtiyacın olanı al!" },
                { arabic: "اِشْتَرِ لِي قَلَمًا", translation: "Mənə qələm al!" }
            ]}
        }
    },
{
        id: 42,
        arabic: "بَاعَ",
        meaning: "satmaq",
        forms: {
            past: { arabic: "بَاعَ", translation: "satdı", examples: [
                { arabic: "بَاعَ السَّيَّارَةَ", translation: "Maşını satdı." },
                { arabic: "بَاعَتِ البَيْتَ", translation: "Evi satdı." }
            ]},
            present: { arabic: "يَبِيعُ", translation: "satır", examples: [
                { arabic: "يَبِيعُ المَلَابِسَ", translation: "Paltar satır." },
                { arabic: "يَبِيعُ الفَاكِهَةَ", translation: "Meyvə satır." }
            ]},
            imperative: { arabic: "بِعْ", translation: "sat!", examples: [
                { arabic: "بِعْ هَذَا القَمِيصَ", translation: "Bu köynəyi sat!" },
                { arabic: "بِعْ مَا لَا تَحْتَاجُ", translation: "Ehtiyacın olmayanı sat!" }
            ]}
        }
    },
{
        id: 43,
        arabic: "دَفَعَ",
        meaning: "ödəmək",
        forms: {
            past: { arabic: "دَفَعَ", translation: "ödədi", examples: [
                { arabic: "دَفَعَ الحِسَابَ", translation: "Hesabı ödədi." },
                { arabic: "دَفَعَتِ الثَّمَنَ", translation: "Qiyməti ödədi." }
            ]},
            present: { arabic: "يَدْفَعُ", translation: "ödəyir", examples: [
                { arabic: "يَدْفَعُ الفَاتُورَةَ", translation: "Fakturanı ödəyir." },
                { arabic: "يَدْفَعُ بِالبِطَاقَةِ", translation: "Kartla ödəyir." }
            ]},
            imperative: { arabic: "اِدْفَعْ", translation: "ödə!", examples: [
                { arabic: "اِدْفَعِ الحِسَابَ", translation: "Hesabı ödə!" },
                { arabic: "اِدْفَعْ مَا عَلَيْكَ", translation: "Borcunu ödə!" }
            ]}
        }
    },
{
        id: 44,
        arabic: "اِسْتَمَعَ",
        meaning: "dinləmək",
        forms: {
            past: { arabic: "اِسْتَمَعَ", translation: "dinlədi", examples: [
                { arabic: "اِسْتَمَعَ إِلَى القُرْآنِ", translation: "Quranı dinlədi." },
                { arabic: "اِسْتَمَعَتْ لِلْأُغْنِيَّةِ", translation: "Mahnını dinlədi." }
            ]},
            present: { arabic: "يَسْتَمِعُ", translation: "dinləyir", examples: [
                { arabic: "يَسْتَمِعُ إِلَى الرَّادِيُو", translation: "Radionu dinləyir." },
                { arabic: "يَسْتَمِعُ لِلمُعَلِّمِ", translation: "Müəllimi dinləyir." }
            ]},
            imperative: { arabic: "اِسْتَمِعْ", translation: "dinlə!", examples: [
                { arabic: "اِسْتَمِعْ جَيِّدًا", translation: "Yaxşı dinlə!" },
                { arabic: "اِسْتَمِعْ إِلَى النَّصِيحَةِ", translation: "Nəsihəti dinlə!" }
            ]}
        }
    },
{
        id: 45,
        arabic: "تَكَلَّمَ",
        meaning: "danışmaq",
        forms: {
            past: { arabic: "تَكَلَّمَ", translation: "danışdı", examples: [
                { arabic: "تَكَلَّمَ مَعَ صَدِيقِهِ", translation: "Dostu ilə danışdı." },
                { arabic: "تَكَلَّمَتْ بِاللُّغَةِ العَرَبِيَّةِ", translation: "Ərəbcə danışdı." }
            ]},
            present: { arabic: "يَتَكَلَّمُ", translation: "danışır", examples: [
                { arabic: "يَتَكَلَّمُ بِصَوْتٍ عَالٍ", translation: "Uca səslə danışır." },
                { arabic: "يَتَكَلَّمُ مَعَ المُدِيرِ", translation: "Müdir ilə danışır." }
            ]},
            imperative: { arabic: "تَكَلَّمْ", translation: "danış!", examples: [
                { arabic: "تَكَلَّمْ بِوُضُوحٍ", translation: "Aydın danış!" },
                { arabic: "تَكَلَّمْ بِالحَقِّ", translation: "Həqiqəti danış!" }
            ]}
        }
    },
{
        id: 46,
        arabic: "سَكَتَ",
        meaning: "susmaq",
        forms: {
            past: { arabic: "سَكَتَ", translation: "susdu", examples: [
                { arabic: "سَكَتَ عَنِ الكَلَامِ", translation: "Danışmağı dayandırdı." },
                { arabic: "سَكَتَتْ فِي الصَّفِّ", translation: "Sinifdə susdu." }
            ]},
            present: { arabic: "يَسْكُتُ", translation: "susur", examples: [
                { arabic: "يَسْكُتُ عِنْدَمَا يَتَكَلَّمُ الأُسْتَاذُ", translation: "Müəllim danışanda susur." },
                { arabic: "يَسْكُتُ لِيَسْتَمِعَ", translation: "Dinləmək üçün susur." }
            ]},
            imperative: { arabic: "اُسْكُتْ", translation: "sus!", examples: [
                { arabic: "اُسْكُتْ مِنْ فَضْلِكَ", translation: "Xahiş edirəm sus!" },
                { arabic: "اُسْكُتْ فِي المَسْجِدِ", translation: "Məsciddə sus!" }
            ]}
        }
    },
{
        id: 47,
        arabic: "سَأَلَ",
        meaning: "soruşmaq",
        forms: {
            past: { arabic: "سَأَلَ", translation: "soruşdu", examples: [
                { arabic: "سَأَلَ عَنِ الطَّرِيقِ", translation: "Yolu soruşdu." },
                { arabic: "سَأَلَتِ المُعَلِّمَ", translation: "Müəllimdən soruşdu." }
            ]},
            present: { arabic: "يَسْأَلُ", translation: "soruşur", examples: [
                { arabic: "يَسْأَلُ عَنِ المَوْعِدِ", translation: "Vaxtı soruşur." },
                { arabic: "يَسْأَلُ كَثِيرًا", translation: "Çox sual verir." }
            ]},
            imperative: { arabic: "اِسْأَلْ", translation: "soruş!", examples: [
                { arabic: "اِسْأَلْ مَا تَجْهَلُ", translation: "Bilmədiyini soruş!" },
                { arabic: "اِسْأَلْ عَنِ الطَّرِيقِ", translation: "Yolu soruş!" }
            ]}
        }
    },
{
        id: 48,
        arabic: "أَجَابَ",
        meaning: "cavab vermək",
        forms: {
            past: { arabic: "أَجَابَ", translation: "cavab verdi", examples: [
                { arabic: "أَجَابَ عَنِ السُّؤَالِ", translation: "Suala cavab verdi." },
                { arabic: "أَجَابَتِ المُكَالَمَةَ", translation: "Zəngə cavab verdi." }
            ]},
            present: { arabic: "يُجِيبُ", translation: "cavab verir", examples: [
                { arabic: "يُجِيبُ عَنِ الهَاتِفِ", translation: "Telefona cavab verir." },
                { arabic: "يُجِيبُ الأُسْتَاذَ", translation: "Müəllimə cavab verir." }
            ]},
            imperative: { arabic: "أَجِبْ", translation: "cavab ver!", examples: [
                { arabic: "أَجِبْ عَنِ السُّؤَالِ", translation: "Suala cavab ver!" },
                { arabic: "أَجِبْ بِصِدْقٍ", translation: "Dürüst cavab ver!" }
            ]}
        }
    },
{
        id: 49,
        arabic: "بَكَى",
        meaning: "ağlamaq",
        forms: {
            past: { arabic: "بَكَى", translation: "ağladı", examples: [
                { arabic: "بَكَى الطِّفْلُ", translation: "Uşaq ağladı." },
                { arabic: "بَكَتْ مِنَ الفَرَحِ", translation: "Sevincdən ağladı." }
            ]},
            present: { arabic: "يَبْكِي", translation: "ağlayır", examples: [
                { arabic: "يَبْكِي الطِّفْلُ", translation: "Uşaq ağlayır." },
                { arabic: "يَبْكِي لِفِرَاقِ أُمِّهِ", translation: "Anasından ayrıldığı üçün ağlayır." }
            ]},
            imperative: { arabic: "اِبْكِ", translation: "ağla!", examples: [
                { arabic: "اِبْكِ إِنْ كُنْتَ حَزِينًا", translation: "Əgər kədərlisənsə ağla!" },
                { arabic: "اِبْكِ مِنْ خَشْيَةِ اللَّهِ", translation: "Allah qorxusundan ağla!" }
            ]}
        }
    },
{
        id: 50,
        arabic: "ضَحِكَ",
        meaning: "gülmək",
        forms: {
            past: { arabic: "ضَحِكَ", translation: "güldü", examples: [
                { arabic: "ضَحِكَ الأَطْفَالُ", translation: "Uşaqlar güldü." },
                { arabic: "ضَحِكَتْ مِنَ النُّكْتَةِ", translation: "Zarafata güldü." }
            ]},
            present: { arabic: "يَضْحَكُ", translation: "gülür", examples: [
                { arabic: "يَضْحَكُ كَثِيرًا", translation: "Çox gülür." },
                { arabic: "يَضْحَكُ مَعَ أَصْدِقَائِهِ", translation: "Dostları ilə gülür." }
            ]},
            imperative: { arabic: "اِضْحَكْ", translation: "gül!", examples: [
                { arabic: "اِضْحَكْ قَلِيلًا", translation: "Bir az gül!" },
                { arabic: "اِضْحَكْ مَعَنَا", translation: "Bizimlə gül!" }
            ]}
        }
    },
{
        id: 51,
        arabic: "خَشَعَ",
        meaning: "təvazökar olmaq, qəlbi yumşalmaq",
        forms: {
            past: { arabic: "خَشَعَ", translation: "xüşu etdi", examples: [
                { arabic: "خَشَعَ قَلْبُهُ فِي الصَّلَاةِ", translation: "Namazda qəlbi xüşu etdi." },
                { arabic: "خَشَعَتِ النُّفُوسُ لِلَّهِ", translation: "Nəfslər Allaha təvazökar oldu." }
            ]},
            present: { arabic: "يَخْشَعُ", translation: "xüşu edir", examples: [
                { arabic: "يَخْشَعُ فِي سُجُودِهِ", translation: "Səcdəsində xüşu edir." },
                { arabic: "يَخْشَعُ عِنْدَ قِرَاءَةِ القُرْآنِ", translation: "Quran oxuyarkən xüşu edir." }
            ]},
            imperative: { arabic: "اِخْشَعْ", translation: "xüşu et!", examples: [
                { arabic: "اِخْشَعْ فِي صَلَاتِكَ", translation: "Namazında xüşu et!" },
                { arabic: "اِخْشَعْ لِلَّهِ", translation: "Allaha xüşu et!" }
            ]}
        }
    },
{
        id: 52,
        arabic: "صَدَقَ",
        meaning: "doğru danışmaq",
        forms: {
            past: { arabic: "صَدَقَ", translation: "doğru danışdı", examples: [
                { arabic: "صَدَقَ فِي كَلَامِهِ", translation: "Sözündə doğru oldu." },
                { arabic: "صَدَقَتِ امْرَأَةٌ فِي وَعْدِهَا", translation: "Bir qadın vədində doğru oldu." }
            ]},
            present: { arabic: "يَصْدُقُ", translation: "doğru danışır", examples: [
                { arabic: "يَصْدُقُ فِي وَعْدِهِ", translation: "Vədində doğru olur." },
                { arabic: "يَصْدُقُ مَعَ النَّاسِ", translation: "İnsanlarla doğru danışır." }
            ]},
            imperative: { arabic: "اُصْدُقْ", translation: "doğru danış!", examples: [
                { arabic: "اُصْدُقْ وَلَوْ كَانَ مُرًّا", translation: "Acı olsa da doğru danış!" },
                { arabic: "اُصْدُقْ فِي كُلِّ أَحْوَالِكَ", translation: "Hər halda doğru ol!" }
            ]}
        }
    },
{
        id: 53,
        arabic: "كَذَبَ",
        meaning: "yalan danışmaq",
        forms: {
            past: { arabic: "كَذَبَ", translation: "yalan danışdı", examples: [
                { arabic: "كَذَبَ فِي شَهَادَتِهِ", translation: "Şahidliyində yalan danışdı." },
                { arabic: "كَذَبَتْ عَلَى وَالِدِهَا", translation: "Valideyninə yalan dedi." }
            ]},
            present: { arabic: "يَكْذِبُ", translation: "yalan danışır", examples: [
                { arabic: "يَكْذِبُ فِي الأَقْوَالِ", translation: "Sözlərində yalan danışır." },
                { arabic: "يَكْذِبُ عَلَى النَّاسِ", translation: "İnsanlara yalan deyir." }
            ]},
            imperative: { arabic: "لَا تَكْذِبْ", translation: "yalan danışma!", examples: [
                { arabic: "لَا تَكْذِبْ فِي شَهَادَتِكَ", translation: "Şahidliyində yalan danışma!" },
                { arabic: "لَا تَكْذِبْ أَبَدًا", translation: "Heç vaxt yalan danışma!" }
            ]}
        }
    },
{
        id: 54,
        arabic: "صَبَرَ",
        meaning: "səbir etmək",
        forms: {
            past: { arabic: "صَبَرَ", translation: "səbir etdi", examples: [
                { arabic: "صَبَرَ عَلَى البَلَاءِ", translation: "Bəlaya səbir etdi." },
                { arabic: "صَبَرَتِ المُسْلِمَةُ", translation: "Müsəlman qadın səbir etdi." }
            ]},
            present: { arabic: "يَصْبِرُ", translation: "səbir edir", examples: [
                { arabic: "يَصْبِرُ عَلَى الأَذَى", translation: "Əziyyətə səbir edir." },
                { arabic: "يَصْبِرُ فِي الشَّدَائِدِ", translation: "Çətinliklərə səbir edir." }
            ]},
            imperative: { arabic: "اِصْبِرْ", translation: "səbir et!", examples: [
                { arabic: "اِصْبِرْ عَلَى مَا أَصَابَكَ", translation: "Başına gələnə səbir et!" },
                { arabic: "اِصْبِرْ وَصَابِرْ", translation: "Səbir et və müqavimət göstər!" }
            ]}
        }
    },
{
        id: 55,
        arabic: "شَكَرَ",
        meaning: "şükr etmək",
        forms: {
            past: { arabic: "شَكَرَ", translation: "şükr etdi", examples: [
                { arabic: "شَكَرَ اللَّهَ عَلَى نِعَمِهِ", translation: "Allaha nemətlərinə görə şükr etdi." },
                { arabic: "شَكَرَتْ رَبَّهَا", translation: "Rəbbinə şükr etdi." }
            ]},
            present: { arabic: "يَشْكُرُ", translation: "şükr edir", examples: [
                { arabic: "يَشْكُرُ اللَّهَ كَثِيرًا", translation: "Allaha çox şükr edir." },
                { arabic: "يَشْكُرُ النَّاسَ", translation: "İnsanlara təşəkkür edir." }
            ]},
            imperative: { arabic: "اُشْكُرْ", translation: "şükr et!", examples: [
                { arabic: "اُشْكُرِ اللَّهَ", translation: "Allaha şükr et!" },
                { arabic: "اُشْكُرْ مَنْ أَحْسَنَ إِلَيْكَ", translation: "Sənə yaxşılıq edənə təşəkkür et!" }
            ]}
        }
    },
{
        id: 56,
        arabic: "ذَكَرَ",
        meaning: "zikr etmək, xatırlamaq",
        forms: {
            past: { arabic: "ذَكَرَ", translation: "zikr etdi", examples: [
                { arabic: "ذَكَرَ اللَّهَ كَثِيرًا", translation: "Allahı çox zikr etdi." },
                { arabic: "ذَكَرَتِ اسْمَ رَبِّهَا", translation: "Rəbbinin adını zikr etdi." }
            ]},
            present: { arabic: "يَذْكُرُ", translation: "zikr edir", examples: [
                { arabic: "يَذْكُرُ اللَّهَ فِي كُلِّ وَقْتٍ", translation: "Hər vaxt Allahı zikr edir." },
                { arabic: "يَذْكُرُ نِعَمَ اللَّهِ", translation: "Allahın nemətlərini xatırlayır." }
            ]},
            imperative: { arabic: "اُذْكُرْ", translation: "zikr et!", examples: [
                { arabic: "اُذْكُرِ اللَّهَ كَثِيرًا", translation: "Allahı çox zikr et!" },
                { arabic: "اُذْكُرْ رَبَّكَ فِي نَفْسِكَ", translation: "Rəbbini ürəyində zikr et!" }
            ]}
        }
    },
{
        id: 57,
        arabic: "دَعَا",
        meaning: "dua etmək, çağırmaq",
        forms: {
            past: { arabic: "دَعَا", translation: "dua etdi", examples: [
                { arabic: "دَعَا اللَّهَ بِالتَّوْفِيقِ", translation: "Allahdan müvəffəqiyyət istədi." },
                { arabic: "دَعَتْ لِوَالِدَيْهَا", translation: "Valideynlərinə dua etdi." }
            ]},
            present: { arabic: "يَدْعُو", translation: "dua edir", examples: [
                { arabic: "يَدْعُو فِي السُّجُودِ", translation: "Səcdədə dua edir." },
                { arabic: "يَدْعُو اللَّهَ بِالْهِدَايَةِ", translation: "Allahdan hidayət istəyir." }
            ]},
            imperative: { arabic: "اُدْعُ", translation: "dua et!", examples: [
                { arabic: "اُدْعُ اللَّهَ بِإِخْلَاصٍ", translation: "Allaha səmimiyyətlə dua et!" },
                { arabic: "اُدْعُ لِوَالِدَيْكَ", translation: "Valideynlərinə dua et!" }
            ]}
        }
    },
{
        id: 58,
        arabic: "تَابَ",
        meaning: "tövbə etmək",
        forms: {
            past: { arabic: "تَابَ", translation: "tövbə etdi", examples: [
                { arabic: "تَابَ إِلَى اللَّهِ", translation: "Allaha tövbə etdi." },
                { arabic: "تَابَتْ مِنْ ذُنُوبِهَا", translation: "Günahlarından tövbə etdi." }
            ]},
            present: { arabic: "يَتُوبُ", translation: "tövbə edir", examples: [
                { arabic: "يَتُوبُ إِلَى اللَّهِ", translation: "Allaha tövbə edir." },
                { arabic: "يَتُوبُ مِنْ كُلِّ ذَنْبٍ", translation: "Hər günahdan tövbə edir." }
            ]},
            imperative: { arabic: "تُبْ", translation: "tövbə et!", examples: [
                { arabic: "تُبْ إِلَى اللَّهِ", translation: "Allaha tövbə et!" },
                { arabic: "تُبْ قَبْلَ فَوَاتِ الأَوَانِ", translation: "Vaxt keçməmiş tövbə et!" }
            ]}
        }
    },
{
        id: 59,
        arabic: "اِسْتَغْفَرَ",
        meaning: "bağışlanma diləmək",
        forms: {
            past: { arabic: "اِسْتَغْفَرَ", translation: "bağışlanma istədi", examples: [
                { arabic: "اِسْتَغْفَرَ اللَّهَ", translation: "Allahdan bağışlanma istədi." },
                { arabic: "اِسْتَغْفَرَتْ لِذَنْبِهَا", translation: "Günahı üçün bağışlanma istədi." }
            ]},
            present: { arabic: "يَسْتَغْفِرُ", translation: "bağışlanma istəyir", examples: [
                { arabic: "يَسْتَغْفِرُ اللَّهَ كَثِيرًا", translation: "Allahdan çox bağışlanma istəyir." },
                { arabic: "يَسْتَغْفِرُ فِي الأَسْحَارِ", translation: "Səhərlər bağışlanma istəyir." }
            ]},
            imperative: { arabic: "اِسْتَغْفِرْ", translation: "bağışlanma dilə!", examples: [
                { arabic: "اِسْتَغْفِرِ اللَّهَ", translation: "Allahdan bağışlanma dilə!" },
                { arabic: "اِسْتَغْفِرْ لِذَنْبِكَ", translation: "Günahın üçün bağışlanma dilə!" }
            ]}
        }
    },
{
        id: 60,
        arabic: "تَوَضَّأَ",
        meaning: "dəstəmaz almaq",
        forms: {
            past: { arabic: "تَوَضَّأَ", translation: "dəstəmaz aldı", examples: [
                { arabic: "تَوَضَّأَ لِلصَّلَاةِ", translation: "Namaz üçün dəstəmaz aldı." },
                { arabic: "تَوَضَّأَتْ فِي البَيْتِ", translation: "Evdə dəstəmaz aldı." }
            ]},
            present: { arabic: "يَتَوَضَّأُ", translation: "dəstəmaz alır", examples: [
                { arabic: "يَتَوَضَّأُ قَبْلَ كُلِّ صَلَاةٍ", translation: "Hər namazdan əvvəl dəstəmaz alır." },
                { arabic: "يَتَوَضَّأُ بِالْمَاءِ", translation: "Su ilə dəstəmaz alır." }
            ]},
            imperative: { arabic: "تَوَضَّأْ", translation: "dəstəmaz al!", examples: [
                { arabic: "تَوَضَّأْ لِلصَّلَاةِ", translation: "Namaz üçün dəstəmaz al!" },
                { arabic: "تَوَضَّأْ قَبْلَ النَّوْمِ", translation: "Yatmazdan əvvəl dəstəmaz al!" }
            ]}
        }
    },
{
        id: 61,
        arabic: "سَجَدَ",
        meaning: "səcdə etmək",
        forms: {
            past: { arabic: "سَجَدَ", translation: "səcdə etdi", examples: [
                { arabic: "سَجَدَ لِلَّهِ", translation: "Allaha səcdə etdi." },
                { arabic: "سَجَدَتِ المُسْلِمَةُ", translation: "Müsəlman qadın səcdə etdi." }
            ]},
            present: { arabic: "يَسْجُدُ", translation: "səcdə edir", examples: [
                { arabic: "يَسْجُدُ فِي الصَّلَاةِ", translation: "Namazda səcdə edir." },
                { arabic: "يَسْجُدُ لِلَّهِ وَحْدَهُ", translation: "Yalnız Allaha səcdə edir." }
            ]},
            imperative: { arabic: "اُسْجُدْ", translation: "səcdə et!", examples: [
                { arabic: "اُسْجُدْ لِلَّهِ", translation: "Allaha səcdə et!" },
                { arabic: "اُسْجُدْ فِي صَلَاتِكَ", translation: "Namazında səcdə et!" }
            ]}
        }
    },
{
        id: 62,
        arabic: "رَكَعَ",
        meaning: "rüku etmək",
        forms: {
            past: { arabic: "رَكَعَ", translation: "rüku etdi", examples: [
                { arabic: "رَكَعَ فِي صَلَاتِهِ", translation: "Namazında rüku etdi." },
                { arabic: "رَكَعَتِ المُصَلِّيَةُ", translation: "Namaz qılan qadın rüku etdi." }
            ]},
            present: { arabic: "يَرْكَعُ", translation: "rüku edir", examples: [
                { arabic: "يَرْكَعُ وَيَسْجُدُ لِلَّهِ", translation: "Allaha rüku və səcdə edir." },
                { arabic: "يَرْكَعُ فِي الصَّلَاةِ", translation: "Namazda rüku edir." }
            ]},
            imperative: { arabic: "اِرْكَعْ", translation: "rüku et!", examples: [
                { arabic: "اِرْكَعْ لِلَّهِ", translation: "Allaha rüku et!" },
                { arabic: "اِرْكَعْ فِي الصَّلَاةِ", translation: "Namazda rüku et!" }
            ]}
        }
    },
{
        id: 63,
        arabic: "قَرَأَ القُرْآنَ",
        meaning: "Quran oxumaq",
        forms: {
            past: { arabic: "قَرَأَ القُرْآنَ", translation: "Quran oxudu", examples: [
                { arabic: "قَرَأَ القُرْآنَ فِي الصَّبَاحِ", translation: "Səhər Quran oxudu." },
                { arabic: "قَرَأَتِ القُرْآنَ كَامِلًا", translation: "Quranı tam oxudu." }
            ]},
            present: { arabic: "يَقْرَأُ القُرْآنَ", translation: "Quran oxuyur", examples: [
                { arabic: "يَقْرَأُ القُرْآنَ كُلَّ يَوْمٍ", translation: "Hər gün Quran oxuyur." },
                { arabic: "يَقْرَأُ سُورَةَ الكَهْفِ", translation: "Kəhf surəsini oxuyur." }
            ]},
            imperative: { arabic: "اِقْرَأِ القُرْآنَ", translation: "Quran oxu!", examples: [
                { arabic: "اِقْرَأِ القُرْآنَ بِتَدَبُّرٍ", translation: "Quranı təfəkkürlə oxu!" },
                { arabic: "اِقْرَأْ سُورَةَ المُلْكِ", translation: "Mülk surəsini oxu!" }
            ]}
        }
    },
{
        id: 64,
        arabic: "تَدَبَّرَ",
        meaning: "təfəkkür etmək",
        forms: {
            past: { arabic: "تَدَبَّرَ", translation: "təfəkkür etdi", examples: [
                { arabic: "تَدَبَّرَ آيَاتِ القُرْآنِ", translation: "Quran ayələrini təfəkkür etdi." },
                { arabic: "تَدَبَّرَتْ فِي خَلْقِ اللَّهِ", translation: "Allahın yaratdıqlarını təfəkkür etdi." }
            ]},
            present: { arabic: "يَتَدَبَّرُ", translation: "təfəkkür edir", examples: [
                { arabic: "يَتَدَبَّرُ القُرْآنَ", translation: "Quranı təfəkkür edir." },
                { arabic: "يَتَدَبَّرُ فِي آيَاتِ اللَّهِ", translation: "Allahın ayələrini təfəkkür edir." }
            ]},
            imperative: { arabic: "تَدَبَّرْ", translation: "təfəkkür et!", examples: [
                { arabic: "تَدَبَّرْ فِي القُرْآنِ", translation: "Quranı təfəkkür et!" },
                { arabic: "تَدَبَّرْ آيَاتِ اللَّهِ", translation: "Allahın ayələrini təfəkkür et!" }
            ]}
        }
    },
{
        id: 65,
        arabic: "تَعَلَّمَ",
        meaning: "öyrənmək",
        forms: {
            past: { arabic: "تَعَلَّمَ", translation: "öyrəndi", examples: [
                { arabic: "تَعَلَّمَ اللُّغَةَ العَرَبِيَّةَ", translation: "Ərəb dilini öyrəndi." },
                { arabic: "تَعَلَّمَتِ الفِقْهَ", translation: "Fiqhi öyrəndi." }
            ]},
            present: { arabic: "يَتَعَلَّمُ", translation: "öyrənir", examples: [
                { arabic: "يَتَعَلَّمُ العَقِيدَةَ", translation: "Əqidəni öyrənir." },
                { arabic: "يَتَعَلَّمُ القُرْآنَ", translation: "Quranı öyrənir." }
            ]},
            imperative: { arabic: "تَعَلَّمْ", translation: "öyrən!", examples: [
                { arabic: "تَعَلَّمِ العِلْمَ الشَّرْعِيَّ", translation: "Şəriət elmini öyrən!" },
                { arabic: "تَعَلَّمْ مِنْ كُلِّ عَالِمٍ", translation: "Hər alimdən öyrən!" }
            ]}
        }
    },
{
        id: 66,
        arabic: "عَلَّمَ",
        meaning: "öyrətmək",
        forms: {
            past: { arabic: "عَلَّمَ", translation: "öyrətdi", examples: [
                { arabic: "عَلَّمَ النَّاسَ الخَيْرَ", translation: "İnsanlara xeyiri öyrətdi." },
                { arabic: "عَلَّمَتْ أَوْلَادَهَا القُرْآنَ", translation: "Övladlarına Quranı öyrətdi." }
            ]},
            present: { arabic: "يُعَلِّمُ", translation: "öyrədir", examples: [
                { arabic: "يُعَلِّمُ القُرْآنَ", translation: "Quranı öyrədir." },
                { arabic: "يُعَلِّمُ العِلْمَ", translation: "Elmi öyrədir." }
            ]},
            imperative: { arabic: "عَلِّمْ", translation: "öyrət!", examples: [
                { arabic: "عَلِّمْ أَهْلَكَ الصَّلَاةَ", translation: "Ailənə namazı öyrət!" },
                { arabic: "عَلِّمِ النَّاسَ الخَيْرَ", translation: "İnsanlara xeyiri öyrət!" }
            ]}
        }
    },
{
        id: 67,
        arabic: "ذَاكَرَ",
        meaning: "təkrar etmək, mütaliə etmək",
        forms: {
            past: { arabic: "ذَاكَرَ", translation: "mütaliə etdi", examples: [
                { arabic: "ذَاكَرَ دُرُوسَهُ", translation: "Dərslərini mütaliə etdi." },
                { arabic: "ذَاكَرَتِ الفِقْهَ", translation: "Fiqhi təkrar etdi." }
            ]},
            present: { arabic: "يُذَاكِرُ", translation: "mütaliə edir", examples: [
                { arabic: "يُذَاكِرُ فِي اللَّيْلِ", translation: "Gecə mütaliə edir." },
                { arabic: "يُذَاكِرُ مَعَ أَصْدِقَائِهِ", translation: "Dostları ilə mütaliə edir." }
            ]},
            imperative: { arabic: "ذَاكِرْ", translation: "mütaliə et!", examples: [
                { arabic: "ذَاكِرْ عِلْمَكَ", translation: "Elmini təkrar et!" },
                { arabic: "ذَاكِرْ كُلَّ يَوْمٍ", translation: "Hər gün mütaliə et!" }
            ]}
        }
    },
{
        id: 68,
        arabic: "نَصَحَ",
        meaning: "nəsihət etmək",
        forms: {
            past: { arabic: "نَصَحَ", translation: "nəsihət etdi", examples: [
                { arabic: "نَصَحَ أَخَاهُ", translation: "Qardaşına nəsihət etdi." },
                { arabic: "نَصَحَتْ صَدِيقَتَهَا", translation: "Dostuna nəsihət etdi." }
            ]},
            present: { arabic: "يَنْصَحُ", translation: "nəsihət edir", examples: [
                { arabic: "يَنْصَحُ بِالْخَيْرِ", translation: "Xeyirə nəsihət edir." },
                { arabic: "يَنْصَحُ إِخْوَانَهُ", translation: "Qardaşlarına nəsihət edir." }
            ]},
            imperative: { arabic: "اِنْصَحْ", translation: "nəsihət et!", examples: [
                { arabic: "اِنْصَحْ أَخَاكَ", translation: "Qardaşına nəsihət et!" },
                { arabic: "اِنْصَحْ بِالْحَقِّ", translation: "Haqqı nəsihət et!" }
            ]}
        }
    },
{
        id: 69,
        arabic: "زَارَ",
        meaning: "ziyarət etmək",
        forms: {
            past: { arabic: "زَارَ", translation: "ziyarət etdi", examples: [
                { arabic: "زَارَ قَرِيبًا لَهُ", translation: "Bir qohumunu ziyarət etdi." },
                { arabic: "زَارَتِ المَرِيضَ", translation: "Xəstəni ziyarət etdi." }
            ]},
            present: { arabic: "يَزُورُ", translation: "ziyarət edir", examples: [
                { arabic: "يَزُورُ المَرْضَى", translation: "Xəstələri ziyarət edir." },
                { arabic: "يَزُورُ أَقَارِبَهُ", translation: "Qohumlarını ziyarət edir." }
            ]},
            imperative: { arabic: "زُرْ", translation: "ziyarət et!", examples: [
                { arabic: "زُرِ المَرِيضَ", translation: "Xəstəni ziyarət et!" },
                { arabic: "زُرْ أَقَارِبَكَ", translation: "Qohumlarını ziyarət et!" }
            ]}
        }
    },
{
        id: 70,
        arabic: "سَاعَدَ",
        meaning: "kömək etmək",
        forms: {
            past: { arabic: "سَاعَدَ", translation: "kömək etdi", examples: [
                { arabic: "سَاعَدَ الفَقِيرَ", translation: "Kasıba kömək etdi." },
                { arabic: "سَاعَدَتْ وَالِدَهَا", translation: "Valideyninə kömək etdi." }
            ]},
            present: { arabic: "يُسَاعِدُ", translation: "kömək edir", examples: [
                { arabic: "يُسَاعِدُ فِي البَيْتِ", translation: "Evdə kömək edir." },
                { arabic: "يُسَاعِدُ المُحْتَاجِينَ", translation: "Ehtiyacı olanlara kömək edir." }
            ]},
            imperative: { arabic: "سَاعِدْ", translation: "kömək et!", examples: [
                { arabic: "سَاعِدْ أَخَاكَ", translation: "Qardaşına kömək et!" },
                { arabic: "سَاعِدِ المُحْتَاجَ", translation: "Ehtiyacı olana kömək et!" }
            ]}
        }
    },
{
        id: 71,
        arabic: "تَصَدَّقَ",
        meaning: "sədəqə vermək",
        forms: {
            past: { arabic: "تَصَدَّقَ", translation: "sədəqə verdi", examples: [
                { arabic: "تَصَدَّقَ بِمَالِهِ", translation: "Malından sədəqə verdi." },
                { arabic: "تَصَدَّقَتْ فِي السِّرِّ", translation: "Gizli sədəqə verdi." }
            ]},
            present: { arabic: "يَتَصَدَّقُ", translation: "sədəqə verir", examples: [
                { arabic: "يَتَصَدَّقُ كُلَّ جُمُعَةٍ", translation: "Hər cümə sədəqə verir." },
                { arabic: "يَتَصَدَّقُ عَلَى الفُقَرَاءِ", translation: "Kasıblara sədəqə verir." }
            ]},
            imperative: { arabic: "تَصَدَّقْ", translation: "sədəqə ver!", examples: [
                { arabic: "تَصَدَّقْ فِي سَبِيلِ اللَّهِ", translation: "Allah yolunda sədəqə ver!" },
                { arabic: "تَصَدَّقْ وَلَوْ بِشَيْءٍ يَسِيرٍ", translation: "Az olsa da sədəqə ver!" }
            ]}
        }
    },
{
        id: 72,
        arabic: "أَنْفَقَ",
        meaning: "xərcləmək (Allah yolunda)",
        forms: {
            past: { arabic: "أَنْفَقَ", translation: "xərclədi", examples: [
                { arabic: "أَنْفَقَ فِي سَبِيلِ اللَّهِ", translation: "Allah yolunda xərclədi." },
                { arabic: "أَنْفَقَتْ عَلَى الفُقَرَاءِ", translation: "Kasıblara xərclədi." }
            ]},
            present: { arabic: "يُنْفِقُ", translation: "xərcləyir", examples: [
                { arabic: "يُنْفِقُ مِمَّا رَزَقَهُ اللَّهُ", translation: "Allahın verdiyi ruzidən xərcləyir." },
                { arabic: "يُنْفِقُ فِي الخَيْرِ", translation: "Xeyirə xərcləyir." }
            ]},
            imperative: { arabic: "أَنْفِقْ", translation: "xərclə!", examples: [
                { arabic: "أَنْفِقْ فِي سَبِيلِ اللَّهِ", translation: "Allah yolunda xərclə!" },
                { arabic: "أَنْفِقْ مَا تَجِدُ", translation: "Tapdığını xərclə!" }
            ]}
        }
    },
{
        id: 73,
        arabic: "صَامَ تَطَوُّعًا",
        meaning: "könüllü oruc tutmaq",
        forms: {
            past: { arabic: "صَامَ تَطَوُّعًا", translation: "könüllü oruc tutdu", examples: [
                { arabic: "صَامَ يَوْمَ الِاثْنَيْنِ", translation: "Bazar ertəsi oruc tutdu." },
                { arabic: "صَامَتْ أَيَّامَ البِيضِ", translation: "Ağ günlərdə oruc tutdu." }
            ]},
            present: { arabic: "يَصُومُ تَطَوُّعًا", translation: "könüllü oruc tutur", examples: [
                { arabic: "يَصُومُ كُلَّ خَمِيسٍ", translation: "Hər cümə axşamı oruc tutur." },
                { arabic: "يَصُومُ فِي شَعْبَانَ", translation: "Şabanda oruc tutur." }
            ]},
            imperative: { arabic: "صُمْ تَطَوُّعًا", translation: "könüllü oruc tut!", examples: [
                { arabic: "صُمْ يَوْمَ عَرَفَةَ", translation: "Ərəfə günü oruc tut!" },
                { arabic: "صُمْ يَوْمَ عَاشُورَاءَ", translation: "Aşura günü oruc tut!" }
            ]}
        }
    },
{
        id: 74,
        arabic: "حَافَظَ",
        meaning: "qorumaq, mühafizə etmək",
        forms: {
            past: { arabic: "حَافَظَ", translation: "qorudu", examples: [
                { arabic: "حَافَظَ عَلَى الصَّلَاةِ", translation: "Namazı qorudu." },
                { arabic: "حَافَظَتْ عَلَى حِجَابِهَا", translation: "Hicabını qorudu." }
            ]},
            present: { arabic: "يُحَافِظُ", translation: "qoruyur", examples: [
                { arabic: "يُحَافِظُ عَلَى الوُضُوءِ", translation: "Dəstəmazını qoruyur." },
                { arabic: "يُحَافِظُ عَلَى السُّنَّةِ", translation: "Sünnəyə riayət edir." }
            ]},
            imperative: { arabic: "حَافِظْ", translation: "qoru!", examples: [
                { arabic: "حَافِظْ عَلَى صَلَاتِكَ", translation: "Namazını qoru!" },
                { arabic: "حَافِظْ عَلَى لِسَانِكَ", translation: "Dilini qoru!" }
            ]}
        }
    },
{
        id: 75,
        arabic: "اِجْتَنَبَ",
        meaning: "çəkinmək, uzaq durmaq",
        forms: {
            past: { arabic: "اِجْتَنَبَ", translation: "uzaq durdu", examples: [
                { arabic: "اِجْتَنَبَ الكَبَائِرَ", translation: "Böyük günahlardan uzaq durdu." },
                { arabic: "اِجْتَنَبَتِ الغِيبَةَ", translation: "Qeybətdən uzaq durdu." }
            ]},
            present: { arabic: "يَجْتَنِبُ", translation: "uzaq durur", examples: [
                { arabic: "يَجْتَنِبُ المَعَاصِيَ", translation: "Günahlardan uzaq durur." },
                { arabic: "يَجْتَنِبُ الرِّبَا", translation: "Sələmdən uzaq durur." }
            ]},
            imperative: { arabic: "اِجْتَنِبْ", translation: "uzaq dur!", examples: [
                { arabic: "اِجْتَنِبِ الشُّبُهَاتِ", translation: "Şübhəli şeylərdən uzaq dur!" },
                { arabic: "اِجْتَنِبْ مَا حَرَّمَ اللَّهُ", translation: "Allahın haram etdiyindən uzaq dur!" }
            ]}
        }
    },
{
        id: 76,
        arabic: "أَمَرَ",
        meaning: "əmr etmək",
        forms: {
            past: { arabic: "أَمَرَ", translation: "əmr etdi", examples: [
                { arabic: "أَمَرَ بِالْمَعْرُوفِ", translation: "Yaxşı işi əmr etdi." },
                { arabic: "أَمَرَتْ أَوْلَادَهَا بِالصَّلَاةِ", translation: "Övladlarına namazı əmr etdi." }
            ]},
            present: { arabic: "يَأْمُرُ", translation: "əmr edir", examples: [
                { arabic: "يَأْمُرُ بِالْخَيْرِ", translation: "Xeyiri əmr edir." },
                { arabic: "يَأْمُرُ بِالْعَدْلِ", translation: "Ədaləti əmr edir." }
            ]},
            imperative: { arabic: "مُرْ", translation: "əmr et!", examples: [
                { arabic: "مُرْ بِالْمَعْرُوفِ", translation: "Yaxşı işi əmr et!" },
                { arabic: "مُرْ أَهْلَكَ بِالصَّلَاةِ", translation: "Ailənə namazı əmr et!" }
            ]}
        }
    },
{
        id: 77,
        arabic: "نَهَى",
        meaning: "qadağan etmək",
        forms: {
            past: { arabic: "نَهَى", translation: "qadağan etdi", examples: [
                { arabic: "نَهَى عَنِ المُنْكَرِ", translation: "Pis işi qadağan etdi." },
                { arabic: "نَهَتْ عَنِ الكَذِبِ", translation: "Yalanı qadağan etdi." }
            ]},
            present: { arabic: "يَنْهَى", translation: "qadağan edir", examples: [
                { arabic: "يَنْهَى عَنِ الفَحْشَاءِ", translation: "Pis əməlləri qadağan edir." },
                { arabic: "يَنْهَى عَنِ الظُّلْمِ", translation: "Zülmü qadağan edir." }
            ]},
            imperative: { arabic: "اِنْهَ", translation: "qadağan et!", examples: [
                { arabic: "اِنْهَ عَنِ المُنْكَرِ", translation: "Pis işi qadağan et!" },
                { arabic: "اِنْهَ عَنِ السُّوءِ", translation: "Pisliyi qadağan et!" }
            ]}
        }
    },
{
        id: 78,
        arabic: "وَعَدَ",
        meaning: "vəd etmək, söz vermək",
        forms: {
            past: { arabic: "وَعَدَ", translation: "vəd etdi", examples: [
                { arabic: "وَعَدَ بِالْخَيْرِ", translation: "Xeyir vəd etdi." },
                { arabic: "وَعَدَتْ بِالوَفَاءِ", translation: "Vəfa vəd etdi." }
            ]},
            present: { arabic: "يَعِدُ", translation: "vəd edir", examples: [
                { arabic: "يَعِدُ بِالصِّدْقِ", translation: "Dürüstlük vəd edir." },
                { arabic: "يَعِدُ بِالمُسَاعَدَةِ", translation: "Kömək vəd edir." }
            ]},
            imperative: { arabic: "عِدْ", translation: "vəd et!", examples: [
                { arabic: "عِدْ بِالخَيْرِ", translation: "Xeyir vəd et!" },
                { arabic: "عِدْ وَلَا تُخْلِفْ", translation: "Vəd et və vədinə xilaf çıxma!" }
            ]}
        }
    },
{
        id: 79,
        arabic: "حَلَفَ",
        meaning: "and içmək",
        forms: {
            past: { arabic: "حَلَفَ", translation: "and içdi", examples: [
                { arabic: "حَلَفَ بِاللَّهِ", translation: "Allaha and içdi." },
                { arabic: "حَلَفَتْ أَنْ تَصْدُقَ", translation: "Doğru danışacağına and içdi." }
            ]},
            present: { arabic: "يَحْلِفُ", translation: "and içir", examples: [
                { arabic: "يَحْلِفُ بِاللَّهِ كَثِيرًا", translation: "Allaha çox and içir." },
                { arabic: "يَحْلِفُ عَلَى الصِّدْقِ", translation: "Doğruluğa and içir." }
            ]},
            imperative: { arabic: "اِحْلِفْ", translation: "and iç!", examples: [
                { arabic: "اِحْلِفْ بِاللَّهِ فَقَطْ", translation: "Yalnız Allaha and iç!" },
                { arabic: "اِحْلِفْ عَلَى الصِّدْقِ", translation: "Doğruluğa and iç!" }
            ]}
        }
    },
{
        id: 80,
        arabic: "أَوْفَى",
        meaning: "vəfa etmək, yerinə yetirmək",
        forms: {
            past: { arabic: "أَوْفَى", translation: "vəfa etdi", examples: [
                { arabic: "أَوْفَى بِعَهْدِهِ", translation: "Əhdinə vəfa etdi." },
                { arabic: "أَوْفَتْ بِوَعْدِهَا", translation: "Vədinə vəfa etdi." }
            ]},
            present: { arabic: "يُوفِي", translation: "vəfa edir", examples: [
                { arabic: "يُوفِي بِالعُهُودِ", translation: "Əhdlərə vəfa edir." },
                { arabic: "يُوفِي بِالكَيْلِ وَالمِيزَانِ", translation: "Ölçüdə və tərəzidə düz olur." }
            ]},
            imperative: { arabic: "أَوْفِ", translation: "vəfa et!", examples: [
                { arabic: "أَوْفِ بِعَهْدِكَ", translation: "Əhdinə vəfa et!" },
                { arabic: "أَوْفِ بِوَعْدِكَ", translation: "Vədinə vəfa et!" }
            ]}
        }
    },
{
        id: 81,
        arabic: "بَشَّرَ",
        meaning: "müjdələmək",
        forms: {
            past: { arabic: "بَشَّرَ", translation: "müjdələdi", examples: [
                { arabic: "بَشَّرَ بِالخَيْرِ", translation: "Xeyirlə müjdələdi." },
                { arabic: "بَشَّرَتِ المُؤْمِنِينَ بِالجَنَّةِ", translation: "Möminləri cənnətlə müjdələdi." }
            ]},
            present: { arabic: "يُبَشِّرُ", translation: "müjdələyir", examples: [
                { arabic: "يُبَشِّرُ بِالنَّصْرِ", translation: "Qələbə ilə müjdələyir." },
                { arabic: "يُبَشِّرُ بِالرَّحْمَةِ", translation: "Mərhəmətlə müjdələyir." }
            ]},
            imperative: { arabic: "بَشِّرْ", translation: "müjdələ!", examples: [
                { arabic: "بَشِّرْ بِالخَيْرِ", translation: "Xeyirlə müjdələ!" },
                { arabic: "بَشِّرِ الصَّابِرِينَ", translation: "Səbir edənləri müjdələ!" }
            ]}
        }
    },
{
        id: 82,
        arabic: "حَذَّرَ",
        meaning: "xəbərdarlıq etmək",
        forms: {
            past: { arabic: "حَذَّرَ", translation: "xəbərdarlıq etdi", examples: [
                { arabic: "حَذَّرَ مِنَ الغَفْلَةِ", translation: "Qəflətdən xəbərdarlıq etdi." },
                { arabic: "حَذَّرَتْ مِنَ التَّأْخِيرِ", translation: "Gecikmədən xəbərdarlıq etdi." }
            ]},
            present: { arabic: "يُحَذِّرُ", translation: "xəbərdarlıq edir", examples: [
                { arabic: "يُحَذِّرُ مِنَ الكِبْرِ", translation: "Təkəbbürdən xəbərdarlıq edir." },
                { arabic: "يُحَذِّرُ مِنَ التَّبْذِيرِ", translation: "İsrafdan xəbərdarlıq edir." }
            ]},
            imperative: { arabic: "حَذِّرْ", translation: "xəbərdarlıq et!", examples: [
                { arabic: "حَذِّرْ مِنَ الكَذِبِ", translation: "Yalandan xəbərdarlıq et!" },
                { arabic: "حَذِّرْ مِنَ الرِّيَاءِ", translation: "Riyadan xəbərdarlıq et!" }
            ]}
        }
    },
{
        id: 83,
        arabic: "شَفَعَ",
        meaning: "şəfaət etmək",
        forms: {
            past: { arabic: "شَفَعَ", translation: "şəfaət etdi", examples: [
                { arabic: "شَفَعَ لَهُ عِنْدَ اللَّهِ", translation: "Allah yanında ona şəfaət etdi." },
                { arabic: "شَفَعَتْ لِأَخِيهَا", translation: "Qardaşı üçün şəfaət etdi." }
            ]},
            present: { arabic: "يَشْفَعُ", translation: "şəfaət edir", examples: [
                { arabic: "يَشْفَعُ لِلْمُؤْمِنِينَ", translation: "Möminlərə şəfaət edir." },
                { arabic: "يَشْفَعُ عِنْدَ اللَّهِ", translation: "Allah yanında şəfaət edir." }
            ]},
            imperative: { arabic: "اِشْفَعْ", translation: "şəfaət et!", examples: [
                { arabic: "اِشْفَعْ لِأَخِيكَ", translation: "Qardaşına şəfaət et!" },
                { arabic: "اِشْفَعْ بِالخَيْرِ", translation: "Xeyirlə şəfaət et!" }
            ]}
        }
    },
{
        id: 84,
        arabic: "تَوَكَّلَ",
        meaning: "təvəkkül etmək",
        forms: {
            past: { arabic: "تَوَكَّلَ", translation: "təvəkkül etdi", examples: [
                { arabic: "تَوَكَّلَ عَلَى اللَّهِ", translation: "Allaha təvəkkül etdi." },
                { arabic: "تَوَكَّلَتْ فِي أُمُورِهَا", translation: "İşlərində təvəkkül etdi." }
            ]},
            present: { arabic: "يَتَوَكَّلُ", translation: "təvəkkül edir", examples: [
                { arabic: "يَتَوَكَّلُ عَلَى اللَّهِ", translation: "Allaha təvəkkül edir." },
                { arabic: "يَتَوَكَّلُ فِي كُلِّ أَمْرٍ", translation: "Hər işdə təvəkkül edir." }
            ]},
            imperative: { arabic: "تَوَكَّلْ", translation: "təvəkkül et!", examples: [
                { arabic: "تَوَكَّلْ عَلَى اللَّهِ", translation: "Allaha təvəkkül et!" },
                { arabic: "تَوَكَّلْ وَلَا تَيْأَسْ", translation: "Təvəkkül et və ümidsiz olma!" }
            ]}
        }
    },
{
        id: 85,
        arabic: "رَضِيَ",
        meaning: "razı olmaq",
        forms: {
            past: { arabic: "رَضِيَ", translation: "razı oldu", examples: [
                { arabic: "رَضِيَ بِقَضَاءِ اللَّهِ", translation: "Allahın qəzasına razı oldu." },
                { arabic: "رَضِيَتْ بِمَا قَسَمَ اللَّهُ", translation: "Allahın bölüşdürdüyünə razı oldu." }
            ]},
            present: { arabic: "يَرْضَى", translation: "razı olur", examples: [
                { arabic: "يَرْضَى بِالْحَلَالِ", translation: "Halala razı olur." },
                { arabic: "يَرْضَى بِقَدَرِ اللَّهِ", translation: "Allahın qədərinə razı olur." }
            ]},
            imperative: { arabic: "اِرْضَ", translation: "razı ol!", examples: [
                { arabic: "اِرْضَ بِمَا قَسَمَ اللَّهُ", translation: "Allahın bölüşdürdüyünə razı ol!" },
                { arabic: "اِرْضَ بِالْحَلَالِ", translation: "Halala razı ol!" }
            ]}
        }
    },
{
        id: 86,
        arabic: "أَطَاعَ",
        meaning: "itaət etmək",
        forms: {
            past: { arabic: "أَطَاعَ", translation: "itaət etdi", examples: [
                { arabic: "أَطَاعَ اللَّهَ", translation: "Allaha itaət etdi." },
                { arabic: "أَطَاعَتْ وَالِدَيْهَا", translation: "Valideynlərinə itaət etdi." }
            ]},
            present: { arabic: "يُطِيعُ", translation: "itaət edir", examples: [
                { arabic: "يُطِيعُ اللَّهَ وَرَسُولَهُ", translation: "Allaha və Rəsuluna itaət edir." },
                { arabic: "يُطِيعُ أَمْرَ وَالِدَيْهِ", translation: "Valideynlərinin əmrinə itaət edir." }
            ]},
            imperative: { arabic: "أَطِعْ", translation: "itaət et!", examples: [
                { arabic: "أَطِعِ اللَّهَ", translation: "Allaha itaət et!" },
                { arabic: "أَطِعْ وَالِدَيْكَ", translation: "Valideynlərinə itaət et!" }
            ]}
        }
    },
{
        id: 87,
        arabic: "عَصَى",
        meaning: "asi olmaq, itaətsizlik etmək",
        forms: {
            past: { arabic: "عَصَى", translation: "asi oldu", examples: [
                { arabic: "عَصَى أَمْرَ اللَّهِ", translation: "Allahın əmrinə asi oldu." },
                { arabic: "عَصَتْ وَالِدَيْهَا", translation: "Valideynlərinə asi oldu." }
            ]},
            present: { arabic: "يَعْصِي", translation: "asi olur", examples: [
                { arabic: "يَعْصِي رَبَّهُ", translation: "Rəbbinə asi olur." },
                { arabic: "يَعْصِي النَّصِيحَةَ", translation: "Nəsihətə qarşı çıxır." }
            ]},
            imperative: { arabic: "لَا تَعْصِ", translation: "asi olma!", examples: [
                { arabic: "لَا تَعْصِ اللَّهَ", translation: "Allaha asi olma!" },
                { arabic: "لَا تَعْصِ وَالِدَيْكَ", translation: "Valideynlərinə asi olma!" }
            ]}
        }
    },
{
        id: 88,
        arabic: "خَافَ",
        meaning: "qorxmaq",
        forms: {
            past: { arabic: "خَافَ", translation: "qorxdu", examples: [
                { arabic: "خَافَ اللَّهَ", translation: "Allahdan qorxdu." },
                { arabic: "خَافَتْ مِنْ يَوْمِ القِيَامَةِ", translation: "Qiyamət günündən qorxdu." }
            ]},
            present: { arabic: "يَخَافُ", translation: "qorxur", examples: [
                { arabic: "يَخَافُ رَبَّهُ", translation: "Rəbbindən qorxur." },
                { arabic: "يَخَافُ الحِسَابَ", translation: "Hesabdan qorxur." }
            ]},
            imperative: { arabic: "خَفْ", translation: "qorx!", examples: [
                { arabic: "خَفِ اللَّهَ", translation: "Allahdan qorx!" },
                { arabic: "خَفْ مِنَ الذُّنُوبِ", translation: "Günahlardan qorx!" }
            ]}
        }
    },
{
        id: 89,
        arabic: "رَجَا",
        meaning: "ümid etmək",
        forms: {
            past: { arabic: "رَجَا", translation: "ümid etdi", examples: [
                { arabic: "رَجَا رَحْمَةَ اللَّهِ", translation: "Allahın rəhmətini ümid etdi." },
                { arabic: "رَجَتِ المَغْفِرَةَ", translation: "Bağışlanma ümid etdi." }
            ]},
            present: { arabic: "يَرْجُو", translation: "ümid edir", examples: [
                { arabic: "يَرْجُو عَفْوَ اللَّهِ", translation: "Allahın əfvini ümid edir." },
                { arabic: "يَرْجُو الجَنَّةَ", translation: "Cənnəti ümid edir." }
            ]},
            imperative: { arabic: "اِرْجُ", translation: "ümid et!", examples: [
                { arabic: "اِرْجُ رَحْمَةَ اللَّهِ", translation: "Allahın rəhmətini ümid et!" },
                { arabic: "اِرْجُ وَلَا تَقْنَطْ", translation: "Ümid et və ümidsiz olma!" }
            ]}
        }
    },
{
        id: 90,
        arabic: "أَحَبَّ",
        meaning: "sevmək",
        forms: {
            past: { arabic: "أَحَبَّ", translation: "sevdi", examples: [
                { arabic: "أَحَبَّ اللَّهَ وَرَسُولَهُ", translation: "Allahı və Rəsulunu sevdi." },
                { arabic: "أَحَبَّ الخَيْرَ لِلنَّاسِ", translation: "İnsanlara xeyiri sevdi." }
            ]},
            present: { arabic: "يُحِبُّ", translation: "sevir", examples: [
                { arabic: "يُحِبُّ الصَّالِحِينَ", translation: "Salehləri sevir." },
                { arabic: "يُحِبُّ الخَيْرَ", translation: "Xeyiri sevir." }
            ]},
            imperative: { arabic: "أَحِبَّ", translation: "sev!", examples: [
                { arabic: "أَحِبَّ اللَّهَ", translation: "Allahı sev!" },
                { arabic: "أَحِبَّ لِأَخِيكَ مَا تُحِبُّ لِنَفْسِكَ", translation: "Qardaşın üçün özünə istədiyini sev!" }
            ]}
        }
    },
{
        id: 91,
        arabic: "كَرِهَ",
        meaning: "ikrah etmək, xoşlamamaq",
        forms: {
            past: { arabic: "كَرِهَ", translation: "xoşlamadı", examples: [
                { arabic: "كَرِهَ الكَذِبَ", translation: "Yalanı xoşlamadı." },
                { arabic: "كَرِهَتِ الظُّلْمَ", translation: "Zülmü xoşlamadı." }
            ]},
            present: { arabic: "يَكْرَهُ", translation: "xoşlamır", examples: [
                { arabic: "يَكْرَهُ الفَحْشَاءَ", translation: "Pis əməlləri xoşlamır." },
                { arabic: "يَكْرَهُ الرِّيَاءَ", translation: "Riyanı xoşlamır." }
            ]},
            imperative: { arabic: "اِكْرَهْ", translation: "xoşlama!", examples: [
                { arabic: "اِكْرَهِ المُنْكَرَ", translation: "Pis işi xoşlama!" },
                { arabic: "اِكْرَهْ مَا حَرَّمَ اللَّهُ", translation: "Allahın haram etdiyini xoşlama!" }
            ]}
        }
    },
{
        id: 92,
        arabic: "عَاهَدَ",
        meaning: "əhd etmək, sözləşmək",
        forms: {
            past: { arabic: "عَاهَدَ", translation: "əhd etdi", examples: [
                { arabic: "عَاهَدَ اللَّهَ عَلَى الطَّاعَةِ", translation: "Allaha itaət etməyə əhd etdi." },
                { arabic: "عَاهَدَتْ عَلَى الوَفَاءِ", translation: "Vəfaya əhd etdi." }
            ]},
            present: { arabic: "يُعَاهِدُ", translation: "əhd edir", examples: [
                { arabic: "يُعَاهِدُ عَلَى الخَيْرِ", translation: "Xeyirə əhd edir." },
                { arabic: "يُعَاهِدُ عَلَى الصِّدْقِ", translation: "Doğruluğa əhd edir." }
            ]},
            imperative: { arabic: "عَاهِدْ", translation: "əhd et!", examples: [
                { arabic: "عَاهِدِ اللَّهَ عَلَى الطَّاعَةِ", translation: "Allaha itaətə əhd et!" },
                { arabic: "عَاهِدْ عَلَى تَرْكِ المَعَاصِي", translation: "Günahları tərk etməyə əhd et!" }
            ]}
        }
    },
{
        id: 93,
        arabic: "اِسْتَعَانَ",
        meaning: "kömək istəmək",
        forms: {
            past: { arabic: "اِسْتَعَانَ", translation: "kömək istədi", examples: [
                { arabic: "اِسْتَعَانَ بِاللَّهِ", translation: "Allahdan kömək istədi." },
                { arabic: "اِسْتَعَانَتْ بِأَخِيهَا", translation: "Qardaşından kömək istədi." }
            ]},
            present: { arabic: "يَسْتَعِينُ", translation: "kömək istəyir", examples: [
                { arabic: "يَسْتَعِينُ بِاللَّهِ", translation: "Allahdan kömək istəyir." },
                { arabic: "يَسْتَعِينُ بِالصَّبْرِ وَالصَّلَاةِ", translation: "Səbir və namazla kömək istəyir." }
            ]},
            imperative: { arabic: "اِسْتَعِنْ", translation: "kömək istə!", examples: [
                { arabic: "اِسْتَعِنْ بِاللَّهِ", translation: "Allahdan kömək istə!" },
                { arabic: "اِسْتَعِنْ بِالصَّبْرِ", translation: "Səbirlə kömək istə!" }
            ]}
        }
    },
{
        id: 94,
        arabic: "اِجْتَهَدَ",
        meaning: "səy göstərmək",
        forms: {
            past: { arabic: "اِجْتَهَدَ", translation: "səy göstərdi", examples: [
                { arabic: "اِجْتَهَدَ فِي العِلْمِ", translation: "Elmdə səy göstərdi." },
                { arabic: "اِجْتَهَدَتْ فِي العَمَلِ", translation: "İşdə səy göstərdi." }
            ]},
            present: { arabic: "يَجْتَهِدُ", translation: "səy göstərir", examples: [
                { arabic: "يَجْتَهِدُ فِي طَلَبِ العِلْمِ", translation: "Elm öyrənməkdə səy göstərir." },
                { arabic: "يَجْتَهِدُ فِي العِبَادَةِ", translation: "İbadətdə səy göstərir." }
            ]},
            imperative: { arabic: "اِجْتَهِدْ", translation: "səy göstər!", examples: [
                { arabic: "اِجْتَهِدْ فِي طَلَبِ العِلْمِ", translation: "Elm öyrənməkdə səy göstər!" },
                { arabic: "اِجْتَهِدْ فِي الآخِرَةِ", translation: "Axirət üçün çalış!" }
            ]}
        }
    },
{
        id: 95,
        arabic: "تَوَسَّلَ",
        meaning: "vəsail etmək, yaxınlaşmaq",
        forms: {
            past: { arabic: "تَوَسَّلَ", translation: "vəsail etdi", examples: [
                { arabic: "تَوَسَّلَ إِلَى اللَّهِ بِالأَعْمَالِ الصَّالِحَةِ", translation: "Saleh əməllərlə Allaha yaxınlaşdı." },
                { arabic: "تَوَسَّلَتْ بِالدُّعَاءِ", translation: "Dua ilə yaxınlaşdı." }
            ]},
            present: { arabic: "يَتَوَسَّلُ", translation: "vəsail edir", examples: [
                { arabic: "يَتَوَسَّلُ بِالصَّدَقَةِ", translation: "Sədəqə ilə yaxınlaşır." },
                { arabic: "يَتَوَسَّلُ بِالْعَمَلِ الصَّالِحِ", translation: "Saleh əməllə yaxınlaşır." }
            ]},
            imperative: { arabic: "تَوَسَّلْ", translation: "vəsail et!", examples: [
                { arabic: "تَوَسَّلْ بِالصَّلَاةِ", translation: "Namazla yaxınlaş!" },
                { arabic: "تَوَسَّلْ بِالْبِرِّ", translation: "Yaxşılıqla yaxınlaş!" }
            ]}
        }
    },
{
        id: 96,
        arabic: "خَشِيَ",
        meaning: "qorxmaq, ehtiramla qorxmaq",
        forms: {
            past: { arabic: "خَشِيَ", translation: "qorxdu", examples: [
                { arabic: "خَشِيَ اللَّهَ فِي السِّرِّ وَالعَلَنِ", translation: "Gizli və aşkarda Allahdan qorxdu." },
                { arabic: "خَشِيَتْ رَبَّهَا", translation: "Rəbbindən qorxdu." }
            ]},
            present: { arabic: "يَخْشَى", translation: "qorxur", examples: [
                { arabic: "يَخْشَى اللَّهَ", translation: "Allahdan qorxur." },
                { arabic: "يَخْشَى يَوْمَ الحِسَابِ", translation: "Hesab günündən qorxur." }
            ]},
            imperative: { arabic: "اِخْشَ", translation: "qorx!", examples: [
                { arabic: "اِخْشَ اللَّهَ", translation: "Allahdan qorx!" },
                { arabic: "اِخْشَ يَوْمًا لَا يَنْفَعُ فِيهِ مَالٌ", translation: "Malın fayda verməyəcəyi gündən qorx!" }
            ]}
        }
    },
{
        id: 97,
        arabic: "اِلْتَزَمَ",
        meaning: "bağlı qalmaq, riayət etmək",
        forms: {
            past: { arabic: "اِلْتَزَمَ", translation: "riayət etdi", examples: [
                { arabic: "اِلْتَزَمَ بِالسُّنَّةِ", translation: "Sünnəyə bağlı qaldı." },
                { arabic: "اِلْتَزَمَتْ بِالحِجَابِ", translation: "Hicaba riayət etdi." }
            ]},
            present: { arabic: "يَلْتَزِمُ", translation: "riayət edir", examples: [
                { arabic: "يَلْتَزِمُ بِالصَّلَاةِ فِي وَقْتِهَا", translation: "Namazı vaxtında qılır." },
                { arabic: "يَلْتَزِمُ بِآدَابِ الإِسْلَامِ", translation: "İslam ədəblərinə riayət edir." }
            ]},
            imperative: { arabic: "اِلْتَزِمْ", translation: "riayət et!", examples: [
                { arabic: "اِلْتَزِمْ بِالسُّنَّةِ", translation: "Sünnəyə bağlı qal!" },
                { arabic: "اِلْتَزِمْ بِالصَّلَاةِ", translation: "Namaza riayət et!" }
            ]}
        }
    },
{
        id: 98,
        arabic: "اِسْتَقَامَ",
        meaning: "düz yolda olmaq, istiqamət sahibi olmaq",
        forms: {
            past: { arabic: "اِسْتَقَامَ", translation: "düz yolda oldu", examples: [
                { arabic: "اِسْتَقَامَ عَلَى الطَّاعَةِ", translation: "İtaətdə düz qaldı." },
                { arabic: "اِسْتَقَامَتْ عَلَى الحَقِّ", translation: "Haqqda düz qaldı." }
            ]},
            present: { arabic: "يَسْتَقِيمُ", translation: "düz yolda olur", examples: [
                { arabic: "يَسْتَقِيمُ عَلَى أَمْرِ اللَّهِ", translation: "Allahın əmrində düz qalır." },
                { arabic: "يَسْتَقِيمُ فِي أَقْوَالِهِ", translation: "Sözlərində düz olur." }
            ]},
            imperative: { arabic: "اِسْتَقِمْ", translation: "düz yolda ol!", examples: [
                { arabic: "اِسْتَقِمْ كَمَا أُمِرْتَ", translation: "Əmr olunduğu kimi düz ol!" },
                { arabic: "اِسْتَقِمْ عَلَى الطَّاعَةِ", translation: "İtaətdə düz qal!" }
            ]}
        }
    },
{
        id: 99,
        arabic: "دَافَعَ",
        meaning: "müdafiə etmək",
        forms: {
            past: { arabic: "دَافَعَ", translation: "müdafiə etdi", examples: [
                { arabic: "دَافَعَ عَنْ دِينِهِ", translation: "Dini uğrunda müdafiə etdi." },
                { arabic: "دَافَعَتْ عَنْ أَهْلِهَا", translation: "Ailəsini müdafiə etdi." }
            ]},
            present: { arabic: "يُدَافِعُ", translation: "müdafiə edir", examples: [
                { arabic: "يُدَافِعُ عَنِ الإِسْلَامِ", translation: "İslamı müdafiə edir." },
                { arabic: "يُدَافِعُ عَنِ المَظْلُومِينَ", translation: "Məzlumları müdafiə edir." }
            ]},
            imperative: { arabic: "دَافِعْ", translation: "müdafiə et!", examples: [
                { arabic: "دَافِعْ عَنْ دِينِكَ", translation: "Dinini müdafiə et!" },
                { arabic: "دَافِعْ عَنِ الحَقِّ", translation: "Haqqı müdafiə et!" }
            ]}
        }
    },
{
        id: 100,
        arabic: "اِنْتَصَرَ",
        meaning: "qalib gəlmək, zəfər çalmaq",
        forms: {
            past: { arabic: "اِنْتَصَرَ", translation: "qalib gəldi", examples: [
                { arabic: "اِنْتَصَرَ المُسْلِمُونَ", translation: "Müsəlmanlar qalib gəldi." },
                { arabic: "اِنْتَصَرَتِ الحَقُّ", translation: "Haqq qalib gəldi." }
            ]},
            present: { arabic: "يَنْتَصِرُ", translation: "qalib gəlir", examples: [
                { arabic: "يَنْتَصِرُ الحَقُّ", translation: "Haqq qalib gəlir." },
                { arabic: "يَنْتَصِرُ فِي كُلِّ مَعْرَكَةٍ", translation: "Hər döyüşdə qalib gəlir." }
            ]},
            imperative: { arabic: "اِنْتَصِرْ", translation: "qalib gəl!", examples: [
                { arabic: "اِنْتَصِرْ بِالصَّبْرِ", translation: "Səbirlə qalib gəl!" },
                { arabic: "اِنْتَصِرْ لِلْحَقِّ", translation: "Haqq uğrunda qalib gəl!" }
            ]}
        }
    },
{
        id: 101,
        arabic: "تَزَوَّجَ",
        meaning: "evlənmək",
        forms: {
            past: { arabic: "تَزَوَّجَ", translation: "evləndi", examples: [
                { arabic: "تَزَوَّجَ امْرَأَةً صَالِحَةً", translation: "Saleh bir qadınla evləndi." },
                { arabic: "تَزَوَّجَتْ رَجُلًا تَقِيًّا", translation: "Təqvalı bir kişi ilə evləndi." }
            ]},
            present: { arabic: "يَتَزَوَّجُ", translation: "evlənir", examples: [
                { arabic: "يَتَزَوَّجُ لِيُكْمِلَ دِينَهُ", translation: "Dini tamamlamaq üçün evlənir." },
                { arabic: "يَتَزَوَّجُ عِنْدَمَا يَسْتَطِيعُ", translation: "İmkanı olduqda evlənir." }
            ]},
            imperative: { arabic: "تَزَوَّجْ", translation: "evlən!", examples: [
                { arabic: "تَزَوَّجْ بِالصَّالِحَةِ", translation: "Saleh qadınla evlən!" },
                { arabic: "تَزَوَّجْ لِتَعِفَّ نَفْسَكَ", translation: "Nəfsini qorumaq üçün evlən!" }
            ]}
        }
    },
{
        id: 102,
        arabic: "طَلَّقَ",
        meaning: "boşamaq",
        forms: {
            past: { arabic: "طَلَّقَ", translation: "boşadı", examples: [
                { arabic: "طَلَّقَ زَوْجَتَهُ بِإِحْسَانٍ", translation: "Zövcəsini gözəlliklə boşadı." },
                { arabic: "طَلَّقَ فِي وَقْتِ الطُّهْرِ", translation: "Təharət vaxtı boşadı." }
            ]},
            present: { arabic: "يُطَلِّقُ", translation: "boşayır", examples: [
                { arabic: "يُطَلِّقُ لِلضَّرُورَةِ", translation: "Zərurətə görə boşayır." },
                { arabic: "يُطَلِّقُ وَهُوَ كَارِهٌ", translation: "İstəməyə-istəməyə boşayır." }
            ]},
            imperative: { arabic: "طَلِّقْ", translation: "boşa!", examples: [
                { arabic: "طَلِّقْ بِإِحْسَانٍ", translation: "Gözəlliklə boşa!" },
                { arabic: "طَلِّقْ فِي الوَقْتِ الشَّرْعِيِّ", translation: "Şəriətə uyğun vaxtda boşa!" }
            ]}
        }
    },
{
        id: 103,
        arabic: "رَبَّى",
        meaning: "tərbiyə etmək",
        forms: {
            past: { arabic: "رَبَّى", translation: "tərbiyə etdi", examples: [
                { arabic: "رَبَّى أَوْلَادَهُ عَلَى الإِسْلَامِ", translation: "Övladlarını İslam üzrə tərbiyə etdi." },
                { arabic: "رَبَّتْ بَنَاتِهَا عَلَى الحِجَابِ", translation: "Qızlarını hicaba tərbiyə etdi." }
            ]},
            present: { arabic: "يُرَبِّي", translation: "tərbiyə edir", examples: [
                { arabic: "يُرَبِّي أَبْنَاءَهُ عَلَى القُرْآنِ", translation: "Oğullarını Quranla tərbiyə edir." },
                { arabic: "يُرَبِّي نَفْسَهُ عَلَى الصَّبْرِ", translation: "Özünü səbirə alışdırır." }
            ]},
            imperative: { arabic: "رَبِّ", translation: "tərbiyə et!", examples: [
                { arabic: "رَبِّ أَوْلَادَكَ عَلَى الخَيْرِ", translation: "Övladlarını xeyir üzrə tərbiyə et!" },
                { arabic: "رَبِّ نَفْسَكَ عَلَى الطَّاعَةِ", translation: "Özünü itaətə alışdır!" }
            ]}
        }
    },
{
        id: 104,
        arabic: "حَضَرَ",
        meaning: "iştirak etmək, hazır olmaq",
        forms: {
            past: { arabic: "حَضَرَ", translation: "iştirak etdi", examples: [
                { arabic: "حَضَرَ دَرْسَ العِلْمِ", translation: "Elm dərsinə qatıldı." },
                { arabic: "حَضَرَتْ مَجْلِسَ الذِّكْرِ", translation: "Zikr məclisinə qatıldı." }
            ]},
            present: { arabic: "يَحْضُرُ", translation: "iştirak edir", examples: [
                { arabic: "يَحْضُرُ الصَّلَوَاتِ فِي المَسْجِدِ", translation: "Məsciddə namazlara qatılır." },
                { arabic: "يَحْضُرُ دُرُوسَ العَقِيدَةِ", translation: "Əqidə dərslərinə qatılır." }
            ]},
            imperative: { arabic: "اُحْضُرْ", translation: "iştirak et!", examples: [
                { arabic: "اُحْضُرْ مَجْلِسَ العِلْمِ", translation: "Elm məclisinə qatıl!" },
                { arabic: "اُحْضُرْ صَلَاةَ الجَمَاعَةِ", translation: "Camaat namazına gəl!" }
            ]}
        }
    },
{
        id: 105,
        arabic: "غَابَ",
        meaning: "qeyb olmaq, iştirak etməmək",
        forms: {
            past: { arabic: "غَابَ", translation: "qatılmadı", examples: [
                { arabic: "غَابَ عَنْ دَرْسِ العِلْمِ", translation: "Elm dərsindən qaldı." },
                { arabic: "غَابَتْ عَنْ صَلَاةِ الجَمَاعَةِ", translation: "Camaat namazından qaldı." }
            ]},
            present: { arabic: "يَغِيبُ", translation: "qatılmır", examples: [
                { arabic: "يَغِيبُ كَثِيرًا عَنِ الدُّرُوسِ", translation: "Dərslərdən çox qalır." },
                { arabic: "يَغِيبُ عَنِ المَسْجِدِ", translation: "Məsciddən uzaq qalır." }
            ]},
            imperative: { arabic: "لَا تَغِبْ", translation: "qalma, iştirak et!", examples: [
                { arabic: "لَا تَغِبْ عَنْ صَلَاةِ الجَمَاعَةِ", translation: "Camaat namazından qalma!" },
                { arabic: "لَا تَغِبْ عَنْ مَجْلِسِ العِلْمِ", translation: "Elm məclisindən qalma!" }
            ]}
        }
    },
{
        id: 106,
        arabic: "حَاسَبَ",
        meaning: "hesab etmək, özünü sorğu-sual etmək",
        forms: {
            past: { arabic: "حَاسَبَ", translation: "hesab etdi", examples: [
                { arabic: "حَاسَبَ نَفْسَهُ", translation: "Özünü hesaba çəkdi." },
                { arabic: "حَاسَبَتْ قَلْبَهَا", translation: "Qəlbini sorğu-sual etdi." }
            ]},
            present: { arabic: "يُحَاسِبُ", translation: "hesab edir", examples: [
                { arabic: "يُحَاسِبُ نَفْسَهُ كُلَّ يَوْمٍ", translation: "Hər gün özünü hesaba çəkir." },
                { arabic: "يُحَاسِبُ نَفْسَهُ قَبْلَ أَنْ يُحَاسَبَ", translation: "Hesaba çəkilməzdən əvvəl özünü sorğu-sual edir." }
            ]},
            imperative: { arabic: "حَاسِبْ", translation: "hesab et!", examples: [
                { arabic: "حَاسِبْ نَفْسَكَ قَبْلَ يَوْمِ الحِسَابِ", translation: "Hesab günündən əvvəl özünü sorğu-sual et!" },
                { arabic: "حَاسِبْ نَفْسَكَ عَلَى كُلِّ عَمَلٍ", translation: "Hər əmələ görə özünü hesaba çək!" }
            ]}
        }
    },
{
        id: 107,
        arabic: "أَصْلَحَ",
        meaning: "islah etmək, düzəltmək",
        forms: {
            past: { arabic: "أَصْلَحَ", translation: "düzəltdi", examples: [
                { arabic: "أَصْلَحَ بَيْنَ النَّاسِ", translation: "İnsanlar arasında barışdırdı." },
                { arabic: "أَصْلَحَتْ نَفْسَهَا", translation: "Özünü islah etdi." }
            ]},
            present: { arabic: "يُصْلِحُ", translation: "islah edir", examples: [
                { arabic: "يُصْلِحُ بَيْنَ الإِخْوَةِ", translation: "Qardaşlar arasında islah edir." },
                { arabic: "يُصْلِحُ عَمَلَهُ", translation: "Əməlini düzəldir." }
            ]},
            imperative: { arabic: "أَصْلِحْ", translation: "islah et!", examples: [
                { arabic: "أَصْلِحْ بَيْنَ النَّاسِ", translation: "İnsanlar arasında islah et!" },
                { arabic: "أَصْلِحْ نَفْسَكَ أَوَّلًا", translation: "Əvvəlcə özünü islah et!" }
            ]}
        }
    },
{
        id: 108,
        arabic: "حَكَمَ",
        meaning: "hökm etmək, idarə etmək",
        forms: {
            past: { arabic: "حَكَمَ", translation: "hökm etdi", examples: [
                { arabic: "حَكَمَ بِالْعَدْلِ", translation: "Ədalətlə hökm etdi." },
                { arabic: "حَكَمَتِ الشَّرِيعَةُ", translation: "Şəriət hökm etdi." }
            ]},
            present: { arabic: "يَحْكُمُ", translation: "hökm edir", examples: [
                { arabic: "يَحْكُمُ بَيْنَ النَّاسِ بِالحَقِّ", translation: "İnsanlar arasında haqq ilə hökm edir." },
                { arabic: "يَحْكُمُ بِمَا أَنْزَلَ اللَّهُ", translation: "Allahın nazil etdiyi ilə hökm edir." }
            ]},
            imperative: { arabic: "اُحْكُمْ", translation: "hökm et!", examples: [
                { arabic: "اُحْكُمْ بَيْنَ النَّاسِ بِالعَدْلِ", translation: "İnsanlar arasında ədalətlə hökm et!" },
                { arabic: "اُحْكُمْ بِمَا أَنْزَلَ اللَّهُ", translation: "Allahın nazil etdiyi ilə hökm et!" }
            ]}
        }
    },
{
        id: 109,
        arabic: "قَاتَلَ",
        meaning: "döyüşmək, cihad etmək",
        forms: {
            past: { arabic: "قَاتَلَ", translation: "döyüşdü", examples: [
                { arabic: "قَاتَلَ فِي سَبِيلِ اللَّهِ", translation: "Allah yolunda döyüşdü." },
                { arabic: "قَاتَلَتِ الطَّاغُوتَ", translation: "Tağuta qarşı vuruşdu." }
            ]},
            present: { arabic: "يُقَاتِلُ", translation: "döyüşür", examples: [
                { arabic: "يُقَاتِلُ فِي سَبِيلِ اللَّهِ", translation: "Allah yolunda vuruşur." },
                { arabic: "يُقَاتِلُ لِإِعْلَاءِ كَلِمَةِ اللَّهِ", translation: "Allahın sözünü ucaltmaq üçün vuruşur." }
            ]},
            imperative: { arabic: "قَاتِلْ", translation: "döyüş!", examples: [
                { arabic: "قَاتِلْ فِي سَبِيلِ اللَّهِ", translation: "Allah yolunda döyüş!" },
                { arabic: "قَاتِلْ لِإِعْلَاءِ كَلِمَةِ اللَّهِ", translation: "Allahın sözünü ucaltmaq üçün döyüş!" }
            ]}
        }
    },
{
        id: 110,
        arabic: "سَاهَمَ",
        meaning: "iştirak etmək, pay almaq",
        forms: {
            past: { arabic: "سَاهَمَ", translation: "pay aldı", examples: [
                { arabic: "سَاهَمَ فِي بِنَاءِ المَسْجِدِ", translation: "Məscidin tikintisində payı oldu." },
                { arabic: "سَاهَمَتْ فِي الأَعْمَالِ الخَيْرِيَّةِ", translation: "Xeyriyyə işlərində iştirak etdi." }
            ]},
            present: { arabic: "يُسَاهِمُ", translation: "iştirak edir", examples: [
                { arabic: "يُسَاهِمُ فِي نَشْرِ العِلْمِ", translation: "Elmin yayılmasında iştirak edir." },
                { arabic: "يُسَاهِمُ فِي كَفَالَةِ الأَيْتَامِ", translation: "Yetimlərin himayəsində iştirak edir." }
            ]},
            imperative: { arabic: "سَاهِمْ", translation: "iştirak et!", examples: [
                { arabic: "سَاهِمْ فِي الخَيْرِ", translation: "Xeyirdə iştirak et!" },
                { arabic: "سَاهِمْ فِي بِنَاءِ المَسَاجِدِ", translation: "Məscidlərin tikintisində iştirak et!" }
            ]}
        }
    },
{
        id: 111,
        arabic: "بَادَرَ",
        meaning: "təşəbbüs göstərmək, önə keçmək",
        forms: {
            past: { arabic: "بَادَرَ", translation: "təşəbbüs etdi", examples: [
                { arabic: "بَادَرَ إِلَى الخَيْرِ", translation: "Xeyirə tələsdi." },
                { arabic: "بَادَرَتْ إِلَى الصَّلَاةِ", translation: "Namaza tələsdi." }
            ]},
            present: { arabic: "يُبَادِرُ", translation: "təşəbbüs edir", examples: [
                { arabic: "يُبَادِرُ إِلَى فِعْلِ الخَيْرِ", translation: "Xeyir iş görməyə tələsir." },
                { arabic: "يُبَادِرُ بِالتَّوْبَةِ", translation: "Tövbəyə tələsir." }
            ]},
            imperative: { arabic: "بَادِرْ", translation: "tələs!", examples: [
                { arabic: "بَادِرْ إِلَى التَّوْبَةِ", translation: "Tövbəyə tələs!" },
                { arabic: "بَادِرْ إِلَى الخَيْرِ", translation: "Xeyirə tələs!" }
            ]}
        }
    },
{
        id: 112,
        arabic: "تَأَخَّرَ",
        meaning: "gecikmək",
        forms: {
            past: { arabic: "تَأَخَّرَ", translation: "gecikdi", examples: [
                { arabic: "تَأَخَّرَ عَنِ الصَّلَاةِ", translation: "Namaza gecikdi." },
                { arabic: "تَأَخَّرَتْ عَنِ الدَّرْسِ", translation: "Dərsə gecikdi." }
            ]},
            present: { arabic: "يَتَأَخَّرُ", translation: "gecikir", examples: [
                { arabic: "يَتَأَخَّرُ فِي أَدَاءِ الوَاجِبِ", translation: "Tapşırığı yerinə yetirməkdə gecikir." },
                { arabic: "يَتَأَخَّرُ عَنِ المَوَاعِيدِ", translation: "Görüşlərə gecikir." }
            ]},
            imperative: { arabic: "لَا تَتَأَخَّرْ", translation: "gecikmə!", examples: [
                { arabic: "لَا تَتَأَخَّرْ عَنِ الصَّلَاةِ", translation: "Namaza gecikmə!" },
                { arabic: "لَا تَتَأَخَّرْ عَنِ الخَيْرِ", translation: "Xeyirdən geri qalma!" }
            ]}
        }
    },
{
        id: 113,
        arabic: "تَقَدَّمَ",
        meaning: "irəli getmək, tərəqqi etmək",
        forms: {
            past: { arabic: "تَقَدَّمَ", translation: "irəli getdi", examples: [
                { arabic: "تَقَدَّمَ فِي العِلْمِ", translation: "Elmdə irəli getdi." },
                { arabic: "تَقَدَّمَتِ الأُمَّةُ", translation: "Ümmət tərəqqi etdi." }
            ]},
            present: { arabic: "يَتَقَدَّمُ", translation: "irəli gedir", examples: [
                { arabic: "يَتَقَدَّمُ فِي طَرِيقِ الهُدَى", translation: "Hidayət yolunda irəli gedir." },
                { arabic: "يَتَقَدَّمُ نَحْوَ الخَيْرِ", translation: "Xeyirə doğru irəliləyir." }
            ]},
            imperative: { arabic: "تَقَدَّمْ", translation: "irəli get!", examples: [
                { arabic: "تَقَدَّمْ فِي العِلْمِ", translation: "Elmdə irəli get!" },
                { arabic: "تَقَدَّمْ إِلَى الأَمَامِ", translation: "İrəli get!" }
            ]}
        }
    },
{
        id: 114,
        arabic: "حَرَصَ",
        meaning: "həris olmaq, can atmaq",
        forms: {
            past: { arabic: "حَرَصَ", translation: "can atdı", examples: [
                { arabic: "حَرَصَ عَلَى طَلَبِ العِلْمِ", translation: "Elm öyrənməyə can atdı." },
                { arabic: "حَرَصَتْ عَلَى الصَّلَاةِ", translation: "Namaza həris oldu." }
            ]},
            present: { arabic: "يَحْرِصُ", translation: "can atır", examples: [
                { arabic: "يَحْرِصُ عَلَى مَا يَنْفَعُهُ", translation: "Faydalı olana can atır." },
                { arabic: "يَحْرِصُ عَلَى الخَيْرِ", translation: "Xeyirə hərisdir." }
            ]},
            imperative: { arabic: "اِحْرِصْ", translation: "can at!", examples: [
                { arabic: "اِحْرِصْ عَلَى مَا يَنْفَعُكَ", translation: "Sənə fayda verənə can at!" },
                { arabic: "اِحْرِصْ عَلَى الصَّلَاةِ", translation: "Namaza həris ol!" }
            ]}
        }
    },
{
        id: 115,
        arabic: "اِهْتَمَّ",
        meaning: "maraqlanmaq, diqqət yetirmək",
        forms: {
            past: { arabic: "اِهْتَمَّ", translation: "diqqət yetirdi", examples: [
                { arabic: "اِهْتَمَّ بِأَمْرِ أَخِيهِ", translation: "Qardaşının işinə diqqət yetirdi." },
                { arabic: "اِهْتَمَّتْ بِالتَّعْلِيمِ", translation: "Təhsilə əhəmiyyət verdi." }
            ]},
            present: { arabic: "يَهْتَمُّ", translation: "diqqət yetirir", examples: [
                { arabic: "يَهْتَمُّ بِحِفْظِ القُرْآنِ", translation: "Quranı əzbərləməyə diqqət yetirir." },
                { arabic: "يَهْتَمُّ بِالفُقَرَاءِ", translation: "Kasıblara diqqət göstərir." }
            ]},
            imperative: { arabic: "اِهْتَمَّ", translation: "diqqət yetir!", examples: [
                { arabic: "اِهْتَمَّ بِصَلَاتِكَ", translation: "Namazına diqqət et!" },
                { arabic: "اِهْتَمَّ بِأَهْلِكَ", translation: "Ailənə diqqət göstər!" }
            ]}
        }
    },
{
        id: 116,
        arabic: "تَأَدَّبَ",
        meaning: "ədəb öyrənmək, ədəbli olmaq",
        forms: {
            past: { arabic: "تَأَدَّبَ", translation: "ədəbləndi", examples: [
                { arabic: "تَأَدَّبَ بِآدَابِ الإِسْلَامِ", translation: "İslam ədəbləri ilə ədəbləndi." },
                { arabic: "تَأَدَّبَتْ مَعَ وَالِدَيْهَا", translation: "Valideynləri ilə ədəbli oldu." }
            ]},
            present: { arabic: "يَتَأَدَّبُ", translation: "ədəblənir", examples: [
                { arabic: "يَتَأَدَّبُ بِآدَابِ النَّبِيِّ", translation: "Peyğəmbərin ədəbləri ilə ədəblənir." },
                { arabic: "يَتَأَدَّبُ فِي مَجْلِسِ العِلْمِ", translation: "Elm məclisində ədəbli olur." }
            ]},
            imperative: { arabic: "تَأَدَّبْ", translation: "ədəbli ol!", examples: [
                { arabic: "تَأَدَّبْ فِي حَلَقَةِ العِلْمِ", translation: "Elm halqasında ədəbli ol!" },
                { arabic: "تَأَدَّبْ مَعَ كِبَارِ السِّنِّ", translation: "Böyüklərlə ədəbli ol!" }
            ]}
        }
    },
{
        id: 117,
        arabic: "شَجَّعَ",
        meaning: "təşviq etmək, ruhlandırmaq",
        forms: {
            past: { arabic: "شَجَّعَ", translation: "təşviq etdi", examples: [
                { arabic: "شَجَّعَ أَخَاهُ عَلَى الخَيْرِ", translation: "Qardaşını xeyirə təşviq etdi." },
                { arabic: "شَجَّعَتْ أَوْلَادَهَا عَلَى الصَّلَاةِ", translation: "Övladlarını namaza təşviq etdi." }
            ]},
            present: { arabic: "يُشَجِّعُ", translation: "təşviq edir", examples: [
                { arabic: "يُشَجِّعُ عَلَى حِفْظِ القُرْآنِ", translation: "Quranı əzbərləməyə təşviq edir." },
                { arabic: "يُشَجِّعُ النَّاسَ عَلَى الصَّدَقَةِ", translation: "İnsanları sədəqəyə təşviq edir." }
            ]},
            imperative: { arabic: "شَجِّعْ", translation: "təşviq et!", examples: [
                { arabic: "شَجِّعْ أَخَاكَ عَلَى الخَيْرِ", translation: "Qardaşını xeyirə təşviq et!" },
                { arabic: "شَجِّعْ عَلَى طَلَبِ العِلْمِ", translation: "Elm öyrənməyə təşviq et!" }
            ]}
        }
    },
{
        id: 118,
        arabic: "حَثَّ",
        meaning: "təşviq etmək, həvəsləndirmək",
        forms: {
            past: { arabic: "حَثَّ", translation: "təşviq etdi", examples: [
                { arabic: "حَثَّ عَلَى البِرِّ", translation: "Yaxşılığa təşviq etdi." },
                { arabic: "حَثَّتْ عَلَى طَلَبِ العِلْمِ", translation: "Elm öyrənməyə həvəsləndirdi." }
            ]},
            present: { arabic: "يَحُثُّ", translation: "təşviq edir", examples: [
                { arabic: "يَحُثُّ عَلَى الصَّدَقَةِ", translation: "Sədəqə verməyə təşviq edir." },
                { arabic: "يَحُثُّ عَلَى الصِّدْقِ", translation: "Doğruluğa təşviq edir." }
            ]},
            imperative: { arabic: "حُثَّ", translation: "təşviq et!", examples: [
                { arabic: "حُثَّ النَّاسَ عَلَى الخَيْرِ", translation: "İnsanları xeyirə təşviq et!" },
                { arabic: "حُثَّ عَلَى الصَّلَاةِ", translation: "Namaza təşviq et!" }
            ]}
        }
    },
{
        id: 119,
        arabic: "ذَبَحَ",
        meaning: "kəsmək, qurban kəsmək",
        forms: {
            past: { arabic: "ذَبَحَ", translation: "kəsdi", examples: [
                { arabic: "ذَبَحَ أُضْحِيَتَهُ", translation: "Qurbanını kəsdi." },
                { arabic: "ذَبَحَتْ شَاةً لِلضُّيُوفِ", translation: "Qonaqlar üçün qoyun kəsdi." }
            ]},
            present: { arabic: "يَذْبَحُ", translation: "kəsir", examples: [
                { arabic: "يَذْبَحُ الأُضْحِيَةَ", translation: "Qurban kəsir." },
                { arabic: "يَذْبَحُ عَلَى الطَّرِيقَةِ الشَّرْعِيَّةِ", translation: "Şəriətə uyğun kəsir." }
            ]},
            imperative: { arabic: "اِذْبَحْ", translation: "kəs!", examples: [
                { arabic: "اِذْبَحْ بِاسْمِ اللَّهِ", translation: "Allahın adı ilə kəs!" },
                { arabic: "اِذْبَحْ أُضْحِيَتَكَ", translation: "Qurbanını kəs!" }
            ]}
        }
    },
{
        id: 120,
        arabic: "عَقَّ",
        meaning: "valideynə asi olmaq (əks mənada)",
        forms: {
            past: { arabic: "عَقَّ", translation: "asi oldu", examples: [
                { arabic: "عَقَّ وَالِدَيْهِ", translation: "Valideynlərinə asi oldu." },
                { arabic: "عَقَّ أُمَّهُ", translation: "Anasına asi oldu." }
            ]},
            present: { arabic: "يَعُقُّ", translation: "asi olur", examples: [
                { arabic: "يَعُقُّ وَالِدَيْهِ", translation: "Valideynlərinə asi olur." },
                { arabic: "يَعُقُّ بِسَبَبِ الجَهْلِ", translation: "Cəhalət səbəbi ilə asi olur." }
            ]},
            imperative: { arabic: "لَا تَعُقَّ", translation: "asi olma!", examples: [
                { arabic: "لَا تَعُقَّ وَالِدَيْكَ", translation: "Valideynlərinə asi olma!" },
                { arabic: "لَا تَعُقَّ أُمَّكَ", translation: "Anana asi olma!" }
            ]}
        }
    },
{
        id: 121,
        arabic: "وَقَّرَ",
        meaning: "ehtiram etmək, hörmət göstərmək",
        forms: {
            past: { arabic: "وَقَّرَ", translation: "hörmət etdi", examples: [
                { arabic: "وَقَّرَ كَبِيرَ السِّنِّ", translation: "Yaşlıya hörmət etdi." },
                { arabic: "وَقَّرَتْ عُلَمَاءَ الإِسْلَامِ", translation: "İslam alimlərinə hörmət etdi." }
            ]},
            present: { arabic: "يُوَقِّرُ", translation: "hörmət edir", examples: [
                { arabic: "يُوَقِّرُ وَالِدَيْهِ", translation: "Valideynlərinə hörmət edir." },
                { arabic: "يُوَقِّرُ العُلَمَاءَ", translation: "Alimlərə hörmət edir." }
            ]},
            imperative: { arabic: "وَقِّرْ", translation: "hörmət et!", examples: [
                { arabic: "وَقِّرْ كَبِيرَكَ", translation: "Böyüyünə hörmət et!" },
                { arabic: "وَقِّرْ وَالِدَيْكَ", translation: "Valideynlərinə hörmət et!" }
            ]}
        }
    },
{
        id: 122,
        arabic: "اِحْتَرَمَ",
        meaning: "ehtiram etmək, sayğı göstərmək",
        forms: {
            past: { arabic: "اِحْتَرَمَ", translation: "sayğı göstərdi", examples: [
                { arabic: "اِحْتَرَمَ مُعَلِّمَهُ", translation: "Müəlliminə hörmət etdi." },
                { arabic: "اِحْتَرَمَتْ زَوْجَهَا", translation: "Ərinə hörmət etdi." }
            ]},
            present: { arabic: "يَحْتَرِمُ", translation: "sayğı göstərir", examples: [
                { arabic: "يَحْتَرِمُ كِبَارَ السِّنِّ", translation: "Yaşlılara hörmət edir." },
                { arabic: "يَحْتَرِمُ الجِيرَانَ", translation: "Qonşulara hörmət edir." }
            ]},
            imperative: { arabic: "اِحْتَرِمْ", translation: "hörmət et!", examples: [
                { arabic: "اِحْتَرِمْ وَالِدَيْكَ", translation: "Valideynlərinə hörmət et!" },
                { arabic: "اِحْتَرِمْ مُعَلِّمَكَ", translation: "Müəlliminə hörmət et!" }
            ]}
        }
    },
{
        id: 123,
        arabic: "أَكْرَمَ",
        meaning: "ehtiram etmək, ikram göstərmək",
        forms: {
            past: { arabic: "أَكْرَمَ", translation: "ikram etdi", examples: [
                { arabic: "أَكْرَمَ ضَيْفَهُ", translation: "Qonağına ikram etdi." },
                { arabic: "أَكْرَمَتِ الفَقِيرَ", translation: "Kasıba hörmət etdi." }
            ]},
            present: { arabic: "يُكْرِمُ", translation: "ikram edir", examples: [
                { arabic: "يُكْرِمُ الضُّيُوفَ", translation: "Qonaqlara ikram edir." },
                { arabic: "يُكْرِمُ الوَالِدَيْنِ", translation: "Valideynlərə hörmət edir." }
            ]},
            imperative: { arabic: "أَكْرِمْ", translation: "ikram et!", examples: [
                { arabic: "أَكْرِمْ ضَيْفَكَ", translation: "Qonağına ikram et!" },
                { arabic: "أَكْرِمْ وَالِدَيْكَ", translation: "Valideynlərinə hörmət et!" }
            ]}
        }
    },
{
        id: 124,
        arabic: "أَحْسَنَ",
        meaning: "yaxşılıq etmək",
        forms: {
            past: { arabic: "أَحْسَنَ", translation: "yaxşılıq etdi", examples: [
                { arabic: "أَحْسَنَ إِلَى الجَارِ", translation: "Qonşusuna yaxşılıq etdi." },
                { arabic: "أَحْسَنَتْ إِلَى الأَيْتَامِ", translation: "Yetimlərə yaxşılıq etdi." }
            ]},
            present: { arabic: "يُحْسِنُ", translation: "yaxşılıq edir", examples: [
                { arabic: "يُحْسِنُ فِي عَمَلِهِ", translation: "İşində yaxşılıq edir." },
                { arabic: "يُحْسِنُ إِلَى النَّاسِ", translation: "İnsanlara yaxşılıq edir." }
            ]},
            imperative: { arabic: "أَحْسِنْ", translation: "yaxşılıq et!", examples: [
                { arabic: "أَحْسِنْ إِلَى النَّاسِ", translation: "İnsanlara yaxşılıq et!" },
                { arabic: "أَحْسِنْ إِلَى وَالِدَيْكَ", translation: "Valideynlərinə yaxşılıq et!" }
            ]}
        }
    },
{
        id: 125,
        arabic: "صَاحَبَ",
        meaning: "yoldaş olmaq, dostluq etmək",
        forms: {
            past: { arabic: "صَاحَبَ", translation: "yoldaş oldu", examples: [
                { arabic: "صَاحَبَ الصَّالِحِينَ", translation: "Salehlərlə yoldaş oldu." },
                { arabic: "صَاحَبَتْ نِسَاءً مُؤْمِنَاتٍ", translation: "Mömin qadınlarla dostluq etdi." }
            ]},
            present: { arabic: "يُصَاحِبُ", translation: "yoldaş olur", examples: [
                { arabic: "يُصَاحِبُ الأَخْيَارَ", translation: "Yaxşılarla dostluq edir." },
                { arabic: "يُصَاحِبُ أَهْلَ العِلْمِ", translation: "Elm əhli ilə dostluq edir." }
            ]},
            imperative: { arabic: "صَاحِبْ", translation: "yoldaş ol!", examples: [
                { arabic: "صَاحِبِ الصَّالِحِينَ", translation: "Salehlərlə yoldaş ol!" },
                { arabic: "صَاحِبْ أَهْلَ الخَيْرِ", translation: "Xeyir əhli ilə dostluq et!" }
            ]}
        }
    },
{
        id: 126,
        arabic: "اِجْتَمَعَ",
        meaning: "toplanmaq, bir araya gəlmək",
        forms: {
            past: { arabic: "اِجْتَمَعَ", translation: "toplandı", examples: [
                { arabic: "اِجْتَمَعَ النَّاسُ فِي المَسْجِدِ", translation: "İnsanlar məsciddə toplandı." },
                { arabic: "اِجْتَمَعَتِ العَائِلَةُ", translation: "Ailə bir araya gəldi." }
            ]},
            present: { arabic: "يَجْتَمِعُ", translation: "toplanır", examples: [
                { arabic: "يَجْتَمِعُ المُسْلِمُونَ لِلصَّلَاةِ", translation: "Müsəlmanlar namaz üçün toplanır." },
                { arabic: "يَجْتَمِعُ الأَهْلُ يَوْمَ الجُمُعَةِ", translation: "Cümə günü ailə toplanır." }
            ]},
            imperative: { arabic: "اِجْتَمِعْ", translation: "toplan!", examples: [
                { arabic: "اِجْتَمِعْ مَعَ إِخْوَتِكَ", translation: "Qardaşlarınla toplan!" },
                { arabic: "اِجْتَمِعْ عَلَى الخَيْرِ", translation: "Xeyirdə birləş!" }
            ]}
        }
    },
{
        id: 127,
        arabic: "تَفَرَّقَ",
        meaning: "dağılmaq, ayrılmaq",
        forms: {
            past: { arabic: "تَفَرَّقَ", translation: "dağıldı", examples: [
                { arabic: "تَفَرَّقَ النَّاسُ بَعْدَ الصَّلَاةِ", translation: "Namazdan sonra insanlar dağıldı." },
                { arabic: "تَفَرَّقَتِ الجَمَاعَةُ", translation: "Camaat dağıldı." }
            ]},
            present: { arabic: "يَتَفَرَّقُ", translation: "dağılır", examples: [
                { arabic: "يَتَفَرَّقُ النَّاسُ بَعْدَ الدَّرْسِ", translation: "Dərsdən sonra insanlar dağılır." },
                { arabic: "يَتَفَرَّقُونَ فِي الأَرْضِ", translation: "Yer üzündə dağılırlar." }
            ]},
            imperative: { arabic: "لَا تَتَفَرَّقْ", translation: "dağılma!", examples: [
                { arabic: "لَا تَتَفَرَّقُوا", translation: "Dağılmayın!" },
                { arabic: "لَا تَتَفَرَّقْ عَنِ الجَمَاعَةِ", translation: "Camaatdan ayrılma!" }
            ]}
        }
    },
{
        id: 128,
        arabic: "تَعَاوَنَ",
        meaning: "əməkdaşlıq etmək, bir-birinə kömək etmək",
        forms: {
            past: { arabic: "تَعَاوَنَ", translation: "əməkdaşlıq etdi", examples: [
                { arabic: "تَعَاوَنَ المُسْلِمُونَ عَلَى الخَيْرِ", translation: "Müsəlmanlar xeyirdə əməkdaşlıq etdi." },
                { arabic: "تَعَاوَنَتِ الإِخْوَةُ فِي العَمَلِ", translation: "Qardaşlar işdə bir-birinə kömək etdi." }
            ]},
            present: { arabic: "يَتَعَاوَنُ", translation: "əməkdaşlıq edir", examples: [
                { arabic: "يَتَعَاوَنُونَ عَلَى البِرِّ وَالتَّقْوَى", translation: "Yaxşılıq və təqvada bir-birinə kömək edirlər." },
                { arabic: "يَتَعَاوَنُ مَعَ إِخْوَتِهِ", translation: "Qardaşları ilə əməkdaşlıq edir." }
            ]},
            imperative: { arabic: "تَعَاوَنْ", translation: "əməkdaşlıq et!", examples: [
                { arabic: "تَعَاوَنُوا عَلَى البِرِّ", translation: "Yaxşılıqda əməkdaşlıq edin!" },
                { arabic: "تَعَاوَنْ مَعَ أَخِيكَ", translation: "Qardaşınla əməkdaşlıq et!" }
            ]}
        }
    },
{
        id: 129,
        arabic: "اِفْتَرَقَ",
        meaning: "ayrılmaq, ayrı düşmək",
        forms: {
            past: { arabic: "اِفْتَرَقَ", translation: "ayrıldı", examples: [
                { arabic: "اِفْتَرَقَ الصَّدِيقَانِ", translation: "İki dost ayrıldı." },
                { arabic: "اِفْتَرَقَتِ الجَمَاعَةُ", translation: "Camaat ayrıldı." }
            ]},
            present: { arabic: "يَفْتَرِقُ", translation: "ayrılır", examples: [
                { arabic: "يَفْتَرِقُ النَّاسُ فِي الرَّأْيِ", translation: "İnsanlar fikirdə ayrılır." },
                { arabic: "يَفْتَرِقُونَ فِي الدُّنْيَا وَيَجْتَمِعُونَ فِي الآخِرَةِ", translation: "Dünyada ayrılırlar, axirətdə birləşərlər." }
            ]},
            imperative: { arabic: "لَا تَفْتَرِقْ", translation: "ayrılma!", examples: [
                { arabic: "لَا تَفْتَرِقْ عَنْ أَخِيكَ", translation: "Qardaşından ayrılma!" },
                { arabic: "لَا تَفْتَرِقُوا", translation: "Ayrılmayın!" }
            ]}
        }
    },
{
        id: 130,
        arabic: "اِصْطَلَحَ",
        meaning: "barışmaq, sülh etmək",
        forms: {
            past: { arabic: "اِصْطَلَحَ", translation: "barışdı", examples: [
                { arabic: "اِصْطَلَحَ المُتَخَاصِمَانِ", translation: "Düşmənlər barışdı." },
                { arabic: "اِصْطَلَحَتِ الأُمَّةُ", translation: "Ümmət barışdı." }
            ]},
            present: { arabic: "يَصْطَلِحُ", translation: "barışır", examples: [
                { arabic: "يَصْطَلِحُ النَّاسُ بَعْدَ الخِصَامِ", translation: "Mübahisədən sonra insanlar barışır." },
                { arabic: "يَصْطَلِحُ الإِخْوَةُ", translation: "Qardaşlar barışır." }
            ]},
            imperative: { arabic: "اِصْطَلِحْ", translation: "barış!", examples: [
                { arabic: "اِصْطَلِحْ مَعَ أَخِيكَ", translation: "Qardaşınla barış!" },
                { arabic: "اِصْطَلِحُوا بَيْنَكُمْ", translation: "Aranızda barışın!" }
            ]}
        }
    },
{
        id: 131,
        arabic: "اِخْتَصَمَ",
        meaning: "mübahisə etmək, çəkişmək",
        forms: {
            past: { arabic: "اِخْتَصَمَ", translation: "mübahisə etdi", examples: [
                { arabic: "اِخْتَصَمَ مَعَ جَارِهِ", translation: "Qonşusu ilə mübahisə etdi." },
                { arabic: "اِخْتَصَمَتِ الأُخْتَانِ", translation: "İki bacı mübahisə etdi." }
            ]},
            present: { arabic: "يَخْتَصِمُ", translation: "mübahisə edir", examples: [
                { arabic: "يَخْتَصِمُ عَلَى المَالِ", translation: "Mala görə mübahisə edir." },
                { arabic: "يَخْتَصِمُونَ فِي الأُمُورِ الدُّنْيَوِيَّةِ", translation: "Dünya işlərində mübahisə edirlər." }
            ]},
            imperative: { arabic: "لَا تَخْتَصِمْ", translation: "mübahisə etmə!", examples: [
                { arabic: "لَا تَخْتَصِمْ مَعَ أَخِيكَ", translation: "Qardaşınla mübahisə etmə!" },
                { arabic: "لَا تَخْتَصِمُوا", translation: "Mübahisə etməyin!" }
            ]}
        }
    },
{
        id: 132,
        arabic: "اِسْتَشَارَ",
        meaning: "məsləhət almaq, məşvərət etmək",
        forms: {
            past: { arabic: "اِسْتَشَارَ", translation: "məsləhət aldı", examples: [
                { arabic: "اِسْتَشَارَ أَخَاهُ فِي الأَمْرِ", translation: "İşdə qardaşından məsləhət aldı." },
                { arabic: "اِسْتَشَارَتْ فِي الزَّوَاجِ", translation: "Evlilikdə məsləhət aldı." }
            ]},
            present: { arabic: "يَسْتَشِيرُ", translation: "məsləhət alır", examples: [
                { arabic: "يَسْتَشِيرُ فِي أُمُورِهِ", translation: "İşlərində məsləhət alır." },
                { arabic: "يَسْتَشِيرُ أَهْلَ العِلْمِ", translation: "Elm əhlindən məsləhət alır." }
            ]},
            imperative: { arabic: "اِسْتَشِرْ", translation: "məsləhət al!", examples: [
                { arabic: "اِسْتَشِرْ قَبْلَ أَنْ تَعْمَلَ", translation: "İş görməzdən əvvəl məsləhət al!" },
                { arabic: "اِسْتَشِرْ أَهْلَ الخِبْرَةِ", translation: "Təcrübəli insanlardan məsləhət al!" }
            ]}
        }
    },
{
        id: 133,
        arabic: "أَشَارَ",
        meaning: "işarə etmək, göstərmək",
        forms: {
            past: { arabic: "أَشَارَ", translation: "işarə etdi", examples: [
                { arabic: "أَشَارَ إِلَى الطَّرِيقِ", translation: "Yolu göstərdi." },
                { arabic: "أَشَارَتْ إِلَى الخَيْرِ", translation: "Xeyirə işarə etdi." }
            ]},
            present: { arabic: "يُشِيرُ", translation: "işarə edir", examples: [
                { arabic: "يُشِيرُ إِلَى القِبْلَةِ", translation: "Qibləni göstərir." },
                { arabic: "يُشِيرُ إِلَى الحَقِّ", translation: "Haqqı göstərir." }
            ]},
            imperative: { arabic: "أَشِرْ", translation: "işarə et!", examples: [
                { arabic: "أَشِرْ إِلَى مَا تَرَى", translation: "Gördüyünə işarə et!" },
                { arabic: "أَشِرْ إِلَى الطَّرِيقِ الصَّحِيحِ", translation: "Düzgün yolu göstər!" }
            ]}
        }
    },
{
        id: 134,
        arabic: "اِسْتَقْبَلَ",
        meaning: "qarşılamaq, istiqbal etmək",
        forms: {
            past: { arabic: "اِسْتَقْبَلَ", translation: "qarşıladı", examples: [
                { arabic: "اِسْتَقْبَلَ الضُّيُوفَ", translation: "Qonaqları qarşıladı." },
                { arabic: "اِسْتَقْبَلَتِ الجِيرَانَ", translation: "Qonşuları qarşıladı." }
            ]},
            present: { arabic: "يَسْتَقْبِلُ", translation: "qarşılayır", examples: [
                { arabic: "يَسْتَقْبِلُ القِبْلَةَ", translation: "Qibləyə yönəlir." },
                { arabic: "يَسْتَقْبِلُ الضُّيُوفَ", translation: "Qonaqları qarşılayır." }
            ]},
            imperative: { arabic: "اِسْتَقْبِلْ", translation: "qarşıla!", examples: [
                { arabic: "اِسْتَقْبِلْ ضَيْفَكَ", translation: "Qonağını qarşıla!" },
                { arabic: "اِسْتَقْبِلِ القِبْلَةَ", translation: "Qibləyə yönəl!" }
            ]}
        }
    },
{
        id: 135,
        arabic: "وَدَّعَ",
        meaning: "vidalaşmaq, uğurlamaq",
        forms: {
            past: { arabic: "وَدَّعَ", translation: "vidalaşdı", examples: [
                { arabic: "وَدَّعَ أَخَاهُ المُسَافِرَ", translation: "Səfərə çıxan qardaşı ilə vidalaşdı." },
                { arabic: "وَدَّعَتْ ضَيْفَهَا", translation: "Qonağı ilə vidalaşdı." }
            ]},
            present: { arabic: "يُوَدِّعُ", translation: "vidalaşır", examples: [
                { arabic: "يُوَدِّعُ الحَاجَّ", translation: "Həcci ilə vidalaşır." },
                { arabic: "يُوَدِّعُ أَصْدِقَاءَهُ", translation: "Dostları ilə vidalaşır." }
            ]},
            imperative: { arabic: "وَدِّعْ", translation: "vidalaş!", examples: [
                { arabic: "وَدِّعْ أَخَاكَ", translation: "Qardaşınla vidalaş!" },
                { arabic: "وَدِّعْ مَنْ يُسَافِرُ", translation: "Səfərə çıxanla vidalaş!" }
            ]}
        }
    },
{
        id: 136,
        arabic: "اِسْتَأْذَنَ",
        meaning: "icazə istəmək",
        forms: {
            past: { arabic: "اِسْتَأْذَنَ", translation: "icazə istədi", examples: [
                { arabic: "اِسْتَأْذَنَ قَبْلَ الدُّخُولِ", translation: "Girməzdən əvvəl icazə istədi." },
                { arabic: "اِسْتَأْذَنَتْ لِلْخُرُوجِ", translation: "Çıxmaq üçün icazə istədi." }
            ]},
            present: { arabic: "يَسْتَأْذِنُ", translation: "icazə istəyir", examples: [
                { arabic: "يَسْتَأْذِنُ فِي الدُّخُولِ", translation: "Girmək üçün icazə istəyir." },
                { arabic: "يَسْتَأْذِنُ وَالِدَيْهِ", translation: "Valideynlərindən icazə istəyir." }
            ]},
            imperative: { arabic: "اِسْتَأْذِنْ", translation: "icazə istə!", examples: [
                { arabic: "اِسْتَأْذِنْ قَبْلَ الدُّخُولِ", translation: "Girməzdən əvvəl icazə istə!" },
                { arabic: "اِسْتَأْذِنْ وَالِدَيْكَ", translation: "Valideynlərindən icazə istə!" }
            ]}
        }
    },
{
        id: 137,
        arabic: "سَلَّمَ",
        meaning: "salam vermək, təslim etmək",
        forms: {
            past: { arabic: "سَلَّمَ", translation: "salam verdi", examples: [
                { arabic: "سَلَّمَ عَلَى إِخْوَانِهِ", translation: "Qardaşlarına salam verdi." },
                { arabic: "سَلَّمَتْ عَلَى الجَارَاتِ", translation: "Qonşulara salam verdi." }
            ]},
            present: { arabic: "يُسَلِّمُ", translation: "salam verir", examples: [
                { arabic: "يُسَلِّمُ عَلَى كُلِّ مَنْ يَلْقَاهُ", translation: "Rastlaşdığı hər kəsə salam verir." },
                { arabic: "يُسَلِّمُ فِي الصَّلَاةِ", translation: "Namazda salam verir." }
            ]},
            imperative: { arabic: "سَلِّمْ", translation: "salam ver!", examples: [
                { arabic: "سَلِّمْ عَلَى إِخْوَتِكَ", translation: "Qardaşlarına salam ver!" },
                { arabic: "سَلِّمْ تَسْلِيمًا", translation: "Tam təslim ol!" }
            ]}
        }
    },
{
        id: 138,
        arabic: "صَافَحَ",
        meaning: "əl sıxmaq, görüşmək",
        forms: {
            past: { arabic: "صَافَحَ", translation: "əl sıxdı", examples: [
                { arabic: "صَافَحَ أَخَاهُ", translation: "Qardaşı ilə əl sıxdı." },
                { arabic: "صَافَحَتْ صَدِيقَتَهَا", translation: "Dostu ilə əl sıxdı." }
            ]},
            present: { arabic: "يُصَافِحُ", translation: "əl sıxır", examples: [
                { arabic: "يُصَافِحُ النَّاسَ بِحَرَارَةٍ", translation: "İnsanlarla səmimi əl sıxır." },
                { arabic: "يُصَافِحُ الضُّيُوفَ", translation: "Qonaqlarla əl sıxır." }
            ]},
            imperative: { arabic: "صَافِحْ", translation: "əl sıx!", examples: [
                { arabic: "صَافِحْ أَخَاكَ", translation: "Qardaşınla əl sıx!" },
                { arabic: "صَافِحْ مَنْ تَلْقَاهُ", translation: "Rastlaşdığınla əl sıx!" }
            ]}
        }
    },
{
        id: 139,
        arabic: "عَانَقَ",
        meaning: "qucaqlaşmaq",
        forms: {
            past: { arabic: "عَانَقَ", translation: "qucaqlaşdı", examples: [
                { arabic: "عَانَقَ أَخَاهُ بَعْدَ السَّفَرِ", translation: "Səfərdən sonra qardaşı ilə qucaqlaşdı." },
                { arabic: "عَانَقَتْ صَدِيقَتَهَا", translation: "Dostu ilə qucaqlaşdı." }
            ]},
            present: { arabic: "يُعَانِقُ", translation: "qucaqlaşır", examples: [
                { arabic: "يُعَانِقُ أَهْلَهُ", translation: "Ailəsi ilə qucaqlaşır." },
                { arabic: "يُعَانِقُ إِخْوَانَهُ", translation: "Qardaşları ilə qucaqlaşır." }
            ]},
            imperative: { arabic: "عَانِقْ", translation: "qucaqlaş!", examples: [
                { arabic: "عَانِقْ أَخَاكَ", translation: "Qardaşınla qucaqlaş!" },
                { arabic: "عَانِقْ مَنْ تُحِبُّ فِي اللَّهِ", translation: "Allah üçün sevdiyinlə qucaqlaş!" }
            ]}
        }
    },
{
        id: 140,
        arabic: "اِسْتَضَافَ",
        meaning: "qonaq etmək",
        forms: {
            past: { arabic: "اِسْتَضَافَ", translation: "qonaq etdi", examples: [
                { arabic: "اِسْتَضَافَ أَهْلَهُ", translation: "Ailəsini qonaq etdi." },
                { arabic: "اِسْتَضَافَتِ الجَارَةَ", translation: "Qonşusunu qonaq etdi." }
            ]},
            present: { arabic: "يَسْتَضِيفُ", translation: "qonaq edir", examples: [
                { arabic: "يَسْتَضِيفُ الضُّيُوفَ", translation: "Qonaqları qəbul edir." },
                { arabic: "يَسْتَضِيفُ فِي بَيْتِهِ", translation: "Evində qonaq saxlayır." }
            ]},
            imperative: { arabic: "اِسْتَضِفْ", translation: "qonaq et!", examples: [
                { arabic: "اِسْتَضِفْ ضَيْفَكَ", translation: "Qonağını qəbul et!" },
                { arabic: "اِسْتَضِفْ فِي سَبِيلِ اللَّهِ", translation: "Allah yolunda qonaq et!" }
            ]}
        }
    },
{
        id: 141,
        arabic: "أَطْعَمَ",
        meaning: "yedirtmək, yemək vermək",
        forms: {
            past: { arabic: "أَطْعَمَ", translation: "yedirtdi", examples: [
                { arabic: "أَطْعَمَ المِسْكِينَ", translation: "Kasıba yemək verdi." },
                { arabic: "أَطْعَمَتِ اليَتِيمَ", translation: "Yetimə yemək verdi." }
            ]},
            present: { arabic: "يُطْعِمُ", translation: "yedirdir", examples: [
                { arabic: "يُطْعِمُ الجَائِعَ", translation: "Aclara yemək verir." },
                { arabic: "يُطْعِمُ أَهْلَهُ", translation: "Ailəsini yedirdir." }
            ]},
            imperative: { arabic: "أَطْعِمْ", translation: "yedirt!", examples: [
                { arabic: "أَطْعِمِ الجَائِعَ", translation: "Aclara yemək ver!" },
                { arabic: "أَطْعِمْ مَنْ لَا طَعَامَ لَهُ", translation: "Yeməyi olmayana yemək ver!" }
            ]}
        }
    },
{
        id: 142,
        arabic: "سَقَى",
        meaning: "su vermək, içirtmək",
        forms: {
            past: { arabic: "سَقَى", translation: "su verdi", examples: [
                { arabic: "سَقَى العَطْشَانَ", translation: "Susuza su verdi." },
                { arabic: "سَقَتِ الزَّرْعَ", translation: "Əkini suladı." }
            ]},
            present: { arabic: "يَسْقِي", translation: "su verir", examples: [
                { arabic: "يَسْقِي الحَيَوَانَاتِ", translation: "Heyvanlara su verir." },
                { arabic: "يَسْقِي النَّاسَ", translation: "İnsanlara su verir." }
            ]},
            imperative: { arabic: "اِسْقِ", translation: "su ver!", examples: [
                { arabic: "اِسْقِ العَطْشَانَ", translation: "Susuza su ver!" },
                { arabic: "اِسْقِ الزَّرْعَ", translation: "Əkini sula!" }
            ]}
        }
    },
{
        id: 143,
        arabic: "اِشْتَغَلَ",
        meaning: "məşğul olmaq, işləmək",
        forms: {
            past: { arabic: "اِشْتَغَلَ", translation: "məşğul oldu", examples: [
                { arabic: "اِشْتَغَلَ بِالعِلْمِ", translation: "Elmlə məşğul oldu." },
                { arabic: "اِشْتَغَلَتْ بِأُمُورِ البَيْتِ", translation: "Ev işləri ilə məşğul oldu." }
            ]},
            present: { arabic: "يَشْتَغِلُ", translation: "məşğul olur", examples: [
                { arabic: "يَشْتَغِلُ بِالتِّجَارَةِ", translation: "Ticarətlə məşğul olur." },
                { arabic: "يَشْتَغِلُ بِالدَّعْوَةِ", translation: "Dəvətlə məşğul olur." }
            ]},
            imperative: { arabic: "اِشْتَغِلْ", translation: "məşğul ol!", examples: [
                { arabic: "اِشْتَغِلْ بِمَا يَنْفَعُكَ", translation: "Sənə fayda verənlə məşğul ol!" },
                { arabic: "اِشْتَغِلْ بِالعِلْمِ", translation: "Elmlə məşğul ol!" }
            ]}
        }
    },
{
        id: 144,
        arabic: "اِسْتَمَرَّ فِي العِبَادَةِ",
        meaning: "ibadətdə davamlı olmaq",
        forms: {
            past: { arabic: "اِسْتَمَرَّ فِي العِبَادَةِ", translation: "ibadətə davam etdi", examples: [
                { arabic: "اِسْتَمَرَّ فِي الصَّلَاةِ", translation: "Namaza davam etdi." },
                { arabic: "اِسْتَمَرَّ فِي الصِّيَامِ", translation: "Oruca davam etdi." }
            ]},
            present: { arabic: "يَسْتَمِرُّ فِي العِبَادَةِ", translation: "ibadətə davam edir", examples: [
                { arabic: "يَسْتَمِرُّ فِي قِرَاءَةِ القُرْآنِ", translation: "Quran oxumağa davam edir." },
                { arabic: "يَسْتَمِرُّ فِي الذِّكْرِ", translation: "Zikrə davam edir." }
            ]},
            imperative: { arabic: "اِسْتَمِرَّ فِي العِبَادَةِ", translation: "ibadətə davam et!", examples: [
                { arabic: "اِسْتَمِرَّ فِي الصَّلَاةِ", translation: "Namaza davam et!" },
                { arabic: "اِسْتَمِرَّ فِي الخَيْرِ", translation: "Xeyirdə davam et!" }
            ]}
        }
    },
{
        id: 145,
        arabic: "اِنْقَطَعَ",
        meaning: "kəsilmək, ayrılmaq, tərk etmək",
        forms: {
            past: { arabic: "اِنْقَطَعَ", translation: "kəsildi", examples: [
                { arabic: "اِنْقَطَعَ عَنِ العَمَلِ", translation: "İşdən ayrıldı." },
                { arabic: "اِنْقَطَعَتْ عَنِ الدَّرْسِ", translation: "Dərsdən qaldı." }
            ]},
            present: { arabic: "يَنْقَطِعُ", translation: "kəsilir", examples: [
                { arabic: "يَنْقَطِعُ عَنِ الزِّيَارَةِ", translation: "Ziyarəti tərk edir." },
                { arabic: "يَنْقَطِعُ عَنِ الصَّلَاةِ", translation: "Namazı tərk edir." }
            ]},
            imperative: { arabic: "لَا تَنْقَطِعْ", translation: "tərk etmə!", examples: [
                { arabic: "لَا تَنْقَطِعْ عَنِ الصَّلَاةِ", translation: "Namazı tərk etmə!" },
                { arabic: "لَا تَنْقَطِعْ عَنِ العِلْمِ", translation: "Elmi tərk etmə!" }
            ]}
        }
    },
{
        id: 146,
        arabic: "تَرَكَ",
        meaning: "tərk etmək, buraxmaq",
        forms: {
            past: { arabic: "تَرَكَ", translation: "tərk etdi", examples: [
                { arabic: "تَرَكَ المَعْصِيَةَ", translation: "Günahı tərk etdi." },
                { arabic: "تَرَكَتِ المُنْكَرَ", translation: "Pis işi tərk etdi." }
            ]},
            present: { arabic: "يَتْرُكُ", translation: "tərk edir", examples: [
                { arabic: "يَتْرُكُ الكَذِبَ", translation: "Yalanı tərk edir." },
                { arabic: "يَتْرُكُ مَا لَا يَعْنِيهِ", translation: "Onu maraqlandırmayanı tərk edir." }
            ]},
            imperative: { arabic: "اُتْرُكْ", translation: "tərk et!", examples: [
                { arabic: "اُتْرُكِ المَعَاصِيَ", translation: "Günahları tərk et!" },
                { arabic: "اُتْرُكْ مَا لَا يَنْفَعُكَ", translation: "Sənə fayda verməyəni tərk et!" }
            ]}
        }
    },
{
        id: 147,
        arabic: "صَاحَ",
        meaning: "çığırmaq, səsləmək",
        forms: {
            past: { arabic: "صَاحَ", translation: "səslədi", examples: [
                { arabic: "صَاحَ بِأَعْلَى صَوْتِهِ", translation: "Uca səslə qışqırdı." },
                { arabic: "صَاحَتِ امْرَأَةٌ", translation: "Bir qadın qışqırdı." }
            ]},
            present: { arabic: "يَصِيحُ", translation: "səsləyir", examples: [
                { arabic: "يَصِيحُ فِي السُّوقِ", translation: "Bazarda qışqırır." },
                { arabic: "يَصِيحُ لِلْإِنْذَارِ", translation: "Xəbərdarlıq üçün qışqırır." }
            ]},
            imperative: { arabic: "صِحْ", translation: "səslə!", examples: [
                { arabic: "صِحْ بِالحَقِّ", translation: "Haqqı uca səslə de!" },
                { arabic: "صِحْ لِتَنْبِيهِهِ", translation: "Onu xəbərdar etmək üçün səslə!" }
            ]}
        }
    },
{
        id: 148,
        arabic: "هَمَسَ",
        meaning: "pıçıldamaq, astaca danışmaq",
        forms: {
            past: { arabic: "هَمَسَ", translation: "pıçıldadı", examples: [
                { arabic: "هَمَسَ فِي أُذُنِهِ", translation: "Qulağına pıçıldadı." },
                { arabic: "هَمَسَتْ بِالدُّعَاءِ", translation: "Dua ilə pıçıldadı." }
            ]},
            present: { arabic: "يَهْمِسُ", translation: "pıçıldayır", examples: [
                { arabic: "يَهْمِسُ فِي الصَّلَاةِ", translation: "Namazda astaca oxuyur." },
                { arabic: "يَهْمِسُ بِالذِّكْرِ", translation: "Zikri pıçıldayır." }
            ]},
            imperative: { arabic: "اِهْمِسْ", translation: "pıçılda!", examples: [
                { arabic: "اِهْمِسْ بِالذِّكْرِ", translation: "Zikri pıçılda!" },
                { arabic: "اِهْمِسْ بِمَا تَقُولُ", translation: "Dediyini astaca söylə!" }
            ]}
        }
    },
{
        id: 149,
        arabic: "نَادَى",
        meaning: "çağırmaq, səsləmək",
        forms: {
            past: { arabic: "نَادَى", translation: "çağırdı", examples: [
                { arabic: "نَادَى لِلصَّلَاةِ", translation: "Namaza çağırdı." },
                { arabic: "نَادَتْ أَخَاهَا", translation: "Qardaşını çağırdı." }
            ]},
            present: { arabic: "يُنَادِي", translation: "çağırır", examples: [
                { arabic: "يُنَادِي المُؤَذِّنُ لِلصَّلَاةِ", translation: "Müəzzin namaza çağırır." },
                { arabic: "يُنَادِي بِالحَقِّ", translation: "Haqqa çağırır." }
            ]},
            imperative: { arabic: "نَادِ", translation: "çağır!", examples: [
                { arabic: "نَادِ لِلصَّلَاةِ", translation: "Namaza çağır!" },
                { arabic: "نَادِ أَخَاكَ", translation: "Qardaşını çağır!" }
            ]}
        }
    },
{
        id: 150,
        arabic: "رَدَّ",
        meaning: "cavab vermək, geri qaytarmaq",
        forms: {
            past: { arabic: "رَدَّ", translation: "cavab verdi", examples: [
                { arabic: "رَدَّ السَّلَامَ", translation: "Salamı aldı." },
                { arabic: "رَدَّ عَنِ السُّؤَالِ", translation: "Suala cavab verdi." }
            ]},
            present: { arabic: "يَرُدُّ", translation: "cavab verir", examples: [
                { arabic: "يَرُدُّ السَّلَامَ", translation: "Salamı qaytarır." },
                { arabic: "يَرُدُّ عَنِ الشُّبُهَاتِ", translation: "Şübhələrə cavab verir." }
            ]},
            imperative: { arabic: "رُدَّ", translation: "cavab ver!", examples: [
                { arabic: "رُدَّ السَّلَامَ", translation: "Salamı qaytar!" },
                { arabic: "رُدَّ عَنْ سُؤَالِ أَخِيكَ", translation: "Qardaşının sualına cavab ver!" }
            ]}
        }
    },
{
        id: 151,
        arabic: "أَنْذَرَ",
        meaning: "xəbərdarlıq etmək, qorxutmaq",
        forms: {
            past: { arabic: "أَنْذَرَ", translation: "xəbərdarlıq etdi", examples: [
                { arabic: "أَنْذَرَ النَّاسَ مِنْ عَذَابِ اللَّهِ", translation: "İnsanları Allahın əzabı ilə qorxutdu." },
                { arabic: "أَنْذَرَتِ الأُمَّةَ", translation: "Ümməti xəbərdar etdi." }
            ]},
            present: { arabic: "يُنْذِرُ", translation: "xəbərdarlıq edir", examples: [
                { arabic: "يُنْذِرُ المُؤْمِنِينَ", translation: "Möminlərə xəbərdarlıq edir." },
                { arabic: "يُنْذِرُ مِنْ يَوْمِ الحِسَابِ", translation: "Hesab günündən xəbərdarlıq edir." }
            ]},
            imperative: { arabic: "أَنْذِرْ", translation: "xəbərdarlıq et!", examples: [
                { arabic: "أَنْذِرْ قَوْمَكَ", translation: "Qövmünü xəbərdar et!" },
                { arabic: "أَنْذِرْ مِنَ الغَفْلَةِ", translation: "Qəflətdən xəbərdar et!" }
            ]}
        }
    },
{
        id: 152,
        arabic: "بَلَّغَ",
        meaning: "çatdırmaq, təbliğ etmək",
        forms: {
            past: { arabic: "بَلَّغَ", translation: "çatdırdı", examples: [
                { arabic: "بَلَّغَ الرِّسَالَةَ", translation: "Mesajı çatdırdı." },
                { arabic: "بَلَّغَتِ الدَّعْوَةَ", translation: "Dəvəti təbliğ etdi." }
            ]},
            present: { arabic: "يُبَلِّغُ", translation: "çatdırır", examples: [
                { arabic: "يُبَلِّغُ رِسَالَةَ الإِسْلَامِ", translation: "İslam mesajını təbliğ edir." },
                { arabic: "يُبَلِّغُ العِلْمَ", translation: "Elmi çatdırır." }
            ]},
            imperative: { arabic: "بَلِّغْ", translation: "çatdır!", examples: [
                { arabic: "بَلِّغْ عَنِّي وَلَوْ آيَةً", translation: "Məndən bir ayə belə çatdır!" },
                { arabic: "بَلِّغِ الرِّسَالَةَ", translation: "Mesajı çatdır!" }
            ]}
        }
    },
{
        id: 153,
        arabic: "تَدَاوَلَ",
        meaning: "müzakirə etmək, danışmaq",
        forms: {
            past: { arabic: "تَدَاوَلَ", translation: "müzakirə etdi", examples: [
                { arabic: "تَدَاوَلَ العُلَمَاءُ المَسْأَلَةَ", translation: "Alimlər məsələni müzakirə etdi." },
                { arabic: "تَدَاوَلَتِ اللَّجْنَةُ الأَمْرَ", translation: "Komitə işi müzakirə etdi." }
            ]},
            present: { arabic: "يَتَدَاوَلُ", translation: "müzakirə edir", examples: [
                { arabic: "يَتَدَاوَلُ فِي الفِقْهِ", translation: "Fiqh mövzusunu müzakirə edir." },
                { arabic: "يَتَدَاوَلُ الآرَاءَ", translation: "Fikirləri müzakirə edir." }
            ]},
            imperative: { arabic: "تَدَاوَلْ", translation: "müzakirə et!", examples: [
                { arabic: "تَدَاوَلِ المَسْأَلَةَ مَعَ العُلَمَاءِ", translation: "Məsələni alimlərlə müzakirə et!" },
                { arabic: "تَدَاوَلْ بِالعِلْمِ", translation: "Elmi müzakirə et!" }
            ]}
        }
    },
{
        id: 154,
        arabic: "اِسْتَدَلَّ",
        meaning: "dəlil gətirmək, sübut etmək",
        forms: {
            past: { arabic: "اِسْتَدَلَّ", translation: "dəlil gətirdi", examples: [
                { arabic: "اِسْتَدَلَّ بِآيَةٍ مِنَ القُرْآنِ", translation: "Qurandan bir ayə ilə dəlil gətirdi." },
                { arabic: "اِسْتَدَلَّتْ بِحَدِيثٍ صَحِيحٍ", translation: "Səhih hədislə dəlil gətirdi." }
            ]},
            present: { arabic: "يَسْتَدِلُّ", translation: "dəlil gətirir", examples: [
                { arabic: "يَسْتَدِلُّ عَلَى الحُكْمِ", translation: "Hökmə dəlil gətirir." },
                { arabic: "يَسْتَدِلُّ بِالسُّنَّةِ", translation: "Sünnə ilə dəlil gətirir." }
            ]},
            imperative: { arabic: "اِسْتَدِلَّ", translation: "dəlil gətir!", examples: [
                { arabic: "اِسْتَدِلَّ عَلَى قَوْلِكَ", translation: "Sözünə dəlil gətir!" },
                { arabic: "اِسْتَدِلَّ مِنَ القُرْآنِ", translation: "Qurandan dəlil gətir!" }
            ]}
        }
    },
{
        id: 155,
        arabic: "نَاقَشَ",
        meaning: "müzakirə etmək, mübahisə aparmaq",
        forms: {
            past: { arabic: "نَاقَشَ", translation: "müzakirə etdi", examples: [
                { arabic: "نَاقَشَ الأُسْتَاذَ فِي المَسْأَلَةِ", translation: "Müəllimlə məsələni müzakirə etdi." },
                { arabic: "نَاقَشَتْ فِي الفِقْهِ", translation: "Fiqh mövzusunda müzakirə etdi." }
            ]},
            present: { arabic: "يُنَاقِشُ", translation: "müzakirə edir", examples: [
                { arabic: "يُنَاقِشُ فِي العَقِيدَةِ", translation: "Əqidə mövzusunda müzakirə edir." },
                { arabic: "يُنَاقِشُ بِأَدَبٍ", translation: "Ədəblə müzakirə edir." }
            ]},
            imperative: { arabic: "نَاقِشْ", translation: "müzakirə et!", examples: [
                { arabic: "نَاقِشْ بِالأَدَبِ", translation: "Ədəblə müzakirə et!" },
                { arabic: "نَاقِشْ لِفَهْمِ الحَقِيقَةِ", translation: "Həqiqəti anlamaq üçün müzakirə et!" }
            ]}
        }
    },
{
        id: 156,
        arabic: "تَسَاءَلَ",
        meaning: "soruşmaq, sual vermək",
        forms: {
            past: { arabic: "تَسَاءَلَ", translation: "soruşdu", examples: [
                { arabic: "تَسَاءَلَ عَنْ حُكْمِ المَسْأَلَةِ", translation: "Məsələnin hökmünü soruşdu." },
                { arabic: "تَسَاءَلَتْ عَنِ الحَقِيقَةِ", translation: "Həqiqəti soruşdu." }
            ]},
            present: { arabic: "يَتَسَاءَلُ", translation: "soruşur", examples: [
                { arabic: "يَتَسَاءَلُ عَنْ أَمْرِ دِينِهِ", translation: "Dini haqqında soruşur." },
                { arabic: "يَتَسَاءَلُونَ عَنِ القِيَامَةِ", translation: "Qiyamət barədə soruşurlar." }
            ]},
            imperative: { arabic: "تَسَاءَلْ", translation: "soruş!", examples: [
                { arabic: "تَسَاءَلْ عَنْ أَمْرِ دِينِكَ", translation: "Dinin barədə soruş!" },
                { arabic: "تَسَاءَلْ لِفَهْمِ العِلْمِ", translation: "Elmi anlamaq üçün soruş!" }
            ]}
        }
    },
{
        id: 157,
        arabic: "اِسْتَفْسَرَ",
        meaning: "izah istəmək, aydınlaşdırmaq",
        forms: {
            past: { arabic: "اِسْتَفْسَرَ", translation: "izah istədi", examples: [
                { arabic: "اِسْتَفْسَرَ عَنِ الآيَةِ", translation: "Ayə barədə izah istədi." },
                { arabic: "اِسْتَفْسَرَتْ عَنِ الحَدِيثِ", translation: "Hədis barədə izah istədi." }
            ]},
            present: { arabic: "يَسْتَفْسِرُ", translation: "izah istəyir", examples: [
                { arabic: "يَسْتَفْسِرُ عَنِ الأَحْكَامِ", translation: "Hökmələr barədə izah istəyir." },
                { arabic: "يَسْتَفْسِرُ فِي دُرُوسِهِ", translation: "Dərslərində izah istəyir." }
            ]},
            imperative: { arabic: "اِسْتَفْسِرْ", translation: "izah istə!", examples: [
                { arabic: "اِسْتَفْسِرْ عَمَّا لَا تَفْهَمُ", translation: "Anlamadığın barədə izah istə!" },
                { arabic: "اِسْتَفْسِرْ بِأَدَبٍ", translation: "Ədəblə izah istə!" }
            ]}
        }
    },
{
        id: 158,
        arabic: "تَدَارَسَ",
        meaning: "birlikdə oxumaq, müzakirəli dərs etmək",
        forms: {
            past: { arabic: "تَدَارَسَ", translation: "birlikdə oxudu", examples: [
                { arabic: "تَدَارَسَ القُرْآنَ مَعَ أَصْحَابِهِ", translation: "Dostları ilə Quranı birlikdə oxudu." },
                { arabic: "تَدَارَسَتِ العِلْمَ", translation: "Elmi birlikdə oxudu." }
            ]},
            present: { arabic: "يَتَدَارَسُ", translation: "birlikdə oxuyur", examples: [
                { arabic: "يَتَدَارَسُونَ كِتَابَ اللَّهِ", translation: "Allahın kitabını birlikdə oxuyurlar." },
                { arabic: "يَتَدَارَسُ فِي حَلَقَةِ العِلْمِ", translation: "Elm halqasında birlikdə oxuyur." }
            ]},
            imperative: { arabic: "تَدَارَسْ", translation: "birlikdə oxu!", examples: [
                { arabic: "تَدَارَسِ القُرْآنَ مَعَ إِخْوَتِكَ", translation: "Qardaşlarınla Quranı birlikdə oxu!" },
                { arabic: "تَدَارَسْ مَا تَعَلَّمْتَ", translation: "Öyrəndiklərini birlikdə təkrar et!" }
            ]}
        }
    },
{
        id: 159,
        arabic: "حَاضَرَ",
        meaning: "mühazirə vermək, dərs demək",
        forms: {
            past: { arabic: "حَاضَرَ", translation: "mühazirə verdi", examples: [
                { arabic: "حَاضَرَ فِي الجَامِعَةِ", translation: "Universitetdə mühazirə verdi." },
                { arabic: "حَاضَرَتْ عَنِ الفِقْهِ", translation: "Fiqh barədə mühazirə verdi." }
            ]},
            present: { arabic: "يُحَاضِرُ", translation: "mühazirə verir", examples: [
                { arabic: "يُحَاضِرُ فِي العَقِيدَةِ", translation: "Əqidə barədə mühazirə verir." },
                { arabic: "يُحَاضِرُ النَّاسَ", translation: "İnsanlara mühazirə verir." }
            ]},
            imperative: { arabic: "حَاضِرْ", translation: "mühazirə ver!", examples: [
                { arabic: "حَاضِرْ بِمَا تَعْلَمُ", translation: "Bildiyini anlat!" },
                { arabic: "حَاضِرْ فِي مَجْلِسِ العِلْمِ", translation: "Elm məclisində danış!" }
            ]}
        }
    },
{
        id: 160,
        arabic: "كَفَرَ",
        meaning: "inkar etmək, küfr etmək",
        forms: {
            past: { arabic: "كَفَرَ", translation: "inkar etdi", examples: [
                { arabic: "كَفَرَ بِاللَّهِ", translation: "Allahı inkar etdi." },
                { arabic: "كَفَرَتْ بِالْحَقِّ", translation: "Haqqı inkar etdi." }
            ]},
            present: { arabic: "يَكْفُرُ", translation: "inkar edir", examples: [
                { arabic: "يَكْفُرُ بِنِعْمَةِ اللَّهِ", translation: "Allahın nemətini inkar edir." },
                { arabic: "يَكْفُرُ بِالْيَوْمِ الآخِرِ", translation: "Axirət gününü inkar edir." }
            ]},
            imperative: { arabic: "لَا تَكْفُرْ", translation: "inkar etmə!", examples: [
                { arabic: "لَا تَكْفُرْ بِاللَّهِ", translation: "Allahı inkar etmə!" },
                { arabic: "لَا تَكْفُرْ بِالْحَقِّ", translation: "Haqqı inkar etmə!" }
            ]}
        }
    },
{
        id: 161,
        arabic: "آمَنَ",
        meaning: "iman gətirmək",
        forms: {
            past: { arabic: "آمَنَ", translation: "iman gətirdi", examples: [
                { arabic: "آمَنَ بِاللَّهِ وَاليَوْمِ الآخِرِ", translation: "Allaha və axirət gününə iman gətirdi." },
                { arabic: "آمَنَتْ بِالقَدَرِ", translation: "Qədərə iman gətirdi." }
            ]},
            present: { arabic: "يُؤْمِنُ", translation: "iman gətirir", examples: [
                { arabic: "يُؤْمِنُ بِالغَيْبِ", translation: "Qeybə iman gətirir." },
                { arabic: "يُؤْمِنُ بِالرُّسُلِ", translation: "Rəsullara iman gətirir." }
            ]},
            imperative: { arabic: "آمِنْ", translation: "iman gətir!", examples: [
                { arabic: "آمِنْ بِاللَّهِ", translation: "Allaha iman gətir!" },
                { arabic: "آمِنْ بِاليَوْمِ الآخِرِ", translation: "Axirət gününə iman gətir!" }
            ]}
        }
    },
{
        id: 162,
        arabic: "أَشْرَكَ",
        meaning: "şirk qoşmaq",
        forms: {
            past: { arabic: "أَشْرَكَ", translation: "şirk qoşdu", examples: [
                { arabic: "أَشْرَكَ بِاللَّهِ", translation: "Allaha şirk qoşdu." },
                { arabic: "أَشْرَكَتْ مَعَ اللَّهِ إِلَهًا آخَرَ", translation: "Allaha başqa tanrı qoşdu." }
            ]},
            present: { arabic: "يُشْرِكُ", translation: "şirk qoşur", examples: [
                { arabic: "يُشْرِكُ بِاللَّهِ", translation: "Allaha şirk qoşur." },
                { arabic: "يُشْرِكُ فِي العِبَادَةِ", translation: "İbadətdə şirk qoşur." }
            ]},
            imperative: { arabic: "لَا تُشْرِكْ", translation: "şirk qoşma!", examples: [
                { arabic: "لَا تُشْرِكْ بِاللَّهِ", translation: "Allaha şirk qoşma!" },
                { arabic: "لَا تُشْرِكْ فِي العِبَادَةِ", translation: "İbadətdə şirk qoşma!" }
            ]}
        }
    },
{
        id: 163,
        arabic: "تَوَحَّدَ",
        meaning: "təvhid etmək, birliyini tanımaq",
        forms: {
            past: { arabic: "تَوَحَّدَ", translation: "təvhid etdi", examples: [
                { arabic: "تَوَحَّدَ اللَّهُ فِي أَسْمَائِهِ", translation: "Allahın adlarında təvhid etdi." },
                { arabic: "تَوَحَّدَتِ الأُمَّةُ عَلَى العَقِيدَةِ", translation: "Ümmət əqidədə birləşdi." }
            ]},
            present: { arabic: "يَتَوَحَّدُ", translation: "təvhid edir", examples: [
                { arabic: "يَتَوَحَّدُ المُسْلِمُونَ عَلَى الحَقِّ", translation: "Müsəlmanlar haqqda birləşir." },
                { arabic: "يَتَوَحَّدُ فِي عِبَادَةِ اللَّهِ", translation: "Allaha ibadətdə təvhid edir." }
            ]},
            imperative: { arabic: "تَوَحَّدْ", translation: "təvhid et!", examples: [
                { arabic: "تَوَحَّدْ فِي عِبَادَتِكَ", translation: "İbadətində təvhid et!" },
                { arabic: "تَوَحَّدْ وَلَا تُشْرِكْ", translation: "Təvhid et və şirk qoşma!" }
            ]}
        }
    },
{
        id: 164,
        arabic: "اِخْتَلَفَ",
        meaning: "ixtilaf etmək, fərqli olmaq",
        forms: {
            past: { arabic: "اِخْتَلَفَ", translation: "ixtilaf etdi", examples: [
                { arabic: "اِخْتَلَفَ العُلَمَاءُ فِي المَسْأَلَةِ", translation: "Alimlər məsələdə ixtilaf etdi." },
                { arabic: "اِخْتَلَفَتِ الأَقْوَالُ", translation: "Sözlər fərqli oldu." }
            ]},
            present: { arabic: "يَخْتَلِفُ", translation: "ixtilaf edir", examples: [
                { arabic: "يَخْتَلِفُ النَّاسُ فِي الفَهْمِ", translation: "İnsanlar anlamada fərqli olur." },
                { arabic: "يَخْتَلِفُونَ فِي الاجْتِهَادِ", translation: "İctihadda fərqli olurlar." }
            ]},
            imperative: { arabic: "لَا تَخْتَلِفْ", translation: "ixtilaf etmə!", examples: [
                { arabic: "لَا تَخْتَلِفْ فِي الحَقِّ", translation: "Haqda ixtilaf etmə!" },
                { arabic: "لَا تَخْتَلِفُوا", translation: "İxtilaf etməyin!" }
            ]}
        }
    },
{
        id: 165,
        arabic: "اِتَّفَقَ",
        meaning: "razılaşmaq, ittifaq etmək",
        forms: {
            past: { arabic: "اِتَّفَقَ", translation: "razılaşdı", examples: [
                { arabic: "اِتَّفَقَ العُلَمَاءُ عَلَى الحُكْمِ", translation: "Alimlər hökmdə razılaşdı." },
                { arabic: "اِتَّفَقَتِ الجَمَاعَةُ", translation: "Camaat razılaşdı." }
            ]},
            present: { arabic: "يَتَّفِقُ", translation: "razılaşır", examples: [
                { arabic: "يَتَّفِقُ المُسْلِمُونَ عَلَى الخَيْرِ", translation: "Müsəlmanlar xeyirdə razılaşır." },
                { arabic: "يَتَّفِقُونَ فِي الرَّأْيِ", translation: "Fikirdə razılaşırlar." }
            ]},
            imperative: { arabic: "اِتَّفِقْ", translation: "razılaş!", examples: [
                { arabic: "اِتَّفِقْ مَعَ إِخْوَتِكَ عَلَى الحَقِّ", translation: "Qardaşlarınla haqqda razılaş!" },
                { arabic: "اِتَّفِقُوا عَلَى كَلِمَةٍ سَوَاءٍ", translation: "Ortaq bir sözdə razılaşın!" }
            ]}
        }
    },
{
        id: 166,
        arabic: "رَاجَعَ",
        meaning: "təkrar etmək, nəzərdən keçirmək",
        forms: {
            past: { arabic: "رَاجَعَ", translation: "təkrar etdi", examples: [
                { arabic: "رَاجَعَ دُرُوسَهُ", translation: "Dərslərini təkrar etdi." },
                { arabic: "رَاجَعَتِ القُرْآنَ", translation: "Quranı təkrar etdi." }
            ]},
            present: { arabic: "يُرَاجِعُ", translation: "təkrar edir", examples: [
                { arabic: "يُرَاجِعُ مَحْفُوظَاتِهِ", translation: "Əzbərlərini təkrar edir." },
                { arabic: "يُرَاجِعُ العِلْمَ", translation: "Elmi təkrar edir." }
            ]},
            imperative: { arabic: "رَاجِعْ", translation: "təkrar et!", examples: [
                { arabic: "رَاجِعْ مَا حَفِظْتَ", translation: "Əzbərlədiyini təkrar et!" },
                { arabic: "رَاجِعْ دُرُوسَكَ", translation: "Dərslərini təkrar et!" }
            ]}
        }
    },
{
        id: 167,
        arabic: "ثَبَّتَ",
        meaning: "möhkəmləndirmək, sabitləşdirmək",
        forms: {
            past: { arabic: "ثَبَّتَ", translation: "möhkəmləndirdi", examples: [
                { arabic: "ثَبَّتَ اللَّهُ قَلْبَهُ", translation: "Allah qəlbini möhkəmləndirdi." },
                { arabic: "ثَبَّتَتْ إِيمَانَهَا", translation: "İmanını möhkəmləndirdi." }
            ]},
            present: { arabic: "يُثَبِّتُ", translation: "möhkəmləndirir", examples: [
                { arabic: "يُثَبِّتُ اللَّهُ المُؤْمِنِينَ", translation: "Allah möminləri möhkəmləndirir." },
                { arabic: "يُثَبِّتُ نَفْسَهُ عَلَى الطَّاعَةِ", translation: "Özünü itaətdə sabit saxlayır." }
            ]},
            imperative: { arabic: "ثَبِّتْ", translation: "möhkəmləndir!", examples: [
                { arabic: "ثَبِّتْ قَلْبَكَ عَلَى الإِيمَانِ", translation: "Qəlbini imanda möhkəmləndir!" },
                { arabic: "ثَبِّتْ نَفْسَكَ عَلَى الخَيْرِ", translation: "Özünü xeyirdə sabit saxla!" }
            ]}
        }
    },
{
        id: 168,
        arabic: "اِهْتَدَى",
        meaning: "hidayət olmaq, doğru yolu tapmaq",
        forms: {
            past: { arabic: "اِهْتَدَى", translation: "hidayət oldu", examples: [
                { arabic: "اِهْتَدَى إِلَى الإِسْلَامِ", translation: "İslama hidayət oldu." },
                { arabic: "اِهْتَدَتْ بَعْدَ طُولِ ضَلَالٍ", translation: "Uzun zəlalətdən sonra hidayət oldu." }
            ]},
            present: { arabic: "يَهْتَدِي", translation: "hidayət olur", examples: [
                { arabic: "يَهْتَدِي إِلَى الحَقِّ", translation: "Haqqa hidayət olur." },
                { arabic: "يَهْتَدِي بِالقُرْآنِ", translation: "Quranla hidayət olur." }
            ]},
            imperative: { arabic: "اِهْتَدِ", translation: "hidayət ol!", examples: [
                { arabic: "اِهْتَدِ إِلَى صِرَاطٍ مُسْتَقِيمٍ", translation: "Düz yola hidayət ol!" },
                { arabic: "اِهْتَدِ بِكِتَابِ اللَّهِ", translation: "Allahın kitabı ilə hidayət ol!" }
            ]}
        }
    },
{
        id: 169,
        arabic: "ضَلَّ",
        meaning: "zəlalətə düşmək, yoldan çıxmaq",
        forms: {
            past: { arabic: "ضَلَّ", translation: "zəlalətə düşdü", examples: [
                { arabic: "ضَلَّ عَنِ الحَقِّ", translation: "Haqdan azdı." },
                { arabic: "ضَلَّتْ فِي طَرِيقِهَا", translation: "Yolunu itirdi." }
            ]},
            present: { arabic: "يَضِلُّ", translation: "zəlalətə düşür", examples: [
                { arabic: "يَضِلُّ عَنِ الهُدَى", translation: "Hidayətdən azır." },
                { arabic: "يَضِلُّ بِسَبَبِ الجَهْلِ", translation: "Cəhalət üzündən azır." }
            ]},
            imperative: { arabic: "لَا تَضِلَّ", translation: "zəlalətə düşmə!", examples: [
                { arabic: "لَا تَضِلَّ عَنِ الحَقِّ", translation: "Haqdan azma!" },
                { arabic: "لَا تَضِلَّ بَعْدَ الهُدَى", translation: "Hidayətdən sonra azma!" }
            ]}
        }
    },
{
        id: 170,
        arabic: "غَفَرَ",
        meaning: "bağışlamaq",
        forms: {
            past: { arabic: "غَفَرَ", translation: "bağışladı", examples: [
                { arabic: "غَفَرَ اللَّهُ ذَنْبَهُ", translation: "Allah günahını bağışladı." },
                { arabic: "غَفَرَتْ لِأَخِيهَا", translation: "Qardaşını bağışladı." }
            ]},
            present: { arabic: "يَغْفِرُ", translation: "bağışlayır", examples: [
                { arabic: "يَغْفِرُ اللَّهُ الذُّنُوبَ", translation: "Allah günahları bağışlayır." },
                { arabic: "يَغْفِرُ لِمَنْ يَشَاءُ", translation: "İstədiyini bağışlayır." }
            ]},
            imperative: { arabic: "اِغْفِرْ", translation: "bağışla!", examples: [
                { arabic: "اِغْفِرْ لِأَخِيكَ", translation: "Qardaşını bağışla!" },
                { arabic: "اِغْفِرْ لِلْمُسِيءِ", translation: "Pislik edəni bağışla!" }
            ]}
        }
    },
{
        id: 171,
        arabic: "عَفَا",
        meaning: "əfv etmək",
        forms: {
            past: { arabic: "عَفَا", translation: "əfv etdi", examples: [
                { arabic: "عَفَا عَنْ أَخِيهِ", translation: "Qardaşını əfv etdi." },
                { arabic: "عَفَتْ عَنْ زَوْجِهَا", translation: "Ərini əfv etdi." }
            ]},
            present: { arabic: "يَعْفُو", translation: "əfv edir", examples: [
                { arabic: "يَعْفُو عَنِ المُسِيءِ", translation: "Pislik edəni əfv edir." },
                { arabic: "يَعْفُو عَنِ النَّاسِ", translation: "İnsanları əfv edir." }
            ]},
            imperative: { arabic: "اِعْفُ", translation: "əfv et!", examples: [
                { arabic: "اِعْفُ عَنْ أَخِيكَ", translation: "Qardaşını əfv et!" },
                { arabic: "اِعْفُ عَمَّنْ ظَلَمَكَ", translation: "Sənə zülm edəni əfv et!" }
            ]}
        }
    },
{
        id: 172,
        arabic: "صَفَحَ",
        meaning: "üz döndərmək, bağışlamaq",
        forms: {
            past: { arabic: "صَفَحَ", translation: "bağışladı", examples: [
                { arabic: "صَفَحَ عَنِ المُسِيءِ", translation: "Pislik edəni bağışladı." },
                { arabic: "صَفَحَتْ عَنْ جَارَتِهَا", translation: "Qonşusunu bağışladı." }
            ]},
            present: { arabic: "يَصْفَحُ", translation: "bağışlayır", examples: [
                { arabic: "يَصْفَحُ عَنِ المُخْطِئِ", translation: "Səhv edəni bağışlayır." },
                { arabic: "يَصْفَحُ عَنِ النَّاسِ", translation: "İnsanları bağışlayır." }
            ]},
            imperative: { arabic: "اِصْفَحْ", translation: "bağışla!", examples: [
                { arabic: "اِصْفَحْ عَنْ أَخِيكَ", translation: "Qardaşını bağışla!" },
                { arabic: "اِصْفَحْ عَمَّنْ أَسَاءَ إِلَيْكَ", translation: "Sənə pislik edəni bağışla!" }
            ]}
        }
    },
{
        id: 173,
        arabic: "اِعْتَذَرَ",
        meaning: "üzr istəmək",
        forms: {
            past: { arabic: "اِعْتَذَرَ", translation: "üzr istədi", examples: [
                { arabic: "اِعْتَذَرَ لِأَخِيهِ", translation: "Qardaşından üzr istədi." },
                { arabic: "اِعْتَذَرَتْ عَنْ تَقْصِيرِهَا", translation: "Qüsuruna görə üzr istədi." }
            ]},
            present: { arabic: "يَعْتَذِرُ", translation: "üzr istəyir", examples: [
                { arabic: "يَعْتَذِرُ لِلنَّاسِ", translation: "İnsanlardan üzr istəyir." },
                { arabic: "يَعْتَذِرُ عَنْ خَطَئِهِ", translation: "Səhvindən ötrü üzr istəyir." }
            ]},
            imperative: { arabic: "اِعْتَذِرْ", translation: "üzr istə!", examples: [
                { arabic: "اِعْتَذِرْ لِأَخِيكَ", translation: "Qardaşından üzr istə!" },
                { arabic: "اِعْتَذِرْ عَمَّا بَدَرَ مِنْكَ", translation: "Səndən baş verənə görə üzr istə!" }
            ]}
        }
    },
{
        id: 174,
        arabic: "اِسْتَرْجَعَ",
        meaning: "istirca etmək (inna lillah demək)",
        forms: {
            past: { arabic: "اِسْتَرْجَعَ", translation: "istirca etdi", examples: [
                { arabic: "اِسْتَرْجَعَ عِنْدَ المُصِيبَةِ", translation: "Müsibət zamanı istirca etdi." },
                { arabic: "اِسْتَرْجَعَتْ لَمَّا سَمِعَتِ الخَبَرَ", translation: "Xəbəri eşidəndə istirca etdi." }
            ]},
            present: { arabic: "يَسْتَرْجِعُ", translation: "istirca edir", examples: [
                { arabic: "يَسْتَرْجِعُ فِي الشَّدَائِدِ", translation: "Çətinliklərdə istirca edir." },
                { arabic: "يَسْتَرْجِعُ عِنْدَ المُصِيبَةِ", translation: "Müsibətdə istirca edir." }
            ]},
            imperative: { arabic: "اِسْتَرْجِعْ", translation: "istirca et!", examples: [
                { arabic: "اِسْتَرْجِعْ عِنْدَ المُصِيبَةِ", translation: "Müsibət zamanı istirca et!" },
                { arabic: "اِسْتَرْجِعْ وَاصْبِرْ", translation: "İstirca et və səbir et!" }
            ]}
        }
    },
{
        id: 175,
        arabic: "عَزَّى",
        meaning: "başsağlığı vermək",
        forms: {
            past: { arabic: "عَزَّى", translation: "başsağlığı verdi", examples: [
                { arabic: "عَزَّى أَخَاهُ فِي مُصِيبَةٍ", translation: "Müsibətdə qardaşına başsağlığı verdi." },
                { arabic: "عَزَّتْ جَارَتَهَا", translation: "Qonşusuna başsağlığı verdi." }
            ]},
            present: { arabic: "يُعَزِّي", translation: "başsağlığı verir", examples: [
                { arabic: "يُعَزِّي أَهْلَ المَيِّتِ", translation: "Ölənin ailəsinə başsağlığı verir." },
                { arabic: "يُعَزِّي فِي المُصِيبَاتِ", translation: "Müsibətlərdə başsağlığı verir." }
            ]},
            imperative: { arabic: "عَزِّ", translation: "başsağlığı ver!", examples: [
                { arabic: "عَزِّ أَخَاكَ", translation: "Qardaşına başsağlığı ver!" },
                { arabic: "عَزِّ أَهْلَ المَيِّتِ", translation: "Ölənin ailəsinə başsağlığı ver!" }
            ]}
        }
    },
{
        id: 176,
        arabic: "عَادَ",
        meaning: "xəstəni ziyarət etmək",
        forms: {
            past: { arabic: "عَادَ", translation: "ziyarət etdi", examples: [
                { arabic: "عَادَ المَرِيضَ", translation: "Xəstəni ziyarət etdi." },
                { arabic: "عَادَتْ جَارَهَا المَرِيضَ", translation: "Xəstə qonşusunu ziyarət etdi." }
            ]},
            present: { arabic: "يَعُودُ", translation: "ziyarət edir", examples: [
                { arabic: "يَعُودُ المَرْضَى", translation: "Xəstələri ziyarət edir." },
                { arabic: "يَعُودُ أَخَاهُ المَرِيضَ", translation: "Xəstə qardaşını ziyarət edir." }
            ]},
            imperative: { arabic: "عُدْ", translation: "ziyarət et!", examples: [
                { arabic: "عُدِ المَرِيضَ", translation: "Xəstəni ziyarət et!" },
                { arabic: "عُدْ أَخَاكَ المَرِيضَ", translation: "Xəstə qardaşını ziyarət et!" }
            ]}
        }
    },
{
        id: 177,
        arabic: "عَمَّرَ",
        meaning: "tikmək, abadlaşdırmaq, uzun ömür yaşamaq",
        forms: {
            past: { arabic: "عَمَّرَ", translation: "tikdi", examples: [
                { arabic: "عَمَّرَ مَسْجِدًا لِلَّهِ", translation: "Allah üçün bir məscid tikdi." },
                { arabic: "عَمَّرَتْ بَيْتَهَا", translation: "Evini abadlaşdırdı." }
            ]},
            present: { arabic: "يُعَمِّرُ", translation: "tikur, abadlaşdırır", examples: [
                { arabic: "يُعَمِّرُ المَسَاجِدَ", translation: "Məscidlər tikir." },
                { arabic: "يُعَمِّرُ الأَرْضَ", translation: "Torpağı abadlaşdırır." }
            ]},
            imperative: { arabic: "عَمِّرْ", translation: "tik, abadlaşdır!", examples: [
                { arabic: "عَمِّرْ مَسْجِدًا", translation: "Məscid tik!" },
                { arabic: "عَمِّرْ بِالطَّاعَةِ", translation: "İtaətlə ömrünü uzat!" }
            ]}
        }
    },
{
        id: 178,
        arabic: "هَدَمَ",
        meaning: "uçurmaq, sökmək",
        forms: {
            past: { arabic: "هَدَمَ", translation: "uçurdu", examples: [
                { arabic: "هَدَمَ البِنَاءَ", translation: "Binanı uçurdu." },
                { arabic: "هَدَمَتْ مَا بَنَتْ", translation: "Tikdiyini sökdü." }
            ]},
            present: { arabic: "يَهْدِمُ", translation: "uçurur", examples: [
                { arabic: "يَهْدِمُ الجُدْرَانَ", translation: "Divarları uçurur." },
                { arabic: "يَهْدِمُ بِسَبَبِ التَّجْدِيدِ", translation: "Yeniləmə üçün uçurur." }
            ]},
            imperative: { arabic: "اِهْدِمْ", translation: "uçur!", examples: [
                { arabic: "اِهْدِمْ مَا يَضُرُّ", translation: "Zərər verəni uçur!" },
                { arabic: "اِهْدِمْ بِحَذَرٍ", translation: "Ehtiyatla uçur!" }
            ]}
        }
    },
{
        id: 179,
        arabic: "بَنَى",
        meaning: "tikmək, qurmaq",
        forms: {
            past: { arabic: "بَنَى", translation: "tikdi", examples: [
                { arabic: "بَنَى مَسْجِدًا", translation: "Məscid tikdi." },
                { arabic: "بَنَتْ بَيْتَهَا", translation: "Evini tikdi." }
            ]},
            present: { arabic: "يَبْنِي", translation: "tikur", examples: [
                { arabic: "يَبْنِي المَسَاجِدَ", translation: "Məscidlər tikir." },
                { arabic: "يَبْنِي لِلآخِرَةِ", translation: "Axirət üçün qurur." }
            ]},
            imperative: { arabic: "اِبْنِ", translation: "tik!", examples: [
                { arabic: "اِبْنِ مَسْجِدًا", translation: "Məscid tik!" },
                { arabic: "اِبْنِ لِنَفْسِكَ بَيْتًا فِي الجَنَّةِ", translation: "Özünə cənnətdə ev tik!" }
            ]}
        }
    },
{
        id: 180,
        arabic: "نَقَضَ",
        meaning: "pozmaq, sökmək",
        forms: {
            past: { arabic: "نَقَضَ", translation: "pozdu", examples: [
                { arabic: "نَقَضَ العَهْدَ", translation: "Əhdi pozdu." },
                { arabic: "نَقَضَتْ مَا بَنَتْ", translation: "Tikdiyini sökdü." }
            ]},
            present: { arabic: "يَنْقُضُ", translation: "pozur", examples: [
                { arabic: "يَنْقُضُ العُهُودَ", translation: "Əhdləri pozur." },
                { arabic: "يَنْقُضُ مَا أَبْرَمَ", translation: "Bağladığını pozur." }
            ]},
            imperative: { arabic: "لَا تَنْقُضْ", translation: "pozma!", examples: [
                { arabic: "لَا تَنْقُضِ العَهْدَ", translation: "Əhdi pozma!" },
                { arabic: "لَا تَنْقُضْ مَا بَنَيْتَ", translation: "Tikdiyini sökmə!" }
            ]}
        }
    },
{
        id: 181,
        arabic: "أَخْلَفَ",
        meaning: "vədinə xilaf çıxmaq, sözünü tutmamaq",
        forms: {
            past: { arabic: "أَخْلَفَ", translation: "xilaf çıxdı", examples: [
                { arabic: "أَخْلَفَ وَعْدَهُ", translation: "Vədinə xilaf çıxdı." },
                { arabic: "أَخْلَفَتْ عَهْدَهَا", translation: "Əhdinə xilaf çıxdı." }
            ]},
            present: { arabic: "يُخْلِفُ", translation: "xilaf çıxır", examples: [
                { arabic: "يُخْلِفُ بِوَعْدِهِ", translation: "Vədinə xilaf çıxır." },
                { arabic: "يُخْلِفُ العَهْدَ", translation: "Əhdi pozur." }
            ]},
            imperative: { arabic: "لَا تُخْلِفْ", translation: "xilaf çıxma!", examples: [
                { arabic: "لَا تُخْلِفْ وَعْدَكَ", translation: "Vədinə xilaf çıxma!" },
                { arabic: "لَا تُخْلِفْ عَهْدَكَ", translation: "Əhdinə xilaf çıxma!" }
            ]}
        }
    },
{
        id: 182,
        arabic: "اِسْتَقْرَضَ",
        meaning: "borc almaq",
        forms: {
            past: { arabic: "اِسْتَقْرَضَ", translation: "borc aldı", examples: [
                { arabic: "اِسْتَقْرَضَ مَالًا", translation: "Pul borc aldı." },
                { arabic: "اِسْتَقْرَضَتْ لِحَاجَةٍ", translation: "Ehtiyac üçün borc aldı." }
            ]},
            present: { arabic: "يَسْتَقْرِضُ", translation: "borc alır", examples: [
                { arabic: "يَسْتَقْرِضُ لِيَقْضِيَ حَاجَتَهُ", translation: "Ehtiyacını ödəmək üçün borc alır." },
                { arabic: "يَسْتَقْرِضُ بِالفَائِدَةِ", translation: "Faizlə borc alır." }
            ]},
            imperative: { arabic: "اِسْتَقْرِضْ", translation: "borc al!", examples: [
                { arabic: "اِسْتَقْرِضْ لِحَاجَةٍ ضَرُورِيَّةٍ", translation: "Zəruri ehtiyac üçün borc al!" },
                { arabic: "اِسْتَقْرِضْ دُونَ فَائِدَةٍ", translation: "Faizsiz borc al!" }
            ]}
        }
    },
{
        id: 183,
        arabic: "أَقْرَضَ",
        meaning: "borc vermək",
        forms: {
            past: { arabic: "أَقْرَضَ", translation: "borc verdi", examples: [
                { arabic: "أَقْرَضَ أَخَاهُ مَالًا", translation: "Qardaşına pul borc verdi." },
                { arabic: "أَقْرَضَتْ جَارَهَا", translation: "Qonşusuna borc verdi." }
            ]},
            present: { arabic: "يُقْرِضُ", translation: "borc verir", examples: [
                { arabic: "يُقْرِضُ المُحْتَاجَ", translation: "Ehtiyacı olana borc verir." },
                { arabic: "يُقْرِضُ بِدُونِ فَائِدَةٍ", translation: "Faizsiz borc verir." }
            ]},
            imperative: { arabic: "أَقْرِضْ", translation: "borc ver!", examples: [
                { arabic: "أَقْرِضْ أَخَاكَ", translation: "Qardaşına borc ver!" },
                { arabic: "أَقْرِضْ فِي سَبِيلِ اللَّهِ", translation: "Allah yolunda borc ver!" }
            ]}
        }
    },
{
        id: 184,
        arabic: "وَفَّى",
        meaning: "ödəmək, tam yerinə yetirmək",
        forms: {
            past: { arabic: "وَفَّى", translation: "ödədi", examples: [
                { arabic: "وَفَّى بِدَيْنِهِ", translation: "Borcunu ödədi." },
                { arabic: "وَفَّتْ بِوَعْدِهَا", translation: "Vədini yerinə yetirdi." }
            ]},
            present: { arabic: "يُوَفِّي", translation: "ödəyir", examples: [
                { arabic: "يُوَفِّي بِالْكَيْلِ وَالمِيزَانِ", translation: "Ölçü və tərəzidə tam verir." },
                { arabic: "يُوَفِّي بِعَهْدِهِ", translation: "Əhdini yerinə yetirir." }
            ]},
            imperative: { arabic: "وَفِّ", translation: "ödə!", examples: [
                { arabic: "وَفِّ بِدَيْنِكَ", translation: "Borcunu ödə!" },
                { arabic: "وَفِّ بِوَعْدِكَ", translation: "Vədini yerinə yetir!" }
            ]}
        }
    },
{
        id: 185,
        arabic: "اِتَّجَرَ",
        meaning: "ticarət etmək",
        forms: {
            past: { arabic: "اِتَّجَرَ", translation: "ticarət etdi", examples: [
                { arabic: "اِتَّجَرَ بِالحَلَالِ", translation: "Halal ticarət etdi." },
                { arabic: "اِتَّجَرَتْ فِي السُّوقِ", translation: "Bazarda ticarət etdi." }
            ]},
            present: { arabic: "يَتَّجِرُ", translation: "ticarət edir", examples: [
                { arabic: "يَتَّجِرُ فِي المَلَابِسِ", translation: "Paltar ticarəti edir." },
                { arabic: "يَتَّجِرُ بِالأَمَانَةِ", translation: "Əmanətlə ticarət edir." }
            ]},
            imperative: { arabic: "اِتَّجِرْ", translation: "ticarət et!", examples: [
                { arabic: "اِتَّجِرْ بِالحَلَالِ", translation: "Halal ticarət et!" },
                { arabic: "اِتَّجِرْ وَلَا تَغُشَّ", translation: "Ticarət et və aldatma!" }
            ]}
        }
    },
{
        id: 186,
        arabic: "غَشَّ",
        meaning: "aldatmaq, fırıldaq etmək",
        forms: {
            past: { arabic: "غَشَّ", translation: "aldatdı", examples: [
                { arabic: "غَشَّ فِي البَيْعِ", translation: "Satışda aldatdı." },
                { arabic: "غَشَّ فِي الامْتِحَانِ", translation: "İmtahanda fırıldaq etdi." }
            ]},
            present: { arabic: "يَغُشُّ", translation: "aldadır", examples: [
                { arabic: "يَغُشُّ النَّاسَ", translation: "İnsanları aldadır." },
                { arabic: "يَغُشُّ فِي التِّجَارَةِ", translation: "Ticarətdə fırıldaq edir." }
            ]},
            imperative: { arabic: "لَا تَغُشَّ", translation: "aldatma!", examples: [
                { arabic: "لَا تَغُشَّ فِي البَيْعِ", translation: "Satışda aldatma!" },
                { arabic: "لَا تَغُشَّ فِي أَيِّ شَيْءٍ", translation: "Heç bir şeydə aldatma!" }
            ]}
        }
    },
{
        id: 187,
        arabic: "وَكَّلَ",
        meaning: "vəkil etmək, tapşırmaq",
        forms: {
            past: { arabic: "وَكَّلَ", translation: "vəkil etdi", examples: [
                { arabic: "وَكَّلَ مَنْ يَقْضِي عَنْهُ", translation: "Özünün yerinə işi görəcək birini vəkil etdi." },
                { arabic: "وَكَّلَتْ أَخَاهَا فِي البَيْعِ", translation: "Satışda qardaşını vəkil etdi." }
            ]},
            present: { arabic: "يُوَكِّلُ", translation: "vəkil edir", examples: [
                { arabic: "يُوَكِّلُ مَنْ يَثِقُ بِهِ", translation: "Etibar etdiyini vəkil edir." },
                { arabic: "يُوَكِّلُ فِي الأُمُورِ الشَّرْعِيَّةِ", translation: "Şəri işlərdə vəkil edir." }
            ]},
            imperative: { arabic: "وَكِّلْ", translation: "vəkil et!", examples: [
                { arabic: "وَكِّلْ مَنْ يَنُوبُ عَنْكَ", translation: "Sənin yerinə keçəcək birini vəkil et!" },
                { arabic: "وَكِّلْ فِي الخَيْرِ", translation: "Xeyirdə vəkil et!" }
            ]}
        }
    },
{
        id: 188,
        arabic: "تَوَكَّلَ عَلَى اللَّهِ",
        meaning: "Allaha təvəkkül etmək",
        forms: {
            past: { arabic: "تَوَكَّلَ عَلَى اللَّهِ", translation: "Allaha təvəkkül etdi", examples: [
                { arabic: "تَوَكَّلَ عَلَى اللَّهِ فِي أُمُورِهِ", translation: "İşlərində Allaha təvəkkül etdi." },
                { arabic: "تَوَكَّلَتْ عَلَى اللَّهِ", translation: "Allaha təvəkkül etdi." }
            ]},
            present: { arabic: "يَتَوَكَّلُ عَلَى اللَّهِ", translation: "Allaha təvəkkül edir", examples: [
                { arabic: "يَتَوَكَّلُ عَلَى اللَّهِ فِي كُلِّ أَمْرٍ", translation: "Hər işdə Allaha təvəkkül edir." },
                { arabic: "يَتَوَكَّلُ وَلَا يَيْأَسُ", translation: "Təvəkkül edir və ümidsiz olmur." }
            ]},
            imperative: { arabic: "تَوَكَّلْ عَلَى اللَّهِ", translation: "Allaha təvəkkül et!", examples: [
                { arabic: "تَوَكَّلْ عَلَى اللَّهِ", translation: "Allaha təvəkkül et!" },
                { arabic: "تَوَكَّلْ عَلَى الحَيِّ الَّذِي لَا يَمُوتُ", translation: "Ölməz diri olan Allaha təvəkkül et!" }
            ]}
        }
    },
{
        id: 189,
        arabic: "اِسْتَأْجَرَ",
        meaning: "kirayə götürmək, işə almaq",
        forms: {
            past: { arabic: "اِسْتَأْجَرَ", translation: "kirayə götürdü", examples: [
                { arabic: "اِسْتَأْجَرَ بَيْنًا", translation: "Ev kirayələdi." },
                { arabic: "اِسْتَأْجَرَتْ خَادِمًا", translation: "Xidmətçi işə götürdü." }
            ]},
            present: { arabic: "يَسْتَأْجِرُ", translation: "kirayə götürür", examples: [
                { arabic: "يَسْتَأْجِرُ مَحَلًّا", translation: "Dükan kirayələyir." },
                { arabic: "يَسْتَأْجِرُ عُمَّالًا", translation: "İşçi işə alır." }
            ]},
            imperative: { arabic: "اِسْتَأْجِرْ", translation: "kirayə götür!", examples: [
                { arabic: "اِسْتَأْجِرْ مَا تَحْتَاجُ إِلَيْهِ", translation: "Ehtiyacın olanı kirayələ!" },
                { arabic: "اِسْتَأْجِرْ بِأَجْرٍ عَادِلٍ", translation: "Ədalətli qiymətə kirayələ!" }
            ]}
        }
    },
{
        id: 190,
        arabic: "أَجَّرَ",
        meaning: "kirayə vermək",
        forms: {
            past: { arabic: "أَجَّرَ", translation: "kirayə verdi", examples: [
                { arabic: "أَجَّرَ بَيْتَهُ", translation: "Evini kirayə verdi." },
                { arabic: "أَجَّرَتْ مَحَلَّهَا", translation: "Dükanını kirayə verdi." }
            ]},
            present: { arabic: "يُؤَجِّرُ", translation: "kirayə verir", examples: [
                { arabic: "يُؤَجِّرُ العَقَارَ", translation: "Əmlakı kirayə verir." },
                { arabic: "يُؤَجِّرُ بِأَجْرٍ مَعْلُومٍ", translation: "Müəyyən qiymətə kirayə verir." }
            ]},
            imperative: { arabic: "أَجِّرْ", translation: "kirayə ver!", examples: [
                { arabic: "أَجِّرْ بَيْتَكَ", translation: "Evini kirayə ver!" },
                { arabic: "أَجِّرْ بِالسَّعْرِ العَادِلِ", translation: "Ədalətli qiymətə kirayə ver!" }
            ]}
        }
    },
{
        id: 191,
        arabic: "اِسْتَثْمَرَ",
        meaning: "sərmayə qoymaq, istifadə etmək",
        forms: {
            past: { arabic: "اِسْتَثْمَرَ", translation: "sərmayə qoydu", examples: [
                { arabic: "اِسْتَثْمَرَ مَالَهُ فِي الحَلَالِ", translation: "Malını halala yatırdı." },
                { arabic: "اِسْتَثْمَرَتْ فِي التِّجَارَةِ", translation: "Ticarətə sərmayə qoydu." }
            ]},
            present: { arabic: "يَسْتَثْمِرُ", translation: "sərmayə qoyur", examples: [
                { arabic: "يَسْتَثْمِرُ فِي مَشَارِيعَ خَيْرِيَّةٍ", translation: "Xeyriyyə layihələrinə sərmayə qoyur." },
                { arabic: "يَسْتَثْمِرُ بِالحَلَالِ", translation: "Halal yolla sərmayə qoyur." }
            ]},
            imperative: { arabic: "اِسْتَثْمِرْ", translation: "sərmayə qoy!", examples: [
                { arabic: "اِسْتَثْمِرْ فِي الحَلَالِ", translation: "Halala sərmayə qoy!" },
                { arabic: "اِسْتَثْمِرْ فِي الخَيْرِ", translation: "Xeyirə sərmayə qoy!" }
            ]}
        }
    },
{
        id: 192,
        arabic: "اِدَّخَرَ",
        meaning: "yığmaq, qənaət etmək",
        forms: {
            past: { arabic: "اِدَّخَرَ", translation: "yığdı", examples: [
                { arabic: "اِدَّخَرَ مَالًا لِلآخِرَةِ", translation: "Axirət üçün mal yığdı." },
                { arabic: "اِدَّخَرَتْ لِوَقْتِ الحَاجَةِ", translation: "Ehtiyac vaxtı üçün yığdı." }
            ]},
            present: { arabic: "يَدَّخِرُ", translation: "yığır", examples: [
                { arabic: "يَدَّخِرُ مِنْ رِزْقِهِ", translation: "Ruzisindən yığır." },
                { arabic: "يَدَّخِرُ لِلْمُسْتَقْبَلِ", translation: "Gələcək üçün yığır." }
            ]},
            imperative: { arabic: "اِدَّخِرْ", translation: "yığ!", examples: [
                { arabic: "اِدَّخِرْ لِوَقْتِ الحَاجَةِ", translation: "Ehtiyac vaxtı üçün yığ!" },
                { arabic: "اِدَّخِرْ مِنْ دُنْيَاكَ لِآخِرَتِكَ", translation: "Dünyandan axirətinə yığ!" }
            ]}
        }
    },
{
        id: 193,
        arabic: "اِسْتَغْلَى",
        meaning: "bahalı saymaq, baha qiymətləndirmək",
        forms: {
            past: { arabic: "اِسْتَغْلَى", translation: "bahalı saydı", examples: [
                { arabic: "اِسْتَغْلَى السِّلْعَةَ", translation: "Malı bahalı saydı." },
                { arabic: "اِسْتَغْلَتِ الثَّوْبَ", translation: "Paltarı bahalı saydı." }
            ]},
            present: { arabic: "يَسْتَغْلِي", translation: "bahalı sayır", examples: [
                { arabic: "يَسْتَغْلِي مَا يَشْتَرِيهِ", translation: "Alacağını bahalı sayır." },
                { arabic: "يَسْتَغْلِي الأَسْعَارَ", translation: "Qiymətləri bahalı sayır." }
            ]},
            imperative: { arabic: "لَا تَسْتَغْلِ", translation: "bahalı sayma!", examples: [
                { arabic: "لَا تَسْتَغْلِ فِي شِرَاءِ مَا تَحْتَاجُ", translation: "Ehtiyacını alarkən bahalı sayma!" },
                { arabic: "لَا تَسْتَغْلِ الحَلَالَ", translation: "Halalı bahalı sayma!" }
            ]}
        }
    },
{
        id: 194,
        arabic: "اِسْتَخْفَضَ",
        meaning: "ucuz saymaq, endirim etmək",
        forms: {
            past: { arabic: "اِسْتَخْفَضَ", translation: "ucuz saydı", examples: [
                { arabic: "اِسْتَخْفَضَ فِي الثَّمَنِ", translation: "Qiymətdə endirim etdi." },
                { arabic: "اِسْتَخْفَضَتِ البَائِعَةُ", translation: "Satıcı endirim etdi." }
            ]},
            present: { arabic: "يَسْتَخْفِضُ", translation: "ucuz sayır", examples: [
                { arabic: "يَسْتَخْفِضُ فِي الأَسْعَارِ", translation: "Qiymətlərdə endirim edir." },
                { arabic: "يَسْتَخْفِضُ لِلزَّبَائِنِ", translation: "Müştərilərə endirim edir." }
            ]},
            imperative: { arabic: "اِسْتَخْفِضْ", translation: "ucuz say!", examples: [
                { arabic: "اِسْتَخْفِضْ فِي البَيْعِ", translation: "Satışda endirim et!" },
                { arabic: "اِسْتَخْفِضْ لِلْفُقَرَاءِ", translation: "Kasıblara endirim et!" }
            ]}
        }
    },
{
        id: 195,
        arabic: "اِسْتَحْيَا",
        meaning: "utanmaq, həya etmək",
        forms: {
            past: { arabic: "اِسْتَحْيَا", translation: "utandı", examples: [
                { arabic: "اِسْتَحْيَا مِنَ اللَّهِ", translation: "Allahdan utandı." },
                { arabic: "اِسْتَحْيَتْ مِنَ النَّاسِ", translation: "İnsanlardan utandı." }
            ]},
            present: { arabic: "يَسْتَحْيِي", translation: "utanır", examples: [
                { arabic: "يَسْتَحْيِي مِنَ الذَّنْبِ", translation: "Günahdan utanır." },
                { arabic: "يَسْتَحْيِي مِنَ الخَلْقِ", translation: "Məxluqdan utanır." }
            ]},
            imperative: { arabic: "اِسْتَحْيِ", translation: "utan!", examples: [
                { arabic: "اِسْتَحْيِ مِنَ اللَّهِ", translation: "Allahdan utan!" },
                { arabic: "اِسْتَحْيِ كَمَا يَنْبَغِي", translation: "Lazım olduğu kimi utan!" }
            ]}
        }
    },
{
        id: 196,
        arabic: "اِحْتَشَمَ",
        meaning: "həyalı olmaq, örtünmək",
        forms: {
            past: { arabic: "اِحْتَشَمَ", translation: "həyalı oldu", examples: [
                { arabic: "اِحْتَشَمَ فِي لِبَاسِهِ", translation: "Geyimində həyalı oldu." },
                { arabic: "اِحْتَشَمَتْ فِي حِجَابِهَا", translation: "Hicabında həyalı oldu." }
            ]},
            present: { arabic: "يَحْتَشِمُ", translation: "həyalı olur", examples: [
                { arabic: "يَحْتَشِمُ فِي كَلَامِهِ", translation: "Danışığında həyalı olur." },
                { arabic: "يَحْتَشِمُ فِي تَصَرُّفَاتِهِ", translation: "Davranışlarında həyalı olur." }
            ]},
            imperative: { arabic: "اِحْتَشِمْ", translation: "həyalı ol!", examples: [
                { arabic: "اِحْتَشِمْ فِي لِبَاسِكَ", translation: "Geyimində həyalı ol!" },
                { arabic: "اِحْتَشِمْ فِي كَلَامِكَ", translation: "Danışığında həyalı ol!" }
            ]}
        }
    },
{
        id: 197,
        arabic: "اِتَّقَى",
        meaning: "təqvalı olmaq, qorunmaq",
        forms: {
            past: { arabic: "اِتَّقَى", translation: "təqvalı oldu", examples: [
                { arabic: "اِتَّقَى اللَّهَ", translation: "Allahdan qorxdu (təqvalı oldu)." },
                { arabic: "اِتَّقَتْ رَبَّهَا", translation: "Rəbbindən qorxdu." }
            ]},
            present: { arabic: "يَتَّقِي", translation: "təqvalı olur", examples: [
                { arabic: "يَتَّقِي اللَّهَ فِي أُمُورِهِ", translation: "İşlərində Allahdan qorxur." },
                { arabic: "يَتَّقِي النَّارَ", translation: "Atəşdən qorunur." }
            ]},
            imperative: { arabic: "اِتَّقِ", translation: "təqvalı ol!", examples: [
                { arabic: "اِتَّقِ اللَّهَ", translation: "Allahdan qorx!" },
                { arabic: "اِتَّقِ اللَّهَ حَيْثُمَا كُنْتَ", translation: "Harada olsan Allahdan qorx!" }
            ]}
        }
    },
{
        id: 198,
        arabic: "اِسْتَخَارَ",
        meaning: "xeyir diləmək (istixarə etmək)",
        forms: {
            past: { arabic: "اِسْتَخَارَ", translation: "istixarə etdi", examples: [
                { arabic: "اِسْتَخَارَ اللَّهَ فِي الأَمْرِ", translation: "İşdə Allahdan xeyir dilədi." },
                { arabic: "اِسْتَخَارَتْ فِي الزَّوَاجِ", translation: "Evlilikdə istixarə etdi." }
            ]},
            present: { arabic: "يَسْتَخِيرُ", translation: "istixarə edir", examples: [
                { arabic: "يَسْتَخِيرُ فِي كُلِّ أَمْرٍ", translation: "Hər işdə istixarə edir." },
                { arabic: "يَسْتَخِيرُ قَبْلَ القَرَارِ", translation: "Qərar verməzdən əvvəl istixarə edir." }
            ]},
            imperative: { arabic: "اِسْتَخِرْ", translation: "istixarə et!", examples: [
                { arabic: "اِسْتَخِرْ فِي أُمُورِكَ", translation: "İşlərində istixarə et!" },
                { arabic: "اِسْتَخِرْ اللَّهَ", translation: "Allahdan xeyir dilə!" }
            ]}
        }
    },
{
        id: 199,
        arabic: "اِسْتَقَامَ عَلَى الحَقِّ",
        meaning: "haqq üzərində sabit qalmaq",
        forms: {
            past: { arabic: "اِسْتَقَامَ عَلَى الحَقِّ", translation: "haqqda sabit qaldı", examples: [
                { arabic: "اِسْتَقَامَ عَلَى الإِسْلَامِ", translation: "İslamda sabit qaldı." },
                { arabic: "اِسْتَقَامَتْ عَلَى الصَّلَاةِ", translation: "Namazda sabit qaldı." }
            ]},
            present: { arabic: "يَسْتَقِيمُ عَلَى الحَقِّ", translation: "haqqda sabit qalır", examples: [
                { arabic: "يَسْتَقِيمُ عَلَى أَمْرِ اللَّهِ", translation: "Allahın əmrində sabit qalır." },
                { arabic: "يَسْتَقِيمُ فِي طَرِيقِ الهُدَى", translation: "Hidayət yolunda sabit qalır." }
            ]},
            imperative: { arabic: "اِسْتَقِمْ عَلَى الحَقِّ", translation: "haqqda sabit qal!", examples: [
                { arabic: "اِسْتَقِمْ عَلَى الصَّلَاةِ", translation: "Namazda sabit qal!" },
                { arabic: "اِسْتَقِمْ عَلَى الإِسْلَامِ", translation: "İslamda sabit qal!" }
            ]}
        }
    },
{
        id: 200,
        arabic: "اِخْتَارَ",
        meaning: "seçmək",
        forms: {
            past: { arabic: "اِخْتَارَ", translation: "seçdi", examples: [
                { arabic: "اِخْتَارَ اللَّهُ لَهُ الخَيْرَ", translation: "Allah onun üçün xeyri seçdi." },
                { arabic: "اِخْتَارَتْ مَا يُرْضِي اللَّهَ", translation: "Allahı razı salanı seçdi." }
            ]},
            present: { arabic: "يَخْتَارُ", translation: "seçir", examples: [
                { arabic: "يَخْتَارُ مَا هُوَ خَيْرٌ لَهُ", translation: "Özü üçün daha xeyirli olanı seçir." },
                { arabic: "يَخْتَارُ الصُّحْبَةَ الصَّالِحَةَ", translation: "Saleh yoldaşları seçir." }
            ]},
            imperative: { arabic: "اِخْتَرْ", translation: "seç!", examples: [
                { arabic: "اِخْتَرْ مَا يُرْضِي اللَّهَ", translation: "Allahı razı salanı seç!" },
                { arabic: "اِخْتَرْ لِنَفْسِكَ مَا يَنْفَعُهَا", translation: "Özünə fayda verəni seç!" }
            ]}
        }
    },
{
    id: 201,
    arabic: "تَزَكَّى",
    meaning: "təmizlənmək, zəkat vermək",
    forms: {
        past: { arabic: "تَزَكَّى", translation: "təmizləndi", examples: [
            { arabic: "تَزَكَّى المُؤْمِنُ بِالصَّدَقَةِ", translation: "Mömin sədəqə ilə təmizləndi." },
            { arabic: "تَزَكَّتِ النَّفْسُ بِالطَّاعَةِ", translation: "Nəfs itaətlə təmizləndi." }
        ]},
        present: { arabic: "يَتَزَكَّى", translation: "təmizlənir", examples: [
            { arabic: "يَتَزَكَّى بِالعِبَادَةِ", translation: "İbadətlə təmizlənir." },
            { arabic: "يَتَزَكَّى بِالتَّوْبَةِ", translation: "Tövbə ilə təmizlənir." }
        ]},
        imperative: { arabic: "تَزَكَّ", translation: "təmizlən!", examples: [
            { arabic: "تَزَكَّ بِالصَّدَقَةِ", translation: "Sədəqə ilə təmizlən!" },
            { arabic: "تَزَكَّ بِالتَّوْبَةِ", translation: "Tövbə ilə təmizlən!" }
        ]}
    }
},
{
    id: 202,
    arabic: "اِسْتَغْنَى",
    meaning: "ehtiyacsız olmaq, qənaət etmək",
    forms: {
        past: { arabic: "اِسْتَغْنَى", translation: "ehtiyacsız oldu", examples: [
            { arabic: "اِسْتَغْنَى بِاللَّهِ عَنِ النَّاسِ", translation: "İnsanlardan Allah ilə ehtiyacsız oldu." },
            { arabic: "اِسْتَغْنَتْ بِالقَلِيلِ", translation: "Az ilə kifayətləndi." }
        ]},
        present: { arabic: "يَسْتَغْنِي", translation: "ehtiyacsız olur", examples: [
            { arabic: "يَسْتَغْنِي بِالحَلَالِ", translation: "Halal ilə ehtiyacsız olur." },
            { arabic: "يَسْتَغْنِي عَنِ الحَرَامِ", translation: "Haramdan ehtiyacsız olur." }
        ]},
        imperative: { arabic: "اِسْتَغْنِ", translation: "ehtiyacsız ol!", examples: [
            { arabic: "اِسْتَغْنِ بِاللَّهِ", translation: "Allah ilə ehtiyacsız ol!" },
            { arabic: "اِسْتَغْنِ عَمَّا فِي أَيْدِي النَّاسِ", translation: "İnsanların əlində olandan ehtiyacsız ol!" }
        ]}
    }
},
{
    id: 203,
    arabic: "اِفْتَقَرَ",
    meaning: "kasıblaşmaq, ehtiyac duymaq",
    forms: {
        past: { arabic: "اِفْتَقَرَ", translation: "kasıblaşdı", examples: [
            { arabic: "اِفْتَقَرَ بَعْدَ غِنًى", translation: "Zənginlikdən sonra kasıblaşdı." },
            { arabic: "اِفْتَقَرَتْ إِلَى اللَّهِ", translation: "Allaha ehtiyac duydu." }
        ]},
        present: { arabic: "يَفْتَقِرُ", translation: "kasıblaşır", examples: [
            { arabic: "يَفْتَقِرُ إِلَى اللَّهِ", translation: "Allaha ehtiyac duyur." },
            { arabic: "يَفْتَقِرُ فِي أُمُورِ الدُّنْيَا", translation: "Dünya işlərində ehtiyac duyur." }
        ]},
        imperative: { arabic: "اِفْتَقِرْ", translation: "ehtiyac duy!", examples: [
            { arabic: "اِفْتَقِرْ إِلَى اللَّهِ", translation: "Allaha ehtiyac duy!" },
            { arabic: "اِفْتَقِرْ فِي كُلِّ أَحْوَالِكَ", translation: "Hər halda ehtiyacını bil!" }
        ]}
    }
},
{
    id: 204,
    arabic: "اِسْتَغَاثَ",
    meaning: "yardım istəmək (Allahdan)",
    forms: {
        past: { arabic: "اِسْتَغَاثَ", translation: "yardım istədi", examples: [
            { arabic: "اِسْتَغَاثَ بِاللَّهِ", translation: "Allahdan yardım istədi." },
            { arabic: "اِسْتَغَاثَتْ فِي الشِّدَّةِ", translation: "Çətinlikdə yardım istədi." }
        ]},
        present: { arabic: "يَسْتَغِيثُ", translation: "yardım istəyir", examples: [
            { arabic: "يَسْتَغِيثُ بِاللَّهِ", translation: "Allahdan yardım istəyir." },
            { arabic: "يَسْتَغِيثُ فِي المِحَنِ", translation: "Sınaqlarda yardım istəyir." }
        ]},
        imperative: { arabic: "اِسْتَغِثْ", translation: "yardım istə!", examples: [
            { arabic: "اِسْتَغِثْ بِاللَّهِ", translation: "Allahdan yardım istə!" },
            { arabic: "اِسْتَغِثْ فِي الشَّدَائِدِ", translation: "Çətinliklərdə yardım istə!" }
        ]}
    }
},
{
    id: 205,
    arabic: "اِسْتَجَارَ",
    meaning: "sığınmaq, himayə istəmək",
    forms: {
        past: { arabic: "اِسْتَجَارَ", translation: "sığındı", examples: [
            { arabic: "اِسْتَجَارَ بِاللَّهِ مِنَ الشَّيْطَانِ", translation: "Şeytandan Allaha sığındı." },
            { arabic: "اِسْتَجَارَتْ مِنَ العَذَابِ", translation: "Əzabdan sığındı." }
        ]},
        present: { arabic: "يَسْتَجِيرُ", translation: "sığınır", examples: [
            { arabic: "يَسْتَجِيرُ بِاللَّهِ", translation: "Allaha sığınır." },
            { arabic: "يَسْتَجِيرُ مِنَ النَّارِ", translation: "Cəhənnəmdən sığınır." }
        ]},
        imperative: { arabic: "اِسْتَجِرْ", translation: "sığın!", examples: [
            { arabic: "اِسْتَجِرْ بِاللَّهِ", translation: "Allaha sığın!" },
            { arabic: "اِسْتَجِرْ مِنْ شَرِّ كُلِّ ذِي شَرٍّ", translation: "Hər şər sahibinin şərindən sığın!" }
        ]}
    }
},
{
    id: 206,
    arabic: "اِعْتَصَمَ",
    meaning: "sarılmaq, möhkəm yapışmaq",
    forms: {
        past: { arabic: "اِعْتَصَمَ", translation: "sarldı", examples: [
            { arabic: "اِعْتَصَمَ بِحَبْلِ اللَّهِ", translation: "Allahın ipinə sarıldı." },
            { arabic: "اِعْتَصَمَتْ بِالكِتَابِ وَالسُّنَّةِ", translation: "Kitab və sünnəyə sarıldı." }
        ]},
        present: { arabic: "يَعْتَصِمُ", translation: "sarılır", examples: [
            { arabic: "يَعْتَصِمُ بِاللَّهِ", translation: "Allaha sarılır." },
            { arabic: "يَعْتَصِمُ بِالعَقِيدَةِ الصَّحِيحَةِ", translation: "Düzgün əqidəyə sarılır." }
        ]},
        imperative: { arabic: "اِعْتَصِمْ", translation: "sarıl!", examples: [
            { arabic: "اِعْتَصِمْ بِحَبْلِ اللَّهِ", translation: "Allahın ipinə sarıl!" },
            { arabic: "اِعْتَصِمْ بِالسُّنَّةِ", translation: "Sünnəyə sarıl!" }
        ]}
    }
},
{
    id: 207,
    arabic: "تَوَاضَعَ",
    meaning: "təvazökar olmaq",
    forms: {
        past: { arabic: "تَوَاضَعَ", translation: "təvazökar oldu", examples: [
            { arabic: "تَوَاضَعَ لِلَّهِ", translation: "Allah qarşısında təvazökar oldu." },
            { arabic: "تَوَاضَعَتْ مَعَ النَّاسِ", translation: "İnsanlarla təvazökar oldu." }
        ]},
        present: { arabic: "يَتَوَاضَعُ", translation: "təvazökar olur", examples: [
            { arabic: "يَتَوَاضَعُ لِلْمُؤْمِنِينَ", translation: "Möminlərə qarşı təvazökar olur." },
            { arabic: "يَتَوَاضَعُ فِي مَشْيِهِ", translation: "Gedişində təvazökar olur." }
        ]},
        imperative: { arabic: "تَوَاضَعْ", translation: "təvazökar ol!", examples: [
            { arabic: "تَوَاضَعْ لِلَّهِ", translation: "Allaha təvazökar ol!" },
            { arabic: "تَوَاضَعْ وَلَا تَتَكَبَّرْ", translation: "Təvazökar ol və təkəbbürlənmə!" }
        ]}
    }
},
{
    id: 208,
    arabic: "تَكَبَّرَ",
    meaning: "təkəbbürlənmək",
    forms: {
        past: { arabic: "تَكَبَّرَ", translation: "təkəbbürləndi", examples: [
            { arabic: "تَكَبَّرَ عَلَى النَّاسِ", translation: "İnsanlara qarşı təkəbbürləndi." },
            { arabic: "تَكَبَّرَتْ بِسَبَبِ المَالِ", translation: "Mala görə təkəbbürləndi." }
        ]},
        present: { arabic: "يَتَكَبَّرُ", translation: "təkəbbürlənir", examples: [
            { arabic: "يَتَكَبَّرُ فِي الأَرْضِ", translation: "Yer üzündə təkəbbürlənir." },
            { arabic: "يَتَكَبَّرُ عَلَى الخَلْقِ", translation: "Məxluqata qarşı təkəbbürlənir." }
        ]},
        imperative: { arabic: "لَا تَتَكَبَّرْ", translation: "təkəbbürlənmə!", examples: [
            { arabic: "لَا تَتَكَبَّرْ عَلَى النَّاسِ", translation: "İnsanlara qarşı təkəbbürlənmə!" },
            { arabic: "لَا تَتَكَبَّرْ وَلَوْ كُنْتَ غَنِيًّا", translation: "Zəngin olsan da təkəbbürlənmə!" }
        ]}
    }
},
{
    id: 209,
    arabic: "اِخْتَالَ",
    meaning: "lovğalanmaq, özünü bəyənmək",
    forms: {
        past: { arabic: "اِخْتَالَ", translation: "lovğalandı", examples: [
            { arabic: "اِخْتَالَ فِي مَشْيِهِ", translation: "Gedişində lovğalandı." },
            { arabic: "اِخْتَالَتْ بِمَلَابِسِهَا", translation: "Geyiminə görə lovğalandı." }
        ]},
        present: { arabic: "يَخْتَالُ", translation: "lovğalanır", examples: [
            { arabic: "يَخْتَالُ فِي كَلَامِهِ", translation: "Danışığında lovğalanır." },
            { arabic: "يَخْتَالُ عَلَى النَّاسِ", translation: "İnsanlara qarşı lovğalanır." }
        ]},
        imperative: { arabic: "لَا تَخْتَالْ", translation: "lovğalanma!", examples: [
            { arabic: "لَا تَخْتَالْ فِي مَشْيِكَ", translation: "Gedişində lovğalanma!" },
            { arabic: "لَا تَخْتَالْ عَلَى عِبَادِ اللَّهِ", translation: "Allahın qullarına qarşı lovğalanma!" }
        ]}
    }
},
{
    id: 210,
    arabic: "اِفْتَخَرَ",
    meaning: "fəxr etmək, qürur hissi",
    forms: {
        past: { arabic: "اِفْتَخَرَ", translation: "fəxr etdi", examples: [
            { arabic: "اِفْتَخَرَ بِدِينِهِ", translation: "Dini ilə fəxr etdi." },
            { arabic: "اِفْتَخَرَتْ بِإِسْلَامِهَا", translation: "İslamı ilə fəxr etdi." }
        ]},
        present: { arabic: "يَفْتَخِرُ", translation: "fəxr edir", examples: [
            { arabic: "يَفْتَخِرُ بِالإِسْلَامِ", translation: "İslamla fəxr edir." },
            { arabic: "يَفْتَخِرُ بِتَارِيخِ أُمَّتِهِ", translation: "Ümmətinin tarixi ilə fəxr edir." }
        ]},
        imperative: { arabic: "اِفْتَخِرْ", translation: "fəxr et!", examples: [
            { arabic: "اِفْتَخِرْ بِدِينِكَ", translation: "Dininlə fəxr et!" },
            { arabic: "اِفْتَخِرْ بِكِتَابِ رَبِّكَ", translation: "Rəbbinin kitabı ilə fəxr et!" }
        ]}
    }
},
{
    id: 211,
    arabic: "اِسْتَحْسَنَ",
    meaning: "gözəl saymaq",
    forms: {
        past: { arabic: "اِسْتَحْسَنَ", translation: "gözəl saydı", examples: [
            { arabic: "اِسْتَحْسَنَ فِعْلَ الخَيْرِ", translation: "Xeyir işi gözəl saydı." },
            { arabic: "اِسْتَحْسَنَتْ الصَّدَقَةَ", translation: "Sədəqəni gözəl saydı." }
        ]},
        present: { arabic: "يَسْتَحْسِنُ", translation: "gözəl sayır", examples: [
            { arabic: "يَسْتَحْسِنُ البِرَّ", translation: "Yaxşılığı gözəl sayır." },
            { arabic: "يَسْتَحْسِنُ مَا يُرْضِي اللَّهَ", translation: "Allahı razı salanı gözəl sayır." }
        ]},
        imperative: { arabic: "اِسْتَحْسِنْ", translation: "gözəl say!", examples: [
            { arabic: "اِسْتَحْسِنِ الخَيْرَ", translation: "Xeyiri gözəl say!" },
            { arabic: "اِسْتَحْسِنْ مَا يَنْفَعُ", translation: "Fayda verəni gözəl say!" }
        ]}
    }
},
{
    id: 212,
    arabic: "اِسْتَقْبَحَ",
    meaning: "çirkin saymaq",
    forms: {
        past: { arabic: "اِسْتَقْبَحَ", translation: "çirkin saydı", examples: [
            { arabic: "اِسْتَقْبَحَ الكَذِبَ", translation: "Yalanı çirkin saydı." },
            { arabic: "اِسْتَقْبَحَتِ الرِّيَاءَ", translation: "Riyanı çirkin saydı." }
        ]},
        present: { arabic: "يَسْتَقْبِحُ", translation: "çirkin sayır", examples: [
            { arabic: "يَسْتَقْبِحُ المَعَاصِيَ", translation: "Günahları çirkin sayır." },
            { arabic: "يَسْتَقْبِحُ الكَذِبَ", translation: "Yalanı çirkin sayır." }
        ]},
        imperative: { arabic: "اِسْتَقْبِحْ", translation: "çirkin say!", examples: [
            { arabic: "اِسْتَقْبِحِ المَعَاصِيَ", translation: "Günahları çirkin say!" },
            { arabic: "اِسْتَقْبِحْ مَا حَرَّمَ اللَّهُ", translation: "Allahın haram etdiyini çirkin say!" }
        ]}
    }
},
{
    id: 213,
    arabic: "أَنْكَرَ",
    meaning: "inkar etmək, rədd etmək",
    forms: {
        past: { arabic: "أَنْكَرَ", translation: "inkar etdi", examples: [
            { arabic: "أَنْكَرَ المُنْكَرَ", translation: "Pis işi rədd etdi." },
            { arabic: "أَنْكَرَتِ البِدْعَةَ", translation: "Bidəti rədd etdi." }
        ]},
        present: { arabic: "يُنْكِرُ", translation: "inkar edir", examples: [
            { arabic: "يُنْكِرُ المُنْكَرَ", translation: "Pis işi rədd edir." },
            { arabic: "يُنْكِرُ مَا يُخَالِفُ الشَّرْعَ", translation: "Şəriətə zidd olanı rədd edir." }
        ]},
        imperative: { arabic: "أَنْكِرْ", translation: "rədd et!", examples: [
            { arabic: "أَنْكِرِ المُنْكَرَ", translation: "Pis işi rədd et!" },
            { arabic: "أَنْكِرْ مَا يُخَالِفُ السُّنَّةَ", translation: "Sünnəyə zidd olanı rədd et!" }
        ]}
    }
},
{
    id: 214,
    arabic: "أَقَرَّ",
    meaning: "etiraf etmək, qəbul etmək",
    forms: {
        past: { arabic: "أَقَرَّ", translation: "etiraf etdi", examples: [
            { arabic: "أَقَرَّ بِالذَّنْبِ", translation: "Günahı etiraf etdi." },
            { arabic: "أَقَرَّ بِالحَقِّ", translation: "Haqqı qəbul etdi." }
        ]},
        present: { arabic: "يُقِرُّ", translation: "etiraf edir", examples: [
            { arabic: "يُقِرُّ بِتَقْصِيرِهِ", translation: "Qüsurunu etiraf edir." },
            { arabic: "يُقِرُّ بِالْحَقِّ", translation: "Haqqı qəbul edir." }
        ]},
        imperative: { arabic: "أَقِرَّ", translation: "etiraf et!", examples: [
            { arabic: "أَقِرَّ بِالْحَقِّ", translation: "Haqqı etiraf et!" },
            { arabic: "أَقِرَّ بِذَنْبِكَ", translation: "Günahını etiraf et!" }
        ]}
    }
},
{
    id: 215,
    arabic: "شَهِدَ",
    meaning: "şahidlik etmək",
    forms: {
        past: { arabic: "شَهِدَ", translation: "şahidlik etdi", examples: [
            { arabic: "شَهِدَ بِالحَقِّ", translation: "Haqq üçün şahidlik etdi." },
            { arabic: "شَهِدَتْ بِمَا رَأَتْ", translation: "Gördüyünə şahidlik etdi." }
        ]},
        present: { arabic: "يَشْهَدُ", translation: "şahidlik edir", examples: [
            { arabic: "يَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ", translation: "Allahdan başqa tanrı olmadığına şahidlik edir." },
            { arabic: "يَشْهَدُ بِالصِّدْقِ", translation: "Doğruluğa şahidlik edir." }
        ]},
        imperative: { arabic: "اِشْهَدْ", translation: "şahidlik et!", examples: [
            { arabic: "اِشْهَدْ بِالحَقِّ", translation: "Haqq üçün şahidlik et!" },
            { arabic: "اِشْهَدْ بِمَا تَعْلَمُ", translation: "Bildiyinə şahidlik et!" }
        ]}
    }
},
{
    id: 216,
    arabic: "حَكَى",
    meaning: "danışmaq, nəql etmək",
    forms: {
        past: { arabic: "حَكَى", translation: "danışdı", examples: [
            { arabic: "حَكَى قِصَّةً", translation: "Bir hekayə danışdı." },
            { arabic: "حَكَتْ مَا حَدَثَ", translation: "Baş verəni danışdı." }
        ]},
        present: { arabic: "يَحْكِي", translation: "danışır", examples: [
            { arabic: "يَحْكِي عَنْ سِيرَةِ النَّبِيِّ", translation: "Peyğəmbərin həyatını danışır." },
            { arabic: "يَحْكِي لِلْأَطْفَالِ", translation: "Uşaqlara danışır." }
        ]},
        imperative: { arabic: "اِحْكِ", translation: "danış!", examples: [
            { arabic: "اِحْكِ لَنَا مَا رَأَيْتَ", translation: "Bizə gördüyünü danış!" },
            { arabic: "اِحْكِ عَنْ قِصَّةِ الإِسْلَامِ", translation: "İslamın hekayəsini danış!" }
        ]}
    }
},
{
        id: 217,
        arabic: "قَصَّ",
        meaning: "hekayə danışmaq",
        forms: {
            past: { arabic: "قَصَّ", translation: "hekayə danışdı", examples: [
                { arabic: "قَصَّ عَلَيْنَا القِصَّةَ", translation: "Bizə hekayəni danışdı." },
                { arabic: "قَصَّتْ قِصَّةً مِنَ القُرْآنِ", translation: "Qurandan bir hekayə danışdı." }
            ]},
            present: { arabic: "يَقُصُّ", translation: "hekayə danışır", examples: [
                { arabic: "يَقُصُّ عَلَيْهِمْ قَصَصَ الأَنْبِيَاءِ", translation: "Onlara peyğəmbərlərin hekayələrini danışır." },
                { arabic: "يَقُصُّ مَا فِي القُرْآنِ", translation: "Quranda olanları danışır." }
            ]},
            imperative: { arabic: "اُقْصُصْ", translation: "hekayə danış!", examples: [
                { arabic: "اُقْصُصْ عَلَيْنَا قِصَّةً", translation: "Bizə bir hekayə danış!" },
                { arabic: "اُقْصُصْ مَا فِي كِتَابِ اللَّهِ", translation: "Allahın kitabındakıları danış!" }
            ]}
        }
    },
{
        id: 218,
        arabic: "أَوْجَزَ",
        meaning: "qısa danışmaq, icmal etmək",
        forms: {
            past: { arabic: "أَوْجَزَ", translation: "qısa danışdı", examples: [
                { arabic: "أَوْجَزَ فِي كَلَامِهِ", translation: "Danışığında qısa oldu." },
                { arabic: "أَوْجَزَتِ الخُطْبَةَ", translation: "Xütbəni qısalddı." }
            ]},
            present: { arabic: "يُوجِزُ", translation: "qısa danışır", examples: [
                { arabic: "يُوجِزُ فِي الدَّرْسِ", translation: "Dərsi qısa danışır." },
                { arabic: "يُوجِزُ الكَلَامَ", translation: "Sözü qısa edir." }
            ]},
            imperative: { arabic: "أَوْجِزْ", translation: "qısa danış!", examples: [
                { arabic: "أَوْجِزْ فِي كَلَامِكَ", translation: "Danışığında qısa ol!" },
                { arabic: "أَوْجِزْ وَلَا تُطِلْ", translation: "Qısa ol və uzatma!" }
            ]}
        }
    },
{
        id: 219,
        arabic: "أَطَالَ",
        meaning: "uzatmaq, uzun danışmaq",
        forms: {
            past: { arabic: "أَطَالَ", translation: "uzatdı", examples: [
                { arabic: "أَطَالَ الكَلَامَ", translation: "Sözü uzatdı." },
                { arabic: "أَطَالَتِ الشَّرْحَ", translation: "İzahı uzatdı." }
            ]},
            present: { arabic: "يُطِيلُ", translation: "uzadır", examples: [
                { arabic: "يُطِيلُ فِي الدَّرْسِ", translation: "Dərsi uzadır." },
                { arabic: "يُطِيلُ الكَلَامَ", translation: "Sözü uzadır." }
            ]},
            imperative: { arabic: "لَا تُطِلْ", translation: "uzatma!", examples: [
                { arabic: "لَا تُطِلِ الكَلَامَ", translation: "Sözü uzatma!" },
                { arabic: "لَا تُطِلْ فِي الشَّرْحِ", translation: "İzahı uzatma!" }
            ]}
        }
    },
{
        id: 220,
        arabic: "أَنْصَتَ",
        meaning: "diqqətlə dinləmək",
        forms: {
            past: { arabic: "أَنْصَتَ", translation: "diqqətlə dinlədi", examples: [
                { arabic: "أَنْصَتَ لِلْقُرْآنِ", translation: "Quranı diqqətlə dinlədi." },
                { arabic: "أَنْصَتَتْ لِلْخُطْبَةِ", translation: "Xütbəni diqqətlə dinlədi." }
            ]},
            present: { arabic: "يُنْصِتُ", translation: "diqqətlə dinləyir", examples: [
                { arabic: "يُنْصِتُ لِلْمُعَلِّمِ", translation: "Müəllimi diqqətlə dinləyir." },
                { arabic: "يُنْصِتُ لِلْقُرْآنِ", translation: "Quranı diqqətlə dinləyir." }
            ]},
            imperative: { arabic: "أَنْصِتْ", translation: "diqqətlə dinlə!", examples: [
                { arabic: "أَنْصِتْ لِلْقُرْآنِ", translation: "Quranı diqqətlə dinlə!" },
                { arabic: "أَنْصِتْ لِلْخُطْبَةِ", translation: "Xütbəni diqqətlə dinlə!" }
            ]}
        }
    },
{
        id: 221,
        arabic: "اِلْتَفَتَ",
        meaning: "dönmək, yönəlmək",
        forms: {
            past: { arabic: "اِلْتَفَتَ", translation: "döndü", examples: [
                { arabic: "اِلْتَفَتَ إِلَى القِبْلَةِ", translation: "Qibləyə yönəldi." },
                { arabic: "اِلْتَفَتَ إِلَى المَاضِي", translation: "Keçmişə döndü." }
            ]},
            present: { arabic: "يَلْتَفِتُ", translation: "dönür", examples: [
                { arabic: "يَلْتَفِتُ إِلَى الآخِرَةِ", translation: "Axirətə yönəlir." },
                { arabic: "يَلْتَفِتُ إِلَى الخَيْرِ", translation: "Xeyirə dönür." }
            ]},
            imperative: { arabic: "اِلْتَفِتْ", translation: "dön!", examples: [
                { arabic: "اِلْتَفِتْ إِلَى اللَّهِ", translation: "Allaha dön!" },
                { arabic: "اِلْتَفِتْ إِلَى مَا يَنْفَعُكَ", translation: "Sənə fayda verənə dön!" }
            ]}
        }
    },
{
        id: 222,
        arabic: "أَعْرَضَ",
        meaning: "üz döndərmək",
        forms: {
            past: { arabic: "أَعْرَضَ", translation: "üz döndərdi", examples: [
                { arabic: "أَعْرَضَ عَنِ الحَقِّ", translation: "Haqdan üz döndərdi." },
                { arabic: "أَعْرَضَتْ عَنِ النَّصِيحَةِ", translation: "Nəsihətdən üz döndərdi." }
            ]},
            present: { arabic: "يُعْرِضُ", translation: "üz döndərir", examples: [
                { arabic: "يُعْرِضُ عَنِ الذِّكْرِ", translation: "Zikrdən üz döndərir." },
                { arabic: "يُعْرِضُ عَنِ الآيَاتِ", translation: "Ayələrdən üz döndərir." }
            ]},
            imperative: { arabic: "لَا تُعْرِضْ", translation: "üz döndərmə!", examples: [
                { arabic: "لَا تُعْرِضْ عَنِ الحَقِّ", translation: "Haqdan üz döndərmə!" },
                { arabic: "لَا تُعْرِضْ عَنْ ذِكْرِ اللَّهِ", translation: "Allahın zikrindən üz döndərmə!" }
            ]}
        }
    },
{
        id: 223,
        arabic: "اِعْتَزَلَ",
        meaning: "kənara çəkilmək, təcrid olmaq",
        forms: {
            past: { arabic: "اِعْتَزَلَ", translation: "kənara çəkildi", examples: [
                { arabic: "اِعْتَزَلَ عَنْ أَهْلِ البِدَعِ", translation: "Bidətçilərdən uzaqlaşdı." },
                { arabic: "اِعْتَزَلَتْ عَنِ الفِتْنَةِ", translation: "Fitnədən kənar oldu." }
            ]},
            present: { arabic: "يَعْتَزِلُ", translation: "kənara çəkilir", examples: [
                { arabic: "يَعْتَزِلُ عِنْدَ الفِتَنِ", translation: "Fitnələr zamanı kənara çəkilir." },
                { arabic: "يَعْتَزِلُ مَا لَا يَعْنِيهِ", translation: "Onu maraqlandırmayan şeydən uzaq durur." }
            ]},
            imperative: { arabic: "اِعْتَزِلْ", translation: "kənara çəkil!", examples: [
                { arabic: "اِعْتَزِلِ الفِتَنَ", translation: "Fitnələrdən uzaq ol!" },
                { arabic: "اِعْتَزِلْ أَهْلَ الشَّرِّ", translation: "Şər əhlindən uzaq ol!" }
            ]}
        }
    },
{
        id: 224,
        arabic: "خَالَطَ",
        meaning: "qarışmaq, bir arada olmaq",
        forms: {
            past: { arabic: "خَالَطَ", translation: "qarışdı", examples: [
                { arabic: "خَالَطَ النَّاسَ بِالخَيْرِ", translation: "İnsanlarla xeyirlə qarışdı." },
                { arabic: "خَالَطَتِ الصَّالِحِينَ", translation: "Salehlərlə bir arada oldu." }
            ]},
            present: { arabic: "يُخَالِطُ", translation: "qarışır", examples: [
                { arabic: "يُخَالِطُ النَّاسَ وَيَصْبِرُ عَلَى أَذَاهُمْ", translation: "İnsanlarla qarışır və əziyyətlərinə səbir edir." },
                { arabic: "يُخَالِطُ المُجْتَمَعَ", translation: "Cəmiyyətlə birlikdə olur." }
            ]},
            imperative: { arabic: "خَالِطْ", translation: "qarış!", examples: [
                { arabic: "خَالِطِ النَّاسَ بِالخَيْرِ", translation: "İnsanlarla xeyirlə qarış!" },
                { arabic: "خَالِطْ وَلَا تُفْسِدْ", translation: "Qarış, amma pozma!" }
            ]}
        }
    },
{
        id: 225,
        arabic: "اِجْتَنَبَ",
        meaning: "uzaq durmaq, çəkinmək",
        forms: {
            past: { arabic: "اِجْتَنَبَ", translation: "uzaq durdu", examples: [
                { arabic: "اِجْتَنَبَ الكَبَائِرَ", translation: "Böyük günahlardan uzaq durdu." },
                { arabic: "اِجْتَنَبَتِ الغِيبَةَ وَالنَّمِيمَةَ", translation: "Qeybət və söz gəzdirəndən uzaq durdu." }
            ]},
            present: { arabic: "يَجْتَنِبُ", translation: "uzaq durur", examples: [
                { arabic: "يَجْتَنِبُ الرِّبَا", translation: "Sələmdən uzaq durur." },
                { arabic: "يَجْتَنِبُ المَعَاصِيَ", translation: "Günahlardan uzaq durur." }
            ]},
            imperative: { arabic: "اِجْتَنِبْ", translation: "uzaq dur!", examples: [
                { arabic: "اِجْتَنِبِ الشُّبُهَاتِ", translation: "Şübhəli şeylərdən uzaq dur!" },
                { arabic: "اِجْتَنِبْ مَا حَرَّمَ اللَّهُ", translation: "Allahın haram etdiyindən uzaq dur!" }
            ]}
        }
    },
{
        id: 226,
        arabic: "اِلْتَزَمَ",
        meaning: "riayət etmək, bağlı qalmaq",
        forms: {
            past: { arabic: "اِلْتَزَمَ", translation: "riayət etdi", examples: [
                { arabic: "اِلْتَزَمَ بِالسُّنَّةِ", translation: "Sünnəyə bağlı qaldı." },
                { arabic: "اِلْتَزَمَتْ بِالحِجَابِ الشَّرْعِيِّ", translation: "Şəri hicapla örtündü." }
            ]},
            present: { arabic: "يَلْتَزِمُ", translation: "riayət edir", examples: [
                { arabic: "يَلْتَزِمُ بِالصَّلَاةِ فِي وَقْتِهَا", translation: "Namazı vaxtında qılır." },
                { arabic: "يَلْتَزِمُ بِآدَابِ الإِسْلَامِ", translation: "İslam ədəblərinə riayət edir." }
            ]},
            imperative: { arabic: "اِلْتَزِمْ", translation: "riayət et!", examples: [
                { arabic: "اِلْتَزِمْ بِالسُّنَّةِ", translation: "Sünnəyə bağlı qal!" },
                { arabic: "اِلْتَزِمْ بِالصَّلَاةِ", translation: "Namaza riayət et!" }
            ]}
        }
    },
{
        id: 227,
        arabic: "اِسْتَمْسَكَ",
        meaning: "sarılmaq, tutmaq",
        forms: {
            past: { arabic: "اِسْتَمْسَكَ", translation: "sarldı", examples: [
                { arabic: "اِسْتَمْسَكَ بِالكِتَابِ", translation: "Kitaba sarıldı." },
                { arabic: "اِسْتَمْسَكَتْ بِالسُّنَّةِ", translation: "Sünnəyə sarıldı." }
            ]},
            present: { arabic: "يَسْتَمْسِكُ", translation: "sarılır", examples: [
                { arabic: "يَسْتَمْسِكُ بِالعَقِيدَةِ", translation: "Əqidəyə sarılır." },
                { arabic: "يَسْتَمْسِكُ بِالحَقِّ", translation: "Haqqa sarılır." }
            ]},
            imperative: { arabic: "اِسْتَمْسِكْ", translation: "sarıl!", examples: [
                { arabic: "اِسْتَمْسِكْ بِالكِتَابِ وَالسُّنَّةِ", translation: "Kitab və sünnəyə sarıl!" },
                { arabic: "اِسْتَمْسِكْ بِالحَقِّ", translation: "Haqqa sarıl!" }
            ]}
        }
    },
{
        id: 228,
        arabic: "أَدْرَكَ",
        meaning: "çatmaq, yetişmək, anlamaq",
        forms: {
            past: { arabic: "أَدْرَكَ", translation: "çatdı, anladı", examples: [
                { arabic: "أَدْرَكَ الصَّلَاةَ فِي الوَقْتِ", translation: "Namaza vaxtında çatdı." },
                { arabic: "أَدْرَكَ الحَقِيقَةَ", translation: "Həqiqəti anladı." }
            ]},
            present: { arabic: "يُدْرِكُ", translation: "çatır, anlayır", examples: [
                { arabic: "يُدْرِكُ الصَّلَاةَ", translation: "Namaza çatır." },
                { arabic: "يُدْرِكُ مَا يَنْفَعُهُ", translation: "Nəyin faydalı olduğunu anlayır." }
            ]},
            imperative: { arabic: "أَدْرِكْ", translation: "çat, anla!", examples: [
                { arabic: "أَدْرِكِ الصَّلَاةَ", translation: "Namaza çat!" },
                { arabic: "أَدْرِكْ قِيمَةَ الوَقْتِ", translation: "Vaxtın dəyərini anla!" }
            ]}
        }
    },
{
        id: 229,
        arabic: "بَلَغَ",
        meaning: "çatmaq, yetkin olmaq",
        forms: {
            past: { arabic: "بَلَغَ", translation: "çatdı, yetkin oldu", examples: [
                { arabic: "بَلَغَ سِنَّ الرُّشْدِ", translation: "Yetkinlik yaşına çatdı." },
                { arabic: "بَلَغَتِ الرِّسَالَةُ", translation: "Mesaj çatdı." }
            ]},
            present: { arabic: "يَبْلُغُ", translation: "çatır", examples: [
                { arabic: "يَبْلُغُ الحُلُمَ", translation: "Həddi-büluğa çatır." },
                { arabic: "يَبْلُغُ النَّاسَ الخَيْرُ", translation: "İnsanlara xeyir çatır." }
            ]},
            imperative: { arabic: "بَلِّغْ", translation: "çatdır!", examples: [
                { arabic: "بَلِّغِ الرِّسَالَةَ", translation: "Mesajı çatdır!" },
                { arabic: "بَلِّغْ عَنِّي وَلَوْ آيَةً", translation: "Məndən bir ayə belə çatdır!" }
            ]}
        }
    },
{
        id: 230,
        arabic: "نَضِجَ",
        meaning: "yetişmək, yetkinləşmək",
        forms: {
            past: { arabic: "نَضِجَ", translation: "yetişdi", examples: [
                { arabic: "نَضِجَ فِي عَقْلِهِ", translation: "Ağlı yetkinləşdi." },
                { arabic: "نَضِجَتْ فِي دِينِهَا", translation: "Dinində yetkinləşdi." }
            ]},
            present: { arabic: "يَنْضَجُ", translation: "yetişir", examples: [
                { arabic: "يَنْضَجُ فِي تَفْكِيرِهِ", translation: "Düşüncəsində yetişir." },
                { arabic: "يَنْضَجُ بِالتَّجْرِبَةِ", translation: "Təcrübə ilə yetkinləşir." }
            ]},
            imperative: { arabic: "اِنْضَجْ", translation: "yetiş!", examples: [
                { arabic: "اِنْضَجْ فِي تَفْكِيرِكَ", translation: "Düşüncəndə yetkinləş!" },
                { arabic: "اِنْضَجْ فِي دِينِكَ", translation: "Dinində yetiş!" }
            ]}
        }
    },
{
        id: 231,
        arabic: "نَمَا",
        meaning: "böyümək, inkişaf etmək",
        forms: {
            past: { arabic: "نَمَا", translation: "böyüdü", examples: [
                { arabic: "نَمَا العِلْمُ", translation: "Elm inkişaf etdi." },
                { arabic: "نَمَتِ التِّجَارَةُ", translation: "Ticarət inkişaf etdi." }
            ]},
            present: { arabic: "يَنْمُو", translation: "böyüyür", examples: [
                { arabic: "يَنْمُو الإِيمَانُ", translation: "İman böyüyür." },
                { arabic: "يَنْمُو فِي العِلْمِ", translation: "Elmdə inkişaf edir." }
            ]},
            imperative: { arabic: "اِنْمُ", translation: "böyü!", examples: [
                { arabic: "اِنْمُ فِي العِلْمِ", translation: "Elmdə böyü!" },
                { arabic: "اِنْمُ فِي الخَيْرِ", translation: "Xeyirdə inkişaf et!" }
            ]}
        }
    },
{
        id: 232,
        arabic: "اِزْدَادَ",
        meaning: "artmaq, çoxalmaq",
        forms: {
            past: { arabic: "اِزْدَادَ", translation: "artdı", examples: [
                { arabic: "اِزْدَادَ إِيمَانُهُ", translation: "İmanı artdı." },
                { arabic: "اِزْدَادَتْ مَعْرِفَتُهُ", translation: "Biliyi artdı." }
            ]},
            present: { arabic: "يَزْدَادُ", translation: "artır", examples: [
                { arabic: "يَزْدَادُ عِلْمُهُ", translation: "Elmi artır." },
                { arabic: "يَزْدَادُ تَقَرُّبًا إِلَى اللَّهِ", translation: "Allaha yaxınlığı artır." }
            ]},
            imperative: { arabic: "اِزْدَدْ", translation: "artır!", examples: [
                { arabic: "اِزْدَدْ عِلْمًا", translation: "Elmini artır!" },
                { arabic: "اِزْدَدْ تَقْوَى", translation: "Təqvanı artır!" }
            ]}
        }
    },
{
        id: 233,
        arabic: "نَقَصَ",
        meaning: "azalmaq, əskilmək",
        forms: {
            past: { arabic: "نَقَصَ", translation: "azaldı", examples: [
                { arabic: "نَقَصَ المَالُ", translation: "Mal azaldı." },
                { arabic: "نَقَصَ العِلْمُ", translation: "Elm azaldı." }
            ]},
            present: { arabic: "يَنْقُصُ", translation: "azalır", examples: [
                { arabic: "يَنْقُصُ الإِيمَانُ بِالمَعَاصِي", translation: "Günahlar imanı azaldır." },
                { arabic: "يَنْقُصُ الرِّزْقُ", translation: "Ruzi azalır." }
            ]},
            imperative: { arabic: "لَا يَنْقُصْ", translation: "azalmasın!", examples: [
                { arabic: "لَا يَنْقُصْ إِيمَانُكَ", translation: "İmanın azalmasın!" },
                { arabic: "لَا يَنْقُصْ عَمَلُكَ", translation: "Əməlin azalmasın!" }
            ]}
        }
    },
{
        id: 234,
        arabic: "كَمَلَ",
        meaning: "tamamlanmaq, tam olmaq",
        forms: {
            past: { arabic: "كَمَلَ", translation: "tamamlandı", examples: [
                { arabic: "كَمَلَ الدِّينُ", translation: "Din tamamlandı." },
                { arabic: "كَمُلَ الإِيمَانُ", translation: "İman kamilləşdi." }
            ]},
            present: { arabic: "يَكْمُلُ", translation: "tamamlanır", examples: [
                { arabic: "يَكْمُلُ الإِيمَانُ بِالأَخْلَاقِ", translation: "İman əxlaqla kamilləşir." },
                { arabic: "يَكْمُلُ العَمَلُ بِالإِخْلَاصِ", translation: "Əməl ixlasla kamilləşir." }
            ]},
            imperative: { arabic: "أَكْمِلْ", translation: "tamamla!", examples: [
                { arabic: "أَكْمِلْ مَا بَدَأْتَ", translation: "Başladığını tamamla!" },
                { arabic: "أَكْمِلْ عَمَلَكَ", translation: "İşini tamamla!" }
            ]}
        }
    },
{
        id: 235,
        arabic: "زَادَ",
        meaning: "artırmaq",
        forms: {
            past: { arabic: "زَادَ", translation: "artırdı", examples: [
                { arabic: "زَادَ فِي العِلْمِ", translation: "Elmini artırdı." },
                { arabic: "زَادَتْ فِي الطَّاعَةِ", translation: "İtaətini artırdı." }
            ]},
            present: { arabic: "يَزِيدُ", translation: "artırır", examples: [
                { arabic: "يَزِيدُ فِي الخَيْرِ", translation: "Xeyiri artırır." },
                { arabic: "يَزِيدُ فِي الإِحْسَانِ", translation: "Yaxşılığı artırır." }
            ]},
            imperative: { arabic: "زِدْ", translation: "artır!", examples: [
                { arabic: "زِدْ فِي عَمَلِكَ", translation: "Əməlini artır!" },
                { arabic: "زِدْ فِي عِبَادَتِكَ", translation: "İbadətini artır!" }
            ]}
        }
    },
{
        id: 236,
        arabic: "حَسُنَ",
        meaning: "gözəl olmaq",
        forms: {
            past: { arabic: "حَسُنَ", translation: "gözəl oldu", examples: [
                { arabic: "حَسُنَ خُلُقُهُ", translation: "Əxlaqı gözəl oldu." },
                { arabic: "حَسُنَتْ سِيرَتُهُ", translation: "Həyat tərzi gözəl oldu." }
            ]},
            present: { arabic: "يَحْسُنُ", translation: "gözəl olur", examples: [
                { arabic: "يَحْسُنُ بِهِ أَنْ يَتَوَاضَعَ", translation: "Təvazökar olmaq ona yaraşır." },
                { arabic: "يَحْسُنُ الخُلُقُ بِالإِيمَانِ", translation: "Əxlaq imanla gözəlləşir." }
            ]},
            imperative: { arabic: "أَحْسِنْ", translation: "gözəlləşdir!", examples: [
                { arabic: "أَحْسِنْ خُلُقَكَ", translation: "Əxlaqını gözəlləşdir!" },
                { arabic: "أَحْسِنْ عَمَلَكَ", translation: "Əməlini gözəlləşdir!" }
            ]}
        }
    },
{
        id: 237,
        arabic: "قَبُحَ",
        meaning: "çirkin olmaq",
        forms: {
            past: { arabic: "قَبُحَ", translation: "çirkin oldu", examples: [
                { arabic: "قَبُحَ الكَذِبُ", translation: "Yalan çirkin oldu." },
                { arabic: "قَبُحَتِ الغِيبَةُ", translation: "Qeybət çirkin oldu." }
            ]},
            present: { arabic: "يَقْبُحُ", translation: "çirkin olur", examples: [
                { arabic: "يَقْبُحُ أَنْ تَكْذِبَ", translation: "Yalan danışmaq çirkindir." },
                { arabic: "يَقْبُحُ فِعْلُ المُنْكَرِ", translation: "Pis iş görmək çirkindir." }
            ]},
            imperative: { arabic: "لَا تَقْبُحْ", translation: "çirkin olma!", examples: [
                { arabic: "لَا تَقْبُحْ أَفْعَالُكَ", translation: "Əməllərin çirkin olmasın!" },
                { arabic: "لَا تَقْبُحْ سِيرَتُكَ", translation: "Həyat tərzin çirkin olmasın!" }
            ]}
        }
    },
{
        id: 238,
        arabic: "صَحَّ",
        meaning: "doğru olmaq, səhih olmaq",
        forms: {
            past: { arabic: "صَحَّ", translation: "doğru oldu", examples: [
                { arabic: "صَحَّ الحَدِيثُ", translation: "Hədis səhih oldu." },
                { arabic: "صَحَّتِ العَقِيدَةُ", translation: "Əqidə doğru oldu." }
            ]},
            present: { arabic: "يَصِحُّ", translation: "doğru olur", examples: [
                { arabic: "يَصِحُّ أَنْ تَعْمَلَ هَذَا", translation: "Bunu etməyin doğru olar." },
                { arabic: "يَصِحُّ قَوْلُهُ", translation: "Onun sözü doğrudur." }
            ]},
            imperative: { arabic: "صَحِّحْ", translation: "düzəlt!", examples: [
                { arabic: "صَحِّحْ عَقِيدَتَكَ", translation: "Əqidəni düzəlt!" },
                { arabic: "صَحِّحْ مَعْلُومَاتِكَ", translation: "Məlumatlarını düzəlt!" }
            ]}
        }
    },
{
        id: 239,
        arabic: "بَطَلَ",
        meaning: "batil olmaq, puç olmaq",
        forms: {
            past: { arabic: "بَطَلَ", translation: "batil oldu", examples: [
                { arabic: "بَطَلَ عَمَلُهُ", translation: "Əməli puç oldu." },
                { arabic: "بَطَلَتْ حُجَّتُهُ", translation: "Dəlili batil oldu." }
            ]},
            present: { arabic: "يَبْطُلُ", translation: "batil olur", examples: [
                { arabic: "يَبْطُلُ العَمَلُ بِالرِّيَاءِ", translation: "Riya ilə əməl batil olar." },
                { arabic: "يَبْطُلُ مَا خَالَفَ الشَّرْعَ", translation: "Şəriətə zidd olan batil olar." }
            ]},
            imperative: { arabic: "أَبْطِلْ", translation: "batil et!", examples: [
                { arabic: "أَبْطِلِ البَاطِلَ", translation: "Batili yox et!" },
                { arabic: "أَبْطِلْ مَا يُخَالِفُ الحَقَّ", translation: "Haqqa zidd olanı batil et!" }
            ]}
        }
    },
{
        id: 240,
        arabic: "ثَبَتَ",
        meaning: "sabit olmaq, sübut olmaq",
        forms: {
            past: { arabic: "ثَبَتَ", translation: "sabit oldu", examples: [
                { arabic: "ثَبَتَ الحُكْمُ", translation: "Hökm sabit oldu." },
                { arabic: "ثَبَتَ عِنْدَ الشَّدَائِدِ", translation: "Çətinliklərdə sabit qaldı." }
            ]},
            present: { arabic: "يَثْبُتُ", translation: "sabit olur", examples: [
                { arabic: "يَثْبُتُ المُؤْمِنُ فِي الفِتَنِ", translation: "Mömin fitnələrdə sabit qalır." },
                { arabic: "يَثْبُتُ عَلَى الحَقِّ", translation: "Haqq üzərində sabit olur." }
            ]},
            imperative: { arabic: "اُثْبُتْ", translation: "sabit ol!", examples: [
                { arabic: "اُثْبُتْ عَلَى الحَقِّ", translation: "Haqq üzərində sabit ol!" },
                { arabic: "اُثْبُتْ فِي وَجْهِ الفِتَنِ", translation: "Fitnələr qarşısında sabit ol!" }
            ]}
        }
    },
{
        id: 241,
        arabic: "حَقَّ",
        meaning: "haqq olmaq, doğru olmaq",
        forms: {
            past: { arabic: "حَقَّ", translation: "haqq oldu", examples: [
                { arabic: "حَقَّ القَوْلُ", translation: "Söz haqq oldu." },
                { arabic: "حَقَّتِ الكَلِمَةُ", translation: "Kəlmə haqq oldu." }
            ]},
            present: { arabic: "يَحِقُّ", translation: "haqq olur", examples: [
                { arabic: "يَحِقُّ لَكَ أَنْ تَفْرَحَ", translation: "Sevinməyə haqqın var." },
                { arabic: "يَحِقُّ الحَقُّ وَيَزْهَقُ البَاطِلُ", translation: "Haqq gələr, batil yox olar." }
            ]},
            imperative: { arabic: "حُقَّ", translation: "haqqı yerinə yetir!", examples: [
                { arabic: "حُقَّ مَا عَلَيْكَ", translation: "Üzərindəki haqqı ödə!" },
                { arabic: "حُقَّ لِلَّهِ أَنْ تَعْبُدَهُ", translation: "Allaha ibadət etmək haqqdır!" }
            ]}
        }
    },
{
        id: 242,
        arabic: "اِسْتَحَقَّ",
        meaning: "haqq etmək, layiq olmaq",
        forms: {
            past: { arabic: "اِسْتَحَقَّ", translation: "haqq etdi", examples: [
                { arabic: "اِسْتَحَقَّ الثَّوَابَ", translation: "Mükafatı haqq etdi." },
                { arabic: "اِسْتَحَقَّتِ العِقَابَ", translation: "Cəzanı haqq etdi." }
            ]},
            present: { arabic: "يَسْتَحِقُّ", translation: "haqq edir", examples: [
                { arabic: "يَسْتَحِقُّ الإِكْرَامَ", translation: "Hörmətə layiqdir." },
                { arabic: "يَسْتَحِقُّ الرَّحْمَةَ", translation: "Mərhəmətə layiqdir." }
            ]},
            imperative: { arabic: "اِسْتَحِقَّ", translation: "haqq et!", examples: [
                { arabic: "اِسْتَحِقَّ الخَيْرَ بِعَمَلِكَ", translation: "Yaxşı əməllə xeyri haqq et!" },
                { arabic: "اِسْتَحِقَّ الجَنَّةَ بِالإِيمَانِ", translation: "İmanla cənnəti haqq et!" }
            ]}
        }
    },
{
        id: 243,
        arabic: "اِنْشَرَحَ",
        meaning: "açılmaq, genişlənmək (qəlb)",
        forms: {
            past: { arabic: "اِنْشَرَحَ", translation: "açıldı", examples: [
                { arabic: "اِنْشَرَحَ صَدْرُهُ لِلْإِسْلَامِ", translation: "Ürəyi İslama açıldı." },
                { arabic: "اِنْشَرَحَتْ نَفْسُهُ بِالذِّكْرِ", translation: "Zikrlə ruhu rahatladı." }
            ]},
            present: { arabic: "يَنْشَرِحُ", translation: "açılır", examples: [
                { arabic: "يَنْشَرِحُ صَدْرُهُ بِالإِيمَانِ", translation: "İmanla ürəyi açılır." },
                { arabic: "يَنْشَرِحُ بِالذِّكْرِ", translation: "Zikrlə açılır." }
            ]},
            imperative: { arabic: "اِنْشَرِحْ", translation: "açıl!", examples: [
                { arabic: "اِنْشَرِحْ صَدْرُكَ", translation: "Ürəyin açılsın!" },
                { arabic: "اِنْشَرِحْ لِلْحَقِّ", translation: "Haqqa qarşı açıl!" }
            ]}
        }
    },
{
        id: 244,
        arabic: "اِنْقَبَضَ",
        meaning: "daralmaq, sıxılmaq",
        forms: {
            past: { arabic: "اِنْقَبَضَ", translation: "daraldı", examples: [
                { arabic: "اِنْقَبَضَ صَدْرُهُ", translation: "Ürəyi daraldı." },
                { arabic: "اِنْقَبَضَتْ نَفْسُهُ", translation: "Ruhu sıxıldı." }
            ]},
            present: { arabic: "يَنْقَبِضُ", translation: "daralır", examples: [
                { arabic: "يَنْقَبِضُ صَدْرُهُ مِنَ الهَمِّ", translation: "Qəmdən ürəyi daralır." },
                { arabic: "يَنْقَبِضُ عِنْدَ الشِّدَّةِ", translation: "Çətinlikdə daralır." }
            ]},
            imperative: { arabic: "لَا تَنْقَبِضْ", translation: "daralma!", examples: [
                { arabic: "لَا تَنْقَبِضْ فِي الشِّدَّةِ", translation: "Çətinlikdə daralma!" },
                { arabic: "لَا تَنْقَبِضْ بِسَبَبِ الدُّنْيَا", translation: "Dünya üçün daralma!" }
            ]}
        }
    },
{
        id: 245,
        arabic: "طَمْأَنَ",
        meaning: "rahatlamaq, sakitləşmək",
        forms: {
            past: { arabic: "طَمْأَنَ", translation: "rahatladı", examples: [
                { arabic: "طَمْأَنَ قَلْبُهُ بِذِكْرِ اللَّهِ", translation: "Allahı zikr etməklə qəlbi rahatladı." },
                { arabic: "طَمْأَنَتْ نَفْسُهُ", translation: "Ruhu sakitləşdi." }
            ]},
            present: { arabic: "يَطْمَئِنُّ", translation: "rahatlayır", examples: [
                { arabic: "يَطْمَئِنُّ بِذِكْرِ اللَّهِ", translation: "Allahın zikri ilə rahatlayır." },
                { arabic: "يَطْمَئِنُّ قَلْبُهُ بِالإِيمَانِ", translation: "İmanla qəlbi rahatlayır." }
            ]},
            imperative: { arabic: "اِطْمَئِنَّ", translation: "rahatla!", examples: [
                { arabic: "اِطْمَئِنَّ بِذِكْرِ اللَّهِ", translation: "Allahı zikr et, rahatla!" },
                { arabic: "اِطْمَئِنَّ وَلَا تَخَفْ", translation: "Rahat ol və qorxma!" }
            ]}
        }
    },
{
        id: 246,
        arabic: "قَلِقَ",
        meaning: "narahat olmaq, təlaşa düşmək",
        forms: {
            past: { arabic: "قَلِقَ", translation: "narahat oldu", examples: [
                { arabic: "قَلِقَ عَلَى أَخِيهِ", translation: "Qardaşına görə narahat oldu." },
                { arabic: "قَلِقَتْ مِنَ النَّتِيجَةِ", translation: "Nəticədən narahat oldu." }
            ]},
            present: { arabic: "يَقْلَقُ", translation: "narahat olur", examples: [
                { arabic: "يَقْلَقُ كَثِيرًا", translation: "Çox narahat olur." },
                { arabic: "يَقْلَقُ عَلَى أَهْلِهِ", translation: "Ailəsinə görə narahat olur." }
            ]},
            imperative: { arabic: "لَا تَقْلَقْ", translation: "narahat olma!", examples: [
                { arabic: "لَا تَقْلَقْ فَإِنَّ اللَّهَ مَعَنَا", translation: "Narahat olma, çünki Allah bizimlədir!" },
                { arabic: "لَا تَقْلَقْ مِنَ الرِّزْقِ", translation: "Ruzidən ötrü narahat olma!" }
            ]}
        }
    },
{
        id: 247,
        arabic: "فَرِحَ",
        meaning: "sevinmək",
        forms: {
            past: { arabic: "فَرِحَ", translation: "sevindi", examples: [
                { arabic: "فَرِحَ بِفَضْلِ اللَّهِ", translation: "Allahın lütfü ilə sevindi." },
                { arabic: "فَرِحَتْ بِالنَّجَاحِ", translation: "Müvəffəqiyyətə sevindi." }
            ]},
            present: { arabic: "يَفْرَحُ", translation: "sevinir", examples: [
                { arabic: "يَفْرَحُ بِالخَيْرِ", translation: "Xeyirə sevinir." },
                { arabic: "يَفْرَحُ بِطَاعَةِ اللَّهِ", translation: "Allaha itaətə sevinir." }
            ]},
            imperative: { arabic: "اِفْرَحْ", translation: "sevin!", examples: [
                { arabic: "اِفْرَحْ بِفَضْلِ اللَّهِ", translation: "Allahın lütfü ilə sevin!" },
                { arabic: "اِفْرَحْ وَلَا تَبْطَرْ", translation: "Sevin, amma həddi aşma!" }
            ]}
        }
    },
{
        id: 248,
        arabic: "حَزِنَ",
        meaning: "kədərlənmək",
        forms: {
            past: { arabic: "حَزِنَ", translation: "kədərləndi", examples: [
                { arabic: "حَزِنَ عَلَى مَا فَاتَ", translation: "Keçənə kədərləndi." },
                { arabic: "حَزِنَتْ لِفَقْدِ عَزِيزٍ", translation: "Əzizini itirəndə kədərləndi." }
            ]},
            present: { arabic: "يَحْزَنُ", translation: "kədərlənir", examples: [
                { arabic: "يَحْزَنُ عَلَى حَالِ المُسْلِمِينَ", translation: "Müsəlmanların halına kədərlənir." },
                { arabic: "يَحْزَنُ لِمُصَابٍ", translation: "Müsibətə kədərlənir." }
            ]},
            imperative: { arabic: "لَا تَحْزَنْ", translation: "kədərlənmə!", examples: [
                { arabic: "لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا", translation: "Kədərlənmə, Allah bizimlədir!" },
                { arabic: "لَا تَحْزَنْ عَلَى مَا فَاتَ", translation: "Keçənə kədərlənmə!" }
            ]}
        }
    },
{
        id: 249,
        arabic: "اِشْتَاقَ",
        meaning: "həsrət qalmaq, arzulamaq",
        forms: {
            past: { arabic: "اِشْتَاقَ", translation: "həsrət qaldı", examples: [
                { arabic: "اِشْتَاقَ إِلَى بَيْتِ اللَّهِ", translation: "Allahın evinə həsrət qaldı." },
                { arabic: "اِشْتَاقَتْ إِلَى أَهْلِهَا", translation: "Ailəsinə həsrət qaldı." }
            ]},
            present: { arabic: "يَشْتَاقُ", translation: "həsrət qalır", examples: [
                { arabic: "يَشْتَاقُ إِلَى الجَنَّةِ", translation: "Cənnətə həsrət qalır." },
                { arabic: "يَشْتَاقُ إِلَى رُؤْيَةِ اللَّهِ", translation: "Allahı görməyə həsrət qalır." }
            ]},
            imperative: { arabic: "اِشْتَقْ", translation: "həsrət qal!", examples: [
                { arabic: "اِشْتَقْ إِلَى الجَنَّةِ", translation: "Cənnətə həsrət qal!" },
                { arabic: "اِشْتَقْ إِلَى لِقَاءِ اللَّهِ", translation: "Allaha qovuşmağa həsrət qal!" }
            ]}
        }
    },
{
        id: 250,
        arabic: "اِطْمَأَنَّ",
        meaning: "rahatlamaq, sakit olmaq",
        forms: {
            past: { arabic: "اِطْمَأَنَّ", translation: "rahatladı", examples: [
                { arabic: "اِطْمَأَنَّ قَلْبُهُ بَعْدَ الدُّعَاءِ", translation: "Duadan sonra qəlbi rahatladı." },
                { arabic: "اِطْمَأَنَّتْ نَفْسُهُ بِالْإِيمَانِ", translation: "İmanla ruhu rahatladı." }
            ]},
            present: { arabic: "يَطْمَئِنُّ", translation: "rahatlayır", examples: [
                { arabic: "يَطْمَئِنُّ إِلَى ذِكْرِ اللَّهِ", translation: "Allahın zikri ilə rahatlayır." },
                { arabic: "يَطْمَئِنُّ قَلْبُهُ بِالْقُرْآنِ", translation: "Quranla qəlbi rahatlayır." }
            ]},
            imperative: { arabic: "اِطْمَئِنَّ", translation: "rahat ol!", examples: [
                { arabic: "اِطْمَئِنَّ بِذِكْرِ اللَّهِ", translation: "Allahı zikr et, rahat ol!" },
                { arabic: "اِطْمَئِنَّ وَلَا تَخَفْ", translation: "Rahat ol və qorxma!" }
            ]}
        }
    },
{
        id: 251,
        arabic: "اِسْتَيْقَظَ",
        meaning: "oyanmaq",
        forms: {
            past: { arabic: "اِسْتَيْقَظَ", translation: "oyandı", examples: [
                { arabic: "اِسْتَيْقَظَ لِصَلَاةِ الفَجْرِ", translation: "Sübh namazına oyandı." },
                { arabic: "اِسْتَيْقَظَتْ مُبَكِّرَةً", translation: "Erkən oyandı." }
            ]},
            present: { arabic: "يَسْتَيْقِظُ", translation: "oyanır", examples: [
                { arabic: "يَسْتَيْقِظُ فِي الصَّبَاحِ البَاكِرِ", translation: "Səhər erkən oyanır." },
                { arabic: "يَسْتَيْقِظُ لِلصَّلَاةِ", translation: "Namaza oyanır." }
            ]},
            imperative: { arabic: "اِسْتَيْقِظْ", translation: "oyan!", examples: [
                { arabic: "اِسْتَيْقِظْ لِصَلَاةِ الفَجْرِ", translation: "Sübh namazına oyan!" },
                { arabic: "اِسْتَيْقِظْ مِنْ نَوْمِكَ", translation: "Yuxudan oyan!" }
            ]}
        }
    },
{
        id: 252,
        arabic: "اِغْتَسَلَ",
        meaning: "qüsl etmək, yuyunmaq",
        forms: {
            past: { arabic: "اِغْتَسَلَ", translation: "qüsl etdi", examples: [
                { arabic: "اِغْتَسَلَ لِلْجُمُعَةِ", translation: "Cümə üçün qüsl etdi." },
                { arabic: "اِغْتَسَلَتْ بَعْدَ الحَيْضِ", translation: "Heyzdən sonra qüsl etdi." }
            ]},
            present: { arabic: "يَغْتَسِلُ", translation: "qüsl edir", examples: [
                { arabic: "يَغْتَسِلُ لِلصَّلَاةِ", translation: "Namaz üçün qüsl edir." },
                { arabic: "يَغْتَسِلُ يَوْمَ الجُمُعَةِ", translation: "Cümə günü qüsl edir." }
            ]},
            imperative: { arabic: "اِغْتَسِلْ", translation: "qüsl et!", examples: [
                { arabic: "اِغْتَسِلْ لِلْجُمُعَةِ", translation: "Cümə üçün qüsl et!" },
                { arabic: "اِغْتَسِلْ مِنَ الجَنَابَةِ", translation: "Cənabətdən qüsl et!" }
            ]}
        }
    },
{
        id: 253,
        arabic: "تَيَمَّمَ",
        meaning: "təyəmmüm etmək",
        forms: {
            past: { arabic: "تَيَمَّمَ", translation: "təyəmmüm etdi", examples: [
                { arabic: "تَيَمَّمَ لِعَدَمِ المَاءِ", translation: "Su olmadığından təyəmmüm etdi." },
                { arabic: "تَيَمَّمَتْ لِلصَّلَاةِ", translation: "Namaz üçün təyəmmüm etdi." }
            ]},
            present: { arabic: "يَتَيَمَّمُ", translation: "təyəmmüm edir", examples: [
                { arabic: "يَتَيَمَّمُ بِالتُّرَابِ", translation: "Torpaqla təyəmmüm edir." },
                { arabic: "يَتَيَمَّمُ عِنْدَ عَدَمِ المَاءِ", translation: "Su olmayanda təyəmmüm edir." }
            ]},
            imperative: { arabic: "تَيَمَّمْ", translation: "təyəmmüm et!", examples: [
                { arabic: "تَيَمَّمْ إِذَا لَمْ تَجِدْ مَاءً", translation: "Su tapmasan təyəmmüm et!" },
                { arabic: "تَيَمَّمْ لِلصَّلَاةِ", translation: "Namaz üçün təyəmmüm et!" }
            ]}
        }
    },
{
        id: 254,
        arabic: "اِسْتَقْبَلَ القِبْلَةَ",
        meaning: "qibləyə yönəlmək",
        forms: {
            past: { arabic: "اِسْتَقْبَلَ القِبْلَةَ", translation: "qibləyə yönəldi", examples: [
                { arabic: "اِسْتَقْبَلَ القِبْلَةَ فِي الصَّلَاةِ", translation: "Namazda qibləyə yönəldi." },
                { arabic: "اِسْتَقْبَلَتِ القِبْلَةَ", translation: "Qibləyə yönəldi." }
            ]},
            present: { arabic: "يَسْتَقْبِلُ القِبْلَةَ", translation: "qibləyə yönəlir", examples: [
                { arabic: "يَسْتَقْبِلُ القِبْلَةَ عِنْدَ الصَّلَاةِ", translation: "Namazda qibləyə yönəlir." },
                { arabic: "يَسْتَقْبِلُ القِبْلَةَ فِي الدُّعَاءِ", translation: "Duada qibləyə yönəlir." }
            ]},
            imperative: { arabic: "اِسْتَقْبِلِ القِبْلَةَ", translation: "qibləyə yönəl!", examples: [
                { arabic: "اِسْتَقْبِلِ القِبْلَةَ فِي الصَّلَاةِ", translation: "Namazda qibləyə yönəl!" },
                { arabic: "اِسْتَقْبِلِ القِبْلَةَ عِنْدَ الدُّعَاءِ", translation: "Duada qibləyə yönəl!" }
            ]}
        }
    },
{
        id: 255,
        arabic: "أَذَّنَ",
        meaning: "azan vermək",
        forms: {
            past: { arabic: "أَذَّنَ", translation: "azan verdi", examples: [
                { arabic: "أَذَّنَ المُؤَذِّنُ", translation: "Müəzzin azan verdi." },
                { arabic: "أَذَّنَتْ فِي الوَقْتِ", translation: "Vaxtında azan verdi." }
            ]},
            present: { arabic: "يُؤَذِّنُ", translation: "azan verir", examples: [
                { arabic: "يُؤَذِّنُ لِصَلَاةِ الظُّهْرِ", translation: "Zöhr namazına azan verir." },
                { arabic: "يُؤَذِّنُ فِي المَسْجِدِ", translation: "Məsciddə azan verir." }
            ]},
            imperative: { arabic: "أَذِّنْ", translation: "azan ver!", examples: [
                { arabic: "أَذِّنْ لِلصَّلَاةِ", translation: "Namaza azan ver!" },
                { arabic: "أَذِّنْ فِي المَسْجِدِ", translation: "Məsciddə azan ver!" }
            ]}
        }
    },
{
        id: 256,
        arabic: "أَقَامَ",
        meaning: "iqamə vermək, namazı başlatmaq",
        forms: {
            past: { arabic: "أَقَامَ", translation: "iqamə verdi", examples: [
                { arabic: "أَقَامَ الصَّلَاةَ", translation: "Namaza iqamə verdi." },
                { arabic: "أَقَامَتِ الصَّلَاةَ فِي وَقْتِهَا", translation: "Namazı vaxtında qıldı." }
            ]},
            present: { arabic: "يُقِيمُ", translation: "iqamə verir", examples: [
                { arabic: "يُقِيمُ الصَّلَاةَ", translation: "Namazı qılır (iqamə verir)." },
                { arabic: "يُقِيمُ فِي المَسْجِدِ", translation: "Məsciddə namaz qılır." }
            ]},
            imperative: { arabic: "أَقِمْ", translation: "iqamə ver!", examples: [
                { arabic: "أَقِمِ الصَّلَاةَ", translation: "Namazı qıl!" },
                { arabic: "أَقِمْ الصَّلَاةَ فِي وَقْتِهَا", translation: "Namazı vaxtında qıl!" }
            ]}
        }
    },
{
        id: 257,
        arabic: "اِقْتَدَى",
        meaning: "uymaq, tabe olmaq (imama)",
        forms: {
            past: { arabic: "اِقْتَدَى", translation: "uydı", examples: [
                { arabic: "اِقْتَدَى بِالإِمَامِ", translation: "İmama uydu." },
                { arabic: "اِقْتَدَتْ بِالنَّبِيِّ", translation: "Peyğəmbərə tabe oldu." }
            ]},
            present: { arabic: "يَقْتَدِي", translation: "uyur", examples: [
                { arabic: "يَقْتَدِي بِالصَّالِحِينَ", translation: "Salehlərə uyur." },
                { arabic: "يَقْتَدِي بِالسُّنَّةِ", translation: "Sünnəyə tabe olur." }
            ]},
            imperative: { arabic: "اِقْتَدِ", translation: "uy!", examples: [
                { arabic: "اِقْتَدِ بِالإِمَامِ", translation: "İmama uy!" },
                { arabic: "اِقْتَدِ بِالنَّبِيِّ ﷺ", translation: "Peyğəmbərə tabe ol!" }
            ]}
        }
    },
{
        id: 258,
        arabic: "اِسْتَمَعَ إِلَى الخُطْبَةِ",
        meaning: "xütbəni dinləmək",
        forms: {
            past: { arabic: "اِسْتَمَعَ إِلَى الخُطْبَةِ", translation: "xütbəni dinlədi", examples: [
                { arabic: "اِسْتَمَعَ إِلَى خُطْبَةِ الجُمُعَةِ", translation: "Cümə xütbəsini dinlədi." },
                { arabic: "اِسْتَمَعَتْ بِاهْتِمَامٍ", translation: "Maraqla dinlədi." }
            ]},
            present: { arabic: "يَسْتَمِعُ إِلَى الخُطْبَةِ", translation: "xütbəni dinləyir", examples: [
                { arabic: "يَسْتَمِعُ إِلَى خُطْبَةِ الجُمُعَةِ", translation: "Cümə xütbəsini dinləyir." },
                { arabic: "يَسْتَمِعُ بِخُشُوعٍ", translation: "Xüşu ilə dinləyir." }
            ]},
            imperative: { arabic: "اِسْتَمِعْ إِلَى الخُطْبَةِ", translation: "xütbəni dinlə!", examples: [
                { arabic: "اِسْتَمِعْ إِلَى خُطْبَةِ الجُمُعَةِ", translation: "Cümə xütbəsini dinlə!" },
                { arabic: "اِسْتَمِعْ وَلَا تَتَكَلَّمْ", translation: "Dinlə və danışma!" }
            ]}
        }
    },
{
        id: 259,
        arabic: "صَلَّى الجُمُعَةَ",
        meaning: "cümə namazı qılmaq",
        forms: {
            past: { arabic: "صَلَّى الجُمُعَةَ", translation: "cümə namazını qıldı", examples: [
                { arabic: "صَلَّى الجُمُعَةَ فِي المَسْجِدِ", translation: "Cümə namazını məsciddə qıldı." },
                { arabic: "صَلَّتِ الجُمُعَةَ مَعَ النِّسَاءِ", translation: "Qadınlarla cümə namazı qıldı." }
            ]},
            present: { arabic: "يُصَلِّي الجُمُعَةَ", translation: "cümə namazı qılır", examples: [
                { arabic: "يُصَلِّي الجُمُعَةَ كُلَّ أُسْبُوعٍ", translation: "Hər həftə cümə namazı qılır." },
                { arabic: "يُصَلِّي الجُمُعَةَ فِي المَسْجِدِ الكَبِيرِ", translation: "Cümə namazını böyük məsciddə qılır." }
            ]},
            imperative: { arabic: "صَلِّ الجُمُعَةَ", translation: "cümə namazını qıl!", examples: [
                { arabic: "صَلِّ الجُمُعَةَ مَعَ الجَمَاعَةِ", translation: "Cümə namazını camaatla qıl!" },
                { arabic: "صَلِّ الجُمُعَةَ فِي المَسْجِدِ", translation: "Cümə namazını məsciddə qıl!" }
            ]}
        }
    },
{
        id: 260,
        arabic: "اِعْتَكَفَ",
        meaning: "etikaf etmək, məsciddə qalmaq",
        forms: {
            past: { arabic: "اِعْتَكَفَ", translation: "etikaf etdi", examples: [
                { arabic: "اِعْتَكَفَ فِي المَسْجِدِ", translation: "Məsciddə etikaf etdi." },
                { arabic: "اِعْتَكَفَتْ فِي العَشْرِ الأَوَاخِرِ", translation: "Son on gündə etikaf etdi." }
            ]},
            present: { arabic: "يَعْتَكِفُ", translation: "etikaf edir", examples: [
                { arabic: "يَعْتَكِفُ فِي رَمَضَانَ", translation: "Ramazanda etikaf edir." },
                { arabic: "يَعْتَكِفُ فِي المَسْجِدِ", translation: "Məsciddə etikaf edir." }
            ]},
            imperative: { arabic: "اِعْتَكِفْ", translation: "etikaf et!", examples: [
                { arabic: "اِعْتَكِفْ فِي العَشْرِ الأَوَاخِرِ مِنْ رَمَضَانَ", translation: "Ramazanın son on günündə etikaf et!" },
                { arabic: "اِعْتَكِفْ فِي المَسْجِدِ", translation: "Məsciddə etikaf et!" }
            ]}
        }
    },
{
        id: 261,
        arabic: "أَفْطَرَ",
        meaning: "iftar etmək, orucu açmaq",
        forms: {
            past: { arabic: "أَفْطَرَ", translation: "iftar etdi", examples: [
                { arabic: "أَفْطَرَ عَلَى تَمْرٍ", translation: "Xurma ilə iftar etdi." },
                { arabic: "أَفْطَرَتْ بَعْدَ الغُرُوبِ", translation: "Gün batandan sonra iftar etdi." }
            ]},
            present: { arabic: "يُفْطِرُ", translation: "iftar edir", examples: [
                { arabic: "يُفْطِرُ عَلَى مَاءٍ", translation: "Su ilə iftar edir." },
                { arabic: "يُفْطِرُ مَعَ العَائِلَةِ", translation: "Ailə ilə iftar edir." }
            ]},
            imperative: { arabic: "أَفْطِرْ", translation: "iftar et!", examples: [
                { arabic: "أَفْطِرْ عَلَى تَمْرٍ", translation: "Xurma ilə iftar et!" },
                { arabic: "أَفْطِرْ عِنْدَ الغُرُوبِ", translation: "Gün batanda iftar et!" }
            ]}
        }
    },
{
        id: 262,
        arabic: "سَحَرَ",
        meaning: "səhər yeməyi yemək (sübhə yaxın)",
        forms: {
            past: { arabic: "سَحَرَ", translation: "səhər yeməyi yedi", examples: [
                { arabic: "سَحَرَ قَبْلَ الفَجْرِ", translation: "Fəcrdən əvvəl səhər yeməyi yedi." },
                { arabic: "سَحَرَتْ مَعَ أَهْلِهَا", translation: "Ailəsi ilə səhər yeməyi yedi." }
            ]},
            present: { arabic: "يَتَسَحَّرُ", translation: "səhər yeməyi yeyir", examples: [
                { arabic: "يَتَسَحَّرُ فِي رَمَضَانَ", translation: "Ramazanda səhər yeməyi yeyir." },
                { arabic: "يَتَسَحَّرُ قَبْلَ الفَجْرِ", translation: "Fəcrdən əvvəl səhər yeməyi yeyir." }
            ]},
            imperative: { arabic: "تَسَحَّرْ", translation: "səhər yeməyi ye!", examples: [
                { arabic: "تَسَحَّرْ فَإِنَّ فِي السَّحُورِ بَرَكَةً", translation: "Səhər yeməyi ye, çünki onda bərəkət var!" },
                { arabic: "تَسَحَّرْ قَبْلَ الفَجْرِ", translation: "Fəcrdən əvvəl səhər yeməyi ye!" }
            ]}
        }
    },
{
        id: 263,
        arabic: "زَكَّى",
        meaning: "zəkat vermək, təmizləmək",
        forms: {
            past: { arabic: "زَكَّى", translation: "zəkat verdi", examples: [
                { arabic: "زَكَّى مَالَهُ", translation: "Malının zəkatını verdi." },
                { arabic: "زَكَّتْ نَفْسَهَا بِالصَّدَقَةِ", translation: "Sədəqə ilə özünü təmizlədi." }
            ]},
            present: { arabic: "يُزَكِّي", translation: "zəkat verir", examples: [
                { arabic: "يُزَكِّي مَالَهُ كُلَّ عَامٍ", translation: "Hər il malının zəkatını verir." },
                { arabic: "يُزَكِّي نَفْسَهُ بِالعِبَادَةِ", translation: "İbadətlə özünü təmizləyir." }
            ]},
            imperative: { arabic: "زَكِّ", translation: "zəkat ver!", examples: [
                { arabic: "زَكِّ مَالَكَ", translation: "Malının zəkatını ver!" },
                { arabic: "زَكِّ نَفْسَكَ بِالصَّدَقَةِ", translation: "Sədəqə ilə özünü təmizlə!" }
            ]}
        }
    },
{
        id: 264,
        arabic: "صَدَّقَ",
        meaning: "təsdiq etmək, doğrulamaq",
        forms: {
            past: { arabic: "صَدَّقَ", translation: "təsdiq etdi", examples: [
                { arabic: "صَدَّقَ الخَبَرَ", translation: "Xəbəri təsdiq etdi." },
                { arabic: "صَدَّقَتْ كَلَامَهُ", translation: "Onun sözünü təsdiq etdi." }
            ]},
            present: { arabic: "يُصَدِّقُ", translation: "təsdiq edir", examples: [
                { arabic: "يُصَدِّقُ بِالْحَقِّ", translation: "Haqqı təsdiq edir." },
                { arabic: "يُصَدِّقُ بِالْيَوْمِ الآخِرِ", translation: "Axirət gününü təsdiq edir." }
            ]},
            imperative: { arabic: "صَدِّقْ", translation: "təsdiq et!", examples: [
                { arabic: "صَدِّقْ بِالْحَقِّ", translation: "Haqqı təsdiq et!" },
                { arabic: "صَدِّقْ بِالْيَوْمِ الآخِرِ", translation: "Axirət gününü təsdiq et!" }
            ]}
        }
    },
{
        id: 265,
        arabic: "كَذَّبَ",
        meaning: "yalançı saymaq, inkar etmək",
        forms: {
            past: { arabic: "كَذَّبَ", translation: "yalançı saydı", examples: [
                { arabic: "كَذَّبَ بِالْحَقِّ", translation: "Haqqı yalan saydı." },
                { arabic: "كَذَّبَتِ الرُّسُلَ", translation: "Rəsulları yalançı saydı." }
            ]},
            present: { arabic: "يُكَذِّبُ", translation: "yalançı sayır", examples: [
                { arabic: "يُكَذِّبُ بِالْيَوْمِ الآخِرِ", translation: "Axirət gününü yalan sayır." },
                { arabic: "يُكَذِّبُ بِآيَاتِ اللَّهِ", translation: "Allahın ayələrini yalan sayır." }
            ]},
            imperative: { arabic: "لَا تُكَذِّبْ", translation: "yalançı sayma!", examples: [
                { arabic: "لَا تُكَذِّبْ بِالْحَقِّ", translation: "Haqqı yalan sayma!" },
                { arabic: "لَا تُكَذِّبْ بِآيَاتِ اللَّهِ", translation: "Allahın ayələrini yalan sayma!" }
            ]}
        }
    },
{
        id: 266,
        arabic: "اِسْتَهْزَأَ",
        meaning: "istehza etmək, lağ etmək",
        forms: {
            past: { arabic: "اِسْتَهْزَأَ", translation: "istehza etdi", examples: [
                { arabic: "اِسْتَهْزَأَ بِالنَّاسِ", translation: "İnsanlara istehza etdi." },
                { arabic: "اِسْتَهْزَأَتْ بِالدِّينِ", translation: "Dini istehza etdi." }
            ]},
            present: { arabic: "يَسْتَهْزِئُ", translation: "istehza edir", examples: [
                { arabic: "يَسْتَهْزِئُ بِالْمُؤْمِنِينَ", translation: "Möminlərə istehza edir." },
                { arabic: "يَسْتَهْزِئُ بِآيَاتِ اللَّهِ", translation: "Allahın ayələrini istehza edir." }
            ]},
            imperative: { arabic: "لَا تَسْتَهْزِئْ", translation: "istehza etmə!", examples: [
                { arabic: "لَا تَسْتَهْزِئْ بِالنَّاسِ", translation: "İnsanlara istehza etmə!" },
                { arabic: "لَا تَسْتَهْزِئْ بِالدِّينِ", translation: "Dini istehza etmə!" }
            ]}
        }
    },
{
        id: 267,
        arabic: "سَبَّ",
        meaning: "söymək, təhqir etmək",
        forms: {
            past: { arabic: "سَبَّ", translation: "söydü", examples: [
                { arabic: "سَبَّ أَخَاهُ", translation: "Qardaşına söydü." },
                { arabic: "سَبَّتْ جَارَتَهَا", translation: "Qonşusuna söydü." }
            ]},
            present: { arabic: "يَسُبُّ", translation: "söyür", examples: [
                { arabic: "يَسُبُّ النَّاسَ", translation: "İnsanlara söyür." },
                { arabic: "يَسُبُّ الدِّينَ", translation: "Dini söyür." }
            ]},
            imperative: { arabic: "لَا تَسُبَّ", translation: "söymə!", examples: [
                { arabic: "لَا تَسُبَّ أَحَدًا", translation: "Heç kimə söymə!" },
                { arabic: "لَا تَسُبَّ الدِّينَ", translation: "Dini söymə!" }
            ]}
        }
    },
{
        id: 268,
        arabic: "شَتَمَ",
        meaning: "təhqir etmək, söymək",
        forms: {
            past: { arabic: "شَتَمَ", translation: "təhqir etdi", examples: [
                { arabic: "شَتَمَ أَخَاهُ بِكَلَامٍ قَبِيحٍ", translation: "Qardaşına çirkin sözlər dedi." },
                { arabic: "شَتَمَتْ وَالِدَهَا", translation: "Valideyninə söydü." }
            ]},
            present: { arabic: "يَشْتُمُ", translation: "təhqir edir", examples: [
                { arabic: "يَشْتُمُ النَّاسَ", translation: "İnsanları təhqir edir." },
                { arabic: "يَشْتُمُ بِسَبَبِ الغَضَبِ", translation: "Qəzəbdən söyür." }
            ]},
            imperative: { arabic: "لَا تَشْتُمْ", translation: "təhqir etmə!", examples: [
                { arabic: "لَا تَشْتُمْ أَحَدًا", translation: "Heç kimi təhqir etmə!" },
                { arabic: "لَا تَشْتُمْ وَالِدَيْكَ", translation: "Valideynlərini təhqir etmə!" }
            ]}
        }
    },
{
        id: 269,
        arabic: "اِغْتَابَ",
        meaning: "qeybət etmək",
        forms: {
            past: { arabic: "اِغْتَابَ", translation: "qeybət etdi", examples: [
                { arabic: "اِغْتَابَ أَخَاهُ", translation: "Qardaşının qeybətini etdi." },
                { arabic: "اِغْتَابَتْ صَدِيقَتَهَا", translation: "Dostunun qeybətini etdi." }
            ]},
            present: { arabic: "يَغْتَابُ", translation: "qeybət edir", examples: [
                { arabic: "يَغْتَابُ النَّاسَ", translation: "İnsanların qeybətini edir." },
                { arabic: "يَغْتَابُ فِي المَجَالِسِ", translation: "Məclislərdə qeybət edir." }
            ]},
            imperative: { arabic: "لَا تَغْتَبْ", translation: "qeybət etmə!", examples: [
                { arabic: "لَا تَغْتَبْ أَحَدًا", translation: "Heç kimin qeybətini etmə!" },
                { arabic: "لَا تَغْتَبْ فِي المَجَالِسِ", translation: "Məclislərdə qeybət etmə!" }
            ]}
        }
    },
{
        id: 270,
        arabic: "نَمَّ",
        meaning: "söz gəzdirmək, namazlıq etmək",
        forms: {
            past: { arabic: "نَمَّ", translation: "söz gəzdirdi", examples: [
                { arabic: "نَمَّ بَيْنَ النَّاسِ", translation: "İnsanlar arasında söz gəzdirdi." },
                { arabic: "نَمَّتْ عَنْ أَخِيهَا", translation: "Qardaşı haqqında söz gəzdirdi." }
            ]},
            present: { arabic: "يَنُمُّ", translation: "söz gəzdirir", examples: [
                { arabic: "يَنُمُّ فِي المَجَالِسِ", translation: "Məclislərdə söz gəzdirir." },
                { arabic: "يَنُمُّ بَيْنَ الأَصْدِقَاءِ", translation: "Dostlar arasında söz gəzdirir." }
            ]},
            imperative: { arabic: "لَا تَنُمَّ", translation: "söz gəzdirmə!", examples: [
                { arabic: "لَا تَنُمَّ بَيْنَ النَّاسِ", translation: "İnsanlar arasında söz gəzdirmə!" },
                { arabic: "لَا تَنُمَّ فِي المَجَالِسِ", translation: "Məclislərdə söz gəzdirmə!" }
            ]}
        }
    },
{
        id: 271,
        arabic: "حَسَدَ",
        meaning: "həsəd aparmaq, paxıllıq etmək",
        forms: {
            past: { arabic: "حَسَدَ", translation: "həsəd apardı", examples: [
                { arabic: "حَسَدَ أَخَاهُ عَلَى مَالِهِ", translation: "Qardaşının malına həsəd apardı." },
                { arabic: "حَسَدَتْ جَارَتَهَا", translation: "Qonşusuna həsəd apardı." }
            ]},
            present: { arabic: "يَحْسُدُ", translation: "həsəd aparır", examples: [
                { arabic: "يَحْسُدُ النَّاسَ عَلَى الخَيْرِ", translation: "İnsanların xeyirinə həsəd aparır." },
                { arabic: "يَحْسُدُ عَلَى النِّعَمِ", translation: "Nemətlərə həsəd aparır." }
            ]},
            imperative: { arabic: "لَا تَحْسُدْ", translation: "həsəd aparma!", examples: [
                { arabic: "لَا تَحْسُدْ أَحَدًا", translation: "Heç kimə həsəd aparma!" },
                { arabic: "لَا تَحْسُدْ عَلَى مَا آتَى اللَّهُ النَّاسَ", translation: "Allahın insanlara verdiyinə həsəd aparma!" }
            ]}
        }
    },
{
        id: 272,
        arabic: "حَقَدَ",
        meaning: "kin saxlamaq, qərəz bəsləmək",
        forms: {
            past: { arabic: "حَقَدَ", translation: "kin saxladı", examples: [
                { arabic: "حَقَدَ عَلَى أَخِيهِ", translation: "Qardaşına kin saxladı." },
                { arabic: "حَقَدَتْ عَلَى جَارَتِهَا", translation: "Qonşusuna kin saxladı." }
            ]},
            present: { arabic: "يَحْقِدُ", translation: "kin saxlayır", examples: [
                { arabic: "يَحْقِدُ عَلَى النَّاسِ", translation: "İnsanlara kin saxlayır." },
                { arabic: "يَحْقِدُ فِي قَلْبِهِ", translation: "Qəlbində kin saxlayır." }
            ]},
            imperative: { arabic: "لَا تَحْقِدْ", translation: "kin saxlama!", examples: [
                { arabic: "لَا تَحْقِدْ عَلَى أَحَدٍ", translation: "Heç kimə kin saxlama!" },
                { arabic: "لَا تَحْقِدْ فِي قَلْبِكَ", translation: "Qəlbində kin saxlama!" }
            ]}
        }
    },
{
        id: 273,
        arabic: "غَضِبَ",
        meaning: "qəzəblənmək",
        forms: {
            past: { arabic: "غَضِبَ", translation: "qəzəbləndi", examples: [
                { arabic: "غَضِبَ عَلَى أَخِيهِ", translation: "Qardaşına qəzəbləndi." },
                { arabic: "غَضِبَتْ مِنْ سُوءِ التَّصَرُّفِ", translation: "Pis davranışa qəzəbləndi." }
            ]},
            present: { arabic: "يَغْضَبُ", translation: "qəzəblənir", examples: [
                { arabic: "يَغْضَبُ بِسُرْعَةٍ", translation: "Tez qəzəblənir." },
                { arabic: "يَغْضَبُ لِلَّهِ", translation: "Allah üçün qəzəblənir." }
            ]},
            imperative: { arabic: "لَا تَغْضَبْ", translation: "qəzəblənmə!", examples: [
                { arabic: "لَا تَغْضَبْ وَلَكَ الجَنَّةُ", translation: "Qəzəblənmə, cənnət sənindir!" },
                { arabic: "لَا تَغْضَبْ فِي المُنَاقَشَةِ", translation: "Müzakirədə qəzəblənmə!" }
            ]}
        }
    },
{
        id: 274,
        arabic: "اِنْتَقَمَ",
        meaning: "intiqam almaq",
        forms: {
            past: { arabic: "اِنْتَقَمَ", translation: "intiqam aldı", examples: [
                { arabic: "اِنْتَقَمَ مِنَ الظَّالِمِ", translation: "Zülmkardan intiqam aldı." },
                { arabic: "اِنْتَقَمَ اللَّهُ مِنَ الكُفَّارِ", translation: "Allah kafirlərdən intiqam aldı." }
            ]},
            present: { arabic: "يَنْتَقِمُ", translation: "intiqam alır", examples: [
                { arabic: "يَنْتَقِمُ اللَّهُ مِنَ الظَّالِمِينَ", translation: "Allah zalımlardan intiqam alır." },
                { arabic: "يَنْتَقِمُ لِلْمَظْلُومِ", translation: "Məzlumun intiqamını alır." }
            ]},
            imperative: { arabic: "لَا تَنْتَقِمْ", translation: "intiqam alma!", examples: [
                { arabic: "لَا تَنْتَقِمْ لِنَفْسِكَ", translation: "Özün üçün intiqam alma!" },
                { arabic: "لَا تَنْتَقِمْ وَاعْفُ", translation: "İntiqam alma, əfv et!" }
            ]}
        }
    },
{
        id: 275,
        arabic: "عَاقَبَ",
        meaning: "cəzalandırmaq",
        forms: {
            past: { arabic: "عَاقَبَ", translation: "cəzalandırdı", examples: [
                { arabic: "عَاقَبَ المُعَلِّمُ الطَّالِبَ", translation: "Müəllim tələbəni cəzalandırdı." },
                { arabic: "عَاقَبَ اللَّهُ الظَّالِمَ", translation: "Allah zalımı cəzalandırdı." }
            ]},
            present: { arabic: "يُعَاقِبُ", translation: "cəzalandırır", examples: [
                { arabic: "يُعَاقِبُ اللَّهُ المُذْنِبِينَ", translation: "Allah günahkarları cəzalandırır." },
                { arabic: "يُعَاقِبُ بِالعَدْلِ", translation: "Ədalətlə cəzalandırır." }
            ]},
            imperative: { arabic: "عَاقِبْ", translation: "cəzalandır!", examples: [
                { arabic: "عَاقِبْ بِالعَدْلِ", translation: "Ədalətlə cəzalandır!" },
                { arabic: "عَاقِبْ عَلَى الذَّنْبِ", translation: "Günaha görə cəzalandır!" }
            ]}
        }
    },
{
        id: 276,
        arabic: "أَثَابَ",
        meaning: "mükafatlandırmaq",
        forms: {
            past: { arabic: "أَثَابَ", translation: "mükafatlandırdı", examples: [
                { arabic: "أَثَابَ اللَّهُ المُحْسِنِينَ", translation: "Allah yaxşılıq edənləri mükafatlandırdı." },
                { arabic: "أَثَابَهُ عَلَى صَبْرِهِ", translation: "Səbrinə görə onu mükafatlandırdı." }
            ]},
            present: { arabic: "يُثِيبُ", translation: "mükafatlandırır", examples: [
                { arabic: "يُثِيبُ اللَّهُ الصَّابِرِينَ", translation: "Allah səbir edənləri mükafatlandırır." },
                { arabic: "يُثِيبُ عَلَى العَمَلِ الصَّالِحِ", translation: "Saleh əmələ görə mükafatlandırır." }
            ]},
            imperative: { arabic: "أَثِبْ", translation: "mükafatlandır!", examples: [
                { arabic: "أَثِبْ مِنْ أَحْسَنَ", translation: "Yaxşılıq edəni mükafatlandır!" },
                { arabic: "أَثِبْ عَلَى الصَّبْرِ", translation: "Səbrə görə mükafatlandır!" }
            ]}
        }
    },
{
        id: 277,
        arabic: "اِعْتَدَى",
        meaning: "təcavüz etmək, həddi aşmaq",
        forms: {
            past: { arabic: "اِعْتَدَى", translation: "təcavüz etdi", examples: [
                { arabic: "اِعْتَدَى عَلَى الجَارِ", translation: "Qonşusuna təcavüz etdi." },
                { arabic: "اِعْتَدَتْ فِي الحُدُودِ", translation: "Həddi aşdı." }
            ]},
            present: { arabic: "يَعْتَدِي", translation: "təcavüz edir", examples: [
                { arabic: "يَعْتَدِي عَلَى الآخَرِينَ", translation: "Başqalarına təcavüz edir." },
                { arabic: "يَعْتَدِي فِي الخُصُومَةِ", translation: "Mübahisədə həddi aşır." }
            ]},
            imperative: { arabic: "لَا تَعْتَدِ", translation: "təcavüz etmə!", examples: [
                { arabic: "لَا تَعْتَدِ عَلَى أَحَدٍ", translation: "Heç kimə təcavüz etmə!" },
                { arabic: "لَا تَعْتَدِ فِي الخُصُومَةِ", translation: "Mübahisədə həddi aşma!" }
            ]}
        }
    },
{
        id: 278,
        arabic: "ظَلَمَ",
        meaning: "zülm etmək",
        forms: {
            past: { arabic: "ظَلَمَ", translation: "zülm etdi", examples: [
                { arabic: "ظَلَمَ النَّاسَ", translation: "İnsanlara zülm etdi." },
                { arabic: "ظَلَمَتْ نَفْسَهَا", translation: "Özünə zülm etdi." }
            ]},
            present: { arabic: "يَظْلِمُ", translation: "zülm edir", examples: [
                { arabic: "يَظْلِمُ الضُّعَفَاءَ", translation: "Zəiflərə zülm edir." },
                { arabic: "يَظْلِمُ بِسَبَبِ الجَاهِ", translation: "Məqamı üzündən zülm edir." }
            ]},
            imperative: { arabic: "لَا تَظْلِمْ", translation: "zülm etmə!", examples: [
                { arabic: "لَا تَظْلِمْ أَحَدًا", translation: "Heç kimə zülm etmə!" },
                { arabic: "لَا تَظْلِمْ نَفْسَكَ", translation: "Özünə zülm etmə!" }
            ]}
        }
    },
{
        id: 279,
        arabic: "رَحِمَ",
        meaning: "rəhm etmək, mərhəmət göstərmək",
        forms: {
            past: { arabic: "رَحِمَ", translation: "rəhm etdi", examples: [
                { arabic: "رَحِمَ اللَّهُ عَبْدًا", translation: "Allah bir quluna rəhm etdi." },
                { arabic: "رَحِمَتِ الضُّعَفَاءَ", translation: "Zəiflərə rəhm etdi." }
            ]},
            present: { arabic: "يَرْحَمُ", translation: "rəhm edir", examples: [
                { arabic: "يَرْحَمُ اللَّهُ عِبَادَهُ", translation: "Allah qullarına rəhm edir." },
                { arabic: "يَرْحَمُ اليَتِيمَ وَالمِسْكِينَ", translation: "Yetimə və kasıba rəhm edir." }
            ]},
            imperative: { arabic: "اِرْحَمْ", translation: "rəhm et!", examples: [
                { arabic: "اِرْحَمْ مَنْ فِي الأَرْضِ", translation: "Yerdə olanlara rəhm et!" },
                { arabic: "اِرْحَمِ الضَّعِيفَ", translation: "Zəifə rəhm et!" }
            ]}
        }
    },
{
        id: 280,
        arabic: "قَسَا",
        meaning: "sərt olmaq, daşlaşmaq (qəlb)",
        forms: {
            past: { arabic: "قَسَا", translation: "sərt oldu", examples: [
                { arabic: "قَسَا قَلْبُهُ", translation: "Qəlbi sərtləşdi." },
                { arabic: "قَسَتْ نَفْسُهُ", translation: "Ruhu sərtləşdi." }
            ]},
            present: { arabic: "يَقْسُو", translation: "sərt olur", examples: [
                { arabic: "يَقْسُو القَلْبُ بِكَثْرَةِ الذُّنُوبِ", translation: "Günahların çoxluğu qəlbi sərtləşdirir." },
                { arabic: "يَقْسُو عَلَى الضُّعَفَاءِ", translation: "Zəiflərə qarşı sərt olur." }
            ]},
            imperative: { arabic: "لَا تَقْسُ", translation: "sərt olma!", examples: [
                { arabic: "لَا تَقْسُ عَلَى الضُّعَفَاءِ", translation: "Zəiflərə qarşı sərt olma!" },
                { arabic: "لَا تَقْسُ قَلْبُكَ", translation: "Qəlbin sərtləşməsin!" }
            ]}
        }
    },
{
        id: 281,
        arabic: "حَافَظَ عَلَى الصَّلَاةِ",
        meaning: "namazı qorumaq",
        forms: {
            past: { arabic: "حَافَظَ عَلَى الصَّلَاةِ", translation: "namazı qorudu", examples: [
                { arabic: "حَافَظَ عَلَى الصَّلَوَاتِ الخَمْسِ", translation: "Beş vaxt namazı qorudu." },
                { arabic: "حَافَظَتْ عَلَى صَلَاتِهَا", translation: "Namazını qorudu." }
            ]},
            present: { arabic: "يُحَافِظُ عَلَى الصَّلَاةِ", translation: "namazı qoruyur", examples: [
                { arabic: "يُحَافِظُ عَلَى الصَّلَاةِ فِي وَقْتِهَا", translation: "Namazı vaxtında qılır." },
                { arabic: "يُحَافِظُ عَلَى الصَّلَوَاتِ الخَمْسِ", translation: "Beş vaxt namazı qoruyur." }
            ]},
            imperative: { arabic: "حَافِظْ عَلَى الصَّلَاةِ", translation: "namazı qoru!", examples: [
                { arabic: "حَافِظْ عَلَى الصَّلَوَاتِ الخَمْسِ", translation: "Beş vaxt namazı qoru!" },
                { arabic: "حَافِظْ عَلَى الصَّلَاةِ فِي وَقْتِهَا", translation: "Namazı vaxtında qıl!" }
            ]}
        }
    },
{
        id: 282,
        arabic: "أَدَّى",
        meaning: "yerinə yetirmək, ödəmək",
        forms: {
            past: { arabic: "أَدَّى", translation: "yerinə yetirdi", examples: [
                { arabic: "أَدَّى الصَّلَاةَ", translation: "Namazı yerinə yetirdi." },
                { arabic: "أَدَّى الأَمَانَةَ", translation: "Əmanəti yerinə yetirdi." }
            ]},
            present: { arabic: "يُؤَدِّي", translation: "yerinə yetirir", examples: [
                { arabic: "يُؤَدِّي الصَّلَوَاتِ", translation: "Namazları qılır." },
                { arabic: "يُؤَدِّي حُقُوقَ النَّاسِ", translation: "İnsanların haqlarını ödəyir." }
            ]},
            imperative: { arabic: "أَدِّ", translation: "yerinə yetir!", examples: [
                { arabic: "أَدِّ الأَمَانَةَ", translation: "Əmanəti yerinə yetir!" },
                { arabic: "أَدِّ الصَّلَاةَ", translation: "Namazı qıl!" }
            ]}
        }
    },
{
        id: 283,
        arabic: "اِلْتَزَمَ بِالآدَابِ",
        meaning: "ədəblərə riayət etmək",
        forms: {
            past: { arabic: "اِلْتَزَمَ بِالآدَابِ", translation: "ədəblərə riayət etdi", examples: [
                { arabic: "اِلْتَزَمَ بِآدَابِ الطَّعَامِ", translation: "Yemək ədəblərinə riayət etdi." },
                { arabic: "اِلْتَزَمَتْ بِآدَابِ الحَدِيثِ", translation: "Danışıq ədəblərinə riayət etdi." }
            ]},
            present: { arabic: "يَلْتَزِمُ بِالآدَابِ", translation: "ədəblərə riayət edir", examples: [
                { arabic: "يَلْتَزِمُ بِآدَابِ الإِسْلَامِ", translation: "İslam ədəblərinə riayət edir." },
                { arabic: "يَلْتَزِمُ بِآدَابِ المَسْجِدِ", translation: "Məscid ədəblərinə riayət edir." }
            ]},
            imperative: { arabic: "اِلْتَزِمْ بِالآدَابِ", translation: "ədəblərə riayət et!", examples: [
                { arabic: "اِلْتَزِمْ بِآدَابِ الإِسْلَامِ", translation: "İslam ədəblərinə riayət et!" },
                { arabic: "اِلْتَزِمْ بِآدَابِ الطَّعَامِ", translation: "Yemək ədəblərinə riayət et!" }
            ]}
        }
    },
{
        id: 284,
        arabic: "اِسْتَأْذَنَ فِي الدُّخُولِ",
        meaning: "girmək üçün icazə istəmək",
        forms: {
            past: { arabic: "اِسْتَأْذَنَ فِي الدُّخُولِ", translation: "girmək üçün icazə istədi", examples: [
                { arabic: "اِسْتَأْذَنَ قَبْلَ الدُّخُولِ", translation: "Girməzdən əvvəl icazə istədi." },
                { arabic: "اِسْتَأْذَنَتْ فِي الدُّخُولِ", translation: "Girmək üçün icazə istədi." }
            ]},
            present: { arabic: "يَسْتَأْذِنُ فِي الدُّخُولِ", translation: "girmək üçün icazə istəyir", examples: [
                { arabic: "يَسْتَأْذِنُ قَبْلَ الدُّخُولِ", translation: "Girməzdən əvvəl icazə istəyir." },
                { arabic: "يَسْتَأْذِنُ لِلدُّخُولِ إِلَى الغُرْفَةِ", translation: "Otağa girmək üçün icazə istəyir." }
            ]},
            imperative: { arabic: "اِسْتَأْذِنْ فِي الدُّخُولِ", translation: "girmək üçün icazə istə!", examples: [
                { arabic: "اِسْتَأْذِنْ قَبْلَ الدُّخُولِ", translation: "Girməzdən əvvəl icazə istə!" },
                { arabic: "اِسْتَأْذِنْ لِلدُّخُولِ إِلَى البَيْتِ", translation: "Evə girmək üçün icazə istə!" }
            ]}
        }
    },
{
        id: 285,
        arabic: "اِسْتَقْبَلَ الضَّيْفَ",
        meaning: "qonağı qarşılamaq",
        forms: {
            past: { arabic: "اِسْتَقْبَلَ الضَّيْفَ", translation: "qonağı qarşıladı", examples: [
                { arabic: "اِسْتَقْبَلَ ضَيْفَهُ بِالوُدِّ", translation: "Qonağını mehribanlıqla qarşıladı." },
                { arabic: "اِسْتَقْبَلَتِ الضَّيْفَ بِالإِكْرَامِ", translation: "Qonağı hörmətlə qarşıladı." }
            ]},
            present: { arabic: "يَسْتَقْبِلُ الضَّيْفَ", translation: "qonağı qarşılayır", examples: [
                { arabic: "يَسْتَقْبِلُ الضُّيُوفَ بِالكَرَمِ", translation: "Qonaqları kəramətlə qarşılayır." },
                { arabic: "يَسْتَقْبِلُ الضَّيْفَ بِالابتِسَامَةِ", translation: "Qonağı gülərüzlə qarşılayır." }
            ]},
            imperative: { arabic: "اِسْتَقْبِلِ الضَّيْفَ", translation: "qonağı qarşıla!", examples: [
                { arabic: "اِسْتَقْبِلْ ضَيْفَكَ بِالكَرَمِ", translation: "Qonağını kəramətlə qarşıla!" },
                { arabic: "اِسْتَقْبِلْ ضَيْفَكَ بِالبَسْمَةِ", translation: "Qonağını gülərüzlə qarşıla!" }
            ]}
        }
    },
{
        id: 286,
        arabic: "أَكْرَمَ الضَّيْفَ",
        meaning: "qonağa ikram etmək",
        forms: {
            past: { arabic: "أَكْرَمَ الضَّيْفَ", translation: "qonağa ikram etdi", examples: [
                { arabic: "أَكْرَمَ ضَيْفَهُ بِالطَّعَامِ", translation: "Qonağına yemək ikram etdi." },
                { arabic: "أَكْرَمَتِ الضَّيْفَ بِالشَّرَابِ", translation: "Qonağa içki ikram etdi." }
            ]},
            present: { arabic: "يُكْرِمُ الضَّيْفَ", translation: "qonağa ikram edir", examples: [
                { arabic: "يُكْرِمُ الضُّيُوفَ", translation: "Qonaqlara ikram edir." },
                { arabic: "يُكْرِمُ الضَّيْفَ بِمَا تَيَسَّرَ", translation: "Qonağa asan olanı ikram edir." }
            ]},
            imperative: { arabic: "أَكْرِمِ الضَّيْفَ", translation: "qonağa ikram et!", examples: [
                { arabic: "أَكْرِمْ ضَيْفَكَ", translation: "Qonağına ikram et!" },
                { arabic: "أَكْرِمْ ضَيْفَكَ بِمَا عِنْدَكَ", translation: "Qonağına əlində olanla ikram et!" }
            ]}
        }
    },
{
        id: 287,
        arabic: "اِسْتَقَرَّ",
        meaning: "yerləşmək, sabit olmaq",
        forms: {
            past: { arabic: "اِسْتَقَرَّ", translation: "yerləşdi", examples: [
                { arabic: "اِسْتَقَرَّ فِي بَيْتٍ جَدِيدٍ", translation: "Yeni evdə yerləşdi." },
                { arabic: "اِسْتَقَرَّتِ النَّفْسُ", translation: "Ruh sakitləşdi." }
            ]},
            present: { arabic: "يَسْتَقِرُّ", translation: "yerləşir", examples: [
                { arabic: "يَسْتَقِرُّ فِي مَكَانِهِ", translation: "Yerində sabit olur." },
                { arabic: "يَسْتَقِرُّ بَعْدَ السَّفَرِ", translation: "Səfərdən sonra yerləşir." }
            ]},
            imperative: { arabic: "اِسْتَقِرَّ", translation: "yerləş!", examples: [
                { arabic: "اِسْتَقِرَّ فِي مَكَانِكَ", translation: "Yerində sabit ol!" },
                { arabic: "اِسْتَقِرَّ وَلَا تَتَحَرَّكْ", translation: "Sabit ol və tərpənmə!" }
            ]}
        }
    },
{
        id: 288,
        arabic: "اِسْتَعَدَّ",
        meaning: "hazırlaşmaq",
        forms: {
            past: { arabic: "اِسْتَعَدَّ", translation: "hazırlaşdı", examples: [
                { arabic: "اِسْتَعَدَّ لِلصَّلَاةِ", translation: "Namaza hazırlaşdı." },
                { arabic: "اِسْتَعَدَّتْ لِلِامْتِحَانِ", translation: "İmtahana hazırlaşdı." }
            ]},
            present: { arabic: "يَسْتَعِدُّ", translation: "hazırlaşır", examples: [
                { arabic: "يَسْتَعِدُّ لِلِامْتِحَانِ", translation: "İmtahana hazırlaşır." },
                { arabic: "يَسْتَعِدُّ لِشَهْرِ رَمَضَانَ", translation: "Ramazan ayına hazırlaşır." }
            ]},
            imperative: { arabic: "اِسْتَعِدَّ", translation: "hazırlaş!", examples: [
                { arabic: "اِسْتَعِدَّ لِلصَّلَاةِ", translation: "Namaza hazırlaş!" },
                { arabic: "اِسْتَعِدَّ لِلِامْتِحَانِ", translation: "İmtahana hazırlaş!" }
            ]}
        }
    },
{
        id: 289,
        arabic: "اِسْتَرَاحَ",
        meaning: "istirahət etmək",
        forms: {
            past: { arabic: "اِسْتَرَاحَ", translation: "istirahət etdi", examples: [
                { arabic: "اِسْتَرَاحَ بَعْدَ العَمَلِ", translation: "İşdən sonra istirahət etdi." },
                { arabic: "اِسْتَرَاحَتْ فِي الظِّلِّ", translation: "Kölgədə istirahət etdi." }
            ]},
            present: { arabic: "يَسْتَرِيحُ", translation: "istirahət edir", examples: [
                { arabic: "يَسْتَرِيحُ فِي وَقْتِ القَيْلُولَةِ", translation: "Qeylule vaxtı istirahət edir." },
                { arabic: "يَسْتَرِيحُ بَعْدَ العَمَلِ", translation: "İşdən sonra istirahət edir." }
            ]},
            imperative: { arabic: "اِسْتَرِحْ", translation: "istirahət et!", examples: [
                { arabic: "اِسْتَرِحْ بَعْدَ العَمَلِ", translation: "İşdən sonra istirahət et!" },
                { arabic: "اِسْتَرِحْ قَلِيلًا", translation: "Bir az istirahət et!" }
            ]}
        }
    },
{
        id: 290,
        arabic: "تَرَوَّى",
        meaning: "düşünmək, tələsməmək",
        forms: {
            past: { arabic: "تَرَوَّى", translation: "düşündü", examples: [
                { arabic: "تَرَوَّى فِي الأَمْرِ", translation: "İşdə düşündü." },
                { arabic: "تَرَوَّتْ قَبْلَ الإِجَابَةِ", translation: "Cavab verməzdən əvvəl düşündü." }
            ]},
            present: { arabic: "يَتَرَوَّى", translation: "düşünür", examples: [
                { arabic: "يَتَرَوَّى فِي قَرَارَاتِهِ", translation: "Qərarlarında düşünür." },
                { arabic: "يَتَرَوَّى فِي الكَلَامِ", translation: "Danışıqda tələsmir." }
            ]},
            imperative: { arabic: "تَرَوَّ", translation: "düşün!", examples: [
                { arabic: "تَرَوَّ قَبْلَ أَنْ تَتَكَلَّمَ", translation: "Danışmazdan əvvəl düşün!" },
                { arabic: "تَرَوَّ فِي أُمُورِكَ", translation: "İşlərində düşün!" }
            ]}
        }
    },
{
        id: 291,
        arabic: "تَأَمَّلَ",
        meaning: "düşünmək, təfəkkür etmək",
        forms: {
            past: { arabic: "تَأَمَّلَ", translation: "təfəkkür etdi", examples: [
                { arabic: "تَأَمَّلَ فِي خَلْقِ اللَّهِ", translation: "Allahın yaratdıqlarında təfəkkür etdi." },
                { arabic: "تَأَمَّلَتْ فِي القُرْآنِ", translation: "Quranda təfəkkür etdi." }
            ]},
            present: { arabic: "يَتَأَمَّلُ", translation: "təfəkkür edir", examples: [
                { arabic: "يَتَأَمَّلُ فِي آيَاتِ اللَّهِ", translation: "Allahın ayələrində təfəkkür edir." },
                { arabic: "يَتَأَمَّلُ فِي الكَوْنِ", translation: "Kainatda təfəkkür edir." }
            ]},
            imperative: { arabic: "تَأَمَّلْ", translation: "təfəkkür et!", examples: [
                { arabic: "تَأَمَّلْ فِي خَلْقِ اللَّهِ", translation: "Allahın yaratdıqlarında təfəkkür et!" },
                { arabic: "تَأَمَّلْ فِي آيَاتِ اللَّهِ", translation: "Allahın ayələrində təfəkkür et!" }
            ]}
        }
    },
{
        id: 292,
        arabic: "تَفَكَّرَ",
        meaning: "fikirləşmək, dərin düşünmək",
        forms: {
            past: { arabic: "تَفَكَّرَ", translation: "fikirləşdi", examples: [
                { arabic: "تَفَكَّرَ فِي أَمْرِهِ", translation: "İşi barədə fikirləşdi." },
                { arabic: "تَفَكَّرَتْ فِي العَاقِبَةِ", translation: "Aqibəti düşündü." }
            ]},
            present: { arabic: "يَتَفَكَّرُ", translation: "fikirləşir", examples: [
                { arabic: "يَتَفَكَّرُ فِي آيَاتِ اللَّهِ", translation: "Allahın ayələrində fikirləşir." },
                { arabic: "يَتَفَكَّرُ فِي أُمُورِ الآخِرَةِ", translation: "Axirət işlərində fikirləşir." }
            ]},
            imperative: { arabic: "تَفَكَّرْ", translation: "fikirləş!", examples: [
                { arabic: "تَفَكَّرْ فِي آيَاتِ اللَّهِ", translation: "Allahın ayələrində fikirləş!" },
                { arabic: "تَفَكَّرْ فِي عَاقِبَتِكَ", translation: "Aqibətini düşün!" }
            ]}
        }
    },
{
        id: 293,
        arabic: "اِتَّعَظَ",
        meaning: "ibrət almaq, öyüd almaq",
        forms: {
            past: { arabic: "اِتَّعَظَ", translation: "ibrət aldı", examples: [
                { arabic: "اِتَّعَظَ بِمَصَارِعِ الظَّالِمِينَ", translation: "Zalımların sonundan ibrət aldı." },
                { arabic: "اِتَّعَظَتْ بِقِصَصِ القُرْآنِ", translation: "Quran qissələrindən ibrət aldı." }
            ]},
            present: { arabic: "يَتَّعِظُ", translation: "ibrət alır", examples: [
                { arabic: "يَتَّعِظُ بِمَا يَرَى", translation: "Gördüklərindən ibrət alır." },
                { arabic: "يَتَّعِظُ بِكَثْرَةِ الذِّكْرِ", translation: "Çox zikr etməklə ibrət alır." }
            ]},
            imperative: { arabic: "اِتَّعِظْ", translation: "ibrət al!", examples: [
                { arabic: "اِتَّعِظْ بِمَا حَدَثَ", translation: "Baş verəndən ibrət al!" },
                { arabic: "اِتَّعِظْ بِقِصَصِ القُرْآنِ", translation: "Quran qissələrindən ibrət al!" }
            ]}
        }
    },
{
        id: 294,
        arabic: "اِسْتَفَادَ",
        meaning: "faydalanmaq",
        forms: {
            past: { arabic: "اِسْتَفَادَ", translation: "faydalandı", examples: [
                { arabic: "اِسْتَفَادَ مِنَ الدَّرْسِ", translation: "Dərsdən faydalandı." },
                { arabic: "اِسْتَفَادَتْ مِنَ النَّصِيحَةِ", translation: "Nəsihətdən faydalandı." }
            ]},
            present: { arabic: "يَسْتَفِيدُ", translation: "faydalanır", examples: [
                { arabic: "يَسْتَفِيدُ مِنَ العِلْمِ", translation: "Elmdən faydalanır." },
                { arabic: "يَسْتَفِيدُ مِنَ التَّجْرِبَةِ", translation: "Təcrübədən faydalanır." }
            ]},
            imperative: { arabic: "اِسْتَفِدْ", translation: "faydalan!", examples: [
                { arabic: "اِسْتَفِدْ مِنَ العِلْمِ", translation: "Elmdən faydalan!" },
                { arabic: "اِسْتَفِدْ مِنْ وَقْتِكَ", translation: "Vaxtından faydalan!" }
            ]}
        }
    },
{
        id: 295,
        arabic: "أَفَادَ",
        meaning: "fayda vermək, məlumat vermək",
        forms: {
            past: { arabic: "أَفَادَ", translation: "fayda verdi", examples: [
                { arabic: "أَفَادَنِي كَثِيرًا", translation: "Mənə çox fayda verdi." },
                { arabic: "أَفَادَتِ المَعْلُومَةُ", translation: "Məlumat fayda verdi." }
            ]},
            present: { arabic: "يُفِيدُ", translation: "fayda verir", examples: [
                { arabic: "يُفِيدُ فِي العِلْمِ", translation: "Elmdə fayda verir." },
                { arabic: "يُفِيدُ فِي الحَيَاةِ", translation: "Həyatda fayda verir." }
            ]},
            imperative: { arabic: "أَفِدْ", translation: "fayda ver!", examples: [
                { arabic: "أَفِدْ غَيْرَكَ", translation: "Başqasına fayda ver!" },
                { arabic: "أَفِدْ بِمَا تَعْلَمُ", translation: "Bildiyinlə fayda ver!" }
            ]}
        }
    },
{
        id: 296,
        arabic: "اِسْتَفْسَرَ عَنِ الحُكْمِ",
        meaning: "hökm barədə soruşmaq",
        forms: {
            past: { arabic: "اِسْتَفْسَرَ عَنِ الحُكْمِ", translation: "hökm barədə soruşdu", examples: [
                { arabic: "اِسْتَفْسَرَ عَنْ حُكْمِ المَسْأَلَةِ", translation: "Məsələnin hökmünü soruşdu." },
                { arabic: "اِسْتَفْسَرَتْ عَنِ الحُكْمِ الشَّرْعِيِّ", translation: "Şəri hökm barədə soruşdu." }
            ]},
            present: { arabic: "يَسْتَفْسِرُ عَنِ الحُكْمِ", translation: "hökm barədə soruşur", examples: [
                { arabic: "يَسْتَفْسِرُ عَنِ الأَحْكَامِ", translation: "Hökmələr barədə soruşur." },
                { arabic: "يَسْتَفْسِرُ عَنِ المَسَائِلِ الشَّرْعِيَّةِ", translation: "Şəri məsələlər barədə soruşur." }
            ]},
            imperative: { arabic: "اِسْتَفْسِرْ عَنِ الحُكْمِ", translation: "hökm barədə soruş!", examples: [
                { arabic: "اِسْتَفْسِرْ عَمَّا لَا تَفْهَمُ", translation: "Anlamadığın barədə soruş!" },
                { arabic: "اِسْتَفْسِرْ عَنِ الحُكْمِ الشَّرْعِيِّ", translation: "Şəri hökm barədə soruş!" }
            ]}
        }
    },
{
        id: 297,
        arabic: "اِجْتَهَدَ فِي العِبَادَةِ",
        meaning: "ibadətdə səy göstərmək",
        forms: {
            past: { arabic: "اِجْتَهَدَ فِي العِبَادَةِ", translation: "ibadətdə səy göstərdi", examples: [
                { arabic: "اِجْتَهَدَ فِي الصَّلَاةِ وَالصِّيَامِ", translation: "Namaz və orucda səy göstərdi." },
                { arabic: "اِجْتَهَدَتْ فِي الطَّاعَةِ", translation: "İtaətdə səy göstərdi." }
            ]},
            present: { arabic: "يَجْتَهِدُ فِي العِبَادَةِ", translation: "ibadətdə səy göstərir", examples: [
                { arabic: "يَجْتَهِدُ فِي العِبَادَةِ", translation: "İbadətdə səy göstərir." },
                { arabic: "يَجْتَهِدُ فِي الطَّاعَةِ", translation: "İtaətdə səy göstərir." }
            ]},
            imperative: { arabic: "اِجْتَهِدْ فِي العِبَادَةِ", translation: "ibadətdə səy göstər!", examples: [
                { arabic: "اِجْتَهِدْ فِي الصَّلَاةِ وَالصِّيَامِ", translation: "Namaz və orucda səy göstər!" },
                { arabic: "اِجْتَهِدْ فِي الطَّاعَةِ", translation: "İtaətdə səy göstər!" }
            ]}
        }
    },
{
        id: 298,
        arabic: "اِسْتَمَرَّ فِي الطَّاعَةِ",
        meaning: "itaətdə davamlı olmaq",
        forms: {
            past: { arabic: "اِسْتَمَرَّ فِي الطَّاعَةِ", translation: "itaətdə davam etdi", examples: [
                { arabic: "اِسْتَمَرَّ فِي الصَّلَاةِ", translation: "Namaza davam etdi." },
                { arabic: "اِسْتَمَرَّ فِي الذِّكْرِ", translation: "Zikrə davam etdi." }
            ]},
            present: { arabic: "يَسْتَمِرُّ فِي الطَّاعَةِ", translation: "itaətdə davam edir", examples: [
                { arabic: "يَسْتَمِرُّ فِي الصَّلَاةِ", translation: "Namaza davam edir." },
                { arabic: "يَسْتَمِرُّ فِي الذِّكْرِ", translation: "Zikrə davam edir." }
            ]},
            imperative: { arabic: "اِسْتَمِرَّ فِي الطَّاعَةِ", translation: "itaətdə davam et!", examples: [
                { arabic: "اِسْتَمِرَّ فِي الصَّلَاةِ", translation: "Namaza davam et!" },
                { arabic: "اِسْتَمِرَّ فِي الذِّكْرِ", translation: "Zikrə davam et!" }
            ]}
        }
    },
{
        id: 299,
        arabic: "اِنْقَطَعَ عَنِ المَعْصِيَةِ",
        meaning: "günahdan çəkinmək, tərk etmək",
        forms: {
            past: { arabic: "اِنْقَطَعَ عَنِ المَعْصِيَةِ", translation: "günahdan çəkindi", examples: [
                { arabic: "اِنْقَطَعَ عَنِ الكَذِبِ", translation: "Yalandan çəkindi." },
                { arabic: "اِنْقَطَعَتْ عَنِ الغِيبَةِ", translation: "Qeybətdən çəkindi." }
            ]},
            present: { arabic: "يَنْقَطِعُ عَنِ المَعْصِيَةِ", translation: "günahdan çəkinir", examples: [
                { arabic: "يَنْقَطِعُ عَنِ الرِّيَاءِ", translation: "Riyadan çəkinir." },
                { arabic: "يَنْقَطِعُ عَنِ المَعَاصِي", translation: "Günahlardan çəkinir." }
            ]},
            imperative: { arabic: "اِنْقَطِعْ عَنِ المَعْصِيَةِ", translation: "günahdan çəkin!", examples: [
                { arabic: "اِنْقَطِعْ عَنِ الكَذِبِ", translation: "Yalandan çəkin!" },
                { arabic: "اِنْقَطِعْ عَنِ الغِيبَةِ", translation: "Qeybətdən çəkin!" }
            ]}
        }
    },
{
        id: 300,
        arabic: "اِلْتَزَمَ بِالطَّاعَةِ",
        meaning: "itaətə bağlı qalmaq",
        forms: {
            past: { arabic: "اِلْتَزَمَ بِالطَّاعَةِ", translation: "itaətə bağlı qaldı", examples: [
                { arabic: "اِلْتَزَمَ بِطَاعَةِ اللَّهِ", translation: "Allaha itaətə bağlı qaldı." },
                { arabic: "اِلْتَزَمَتْ بِطَاعَةِ وَالِدَيْهَا", translation: "Valideynlərinə itaətə bağlı qaldı." }
            ]},
            present: { arabic: "يَلْتَزِمُ بِالطَّاعَةِ", translation: "itaətə bağlı qalır", examples: [
                { arabic: "يَلْتَزِمُ بِطَاعَةِ اللَّهِ", translation: "Allaha itaətə bağlı qalır." },
                { arabic: "يَلْتَزِمُ بِطَاعَةِ وَالِدَيْهِ", translation: "Valideynlərinə itaətə bağlı qalır." }
            ]},
            imperative: { arabic: "اِلْتَزِمْ بِالطَّاعَةِ", translation: "itaətə bağlı qal!", examples: [
                { arabic: "اِلْتَزِمْ بِطَاعَةِ اللَّهِ", translation: "Allaha itaətə bağlı qal!" },
                { arabic: "اِلْتَزِمْ بِطَاعَةِ وَالِدَيْكَ", translation: "Valideynlərinə itaətə bağlı qal!" }
            ]}
        }
    },
{
        id: 301,
        arabic: "اِسْتَعَاذَ",
        meaning: "sığınmaq (Allaha)",
        forms: {
            past: { arabic: "اِسْتَعَاذَ", translation: "sığındı", examples: [
                { arabic: "اِسْتَعَاذَ بِاللَّهِ مِنَ الشَّيْطَانِ", translation: "Şeytandan Allaha sığındı." },
                { arabic: "اِسْتَعَاذَتْ مِنْ شَرِّ النَّفْسِ", translation: "Nəfsin şərindən sığındı." }
            ]},
            present: { arabic: "يَسْتَعِيذُ", translation: "sığınır", examples: [
                { arabic: "يَسْتَعِيذُ بِاللَّهِ مِنَ الشَّيْطَانِ", translation: "Şeytandan Allaha sığınır." },
                { arabic: "يَسْتَعِيذُ مِنْ عَذَابِ القَبْرِ", translation: "Qəbir əzabından sığınır." }
            ]},
            imperative: { arabic: "اِسْتَعِذْ", translation: "sığın!", examples: [
                { arabic: "اِسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ", translation: "Şeytandan Allaha sığın!" },
                { arabic: "اِسْتَعِذْ مِنْ شَرِّ كُلِّ ذِي شَرٍّ", translation: "Hər şər sahibinin şərindən sığın!" }
            ]}
        }
    },
{
        id: 302,
        arabic: "تَعَوَّذَ",
        meaning: "sığınmaq, qorunma istəmək",
        forms: {
            past: { arabic: "تَعَوَّذَ", translation: "sığındı", examples: [
                { arabic: "تَعَوَّذَ بِاللَّهِ مِنَ الشَّيْطَانِ", translation: "Şeytandan Allaha sığındı." },
                { arabic: "تَعَوَّذَتْ مِنَ الوَسْوَاسِ", translation: "Vəsvəsədən sığındı." }
            ]},
            present: { arabic: "يَتَعَوَّذُ", translation: "sığınır", examples: [
                { arabic: "يَتَعَوَّذُ بِاللَّهِ مِنَ الشَّيْطَانِ", translation: "Şeytandan Allaha sığınır." },
                { arabic: "يَتَعَوَّذُ مِنَ النَّارِ", translation: "Cəhənnəmdən sığınır." }
            ]},
            imperative: { arabic: "تَعَوَّذْ", translation: "sığın!", examples: [
                { arabic: "تَعَوَّذْ بِاللَّهِ", translation: "Allaha sığın!" },
                { arabic: "تَعَوَّذْ مِنَ الشَّيْطَانِ", translation: "Şeytandan sığın!" }
            ]}
        }
    },
{
        id: 303,
        arabic: "اِسْتَغْفَرَ اللَّهَ",
        meaning: "Allahdan bağışlanma istəmək",
        forms: {
            past: { arabic: "اِسْتَغْفَرَ اللَّهَ", translation: "Allahdan bağışlanma istədi", examples: [
                { arabic: "اِسْتَغْفَرَ اللَّهَ كَثِيرًا", translation: "Allahdan çox bağışlanma istədi." },
                { arabic: "اِسْتَغْفَرَتْ لِذَنْبِهَا", translation: "Günahı üçün bağışlanma istədi." }
            ]},
            present: { arabic: "يَسْتَغْفِرُ اللَّهَ", translation: "Allahdan bağışlanma istəyir", examples: [
                { arabic: "يَسْتَغْفِرُ اللَّهَ فِي الأَسْحَارِ", translation: "Səhərlər Allahdan bağışlanma istəyir." },
                { arabic: "يَسْتَغْفِرُ لِوَالِدَيْهِ", translation: "Valideynləri üçün bağışlanma istəyir." }
            ]},
            imperative: { arabic: "اِسْتَغْفِرِ اللَّهَ", translation: "Allahdan bağışlanma istə!", examples: [
                { arabic: "اِسْتَغْفِرِ اللَّهَ كَثِيرًا", translation: "Allahdan çox bağışlanma istə!" },
                { arabic: "اِسْتَغْفِرْ لِذَنْبِكَ", translation: "Günahın üçün bağışlanma istə!" }
            ]}
        }
    },
{
        id: 304,
        arabic: "دَعَا اللَّهَ",
        meaning: "Allaha dua etmək",
        forms: {
            past: { arabic: "دَعَا اللَّهَ", translation: "Allaha dua etdi", examples: [
                { arabic: "دَعَا اللَّهَ بِالتَّوْفِيقِ", translation: "Allahdan müvəffəqiyyət istədi." },
                { arabic: "دَعَتِ اللَّهَ لِوَالِدَيْهَا", translation: "Valideynləri üçün Allaha dua etdi." }
            ]},
            present: { arabic: "يَدْعُو اللَّهَ", translation: "Allaha dua edir", examples: [
                { arabic: "يَدْعُو اللَّهَ فِي السُّجُودِ", translation: "Səcdədə Allaha dua edir." },
                { arabic: "يَدْعُو اللَّهَ بِالْهِدَايَةِ", translation: "Allahdan hidayət istəyir." }
            ]},
            imperative: { arabic: "اُدْعُ اللَّهَ", translation: "Allaha dua et!", examples: [
                { arabic: "اُدْعُ اللَّهَ بِإِخْلَاصٍ", translation: "Allaha səmimiyyətlə dua et!" },
                { arabic: "اُدْعُ اللَّهَ لِنَفْسِكَ", translation: "Özün üçün Allaha dua et!" }
            ]}
        }
    },
{
        id: 305,
        arabic: "ذَكَرَ اللَّهَ",
        meaning: "Allahı zikr etmək",
        forms: {
            past: { arabic: "ذَكَرَ اللَّهَ", translation: "Allahı zikr etdi", examples: [
                { arabic: "ذَكَرَ اللَّهَ كَثِيرًا", translation: "Allahı çox zikr etdi." },
                { arabic: "ذَكَرَتِ اللَّهَ فِي قَلْبِهَا", translation: "Qəlbində Allahı zikr etdi." }
            ]},
            present: { arabic: "يَذْكُرُ اللَّهَ", translation: "Allahı zikr edir", examples: [
                { arabic: "يَذْكُرُ اللَّهَ فِي كُلِّ وَقْتٍ", translation: "Hər vaxt Allahı zikr edir." },
                { arabic: "يَذْكُرُ اللَّهَ فِي السَّرَّاءِ وَالضَّرَّاءِ", translation: "Yaxşı və çətin günlərdə Allahı zikr edir." }
            ]},
            imperative: { arabic: "اُذْكُرِ اللَّهَ", translation: "Allahı zikr et!", examples: [
                { arabic: "اُذْكُرِ اللَّهَ كَثِيرًا", translation: "Allahı çox zikr et!" },
                { arabic: "اُذْكُرِ اللَّهَ فِي كُلِّ حَالٍ", translation: "Hər halda Allahı zikr et!" }
            ]}
        }
    },
{
        id: 306,
        arabic: "سَبَّحَ",
        meaning: "təsbih etmək, Allahı təqdis etmək",
        forms: {
            past: { arabic: "سَبَّحَ", translation: "təsbih etdi", examples: [
                { arabic: "سَبَّحَ اللَّهَ كَثِيرًا", translation: "Allahı çox təsbih etdi." },
                { arabic: "سَبَّحَتْ فِي الصَّلَاةِ", translation: "Namazda təsbih etdi." }
            ]},
            present: { arabic: "يُسَبِّحُ", translation: "təsbih edir", examples: [
                { arabic: "يُسَبِّحُ اللَّهَ فِي الصَّبَاحِ وَالمَسَاءِ", translation: "Səhər və axşam Allahı təsbih edir." },
                { arabic: "يُسَبِّحُ بِحَمْدِ رَبِّهِ", translation: "Rəbbini həmd ilə təsbih edir." }
            ]},
            imperative: { arabic: "سَبِّحْ", translation: "təsbih et!", examples: [
                { arabic: "سَبِّحِ اللَّهَ كَثِيرًا", translation: "Allahı çox təsbih et!" },
                { arabic: "سَبِّحْ بِحَمْدِ رَبِّكَ", translation: "Rəbbini həmd ilə təsbih et!" }
            ]}
        }
    },
{
        id: 307,
        arabic: "حَمِدَ",
        meaning: "həmd etmək, şükr etmək",
        forms: {
            past: { arabic: "حَمِدَ", translation: "həmd etdi", examples: [
                { arabic: "حَمِدَ اللَّهَ عَلَى نِعَمِهِ", translation: "Allaha nemətlərinə görə həmd etdi." },
                { arabic: "حَمِدَتِ اللَّهَ بَعْدَ الطَّعَامِ", translation: "Yeməkdən sonra Allaha həmd etdi." }
            ]},
            present: { arabic: "يَحْمَدُ", translation: "həmd edir", examples: [
                { arabic: "يَحْمَدُ اللَّهَ فِي كُلِّ حَالٍ", translation: "Hər halda Allaha həmd edir." },
                { arabic: "يَحْمَدُ اللَّهَ عَلَى الإِسْلَامِ", translation: "İslama görə Allaha həmd edir." }
            ]},
            imperative: { arabic: "اِحْمَدِ اللَّهَ", translation: "Allaha həmd et!", examples: [
                { arabic: "اِحْمَدِ اللَّهَ عَلَى نِعَمِهِ", translation: "Allahın nemətlərinə görə həmd et!" },
                { arabic: "اِحْمَدِ اللَّهَ فِي كُلِّ وَقْتٍ", translation: "Hər vaxt Allaha həmd et!" }
            ]}
        }
    },
{
        id: 308,
        arabic: "كَبَّرَ",
        meaning: "təkbir gətirmək, Allahı uca tutmaq",
        forms: {
            past: { arabic: "كَبَّرَ", translation: "təkbir gətirdi", examples: [
                { arabic: "كَبَّرَ فِي الصَّلَاةِ", translation: "Namazda təkbir gətirdi." },
                { arabic: "كَبَّرَ اللَّهَ تَعْظِيمًا", translation: "Allahı uca tutaraq təkbir gətirdi." }
            ]},
            present: { arabic: "يُكَبِّرُ", translation: "təkbir gətirir", examples: [
                { arabic: "يُكَبِّرُ فِي الصَّلَاةِ", translation: "Namazda təkbir gətirir." },
                { arabic: "يُكَبِّرُ اللَّهَ كَثِيرًا", translation: "Allahı çox uca tutur." }
            ]},
            imperative: { arabic: "كَبِّرْ", translation: "təkbir gətir!", examples: [
                { arabic: "كَبِّرِ اللَّهَ", translation: "Allahı uca tut, təkbir gətir!" },
                { arabic: "كَبِّرْ فِي الصَّلَاةِ", translation: "Namazda təkbir gətir!" }
            ]}
        }
    },
{
        id: 309,
        arabic: "هَلَّلَ",
        meaning: "lə ilahə illəllah demək",
        forms: {
            past: { arabic: "هَلَّلَ", translation: "lə ilahə illəllah dedi", examples: [
                { arabic: "هَلَّلَ المُسْلِمُ", translation: "Müsəlman təhlil etdi (lə ilahə illəllah dedi)." },
                { arabic: "هَلَّلَتْ فِي الذِّكْرِ", translation: "Zikrdə təhlil etdi." }
            ]},
            present: { arabic: "يُهَلِّلُ", translation: "lə ilahə illəllah deyir", examples: [
                { arabic: "يُهَلِّلُ فِي كُلِّ صَبَاحٍ", translation: "Hər səhər təhlil edir." },
                { arabic: "يُهَلِّلُ لِلَّهِ", translation: "Allah üçün təhlil edir." }
            ]},
            imperative: { arabic: "هَلِّلْ", translation: "lə ilahə illəllah de!", examples: [
                { arabic: "هَلِّلْ كَثِيرًا", translation: "Çox təhlil et!" },
                { arabic: "هَلِّلْ فِي الصَّبَاحِ وَالمَسَاءِ", translation: "Səhər və axşam təhlil et!" }
            ]}
        }
    },
{
        id: 310,
        arabic: "اِسْتَعَاذَ بِاللَّهِ",
        meaning: "Allaha sığınmaq",
        forms: {
            past: { arabic: "اِسْتَعَاذَ بِاللَّهِ", translation: "Allaha sığındı", examples: [
                { arabic: "اِسْتَعَاذَ بِاللَّهِ مِنَ الشَّيْطَانِ", translation: "Şeytandan Allaha sığındı." },
                { arabic: "اِسْتَعَاذَتْ مِنَ الوَسْوَاسِ", translation: "Vəsvəsədən Allaha sığındı." }
            ]},
            present: { arabic: "يَسْتَعِيذُ بِاللَّهِ", translation: "Allaha sığınır", examples: [
                { arabic: "يَسْتَعِيذُ بِاللَّهِ مِنَ الشَّيْطَانِ", translation: "Şeytandan Allaha sığınır." },
                { arabic: "يَسْتَعِيذُ مِنْ شَرِّ النَّفْسِ", translation: "Nəfsin şərindən Allaha sığınır." }
            ]},
            imperative: { arabic: "اِسْتَعِذْ بِاللَّهِ", translation: "Allaha sığın!", examples: [
                { arabic: "اِسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ", translation: "Şeytandan Allaha sığın!" },
                { arabic: "اِسْتَعِذْ مِنْ شَرِّ النَّفْسِ", translation: "Nəfsin şərindən Allaha sığın!" }
            ]}
        }
    },
{
        id: 311,
        arabic: "اِسْتَغَاثَ بِاللَّهِ",
        meaning: "Allahdan yardım istəmək",
        forms: {
            past: { arabic: "اِسْتَغَاثَ بِاللَّهِ", translation: "Allahdan yardım istədi", examples: [
                { arabic: "اِسْتَغَاثَ بِاللَّهِ فِي الشِّدَّةِ", translation: "Çətinlikdə Allahdan yardım istədi." },
                { arabic: "اِسْتَغَاثَتْ مِنَ الهَمِّ", translation: "Qəmdən Allahdan yardım istədi." }
            ]},
            present: { arabic: "يَسْتَغِيثُ بِاللَّهِ", translation: "Allahdan yardım istəyir", examples: [
                { arabic: "يَسْتَغِيثُ بِاللَّهِ فِي الشَّدَائِدِ", translation: "Çətinliklərdə Allahdan yardım istəyir." },
                { arabic: "يَسْتَغِيثُ بِاللَّهِ مِنَ الهَمِّ", translation: "Qəmdən Allahdan yardım istəyir." }
            ]},
            imperative: { arabic: "اِسْتَغِثْ بِاللَّهِ", translation: "Allahdan yardım istə!", examples: [
                { arabic: "اِسْتَغِثْ بِاللَّهِ فِي الشِّدَّةِ", translation: "Çətinlikdə Allahdan yardım istə!" },
                { arabic: "اِسْتَغِثْ مِنَ الهَمِّ", translation: "Qəmdən Allahdan yardım istə!" }
            ]}
        }
    },
{
        id: 312,
        arabic: "تَوَكَّلْ عَلَى اللَّهِ",
        meaning: "Allaha təvəkkül et",
        forms: {
            past: { arabic: "تَوَكَّلَ عَلَى اللَّهِ", translation: "Allaha təvəkkül etdi", examples: [
                { arabic: "تَوَكَّلَ عَلَى اللَّهِ فِي أُمُورِهِ", translation: "İşlərində Allaha təvəkkül etdi." },
                { arabic: "تَوَكَّلَتْ عَلَى اللَّهِ", translation: "Allaha təvəkkül etdi." }
            ]},
            present: { arabic: "يَتَوَكَّلُ عَلَى اللَّهِ", translation: "Allaha təvəkkül edir", examples: [
                { arabic: "يَتَوَكَّلُ عَلَى اللَّهِ فِي كُلِّ أَمْرٍ", translation: "Hər işdə Allaha təvəkkül edir." },
                { arabic: "يَتَوَكَّلُ وَلَا يَيْأَسُ", translation: "Təvəkkül edir və ümidsiz olmur." }
            ]},
            imperative: { arabic: "تَوَكَّلْ عَلَى اللَّهِ", translation: "Allaha təvəkkül et!", examples: [
                { arabic: "تَوَكَّلْ عَلَى اللَّهِ", translation: "Allaha təvəkkül et!" },
                { arabic: "تَوَكَّلْ عَلَى الحَيِّ الَّذِي لَا يَمُوتُ", translation: "Ölməz diri olan Allaha təvəkkül et!" }
            ]}
        }
    },
{
        id: 313,
        arabic: "اِعْتَصَمْ بِاللَّهِ",
        meaning: "Allahdan yapış, Ona sarıl",
        forms: {
            past: { arabic: "اِعْتَصَمَ بِاللَّهِ", translation: "Allaha sarıldı", examples: [
                { arabic: "اِعْتَصَمَ بِحَبْلِ اللَّهِ", translation: "Allahın ipinə sarıldı." },
                { arabic: "اِعْتَصَمَتْ بِالكِتَابِ وَالسُّنَّةِ", translation: "Kitab və sünnəyə sarıldı." }
            ]},
            present: { arabic: "يَعْتَصِمُ بِاللَّهِ", translation: "Allaha sarılır", examples: [
                { arabic: "يَعْتَصِمُ بِاللَّهِ", translation: "Allaha sarılır." },
                { arabic: "يَعْتَصِمُ بِالعَقِيدَةِ الصَّحِيحَةِ", translation: "Düzgün əqidəyə sarılır." }
            ]},
            imperative: { arabic: "اِعْتَصِمْ بِاللَّهِ", translation: "Allaha sarıl!", examples: [
                { arabic: "اِعْتَصِمْ بِحَبْلِ اللَّهِ", translation: "Allahın ipinə sarıl!" },
                { arabic: "اِعْتَصِمْ بِالسُّنَّةِ", translation: "Sünnəyə sarıl!" }
            ]}
        }
    },
{
        id: 314,
        arabic: "اِسْتَمْسِكْ بِالحَقِّ",
        meaning: "haqqa sarılmaq",
        forms: {
            past: { arabic: "اِسْتَمْسَكَ بِالحَقِّ", translation: "haqqa sarıldı", examples: [
                { arabic: "اِسْتَمْسَكَ بِالْحَقِّ", translation: "Haqqa sarıldı." },
                { arabic: "اِسْتَمْسَكَتْ بِالْعَقِيدَةِ", translation: "Əqidəyə sarıldı." }
            ]},
            present: { arabic: "يَسْتَمْسِكُ بِالحَقِّ", translation: "haqqa sarılır", examples: [
                { arabic: "يَسْتَمْسِكُ بِالحَقِّ", translation: "Haqqa sarılır." },
                { arabic: "يَسْتَمْسِكُ بِالكِتَابِ وَالسُّنَّةِ", translation: "Kitab və sünnəyə sarılır." }
            ]},
            imperative: { arabic: "اِسْتَمْسِكْ بِالحَقِّ", translation: "haqqa sarıl!", examples: [
                { arabic: "اِسْتَمْسِكْ بِالحَقِّ", translation: "Haqqa sarıl!" },
                { arabic: "اِسْتَمْسِكْ بِالكِتَابِ وَالسُّنَّةِ", translation: "Kitab və sünnəyə sarıl!" }
            ]}
        }
    },
{
        id: 315,
        arabic: "اِلْتَزِمْ بِالسُّنَّةِ",
        meaning: "sünnəyə bağlı qalmaq",
        forms: {
            past: { arabic: "اِلْتَزَمَ بِالسُّنَّةِ", translation: "sünnəyə bağlı qaldı", examples: [
                { arabic: "اِلْتَزَمَ بِالسُّنَّةِ", translation: "Sünnəyə bağlı qaldı." },
                { arabic: "اِلْتَزَمَتْ بِالهَدْيِ النَّبَوِيِّ", translation: "Peyğəmbər yoluna bağlı qaldı." }
            ]},
            present: { arabic: "يَلْتَزِمُ بِالسُّنَّةِ", translation: "sünnəyə bağlı qalır", examples: [
                { arabic: "يَلْتَزِمُ بِالسُّنَّةِ", translation: "Sünnəyə bağlı qalır." },
                { arabic: "يَلْتَزِمُ بِهَدْيِ النَّبِيِّ", translation: "Peyğəmbər yoluna bağlı qalır." }
            ]},
            imperative: { arabic: "اِلْتَزِمْ بِالسُّنَّةِ", translation: "sünnəyə bağlı qal!", examples: [
                { arabic: "اِلْتَزِمْ بِالسُّنَّةِ", translation: "Sünnəyə bağlı qal!" },
                { arabic: "اِلْتَزِمْ بِهَدْيِ النَّبِيِّ", translation: "Peyğəmbər yoluna bağlı qal!" }
            ]}
        }
    },
{
        id: 316,
        arabic: "اِتَّبَعَ",
        meaning: "tabe olmaq, izləmək",
        forms: {
            past: { arabic: "اِتَّبَعَ", translation: "tabe oldu", examples: [
                { arabic: "اِتَّبَعَ النَّبِيَّ", translation: "Peyğəmbərə tabe oldu." },
                { arabic: "اِتَّبَعَتِ السُّنَّةَ", translation: "Sünnəyə tabe oldu." }
            ]},
            present: { arabic: "يَتَّبِعُ", translation: "tabe olur", examples: [
                { arabic: "يَتَّبِعُ النَّبِيَّ", translation: "Peyğəmbərə tabe olur." },
                { arabic: "يَتَّبِعُ الحَقَّ", translation: "Haqqa tabe olur." }
            ]},
            imperative: { arabic: "اِتَّبِعْ", translation: "tabe ol!", examples: [
                { arabic: "اِتَّبِعِ النَّبِيَّ", translation: "Peyğəmbərə tabe ol!" },
                { arabic: "اِتَّبِعِ الحَقَّ", translation: "Haqqa tabe ol!" }
            ]}
        }
    },
{
        id: 317,
        arabic: "اِلْتَزَمَ بِالطَّاعَةِ",
        meaning: "itaətə bağlı qalmaq",
        forms: {
            past: { arabic: "اِلْتَزَمَ بِالطَّاعَةِ", translation: "itaətə bağlı qaldı", examples: [
                { arabic: "اِلْتَزَمَ بِطَاعَةِ اللَّهِ", translation: "Allaha itaətə bağlı qaldı." },
                { arabic: "اِلْتَزَمَتْ بِطَاعَةِ وَالِدَيْهَا", translation: "Valideynlərinə itaətə bağlı qaldı." }
            ]},
            present: { arabic: "يَلْتَزِمُ بِالطَّاعَةِ", translation: "itaətə bağlı qalır", examples: [
                { arabic: "يَلْتَزِمُ بِطَاعَةِ اللَّهِ", translation: "Allaha itaətə bağlı qalır." },
                { arabic: "يَلْتَزِمُ بِطَاعَةِ وَالِدَيْهِ", translation: "Valideynlərinə itaətə bağlı qalır." }
            ]},
            imperative: { arabic: "اِلْتَزِمْ بِالطَّاعَةِ", translation: "itaətə bağlı qal!", examples: [
                { arabic: "اِلْتَزِمْ بِطَاعَةِ اللَّهِ", translation: "Allaha itaətə bağlı qal!" },
                { arabic: "اِلْتَزِمْ بِطَاعَةِ وَالِدَيْكَ", translation: "Valideynlərinə itaətə bağlı qal!" }
            ]}
        }
    },
{
        id: 318,
        arabic: "اِنْقَادَ لِلْحَقِّ",
        meaning: "haqqa tabe olmaq",
        forms: {
            past: { arabic: "اِنْقَادَ لِلْحَقِّ", translation: "haqqa tabe oldu", examples: [
                { arabic: "اِنْقَادَ لِلْحَقِّ", translation: "Haqqa tabe oldu." },
                { arabic: "اِنْقَادَتْ لِأَمْرِ اللَّهِ", translation: "Allahın əmrinə tabe oldu." }
            ]},
            present: { arabic: "يَنْقَادُ لِلْحَقِّ", translation: "haqqa tabe olur", examples: [
                { arabic: "يَنْقَادُ لِلْحَقِّ", translation: "Haqqa tabe olur." },
                { arabic: "يَنْقَادُ لِأَمْرِ اللَّهِ", translation: "Allahın əmrinə tabe olur." }
            ]},
            imperative: { arabic: "اِنْقَدْ لِلْحَقِّ", translation: "haqqa tabe ol!", examples: [
                { arabic: "اِنْقَدْ لِلْحَقِّ", translation: "Haqqa tabe ol!" },
                { arabic: "اِنْقَدْ لِأَمْرِ اللَّهِ", translation: "Allahın əmrinə tabe ol!" }
            ]}
        }
    },
{
        id: 319,
        arabic: "خَضَعَ",
        meaning: "itaət etmək, boyun əymək",
        forms: {
            past: { arabic: "خَضَعَ", translation: "boyun əydi", examples: [
                { arabic: "خَضَعَ لِلَّهِ", translation: "Allaha boyun əydi." },
                { arabic: "خَضَعَتْ لِلْحَقِّ", translation: "Haqqa boyun əydi." }
            ]},
            present: { arabic: "يَخْضَعُ", translation: "boyun əyir", examples: [
                { arabic: "يَخْضَعُ لِلَّهِ", translation: "Allaha boyun əyir." },
                { arabic: "يَخْضَعُ لِلْحَقِّ", translation: "Haqqa boyun əyir." }
            ]},
            imperative: { arabic: "اِخْضَعْ", translation: "boyun əy!", examples: [
                { arabic: "اِخْضَعْ لِلَّهِ", translation: "Allaha boyun əy!" },
                { arabic: "اِخْضَعْ لِلْحَقِّ", translation: "Haqqa boyun əy!" }
            ]}
        }
    },
{
        id: 320,
        arabic: "اِسْتَسْلَمَ",
        meaning: "təslim olmaq",
        forms: {
            past: { arabic: "اِسْتَسْلَمَ", translation: "təslim oldu", examples: [
                { arabic: "اِسْتَسْلَمَ لِلَّهِ", translation: "Allaha təslim oldu." },
                { arabic: "اِسْتَسْلَمَتْ لِقَضَاءِ اللَّهِ", translation: "Allahın qəzasına təslim oldu." }
            ]},
            present: { arabic: "يَسْتَسْلِمُ", translation: "təslim olur", examples: [
                { arabic: "يَسْتَسْلِمُ لِلَّهِ", translation: "Allaha təslim olur." },
                { arabic: "يَسْتَسْلِمُ لِقَضَاءِ اللَّهِ", translation: "Allahın qəzasına təslim olur." }
            ]},
            imperative: { arabic: "اِسْتَسْلِمْ", translation: "təslim ol!", examples: [
                { arabic: "اِسْتَسْلِمْ لِلَّهِ", translation: "Allaha təslim ol!" },
                { arabic: "اِسْتَسْلِمْ لِقَضَاءِ اللَّهِ", translation: "Allahın qəzasına təslim ol!" }
            ]}
        }
    },
{
        id: 321,
        arabic: "رَضِيَ بِقَضَاءِ اللَّهِ",
        meaning: "Allahın qəzasına razı olmaq",
        forms: {
            past: { arabic: "رَضِيَ بِقَضَاءِ اللَّهِ", translation: "Allahın qəzasına razı oldu", examples: [
                { arabic: "رَضِيَ بِقَضَاءِ اللَّهِ", translation: "Allahın qəzasına razı oldu." },
                { arabic: "رَضِيَتْ بِمَا قَسَمَ اللَّهُ", translation: "Allahın bölüşdürdüyünə razı oldu." }
            ]},
            present: { arabic: "يَرْضَى بِقَضَاءِ اللَّهِ", translation: "Allahın qəzasına razı olur", examples: [
                { arabic: "يَرْضَى بِقَضَاءِ اللَّهِ", translation: "Allahın qəzasına razı olur." },
                { arabic: "يَرْضَى بِمَا قَسَمَ اللَّهُ", translation: "Allahın bölüşdürdüyünə razı olur." }
            ]},
            imperative: { arabic: "اِرْضَ بِقَضَاءِ اللَّهِ", translation: "Allahın qəzasına razı ol!", examples: [
                { arabic: "اِرْضَ بِقَضَاءِ اللَّهِ", translation: "Allahın qəzasına razı ol!" },
                { arabic: "اِرْضَ بِمَا قَسَمَ اللَّهُ", translation: "Allahın bölüşdürdüyünə razı ol!" }
            ]}
        }
    },
{
        id: 322,
        arabic: "صَبَرَ عَلَى البَلَاءِ",
        meaning: "bəlaya səbir etmək",
        forms: {
            past: { arabic: "صَبَرَ عَلَى البَلَاءِ", translation: "bəlaya səbir etdi", examples: [
                { arabic: "صَبَرَ عَلَى البَلَاءِ", translation: "Bəlaya səbir etdi." },
                { arabic: "صَبَرَتْ عَلَى المَرَضِ", translation: "Xəstəliyə səbir etdi." }
            ]},
            present: { arabic: "يَصْبِرُ عَلَى البَلَاءِ", translation: "bəlaya səbir edir", examples: [
                { arabic: "يَصْبِرُ عَلَى البَلَاءِ", translation: "Bəlaya səbir edir." },
                { arabic: "يَصْبِرُ عَلَى المَرَضِ", translation: "Xəstəliyə səbir edir." }
            ]},
            imperative: { arabic: "اِصْبِرْ عَلَى البَلَاءِ", translation: "bəlaya səbir et!", examples: [
                { arabic: "اِصْبِرْ عَلَى البَلَاءِ", translation: "Bəlaya səbir et!" },
                { arabic: "اِصْبِرْ عَلَى المَرَضِ", translation: "Xəstəliyə səbir et!" }
            ]}
        }
    },
{
        id: 323,
        arabic: "شَكَرَ اللَّهَ عَلَى نِعَمِهِ",
        meaning: "Allahın nemətlərinə şükr etmək",
        forms: {
            past: { arabic: "شَكَرَ اللَّهَ عَلَى نِعَمِهِ", translation: "Allahın nemətlərinə şükr etdi", examples: [
                { arabic: "شَكَرَ اللَّهَ عَلَى نِعَمِهِ", translation: "Allahın nemətlərinə şükr etdi." },
                { arabic: "شَكَرَتْ رَبَّهَا", translation: "Rəbbinə şükr etdi." }
            ]},
            present: { arabic: "يَشْكُرُ اللَّهَ عَلَى نِعَمِهِ", translation: "Allahın nemətlərinə şükr edir", examples: [
                { arabic: "يَشْكُرُ اللَّهَ عَلَى نِعَمِهِ", translation: "Allahın nemətlərinə şükr edir." },
                { arabic: "يَشْكُرُ اللَّهَ كَثِيرًا", translation: "Allaha çox şükr edir." }
            ]},
            imperative: { arabic: "اُشْكُرِ اللَّهَ عَلَى نِعَمِهِ", translation: "Allahın nemətlərinə şükr et!", examples: [
                { arabic: "اُشْكُرِ اللَّهَ عَلَى نِعَمِهِ", translation: "Allahın nemətlərinə şükr et!" },
                { arabic: "اُشْكُرِ اللَّهَ كَثِيرًا", translation: "Allaha çox şükr et!" }
            ]}
        }
    },
{
        id: 324,
        arabic: "اِسْتَرْجَعَ عِنْدَ المُصِيبَةِ",
        meaning: "müsibət zamanı istirca etmək",
        forms: {
            past: { arabic: "اِسْتَرْجَعَ عِنْدَ المُصِيبَةِ", translation: "müsibətdə istirca etdi", examples: [
                { arabic: "اِسْتَرْجَعَ عِنْدَ المُصِيبَةِ", translation: "Müsibət zamanı istirca etdi." },
                { arabic: "اِسْتَرْجَعَتْ لَمَّا سَمِعَتِ الخَبَرَ", translation: "Xəbəri eşidəndə istirca etdi." }
            ]},
            present: { arabic: "يَسْتَرْجِعُ عِنْدَ المُصِيبَةِ", translation: "müsibətdə istirca edir", examples: [
                { arabic: "يَسْتَرْجِعُ عِنْدَ المُصِيبَةِ", translation: "Müsibət zamanı istirca edir." },
                { arabic: "يَسْتَرْجِعُ فِي الشَّدَائِدِ", translation: "Çətinliklərdə istirca edir." }
            ]},
            imperative: { arabic: "اِسْتَرْجِعْ عِنْدَ المُصِيبَةِ", translation: "müsibətdə istirca et!", examples: [
                { arabic: "اِسْتَرْجِعْ عِنْدَ المُصِيبَةِ", translation: "Müsibət zamanı istirca et!" },
                { arabic: "اِسْتَرْجِعْ وَاصْبِرْ", translation: "İstirca et və səbir et!" }
            ]}
        }
    },
{
        id: 325,
        arabic: "عَزَّى فِي المُصِيبَةِ",
        meaning: "müsibətdə başsağlığı vermək",
        forms: {
            past: { arabic: "عَزَّى فِي المُصِيبَةِ", translation: "başsağlığı verdi", examples: [
                { arabic: "عَزَّى أَخَاهُ فِي مُصِيبَةٍ", translation: "Müsibətdə qardaşına başsağlığı verdi." },
                { arabic: "عَزَّتْ جَارَتَهَا", translation: "Qonşusuna başsağlığı verdi." }
            ]},
            present: { arabic: "يُعَزِّي فِي المُصِيبَةِ", translation: "başsağlığı verir", examples: [
                { arabic: "يُعَزِّي أَهْلَ المَيِّتِ", translation: "Ölənin ailəsinə başsağlığı verir." },
                { arabic: "يُعَزِّي فِي المُصِيبَاتِ", translation: "Müsibətlərdə başsağlığı verir." }
            ]},
            imperative: { arabic: "عَزِّ فِي المُصِيبَةِ", translation: "başsağlığı ver!", examples: [
                { arabic: "عَزِّ فِي المُصِيبَةِ", translation: "Müsibətdə başsağlığı ver!" },
                { arabic: "عَزِّ أَهْلَ المَيِّتِ", translation: "Ölənin ailəsinə başsağlığı ver!" }
            ]}
        }
    },
{
        id: 326,
        arabic: "عَادَ المَرِيضَ",
        meaning: "xəstəni ziyarət etmək",
        forms: {
            past: { arabic: "عَادَ المَرِيضَ", translation: "xəstəni ziyarət etdi", examples: [
                { arabic: "عَادَ المَرِيضَ", translation: "Xəstəni ziyarət etdi." },
                { arabic: "عَادَتْ جَارَهَا المَرِيضَ", translation: "Xəstə qonşusunu ziyarət etdi." }
            ]},
            present: { arabic: "يَعُودُ المَرِيضَ", translation: "xəstəni ziyarət edir", examples: [
                { arabic: "يَعُودُ المَرْضَى", translation: "Xəstələri ziyarət edir." },
                { arabic: "يَعُودُ أَخَاهُ المَرِيضَ", translation: "Xəstə qardaşını ziyarət edir." }
            ]},
            imperative: { arabic: "عُدِ المَرِيضَ", translation: "xəstəni ziyarət et!", examples: [
                { arabic: "عُدِ المَرِيضَ", translation: "Xəstəni ziyarət et!" },
                { arabic: "عُدْ أَخَاكَ المَرِيضَ", translation: "Xəstə qardaşını ziyarət et!" }
            ]}
        }
    },
{
        id: 327,
        arabic: "اِتَّعَظَ بِمَصَارِعِ الظَّالِمِينَ",
        meaning: "zalımların sonundan ibrət almaq",
        forms: {
            past: { arabic: "اِتَّعَظَ بِمَصَارِعِ الظَّالِمِينَ", translation: "zalımların sonundan ibrət aldı", examples: [
                { arabic: "اِتَّعَظَ بِمَصَارِعِ الظَّالِمِينَ", translation: "Zalımların sonundan ibrət aldı." },
                { arabic: "اِتَّعَظَتْ بِقِصَصِ القُرْآنِ", translation: "Quran qissələrindən ibrət aldı." }
            ]},
            present: { arabic: "يَتَّعِظُ بِمَصَارِعِ الظَّالِمِينَ", translation: "zalımların sonundan ibrət alır", examples: [
                { arabic: "يَتَّعِظُ بِمَصَارِعِ الظَّالِمِينَ", translation: "Zalımların sonundan ibrət alır." },
                { arabic: "يَتَّعِظُ بِقِصَصِ القُرْآنِ", translation: "Quran qissələrindən ibrət alır." }
            ]},
            imperative: { arabic: "اِتَّعِظْ بِمَصَارِعِ الظَّالِمِينَ", translation: "zalımların sonundan ibrət al!", examples: [
                { arabic: "اِتَّعِظْ بِمَصَارِعِ الظَّالِمِينَ", translation: "Zalımların sonundan ibrət al!" },
                { arabic: "اِتَّعِظْ بِقِصَصِ القُرْآنِ", translation: "Quran qissələrindən ibrət al!" }
            ]}
        }
    },
{
        id: 328,
        arabic: "تَفَكَّرَ فِي خَلْقِ اللَّهِ",
        meaning: "Allahın yaratdıqlarında təfəkkür etmək",
        forms: {
            past: { arabic: "تَفَكَّرَ فِي خَلْقِ اللَّهِ", translation: "Allahın yaratdıqlarında təfəkkür etdi", examples: [
                { arabic: "تَفَكَّرَ فِي خَلْقِ اللَّهِ", translation: "Allahın yaratdıqlarında təfəkkür etdi." },
                { arabic: "تَفَكَّرَتْ فِي آيَاتِ اللَّهِ", translation: "Allahın ayələrində təfəkkür etdi." }
            ]},
            present: { arabic: "يَتَفَكَّرُ فِي خَلْقِ اللَّهِ", translation: "Allahın yaratdıqlarında təfəkkür edir", examples: [
                { arabic: "يَتَفَكَّرُ فِي خَلْقِ اللَّهِ", translation: "Allahın yaratdıqlarında təfəkkür edir." },
                { arabic: "يَتَفَكَّرُ فِي آيَاتِ اللَّهِ", translation: "Allahın ayələrində təfəkkür edir." }
            ]},
            imperative: { arabic: "تَفَكَّرْ فِي خَلْقِ اللَّهِ", translation: "Allahın yaratdıqlarında təfəkkür et!", examples: [
                { arabic: "تَفَكَّرْ فِي خَلْقِ اللَّهِ", translation: "Allahın yaratdıqlarında təfəkkür et!" },
                { arabic: "تَفَكَّرْ فِي آيَاتِ اللَّهِ", translation: "Allahın ayələrində təfəkkür et!" }
            ]}
        }
    },
{
        id: 329,
        arabic: "تَأَمَّلَ فِي القُرْآنِ",
        meaning: "Quranda təfəkkür etmək",
        forms: {
            past: { arabic: "تَأَمَّلَ فِي القُرْآنِ", translation: "Quranda təfəkkür etdi", examples: [
                { arabic: "تَأَمَّلَ فِي القُرْآنِ", translation: "Quranda təfəkkür etdi." },
                { arabic: "تَأَمَّلَتْ فِي آيَاتِ القُرْآنِ", translation: "Quran ayələrində təfəkkür etdi." }
            ]},
            present: { arabic: "يَتَأَمَّلُ فِي القُرْآنِ", translation: "Quranda təfəkkür edir", examples: [
                { arabic: "يَتَأَمَّلُ فِي القُرْآنِ", translation: "Quranda təfəkkür edir." },
                { arabic: "يَتَأَمَّلُ فِي آيَاتِ القُرْآنِ", translation: "Quran ayələrində təfəkkür edir." }
            ]},
            imperative: { arabic: "تَأَمَّلْ فِي القُرْآنِ", translation: "Quranda təfəkkür et!", examples: [
                { arabic: "تَأَمَّلْ فِي القُرْآنِ", translation: "Quranda təfəkkür et!" },
                { arabic: "تَأَمَّلْ فِي آيَاتِ القُرْآنِ", translation: "Quran ayələrində təfəkkür et!" }
            ]}
        }
    },
{
        id: 330,
        arabic: "اِسْتَفَادَ مِنَ العِلْمِ",
        meaning: "elmdən faydalanmaq",
        forms: {
            past: { arabic: "اِسْتَفَادَ مِنَ العِلْمِ", translation: "elmdən faydalandı", examples: [
                { arabic: "اِسْتَفَادَ مِنَ العِلْمِ", translation: "Elmdən faydalandı." },
                { arabic: "اِسْتَفَادَتْ مِنَ الدَّرْسِ", translation: "Dərsdən faydalandı." }
            ]},
            present: { arabic: "يَسْتَفِيدُ مِنَ العِلْمِ", translation: "elmdən faydalanır", examples: [
                { arabic: "يَسْتَفِيدُ مِنَ العِلْمِ", translation: "Elmdən faydalanır." },
                { arabic: "يَسْتَفِيدُ مِنَ التَّجْرِبَةِ", translation: "Təcrübədən faydalanır." }
            ]},
            imperative: { arabic: "اِسْتَفِدْ مِنَ العِلْمِ", translation: "elmdən faydalan!", examples: [
                { arabic: "اِسْتَفِدْ مِنَ العِلْمِ", translation: "Elmdən faydalan!" },
                { arabic: "اِسْتَفِدْ مِنْ وَقْتِكَ", translation: "Vaxtından faydalan!" }
            ]}
        }
    },
{
        id: 331,
        arabic: "أَفَادَ غَيْرَهُ",
        meaning: "başqasına fayda vermək",
        forms: {
            past: { arabic: "أَفَادَ غَيْرَهُ", translation: "başqasına fayda verdi", examples: [
                { arabic: "أَفَادَ غَيْرَهُ بِالعِلْمِ", translation: "Elmi ilə başqasına fayda verdi." },
                { arabic: "أَفَادَتْ بِالنَّصِيحَةِ", translation: "Nəsihətlə fayda verdi." }
            ]},
            present: { arabic: "يُفِيدُ غَيْرَهُ", translation: "başqasına fayda verir", examples: [
                { arabic: "يُفِيدُ غَيْرَهُ بِالعِلْمِ", translation: "Elmi ilə başqasına fayda verir." },
                { arabic: "يُفِيدُ فِي الحَيَاةِ", translation: "Həyatda fayda verir." }
            ]},
            imperative: { arabic: "أَفِدْ غَيْرَكَ", translation: "başqasına fayda ver!", examples: [
                { arabic: "أَفِدْ غَيْرَكَ", translation: "Başqasına fayda ver!" },
                { arabic: "أَفِدْ بِمَا تَعْلَمُ", translation: "Bildiyinlə fayda ver!" }
            ]}
        }
    },
{
        id: 332,
        arabic: "اِسْتَفْسَرَ عَنِ الحُكْمِ",
        meaning: "hökm barədə soruşmaq",
        forms: {
            past: { arabic: "اِسْتَفْسَرَ عَنِ الحُكْمِ", translation: "hökm barədə soruşdu", examples: [
                { arabic: "اِسْتَفْسَرَ عَنْ حُكْمِ المَسْأَلَةِ", translation: "Məsələnin hökmünü soruşdu." },
                { arabic: "اِسْتَفْسَرَتْ عَنِ الحُكْمِ الشَّرْعِيِّ", translation: "Şəri hökm barədə soruşdu." }
            ]},
            present: { arabic: "يَسْتَفْسِرُ عَنِ الحُكْمِ", translation: "hökm barədə soruşur", examples: [
                { arabic: "يَسْتَفْسِرُ عَنِ الأَحْكَامِ", translation: "Hökmələr barədə soruşur." },
                { arabic: "يَسْتَفْسِرُ عَنِ المَسَائِلِ الشَّرْعِيَّةِ", translation: "Şəri məsələlər barədə soruşur." }
            ]},
            imperative: { arabic: "اِسْتَفْسِرْ عَنِ الحُكْمِ", translation: "hökm barədə soruş!", examples: [
                { arabic: "اِسْتَفْسِرْ عَمَّا لَا تَفْهَمُ", translation: "Anlamadığın barədə soruş!" },
                { arabic: "اِسْتَفْسِرْ عَنِ الحُكْمِ الشَّرْعِيِّ", translation: "Şəri hökm barədə soruş!" }
            ]}
        }
    },
{
        id: 333,
        arabic: "اِجْتَهَدَ فِي العِبَادَةِ",
        meaning: "ibadətdə səy göstərmək",
        forms: {
            past: { arabic: "اِجْتَهَدَ فِي العِبَادَةِ", translation: "ibadətdə səy göstərdi", examples: [
                { arabic: "اِجْتَهَدَ فِي الصَّلَاةِ وَالصِّيَامِ", translation: "Namaz və orucda səy göstərdi." },
                { arabic: "اِجْتَهَدَتْ فِي الطَّاعَةِ", translation: "İtaətdə səy göstərdi." }
            ]},
            present: { arabic: "يَجْتَهِدُ فِي العِبَادَةِ", translation: "ibadətdə səy göstərir", examples: [
                { arabic: "يَجْتَهِدُ فِي العِبَادَةِ", translation: "İbadətdə səy göstərir." },
                { arabic: "يَجْتَهِدُ فِي الطَّاعَةِ", translation: "İtaətdə səy göstərir." }
            ]},
            imperative: { arabic: "اِجْتَهِدْ فِي العِبَادَةِ", translation: "ibadətdə səy göstər!", examples: [
                { arabic: "اِجْتَهِدْ فِي الصَّلَاةِ وَالصِّيَامِ", translation: "Namaz və orucda səy göstər!" },
                { arabic: "اِجْتَهِدْ فِي الطَّاعَةِ", translation: "İtaətdə səy göstər!" }
            ]}
        }
    },
{
        id: 334,
        arabic: "اِسْتَمَرَّ فِي الطَّاعَةِ",
        meaning: "itaətdə davamlı olmaq",
        forms: {
            past: { arabic: "اِسْتَمَرَّ فِي الطَّاعَةِ", translation: "itaətdə davam etdi", examples: [
                { arabic: "اِسْتَمَرَّ فِي الصَّلَاةِ", translation: "Namaza davam etdi." },
                { arabic: "اِسْتَمَرَّ فِي الذِّكْرِ", translation: "Zikrə davam etdi." }
            ]},
            present: { arabic: "يَسْتَمِرُّ فِي الطَّاعَةِ", translation: "itaətdə davam edir", examples: [
                { arabic: "يَسْتَمِرُّ فِي الصَّلَاةِ", translation: "Namaza davam edir." },
                { arabic: "يَسْتَمِرُّ فِي الذِّكْرِ", translation: "Zikrə davam edir." }
            ]},
            imperative: { arabic: "اِسْتَمِرَّ فِي الطَّاعَةِ", translation: "itaətdə davam et!", examples: [
                { arabic: "اِسْتَمِرَّ فِي الصَّلَاةِ", translation: "Namaza davam et!" },
                { arabic: "اِسْتَمِرَّ فِي الذِّكْرِ", translation: "Zikrə davam et!" }
            ]}
        }
    },
{
        id: 335,
        arabic: "اِنْقَطَعَ عَنِ المَعْصِيَةِ",
        meaning: "günahdan çəkinmək",
        forms: {
            past: { arabic: "اِنْقَطَعَ عَنِ المَعْصِيَةِ", translation: "günahdan çəkindi", examples: [
                { arabic: "اِنْقَطَعَ عَنِ الكَذِبِ", translation: "Yalandan çəkindi." },
                { arabic: "اِنْقَطَعَتْ عَنِ الغِيبَةِ", translation: "Qeybətdən çəkindi." }
            ]},
            present: { arabic: "يَنْقَطِعُ عَنِ المَعْصِيَةِ", translation: "günahdan çəkinir", examples: [
                { arabic: "يَنْقَطِعُ عَنِ الرِّيَاءِ", translation: "Riyadan çəkinir." },
                { arabic: "يَنْقَطِعُ عَنِ المَعَاصِي", translation: "Günahlardan çəkinir." }
            ]},
            imperative: { arabic: "اِنْقَطِعْ عَنِ المَعْصِيَةِ", translation: "günahdan çəkin!", examples: [
                { arabic: "اِنْقَطِعْ عَنِ الكَذِبِ", translation: "Yalandan çəkin!" },
                { arabic: "اِنْقَطِعْ عَنِ الغِيبَةِ", translation: "Qeybətdən çəkin!" }
            ]}
        }
    },
{
        id: 336,
        arabic: "اِلْتَزَمَ بِالطَّاعَةِ",
        meaning: "itaətə bağlı qalmaq",
        forms: {
            past: { arabic: "اِلْتَزَمَ بِالطَّاعَةِ", translation: "itaətə bağlı qaldı", examples: [
                { arabic: "اِلْتَزَمَ بِطَاعَةِ اللَّهِ", translation: "Allaha itaətə bağlı qaldı." },
                { arabic: "اِلْتَزَمَتْ بِطَاعَةِ وَالِدَيْهَا", translation: "Valideynlərinə itaətə bağlı qaldı." }
            ]},
            present: { arabic: "يَلْتَزِمُ بِالطَّاعَةِ", translation: "itaətə bağlı qalır", examples: [
                { arabic: "يَلْتَزِمُ بِطَاعَةِ اللَّهِ", translation: "Allaha itaətə bağlı qalır." },
                { arabic: "يَلْتَزِمُ بِطَاعَةِ وَالِدَيْهِ", translation: "Valideynlərinə itaətə bağlı qalır." }
            ]},
            imperative: { arabic: "اِلْتَزِمْ بِالطَّاعَةِ", translation: "itaətə bağlı qal!", examples: [
                { arabic: "اِلْتَزِمْ بِطَاعَةِ اللَّهِ", translation: "Allaha itaətə bağlı qal!" },
                { arabic: "اِلْتَزِمْ بِطَاعَةِ وَالِدَيْكَ", translation: "Valideynlərinə itaətə bağlı qal!" }
            ]}
        }
    },
{
        id: 337,
        arabic: "اِسْتَمْسَكَ بِالعَقِيدَةِ",
        meaning: "əqidəyə sarılmaq",
        forms: {
            past: { arabic: "اِسْتَمْسَكَ بِالعَقِيدَةِ", translation: "əqidəyə sarıldı", examples: [
                { arabic: "اِسْتَمْسَكَ بِالعَقِيدَةِ", translation: "Əqidəyə sarıldı." },
                { arabic: "اِسْتَمْسَكَتْ بِالعَقِيدَةِ الصَّحِيحَةِ", translation: "Doğru əqidəyə sarıldı." }
            ]},
            present: { arabic: "يَسْتَمْسِكُ بِالعَقِيدَةِ", translation: "əqidəyə sarılır", examples: [
                { arabic: "يَسْتَمْسِكُ بِالعَقِيدَةِ", translation: "Əqidəyə sarılır." },
                { arabic: "يَسْتَمْسِكُ بِالعَقِيدَةِ الصَّحِيحَةِ", translation: "Doğru əqidəyə sarılır." }
            ]},
            imperative: { arabic: "اِسْتَمْسِكْ بِالعَقِيدَةِ", translation: "əqidəyə sarıl!", examples: [
                { arabic: "اِسْتَمْسِكْ بِالعَقِيدَةِ", translation: "Əqidəyə sarıl!" },
                { arabic: "اِسْتَمْسِكْ بِالعَقِيدَةِ الصَّحِيحَةِ", translation: "Doğru əqidəyə sarıl!" }
            ]}
        }
    },
{
        id: 338,
        arabic: "اِتَّبَعَ السُّنَّةَ",
        meaning: "sünnəyə tabe olmaq",
        forms: {
            past: { arabic: "اِتَّبَعَ السُّنَّةَ", translation: "sünnəyə tabe oldu", examples: [
                { arabic: "اِتَّبَعَ السُّنَّةَ", translation: "Sünnəyə tabe oldu." },
                { arabic: "اِتَّبَعَتِ الهَدْيَ النَّبَوِيَّ", translation: "Peyğəmbər yoluna tabe oldu." }
            ]},
            present: { arabic: "يَتَّبِعُ السُّنَّةَ", translation: "sünnəyə tabe olur", examples: [
                { arabic: "يَتَّبِعُ السُّنَّةَ", translation: "Sünnəyə tabe olur." },
                { arabic: "يَتَّبِعُ هَدْيَ النَّبِيِّ", translation: "Peyğəmbər yoluna tabe olur." }
            ]},
            imperative: { arabic: "اِتَّبِعِ السُّنَّةَ", translation: "sünnəyə tabe ol!", examples: [
                { arabic: "اِتَّبِعِ السُّنَّةَ", translation: "Sünnəyə tabe ol!" },
                { arabic: "اِتَّبِعْ هَدْيَ النَّبِيِّ", translation: "Peyğəmbər yoluna tabe ol!" }
            ]}
        }
    },
{
        id: 339,
        arabic: "اِسْتَقَامَ عَلَى الحَقِّ",
        meaning: "haqq üzərində sabit qalmaq",
        forms: {
            past: { arabic: "اِسْتَقَامَ عَلَى الحَقِّ", translation: "haqqda sabit qaldı", examples: [
                { arabic: "اِسْتَقَامَ عَلَى الإِسْلَامِ", translation: "İslamda sabit qaldı." },
                { arabic: "اِسْتَقَامَتْ عَلَى الصَّلَاةِ", translation: "Namazda sabit qaldı." }
            ]},
            present: { arabic: "يَسْتَقِيمُ عَلَى الحَقِّ", translation: "haqqda sabit qalır", examples: [
                { arabic: "يَسْتَقِيمُ عَلَى أَمْرِ اللَّهِ", translation: "Allahın əmrində sabit qalır." },
                { arabic: "يَسْتَقِيمُ فِي طَرِيقِ الهُدَى", translation: "Hidayət yolunda sabit qalır." }
            ]},
            imperative: { arabic: "اِسْتَقِمْ عَلَى الحَقِّ", translation: "haqqda sabit qal!", examples: [
                { arabic: "اِسْتَقِمْ عَلَى الصَّلَاةِ", translation: "Namazda sabit qal!" },
                { arabic: "اِسْتَقِمْ عَلَى الإِسْلَامِ", translation: "İslamda sabit qal!" }
            ]}
        }
    },
{
        id: 340,
        arabic: "اِخْتَارَ مَا يُرْضِي اللَّهَ",
        meaning: "Allahı razı salanı seçmək",
        forms: {
            past: { arabic: "اِخْتَارَ مَا يُرْضِي اللَّهَ", translation: "Allahı razı salanı seçdi", examples: [
                { arabic: "اِخْتَارَ مَا يُرْضِي اللَّهَ", translation: "Allahı razı salanı seçdi." },
                { arabic: "اِخْتَارَتِ الخَيْرَ", translation: "Xeyiri seçdi." }
            ]},
            present: { arabic: "يَخْتَارُ مَا يُرْضِي اللَّهَ", translation: "Allahı razı salanı seçir", examples: [
                { arabic: "يَخْتَارُ مَا يُرْضِي اللَّهَ", translation: "Allahı razı salanı seçir." },
                { arabic: "يَخْتَارُ الخَيْرَ", translation: "Xeyiri seçir." }
            ]},
            imperative: { arabic: "اِخْتَرْ مَا يُرْضِي اللَّهَ", translation: "Allahı razı salanı seç!", examples: [
                { arabic: "اِخْتَرْ مَا يُرْضِي اللَّهَ", translation: "Allahı razı salanı seç!" },
                { arabic: "اِخْتَرِ الخَيْرَ", translation: "Xeyiri seç!" }
            ]}
        }
    },
{
        id: 341,
        arabic: "اِجْتَنَبَ الشُّبُهَاتِ",
        meaning: "şübhəli şeylərdən uzaq durmaq",
        forms: {
            past: { arabic: "اِجْتَنَبَ الشُّبُهَاتِ", translation: "şübhəli şeylərdən uzaq durdu", examples: [
                { arabic: "اِجْتَنَبَ الشُّبُهَاتِ", translation: "Şübhəli şeylərdən uzaq durdu." },
                { arabic: "اِجْتَنَبَتْ مَا يَرِيبُهَا", translation: "Onu şübhəyə salan şeylərdən uzaq durdu." }
            ]},
            present: { arabic: "يَجْتَنِبُ الشُّبُهَاتِ", translation: "şübhəli şeylərdən uzaq durur", examples: [
                { arabic: "يَجْتَنِبُ الشُّبُهَاتِ", translation: "Şübhəli şeylərdən uzaq durur." },
                { arabic: "يَجْتَنِبُ مَا يَرِيبُهُ", translation: "Onu şübhəyə salan şeylərdən uzaq durur." }
            ]},
            imperative: { arabic: "اِجْتَنِبِ الشُّبُهَاتِ", translation: "şübhəli şeylərdən uzaq dur!", examples: [
                { arabic: "اِجْتَنِبِ الشُّبُهَاتِ", translation: "Şübhəli şeylərdən uzaq dur!" },
                { arabic: "اِجْتَنِبْ مَا يَرِيبُكَ", translation: "Səni şübhəyə salan şeydən uzaq dur!" }
            ]}
        }
    },
{
        id: 342,
        arabic: "اِلْتَزَمَ بِآدَابِ الإِسْلَامِ",
        meaning: "İslam ədəblərinə riayət etmək",
        forms: {
            past: { arabic: "اِلْتَزَمَ بِآدَابِ الإِسْلَامِ", translation: "İslam ədəblərinə riayət etdi", examples: [
                { arabic: "اِلْتَزَمَ بِآدَابِ الإِسْلَامِ", translation: "İslam ədəblərinə riayət etdi." },
                { arabic: "اِلْتَزَمَتْ بِآدَابِ الحَدِيثِ", translation: "Danışıq ədəblərinə riayət etdi." }
            ]},
            present: { arabic: "يَلْتَزِمُ بِآدَابِ الإِسْلَامِ", translation: "İslam ədəblərinə riayət edir", examples: [
                { arabic: "يَلْتَزِمُ بِآدَابِ الإِسْلَامِ", translation: "İslam ədəblərinə riayət edir." },
                { arabic: "يَلْتَزِمُ بِآدَابِ المَسْجِدِ", translation: "Məscid ədəblərinə riayət edir." }
            ]},
            imperative: { arabic: "اِلْتَزِمْ بِآدَابِ الإِسْلَامِ", translation: "İslam ədəblərinə riayət et!", examples: [
                { arabic: "اِلْتَزِمْ بِآدَابِ الإِسْلَامِ", translation: "İslam ədəblərinə riayət et!" },
                { arabic: "اِلْتَزِمْ بِآدَابِ الطَّعَامِ", translation: "Yemək ədəblərinə riayət et!" }
            ]}
        }
    },
{
        id: 343,
        arabic: "اِسْتَأْذَنَ قَبْلَ الدُّخُولِ",
        meaning: "girməzdən əvvəl icazə istəmək",
        forms: {
            past: { arabic: "اِسْتَأْذَنَ قَبْلَ الدُّخُولِ", translation: "girməzdən əvvəl icazə istədi", examples: [
                { arabic: "اِسْتَأْذَنَ قَبْلَ الدُّخُولِ", translation: "Girməzdən əvvəl icazə istədi." },
                { arabic: "اِسْتَأْذَنَتْ فِي الدُّخُولِ", translation: "Girmək üçün icazə istədi." }
            ]},
            present: { arabic: "يَسْتَأْذِنُ قَبْلَ الدُّخُولِ", translation: "girməzdən əvvəl icazə istəyir", examples: [
                { arabic: "يَسْتَأْذِنُ قَبْلَ الدُّخُولِ", translation: "Girməzdən əvvəl icazə istəyir." },
                { arabic: "يَسْتَأْذِنُ لِلدُّخُولِ إِلَى الغُرْفَةِ", translation: "Otağa girmək üçün icazə istəyir." }
            ]},
            imperative: { arabic: "اِسْتَأْذِنْ قَبْلَ الدُّخُولِ", translation: "girməzdən əvvəl icazə istə!", examples: [
                { arabic: "اِسْتَأْذِنْ قَبْلَ الدُّخُولِ", translation: "Girməzdən əvvəl icazə istə!" },
                { arabic: "اِسْتَأْذِنْ لِلدُّخُولِ إِلَى البَيْتِ", translation: "Evə girmək üçün icazə istə!" }
            ]}
        }
    },
{
        id: 344,
        arabic: "اِسْتَقْبَلَ الضَّيْفَ",
        meaning: "qonağı qarşılamaq",
        forms: {
            past: { arabic: "اِسْتَقْبَلَ الضَّيْفَ", translation: "qonağı qarşıladı", examples: [
                { arabic: "اِسْتَقْبَلَ ضَيْفَهُ بِالوُدِّ", translation: "Qonağını mehribanlıqla qarşıladı." },
                { arabic: "اِسْتَقْبَلَتِ الضَّيْفَ بِالإِكْرَامِ", translation: "Qonağı hörmətlə qarşıladı." }
            ]},
            present: { arabic: "يَسْتَقْبِلُ الضَّيْفَ", translation: "qonağı qarşılayır", examples: [
                { arabic: "يَسْتَقْبِلُ الضُّيُوفَ بِالكَرَمِ", translation: "Qonaqları kəramətlə qarşılayır." },
                { arabic: "يَسْتَقْبِلُ الضَّيْفَ بِالابتِسَامَةِ", translation: "Qonağı gülərüzlə qarşılayır." }
            ]},
            imperative: { arabic: "اِسْتَقْبِلِ الضَّيْفَ", translation: "qonağı qarşıla!", examples: [
                { arabic: "اِسْتَقْبِلْ ضَيْفَكَ بِالكَرَمِ", translation: "Qonağını kəramətlə qarşıla!" },
                { arabic: "اِسْتَقْبِلْ ضَيْفَكَ بِالبَسْمَةِ", translation: "Qonağını gülərüzlə qarşıla!" }
            ]}
        }
    },
{
        id: 345,
        arabic: "أَكْرَمَ الضَّيْفَ",
        meaning: "qonağa ikram etmək",
        forms: {
            past: { arabic: "أَكْرَمَ الضَّيْفَ", translation: "qonağa ikram etdi", examples: [
                { arabic: "أَكْرَمَ ضَيْفَهُ بِالطَّعَامِ", translation: "Qonağına yemək ikram etdi." },
                { arabic: "أَكْرَمَتِ الضَّيْفَ بِالشَّرَابِ", translation: "Qonağa içki ikram etdi." }
            ]},
            present: { arabic: "يُكْرِمُ الضَّيْفَ", translation: "qonağa ikram edir", examples: [
                { arabic: "يُكْرِمُ الضُّيُوفَ", translation: "Qonaqlara ikram edir." },
                { arabic: "يُكْرِمُ الضَّيْفَ بِمَا تَيَسَّرَ", translation: "Qonağa asan olanı ikram edir." }
            ]},
            imperative: { arabic: "أَكْرِمِ الضَّيْفَ", translation: "qonağa ikram et!", examples: [
                { arabic: "أَكْرِمْ ضَيْفَكَ", translation: "Qonağına ikram et!" },
                { arabic: "أَكْرِمْ ضَيْفَكَ بِمَا عِنْدَكَ", translation: "Qonağına əlində olanla ikram et!" }
            ]}
        }
    },
{
        id: 346,
        arabic: "اِسْتَقَرَّ فِي المَكَانِ",
        meaning: "yerləşmək, sabit olmaq",
        forms: {
            past: { arabic: "اِسْتَقَرَّ فِي المَكَانِ", translation: "yerləşdi", examples: [
                { arabic: "اِسْتَقَرَّ فِي بَيْتٍ جَدِيدٍ", translation: "Yeni evdə yerləşdi." },
                { arabic: "اِسْتَقَرَّتِ النَّفْسُ", translation: "Ruh sakitləşdi." }
            ]},
            present: { arabic: "يَسْتَقِرُّ فِي المَكَانِ", translation: "yerləşir", examples: [
                { arabic: "يَسْتَقِرُّ فِي مَكَانِهِ", translation: "Yerində sabit olur." },
                { arabic: "يَسْتَقِرُّ بَعْدَ السَّفَرِ", translation: "Səfərdən sonra yerləşir." }
            ]},
            imperative: { arabic: "اِسْتَقِرَّ فِي المَكَانِ", translation: "yerləş!", examples: [
                { arabic: "اِسْتَقِرَّ فِي مَكَانِكَ", translation: "Yerində sabit ol!" },
                { arabic: "اِسْتَقِرَّ وَلَا تَتَحَرَّكْ", translation: "Sabit ol və tərpənmə!" }
            ]}
        }
    },
{
        id: 347,
        arabic: "اِسْتَعَدَّ لِلصَّلَاةِ",
        meaning: "namaza hazırlaşmaq",
        forms: {
            past: { arabic: "اِسْتَعَدَّ لِلصَّلَاةِ", translation: "namaza hazırlaşdı", examples: [
                { arabic: "اِسْتَعَدَّ لِلصَّلَاةِ", translation: "Namaza hazırlaşdı." },
                { arabic: "اِسْتَعَدَّتْ لِلِامْتِحَانِ", translation: "İmtahana hazırlaşdı." }
            ]},
            present: { arabic: "يَسْتَعِدُّ لِلصَّلَاةِ", translation: "namaza hazırlaşır", examples: [
                { arabic: "يَسْتَعِدُّ لِلصَّلَاةِ", translation: "Namaza hazırlaşır." },
                { arabic: "يَسْتَعِدُّ لِشَهْرِ رَمَضَانَ", translation: "Ramazan ayına hazırlaşır." }
            ]},
            imperative: { arabic: "اِسْتَعِدَّ لِلصَّلَاةِ", translation: "namaza hazırlaş!", examples: [
                { arabic: "اِسْتَعِدَّ لِلصَّلَاةِ", translation: "Namaza hazırlaş!" },
                { arabic: "اِسْتَعِدَّ لِلِامْتِحَانِ", translation: "İmtahana hazırlaş!" }
            ]}
        }
    },
{
        id: 348,
        arabic: "اِسْتَرَاحَ بَعْدَ العَمَلِ",
        meaning: "işdən sonra istirahət etmək",
        forms: {
            past: { arabic: "اِسْتَرَاحَ بَعْدَ العَمَلِ", translation: "işdən sonra istirahət etdi", examples: [
                { arabic: "اِسْتَرَاحَ بَعْدَ العَمَلِ", translation: "İşdən sonra istirahət etdi." },
                { arabic: "اِسْتَرَاحَتْ فِي الظِّلِّ", translation: "Kölgədə istirahət etdi." }
            ]},
            present: { arabic: "يَسْتَرِيحُ بَعْدَ العَمَلِ", translation: "işdən sonra istirahət edir", examples: [
                { arabic: "يَسْتَرِيحُ بَعْدَ العَمَلِ", translation: "İşdən sonra istirahət edir." },
                { arabic: "يَسْتَرِيحُ فِي وَقْتِ القَيْلُولَةِ", translation: "Qeylule vaxtı istirahət edir." }
            ]},
            imperative: { arabic: "اِسْتَرِحْ بَعْدَ العَمَلِ", translation: "işdən sonra istirahət et!", examples: [
                { arabic: "اِسْتَرِحْ بَعْدَ العَمَلِ", translation: "İşdən sonra istirahət et!" },
                { arabic: "اِسْتَرِحْ قَلِيلًا", translation: "Bir az istirahət et!" }
            ]}
        }
    },
{
        id: 349,
        arabic: "تَرَوَّى فِي الأَمْرِ",
        meaning: "işdə tələsməmək, düşünmək",
        forms: {
            past: { arabic: "تَرَوَّى فِي الأَمْرِ", translation: "işdə düşündü", examples: [
                { arabic: "تَرَوَّى فِي الأَمْرِ", translation: "İşdə düşündü." },
                { arabic: "تَرَوَّتْ قَبْلَ الإِجَابَةِ", translation: "Cavab verməzdən əvvəl düşündü." }
            ]},
            present: { arabic: "يَتَرَوَّى فِي الأَمْرِ", translation: "işdə düşünür", examples: [
                { arabic: "يَتَرَوَّى فِي قَرَارَاتِهِ", translation: "Qərarlarında düşünür." },
                { arabic: "يَتَرَوَّى فِي الكَلَامِ", translation: "Danışıqda tələsmir." }
            ]},
            imperative: { arabic: "تَرَوَّ فِي الأَمْرِ", translation: "işdə düşün!", examples: [
                { arabic: "تَرَوَّ قَبْلَ أَنْ تَتَكَلَّمَ", translation: "Danışmazdan əvvəl düşün!" },
                { arabic: "تَرَوَّ فِي أُمُورِكَ", translation: "İşlərində düşün!" }
            ]}
        }
    },
{
        id: 350,
        arabic: "تَأَمَّلَ فِي خَلْقِ اللَّهِ",
        meaning: "Allahın yaratdıqlarında təfəkkür etmək",
        forms: {
            past: { arabic: "تَأَمَّلَ فِي خَلْقِ اللَّهِ", translation: "Allahın yaratdıqlarında təfəkkür etdi", examples: [
                { arabic: "تَأَمَّلَ فِي خَلْقِ اللَّهِ", translation: "Allahın yaratdıqlarında təfəkkür etdi." },
                { arabic: "تَأَمَّلَتْ فِي آيَاتِ اللَّهِ", translation: "Allahın ayələrində təfəkkür etdi." }
            ]},
            present: { arabic: "يَتَأَمَّلُ فِي خَلْقِ اللَّهِ", translation: "Allahın yaratdıqlarında təfəkkür edir", examples: [
                { arabic: "يَتَأَمَّلُ فِي خَلْقِ اللَّهِ", translation: "Allahın yaratdıqlarında təfəkkür edir." },
                { arabic: "يَتَأَمَّلُ فِي آيَاتِ اللَّهِ", translation: "Allahın ayələrində təfəkkür edir." }
            ]},
            imperative: { arabic: "تَأَمَّلْ فِي خَلْقِ اللَّهِ", translation: "Allahın yaratdıqlarında təfəkkür et!", examples: [
                { arabic: "تَأَمَّلْ فِي خَلْقِ اللَّهِ", translation: "Allahın yaratdıqlarında təfəkkür et!" },
                { arabic: "تَأَمَّلْ فِي آيَاتِ اللَّهِ", translation: "Allahın ayələrində təfəkkür et!" }
            ]}
        }
    }
];

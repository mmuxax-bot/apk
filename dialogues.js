// dialogues.js — Hissə 1 (ID: 1 – 50)
// Mövzu: Gündəlik Sadə Dialoqlar (Salamlaşma, Tanışlıq, Ailə, Məktəb, Restoran və s.)

const dialoguesData = [
    {
        id: 1,
        title: "Salamlaşma",
        dialogue: [
            { arabic: "السَّلَامُ عَلَيْكُمْ", translation: "Salam əleyküm" },
            { arabic: "وَعَلَيْكُمُ السَّلَامُ", translation: "Əleyküm salam" },
            { arabic: "صَبَاحُ الْخَيْرِ", translation: "Sabahınız xeyir" },
            { arabic: "صَبَاحُ النُّورِ", translation: "Sabahınız xeyir (nurlu sabahlar)" },
            { arabic: "كَيْفَ حَالُكَ؟", translation: "Necəsən?" },
            { arabic: "أَنَا بِخَيْرٍ، وَالْحَمْدُ لِلَّهِ", translation: "Mən yaxşıyam, Allaha həmd olsun" },
            { arabic: "وَكَيْفَ حَالُكَ أَنْتَ؟", translation: "Bəs sən necəsən?" },
            { arabic: "أَنَا بِخَيْرٍ أَيْضًا", translation: "Mən də yaxşıyam" }
        ]
    },
    {
        id: 2,
        title: "Tanışlıq",
        dialogue: [
            { arabic: "مَا اسْمُكَ؟", translation: "Adın nədir?" },
            { arabic: "اِسْمِي أَحْمَدُ", translation: "Mənim adım Əhməddir" },
            { arabic: "وَما اسْمُكَ أَنْتَ؟", translation: "Bəs senin adın nədir?" },
            { arabic: "اِسْمِي عُمَرُ", translation: "Mənim adım Ömərdir" },
            { arabic: "مِنْ أَيْنَ أَنْتَ؟", translation: "Sən haradansan?" },
            { arabic: "أَنَا مِنْ أَذَرْبَيْجَانَ", translation: "Mən Azərbaycandanam" },
            { arabic: "تَشَرَّفْنَا يا أَحْمَدُ", translation: "Tanışlığımıza şad oldum, Əhməd" },
            { arabic: "الشَّرَفُ لِي يا عُمَرُ", translation: "O şərəf mənə məxsusdur, Ömər" }
        ]
    },
    {
        id: 3,
        title: "Harada Yaşayırsan?",
        dialogue: [
            { arabic: "أَيْنَ تَسْكُنُ؟", translation: "Harada yaşayırsan?" },
            { arabic: "أَسْكُنُ فِي مَدِينَةِ بَاكُو", translation: "Bakı şəhərində yaşayıram" },
            { arabic: "هَلْ تَسْكُنُ فِي بَيْتٍ أَمْ شَقَّةٍ؟", translation: "Həyət evində yaşayırsan, yoxsa mənzildə?" },
            { arabic: "أَسْكُنُ فِي شَقَّةٍ كَبِيرَةٍ", translation: "Böyük bir mənzildə yaşayıram" },
            { arabic: "مَعَ مَنْ تَسْكُنُ؟", translation: "Kiminlə yaşayırsan?" },
            { arabic: "أَسْكُنُ مَعَ أُسْرَتِي", translation: "Ailəmlə yaşayıram" },
            { arabic: "هَلْ مَدِينَتُكَ جَمِيلَةٌ؟", translation: "Şəhərin gözəldir?" },
            { arabic: "نَعَمْ، هِيَ مَدِينَةٌ جَمِيلَةٌ جِدًّا", translation: "Bəli, o çox gözəl şəhərdir" }
        ]
    },
    {
        id: 4,
        title: "Ailə Haqqında",
        dialogue: [
            { arabic: "هَلْ عِنْدَكَ أُسْرَةٌ كَبِيرَةٌ؟", translation: "Böyük ailən var?" },
            { arabic: "نَعَمْ، عِنْدِي أُسْرَةٌ كَبِيرَةٌ", translation: "Bəli, böyük ailəm var" },
            { arabic: "كَمْ أَخًا لَكَ؟", translation: "Neçə qardaşın var?" },
            { arabic: "لِي أَخَوَانِ اثْنَانِ", translation: "İki qardaşım var" },
            { arabic: "وَكَمْ أُخْتًا لَكَ؟", translation: "Bəs neçə bacın var?" },
            { arabic: "لِي أُخْتٌ وَاحِدَةٌ", translation: "Bir bacım var" },
            { arabic: "أَيْنَ أَبُوكَ؟", translation: "Atan haradadır?" },
            { arabic: "أَبِي فِي الْبَيْتِ الآنَ", translation: "Atam indi evdədir" }
        ]
    },
    {
        id: 5,
        title: "Peşə və İş",
        dialogue: [
            { arabic: "مَاذَا تَعْمَلُ؟", translation: "Sən nə işləyirsən?" },
            { arabic: "أَنَا مُعَلِّمٌ", translation: "Mən müəlliməm" },
            { arabic: "وَأَيْنَ تَعْمَلُ؟", translation: "Bəs harada işləyirsən?" },
            { arabic: "أَعْمَلُ فِي الْمَدْرَسَةِ", translation: "Məktəbdə işləyirəm" },
            { arabic: "وَماذَا يَعْمَلُ صَدِيقُكَ؟", translation: "Bəs dostun nə işləyir?" },
            { arabic: "هُوَ طَبِيبٌ", translation: "O həkimdir" },
            { arabic: "أَيْنَ يَعْمَلُ هُوَ؟", translation: "O harada işləyir?" },
            { arabic: "يَعْمَلُ فِي الْمُسْتَشْفَى", translation: "Xəstəxanada işləyir" }
        ]
    },
    {
        id: 6,
        title: "Tələbə Həyatı",
        dialogue: [
            { arabic: "هَلْ أَنْتَ طَالِبٌ؟", translation: "Sən tələbəsən?" },
            { arabic: "نَعَمْ، أَنَا طَالِبٌ فِي الْجَامِعَةِ", translation: "Bəli, mən universitetdə tələbəyəm" },
            { arabic: "مَاذَا تَدْرُسُ؟", translation: "Nə oxuyursan?" },
            { arabic: "أَدْرُسُ اللُّغَةَ الْعَرَبِيَّةَ", translation: "Ərəb dilini oxuyuram" },
            { arabic: "هَلْ اللُّغَةُ الْعَرَبِيَّةُ صَعْبَةٌ؟", translation: "Ərəb dili çətindir?" },
            { arabic: "لَا، هِيَ سَهْلَةٌ وَجَمِيلَةٌ", translation: "Xeyr, o asan və gözəldir" },
            { arabic: "فِي أَيِّ سَنَةٍ أَنْتَ؟", translation: "Neçənci kursdasan?" },
            { arabic: "أَنَا فِي السَّنَةِ الثَّانِيَةِ", translation: "Mən ikinci kursdayam" }
        ]
    },
    {
        id: 7,
        title: "Məktəbdə",
        dialogue: [
            { arabic: "إِلَى أَيْنَ تَذْهَبُ الصَّبَاحَ؟", translation: "Səhər hara gedirsən?" },
            { arabic: "أَذْهَبُ إِلَى الْمَدْرَسَةِ", translation: "Məktəbə gedirəm" },
            { arabic: "كَيْفَ تَذْهَبُ إِلَى هُنَاكَ؟", translation: "Oraya necə gedirsən?" },
            { arabic: "أَذْهَبُ بِالْحَافِلَةِ", translation: "Avtobusla gedirəm" },
            { arabic: "مَتَى يَبْدَأُ الدَّرْسُ؟", translation: "Dərs neçədə başlayır?" },
            { arabic: "يَبْدَأُ فِي السَّاعَةِ الثَّامِنَةِ", translation: "Saat Səkkizdə başlayır" },
            { arabic: "وَمَتَى يَنْتَهِي؟", translation: "Bəs neçədə bitir?" },
            { arabic: "يَنْتَهِي فِي السَّاعَةِ الثَّانِيَةِ", translation: "Saat ikidə bitir" }
        ]
    },
    {
        id: 8,
        title: "Saat və Vaxt",
        dialogue: [
            { arabic: "كَمِ السَّاعَةُ الآنَ؟", translation: "İndi saat neçədir?" },
            { arabic: "السَّاعَةُ الآنَ الْخَامِسَةُ", translation: "İndi saat beşdir" },
            { arabic: "هَلْ عِنْدَكَ وَقْتٌ؟", translation: "Vaxtın var?" },
            { arabic: "نَعَمْ، عِنْدِي وَقْتٌ كَافٍ", translation: "Bəli, kifayət qədər vaxtım var" },
            { arabic: "مَتَى تَسْتَيْقِظُ؟", translation: "Neçədə durursan?" },
            { arabic: "أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ", translation: "Saat altıda dururam" },
            { arabic: "ومَتَى تَنَامُ؟", translation: "Bəs neçədə yatırsan?" },
            { arabic: "أَنَامُ فِي السَّاعَةِ الْعَاشِرَةِ", translation: "Saat onda yatıram" }
        ]
    },
    {
        id: 9,
        title: "Evdə və Otaqda",
        dialogue: [
            { arabic: "أَيْنَ الْكِتَابُ؟", translation: "Kitab haradadır?" },
            { arabic: "الْكِتَابُ عَلَى الْمَكْتَبِ", translation: "Kitab masanın üzərindədir" },
            { arabic: "وَأَيْنَ الْقَلَمُ؟", translation: "Bəs qələm haradadır?" },
            { arabic: "الْقَلَمُ فِي الْحَقِيبَةِ", translation: "Qələm çantadadır" },
            { arabic: "أَيْنَ نَظَّارَاتِي؟", translation: "Eynəyim haradadır?" },
            { arabic: "نَظَّارَاتُكَ فِي الْغُرْفَةِ", translation: "Eynəyin otaqdadır" },
            { arabic: "عَلَى الطَّاوِلَةِ؟", translation: "Masanın üzərində?" },
            { arabic: "نَعَمْ، بِجَانِبِ الْهَاتِفِ", translation: "Bəli, telefonun yanında" }
        ]
    },
    {
        id: 10,
        title: "Yolu Soruşmaq",
        dialogue: [
            { arabic: "عَفْوًا، أَيْنَ الْمَسْجِدُ؟", translation: "Bağışlayın, məscid haradadır?" },
            { arabic: "الْمَسْجِدُ قَرِيبٌ مِنْ هُنَا", translation: "Məscid buradan yaxındır" },
            { arabic: "كَيْفَ أَصِلُ إِلَيْهِ؟", translation: "Oraya necə gedə bilərəm?" },
            { arabic: "اِمْشِ أَمَامًا ثُمَّ ارْجِعْ يَمِينًا", translation: "Düz get, sonra sağa dön" },
            { arabic: "هَلْ هُوَ بَعِيدٌ؟", translation: "Uzaqdır?" },
            { arabic: "لَا، خَمْسُ دَقَائِقَ مَشْيًا", translation: "Xeyr, piyada beş dəqiqəlik yoldur" },
            { arabic: "شُكْرًا جَزِيلًا", translation: "Çox sağ olun" },
            { arabic: "عَفْوًا، لا شُكْرَ عَلَى وَاجِبٍ", translation: "Dəyməz, buyurun" }
        ]
    },
    {
        id: 11,
        title: "Bazarlıq və Mağaza",
        dialogue: [
            { arabic: "أَيْنَ السُّوقُ الْمَرْكَزِيُّ؟", translation: "Mərkəzi bazar haradadır?" },
            { arabic: "فِي آخِرِ هَذَا الشَّارِعِ", translation: "Bu küçənin sonunda" },
            { arabic: "مَاذَا تُرِيدُ أَنْ تَشْتَرِيَ؟", translation: "Nə almaq istəyirsən?" },
            { arabic: "أُرِيدُ شِرَاءَ بَعْضِ الْفَوَاكِهِ", translation: "Bir az meyvə almaq istəyirəm" },
            { arabic: "هَلْ السُّوقُ مَفْتُوحٌ الآنَ؟", translation: "Bazar indi açıqdır?" },
            { arabic: "نَعَمْ، هُوَ مَفْتُوحٌ كُلَّ يَوْمٍ", translation: "Bəli, o hər gün açıqdır" },
            { arabic: "هَلْ الأَسْعَارُ جَيِّدَةٌ؟", translation: "Qiymətlər yaxşıdır?" },
            { arabic: "نَعَمْ، الأَسْعَارُ رَخِيصَةٌ هُنَاكَ", translation: "Bəli, orada qiymətlər ucuzdur" }
        ]
    },
    {
        id: 12,
        title: "Alış-veriş: Qiymət Soruşmaq",
        dialogue: [
            { arabic: "بِكَمْ هَذَا الْكِتَابُ؟", translation: "Bu kitab neçəyədir?" },
            { arabic: "هَذَا بِعَشَرَةِ دَنَانِيرَ", translation: "Bu on dinardır" },
            { arabic: "وَبِكَمْ هَذَا الْقَلَمُ؟", translation: "Bəs bu qələm neçəyədir?" },
            { arabic: "هَذَا بِدِينَارَيْنِ", translation: "Bu iki dinardır" },
            { arabic: "هَلْ هُنَاكَ خَصْمٌ؟", translation: "Endirim varmı?" },
            { arabic: "نَعَمْ، هَاتِ ثَمَانِيَةَ دَنَانِيرَ لِلْكِتَابِ", translation: "Bəli, kitab üçün səkkiz dinar ver" },
            { arabic: "تَفَضَّلِ النُّقُودَ", translation: "Buyurun pulu" },
            { arabic: "شُكْرًا لَكَ يا سَيِّدِي", translation: "Təşəkkür edirəm, cənabım" }
        ]
    },
    {
        id: 13,
        title: "Geyim Mağazasında",
        dialogue: [
            { arabic: "أُرِيدُ قَمِيصًا أَبْيَضَ", translation: "Ağ köynək istəyirəm" },
            { arabic: "مَا هُوَ مَقَاسُكَ؟", translation: "Ölçün nədir?" },
            { arabic: "مَقَاسِي مُتَوَسِّطٌ", translation: "Ölçüm ortadır (Medium)" },
            { arabic: "تَفَضَّلْ هَذَا الْقَمِيصَ", translation: "Buyurun bu köynəyi" },
            { arabic: "هَلْ عِنْدَكَ لَوْنٌ آخَرُ؟", translation: "Başqa rənginiz var?" },
            { arabic: "نَعَمْ، عِنْدَنَا أَزْرَقُ وَأَسْوَدُ", translation: "Bəli, göy və qara rəngimiz var" },
            { arabic: "أُرِيدُ اللَّوْنَ الأَزْرَقَ", translation: "Göy rəngi istəyirəm" },
            { arabic: "تَفَضَّلْ يا سَيِّدِي", translation: "Buyurun, cənabım" }
        ]
    },
    {
        id: 14,
        title: "Restoranda Sifariş",
        dialogue: [
            { arabic: "مَاذَا تُحِبُّ أَنْ تَأْكُلَ؟", translation: "Nə yemək istərdiniz?" },
            { arabic: "أُرِيدُ دَجَاجًا مَشْوِيًّا", translation: "Toyuq kababı (qızartması) istəyirəm" },
            { arabic: "وَماذَا تَرِيدُ أَنْ تَشْرَبَ؟", translation: "Bəs nə içmək istəyirsiniz?" },
            { arabic: "عَصِيرَ بُرْتُقَالٍ مِنْ فَضْلِكَ", translation: "Zəhmət olmasa portağal şirəsi" },
            { arabic: "هَلْ تُرِيدُ سَلَطَةً؟", translation: "Salat istəyirsiniz?" },
            { arabic: "نَعَمْ، سَلَطَةَ خَضْرَاوَاتٍ", translation: "Bəli, tərəvəz salatı" },
            { arabic: "حَسَنًا، لَحَظَاتٍ مِنْ فَضْلِكَ", translation: "Yaxşı, bir neçə dəqiqə gözləyin" },
            { arabic: "شُكْرًا جَزِيلًا", translation: "Çox sağ olun" }
        ]
    },
    {
        id: 15,
        title: "Hesab İstəmək",
        dialogue: [
            { arabic: "الْحِسَابَ مِنْ فَضْلِكَ", translation: "Zəhmət olmasa hesabı verin" },
            { arabic: "تَفَضَّلِ الْفَاتُورَةَ", translation: "Buyurun qəbzi (fakturanı)" },
            { arabic: "كَمِ المَجْمُوعُ؟", translation: "Cəmi neçə edir?" },
            { arabic: "خَمْسَةٌ وَعِشْرُونَ دِينَارًا", translation: "İyirmi beş dinar" },
            { arabic: "هَلْ يُمْكِنُ الدَّفْعُ بِالْبِطَاقَةِ؟", translation: "Kartla ödəyə bilərəm?" },
            { arabic: "نَعَمْ، يُمْكِنُ بِالْبِطَاقَةِ أَوْ نَقْدًا", translation: "Bəli, kartla da olar, nağd da" },
            { arabic: "تَفَضَّلِ الْبِطَاقَةَ", translation: "Buyurun kartı" },
            { arabic: "شُكْرًا، يَوْمُكَ سَعِيدٌ", translation: "Sağ olun, gününüz uğurlu olsun" }
        ]
    },
    {
        id: 16,
        title: "Müayinə və Xəstəxana",
        dialogue: [
            { arabic: "مِمَّ تَشْتَكِي يا أَحْمَدُ؟", translation: "Nədən şikayətin var, Əhməd?" },
            { arabic: "أَشْعُرُ بَأَلَمٍ فِي الرَّأْسِ", translation: "Başıımda ağrı hiss edirəm" },
            { arabic: "هَلْ عِنْدَكَ حُرَّارَةٌ؟", translation: "Qızdırman var?" },
            { arabic: "نَعَمْ، حُرَارَتِي مُرْتَفِعَةٌ قَلِيلًا", translation: "Bəli, qızdırmam bir az yüksəkdir" },
            { arabic: "مُنْذُ مَتَى وَأَنْتَ هَكَذَا؟", translation: "Neçə vaxtdır beləsən?" },
            { arabic: "مُنْذُ الْأَمْسِ", translation: "Dünəndən beri" },
            { arabic: "تَنَاوَلْ هَذَا الدَّوَاءَ وَاسْتَرِحْ", translation: "Bu dərmanı iç və dincəl" },
            { arabic: "شُكْرًا يا طَبِيبُ", translation: "Çox sağ ol, həkim" }
        ]
    },
    {
        id: 17,
        title: "Aptakda (Əczaxana)",
        dialogue: [
            { arabic: "مَرْحَبًا، أُرِيدُ دَوَاءً لِلسُّعَالِ", translation: "Salam, öskürək dərmanı istəyirəm" },
            { arabic: "هَلْ عِنْدَكَ وَصْفَةٌ طِبِّيَّةٌ؟", translation: "Həkim reseptin var?" },
            { arabic: "لَا، لَيْسَ عِنْدِي وَصْفَةٌ", translation: "Xeyr, reseptim yoxdur" },
            { arabic: "تَفَضَّلْ هَذَا الشَّرَابَ", translation: "Buyurun bu şərbəti (sirobu)" },
            { arabic: "كَيْفَ أَتَنَاوَلُهُ؟", translation: "Onu necə qəbul edim?" },
            { arabic: "ثَلَاثَ مَرَّاتٍ بَعْدَ الأَكْلِ", translation: "Yeməkdən sonra gündə üç dəfə" },
            { arabic: "بِكَمْ هَذَا الدَّوَاءُ؟", translation: "Bu dərman neçəyədir?" },
            { arabic: "بِخَمْسَةِ دَنَانِيرَ", translation: "Beş dinardır" }
        ]
    },
    {
        id: 18,
        title: "Hava Haqqında",
        dialogue: [
            { arabic: "كَيْفَ الطَّقْسُ الْيَوْمَ؟", translation: "Bu gün hava necədir?" },
            { arabic: "الْجَوُّ حَارٌّ الْيَوْمَ", translation: "Bu gün hava istidir" },
            { arabic: "هَلْ تُوجَدُ شَمْسٌ؟", translation: "Günəş var?" },
            { arabic: "نَعَمْ، الْجَوُّ مُشْمِسٌ جِدًّا", translation: "Bəli, hava çox günəşlidir" },
            { arabic: "وَكَيْفَ كَانَ الْجَوُّ بِالأَمْسِ؟", translation: "Dünən hava necə idi?" },
            { arabic: "كَانَ مَاطِرًا وَبَارِدًا", translation: "Yağışlı və soyuq idi" },
            { arabic: "هَلْ سَتُمْطِرُ الْيَوْمَ؟", translation: "Bu gün yağış yağacaq?" },
            { arabic: "لَا، لا أَعْتَقِدُ ذَلِكَ", translation: "Xeyr, elə güman etmirəm" }
        ]
    },
    {
        id: 19,
        title: "Səyahət və Bilet",
        dialogue: [
            { arabic: "إِلَى أَيْنَ تُسَافِرُ؟", translation: "Hara səyahət edirsən?" },
            { arabic: "أُسَافِرُ إِلَى اسْطَنْبُولَ", translation: "İstanbula səyahət edirəm" },
            { arabic: "كَيْفَ تُسَافِرُ؟", translation: "Necə gedirsən?" },
            { arabic: "أُسَافِرُ بِالطَّائِرَةِ", translation: "Təyyarə ilə səyahət edirəm" },
            { arabic: "هَلْ حَجَزْتَ التَّذْكِرَةَ؟", translation: "Bileti bron etmisən?" },
            { arabic: "نَعَمْ، حَجَزْتُهَا أَمْسِ", translation: "Bəli, dünən bron etdim" },
            { arabic: "مَتَى مَوْعِدُ الرِّحْلَةِ؟", translation: "Uçuş saat neçədədir?" },
            { arabic: "فِي السَّاعَةِ الثَّالِثَةِ ظُهْرًا", translation: "Gündüz saat üçdə" }
        ]
    },
    {
        id: 20,
        title: "Aportda (Hava Limanında)",
        dialogue: [
            { arabic: "أَيْنَ جَوَازُ السَّفَرِ؟", translation: "Xarici pasportun haradadır?" },
            { arabic: "تَفَضَّلْ، هَذَا هُوَ الْجَوَازُ", translation: "Buyurun, pasport budur" },
            { arabic: "أَيْنَ حَقَائِبُكَ؟", translation: "Çantaların (baqajın) haradadır?" },
            { arabic: "هَذِهِ هِيَ حَقِيبَتِي", translation: "Mənim çantam budur" },
            { arabic: "ضعْهَا عَلَى الْمِيزَانِ مِنْ فَضْلِكِ", translation: "Zəhmət olmasa onu tərəziyə qoyun" },
            { arabic: "حَسَنًا، هَلْ الْوَزْنُ جَيِّدٌ؟", translation: "Yaxşı, çəkisi qaydasındadır?" },
            { arabic: "نَعَمْ، الْوَزْنُ مَقْبُولٌ", translation: "Bəli, çəki mənbuldur" },
            { arabic: "تَفَضَّلْ بِطَاقَةَ الصُّعُودِ", translation: "Buyurun təyyarəyə minik talonu" }
        ]
    },
    {
        id: 21,
        title: "Otel və Otaq Bronu",
        dialogue: [
            { arabic: "مَرْحَبًا، أُرِيدُ غُرْفَةً لِشَخْصَيْنِ", translation: "Salam, iki nəfərlik otaq istəyirəm" },
            { arabic: "كَمْ يَوْمًا سَتَبْقَى؟", translation: "Neçə gün qalacaqsınız?" },
            { arabic: "سَأَبْقَى ثَلَاثَةَ أَيَّامٍ", translation: "Üç gün qalacağam" },
            { arabic: "هَلْ تُرِيدُ غُرْفَةً مَعَ إِفْطَارٍ؟", translation: "Səhər yeməyi daxil olan otaq istəyirsiniz?" },
            { arabic: "نَعَمْ، مَعَ الإِفْطَارِ مِنْ فَضْلِكَ", translation: "Bəli, zəhmət olmasa səhər yeməyi daxil" },
            { arabic: "غُرْفَتُكَ فِي الطَّابَقِ الثَّالِثِ", translation: "Otağınız üçüncü mərtəbədədir" },
            { arabic: "هَلْ يُوجَدُ مِصْعَدٌ؟", translation: "Lift varmı?" },
            { arabic: "نَعَمْ، المِصْعَدُ عَلَى الْيَسَارِ", translation: "Bəli, lift soldadır" }
        ]
    },
    {
        id: 22,
        title: "Səhər Yeməyi",
        dialogue: [
            { arabic: "مَاذَا تَأْكُلُ فِي الإِفْطَارِ؟", translation: "Səhər yeməyində nə yeyirsən?" },
            { arabic: "آكُلُ الْبَيْضَ وَالْجُبْنَ وَالْخُبْزَ", translation: "Yumurta, pendir və çörək yeyirəm" },
            { arabic: "وَمَاذَا تَشْرَبُ؟", translation: "Bəs nə içirsən?" },
            { arabic: "أَشْرَبُ الشَّايَ مَعَ السُكَّرِ", translation: "Şəkərli çay içirəm" },
            { arabic: "هَلْ تُحِبُّ الْقَهْوَةَ؟", translation: "Qəhvə sevirsən?" },
            { arabic: "لَا، أَنَا أُفَضِّلُ الشَّايَ", translation: "Xeyr, mən çaya üstünlük verirəm" },
            { arabic: "تَفَضَّلِ الشَّايَ السَّاخِنَ", translation: "Buyurun isti çay" },
            { arabic: "شُكْرًا، هَذَا لَذِيذٌ", translation: "Çox sağ ol, bu ləzzətlidir" }
        ]
    },
    {
        id: 23,
        title: "Meyvə Mağazasında",
        dialogue: [
            { arabic: "عِنْدَكَ تُفَّاحٌ طَازَجٌ؟", translation: "Təzə almanız var?" },
            { arabic: "نَعَمْ، عِنْدِي تُفَّاحٌ أَحْمَرُ وَأَخْضَرُ", translation: "Bəli, qırmızı və yaşıl almam var" },
            { arabic: "أُرِيدُ كِيلُو مِنْ التُّفَّاحِ الأَحْمَرِ", translation: "Bir kilo qırmızı alma istəyirəm" },
            { arabic: "وَهَلْ تُرِيدُ مَوْزًا؟", translation: "Bəs banan istəyirsiniz?" },
            { arabic: "نَعَمْ، وَكِيلُو مَوْزٍ أَيْضًا", translation: "Bəli, bir kilo da banan" },
            { arabic: "هَلْ تُرِيدُ شَيْئًا آخَرَ؟", translation: "Başqa bir şey istəyirsiniz?" },
            { arabic: "لَا، شُكْرًا، كَمِ الْحِسَابُ؟", translation: "Xeyr, sağ olun, hesab neçədir?" },
            { arabic: "خَمْسَةُ دَنَانِيرَ فَقَطْ", translation: "Təkcə beş dinar" }
        ]
    },
    {
        id: 24,
        title: "İdman Haqqında",
        dialogue: [
            { arabic: "هَلْ تُمَارِسُ الرِّيَاضَةَ؟", translation: "İdmanla məşğul olursan?" },
            { arabic: "نَعَمْ، أُمَارِسُ الرِّيَاضَةَ كُلَّ يَوْمٍ", translation: "Bəli, hər gün idmanla məşğul oluram" },
            { arabic: "أَيَّ رِيَاضَةٍ تُفَضِّلُ؟", translation: "Hansı idmana üstünlük verirsən?" },
            { arabic: "أُفَضِّلُ كُرَةَ الْقَدَمِ وَالسِّبَاحَةَ", translation: "Futbola və üzgüçülüyə üstünlük verirəm" },
            { arabic: "أَيْنَ تَسْبَحُ؟", translation: "Harada üzürsən?" },
            { arabic: "أَسْبَحُ فِي المَسْبَحِ الْكَبِيرِ", translation: "Böyük hovuzda üzürəm" },
            { arabic: "هَلْ تَلْعَبُ كُرَةَ السَّلَّةِ؟", translation: "Basketbol oynayırsan?" },
            { arabic: "أَحْيَانًا مَعَ أَصْدِقَائِي", translation: "Bəzən dostlarımla oynayıram" }
        ]
    },
    {
        id: 25,
        title: "Asudə Vaxt (Hobbi)",
        dialogue: [
            { arabic: "مَا هِيَ هِوَايَتُكَ؟", translation: "Hobbim nədir?" },
            { arabic: "هِوَايَتِي الْقِرَاءَةُ وَالرَّسْمُ", translation: "Hobbim mütaliə etmək və şəkil çəkməkdir" },
            { arabic: "مَاذَا تَقْرَأُ؟", translation: "Nə oxuyursan?" },
            { arabic: "أَقْرَأُ الْكُتُبَ وَالْمَجَلَّاتِ", translation: "Kitablar və jurnallar oxuyuram" },
            { arabic: "مَتَى تَقْرَأُ؟", translation: "Ne vaxt oxuyursan?" },
            { arabic: "أَقْرَأُ فِي وَقْتِ الْفَرَاقِ", translation: "Boş vaxtlarımda oxuyuram" },
            { arabic: "هَلْ تُحِبُّ السَّفَرَ؟", translation: "Səyahət etməyi sevirsən?" },
            { arabic: "نَعَمْ، أُحِبُّ زِيَارَةَ المَادِنِ الجَدِيدَةِ", translation: "Bəli, yeni şəhərlərə baş çəkməyi sevirəm" }
        ]
    },
    {
        id: 26,
        title: "Taksi Sürücüsü İlə",
        dialogue: [
            { arabic: "تَاكْسِي! هَلْ أَنْتَ فَارِغٌ؟", translation: "Taksi! Boşsunuz?" },
            { arabic: "نَعَمْ يا سَيِّدِي، إِلَى أَيْنَ؟", translation: "Bəli cənab, hara gedirik?" },
            { arabic: "إِلَى الْمَطَارِ مِنْ فَضْلِكَ", translation: "Zəhmət olmasa hava limanına" },
            { arabic: "حَسَنًا، اِرْكَبْ مِنْ فَضْلِكَ", translation: "Yaxşı, əyləşin zəhmət olmasa" },
            { arabic: "كَمْ سَتَأْخُذُ وَقْتًا؟", translation: "Neçə dəqiqə çəkər?" },
            { arabic: "نِصْفَ سَاعَةٍ تَقْرِيبًا", translation: "Təxminən yarım saat" },
            { arabic: "هَلْ الطَّرِيقُ مُزْدَحِمٌ؟", translation: "Yolda sıxlıq var?" },
            { arabic: "لَا، الطَّرِيقُ سَالِكٌ الآنَ", translation: "Xeyr, indi yol açıqdır" }
        ]
    },
    {
        id: 27,
        title: "Avtobusda",
        dialogue: [
            { arabic: "هَلْ هَذِهِ الْحَافِلَةُ تَذْهَبُ إِلَى الْمَرْكَزِ؟", translation: "Bu avtobus mərkəzə gedir?" },
            { arabic: "نَعَمْ، تَذْهَبُ إِلَى الْمَرْكَزِ", translation: "Bəli, mərkəzə gedir" },
            { arabic: "بِكَمِ التَّذْكِرَةُ؟", translation: "Bilet neçəyədir?" },
            { arabic: "بِدِينَارٍ وَاحِدٍ", translation: "Bir dinardır" },
            { arabic: "مَا هِيَ الْمَحَطَّةُ الْقَادِمَةُ؟", translation: "Növbəti dayanacaq hansıdır?" },
            { arabic: "الْمَحَطَّةُ الْقَادِمَةُ هِيَ الْمُسْتَشْفَى", translation: "Növbəti dayanacaq xəstəxanadır" },
            { arabic: "أَيْنَ أَنْزِلُ؟", translation: "Mən harada düşüm?" },
            { arabic: "اِنْزِلْ فِي الْمَحَطَّةِ الثَّالِثَةِ", translation: "Üçüncü dayanacaqda düşün" }
        ]
    },
    {
        id: 28,
        title: "Kitabxanada",
        dialogue: [
            { arabic: "أَيْنَ مَكْتَبَةُ الْمَدِينَةِ؟", translation: "Şəhər kitabxanası haradadır?" },
            { arabic: "بِجَانِبِ الْمَتْحَفِ", translation: "Muzeyin yanında" },
            { arabic: "هَلْ يُمْكِنُنِي اسْتِعَارَةُ كِتَابٍ؟", translation: "Kitab götürə (borc ala) bilərəm?" },
            { arabic: "نَعَمْ، عَنْ طَرِيقِ بِطَاقَةِ الْمَكْتَبَةِ", translation: "Bəli, kitabxana kartı ilə" },
            { arabic: "كَمْ يَوْمًا يُمْكِنُ احْتِفَاظُ الكِتَابِ؟", translation: "Kitabı neçə gün saxla bələrm?" },
            { arabic: "لِمُدَّةِ أُسْبُوعَيْنِ", translation: "İki həftə müddətində" },
            { arabic: "هل الْمَكْتَبَةُ هَادِئَةٌ؟", translation: "Kitabxana sakitdir?" },
            { arabic: "نَعَمْ، هِيَ هَادِئَةٌ جِدًّا لِلْقِرَاءَةِ", translation: "Bəli, mütaliə üçün çox sakitdir" }
        ]
    },
    {
        id: 29,
        title: "İş Qrafiki",
        dialogue: [
            { arabic: "مَتَى تَبْدَأُ الْعَمَلَ؟", translation: "İşə neçədə başlayırsan?" },
            { arabic: "أَبْدَأُ فِي السَّاعَةِ التَّاسِعَةِ صَبَاحًا", translation: "Səhər saat doqquzda başlayıram" },
            { arabic: "وَمَتَى تَنْتَهِي؟", translation: "Bəs neçədə bitirirsən?" },
            { arabic: "أَنْتَهِي فِي السَّاعَةِ الْخَامِسَةِ مَسَاءً", translation: "Axşam saat beşdə bitirirəm" },
            { arabic: "كَمْ يَوْمًا تَعْمَلُ فِي الأُسْبُوعِ؟", translation: "Həftədə neçə gün işləyirsən?" },
            { arabic: "أَعْمَلُ خَمْسَةَ أَيَّامٍ", translation: "Beş gün işləyirəm" },
            { arabic: "مَا هِيَ أَيَّامُ العُطْلَةِ؟", translation: "İstirahət günləri hansılardır?" },
            { arabic: "السَّبْتُ وَالأَحَدُ", translation: "Şənbə və Bazar günləri" }
        ]
    },
    {
        id: 30,
        title: "Tətil və İstirahət",
        dialogue: [
            { arabic: "أَيْنَ سَتَقْضِي الْعُطْلَةَ؟", translation: "Tətili harada keçirəcəksən?" },
            { arabic: "سَأَقْضِيهَا فِي الْجَبَلِ", translation: "Dağda keçirəcəyəm" },
            { arabic: "مَعَ مَنْ سَتَذْهَبُ؟", translation: "Kiminlə gedəcəksən?" },
            { arabic: "سَأَذْهَبُ مَعَ أَصْدِقَائِي", translation: "Dostlarımla gedəcəyəm" },
            { arabic: "كَمْ يَوْمًا سَتَبْقَوْنَ هُنَاكَ؟", translation: "Orada neçə gün qalacaqsınız?" },
            { arabic: "أُسْبُوعًا كَامِلًا", translation: "Bütöv bir həftə" },
            { arabic: "اتَمَنَّى لَكُمْ رِحْلَةً سَعِيدَةً", translation: "Sizə xoş istirahətlər arzulayıram" },
            { arabic: "شُكْرًا لَكَ يا صَدِيقِي", translation: "Sağ ol, dostum" }
        ]
    },
    {
        id: 31,
        title: "Yemək bişirmək",
        dialogue: [
            { arabic: "هَلْ تَعْرِفُ كَيْفَ تَطْبُخُ؟", translation: "Yemək bişirməyi bilirsən?" },
            { arabic: "نَعَمْ، أَعْرِفُ طَبْخَ بَعْضِ الأَطْعِمَةِ", translation: "Bəli, bəzi yeməkləri bişirməyi bilirəm" },
            { arabic: "مَاذَا تَطْبُخُ الْيَوْمَ؟", translation: "Bu gün nə bişirirsən?" },
            { arabic: "أَطْبُخُ الأَرُزَّ مَعَ اللَّحْمِ", translation: "Ətlə düyü (plov) bişirirəm" },
            { arabic: "هَلْ هَذَا صَعْبٌ؟", translation: "Bu çətindir?" },
            { arabic: "لَا، هُوَ سَهْلٌ وَسَرِيعٌ", translation: "Xeyr, o asan və tez başa gələndir" },
            { arabic: "هَلْ تُرِيدُ مُسَاعَدَةً؟", translation: "Kömək istəyirsən?" },
            { arabic: "لَا، شُكْرًا، كُلُّ شَيْءٍ جَاهِزٌ", translation: "Xeyr, sağ ol, hər şey hazırdır" }
        ]
    },
    {
        id: 32,
        title: "Dostla Görüş",
        dialogue: [
            { arabic: "أَهْلًا يا حَسَنُ، كَيْفَ حَالُكَ؟", translation: "Salam Həsən, necəsən?" },
            { arabic: "أَهْلًا يا مَحْمُودُ، أَنَا بِخَيْرٍ", translation: "Salam Mahmud, yaxşıyam" },
            { arabic: "مُنْذُ زَمَنٍ لَمْ أَرَكَ", translation: "Uzun zamandır səni görmürəm" },
            { arabic: "نَعَمْ، كُنْتُ مَشْغُولًا جِدًّا", translation: "Bəli, çox məşğul idim" },
            { arabic: "هَلْ نَشْرَبُ الْقَهْوَةَ مَعًا؟", translation: "Birlikdə qəhvə içək?" },
            { arabic: "فِكْرَةٌ مُمْتَازَةٌ، مَتَى؟", translation: "Əla fikirdir, ne vaxt?" },
            { arabic: "الْيَوْمَ فِي السَّاعَةِ الرَّابِعَةِ", translation: "Bu gün saat dörddə" },
            { arabic: "حَسَنًا، نَلْتَقِي فِي المَقْهَى", translation: "Yaxşı, kafedə görüşərik" }
        ]
    },
    {
        id: 33,
        title: "Telefon Danışığı",
        dialogue: [
            { arabic: "أَلُو، مَنْ مَعِي؟", translation: "Allo, kimdir danışan?" },
            { arabic: "أَنَا عَلِيٌّ، كَيْفَ حَالُكَ؟", translation: "Mən Əliyəm, necəsən?" },
            { arabic: "أَهْلًا يا عَلِيُّ، أَنَا بِخَيْرٍ", translation: "Salam Əli, yaxşıyam" },
            { arabic: "هَلْ يُمْكِنُنِي الحَدِيثُ مَعَ خَالِدٍ؟", translation: "Xalidlə danışa bilərəm?" },
            { arabic: "خَالِدٌ لَيْسَ هُنَا الآنَ", translation: "Xalid indi burada deyil" },
            { arabic: "أَيْنَ هُوَ؟", translation: "O haradadır?" },
            { arabic: "خَرَجَ إِلَى السُّوقِ", translation: "Bazara/Mağazaya çıxıb" },
            { arabic: "حَسَنًا، سَأَتَّصِلُ بِهِ لاحِقًا", translation: "Yaxşı, sonra zəng edərəm" }
        ]
    },
    {
        id: 34,
        title: "Parkda Gəzinti",
        dialogue: [
            { arabic: "الْجَوُّ جَمِيلٌ الْيَوْمَ", translation: "Bu gün hava gözəldir" },
            { arabic: "نَعَمْ، هَلْ نَذْهَبُ إِلَى الْحَدِيقَةِ؟", translation: "Bəli, parka gedək?" },
            { arabic: "فِكْرَةٌ جَيِّدَةٌ، لِنَمْشِ قَلِيلًا", translation: "Yaxşı fikirdir, bir az gəzək" },
            { arabic: "الْحَدِيقَةُ مَلِيئَةٌ بِالزُّهُورِ", translation: "Park çiçəklərlə doludur" },
            { arabic: "هَلْ نَجْلِسُ عَلَى هَذَا الْكُرْسِيِّ؟", translation: "Bu skamyada əyləşək?" },
            { arabic: "نَعَمْ، هَذَا المَكَانُ هَادِئٌ", translation: "Bəli, bu yer sakin yerdir" },
            { arabic: "هَلْ تُحِبُّ الطَّبِيعَةَ؟", translation: "Təbiəti sevirsən?" },
            { arabic: "نَعَمْ، أُحِبُّهَا كَثِيرًا", translation: "Bəli, çox sevirəm" }
        ]
    },
    {
        id: 35,
        title: "Ev Təmizliyi",
        dialogue: [
            { arabic: "مَاذَا تَفْعَلُ فِي الْبَيْتِ؟", translation: "Evdə nə edirsən?" },
            { arabic: "أُنَظِّفُ غُرْفَتِي", translation: "Otağımı təmizləyirəm" },
            { arabic: "هَلْ تُسَاعِدُ أُمَّكَ؟", translation: "Anana kömək edirsən?" },
            { arabic: "نَعَمْ، أُسَاعِدُهَا فِي تَنْظِيفِ المَطْبَخِ", translation: "Bəli, mətbəxi təmizləməkdə ona kömək edirəm" },
            { arabic: "وَماذَا يَفْعَلُ أَخُوكَ؟", translation: "Bəs qardaşın nə edir?" },
            { arabic: "هُوَ يَغْسِلُ السَّيَّارَةَ", translation: "O maşını yuyur" },
            { arabic: "الْبَيْتُ نَظِيفٌ الآنَ", translation: "Ev indi təmizdir" },
            { arabic: "نَعَمْ، هَذَا أَمْرٌ جَيِّدٌ", translation: "Bəli, bu yaxşı bir şeydir" }
        ]
    },
    {
        id: 36,
        title: "Fast Food və Qəlyanaltı",
        dialogue: [
            { arabic: "هَلْ أَنْتَ جَائِعٌ؟", translation: "Acımısan?" },
            { arabic: "نَعَمْ، أَنَا جَائِعٌ جِدًّا", translation: "Bəli, çox acmışam" },
            { arabic: "مَاذَا نَأْكُلُ؟", translation: "Nə yeyək?" },
            { arabic: "هَلْ نَأْكُلُ شَاوَرْمَا؟", translation: "Dönər (şavurma) yeyək?" },
            { arabic: "حَسَنًا، أَنَا أُحِبُّ الشَّاوَرْمَا", translation: "Yaxşı, mən dönər sevirəm" },
            { arabic: "هَلْ تُرِيدُ بَطَاطِسَ مَقْلِيَّةً؟", translation: "Kartof fri istəyirsən?" },
            { arabic: "نَعَمْ، وَعَصِيرَ بَارِدًا أَيْضًا", translation: "Bəli, və bir də soyuq şirə" },
            { arabic: "لِنَذْهَبْ إِلَى المَطْعَمِ الْقَرِيبِ", translation: "Yaxındakı restorana gedək" }
        ]
    },
    {
        id: 37,
        title: "Səhər Rejimi",
        dialogue: [
            { arabic: "مَاذَا تَفْعَلُ بَعْدَ الاِسْتِيقَاظِ؟", translation: "Oyanandan sonra nə edirsən?" },
            { arabic: "أَغْسِلُ وَجْهِي وَأَسْنَانِي", translation: "Üzümü və dişlərimi yuyuram" },
            { arabic: "ثُمَّ مَاذَا؟", translation: "Sonra nə?" },
            { arabic: "أَتَنَاوَلُ الإِفْطَارَ فِي المَطْبَخِ", translation: "Mətbəxdə səhər yeməyi yeyirəm" },
            { arabic: "هَلْ تَرْتَدِي مَلَابِسَ الْمَدْرَسَةِ؟", translation: "Məktəb paltarlarını geyinirsən?" },
            { arabic: "نَعَمْ، ثُمَّ أَمْشِي إِلَى الحَافِلَةِ", translation: "Bəli, sonra avtobusa tərəf piyada gedirəm" },
            { arabic: "مَتَى تَخْرُجُ مِنَ الْبَيْتِ؟", translation: "Evdən neçədə çıxırsan?" },
            { arabic: "فِي السَّاعَةِ السَّابِعَةِ وَالنِّصْفِ", translation: "Saat yeddi yarımda" }
        ]
    },
    {
        id: 38,
        title: "Ailə Üvlərini Tanıtmaq",
        dialogue: [
            { arabic: "مَنْ هَذَا فِي الصُّورَةِ؟", translation: "Şəkildəki bu şəxs kimdir?" },
            { arabic: "هَذَا جَدِّي", translation: "Bu mənim babamdır" },
            { arabic: "وَمَنْ هَذِهِ؟", translation: "Bəs bu kimdir?" },
            { arabic: "هَذِهِ جَدَّتِي", translation: "Bu mənim nənəmdir" },
            { arabic: "هَلْ هُمَا كَبِيرَانِ فِي السِّنِّ؟", translation: "Onların yaşları çoxdur?" },
            { arabic: "نَعَمْ، هُمَا كَبِيرَانِ وَكَرِيمَانِ", translation: "Bəli, onlar yaşlı və mehribandırlar" },
            { arabic: "أَيْنَ يَعِيشَانِ؟", translation: "Nerede yaşayıirlar?" },
            { arabic: "يَعِيشَانِ فِي الْقَرْيَةِ", translation: "Kənddə yaşayıirlar" }
        ]
    },
    {
        id: 39,
        title: "Şəhər Mərkəzində Gəzinti",
        dialogue: [
            { arabic: "مَاذَا يُوجَدُ فِي مَرْكَزِ الْمَدِينَةِ؟", translation: "Şəhərin mərkəzində nə var?" },
            { arabic: "يُوجَدُ مَتاَجِرُ وَمَطَاعِمُ وَمَتَاحِفُ", translation: "Mağazalar, restoranlar və muzeylər var" },
            { arabic: "هَلْ الْمَكَانُ مُزْدَحِمٌ؟", translation: "Ora basırıqdır (sıxdır)?" },
            { arabic: "نَعَمْ، فِي المَسَاءِ خَاصَّةً", translation: "Bəli, xüsusən də axşamlar" },
            { arabic: "هَلْ نَمْشِي فِي الشَّارِعِ الكَبِيرِ؟", translation: "Böyük küçədə gəzək?" },
            { arabic: "نَعَمْ، هُوَ شَارِعٌ جَمِيلٌ لِلْمَشْيِ", translation: "Bəli, o gəzmək üçün gözəl küçədir" },
            { arabic: "هَلْ تُوجَدُ أَمَاكِنُ لِلْجُلُوسِ؟", translation: "Oturmağa yerlər var?" },
            { arabic: "نَعَمْ، تُوجَدُ مَقَاعِدُ كَثِيرَةٌ", translation: "Bəli, çoxlu skamyalar var" }
        ]
    },
    {
        id: 40,
        title: "Supermarketdə",
        dialogue: [
            { arabic: "أَيْنَ عَرَبَةُ التَّسَوُّقِ؟", translation: "Alış-veriş arabası haradadır?" },
            { arabic: "عِنْدَ المَدْخَلِ يا سَيِّدِي", translation: "Girişdədir, cənabım" },
            { arabic: "أَيْنَ الحَلِيبُ وَالْجُبْنُ؟", translation: "Süd və pendir haradadır?" },
            { arabic: "فِي القِسْمِ الخَلْفِيِّ", translation: "Arxa şöbədədir" },
            { arabic: "وَأَيْنَ العَصِيرُ؟", translation: "Bəs şirə haradadır?" },
            { arabic: "بِجَانِبِ المَاءِ", translation: "Suyun yanında" },
            { arabic: "شُكْرًا، سَأَذْهَبُ إِلَى الصَّنْدُوقِ", translation: "Sağ olun, kassaya gedəcəyəm" },
            { arabic: "تَفَضَّلْ، الصَّنْدُوقُ هُنَاكَ", translation: "Buyurun, kassa oradadır" }
        ]
    },
    {
        id: 41,
        title: "Kitab Satın Almaq",
        dialogue: [
            { arabic: "مَرْحَبًا، أَبْحَثُ عَنْ كِتَابِ قَوَاعِدِ اللُّغَةِ", translation: "Salam, qrammatika kitabı axtarıram" },
            { arabic: "تَفَضَّلْ، فِي هَذَا الرَّفِّ", translation: "Buyurun, bu rəfdədir" },
            { arabic: "هَلْ هَذَا الْكِتَابُ مُفِيدٌ؟", translation: "Bu kitab faydalıdır?" },
            { arabic: "نَعَمْ، هُوَ كِتَابٌ مُمْتَازٌ لِلْمُبْتَدِئِينَ", translation: "Bəli, yeni başlayanlar üçün əla kitabdır" },
            { arabic: "كَمْ صَفْحَةً فِيهِ؟", translation: "İçində neçə səhifə var?" },
            { arabic: "فِيهِ مِائَةُ صَفْحَةٍ", translation: "İçində yüz səhifə var" },
            { arabic: "سَأَشْتَرِيهِ الآنَ", translation: "İndi onu alacağam" },
            { arabic: "مَبْرُوكٌ، كِتَابٌ جَيِّدٌ", translation: "Mübarəkdir, yaxşı kitabdır" }
        ]
    },
    {
        id: 42,
        title: "Mövsumlər (Fəsillər)",
        dialogue: [
            { arabic: "أَيُّ فَصْلٍ تُحِبُّ؟", translation: "Hansı fəsli sevirsən?" },
            { arabic: "أُحِبُّ فَصْلَ الرَّبِيعِ", translation: "Yaz fəslini sevirəm" },
            { arabic: "لِمَاذَا تُحِبُّ الرَّبِيعَ؟", translation: "Yazı niyə sevirsən?" },
            { arabic: "لِأَنَّ الجَوَّ مُعْتَدِلٌ وَالأَزْهَارَ جَمِيلَةٌ", translation: "Çünki hava mülayim, çiçəklər gözəldir" },
            { arabic: "وماذَا عَنْ فَصْلِ الصَّيْفِ؟", translation: "Bəs yay fəsli haqqında nə deyirsən?" },
            { arabic: "الصَّيْفُ حَارٌّ، لَكِنْ فِيهِ عُطْلَةٌ", translation: "Yay istidir, amma onda tətil var" },
            { arabic: "وَهَلْ تُحِبُّ الشِّتَاءَ؟", translation: "Bəs qışı sevirsən?" },
            { arabic: "لَا، الشِّتَاءُ بَارِدٌ جِدًّا", translation: "Xeyr, qış çox soyuqdur" }
        ]
    },
    {
        id: 43,
        title: "Rənglər Haqqında",
        dialogue: [
            { arabic: "مَا هُوَ لَوْنُكَ المُفَضَّلُ؟", translation: "Sevdiyin rəng hansıdır?" },
            { arabic: "لَوْنِي المُفَضَّلُ هُوَ الأَزْرَقُ", translation: "Sevdiyim rəng göydür" },
            { arabic: "وَمَا لَوْنُ سَيَّارَتِكَ؟", translation: "Bəs maşınının rəngi nədir?" },
            { arabic: "سَيَّارَتِي بَيْضَاءُ", translation: "Maşınım ağdır" },
            { arabic: "هَلْ تُحِبُّ اللَّوْنَ الأَحْمَرَ؟", translation: "Qırmızı rəngi sevirsən?" },
            { arabic: "نَعَمْ، الأَحْمَرُ لَوْنٌ جَمِيلٌ", translation: "Bəli, qırmızı gözəl rəngdir" },
            { arabic: "وَما لَوْنُ هَذَا الْقَلَمِ؟", translation: "Bəs bu qələmin rəngi nədir?" },
            { arabic: "هَذَا قَلَمٌ أَسْوَدُ", translation: "Bu qara qələmdir" }
        ]
    },
    {
        id: 44,
        title: "Heyvanlar Haqqında",
        dialogue: [
            { arabic: "هَلْ عِنْدَكَ حَيَوَانٌ أَلِيفٌ؟", translation: "Ev heyvanın var?" },
            { arabic: "نَعَمْ، عِنْدِي قِطَّةٌ صَغِيرَةٌ", translation: "Bəli, kiçik bir pişim var" },
            { arabic: "مَا لَوْنُ القِطَّةِ؟", translation: "Pişiyin rəngi nədir?" },
            { arabic: "لَوْنُهَا أَبْيَضُ وَرَمَادِيٌّ", translation: "Rəngi ağ və bozdu" },
            { arabic: "مَاذَا تَأْكُلُ القِطَّةُ؟", translation: "Pişik nə yeyir?" },
            { arabic: "تَأْكُلُ السَّمَكَ وَتَشْرَبُ الحَلِيبَ", translation: "Balıq yeyir və süd içir" },
            { arabic: "هَلْ تُحِبُّ الكِلابَ؟", translation: "İtləri sevirsən?" },
            { arabic: "أُفَضِّلُ القِطَاطَ أَكْثَرَ", translation: "Pişikləri daha çox üstün tuturam" }
        ]
    },
    {
        id: 45,
        title: "Ad Günü və Təbrik",
        dialogue: [
            { arabic: "مَتَى عِيدُ مِيلادِكَ؟", translation: "Ad günün ne vaxtdır?" },
            { arabic: "عِيدُ مِيلادِي الشَّهْرَ القَادِمَ", translation: "Ad günüm gələn aydır" },
            { arabic: "كَمْ عُمْرُكَ الآنَ؟", translation: "İndi neçə yaşın var?" },
            { arabic: "عُمْرِي عِشْرُونَ سَنَةً", translation: "İyirmi yaşım var" },
            { arabic: "كُلُّ عَامٍ وَأَنْتَ بِخَيْرٍ", translation: "Yeni yaşın (hər ilin) mübarək" },
            { arabic: "وَأَنْتَ بِخَيْرٍ وَصِحَّةٍ", translation: "Sənin də yaşın mübarək və sağlamlıqla" },
            { arabic: "هَلْ سَتَقِيمُ حَفْلَةً؟", translation: "Şənlik (pərəstiş) edəcəksən?" },
            { arabic: "نَعَمْ، حَفْلَةً صَغِيرَةً فِي الْبَيْتِ", translation: "Bəli, evdə kiçik bir şənlik" }
        ]
    },
    {
        id: 46,
        title: "Tərəvəz və Meyvə Bazarı",
        dialogue: [
            { arabic: "أُرِيدُ بَطَاطِسَ وَطَمَاطِمَ", translation: "Kartof və pomidor istəyirəm" },
            { arabic: "كَمْ كِيلُو تُرِيدُ؟", translation: "Neçə kilo istəyirsiniz?" },
            { arabic: "كِيلُوَانِ طَمَاطِمَ وَكِيلُو بَطَاطِسَ", translation: "İki kilo pomidor, bir kilo kartof" },
            { arabic: "هَلْ تُرِيدُ بَصَلًا أَيْضًا؟", translation: "Bəs soğan da istəyirsiniz?" },
            { arabic: "نَعَمْ، كِيلُو بَصَلٍ مِنْ فَضْلِكَ", translation: "Bəli, zəhmət olmasa bir kilo soğan" },
            { arabic: "تَفَضَّلْ، التَّرَوَاتُ طَازَجَةٌ", translation: "Buyurun, tərəvəzlər təzədir" },
            { arabic: "شُكْرًا، كَمِ الْمَجْمُوعُ؟", translation: "Sağ olun, cəmi neçə etdi?" },
            { arabic: "أَرْبَعَةُ دَنَانِيرَ", translation: "Dörd dinar" }
        ]
    },
    {
        id: 47,
        title: "Ailə Yeməyi",
        dialogue: [
            { arabic: "الطَّعَامُ جَاهِزٌ يا أَوْلَادِي", translation: "Uşaqlarım, yemək hazırdır" },
            { arabic: "مَاذَا طَبَخْتِ يا أُمِّي؟", translation: "Ana, nə bişirmisən?" },
            { arabic: "طَبَخْتُ حَسَاءً وَأَرُزًّا مَعَ السَّمَكِ", translation: "Şorba və balıqlı düyü bişirmişəm" },
            { arabic: "هَذَا طَعَامٌ لَذِيذٌ جِدًّا", translation: "Bu çox ləzzətli yeməkdir" },
            { arabic: "اغْسِلُوا أَيْدِيَكُمْ قَبْلَ الأَكْلِ", translation: "Yeməkdən əvvəl əllərinizi yuyun" },
            { arabic: "حَسَنًا يا أُمِّي", translation: "Yaxşı, ana" },
            { arabic: "تَفَضَّلُوا عَلَى المَائِدَةِ", translation: "Süfrəyə buyurun" },
            { arabic: "شُكْرًا يا أُمِّي الحَبِيبَةَ", translation: "Sağ ol, əziz anam" }
        ]
    },
    {
        id: 48,
        title: "Ev Mebeli və Əşyaları",
        dialogue: [
            { arabic: "مَاذَا يُوجَدُ فِي غُرْفَةِ الجُلُوسِ؟", translation: "Qonaq otağında nə var?" },
            { arabic: "يُوجَدُ أَرِيكَةٌ وَتِلْفَازٌ", translation: "Divan və televizor var" },
            { arabic: "وَهَلْ تُوجَدُ سَجَّادَةٌ؟", translation: "Bəs xalça var?" },
            { arabic: "نَعَمْ، سَجَّادَةٌ حَمْرَاءُ جَمِيلَةٌ", translation: "Bəli, gözəl qırmızı xalça var" },
            { arabic: "أَيْنَ الطَّاوِلَةُ؟", translation: "Masa haradadır?" },
            { arabic: "فِي وَسَطِ الْغُرْفَةِ", translation: "Otağın ortasında" },
            { arabic: "هَلْ الغُرْفَةُ كَبِيرَةٌ؟", translation: "Otaq böyükdür?" },
            { arabic: "نَعَمْ، هِيَ كَبِيرَةٌ وَمُضِيئَةٌ", translation: "Bəli, böyük və işıqlıdır" }
        ]
    },
    {
        id: 49,
        title: "Xəbərlər və Televizor",
        dialogue: [
            { arabic: "مَاذَا تَفْعَلُ يا عُمَرُ؟", translation: "Nə edirsən, Ömər?" },
            { arabic: "أُشَاهِدُ التِّلْفَازَ", translation: "Televizora baxıram" },
            { arabic: "مَاذَا تُشَاهِدُ؟", translation: "Nəyə baxırsan?" },
            { arabic: "أُشَاهِدُ الأَخْبَارَ الرِّيَاضِيَّةَ", translation: "İdman xəbərlərinə baxıram" },
            { arabic: "مَنْ فَازَ فِي الْمُبَارَاةِ؟", translation: "Oyunda kim qazandı?" },
            { arabic: "فَازَ فَرِيقُنَا الْمُفَضَّلُ", translation: "Sevdiyimiz komanda qazandı" },
            { arabic: "هَذَا خَبَرٌ سَارٌّ جِدًّا", translation: "Bu çox şad xəbərdir" },
            { arabic: "نَعَمْ، لَعِبُوا بِشَكْلٍ مُمْتَازٍ", translation: "Bəli, əla oynadılar" }
        ]
    },
    {
        id: 50,
        title: "Sağollaşma",
        dialogue: [
            { arabic: "حَانَ وَقْتُ الرَّحِيلِ يا صَدِيقِي", translation: "Getmək vaxtı çatdı, dostum" },
            { arabic: "هَلْ سَتَذْهَبُ الآنَ؟", translation: "İndi gedəcəksən?" },
            { arabic: "نَعَمْ، الْوَقْتُ مُتَأَخِّرٌ", translation: "Bəli, vaxt gecdir" },
            { arabic: "سَعِدْتُ بِلِقَائِكَ كَثِيرًا", translation: "Səninlə görüşməyimə çox şad oldum" },
            { arabic: "وَأَنَا أَيْضًا يا أَخِي", translation: "Mən də hemçinin, qardaşım" },
            { arabic: "مَعَ السَّلَامَةِ", translation: "Salamat qalın (Sağ olun)" },
            { arabic: "فِي أَمَانِ اللَّهِ", translation: "Allahın amanında" },
            { arabic: "إِلَى اللِّقَاءِ قَرِيبًا", translation: "Yaxın zamanda görüşənədək" }
        ]
    },
    {
        id: 51,
        title: "Salamlaşma və Dəvət",
        dialogue: [
            { arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ", translation: "Əleykum salam və rahmatullah" },
            { arabic: "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللَّهِ", translation: "Əleykum salam və rahmatullah" },
            { arabic: "كَيْفَ حَالُكَ يا أَخِي؟", translation: "Necəsən, qardaşım?" },
            { arabic: "أَنَا بِخَيْرٍ وَالْحَمْدُ لِلَّهِ", translation: "Mən yaxşıyam, Allahu təalaya həmd olsun" },
            { arabic: "هَلْ تَدْرُسُ الْعَقِيدَةَ؟", translation: "Əqidə öyrənirsən?" },
            { arabic: "نَعَمْ، أَتَعَلَّمُ التَّوْحِيدَ كُلَّ يَوْمٍ", translation: "Bəli, hər gün təvhidi öyrənirəm" },
            { arabic: "هَذَا أَمْرٌ عَظِيمٌ جِدًّا", translation: "Bu çox əzəmətli bir işdir" },
            { arabic: "وَفَّقَكَ اللَّهُ لِكُلِّ خَيْرٍ", translation: "Allah seni hər bir xeyirə müvəffəq etsin" }
        ]
    },
    {
        id: 52,
        title: "Təvhidin Mənası",
        dialogue: [
            { arabic: "مَا هُوَ التَّوْحِيدُ؟", translation: "Təvhid nədir?" },
            { arabic: "إِفْرَادُ اللَّهِ بِالْعِبَادَةِ", translation: "İbadətdə Allahı təkləşdirməkdir" },
            { arabic: "هَلْ هُوَ وَاجِبٌ؟", translation: "O vacibdirmi?" },
            { arabic: "نَعَمْ، هُوَ أَوْجَبُ الْوَاجِبَاتِ", translation: "Bəli, o vaciblərin ən vacibidir" },
            { arabic: "لِمَاذَا خَلَقَنَا اللَّهُ؟", translation: "Allah bizi niyə yaradıb?" },
            { arabic: "خَلَقَنَا لِلْعِبَادَةِ وَحْدَهُ", translation: "Bizi yalnız Ona ibadət etmək üçün yaradıb" },
            { arabic: "مَا الدَّلِيلُ؟", translation: "Dəlil nədir?" },
            { arabic: "قَالَ تعالى: وَمَا خَلَقْتُ الْجِنَّ وَالْإِنْسَ إِلَّا لِيَعْبُدُونِ", translation: "Allah buyurur: Mən cinləri və insanları yalnız Mənə ibadət etsinlər diye yaratdım" }
        ]
    },
    {
        id: 53,
        title: "Təvhidin Qismləri",
        dialogue: [
            { arabic: "كَمْ أَقْسَامُ التَّوْحِيدِ؟", translation: "Təvhidin qismləri neçədir?" },
            { arabic: "أَقْسَامُهُ ثَلَاثَةٌ", translation: "Qismləri üçdür" },
            { arabic: "مَا هِيَ؟", translation: "Hansılardır?" },
            { arabic: "الرُّبُوبِيَّةُ، وَالْأُلُوهِيَّةُ، وَالْأَسْمَاءُ وَالصِّفَاتُ", translation: "Rübubiyyət, Uluhiyyət və Əsma-Sifət" },
            { arabic: "هَلْ يَكْفِي نَوْعٌ وَاحِدٌ؟", translation: "Tək bir növ kifayətdirmi?" },
            { arabic: "لَا، لا بُدَّ مِنْهَا جَمِيعًا", translation: "Xeyr, hamısı mütləq vacibdir" },
            { arabic: "جَزَاكَ اللَّهُ خَيْرًا", translation: "Allah sene xeyir versin" },
            { arabic: "وَإِيَّاكَ يا أَخِي", translation: "Sənə də, qardaşım" }
        ]
    },
    {
        id: 54,
        title: "Təvhid er-Rübubiyyə",
        dialogue: [
            { arabic: "مَا هُوَ تَوْحِيدُ الرُّبُوبِيَّةِ؟", translation: "Rübubiyyət təvhidi nədir?" },
            { arabic: "هُوَ إِفْرَادُ اللَّهِ بِأَفْعَالِهِ", translation: "Allahı Öz əməllərində təkləşdirməkdir" },
            { arabic: "مِثْلُ مَاذَا؟", translation: "Nə kimi?" },
            { arabic: "كَالْخَلْقِ، وَالرِّزْقِ، وَالتَّدْبِيرِ", translation: "Yaratmaq, ruzi vermək və idarə etmək kimi" },
            { arabic: "مَنْ هُوَ الْخَالِقُ؟", translation: "Yaradan kimdir?" },
            { arabic: "اللَّهُ وَحْدَهُ لا شَرِيكَ لَهُ", translation: "Şəriksiz tək olan Allahdır" },
            { arabic: "وَمَنْ هُوَ الرَّازِقُ؟", translation: "Ruzi verən kimdir?" },
            { arabic: "اللَّهُ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ", translation: "Allah böyük qüvvət sahibi Raziqdir" }
        ]
    },
    {
        id: 55,
        title: "Təvhid el-Uluhiyyə",
        dialogue: [
            { arabic: "مَا هُوَ تَوْحِيدُ الْأُلُوهِيَّةِ؟", translation: "Uluhiyyət təvhidi nədir?" },
            { arabic: "هُوَ إِفْرَادُ اللَّهِ بِأَفْعَالِ الْعِبَادِ", translation: "Bəndələrin əməllərində (ibadətdə) Allahı təkləşdirməkdir" },
            { arabic: "مِثْلُ مَاذَا؟", translation: "Nə kimi?" },
            { arabic: "كَالصَّلَاةِ، وَالدُّعَاءِ، وَالذَّبْحِ", translation: "Namaz, dua və qurban kəsmək kimi" },
            { arabic: "لِمَنْ نُصَلِّي؟", translation: "Kimin üçün namaz qılırıq?" },
            { arabic: "نُصَلِّي لِلَّهِ وَحْدَهُ", translation: "Tək Allah üçün namaz qılırıq" },
            { arabic: "وَلِمَنْ نَذْبَحُ؟", translation: "Kimin üçün qurban kəsirik?" },
            { arabic: "نَذْبَحُ لِلَّهِ وَحْدَهُ", translation: "Tək Allah üçün qurban kəsirik" }
        ]
    },
    {
        id: 56,
        title: "Təvhid el-Əsma vəs-Sifat",
        dialogue: [
            { arabic: "مَا هُوَ تَوْحِيدُ الْأَسْمَاءِ وَالصِّفَاتِ؟", translation: "Əsma və Sifət təvhidi nədir?" },
            { arabic: "إِثْبَاتُ مَا أَثْبَتَهُ اللَّهُ لِنَفْسِهِ", translation: "Allahın Özü üçün sabit etdiyini təsdiqləməkdir" },
            { arabic: "مِنْ غَيْرِ مَاذَا؟", translation: "Nələrdən uzaq olaraq?" },
            { arabic: "مِنْ غَيْرِ تَحْرِيفٍ وَلَا تَشْبِيهٍ", translation: "Təhrif və oxşatma olmadan" },
            { arabic: "هَلْ تُشْبِهُ صِفَاتُهُ الْمَخْلُوقِينَ؟", translation: "Onun sifətləri məxluqlara bənzəyir?" },
            { arabic: "لَا، لَيْسَ كَمِثْلِهِ شَيْءٌ", translation: "Xeyr, Ona bənzər heç bir şey yoxdur" },
            { arabic: "وَهُوَ السَّمِيعُ الْبَصِيرُ؟", translation: "O, Eşidən və Görəndir?" },
            { arabic: "نَعَمْ، هُوَ السَّمِيعُ الْبَصِيرُ", translation: "Bəli, O, Eşidən və Görəndir" }
        ]
    },
    {
        id: 57,
        title: "La İlahə İllallah Kəlməsi",
        dialogue: [
            { arabic: "مَا مَعْنَى لا إِلَهَ إِلا اللَّهُ؟", translation: "La ilahə illallahın mənası nədir?" },
            { arabic: "لا مَعْبُودَ بِحَقٍّ إِلا اللَّهُ", translation: "Allahdan başqa haqq معبود (ibadət olunan) yoxdur" },
            { arabic: "كَمْ رُكْنًا لَهَا؟", translation: "Onun neçə rüknü var?" },
            { arabic: "لَهَا رُكْنَانِ اثْنَانِ", translation: "Onun iki rüknü var" },
            { arabic: "مَا هُمَا؟", translation: "Hansılardır?" },
            { arabic: "النَّفْيُ وَالإِثْبَاتُ", translation: "Nəfy (inkar) və İsbat (təsdiq)" },
            { arabic: "مَا هُوَ النَّفْيُ؟", translation: "Nəfy nədir?" },
            { arabic: "لا إِلَهَ: يَنْفِي جَمِيعَ الْمَعْبُودَاتِ", translation: "'La ilahə' bütün ibadət olunanları inkar edir" }
        ]
    },
    {
        id: 58,
        title: "İbadət Nədir?",
        dialogue: [
            { arabic: "مَا هِيَ الْعِبَادَةُ؟", translation: "İbadət nədir?" },
            { arabic: "كُلُّ مَا يُحِبُّهُ اللَّهُ وَيَرْضَاهُ", translation: "Allahın sevdiyi və razı olduğu hər şeydir" },
            { arabic: "مِنَ الأَقْوَالِ وَالأَعْمَالِ؟", translation: "Sözlərdən və əməllərdən?" },
            { arabic: "نَعَمْ، الظَّاهِرَةِ وَالْبَاطِنَةِ", translation: "Bəli, aşkar və gizli olanlardan" },
            { arabic: "مِثْلُ مَاذَا؟", translation: "Nə kimi?" },
            { arabic: "كَالصِّدْقِ، وَالْخَوْفِ، وَالرَّجَاءِ", translation: "Doğruluq, qorxu və ümid kimi" },
            { arabic: "هَلْ يُصْرَفُ مِنْهَا شَيْءٌ لِغَيْرِ اللَّهِ؟", translation: "Ondan bir şey Allahdan başqasına olunarmı?" },
            { arabic: "لَا، كُلُّهَا لِلَّهِ وَحْدَهُ", translation: "Xeyr, hamısı tək Allah üçündür" }
        ]
    },
    {
        id: 59,
        title: "Şirkin Mənası",
        dialogue: [
            { arabic: "مَا هُوَ الشِّرْكُ؟", translation: "Şirk nədir?" },
            { arabic: "جَعْلُ شَرِيكٍ لِلَّهِ فِي الْعِبَادَةِ", translation: "İbadətdə Allaha şərik qoşmaqdır" },
            { arabic: "هَلْ هُوَ ذَنْبٌ عَظِيمٌ؟", translation: "O böyük günahdır?" },
            { arabic: "نَعَمْ، هُوَ أَعْظَمُ الذُّنُوبِ", translation: "Bəli, o günahların ən böyüyüdür" },
            { arabic: "هَلْ يَغْفِرُهُ اللَّهُ بِلا تَوْبَةٍ؟", translation: "Allah onu tövbəsiz bağışlayarmı?" },
            { arabic: "لَا، لا يَغْفِرُهُ اللَّهُ بِلَا تَوْبَةٍ", translation: "Xeyr, Allah onu tövbəsiz bağışlamaz" },
            { arabic: "مَا الدَّلِيلُ؟", translation: "Dəlil nədir?" },
            { arabic: "إنَّ اللَّهَ لا يَغْفِرُ أَنْ يُشْرَكَ بِهِ", translation: "Allah Ona şirk qoşulmasını bağışlamaz" }
        ]
    },
    {
        id: 60,
        title: "Böyük Şirk",
        dialogue: [
            { arabic: "مَا هُوَ الشِّرْكُ الأَكْبَرُ؟", translation: "Böyük şirk nədir?" },
            { arabic: "صَرْفُ الْعِبَادَةِ لِغَيْرِ اللَّهِ", translation: "İbadəti Allahdan başqasına etməkdir" },
            { arabic: "مَا عَقَابُ صَاحِبِهِ؟", translation: "Onu edənin cəzası nədir?" },
            { arabic: "يَخْلُدُ فِي النَّارِ إِذَا مَاتَ عَلَيْهِ", translation: "Bu halda ölərsə Cəhənnəmdə əbədi qalar" },
            { arabic: "هَلْ يُخْرِجُ مِنَ الإِسْلَامِ؟", translation: "O insanı İslamdan çıxarır?" },
            { arabic: "نَعَمْ، يُخْرِجُ مِنَ المِلَّةِ", translation: "Bəli, insanı dindən çıxarır" },
            { arabic: "نَعُوذُ بِاللَّهِ مِنَ الشِّرْكِ", translation: "Şirkdən Allaha sığınırıq" },
            { arabic: "آمِينَ يا رَبَّ العَالَمِينَ", translation: "Amin, ey aləmlərin Rəbbi" }
        ]
    },
    {
        id: 61,
        title: "Kiçik Şirk",
        dialogue: [
            { arabic: "مَا هُوَ الشِّرْكُ الأَصْغَرُ؟", translation: "Kiçik şirk nədir?" },
            { arabic: "مَا كَانَ وَسِيلَةً إِلَى الأَكْبَرِ", translation: "Böyük şirkə vəsilə olan şeydir" },
            { arabic: "مِثْلُ مَاذَا؟", translation: "Nə kimi?" },
            { arabic: "كَالرِّيَاءِ الْيَسِيرِ وَالْحَلِفِ بِغَيْرِ اللَّهِ", translation: "Azca riya və Allahdan başqasına and içmək kimi" },
            { arabic: "هَلْ يُخْرِجُ مِنَ الإِسْلَامِ؟", translation: "O insanı dindən çıxarır?" },
            { arabic: "لَا، لا يُخْرِجُ مِنَ المِلَّةِ", translation: "Xeyr, dindən çıxarmır" },
            { arabic: "وَلَكِنَّهُ ذَنْبٌ كَبِيرٌ؟", translation: "Lakin o böyük günahdır?" },
            { arabic: "نَعَمْ، هُوَ أَكْبَرُ مِنَ الكَبَائِرِ", translation: "Bəli, o böyük günahlardan da ağırdır" }
        ]
    },
    {
        id: 62,
        title: "Allah Haradadır?",
        dialogue: [
            { arabic: "أَيْنَ اللَّهُ؟", translation: "Allah haradadır?" },
            { arabic: "اللَّهُ فِي السَّمَاءِ", translation: "Allah səmadadır" },
            { arabic: "عَلَى مَاذَا؟", translation: "Nəyin üzərindədir?" },
            { arabic: "عَلَى الْعَرْشِ اسْتَوَى", translation: "Ərşə ucalmışdır" },
            { arabic: "مَا مَعْنَى اسْتَوَى؟", translation: "İstəva nə deməkdir?" },
            { arabic: "عَلَا وَارْتَفَعَ", translation: "Yüksəldi və ucaldı" },
            { arabic: "هَلْ هُوَ مَعَنَا؟", translation: "O bizimlədirmi?" },
            { arabic: "نَعَمْ، بِعِلْمِهِ وَسَمْعِهِ وَبَصَرِهِ", translation: "Bəli, elmi, eşitməsi və görməsi ilə" }
        ]
    },
    {
        id: 63,
        title: "İmanın Rüknləri",
        dialogue: [
            { arabic: "كَمْ أَرْكَانُ الإِيمَانِ؟", translation: "İmanın rüknləri neçədir?" },
            { arabic: "أَرْكَانُهُ سِتَّةٌ", translation: "Rüknləri altıdır" },
            { arabic: "اذْكُرْ الأَوَّلَ", translation: "Birincisini de" },
            { arabic: "الْإِيمَانُ بِاللَّهِ", translation: "Allaha iman gətirmək" },
            { arabic: "وَالثَّانِي؟", translation: "İkincisi?" },
            { arabic: "وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ", translation: "Mələklərinə, kitablarına, elçilərinə" },
            { arabic: "وَالْبَاقِي؟", translation: "Qalanı?" },
            { arabic: "وَالْيَوْمِ الآخِرِ وَالْقَدَرِ خَيْرِهِ وَشَرِّهِ", translation: "Axirət gününə, qədərin xeyrinə və şərinə" }
        ]
    },
    {
        id: 64,
        title: "İslamın Rüknləri",
        dialogue: [
            { arabic: "كَمْ أَرْكَانُ الإِسْلَامِ؟", translation: "İslamın rüknləri neçədir?" },
            { arabic: "أَرْكَانُهُ خَمْسَةٌ", translation: "Rüknləri beşdir" },
            { arabic: "مَا هُوَ الرُّكْنُ الأَوَّلُ؟", translation: "Birinci rükn nədir?" },
            { arabic: "شَهَادَةُ أَنْ لا إِلَهَ إِلا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ", translation: "Şəhadət vermək ki, Allahdan başqa haqq məbud yoxdur və Məhəmməd Onun elçisidir" },
            { arabic: "وَالثَّانِي؟", translation: "İkincisi?" },
            { arabic: "إِقَامُ الصَّلَاةِ", translation: "Namaz qılmaq" },
            { arabic: "وَالْبَاقِي؟", translation: "Qalanı?" },
            { arabic: "إِيتَاءُ الزَّكَاةِ، وَصَوْمُ رَمَضَانَ، وَحَجُّ الْبَيْتِ", translation: "Zəkat vermək, Ramazan orucu və Həcc ziyarəti" }
        ]
    },
    {
        id: 65,
        title: "İhsan Məqamı",
        dialogue: [
            { arabic: "مَا هُوَ الإِحْسَانُ؟", translation: "İhsan nədir?" },
            { arabic: "أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ", translation: "Allaha Onu görürmüş kimi ibadət etməyindir" },
            { arabic: "فَإِنْ لَمْ أَكُنْ أَرَاهُ؟", translation: "Bəs Onu görmürəmsə?" },
            { arabic: "فَإِنَّهُ يَرَاكَ", translation: "Şübhəsiz ki, O seni görür" },
            { arabic: "هَلْ هُوَ أَعْلَى المَرَاتِبِ؟", translation: "O ən uca mərtəbədir?" },
            { arabic: "نَعَمْ، هُوَ أَعْلَى مَرَاتِبِ الدِّينِ", translation: "Bəli, o dinin ən uca mərtəbəsidir" },
            { arabic: "بَارَكَ اللَّهُ فِيكَ", translation: "Allah sene bərəkət versin" },
            { arabic: "وَفِيكَ بَارَكَ اللَّهُ", translation: "Allah sana da bərəkət versin" }
        ]
    },
    {
        id: 66,
        title: "Quran Kelamullahdır",
        dialogue: [
            { arabic: "مَا هُوَ الْقُرْآنُ؟", translation: "Quran nədir?" },
            { arabic: "كَلَامُ اللَّهِ تَعَالَى", translation: "Uca Allahın kəlamıdır" },
            { arabic: "هَلْ هُوَ مَخْلُوقٌ؟", translation: "O yaradılıb (məxluqdur)?" },
            { arabic: "لَا، غَيْرُ مَخْلُوقٍ", translation: "Xeyr, məxluq deyildir" },
            { arabic: "عَلَى مَنْ نَزَلَ؟", translation: "Kimə nazil olub?" },
            { arabic: "نَزَلَ عَلَى مُحَمَّدٍ ﷺ", translation: "Məhəmmədə ﷺ nazil olub" },
            { arabic: "بِأَيِّ لُغَةٍ؟", translation: "Hansı dildə?" },
            { arabic: "بِاللُّغَةِ الْعَرَبِيَّةِ الْمُبِينَةِ", translation: "Aydın ərəb dilində" }
        ]
    },
    {
        id: 67,
        title: "Sünnəyə Tabe Olmaq",
        dialogue: [
            { arabic: "مَا هِيَ السُّنَّةُ؟", translation: "Sünnə nədir?" },
            { arabic: "مَا أُثِرَ عَنِ النَّبِيِّ ﷺ", translation: "Peyğəmbərdən ﷺ nəql olunan şeylərdir" },
            { arabic: "مِنْ قَوْلٍ أَوْ فِعْلٍ؟", translation: "Söz və ya əməldən?" },
            { arabic: "نَعَمْ، مِنْ قَوْلٍ أَوْ فِعْلٍ أَوْ تَقْرِيرٍ", translation: "Bəli, söz, əməl və təsdiqdən" },
            { arabic: "هَلْ اتِّبَاعُهَا وَاجِبٌ؟", translation: "Ona tabe olmaq vacibdir?" },
            { arabic: "نَعَمْ، وَاجِبٌ عَلَى كُلِّ مُسْلِمٍ", translation: "Bəli, hər bir müsəlmana vacibdir" },
            { arabic: "مَا الدَّلِيلُ؟", translation: "Dəlil nədir?" },
            { arabic: "قَالَ تعالى: وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ", translation: "Allah buyurur: Peyğəmbər sizə nə verdisə onu götürün" }
        ]
    },
    {
        id: 68,
        title: "Bidət Nədir?",
        dialogue: [
            { arabic: "مَا هِيَ الْبِدْعَةُ؟", translation: "Bidət nədir?" },
            { arabic: "مَا أُحْدِثَ فِي الدِّينِ", translation: "Dində sonradan uydurulan şeydir" },
            { arabic: "هَلْ فِي الدِّينِ بِدْعَةٌ حَسَنَةٌ؟", translation: "Dində yaxşı bidət varmı?" },
            { arabic: "لَا، كُلُّ بِدْعَةٍ ضَلَالَةٌ", translation: "Xeyr, hər bir bidət zəlalətdir" },
            { arabic: "مَنْ قَالَ هَذَا؟", translation: "Bunu kim deyib?" },
            { arabic: "قَالَهُ النَّبِيُّ ﷺ", translation: "Peyğəmbər ﷺ buyurub" },
            { arabic: "هَلْ تُقْبَلُ الْبِدْعَةُ؟", translation: "Bidət qəbul olunur?" },
            { arabic: "لَا، هِيَ مَرْدُودَةٌ عَلَى صَاحِبِهَا", translation: "Xeyr, sahibinə rədd olunur" }
        ]
    },
    {
        id: 69,
        title: "Sələfi-Saleh Kimdir?",
        dialogue: [
            { arabic: "مَنْ هُمُ السَّلَفُ الصَّالِحُ؟", translation: "Sələfi-Saleh kimlərdir?" },
            { arabic: "الصَّحَابَةُ وَالتَّابِعُونَ", translation: "Səhabələr və tabiinlərdir" },
            { arabic: "وَمَنْ بَعْدَهُمْ؟", translation: "Və onlardan sonrakılar?" },
            { arabic: "وَأَتْبَاعُهُمْ بِإِحْسَانٍ", translation: "Və onlar gözəl şəkildə izləyənlərdir" },
            { arabic: "لِمَاذَا نَتَّبِعُهُمْ؟", translation: "Niyə onlarin yoluna tabe oluruq?" },
            { arabic: "لِأَنَّهُمْ أَعْلَمُ النَّاسِ بِالْحَقِّ", translation: "Çünki onlar haqqı en yaxşı bilənlərdir" },
            { arabic: "هَلْ نَفْهَمُ الدِّينَ بِفَهْمِهِمْ؟", translation: "Dini onların anlayışı ilə anlayırıq?" },
            { arabic: "نَعَمْ، هَذَا هُوَ الطَّرِيقُ الصَّحِيحُ", translation: "Bəli, doğru yol budur" }
        ]
    },
    {
        id: 70,
        title: "İbadətdə İxlas",
        dialogue: [
            { arabic: "مَا هُوَ الْإِخْلَاصُ؟", translation: "İxlas nədir?" },
            { arabic: "قَصْدُ اللَّهِ وَحْدَهُ بِالْعَمَلِ", translation: "Əməldə yalnız Allahın razılığını qəsd etməkdir" },
            { arabic: "بِلَا رِيَاءٍ؟", translation: "Riyasız?" },
            { arabic: "نَعَمْ، بِلَا رِيَاءٍ وَلَا سُمْعَةٍ", translation: "Bəli, riyasız və şöhrətsiz" },
            { arabic: "هَلْ يُقْبَلُ الْعَمَلُ بِدُونِهِ؟", translation: "Əməl onsuz qəbul olar?" },
            { arabic: "لَا، لا يُقْبَلُ أَبَدًا", translation: "Xeyr, heç vaxt qəbul olmaz" },
            { arabic: "اللَّهُمَّ ارْزُقْنَا الْإِخْلَاصَ", translation: "Allahım, bizə ixlas ruzisi ver" },
            { arabic: "آمِينَ يا رَبَّ العَالَمِينَ", translation: "Amin, ey aləmlərin Rəbbi" }
        ]
    },
    {
        id: 71,
        title: "Peyğəmbərə Tabe Olmaq (Mütabaə)",
        dialogue: [
            { arabic: "مَا هِيَ الْمُتَابَعَةُ؟", translation: "Mütabaə (tabeçilik) nədir?" },
            { arabic: "اتِّبَاعُ النَّبِيِّ ﷺ فِي الْعِبَادَةِ", translation: "İbadətdə Peyğəmbərə ﷺ tabe olmaqdır" },
            { arabic: "هَلْ هِيَ شَرْطٌ لِقَبُولِ الْعَمَلِ؟", translation: "O əməlin qəbul şərtidir?" },
            { arabic: "نَعَمْ، هِيَ الشَّرْطُ الثَّانِي", translation: "Bəli, o ikinci şərtdir" },
            { arabic: "وَمَا هُوَ الشَّرْطُ الأَوَّلُ؟", translation: "Bəs birinci şərt nədir?" },
            { arabic: "الْإِخْلَاصُ لِلَّهِ", translation: "Allah üçün ixlas" },
            { arabic: "فَمَنْ عَمِلَ عَمَلًا بِلا اتِّبَاعٍ؟", translation: "Kim tabe olmadan bir əməl edərsə?" },
            { arabic: "فَهُوَ رَدٌّ عَلَيْهِ", translation: "O əməl ona rədd olunur" }
        ]
    },
    {
        id: 72,
        title: "Dua İbadətdir",
        dialogue: [
            { arabic: "مَا هِيَ مَكَانَةُ الدُّعَاءِ؟", translation: "Duanın məqamı nədir?" },
            { arabic: "الدُّعَاءُ هُوَ الْعِبَادَةُ", translation: "Dua ibadətin özüdür" },
            { arabic: "مَنْ نَدْعُو؟", translation: "Kimə dua edirik?" },
            { arabic: "نَدْعُو اللَّهَ وَحْدَهُ", translation: "Tək Allaha dua edirik" },
            { arabic: "هَلْ يَجُوزُ دُعَاءُ غَيْرِ اللَّهِ؟", translation: "Allahdan başqasına dua etmək olarmı?" },
            { arabic: "لَا، هَذَا شِرْكٌ أَكْبَرُ", translation: "Xeyr, bu böyük şirkdir" },
            { arabic: "حَتَّى لَوْ كَانَ مَلَكًا أَوْ نَبِيًّا؟", translation: "Hətta mələk və ya peyğəmbər olsa da?" },
            { arabic: "نَعَمْ، لا يُدْعَى إِلا اللَّهُ", translation: "Bəli, tək Allahdan başqasına dua olunmaz" }
        ]
    },
    {
        id: 73,
        title: "Ölülərə Dua Etmək",
        dialogue: [
            { arabic: "هَلْ يَجُوزُ دُعَاءُ الأَمْوَاتِ؟", translation: "Ölülərə dua etmək olarmı?" },
            { arabic: "لَا، لا يَجُوزُ أَبَدًا", translation: "Xeyr, qətiyyən olmaz" },
            { arabic: "لِمَاذَا؟", translation: "Niyə?" },
            { arabic: "لِأَنَّهُمْ لا يَسْمَعُونَ وَلَا يَسْتَجِيبُونَ", translation: "Çünki onlar eşitmir və cavab verə bilmirlər" },
            { arabic: "مَاذَا يَمْلِكُونَ؟", translation: "Onlar nəyə sahibdirlər?" },
            { arabic: "لا يَمْلِكُونَ نَفْعًا وَلَا ضَرًّا", translation: "Nə bir xeyrə, nə zərərə sahibdirlər" },
            { arabic: "فَمَنْ يَدْفَعُ الضُّرَّ؟", translation: "Zərəri kim dəf edir?" },
            { arabic: "اللَّهُ وَحْدَهُ يَدْفَعُ الضُّرَّ", translation: "Zərəri tək Allah dəf edir" }
        ]
    },
    {
        id: 74,
        title: "Qurban Kəsmək",
        dialogue: [
            { arabic: "لِمَنْ نَذْبَحُ الْقُرْبَانَ؟", translation: "Qurbanı kimin üçün kəsirik?" },
            { arabic: "نَذْبَحُ لِلَّهِ وَحْدَهُ", translation: "Tək Allah üçün kəsirik" },
            { arabic: "مَا حُكْمُ الذَّبْحِ لِغَيْرِ اللَّهِ؟", translation: "Allahdan başqasına qurban kəsməyin hökmü nədir?" },
            { arabic: "شِرْكٌ أَكْبَرُ يُخْرِجُ مِنَ المِلَّةِ", translation: "İnsanı dindən çıxaran böyük şirkdir" },
            { arabic: "مِثْلُ الذَّبْحِ لِلْقُبُورِ؟", translation: "Qəbirlər üçün kəsmək kimi?" },
            { arabic: "نَعَمْ، أَوْ لِلْجِنِّ وَالأَوْلِيَاءِ", translation: "Bəli, yaxud cinlər və övliyalar üçün" },
            { arabic: "مَاذَا قَالَ النَّبِيُّ ﷺ؟", translation: "Peyğəmbər ﷺ nə buyurub?" },
            { arabic: "لَعَنَ اللَّهُ مَنْ ذَبَحَ لِغَيْرِ اللَّهِ", translation: "Allahdan başqasına qurban kəsənə Allah lənət etsin" }
        ]
    },
    {
        id: 75,
        title: "Nəzir Etmək",
        dialogue: [
            { arabic: "مَا هُوَ النَّذْرُ؟", translation: "Nəzir nədir?" },
            { arabic: "إِيجَابُ الشَّخْصِ عَلَى نَفْسِهِ طَاعَةً", translation: "Şəxsin özünə bir itaəti vacib etməsidir" },
            { arabic: "هَلْ النَّذْرُ عِبَادَةٌ؟", translation: "Nəzir ibadətdir?" },
            { arabic: "نَعَمْ، النَّذْرُ عِبَادَةٌ لِلَّهِ", translation: "Bəli, nəzir Allah üçün ibadətdir" },
            { arabic: "هَلْ يَجُوزُ النَّذْرُ لِلْأَوْلِيَاءِ؟", translation: "Övliyalara nəzir etmək olarmı?" },
            { arabic: "لَا، هَذَا شِرْكٌ فِي الْعِبَادَةِ", translation: "Xeyr, bu ibadətdə şirkdir" },
            { arabic: "لِمَنْ يَكُونُ النَّذْرُ؟", translation: "Nəzir kimə olunmalıdır?" },
            { arabic: "يَكُونُ لِلَّهِ وَحْدَهُ", translation: "Yalnız tək Allaha olunmalıdır" }
        ]
    },
    {
        id: 76,
        title: "Təvəkkül Nədir?",
        dialogue: [
            { arabic: "مَا هُوَ التَّوَكُّلُ؟", translation: "Təvəkkül nədir?" },
            { arabic: "اعْتِمَادُ الْقَلْبِ عَلَى اللَّهِ", translation: "Qəlbin Allaha bel bağlamasıdır" },
            { arabic: "مَعَ مَاذَا؟", translation: "Nə ilə bərabər?" },
            { arabic: "مَعَ الأَخْذِ بِالأَسْبَابِ", translation: "Səbəblərdən tutunmaqla bərabər" },
            { arabic: "هَلْ نَتْرُكُ الأَسْبَابَ؟", translation: "Səbəbləri tərk edirik?" },
            { arabic: "لَا، تَرْكُهَا جَهْلٌ", translation: "Xeyr, onları tərk etmək cahillikdir" },
            { arabic: "وَمَنْ هُوَ الْحَسِيبُ؟", translation: "Kifayət edən kimdir?" },
            { arabic: "اللَّهُ وَحْدَهُ كَافِي عِبَادِهِ", translation: "Tək Allah bəndələrinə kifayətdir" }
        ]
    },
    {
        id: 77,
        title: "Xovf və Rəca (Qorxu və Ümid)",
        dialogue: [
            { arabic: "مَا هُوَ الْخَوْفُ الْمَحْمُودُ؟", translation: "Bəyənilən qorxu nədir?" },
            { arabic: "مَا حَجَزَكَ عَنْ مَعَاصِي اللَّهِ", translation: "Səni Allahın günahlarından çəkindirəndir" },
            { arabic: "وَمَا هُوَ الرَّجَاءُ؟", translation: "Bəs ümid nədir?" },
            { arabic: "الطَّمَعُ فِي رَحْمَةِ اللَّهِ", translation: "Allahın rəhmətinə tamah salmaqdır" },
            { arabic: "كَيْفَ نَجْمَعُ بَيْنَهُمَا؟", translation: "İkisini necə cəmləyirik?" },
            { arabic: "نَعْبُدُ اللَّهَ خَوْفًا وَطَمَعًا", translation: "Allaha qorxu və ümidlə ibadət edirik" },
            { arabic: "كَالْجَنَاحَيْنِ لِلطَّائِرِ؟", translation: "Quşun iki qanadı kimi?" },
            { arabic: "نَعَمْ، تَمَامًا كَالْجَنَاحَيْنِ", translation: "Bəli, eynilə iki qanad kimi" }
        ]
    },
    {
        id: 78,
        title: "Mələklərə İman",
        dialogue: [
            { arabic: "مِمَّ خُلِقَتِ المَلَائِكَةُ؟", translation: "Mələklər nədən yaradılıb?" },
            { arabic: "خُلِقَتْ مِنْ نُورٍ", translation: "Nurdan yaradılıblar" },
            { arabic: "هَلْ يَأْكُلُونَ وَيَشْرَبُونَ؟", translation: "Yeyib içirlər?" },
            { arabic: "لَا، لا يَأْكُلُونَ وَلا يَشْرَبُونَ", translation: "Xeyr, yeyib içmirlər" },
            { arabic: "هَلْ يَعْصُونَ اللَّهَ؟", translation: "Allaha asi olurlar?" },
            { arabic: "لَا، لا يَعْصُونَ اللَّهَ أَبَدًا", translation: "Xeyr, Allaha heç vaxt asi olmazlar" },
            { arabic: "مَنْ أَفْضَلُ المَلَائِكَةِ؟", translation: "Mələklərin ən üstünü kimdir?" },
            { arabic: "جِبْرِيلُ عَلَيْهِ السَّلَامُ", translation: "Cəbrayıl əleyhissalamdır" }
        ]
    },
    {
        id: 79,
        title: "Müqəddəs Kitablar",
        dialogue: [
            { arabic: "مَا هِيَ الْكُتُبُ السَّمَاوِيَّةُ؟", translation: "Səmavi kitablar hansılardır?" },
            { arabic: "التَّوْرَاةُ، وَالْإِنْجِيلُ، وَالزَّبُورُ، وَالْقُرْآنُ", translation: "Tövrat, İncil, Zəbur və Quran" },
            { arabic: "مَا هُوَ آخِرُ الْكُتُبِ؟", translation: "Sonuncu kitab hansıdır?" },
            { arabic: "الْقُرْآنُ الْكَرِيمُ", translation: "Qurani-Kərimdir" },
            { arabic: "هَلْ حُفِظَ الْقُرْآنُ مِنَ التَّحْرِيفِ؟", translation: "Quran dəyişdirilməkdən qorunub?" },
            { arabic: "نَعَمْ، حَفِظَهُ اللَّهُ تَعَالَى", translation: "Bəli, onu Uca Allah qorumuşdur" },
            { arabic: "مَا الدَّلِيلُ؟", translation: "Dəlil nədir?" },
            { arabic: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ", translation: "Biz zikri (Quranı) Biz endirdik və onu Biz qoruyacağıq" }
        ]
    },
    {
        id: 80,
        title: "Peyğəmbərlərə İman",
        dialogue: [
            { arabic: "مَنْ هُوَ أَوَّلُ الرُّسُلِ؟", translation: "İlk elçi kimdir?" },
            { arabic: "نُوحٌ عَلَيْهِ السَّلَامُ", translation: "Nuh əleyhissalamdır" },
            { arabic: "وَمَنْ هُوَ خَاتَمُ النَّبِيِّينَ؟", translation: "Sonuncu peyğəmbər kimdir?" },
            { arabic: "مُحَمَّدٌ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ", translation: "Məhəmməd sallallahu əleyhi və səlləmdir" },
            { arabic: "هَلْ يَعْتَقِدُ المُسْلِمُ بِجَمِيعِ الأَنْبِيَاءِ؟", translation: "Müsəlman bütün peyğəmbərlərə inanır?" },
            { arabic: "نَعَمْ، نُؤْمِنُ بِهِمْ جَمِيعًا", translation: "Bəli, onların hamısına inanırıq" },
            { arabic: "مَا حُكْمُ مَنْ كَفَرَ بِنَبِيٍّ وَاحِدٍ؟", translation: "Bir peyğəmbəri inkar edənin hökmü nədir?" },
            { arabic: "فَقَدْ كَفَرَ بِجَمِيعِ الأَنْبِيَاءِ", translation: "O, bütün peyğəmbərləri inkar etmiş olar" }
        ]
    },
    {
        id: 81,
        title: "Axirət Gününə İman",
        dialogue: [
            { arabic: "مَا هُوَ الْيَوْمُ الآخِرُ؟", translation: "Axirət günü nədir?" },
            { arabic: "يَوْمُ الْقِيَامَةِ وَالْحِسَابِ", translation: "Qiyamət və hesab günüdür" },
            { arabic: "مَاذَا بَعْدَ المَوْتِ؟", translation: "Ölümdən sonra nə var?" },
            { arabic: "الْبَعْثُ وَالْحَشْرُ وَالْحِسَابُ", translation: "Dirilmə, məhşər və hesab" },
            { arabic: "هَلْ نُؤْمِنُ بِالْجَنَّةِ وَالنَّارِ؟", translation: "Cənnət və Cəhənnəmə inanırıq?" },
            { arabic: "نَعَمْ، هُمَا مَخْلُوقَتَانِ الآنَ", translation: "Bəli, onlar hal-hazırda yaradılıblar" },
            { arabic: "هَلْ تَفْنَيَانِ؟", translation: "Məhv olacaqlar?" },
            { arabic: "لَا، لا تَفْنَيَانِ أَبَدًا", translation: "Xeyr, heç vaxt yok olmayacaqlar" }
        ]
    },
    {
        id: 82,
        title: "Qədərə İman",
        dialogue: [
            { arabic: "مَا هُوَ الْقَدَرُ؟", translation: "Qədər nədir?" },
            { arabic: "تَقْدِيرُ اللَّهِ لِلْكَائِنَاتِ", translation: "Allahın varlıqlar üçün müəyyən etdiyi ölçüdür" },
            { arabic: "كَمْ مَرَاتِبُهُ؟", translation: "Mərtəbələri neçədir?" },
            { arabic: "مَرَاتِبُهُ أَرْبَعٌ", translation: "Mərtəbələri dörd dənədir" },
            { arabic: "اذْكُرْ الأُولَى", translation: "Birincisini de" },
            { arabic: "الْعِلْمُ ثُمَّ الْكِتَابَةُ", translation: "Elm, sonra Yazı" },
            { arabic: "وَالثَّانِيَةُ؟", translation: "İkincisi?" },
            { arabic: "الْمَشِيئَةُ ثُمَّ الْخَلْقُ", translation: "İstək (Məşiyyət), sonra Yaradılış" }
        ]
    },
    {
        id: 83,
        title: "Qəbir Sualı",
        dialogue: [
            { arabic: "كَمْ مَلَكًا يَأْتِيَانِ فِي الْقَبْرِ؟", translation: "Qəbirdə neçə mələk gəlir?" },
            { arabic: "مَلَكَانِ اثْنَانِ", translation: "İki mələk" },
            { arabic: "مَا اسْمُهُمَا؟", translation: "Adları nədir?" },
            { arabic: "مُنْكَرٌ وَنَكِيرٌ", translation: "Münkər və Nəkir" },
            { arabic: "مَاذَا يَسْأَلَانِ؟", translation: "Nə soruşurlar?" },
            { arabic: "عَنْ الرَّبِّ وَالدِّينِ وَالنَّبِيِّ", translation: "Rəbb, Din və Peyğəmbər haqqında" },
            { arabic: "مَنْ يُجِيبُ الصَّحِيحَ؟", translation: "Doğru cavabı kim verəcək?" },
            { arabic: "الْمُؤْمِنُ الصَّادِقُ", translation: "Səmimi mömin" }
        ]
    },
    {
        id: 84,
        title: "Mizan və Hesab",
        dialogue: [
            { arabic: "مَا هُوَ الْمِيزَانُ؟", translation: "Mizan nədir?" },
            { arabic: "مِيزَانٌ حَقِيقِيٌّ يَوْمَ الْقِيَامَةِ", translation: "Qiyamət günü həqiqi tərəzidir" },
            { arabic: "مَاذَا يُوزَنُ فِيهِ؟", translation: "Onda nə çəkiləcək?" },
            { arabic: "أَعْمَالُ العِبَادِ", translation: "Bəndələrin əməlləri" },
            { arabic: "هَلْ لَهُ كِفَّتَانِ؟", translation: "Onun iki gözü var?" },
            { arabic: "نَعَمْ، لَهُ كِفَّتَانِ حَقِيقِيَّتَانِ", translation: "Bəli, onun iki həqiqi gözü var" },
            { arabic: "مَا أَثْقَلُ شَيْءٍ فِيهِ؟", translation: "Onda ən ağır gələn şey nədir?" },
            { arabic: "التَّوْحِيدُ وَحُسْنُ الْخُلُقِ", translation: "Təvhid və gözəl əxlaq" }
        ]
    },
    {
        id: 85,
        title: "Səhabələri Sevmək",
        dialogue: [
            { arabic: "مَنْ هُمُ الصَّحَابَةُ؟", translation: "Səhabələr kimlərdir?" },
            { arabic: "مَنْ لَقِيَ النَّبِيَّ ﷺ مُؤْمِنًا بِهِ", translation: "Peyğəmbərlə ﷺ mömin olaraq görüşənlərdir" },
            { arabic: "وَـمَاتَ عَلَى الإِيمَانِ؟", translation: "Və iman üzərə ölənlər?" },
            { arabic: "نَعَمْ، وَمَاتَ عَلَى الإِسْلَامِ", translation: "Bəli, və İslam üzrə ölənlər" },
            { arabic: "مَا وَاجِبُنَا نَحْوَهُمْ؟", translation: "Onlara qarşı borcumuz nədir?" },
            { arabic: "مَحَبَّتُهُمْ وَالتَّرَضِّي عَنْهُمْ", translation: "Onları sevmək və onlar üçün 'radiyallahu anh' demək" },
            { arabic: "هَلْ نَسُبُّ أَحَدًا مِنْهُمْ؟", translation: "Onlardan birinə söyüş söyürük?" },
            { arabic: "لَا، سَبُّهُمْ حَرَامٌ وَضَلَالٌ", translation: "Xeyr, onları söymək haramdır və zəlalətdir" }
        ]
    },
    {
        id: 86,
        title: "Xuləfai-Raşidin",
        dialogue: [
            { arabic: "مَنْ أَفْضَلُ الصَّحَابَةِ؟", translation: "Səhabələrin ən üstünü kimdir?" },
            { arabic: "أَبُو بَكْرٍ الصِّدِّيقُ", translation: "Əbu Bəkr əs-Siddiqdir" },
            { arabic: "مَنْ بَعْدَهُ؟", translation: "Ondan sonra kimdir?" },
            { arabic: "عُمَرُ بْنُ الْخَطَّابِ", translation: "Ömər ibn əl-Xəttabdır" },
            { arabic: "ثُمَّ مَنْ؟", translation: "Sonra kimdir?" },
            { arabic: "عُثْمَانُ بْنُ عَفَّانَ", translation: "Osman ibn Əffandır" },
            { arabic: "ثُمَّ مَنْ؟", translation: "Sonra kimdir?" },
            { arabic: "عَلِيُّ بْنُ أَبِي طَالِبٍ", translation: "Əli ibn Əbi Talibdir" }
        ]
    },
    {
        id: 87,
        title: "Peyğəmbərin Əhli-Beyti",
        dialogue: [
            { arabic: "مَنْ هُمْ أَهْلُ بَيْتِ النَّبِيِّ ﷺ؟", translation: "Peyğəmbərin ﷺ Əhli-beyti kimlərdir?" },
            { arabic: "أَزْوَاجُهُ وَذُرِّيَّتُهُ وَآلُهُ الْمُؤْمِنُونَ", translation: "Zövcələri, zürriyyəti və mömin qohumlarıdır" },
            { arabic: "مَا وَاجِبُنَا نَحْوَهُمْ؟", translation: "Onlara qarşı borcumuz nədir?" },
            { arabic: "نُحِبُّهُمْ وَنَحْتَرِمُهُمْ", translation: "Onları sevirik və hörmət edirik" },
            { arabic: "مِنْ غَيْرِ غُلُوٍّ؟", translation: "Həddi aşmadan?" },
            { arabic: "نَعَمْ، بِلَا غُلُوٍّ وَلَا جَفَاءٍ", translation: "Bəli, həddi aşmadan və laqeyd olmadan" },
            { arabic: "مَنْ أُمَّهَاتُ الْمُؤْمِنِينَ؟", translation: "Möminlərin anaları kimlərdir?" },
            { arabic: "أَزْوَاجُ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ", translation: "Peyğəmbərin zövcələridir (əleyhissələm)" }
        ]
    },
    {
        id: 88,
        title: "Namazın Böyüklüyü",
        dialogue: [
            { arabic: "مَا هِيَ الصَّلَاةُ؟", translation: "Namaz nədir?" },
            { arabic: "عِمَادُ الدِّينِ", translation: "Dinin sütunudur" },
            { arabic: "كَمْ صَلَاةً فِي الْيَوْمِ؟", translation: "Gündə neçə namaz var?" },
            { arabic: "خَمْسُ صَلَوَاتٍ فِي الْيَوْمِ وَاللَّيْلَةِ", translation: "Gecə və gündüzdə beş namaz var" },
            { arabic: "مَا حُكْمُ تَرْكِهَا؟", translation: "Onu tərk etməyin hökmü nədir?" },
            { arabic: "تَرْكُ الصَّلَاةِ كُفْرٌ", translation: "Namazı tərk etmək küfürdür" },
            { arabic: "مَا الدَّلِيلُ؟", translation: "Dəlil nədir?" },
            { arabic: "الْعَهْدُ الَّذِي بَيْنَنَا وَبَيْنَهُمُ الصَّلَاةُ", translation: "Bizimlə onlar arasındakı əhd namazdır" }
        ]
    },
    {
        id: 89,
        title: "Dəstəmazın Şərtləri",
        dialogue: [
            { arabic: "مَا هُوَ الْوُضُوءُ؟", translation: "Dəstəmaz nədir?" },
            { arabic: "الطَّهَارَةُ لِلصَّلَاةِ", translation: "Namaz üçün təmizlikdir" },
            { arabic: "هَلْ تُقْبَلُ الصَّلَاةُ بِدُونِهِ؟", translation: "Namaz onsuz qəbul olarmı?" },
            { arabic: "لَا، لا تُقْبَلُ صَلَاةٌ بِغَيْرِ طُهُورٍ", translation: "Xeyr, təharətsiz namaz qəbul olmaz" },
            { arabic: "مَا هُوَ miftahul-salah?", translation: "Namazın açarı nədir?" },
            { arabic: "الطَّهُورُ هُوَ مِفْتَاحُ الصَّلَاةِ", translation: "Təharət namazın açarıdır" },
            { arabic: "جَزَاكَ اللَّهُ خَيْرًا", translation: "Allah sene xeyir versin" },
            { arabic: "وَإِيَّاكَ يا أَخِي", translation: "Sənə də, qardaşım" }
        ]
    },
    {
        id: 90,
        title: "Zəkatın Fərziyyəti",
        dialogue: [
            { arabic: "مَا هِيَ الزَّكَاةُ؟", translation: "Zəkat nədir?" },
            { arabic: "حَقٌّ وَاجِبٌ فِي الْمَالِ", translation: "Malda olan vacib haqqdır" },
            { arabic: "لِمَنْ تُعْطَى؟", translation: "Kimsə verilir?" },
            { arabic: "لِلْفُقَرَاءِ وَالْمَسَاكِينِ", translation: "Kasıblara və ehtiyac sahiblərinə" },
            { arabic: "هَلْ هِيَ رُكْنٌ؟", translation: "O rükndür?" },
            { arabic: "نَعَمْ، هِيَ الرُّكْنُ الثَّالِثُ", translation: "Bəli, o üçüncü rükndür" },
            { arabic: "مَا فَائِدَتُهَا؟", translation: "Onun faydası nədir?" },
            { arabic: "تُطَهِّرُ الْمَالَ وَالنَّفْسَ", translation: "Malı və nəfsi təmizləyir" }
        ]
    },
    {
        id: 91,
        title: "Ramazan Orucu",
        dialogue: [
            { arabic: "مَتَى نَصُومُ؟", translation: "Ne vaxt oruc tuturuq?" },
            { arabic: "فِي شَهْرِ رَمَضَانَ", translation: "Ramazan ayında" },
            { arabic: "مَا هُوَ الصِّيَامُ؟", translation: "Oruc nədir?" },
            { arabic: "الْإِمْسَاكُ عَنِ الْمُفْطِرَاتِ", translation: "Orucu pozan şeylərdən çəkinməkdir" },
            { arabic: "مِنْ مَتَى؟", translation: "Nə vaxtdan?" },
            { arabic: "مِنْ طُلُوعِ الْفَجْرِ إِلَى غُرُوبِ الشَّمْسِ", translation: "Fəcr doğandan gün batana qədər" },
            { arabic: "مَعَ النِّيَّةِ؟", translation: "Niyyətlə bərabər?" },
            { arabic: "نَعَمْ، مَعَ النِّيَّةِ فِي الْقَلْبِ", translation: "Bəli, qəlbdə olan niyyətlə bərabər" }
        ]
    },
    {
        id: 92,
        title: "Həcc İbadəti",
        dialogue: [
            { arabic: "أَيْنَ نَحُجُّ؟", translation: "Həcci harada edirik?" },
            { arabic: "إِلَى بَيْتِ اللَّهِ الْحَرَامِ", translation: "Allahın möhtərəm evinə (Kəbəyə)" },
            { arabic: "كَمْ مَرَّةً فِي الْعُمْرِ؟", translation: "Ömürdə neçə dəfə?" },
            { arabic: "مَرَّةً وَاحِدَةً فِي الْعُمْرِ", translation: "Ömürdə bircə dəfə" },
            { arabic: "عَلَى مَنْ يَجِبُ؟", translation: "Kimə vacibdir?" },
            { arabic: "عَلَى كُلِّ مُسْتَطِيعٍ", translation: "İmkanı çatan hər kəsə" },
            { arabic: "مَا جَزَاءُ الْحَجِّ الْمَبْرُورِ؟", translation: "Qəbul olunmuş həccin mükafatı nədir?" },
            { arabic: "الْجَنَّةُ", translation: "Cənnətdir" }
        ]
    },
    {
        id: 93,
        title: "Yaxşılığı Əmr Etmək",
        dialogue: [
            { arabic: "مَا هُوَ الْأَمْرُ بِالْمَعْرُوفِ؟", translation: "Yaxşılığı əmr etmək nədir?" },
            { arabic: "الدَّعْوَةُ إِلَى كُلِّ خَيْرٍ", translation: "Hər bir xeyirə dəvət etməkdir" },
            { arabic: "وَالنَّهْيُ عَنِ الْمُنْكَرِ؟", translation: "Pislikdən çəkindirmək nədir?" },
            { arabic: "التَّحْذِيرُ مِنْ كُلِّ شَرٍّ", translation: "Hər bir şərdən çəkindirməkdir" },
            { arabic: "كَيْفَ نَدْعُو؟", translation: "Necə dəvət edirik?" },
            { arabic: "بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ", translation: "Hikmətlə və gözəl öyüd-nəsihətlə" },
            { arabic: "بِالرِّفْقِ أَمْ بِالشِّدَّةِ؟", translation: "Mülayimliklə, yoxsa sərtliklə?" },
            { arabic: "بِالرِّفْقِ وَاللِّينِ", translation: "Mülayimliklə və yumuşaqlıqla" }
        ]
    },
    {
        id: 94,
        title: "Doğru Sözlü Olmaq",
        dialogue: [
            { arabic: "مَا حُكْمُ الصِّدْقِ؟", translation: "Doğruluğun hökmü nədir?" },
            { arabic: "الصِّدْقُ وَاجِبٌ فِي الإِسْلَامِ", translation: "Doğruluq İslamda vacibdir" },
            { arabic: "إِلَى أَيْنَ يَهْدِي الصِّدْقُ؟", translation: "Doğruluq haraya aparır?" },
            { arabic: "يَهْدِي إِلَى الْبِرِّ", translation: "Yaxşılığa aparır" },
            { arabic: "وَالْبِرُّ إِلَى أَيْنَ يَهْدِي؟", translation: "Bəs yaxşılıq haraya aparır?" },
            { arabic: "يَهْدِي إِلَى الْجَنَّةِ", translation: "Cənnətə aparır" },
            { arabic: "وَمَا حُكْمُ الْكَذِبِ؟", translation: "Bəs yalanın hökmü nədir?" },
            { arabic: "الْكَذِبُ حَرَامٌ وَيَهْدِي إِلَى النَّارِ", translation: "Yalan haramdır və Cəhənnəmə aparır" }
        ]
    },
    {
        id: 95,
        title: "Valideynə Yaxşılıq",
        dialogue: [
            { arabic: "مَا حُكْمُ بِرِّ الْوَالِدَيْنِ؟", translation: "Valideynə yaxşılıq etməyin hökmü nədir?" },
            { arabic: "فَرِيضَةٌ عَظِيمَةٌ", translation: "Böyük bir fərzdir" },
            { arabic: "بَعْدَ أَيِّ شَيْءٍ؟", translation: "Nədən sonra?" },
            { arabic: "بَعْدَ تَوْحِيدِ اللَّهِ", translation: "Allahın təvhidindən sonra" },
            { arabic: "كَيْفَ نُحْسِنُ إِلَيْهِمَا؟", translation: "Onlara necə yaxşılıq edək?" },
            { arabic: "بِالطَّاعَةِ وَالْإِحْسَانِ وَالدُّعَاءِ", translation: "İtaət, yaxşılıq və dua ilə" },
            { arabic: "وَما حُكْمُ عُقُوقِهِمَا؟", translation: "Onların üzünə qayıtmağın hökmü nədir?" },
            { arabic: "عُقُوقُهُمَا مِنَ الْكَبَائِرِ", translation: "Onlara asi olmaq böyük günahlardandır" }
        ]
    },
    {
        id: 96,
        title: "Qohumluq Əlaqələri",
        dialogue: [
            { arabic: "مَا هِيَ صِلَةُ الرَّحِمِ؟", translation: "Qohumluq əlaqəsi nədir?" },
            { arabic: "إِحْسَانٌ إِلَى الأَقَارِبِ", translation: "Qohumlara yaxşılıq etməkdir" },
            { arabic: "هَلْ هِيَ وَاجِبَةٌ؟", translation: "O vacibdir?" },
            { arabic: "نَعَمْ، صِلَةُ الرَّحِمِ وَاجِبَةٌ", translation: "Bəli, qohumluq əlaqəsini saxlamaq vacibdir" },
            { arabic: "مَا جَزَاءُ وَاصِلِهَا؟", translation: "Onu saxlayanın mükafatı nədir?" },
            { arabic: "الْبَرَكَةُ فِي الرِّزْقِ وَالْعُمْرِ", translation: "Ruzidə və ömürdə bərəkətdir" },
            { arabic: "وَمَا حُكْمُ قَطِيعَتِهَا؟", translation: "Əlaqəni kəsməyin hökmü nədir?" },
            { arabic: "قَطِيعَةُ الرَّحِمِ مُحَرَّمَةٌ", translation: "Qohumluq əlaqələrini kəsmək haramdır" }
        ]
    },
    {
        id: 97,
        title: "Dili Qorumaq",
        dialogue: [
            { arabic: "كَيْفَ نَحْفَظُ اللِّسَانَ؟", translation: "Dili necə qoruyaq?" },
            { arabic: "بِتَرْكِ الْغِيبَةِ وَالنَّمِيمَةِ", translation: "Qeybət və xəbərçiliyi tərk etməklə" },
            { arabic: "مَا هِيَ الْغِيبَةُ؟", translation: "Qeybət nədir?" },
            { arabic: "ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ", translation: "Qardaşını onun xoşlamadığı şeylə anmağındır" },
            { arabic: "وَمَا هِيَ النَّمِيمَةُ؟", translation: "Bəs xəbərçilik nədir?" },
            { arabic: "نَقْلُ الْكَلامِ لِلإِفْسَادِ", translation: "Araları vurmaq üçün söz gəzdirməkdir" },
            { arabic: "مَاذَا يَقُولُ الْمُسْلِمُ؟", translation: "Müsəlman nə deməlidir?" },
            { arabic: "يَقُولُ خَيْرًا أَوْ يَصْمُتُ", translation: "Ya xeyir desin, ya da sussun" }
        ]
    },
    {
        id: 98,
        title: "Səbr Etmək",
        dialogue: [
            { arabic: "مَا هُوَ الصَّبْرُ؟", translation: "Səbr nədir?" },
            { arabic: "حَبْسُ النَّفْسِ عَلَى الطَّاعَةِ", translation: "Nəfsi itaətdə saxlamaqdır" },
            { arabic: "وَحَبْسُهَا عَنِ الْمَعْصِيَةِ؟", translation: "Və onu asilikdən saxlamaq?" },
            { arabic: "نَعَمْ، وَعَنِ التَّسَخُّطِ فِي الْبَلَاءِ", translation: "Bəli, və bəlada narazılıq etməkdən saxlamaq" },
            { arabic: "كَمْ أَنْوَاعُ الصَّبْرِ؟", translation: "Səbrin neçə növü var?" },
            { arabic: "أَنْوَاعُهُ ثَلَاثَةٌ", translation: "Növləri üçdür" },
            { arabic: "مَا جَزَاءُ الصَّابِرِينَ؟", translation: "Səbr edənlərin mükafatı nədir?" },
            { arabic: "أَجْرُهُمْ بِغَيْرِ حِسَابٍ", translation: "Mükafatları hesabsızdır" }
        ]
    },
    {
        id: 99,
        title: "Şükür Etmək",
        dialogue: [
            { arabic: "كَيْفَ نَشْكُرُ اللَّهَ؟", translation: "Allaha necə şükür edək?" },
            { arabic: "بِالْقَلْبِ وَاللِّسَانِ وَالْجَوَارِحِ", translation: "Qəlblə, dillə və əzalarla" },
            { arabic: "مَا هُوَ شُكْرُ اللِّسَانِ؟", translation: "Dilin şükrü nədir?" },
            { arabic: "الْحَمْدُ وَالثَّنَاءُ عَلَى اللَّهِ", translation: "Allaha həmd və tərif etməkdir" },
            { arabic: "وَمَا هُوَ شُكْرُ الْجَوَارِحِ؟", translation: "Əzaların şükrü nədir?" },
            { arabic: "استِعْمَالُ النِّعَمِ فِي الطَّاعَةِ", translation: "Nemətləri itaətdə istifadə etməkdir" },
            { arabic: "مَا فَائِدَةُ الشُّكْرِ؟", translation: "Şükrün faydası nədir?" },
            { arabic: "حِفْظُ النِّعَمِ وَزِيَادَتُهَا", translation: "Nemətlərin qorunması və artmasıdır" }
        ]
    },
    {
        id: 100,
        title: "Tövbə Etmək",
        dialogue: [
            { arabic: "مَا هِيَ التَّوْبَةُ؟", translation: "Tövbə nədir?" },
            { arabic: "الرُّجُوعُ عَنِ الْمَعْصِيَةِ إِلَى الطَّاعَةِ", translation: "Asilikdən itaətə qayıtmaqdır" },
            { arabic: "هَلْ يَجُوبُ النَّدَمُ؟", translation: "Peşmançılıq vacibdir?" },
            { arabic: "نَعَمْ، النَّدَمُ تَوْبَةٌ", translation: "Bəli, peşmançılıq tövbədir" },
            { arabic: "كَمْ شُرُوطُ التَّوْبَةِ؟", translation: "Tövbənin şərtləri neçədir?" },
            { arabic: "شُرُوطُهَا ثَلَاثَةٌ لِلَّهِ", translation: "Allah qarşısındakı şərtləri üçdür" },
            { arabic: "مَا هِيَ؟", translation: "Hansılardır?" },
            { arabic: "الْإِقْلَاعُ، وَالنَّدَمُ، وَالْعَزْمُ عَلَى عَدَمِ الْعَوْدَةِ", translation: "Günahı tərk etmək, peşman olmaq və bir daha qayıtmamağa qərar vermək" }
        ]
    },
    {
        id: 101,
        title: "Dəvətin Başlanğıcı",
        dialogue: [
            { arabic: "بِمَاذَا بَدَأَ الرُّسُلُ دَعْوَتَهُمْ؟", translation: "Peyğəmbərlər dəvətlərinə nə ilə başladılar?" },
            { arabic: "بَدَءُوا بِالتَّوْحِيدِ أَّوَلًا", translation: "İlk öncə təvhidlə başladılar" },
            { arabic: "لِمَاذَا بِالتَّوْحِيدِ؟", translation: "Niyə təvhidlə?" },
            { arabic: "لِأَنَّهُ أَصْلُ الدِّينِ وَأَسَاسُهُ", translation: "Çünki o dinin əsli və təməlidir" },
            { arabic: "مَاذَا قَالُوا لِقَوْمِهِمْ؟", translation: "Qövmlərinə nə dedilər?" },
            { arabic: "اعْبُدُوا اللَّهَ مَا لَكُمْ مِنْ إِلَهٍ غَيْرُهُ", translation: "Allaha ibadət edin, sizin Ondan başqa haqq Məbudunuz yoxdur" },
            { arabic: "هَلْ اسْتَجَابَ الْقَوْمُ؟", translation: "Qövm icabət etdimi (qəbul etdimi)?" },
            { arabic: "اسْتَجَابَ الْمُؤْمِنُونَ وَأَبَى الْكَافِرُونَ", translation: "Möminlər qəbul etdi, kafirlər isə imtina etdi" }
        ]
    },
    {
        id: 102,
        title: "Tağut Nədir?",
        dialogue: [
            { arabic: "مَا هُوَ الطَّاغُوتُ؟", translation: "Tağut nədir?" },
            { arabic: "كُلُّ مَا عُبِدَ مِنْ دُونِ اللَّهِ وَهُوَ رَاضٍ", translation: "Allahdan başqa ibadət olunan və buna razı olan hər şeydir" },
            { arabic: "كَمْ رُؤُوسُ الطَّوَاغِيتِ؟", translation: "Tağutların başçıları neçədir?" },
            { arabic: "رُؤُوسُهُمْ خَمْسَةٌ", translation: "Onların başçıları beşdir" },
            { arabic: "اذْكُرْ الأَوَّلَ مِنْهُمْ", translation: "Onlardan birincisini de" },
            { arabic: "إِبْلِيسُ لَعَنَهُ اللَّهُ", translation: "İblis - Allah ona lənət etsin" },
            { arabic: "وَما الْوَاجِبُ نَحْوَ الطَّاغُوتِ؟", translation: "Tağuta karşı borcumuz nədir?" },
            { arabic: "الْكُفْرُ بِهِ وَالْبَرَاءَةُ مِنْهُ", translation: "Ona küfr etmək (inkar etmək) və ondan uzaq olmaq" }
        ]
    },
    {
        id: 103,
        title: "Tağutu İnkar Etmək",
        dialogue: [
            { arabic: "كَيْفَ نَكْفُرُ بِالطَّاغُوتِ؟", translation: "Tağuta necə küfr (inkar) edirik?" },
            { arabic: "بِأَنْ نَعْتَقِدَ بُطْلَانَ عِبَادَتِهِ", translation: "Ona olunan ibadətin batil olduğuna etiqad etməklə" },
            { arabic: "وَنَبْغَضَهُ؟", translation: "Və ona nifrət etməklə?" },
            { arabic: "نَعَمْ، وَنَبْغَضَهُ وَنُكَفِّرَ أَهْلَهُ", translation: "Bəli, ona nifrət etməklə və əhlini təkfir etməklə" },
            { arabic: "هَلْ يَصِحُّ الإِيمَانُ بِدُونِ ذَلِكَ؟", translation: "İman bunsuz doğru olar?" },
            { arabic: "لَا، لا يَصِحُّ الإِيمَانُ أَبَدًا", translation: "Xeyr, iman heç vaxt doğru olmaz" },
            { arabic: "مَا الدَّلِيلُ؟", translation: "Dəlil nədir?" },
            { arabic: "فَمَنْ يَكْفُرْ بِالطَّاغُوتِ وَيُؤْمِنْ بِاللَّهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقَى", translation: "Kim tağutu inkar edib Allaha iman gətirərsə, artıq möhkəm ipdən yapışmış olar" }
        ]
    },
    {
        id: 104,
        title: "Allaha Məhəbbət",
        dialogue: [
            { arabic: "مَا هِيَ مَحَبَّةُ اللَّهِ؟", translation: "Allah sevgisi nədir?" },
            { arabic: "أَعْظَمُ عِبَادَاتِ الْقَلْبِ", translation: "Qəlb ibadətlərinin ən böyüyüdür" },
            { arabic: "كَيْفَ نَكُونُ صَادِقِينَ فِي حُبِّهِ؟", translation: "Onun sevgisində necə səmimi ola bilərik?" },
            { arabic: "بِطَاعَتِهِ وَاتِّبَاعِ رَسُولِهِ ﷺ", translation: "Ona itaət etməklə və Rəsuluna ﷺ tabe olmaqla" },
            { arabic: "مَا عَلَامَةُ حُبِّ اللَّهِ؟", translation: "Allah sevgisinin əlaməti nədir?" },
            { arabic: "تَقْدِيمُ مَرْضَاتِهِ عَلَى مَهَوَى النَّفْسِ", translation: "Onun razılığını nəfsin istəyindən üstün tutmaq" },
            { arabic: "هَلْ نُحِبُّ مَنْ يُبْغِضُ اللَّهَ؟", translation: "Allaha nifrət edəni sevirik?" },
            { arabic: "لَا، لا نُحِبُّ أَعْدَاءَ اللَّهِ", translation: "Xeyr, Allahın düşmənlərini sevmərik" }
        ]
    },
    {
        id: 105,
        title: "Allaha Qorxu (Xovf)",
        dialogue: [
            { arabic: "لِمَاذَا نَخَافُ مِنَ اللَّهِ؟", translation: "Niyə Allahdan qorxuruq?" },
            { arabic: "لِعَظَمَتِهِ وَشِدَّةِ عِقَابِهِ", translation: "Əzəmətinə və cəzasının şiddətli olmasına görə" },
            { arabic: "مَاذَا يَفْعَلُ الْخَوْفُ فِي الْقَلْبِ؟", translation: "Qorxu qəlbdə nə edir?" },
            { arabic: "يَمْنَعُ العَبْدَ مِنَ المَعَاصِي", translation: "Bəndəni günahlardan çəkindirir" },
            { arabic: "هَلْ نَخَافُ غَيْرَ اللَّهِ؟", translation: "Allahdan başqasından qorxuruq?" },
            { arabic: "لا نَخَافُ خَوْفَ الْعِبَادَةِ إِلا مِنَ اللَّهِ", translation: "İbadət qorxusu ilə yalnız Allahdan qorxuruq" },
            { arabic: "وَمَا هُوَ الْخَوْفُ الطَّبِيعِيُّ؟", translation: "Bəs təbii qorxu nədir?" },
            { arabic: "كَالْخَوْفِ مِنَ السَّبُعِ وَالنَّارِ", translation: "Yırtıcı heyvandan və oddan qorxmaq kimi" }
        ]
    },
    {
        id: 106,
        title: "Allahın Rəhməti",
        dialogue: [
            { arabic: "مَا مَدى رَحْمَةِ اللَّهِ؟", translation: "Allahın rəhməti nə dərəcədədir?" },
            { arabic: "رَحْمَتُهُ وَسِعَتْ كُلَّ شَيْءٍ", translation: "Onun rəhməti hər şeyi bürümüşdür" },
            { arabic: "هَلْ نَيْأَسُ مِنْ رَحْمَتِهِ؟", translation: "Onun rəhmətindən ümidimizi kəsirik?" },
            { arabic: "لَا، لا يَيْأَسُ مِنْ رَوْحِ اللَّهِ إِلا الْكَافِرُونَ", translation: "Xeyr, Allahın rəhmətindən yalnız kafirlər ümidini kəsər" },
            { arabic: "مَنْ يَسْتَحِقُّ هَذِهِ الرَّحْمَةَ؟", translation: "Bu rəhmətə kim layiqdir?" },
            { arabic: "الْمُتَّقُونَ الْمُحْسِنُونَ", translation: "Təqva sahibləri və yaxşılıq edənlər" },
            { arabic: "كَيْفَ نَنَالُ رَحْمَةَ اللَّهِ؟", translation: "Allahın rəhmətini necə qazanırıq?" },
            { arabic: "بِالطَّاعَةِ وَالإِسْتِغْفَارِ", translation: "İtaət və bağışlanma diləməklə (bağışlanma istəməklə)" }
        ]
    },
    {
        id: 107,
        title: "İbadətdə İstianə (Kömək Diləmək)",
        dialogue: [
            { arabic: "مِمَّنْ نَسْتَعِينُ؟", translation: "Kimsən kömək diləyirik?" },
            { arabic: "نَسْتَعِينُ بِاللَّهِ وَحْدَهُ", translation: "Tək Allahdan kömək diləyirik" },
            { arabic: "مَا الدَّلِيلُ مِنَ الْفَاتِحَةِ؟", translation: "Fatihə surəsindən dəlil nədir?" },
            { arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", translation: "Yalnız Sənə ibadət edir və yalnız Səndən kömək diləyirik" },
            { arabic: "هَلْ يَجُوزُ الاِسْتِعَانَةُ بِالْمَيِّتِ؟", translation: "Ölüdən kömək diləmək olarmı?" },
            { arabic: "لَا، هَذَا شِرْكٌ فِي العِبَادَةِ", translation: "Xeyr, bu ibadətdə şirkdir" },
            { arabic: "وَبِالْحَيِّ الْقَادِرِ؟", translation: "Bəs diri və gücü çatandan?" },
            { arabic: "جَائِزٌ فِيمَا يَقْدِرُ عَلَيْهِ", translation: "Gücü çatdığı şeylərdə caizdir" }
        ]
    },
    {
        id: 108,
        title: "İstiəsə (Sığınmaq)",
        dialogue: [
            { arabic: "مَا هِيَ الاِسْتِعَاذَةُ؟", translation: "İstiəsə (sığınmaq) nədir?" },
            { arabic: "طَلَبُ الْحِمَايَةِ وَالْوِقَايَةِ", translation: "Qorunma və sığınacaq istəməkdir" },
            { arabic: "بِمَنْ نَعُوذُ؟", translation: "Kimə sığınırıq?" },
            { arabic: "نَعُوذُ بِاللَّهِ وَحْدَهُ", translation: "Tək Allaha sığınırıq" },
            { arabic: "مِثْلُ مَاذَا؟", translation: "Nə kimi?" },
            { arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ", translation: "Qovulmuş şeytandan Allaha sığınıram" },
            { arabic: "هَلْ نَعُوذُ بِالْجِنِّ؟", translation: "Cinlərə sığınırıq?" },
            { arabic: "لَا، الاِسْتِعَاذَةُ بِالْجِنِّ شِرْكٌ", translation: "Xeyr, cinlərə sığınmaq şirkdir" }
        ]
    },
    {
        id: 109,
        title: "İstiğasə (Köməyə Çağırmaq)",
        dialogue: [
            { arabic: "مَا هِيَ الاِسْتِغَاثَةُ؟", translation: "İstiğasə nədir?" },
            { arabic: "طَلَبُ الْغَوْثِ عِنْدَ الشِّدَّةِ", translation: "Çətinlik anında kömək/nicat istəməkdir" },
            { arabic: "مِمَّنْ نَطْلُبُ الْغَوْثَ؟", translation: "Nicatı kimdən istəyirik?" },
            { arabic: "مِنَ اللَّهِ الْقَادِرِ عَلَى كُلِّ شَيْءٍ", translation: "Hər şeyə qadir olan Allahdan" },
            { arabic: "هَلْ يُغِيثُ الأَمْوَاتُ؟", translation: "Ölülər köməyə çatar?" },
            { arabic: "لَا، لا يَسْتَجِيبُونَ لِمَنْ دَعَاهُمْ", translation: "Xeyr, onlar özlərini çağıranlara cavab verə bilməzlər" },
            { arabic: "مَا حُكْمُ الاِسْتِغَاثَةِ بِغَيْرِ اللَّهِ؟", translation: "Allahdan başqasını köməyə çağırmağın hökmü nədir?" },
            { arabic: "شِرْكٌ أَكْبَرُ فِي الشِّدَائِدِ", translation: "Çətinliklərdə edilən böyük şirkdir" }
        ]
    },
    {
        id: 110,
        title: "Təvəssülün Qismləri",
        dialogue: [
            { arabic: "مَا هُوَ التَّوَسُّلُ؟", translation: "Təvəssül nədir?" },
            { arabic: "التَّقَرُّبُ إِلَى اللَّهِ بِوَسِيلَةٍ", translation: "Vəsilə ilə Allaha yaxınlaşmaqdır" },
            { arabic: "كَمْ أَنْوَاعُهُ؟", translation: "Neçə növü var?" },
            { arabic: "نَوْعَانِ: مَشْرُوعٌ وَمَمْنُوعٌ", translation: "İki növü var: Şəriətə uyğun və qadağan olunmuş" },
            { arabic: "مَا هُوَ التَّوَسُّلُ المَشْرُوعُ؟", translation: "Şəriətə uyğun təvəssül hansıdır?" },
            { arabic: "بِأَسْمَاءِ اللَّهِ وَصِفَاتِهِ وَالأَعْمَالِ الصَّالِحَةِ", translation: "Allahın adları, sifətləri və saleh əməllərlə" },
            { arabic: "وَمَا هُوَ المَمْنُوعُ؟", translation: "Bəs qadağan olunan hansıdır?" },
            { arabic: "بِجَاهِ الأَنْبِيَاءِ أَوْ ذَوَاتِ الْمَوْتَى", translation: "Peyğəmbərlərin hörməti və ya ölülərin zatı ilə" }
        ]
    },
    {
        id: 111,
        title: "Sehr və Sehrbazlıq",
        dialogue: [
            { arabic: "مَا حُكْمُ السِّحْرِ؟", translation: "Sehrin hökmü nədir?" },
            { arabic: "السِّحْرُ كُفْرٌ وَمِنَ الْمُوبِقَاتِ", translation: "Sehr küfürdür və məhv edici günahlardandır" },
            { arabic: "مَا حُكْمُ السَّاحِرِ؟", translation: "Sehrbazın hökmü nədir?" },
            { arabic: "كَافِرٌ يُقْتَلُ فِي الشَّرِيعَةِ", translation: "Kafirdir, şəriətdə cəzalandırılır" },
            { arabic: "هَلْ يَجُوزُ حَلُّ السِّحْرِ بِالسِّحْرِ؟", translation: "Sehri sehrlə batil etmək (açmaq) olarmı?" },
            { arabic: "لَا، هَذَا لا يَجُوزُ أَبَدًا", translation: "Xeyr, bu qətiyyən olmaz" },
            { arabic: "بِمَاذَا يُحَلُّ السِّحْرُ؟", translation: "Sehr nə ilə açılır?" },
            { arabic: "بِالرُّقْيَةِ الشَّرْعِيَّةِ وَالْأَدْعِيَةِ", translation: "Şəriətə uyğun ruqiyyə və dualarla" }
        ]
    },
    {
        id: 112,
        title: "Kahinlik və Ulduz Falı",
        dialogue: [
            { arabic: "مَنْ هُوَ الْكَاهِنُ؟", translation: "Kahin kimdir?" },
            { arabic: "مَنْ يَدَّعِي عِلْمَ الْغَيْبِ", translation: "Qeyb elmini bildiyini iddia edəndir" },
            { arabic: "مَا حُكْمُ التَّنْجِيمِ وَالفَالِ؟", translation: "Nücum elmi (astroloji) və falın hökmü nədir?" },
            { arabic: "كُلُّهَا مِنَ الْبَاطِلِ وَالشِّرْكِ", translation: "Hamısı batil və şirkdir" },
            { arabic: "هَلْ نَقْرَأُ أَبْرَاجَ الْحَظِّ؟", translation: "Bürc faldarını oxuyuruq?" },
            { arabic: "لَا، قِرَاءَتُهَا حَرَامٌ وَضَلَالٌ", translation: "Xeyr, onları oxumaq haramdır və zəlalətdir" },
            { arabic: "لِمَاذَا؟", translation: "Niyə?" },
            { arabic: "لِأَنَّ الْغَيْبَ لا يَعْلَمُهُ إِلا اللَّهُ", translation: "Çünki qeybi Allahdan başqa heç kim bilməz" }
        ]
    },
    {
        id: 113,
        title: "Uğursuzluq İnancları (Tətəyyur)",
        dialogue: [
            { arabic: "مَا هُوَ التَّطَيُّرُ؟", translation: "Tətəyyur nədir?" },
            { arabic: "التَّشَاؤُمُ بِالطُّيُورِ أَوْ الأَرْقَامِ", translation: "Quşlarla və ya rəqəmlərlə bədbəxtlik (uğursuzluq) hiss etməkdir" },
            { arabic: "مَا حُكْمُهُ فِي الإِسْلَامِ؟", translation: "İslamda onun hökmü nədir?" },
            { arabic: "التَّطَيُّرُ شِرْكٌ أَصْغَرُ", translation: "Uğursuzluğa inanmaq kiçik şirkdir" },
            { arabic: "مَاذَا يَفْعَلُ الْمُسْلِمُ إِذَا وَجَدَ ذَلِكَ؟", translation: "Müsəlman bunu hiss etdikdə nə etməlidir?" },
            { arabic: "يَمْضِي فِي حَاجَتِهِ وَيَتَوَكَّلُ عَلَى اللَّهِ", translation: "İşinə davam edər və Allaha təvəkkül edər" },
            { arabic: "مَاذَا يَقُولُ؟", translation: "Nə deyər?" },
            { arabic: "اللَّهُمَّ لا طَيْرَ إِلا طَيْرُكَ وَلا خَيْرَ إِلا خَيْرُكَ", translation: "Allahım, Sənin qədərindən başqa uğur, Sənin xeyrindən başqa xeyir yoxdur" },
            { arabic: "وَلا إِلَهَ غَيْرُكَ", translation: "Və Səndən başqa haqq Məbud yoxdur" }
        ]
    },
    {
        id: 114,
        title: "Səhabələrin Məqamı",
        dialogue: [
            { arabic: "لِمَاذَا نُحِبُّ الصَّحَابَةَ؟", translation: "Nə üçün səhabələri sevirik?" },
            { arabic: "لِأَنَّهُمْ نَصَرُوا النَّبِيَّ ﷺ وَنَقَلُوا الدِّينَ", translation: "Çünki onlar Peyğəmbərə ﷺ kömək etdilər və dini nəql etdilər" },
            { arabic: "هَلْ هُمْ مَعْصُومُونَ؟", translation: "Onlar məsumdurlar (günahsızdırlar)?" },
            { arabic: "لَا، لَيْسُوا مَعْصُومِينَ مِنَ الْخَطَأِ", translation: "Xeyr, xətadan məsum deyillər" },
            { arabic: "وَلَكِنَّهُمْ خَيْرُ الأُمَّةِ؟", translation: "Lakin onlar ümmətin ən xeyirlisidir?" },
            { arabic: "نَعَمْ، خَيْرُ النَّاسِ قَرْنِي", translation: "Bəli, 'İnsanların ən xeyirlisi mənim əsrimdəkilərdir'" },
            { arabic: "هَلْ نَتَرَضَّى عَنْهُمْ جَمِيعًا؟", translation: "Onların hamısına 'radiyallahu anh' deyirik?" },
            { arabic: "نَعَمْ، نَتَرَضَّى عَنْهُمْ جَمِيعًا", translation: "Bəli, hamısına 'radiyallahu anh' deyirik" }
        ]
    },
    {
        id: 115,
        title: "Təkfir Məsələsi",
        dialogue: [
            { arabic: "مَا هُوَ التَّكْفِيرُ؟", translation: "Təkfir nədir?" },
            { arabic: "الْحُكْمُ عَلَى الْمُسْلِمِ بِالْكُفْرِ", translation: "Müsəlmana kafir hökmü verməkdir" },
            { arabic: "هَلْ هُوَ أَمْرٌ خَطِيرٌ؟", translation: "O təhlükəli məsələdir?" },
            { arabic: "نَعَمْ، خَطِيرٌ جِدًّا", translation: "Bəli, çox təhlükəlidir" },
            { arabic: "مَنْ يَحْكُمُ بِالتَّكْفِيرِ؟", translation: "Təkfir hökmünü kim verir?" },
            { arabic: "الْعُلَمَاءُ الرَّاسِخُونَ فَقَطْ", translation: "Yalnız dərin elm sahibi olan alimlər" },
            { arabic: "هَلْ يَجُوزُ لِلْعَامَّةِ التَّكْفِيرُ؟", translation: "Sıravi insanlara təkfir etmək caizdir?" },
            { arabic: "لَا، لا يَجُوزُ لِلْعَامَّةِ أَبَدًا", translation: "Xeyr, sıravi insanlara qətiyyən olmaz" }
        ]
    },
    {
        id: 116,
        title: "Xəvariclərin Sifətləri",
        dialogue: [
            { arabic: "مَنْ هُمُ الْخَوَارِجُ؟", translation: "Xəvariclər kimlərdir?" },
            { arabic: "فِرْقَةٌ تُكَفِّرُ الْمُسْلِمِينَ بِالْكَبَائِرِ", translation: "Müsəlmanları böyük günahlara görə təkfir edən bir firqədir" },
            { arabic: "وَوَماذَا يَفْعَلُونَ أَيْضًا؟", translation: "Və daha nə edirlər?" },
            { arabic: "يَخْرُجُونَ عَلَى حُكَّامِ الْمُسْلِمِينَ", translation: "Müsəlman idarəçilərinə (hakimlərinə) qarşı çıxırlar" },
            { arabic: "مَاذَا قَالَ النَّبِيُّ ﷺ عَنْهُمْ؟", translation: "Peyğəmbər ﷺ onlar haqqında nə buyurub?" },
            { arabic: "كِلَابُ النَّارِ", translation: "Cəhənnəmin itləri" },
            { arabic: "هَلْ نَحْذَرُ مِنْ مَنَهَجِهِمْ؟", translation: "Onların mənhəcinden çəkinirik?" },
            { arabic: "نَعَمْ، نَحْذَرُ مِنْهُمْ غَايَةَ التَّحْذِيرِ", translation: "Bəli, onlardan son dərəcə çəkinirik" }
        ]
    },
    {
        id: 117,
        title: "Mürciələrin Şübhəsi",
        dialogue: [
            { arabic: "مَنْ هُمُ الْمُرْجِئَةُ؟", translation: "Mürciələr kimlərdir?" },
            { arabic: "فِرْقَةٌ تُخْرِجُ الأَعْمَالَ عَنِ الإِيمَانِ", translation: "Əməlləri imandan kənar tutan bir firqədir" },
            { arabic: "مَاذَا يَقُولُونَ؟", translation: "Nə deyirlər?" },
            { arabic: "يَقُولُونَ: لا يَضُرُّ مَعَ الإِيمَانِ ذَنْبٌ", translation: "Deyirlər: İman olan yerdə günah zərər verməz" },
            { arabic: "هَلْ قَوْلُهُمْ صَحِيحٌ؟", translation: "Onların sözü doğrudur?" },
            { arabic: "لَا، قَوْلُهُمْ بَاطِلٌ وَمُخَالِفٌ لِلسُّنَّةِ", translation: "Xeyr, onların sözü batildir və Sünnəyə ziddir" },
            { arabic: "مَا هُوَ الْحَقُّ؟", translation: "Bəs haqq nədir?" },
            { arabic: "الْعَمَلُ مِنْ حَقِيقَةِ الإِيمَانِ", translation: "Əməl imanın həqiqətindəndir" }
        ]
    },
    {
        id: 118,
        title: "Cəhmiyyə və Muətəzilə",
        dialogue: [
            { arabic: "مَاذَا فَعَلَتِ الجَهْمِيَّةُ؟", translation: "Cəhmiyyə nə etdi?" },
            { arabic: "نَفَتْ أَسْمَاءَ اللَّهِ وَصِفَاتِهِ", translation: "Allahın ad və sifətlərini inkar etdi" },
            { arabic: "وَمَاذَا فَعَلَتِ المُعْتَزِلَةُ؟", translation: "Bəs Muətəzilə nə etdi?" },
            { arabic: "نَفَتْ صِفَاتِ اللَّهِ وَأَثْبَتَتِ الأَسْمَاءَ", translation: "Allahın sifətlərini inkar etdi, adlarını təsdiqlədi" },
            { arabic: "مَا مَوْقِفُ أَهْلِ السُّنَّةِ مِنْهُمْ؟", translation: "Əhli-Sünnənin onlara qarşı mövqeyi nədir?" },
            { arabic: "الرَّدُّ عَلَيْهِمْ وَبَيَانُ ضَلَالِهِمْ", translation: "Onlara cavab vermək və zəlalətlərini bəyan etmək" },
            { arabic: "بِمَاذَا نُمَسِّكُ؟", translation: "Nədən yapışırıq?" },
            { arabic: "بِمَا كَانَ عَلَيْهِ السَّلَفُ الصَّالِحُ", translation: "Sələfi-Salehin olduğu yoldan" }
        ]
    },
    {
        id: 119,
        title: "İdarəçilərə İtaət (Vali-Əmr)",
        dialogue: [
            { arabic: "مَا حُكْمُ طَاعَةِ وُلَاةِ الأُمُورِ؟", translation: "Müsəlman idarəçilərə itaət etməyin hökmü nədir?" },
            { arabic: "وَاجِبَةٌ فِي غَيْرِ مَعْصِيَةِ اللَّهِ", translation: "Allaha asilik olmayan konularda vacibdir" },
            { arabic: "فَإِنْ أَمَرُوا بِمَعْصِيَةٍ؟", translation: "Bəs asiliyə əmr etsələr?" },
            { arabic: "لا طَاعَةَ لِمَخْلُوقٍ فِي مَعْصِيَةِ الْخَالِقِ", translation: "Xaliqə asilik olan yerdə məxluqa itaət olunmaz" },
            { arabic: "هَلْ نَخْرُجُ عَلَيْهِمْ بِالسِّلَاحِ؟", translation: "Onlara qarşı silahla çıxırıq?" },
            { arabic: "لَا، الخُرُوجُ عَلَيْهِمْ حَرَامٌ وَسَبَبٌ لِلْفِتَنِ", translation: "Xeyr, onlara qarşı çıxmaq haramdır və fitnə səbəbidir" },
            { arabic: "مَاذَا نَفْعَلُ لَهُمْ؟", translation: "Onlar üçün nə edirik?" },
            { arabic: "نَدْعُو لَهُمْ بِالصَّلَاحِ وَالْمَعَافَاةِ", translation: "Onların islahı və salamatlığı üçün dua edirik" }
        ]
    },
    {
        id: 120,
        title: "Fitnələrdən Uzaq Durmaq",
        dialogue: [
            { arabic: "مَاذَا نَفْعَلُ عِنْدَ ظُهُورِ الْفِتَنِ؟", translation: "Fitnələr ortaya çıxdıqda nə edirik?" },
            { arabic: "نَتَمَسَّكُ بِالْكِتَابِ وَالسُّنَّةِ", translation: "Kitab və Sünnədən yapışırıq" },
            { arabic: "وَنَلْزَمُ الْعُلَمَاءَ؟", translation: "Və alimlərin yanında oluruq?" },
            { arabic: "نَعَمْ، نَلْزَمُ الْعُلَمَاءَ الكِبَارَ", translation: "Bəli, böyük alimlərin yanında oluruq" },
            { arabic: "هَلْ نَخُوضُ فِي الْفِتَنِ؟", translation: "Fitnələrə baş vururuq?" },
            { arabic: "لَا، نَبْتَعِدُ عَنْهَا وَنَكُفُّ أَلْسِنَتَنَا", translation: "Xeyr, onlardan uzaq durur və dilimizi saxlayırıq" },
            { arabic: "مَا هُوَ النَّجَاةُ؟", translation: "Xilas yolu nədir?" },
            { arabic: "الْعِلْمُ وَالصَّبْرُ وَالْعَبَادَةُ", translation: "Elm, səbr və ibadət" }
        ]
    },
    {
        id: 121,
        title: "Camaatla Olmaq (Əl-Camaa)",
        dialogue: [
            { arabic: "مَا هِيَ الْجَمَاعَةُ؟", translation: "Camaat nədir?" },
            { arabic: "مَا وَافَقَ الْحَقَّ وَإِنْ كُنْتَ وَحْدَكَ", translation: "Tək olsan belə haqqa müvafiq olan şeydir" },
            { arabic: "وَمَنْ هُمْ أَهْلُ السُّنَّةِ وَالْجَمَاعَةِ؟", translation: "Əhli-Sünnə vəl-Camaat kimlərdir?" },
            { arabic: "الْمُتَمَسِّكُونَ بِسُنَّةِ النَّبِيِّ ﷺ وَأَصْحَابِهِ", translation: "Peyğəmbərin ﷺ və səhabələrinin Sünnəsindən yapışanlardır" },
            { arabic: "هَلْ الْكَثْرَةُ دَلِيلٌ عَلَى الْحَقِّ؟", translation: "Çoxluq haqqın dəlilidir?" },
            { arabic: "لَا، لَيْسَتِ الْكَثْرَةُ دَلِيلًا دَائِمًا", translation: "Xeyr, çoxluq həmişə dəlil deyildir" },
            { arabic: "مَا هُوَ المِعْيَارُ؟", translation: "Bəs meyar nədir?" },
            { arabic: "المِعْيَارُ هُوَ الإِتِّبَاعُ لِلشَّرِيعَةِ", translation: "Meyar şəriətə tabe olmaqdır" }
        ]
    },
    {
        id: 122,
        title: "Quranın Fəziləti",
        dialogue: [
            { arabic: "مَا فَضْلُ قِرَاءَةِ الْقُرْآنِ؟", translation: "Quran oxumağın fəziləti nədir?" },
            { arabic: "بِكُلِّ حَرْفٍ حَسَنَةٌ وَالْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا", translation: "Hər hərfə bir həsənə var, həsənə də on qatıdır" },
            { arabic: "هَلْ يَشْفَعُ الْقُرْآنُ لِصَاحِبِهِ؟", translation: "Quran öz sahibinə şəfaət edəcək?" },
            { arabic: "نَعَمْ، يَأْتِي شَفِيعًا يَوْمَ الْقِيَامَةِ", translation: "Bəli, Qiyamət günü şəfaətçi olaraq gələcək" },
            { arabic: "كَيْفَ نَقْرَأُ الْقُرْآنَ؟", translation: "Quranı necə oxuyaq?" },
            { arabic: "بِالتَّدَبُّرِ وَالتَّرْتِيلِ وَالْعَمَلِ", translation: "Düşünərək, tərtillə (qaydası ilə) və əməl edərək" },
            { arabic: "اللَّهُمَّ اجْعَلِ القُرْآنَ رَبِيعَ قُلُوبِنَا", translation: "Allahım, Quranı qəlblərimizin baharı et" },
            { arabic: "آمِينَ يا رَبَّ العَالَمِينَ", translation: "Amin, ey aləmlərin Rəbbi" }
        ]
    },
    {
        id: 123,
        title: "Zikr Etməyin Önemı",
        dialogue: [
            { arabic: "مَا هُوَ أَفْضَلُ الذِّكْرِ؟", translation: "Ən fəzilətli zikr hansıdır?" },
            { arabic: "لا إِلَهَ إِلا اللَّهُ", translation: "La ilahə illallah" },
            { arabic: "مَا فَائِدَةُ ذِكْرِ اللَّهِ؟", translation: "Allahı zikr etməyin faydası nədir?" },
            { arabic: "طُمَأْنِينَةُ الْقَلْبِ وَطَرْدُ الشَّيْطَانِ", translation: "Qəlb rahatlığı və şeytanın qovulması" },
            { arabic: "مَا الدَّلِيلُ؟", translation: "Dəlil nədir?" },
            { arabic: "أَلا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ", translation: "Bilin ki, qəlblər yalnız Allahı zikr etməklə rahatlıq tapar" },
            { arabic: "هَلْ نَذْكُرُ اللَّهَ كَثِيرًا؟", translation: "Allahı çox zikr edək?" },
            { arabic: "نَعَمْ، فِي كُلِّ وَقْتٍ وَحَالٍ", translation: "Bəli, hər vaxt və hər halda" }
        ]
    },
    {
        id: 124,
        title: "Səhər və Axşam Zikrləri",
        dialogue: [
            { arabic: "مَتَى نَقْرَأُ أَذْكَارَ الصَّبَاحِ؟", translation: "Səhər zikrlərini ne vaxt oxuyuruq?" },
            { arabic: "بَعْدَ صَلَاةِ الْفَجْرِ إِلَى طُلُوعِ الشَّمْسِ", translation: "Sübh namazından sonra günəş doğana qədər" },
            { arabic: "وَمَتَى أَذْكَارُ الْمَسَاءِ؟", translation: "Bəs axşam zikrləri ne vaxtdır?" },
            { arabic: "بَعْدَ صَلَاةِ الْعَصْرِ إِلَى غُرُوبِ الشَّمْسِ", translation: "Əsr namazından sonra gün batana qədər" },
            { arabic: "مَا فَائِدَتُهَا؟", translation: "Onların faydası nədir?" },
            { arabic: "حِفْظٌ لِلْمُسْلِمِ مِنْ كُلِّ شَرٍّ", translation: "Müsəlmanı hər bir şərdən qorumasıdır" },
            { arabic: "هَلْ تُحَافِظُ عَلَيْهَا؟", translation: "Onları davamlı edirsən?" },
            { arabic: "نَعَمْ، أُحَافِظُ عَلَيْهَا يَوْمِيًّا", translation: "Bəli, hər gün onları davamlı oxuyuram" }
        ]
    },
    {
        id: 125,
        title: "İstiğfar (Bağışlanma Diləmək)",
        dialogue: [
            { arabic: "مَا هُوَ الإِسْتِغْفَارُ؟", translation: "İstiğfar nədir?" },
            { arabic: "طَلَبُ الْمَغْفِرَةِ مِنَ اللَّهِ", translation: "Allahdan bağışlanma istəməkdir" },
            { arabic: "كَيْفَ نَسْتَغْفِرُ؟", translation: "Necə istiğfar edirik?" },
            { arabic: "نَقُولُ: أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ", translation: "Deyirik: 'Əstəğfirullah və ətubu ileyh'" },
            { arabic: "كَمْ مَرَّةً كَانَ يَسْتَغْفِرُ النَّبِيُّ ﷺ؟", translation: "Peyğəmbər ﷺ neçə dəfə istiğfar edərdi?" },
            { arabic: "أَكْثَرَ مِنْ سَبْعِينَ مَرَّةً فِي الْيَوْمِ", translation: "Gündə yetmiş dəfədən çox" },
            { arabic: "مَا ثَمَرَةُ الإِسْتِغْفَارِ؟", translation: "İstiğfarın bəhrəsi nədir?" },
            { arabic: "مَفَاتِيحُ الرِّزْقِ وَتَفْرِيجُ الْهُمُومِ", translation: "Ruzinin açarları və qəmlərin dağılması" }
        ]
    },
    {
        id: 126,
        title: "Peyğəmbərə Salavat Qətirmək",
        dialogue: [
            { arabic: "كَيْفَ نُصَلِّي عَلَى النَّبِيِّ ﷺ؟", translation: "Peyğəmbərə ﷺ necə salavat gətiririk?" },
            { arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ", translation: "Allahım, Məhəmmədə və Məhəmmədin ailəsinə salavat et" },
            { arabic: "مَا فَضْلُ الصَّلَاةِ عَلَيْهِ؟", translation: "Ona salavat gətirməyin fəziləti nədir?" },
            { arabic: "مَنْ صَلَّى عَلَيْهِ صَلَاةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا", translation: "Kim ona bir salavat gətirərsə, Allah ona on salavat (rəhmət) edər" },
            { arabic: "مَتَى تُتَأَكَّدُ الصَّلَاةُ عَلَيْهِ؟", translation: "Ona salavat nə vaxt daha çox təkid olunur?" },
            { arabic: "يَوْمَ الْجُمُعَةِ وَعِنْدَ ذِكْرِ اسْمِهِ", translation: "Cümə günü və adı çəkildikdə" },
            { arabic: "صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ", translation: "Sallallahu əleyhi və səlləm" },
            { arabic: "جَزَاكَ اللَّهُ خَيْرًا", translation: "Allah sene xeyir versin" }
        ]
    },
    {
        id: 127,
        title: "Cümə Gününün Ədəbləri",
        dialogue: [
            { arabic: "مَا هُوَ أَفْضَلُ أَيَّامِ الأُسْبُوعِ؟", translation: "Həftənin ən fəzilətli günü hansıdır?" },
            { arabic: "يَوْمُ الْجُمُعَةِ", translation: "Cümə günüdür" },
            { arabic: "مَاذَا نَفْعَلُ فِي يَوْمِ الْجُمُعَةِ؟", translation: "Cümə günü nə edirik?" },
            { arabic: "الْغُسْلُ، وَالتَّطَيُّبُ، وَقِرَاءَةُ سُورَةِ الْكَهْفِ", translation: "Qüsl almaq, ətir vurmaq və əl-Kəhf surəsini oxumaq" },
            { arabic: "وَمَاذَا أَيْضًا؟", translation: "Və daha nə?" },
            { arabic: "التَّبْكِيرُ إِلَى الْمَسْجِدِ وَالصَّلَاةُ عَلَى النَّبِيِّ ﷺ", translation: "Məscidə tez getmək və Peyğəmbərə ﷺ salavat gətirmək" },
            { arabic: "هَلْ فِيهِ سَاعَةُ إِجَابَةٍ؟", translation: "Onda duanın qəbul olunan saatı var?" },
            { arabic: "نَعَمْ، سَاعَةٌ لا يُرَدُّ فِيهَا الدُّعَاءُ", translation: "Bəli, elə bir saat var ki, onda dua rədd olunmaz" }
        ]
    },
    {
        id: 128,
        title: "Məscid Ədəbləri",
        dialogue: [
            { arabic: "بِأَيِّ قَدَمٍ نَدْخُلُ الْمَسْجِدَ؟", translation: "Məscidə hansı ayaqla daxil oluruq?" },
            { arabic: "بِالْقَدَمِ الْيُمْنَى", translation: "Sağ ayaqla" },
            { arabic: "مَاذَا نَقُولُ عِنْدَ الدُّخُولِ؟", translation: "Daxil olarkən nə deyirik?" },
            { arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ", translation: "Allahım, mənə rəhmət qapılarını aç" },
            { arabic: "مَاذَا نُصَلِّي قَبْلَ الْجُلُوسِ؟", translation: "Oturmazdan əvvəl nə qılırıq?" },
            { arabic: "رَكْعَتَيْنِ تَحِيَّةَ الْمَسْجِدِ", translation: "İki rükət 'Təhiyyətul-Məscid' namazı" },
            { arabic: "وَبِأَيِّ قَدَمٍ نَخْرُجُ؟", translation: "Bəs hansı ayaqla çıxırıq?" },
            { arabic: "بِالْقَدَمِ الْيُسْرَى", translation: "Sol ayaqla" }
        ]
    },
    {
        id: 129,
        title: "Yemək Ədəbləri",
        dialogue: [
            { arabic: "مَاذَا نَقُولُ قَبْلَ الأَكْلِ؟", translation: "Yeməkdən əvvəl nə deyirik?" },
            { arabic: "نَقُولُ: بِسْمِ اللَّهِ", translation: "Deyirik: 'Bismillah'" },
            { arabic: "بِأَيِّ يَدٍ نَأْكُلُ؟", translation: "Hansı əllə yeyirik?" },
            { arabic: "نَأْكُلُ بِالْيَدِ الْيُمْنَى", translation: "Sağ əllə yeyirik" },
            { arabic: "وَمِنْ أَيْنَ نَأْكُلُ؟", translation: "Və haradan yeyirik?" },
            { arabic: "مِمَّا يَلِينَا", translation: "Öz önümüzdən" },
            { arabic: "مَاذَا نَقُولُ بَعْدَ الإِنْتِهَاءِ؟", translation: "Bitirdikdən sonra nə deyirik?" },
            { arabic: "الْحَمْدُ لِلَّهِ", translation: "Alhamdulillah (Allaha həmd olsun)" }
        ]
    },
    {
        id: 130,
        title: "Yatmaq Ədəbləri",
        dialogue: [
            { arabic: "كَيْفَ نَنَامُ عَلَى السُّنَّةِ؟", translation: "Sünnəyə uyğun necə yatırıq?" },
            { arabic: "نَتَوَضَّأُ وَنَنَامُ عَلَى الشِّقِّ الْأَيْمَنِ", translation: "Dəstəmaz alıb sağ tərəfimiz üstə yatırıq" },
            { arabic: "مَاذَا نَقْرَأُ قَبْلَ النَّوْمِ؟", translation: "Yatmazdan əvvəl nə oxuyuruq?" },
            { arabic: "آيَةَ الْكُرْسِيِّ وَالْمُعَوِّذَاتِ", translation: "Ayətəl-Kürsi və Muəvvizat (Fələq, Nas, İxlas)" },
            { arabic: "مَاذَا نَقُولُ مِنَ الدُّعَاءِ؟", translation: "Duadan nə deyirik?" },
            { arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", translation: "Allahım, Sənin adınla ölür və dirilirəm" },
            { arabic: "وَمَاذَا نَقُولُ عِنْدَ الإِسْتِيقَاظِ؟", translation: "Oyananda nə deyirik?" },
            { arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا", translation: "Bizi öldürdükdən sonra dirildən Allaha həmd olsun" }
        ]
    },
    {
        id: 131,
        title: "Asqırmaq Ədəbləri",
        dialogue: [
            { arabic: "مَاذَا يَقُولُ الْمُعَاطِسُ؟", translation: "Asqıran şəxs nə deyir?" },
            { arabic: "يَقُولُ: الْحَمْدُ لِلَّهِ", translation: "Deyir: 'Alhamdulillah'" },
            { arabic: "مَاذَا يَرُدُّ عَلَيْهِ السَّامِعُ؟", translation: "Eşidən ona nə cavab verir?" },
            { arabic: "يَقُولُ لَهُ: يَرْحَمُكَ اللَّهُ", translation: "Ona deyir: 'Yarhəmukallah' (Allah sənə rəhm etsin)" },
            { arabic: "وَبِمَاذَا يُجِيبُهُ الْمُعَاطِسُ؟", translation: "Asqıran ona nə ilə cavab verir?" },
            { arabic: "يَهْدِيكُمُ اللَّهُ وَيُصْلِحُ بَالَكُمْ", translation: "'Yəhdikumullah və yuslihu baləkum' (Allah sizə hidayət versin və halınızı islah etsin)" },
            { arabic: "هَلْ هَذِهِ مِنْ سُنَنِ الإِسْلَامِ؟", translation: "Bu İslamın sünnələrindəndir?" },
            { arabic: "نَعَمْ، مِنْ حُقُوقِ الْمُسْلِمِ عَلَى الْمُسْلِمِ", translation: "Bəli, müsəlmanın müsəlman üzərindəki haqlarlarındandır" }
        ]
    },
    {
        id: 132,
        title: "Paltar Geyinmək Ədəbləri",
        dialogue: [
            { arabic: "بِأَيِّ جَانِبٍ نَبْدَأُ عِنْدَ لُبْسِ الثَّوْبِ؟", translation: "Paltar geyinərkən hansı tərəflə başlayırıq?" },
            { arabic: "نَبْدَأُ بِالْيَمِينِ", translation: "Sağ tərəflə başlayırıq" },
            { arabic: "وَعِنْدَ خَلْعِهِ؟", translation: "Bəs çıxararkən?" },
            { arabic: "نَبْدَأُ بِالْيَسَارِ", translation: "Sol tərəflə başlayırıq" },
            { arabic: "مَاذَا نَقُولُ عِنْدَ لُبْسِ الثَّوْبِ الْجَدِيدِ؟", translation: "Yeni paltar geyinərkən nə deyirik?" },
            { arabic: "اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيهِ", translation: "Allahım, Sənə həmd olsun ki, bunu mənə Sən geyindirdin" },
            { arabic: "هَلْ نَسْتَعِيذُ مِنْ شَرِّهِ؟", translation: "Onun şərindən Allaha sığınırıq?" },
            { arabic: "نَعَمْ، وَنَسْأَلُ اللَّهَ مِنْ خَيْرِهِ", translation: "Bəli, və Allahdan onun xeyrini istəyirik" }
        ]
    },
    {
        id: 133,
        title: "Evə Giriş və Çıxış",
        dialogue: [
            { arabic: "مَاذَا نَقُولُ عِنْدَ الخُرُوجِ مِنَ الْبَيْتِ؟", translation: "Evdən çıxarkən nə deyirik?" },
            { arabic: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ", translation: "Bismillah, Allaha təvəkkül etdim" },
            { arabic: "وَمَاذَا نُضِيفُ؟", translation: "Və nə əlavə edirik?" },
            { arabic: "لا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ", translation: "La həvlə və la quvvətə illa billah" },
            { arabic: "وَمَاذَا نَقُولُ عِنْدَ الدُّخُولِ؟", translation: "Bəs girərkən nə deyirik?" },
            { arabic: "بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا", translation: "Allahın adı ilə girdik və Allahın adı ilə çıxdıq" },
            { arabic: "هَلْ نُسَلِّمُ عَلَى أَهْلِ الْبَيْتِ؟", translation: "Ev əhlinə salam veririk?" },
            { arabic: "نَعَمْ، نَقُولُ: السَّلَامُ عَلَيْكُمْ", translation: "Bəli, 'Assalamu alaykum' deyirik" }
        ]
    },
    {
        id: 134,
        title: "Tualet (Xəla) Ədəbləri",
        dialogue: [
            { arabic: "بِأَيِّ قَدَمٍ نَدْخُلُ الْخَلَاءَ؟", translation: "Tualetə hansı ayaqla daxil oluruq?" },
            { arabic: "بِالْقَدَمِ الْيُسْرَى", translation: "Sol ayaqla" },
            { arabic: "مَاذَا نَقُولُ قَبْلَ الدُّخُولِ؟", translation: "Girməzdən əvvəl nə deyirik?" },
            { arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الخُبُثِ وَالْخَبَائِثِ", translation: "Allahım, pislikdən və pis şeylərdən (dişi və erkək şeytanlardan) Sənə sığınıram" },
            { arabic: "بِأَيِّ قَدَمٍ نَخْرُجُ؟", translation: "Hansı ayaqla çıxırıq?" },
            { arabic: "بِالْقَدَمِ الْيُمْنَى", translation: "Sağ ayaqla" },
            { arabic: "مَاذَا نَقُولُ عِنْدَ الْخُرُوجِ؟", translation: "Çıxarkən nə deyirik?" },
            { arabic: "غُفْرَانَكَ", translation: "Gufranək (Bağışlanmanı diləyirəm)" }
        ]
    },
    {
        id: 135,
        title: "Dəstəmazın Qaydası",
        dialogue: [
            { arabic: "كَيْفَ نَبْدَأُ الْوُضُوءَ؟", translation: "Dəstəmaza necə başlayırıq?" },
            { arabic: "بِالنِّيَّةِ فِي الْقَلْبِ وَالتَّسْمِيَةِ", translation: "Qəlbdə niyyət və Bismillah deməklə" },
            { arabic: "مَاذَا نَغْسِلُ أَوَّلًا؟", translation: "İlk öncə haranı yuyuruq?" },
            { arabic: "نَغْسِلُ الْكَفَّيْنِ ثَلَاثًا", translation: "Əl içi (biləyə qədər) üç dəfə yuyuruq" },
            { arabic: "ثُمَّ مَاذَا؟", translation: "Sonra nə?" },
            { arabic: "الْمَضْمَضَةُ وَالاِسْتِنْشَاقُ", translation: "Ağza və burna su almaq" },
            { arabic: "وَمَاذَا نَقُولُ بَعْدَ الْوُضُوءِ؟", translation: "Dəstəmazdan sonra nə deyirik?" },
            { arabic: "أَشْهَدُ أَنْ لا إِلَهَ إِلا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ", translation: "Eşhedü en la ilaha illallah və eşhedü enne Muhammeden abduhu va rasuluh" }
        ]
    },
    {
        id: 136,
        title: "Dəstəmazı Pozan Şeylər",
        dialogue: [
            { arabic: "مَا هِيَ نَوَاقِضُ الْوُضُوءِ؟", translation: "Dəstəmazı pozan şeylər hansılardır?" },
            { arabic: "الْخَارِجُ مِنَ السَّبِيلَيْنِ", translation: "İki yoldan (ön və arxadan) çıxan şeyler" },
            { arabic: "وَمَاذَا أَيْضًا؟", translation: "Və daha nə?" },
            { arabic: "النَّوْمُ الْعَمِيقُ وَزَوَالُ الْعَقْلِ", translation: "Dərin yatmaq və ağlın başdan getməsi" },
            { arabic: "هَلْ أَكْلُ لَحْمِ الإِبِلِ يَنْقُضُ؟", translation: "Dəvə əti yemək dəstəmazı pozur?" },
            { arabic: "نَعَمْ، يَنْقُضُ الْوُضُوءَ", translation: "Bəli, dəstəmazı pozur" },
            { arabic: "وَأَكْلُ لَحْمِ الْغَنَمِ؟", translation: "Bəs qoyun əti yemək?" },
            { arabic: "لَا يَنْقُضُ الْوُضُوءَ", translation: "Dəstəmazı pozmaz" }
        ]
    },
    {
        id: 137,
        title: "Təyəmmüm Hükmləri",
        dialogue: [
            { arabic: "مَتَى نَتَيَمَّمُ؟", translation: "Ne vaxt təyəmmüm edirik?" },
            { arabic: "عِنْدَ فَقْدِ الْمَاءِ أَوْ العَجْزِ عَنْ اسْتِعْمَالِهِ", translation: "Su olmadıqda və ya sudan istifadə edə bilmədikdə" },
            { arabic: "بِمَاذَا نَتَيَمَّمُ؟", translation: "Nə ilə təyəmmüm edirik?" },
            { arabic: "بِالصَّعِيدِ الطَّاهِرِ (التُّرَابِ)", translation: "Təmiz torpaqla" },
            { arabic: "كَيْفَ نَفْعَلُ؟", translation: "Necə edirik?" },
            { arabic: "ضَرْبَةٌ وَاحِدَةٌ لِلْوَجْهِ وَالْكَفَّيْنِ", translation: "Üzə və əllərə bir dəfə vurmaqla" },
            { arabic: "هَلْ يَجْزِي عَنِ الْغُسْلِ أَيْضًا؟", translation: "Qüslün əvəzinə də keçər?" },
            { arabic: "نَعَمْ، عِنْدَ العُذْرِ الشَّرْعِيِّ", translation: "Bəli, şəriətə uyğun üzr olduqda" }
        ]
    },
    {
        id: 138,
        title: "Qüslün Vacib Olması",
        dialogue: [
            { arabic: "مَتَى يَجِبُ الْغُسْلُ؟", translation: "Qüsl nə vaxt vacib olur?" },
            { arabic: "عِنْدَ الجَنَابَةِ وَخُرُوجِ المَنِيِّ", translation: "Cənabət vaxtı və məni çıxdıqda" },
            { arabic: "وَعَلَى المَرْأَةِ؟", translation: "Bəs qadına nə vaxt?" },
            { arabic: "بَعْدَ الطُّهْرِ مِنَ الحَيْضِ وَالنِّفَاسِ", translation: "Heyz və nifasdan təmizləndikdən sonra" },
            { arabic: "كَيْفَ نَغْتَسِلُ؟", translation: "Necə qüsl alırıq?" },
            { arabic: "بِتَعْمِيمِ المَاءِ عَلَى جَمِيعِ البَدَنِ", translation: "Suyu bütün bədənə çatdırmaqla" },
            { arabic: "مَعَ الْمَضْمَضَةِ وَالاِسْتِنْشَاقِ؟", translation: "Ağza və burna su almaqla bərabər?" },
            { arabic: "نَعَمْ، هُمَا وَاجِبَانِ فِي الغُسْلِ", translation: "Bəli, onlar qüsldə vacibdir" }
        ]
    },
    {
        id: 139,
        title: "Namazın Şərtləri",
        dialogue: [
            { arabic: "كَمْ شُرُوطُ الصَّلَاةِ؟", translation: "Namazın şərtləri neçədir?" },
            { arabic: "شُرُوطُهَا تِسْعَةٌ", translation: "Şərtləri doqquzdur" },
            { arabic: "اذْكُرْ بَعْضًا مِنْهَا", translation: "Onlardan bəzilərini de" },
            { arabic: "الإِسْلَامُ، وَالْعَقْلُ، وَالتَّمْيِيزُ", translation: "İslam, Ağıl və Təmizləmə (Fərqləndirmə yaşı)" },
            { arabic: "وَمَاذَا أَيْضًا؟", translation: "Və daha nə?" },
            { arabic: "الطَّهَارَةُ، وَسَتْرُ العَوْرَةِ، وَاسْتِقْبَالُ القِبْلَةِ", translation: "Təharət, övrəti örtmək və Qibləyə tərəf yönəlmək" },
            { arabic: "وَالدُّخُولُ فِي الْوَقْتِ؟", translation: "Və vaxtın girməsi?" },
            { arabic: "نَعَمْ، وَالنِّيَّةُ أَيْضًا", translation: "Bəli, və niyyət də hemçinin" }
        ]
    },
    {
        id: 140,
        title: "Namazın Rüknləri",
        dialogue: [
            { arabic: "كَمْ أَرْكَانُ الصَّلَاةِ؟", translation: "Namazın rüknləri neçədir?" },
            { arabic: "أَرْكَانُهَا أَرْبَعَةَ عَشَرَ", translation: "Rüknləri on dörddür" },
            { arabic: "اذْكُرْ بَعْضًا مِنْهَا", translation: "Onlardan bəzilərini zikr et" },
            { arabic: "الْقِيَامُ، وَتَكْبِيرَةُ الإِحْرَامِ، وَقِرَاءَةُ الفَاتِحَةِ", translation: "Qiyam (ayaqda durmaq), İhram təkbiri və Fatihəni oxumaq" },
            { arabic: "وَفِي الرُّكُوعِ وَالسُّجُودِ؟", translation: "Rükuda və səcdədə?" },
            { arabic: "الرُّكُوعُ، وَالسُّجُودُ عَلَى الأَعْضَاءِ السَّبْعَةِ", translation: "Rüku və yeddi əza üzərində səcdə etmək" },
            { arabic: "وَمَا هِيَ الطُّمَأْنِينَةُ؟", translation: "Bəs Təmkinlik (Tüməninə) nədir?" },
            { arabic: "السُّكُونُ فِي كُلِّ رُكْنٍ، وَهِيَ رُكْنٌ", translation: "Hər rükndə sakit durmaqdır, o da rükndür" }
        ]
    },
    {
        id: 141,
        title: "Namazın Vacibləri",
        dialogue: [
            { arabic: "كَمْ وَاجِبَاتُ الصَّلَاةِ؟", translation: "Namazın vacibləri neçədir?" },
            { arabic: "وَاجِبَاتُهَا ثَمَانِيَةٌ", translation: "Vacibləri səkkizdir" },
            { arabic: "مِثْلُ مَاذَا؟", translation: "Nə kimi?" },
            { arabic: "جَمِيعُ التَّكْبِيرَاتِ غَيْرَ تَكْبِيرَةِ الإِحْرَامِ", translation: "İhram təkbirindən başqa bütün təkbirlər" },
            { arabic: "وَمَاذَا يَقُولُ فِي الرُّكُوعِ؟", translation: "Rükuda nə deyilir?" },
            { arabic: "سُبْحَانَ رَبِّيَ العَظِيمِ", translation: "Subhanə Rabbiyəl-Azim" },
            { arabic: "وَمَاذَا يَقُولُ فِي السُّجُودِ؟", translation: "Səcdədə nə deyilir?" },
            { arabic: "سُبْحَانَ رَبِّيَ الأَعْلَى", translation: "Subhanə Rabbiyəl-A'lə" }
        ]
    },
    {
        id: 142,
        title: "Səhv Səcdəsi (Səhvu Səcdəsi)",
        dialogue: [
            { arabic: "مَتَى نَسْجُدُ لِلسَّهْوِ؟", translation: "Səhv səcdəsini ne vaxt edirik?" },
            { arabic: "عِنْدَ الزِّيَادَةِ أَوْ النَّقْصِ أَوْ الشَّكِّ فِي الصَّلَاةِ", translation: "Namazda artırma, əskiltmə və ya şəkk olduqda" },
            { arabic: "كَمْ سَجْدَةً نَسْجُدُ؟", translation: "Neçə səcdə edirik?" },
            { arabic: "سَجْدَتَيْنِ اثْنَتَيْنِ", translation: "İki səcdə edirik" },
            { arabic: "مَتَى تَكُونُ؟", translation: "Ne vaxt olur?" },
            { arabic: "قَبْلَ السَّلَامِ أَوْ بَعْدَهُ", translation: "Salamdan əvvəl və ya sonra" },
            { arabic: "هَلْ تُجْبِرُ النَّقْصَ فِي الْوَاجِبِ؟", translation: "Vacibdəki nəsikliyi bərpa edir?" },
            { arabic: "نَعَمْ، تُجْبِرُ النَّقْصَ فِي الْوَاجِبَاتِ", translation: "Bəli, vaciblərdəki əskikliyi bərpa edir" }
        ]
    },
    {
        id: 143,
        title: "Sünnə Namazları (Rəvatib)",
        dialogue: [
            { arabic: "مَا هِيَ السُّنَنُ الرَّوَاتِبُ؟", translation: "Rəvatib sünnələri hansılardır?" },
            { arabic: "اثْنَتَا عَشْرَةَ رَكْعَةً فِي اليَوْمِ وَاللَّيْلَةِ", translation: "Gecə və gündüzdə iyirmi rükət" },
            { arabic: "اذْكُرْهَا لِي", translation: "Onları mənə zikr et" },
            { arabic: "رَكْعَتَانِ قَبْلَ الْفَجْرِ، وَأَرْبَعٌ قَبْلَ الظُّهْرِ وَرَكْعَتَانِ بَعْدَهَا", translation: "Sübdən əvvəl iki, Zöhrdən əvvəl dörd, sonra iki" },
            { arabic: "وَمَاذَا بَعْدَ المَغْرِبِ وَالْعِشَاءِ؟", translation: "Bəs Məğrib və İşadan sonra?" },
            { arabic: "رَكْعَتَانِ بَعْدَ الْمَغْرِبِ، وَرَكْعَتَانِ بَعْدَ الْعِشَاءِ", translation: "Məğribdən sonra iki, İşadan sonra iki" },
            { arabic: "مَا أِجْرُ بَنَائِهَا؟", translation: "Onları qılanın mükafatı nədir?" },
            { arabic: "بُنِيَ لَهُ بَيْتٌ فِي الْجَنَّةِ", translation: "Onun üçün Cənnətdə bir ev tikilər" }
        ]
    },
    {
        id: 144,
        title: "Vitir Namazı",
        dialogue: [
            { arabic: "مَا هُوَ حُكْمُ صَلَاةِ الْوِتْرِ؟", translation: "Vitir namazının hökmü nədir?" },
            { arabic: "سُنَّةٌ مُؤَكَّدَةٌ جِدًّا", translation: "Çox təkid olunmuş sünnədir" },
            { arabic: "مَتَى وَقْتُهَا؟", translation: "Onun vaxtı ne vaxtdır?" },
            { arabic: "بَعْدَ صَلَاةِ الْعِشَاءِ إِلَى طُلُوعِ الْفَجْرِ", translation: "İşa namazından sonra sübh doğana qədər" },
            { arabic: "كَمْ أَقَلُّهَا؟", translation: "En azı neçə rükətdir?" },
            { arabic: "أَقَلُّهَا رَكْعَةٌ وَاحِدَةٌ", translation: "En azı bir rükətdir" },
            { arabic: "هَلْ فِيهَا قُنُوتٌ؟", translation: "Onda Qunut duası var?" },
            { arabic: "نَعَمْ، يَقْنُتُ فِي الرَّكْعَةِ الأَخِيرَةِ", translation: "Bəli, sonuncu rükətdə qunut tutulur" }
        ]
    },
    {
        id: 145,
        title: "Cənazə Namazı",
        dialogue: [
            { arabic: "كَمْ تَكْبِيرَةً فِي صَلَاةِ الْجَنَازَةِ؟", translation: "Cənazə namazında neçə təkbir var?" },
            { arabic: "أَرْبَعُ تَكْبِيرَاتٍ", translation: "Dörd təkbir var" },
            { arabic: "مَاذَا نَقْرَأُ بَعْدَ التَّكْبِيرَةِ الأُولَى؟", translation: "Birinci təkbirdən sonra nə oxuyuruq?" },
            { arabic: "سُورَةَ الْفَاتِحَةِ", translation: "Fatihə surəsini" },
            { arabic: "وَبَعْدَ الثَّانِيَةِ؟", translation: "İkincidən sonra?" },
            { arabic: "الصَّلَاةَ الإِبْرَاهِيمِيَّةَ", translation: "İbrahimiyyə salavatını" },
            { arabic: "وَبَعْدَ الثَّالِثَةِ؟", translation: "Üçüncüdən sonra?" },
            { arabic: "الدُّعَاءَ لِلْمَيِّتِ بِالْمَغْفِرَةِ", translation: "Məyyit üçün bağışlanma duasını" }
        ]
    },
    {
        id: 146,
        title: "Bayram Namazları",
        dialogue: [
            { arabic: "كَمْ عِيدًا لِلْمُسْلِمِينَ؟", translation: "Müsəlmanların neçə bayramı var?" },
            { arabic: "عِيدَانِ اثْنَانِ فَقَطْ", translation: "Təkcə iki bayramı var" },
            { arabic: "مَا هُمَا؟", translation: "Hansılardır?" },
            { arabic: "عِيدُ الْفِطْرِ وَعِيدُ الأَضْحَى", translation: "Ramazan bayramı və Qurban bayramı" },
            { arabic: "كَمْ رَكْعَةً صَلَاةُ الْعِيدِ؟", translation: "Bayram namazı neçə rükətdir?" },
            { arabic: "رَكْعَتَانِ بِلا أَذَانٍ وَلا إِقَامَةٍ", translation: "Azansız və iqaməsiz iki rükət" },
            { arabic: "أَيْنَ نُصَلِّيهَا؟", translation: "Onu harada qılırıq?" },
            { arabic: "فِي الْمُصَلَّى أَوْ فِي الْمَسْجِدِ", translation: "Musallada (açıq alanda) və ya məsciddə" }
        ]
    },
    {
        id: 147,
        title: "Zəkatul-Fitr (Fitrə Zəkatı)",
        dialogue: [
            { arabic: "مَتَى تُخْرَجُ زَكَاةُ الْفِطْرِ؟", translation: "Fitrə zəkatı ne vaxt çıxarılır?" },
            { arabic: "قَبْلَ صَلَاةِ عِيدِ الْفِطْرِ", translation: "Ramazan bayramı namazından əvvəl" },
            { arabic: "مَاذَا نُخْرِجُ فِيهَا؟", translation: "Onda nə çıxarırıq?" },
            { arabic: "صَاعًا مِنْ طَعَامِ أَهْلِ الْبَلَدِ", translation: "Şəhər əhlinin qidasından bir sa' (miqdar)" },
            { arabic: "كَمْ يُعَادِلُ الصَّاعُ؟", translation: "Bir sa' neçə kiloqrama bərabərdir?" },
            { arabic: "ثَلَاثَةَ كِيلُوجْرَامَاتٍ تَقْرِيبًا", translation: "Təxminən üç kiloqrama" },
            { arabic: "هَلْ تُعْطَى نَقْدًا عِنْدَ السَّلَفِ؟", translation: "Sələfə görə o pul ilə verilər?" },
            { arabic: "لَا، يُخْرَجُ طَعَامًا كَمَا سَنَّ النَّبِيُّ ﷺ", translation: "Xeyr, Peyğəmbərin ﷺ sünnət etdiyi kimi qida olaraq verilir" }
        ]
    },
    {
        id: 148,
        title: "Nəfsin Mücahidəsi",
        dialogue: [
            { arabic: "مَا هِيَ جِهَادُ النَّفْسِ؟", translation: "Nəfslə mücadilə (cihad) nədir?" },
            { arabic: "إِلْزَامُهَا بِالطَّاعَةِ وَمَنَعُهَا عَنِ الْهَوَى", translation: "Məfsi itaətə məcbur etmək və həva-həvəsdən çəkindirməkdir" },
            { arabic: "كَمْ مَرَاتِبُ جِهَادِ النَّفْسِ؟", translation: "Nəfslə cihadın neçə mərtəbəsi var?" },
            { arabic: "أَرْبَعُ مَرَاتِبَ", translation: "Dörd mərtəbəsi var" },
            { arabic: "اذْكُرْ الأُولَى", translation: "Birincisini zikr et" },
            { arabic: "تَعَلُّمُ الْهُدَى وَدِينِ الْحَقِّ", translation: "Hidayəti və haqq dini öyrənmək" },
            { arabic: "وَالثَّانِيَةُ؟", translation: "İkincisi?" },
            { arabic: "الْعَمَلُ بِهِ بَعْدَ عِلْمِهِ", translation: "Öyrəndikdən sonra onunla əməl etmək" }
        ]
    },
    {
        id: 149,
        title: "Həsəd və Qibtə",
        dialogue: [
            { arabic: "مَا هُوَ الْحَسَدُ الْمَذْمُومُ؟", translation: "Pislənilən həsəd nədir?" },
            { arabic: "تَمَنِّي زَوَالِ النِّعْمَةِ عَنِ الْغَيْرِ", translation: "Nemətin başqasından yox olmasını arzulamaqdır" },
            { arabic: "وَمَا هِيَ الْغِبْطَةُ؟", translation: "Bəs qibtə nədir?" },
            { arabic: "تَمَنِّي مِثْلِ النِّعْمَةِ دُونَ زَوَالِهَا", translation: "Nemətin yox olmasını istəmədən eynisini arzulamaqdır" },
            { arabic: "مَا حُكْمُ الْحَسَدِ؟", translation: "Həsədin hökmü nədir?" },
            { arabic: "الْحَسَدُ حَرَامٌ وَيَأْكُلُ الْحَسَنَاتِ", translation: "Həsəd haramdır və yaxşı əməlləri yeyib bitirir" },
            { arabic: "كَيْفَ نَحْمِي أَنْفُسَنَا مِنَ الْحَاسِدِ؟", translation: "Özümüzü paxıl insandan necə qoruyaq?" },
            { arabic: "بِالأَذْكَارِ وَالْمُعَوِّذَتَيْنِ", translation: "Zikrlərlə və iki sığınma surəsi ilə (Fələq, Nas)" }
        ]
    },
    {
        id: 150,
        title: "Qardaşlıq və Məhəbbət",
        dialogue: [
            { arabic: "مَا هِيَ الأخُوَّةُ فِي اللَّهِ؟", translation: "Allah xatirinə olan qardaşlıq nədir?" },
            { arabic: "أَعْظَمُ رَوَابِطِ الإِيمَانِ", translation: "İmanın ən böyük bağlarındandır" },
            { arabic: "مَاذَا نَفْعَلُ إِذَا أَحْبَبْنَا أَخًا فِي اللَّهِ؟", translation: "Bir qardaşı Allah üçün sevəndə nə edirik?" },
            { arabic: "نُخْبِرُهُ بِذَلِكَ، نَقُولُ: إِنِّي أُحِبُّكَ فِي اللَّهِ", translation: "Ona xəbər veririk, deyirik: 'Səni Allah üçün sevirəm'" },
            { arabic: "وَبِمَاذَا يُجِيبُ؟", translation: "O nə ilə cavab verir?" },
            { arabic: "أَحَبَّكَ الَّذِي أَحْبَبْتَنِي لَهُ", translation: "Məni hansı Allah üçün sevdinsə, O da səni sevsin" },
            { arabic: "مَا جَزَاءُ الْمُتَحَابِّينَ فِي اللَّهِ؟", translation: "Allah üçün bir-birini sevənlərin mükafatı nədir?" },
            { arabic: "يُظِلُّهُمُ اللَّهُ فِي ظِلِّهِ يَوْمَ لا ظِلَّ إِلا ظِلُّهُ", translation: "Öz kölgəsindən başqa kölgə olmayan gündə Allah onları Öz kölgəsində kölgələndirər" }
        ]
    },
    {
        id: 151,
        title: "Təqvanın Meyvələri",
        dialogue: [
            { arabic: "مَا هِيَ ثَمَرَاتُ التَّقْوَى؟", translation: "Təqvanın meyvələri (faydaları) hansılardır?" },
            { arabic: "الْمَخْرَجُ مِنَ الضَّيِّقِ وَتَيْسِيرُ الْأُمُورِ", translation: "Çətinlikdən çıxış yolu və işlərin asanlaşması" },
            { arabic: "مَا الدَّلِيلُ مِنَ الْقُرْآنِ؟", translation: "Qurandan dəlil nədir?" },
            { arabic: "وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا", translation: "Kim Allahdan qorxarsa, Allah ona çıxış yolu göstərər" },
            { arabic: "وَمَاذَا يَرْزُقُهُ؟", translation: "Və ona nə ruzi verər?" },
            { arabic: "وَيَرْزُقْهُ مِنْ حَيْثُ لا يَحْتَسِبُ", translation: "Və ona gözləmədiyi yerdən ruzi verər" },
            { arabic: "هَلْ يُكَفِّرُ عَنْهُ سَيِّئَاتِهِ؟", translation: "Onun günahlarını bağışlayar?" },
            { arabic: "نَعَمْ، وَيُعْظِمْ لَهُ أَجْرًا", translation: "Bəli, və onun mükafatını böyüdər" }
        ]
    },
    {
        id: 152,
        title: "Tawba-i Nasuh (Səmimi Tövbə)",
        dialogue: [
            { arabic: "مَا هِيَ التَّوْبَةُ النَّصُوحُ؟", translation: "Səmimi tövbə nədir?" },
            { arabic: "التَّوْبَةُ الصَّادِقَةُ الْخَالِصَةُ لِلَّهِ", translation: "Allah üçün olan doğru və xalis tövbədir" },
            { arabic: "هَلْ فِيهَا صِدْقُ الْعَزِيمَةِ؟", translation: "Onda qəti niyyət varmı?" },
            { arabic: "نَعَمْ، مَعَ عَدَمِ الْعَوْدَةِ إِلَى الذَّنْبِ", translation: "Bəli, bir daha günaha qayıtmamaq şərti ilə" },
            { arabic: "وَمَاذَا يَفْعَلُ إِذَا كَانَتْ لِلْآدَمِيِّ حُقُوقٌ؟", translation: "İnsanların haqları varsa nə etməlidir?" },
            { arabic: "يَرُدُّ الْحُقُوقَ إِلَى أَهْلِهَا", translation: "Haqqı sahiblərinə qaytarmalıdır" },
            { arabic: "مَتَى يُقْبَلُ هَذَا؟", translation: "Bu nə vaxta qədər qəbul olunur?" },
            { arabic: "قَبْلَ مَوْتِهِ أَوْ طُلُوعِ الشَّمْسِ مِنْ مَغْرِبِهَا", translation: "Ölümdən və ya günəşin qərbdən doğmasından əvvəl" }
        ]
    },
    {
        id: 153,
        title: "Kibr və Təvazökarlıq",
        dialogue: [
            { arabic: "مَا هُوَ الْكِبْرُ؟", translation: "Təkəbbürlük nədir?" },
            { arabic: "بَطَرُ الْحَقِّ وَغَمْطُ النَّاسِ", translation: "Haqqı inkar etmək və insanları kiçik görməkdir" },
            { arabic: "مَا حُكْمُ مَنْ كَانَ فِي قَلْبِهِ كِبْرٌ؟", translation: "Qəlbində təkəbbür olanın hökmü nədir?" },
            { arabic: "لا يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ", translation: "Qəlbində zərrə qədər təkəbbür olan Cənnətə girməz" },
            { arabic: "وَمَا هُوَ التَّوَاضُعُ؟", translation: "Bəs təvazökarlıq nədir?" },
            { arabic: "خَضُوعُ الْعَبْدِ لِلْحَقِّ وَلِلْخَلْقِ", translation: "Bəndənin haqqa və insanlara qarşı təvazökar olmasıdır" },
            { arabic: "مَا جَزَاءُ الْمُتَوَاضِعِ؟", translation: "Təvazökarın mükafatı nədir?" },
            { arabic: "مَنْ تَوَاضَعَ لِلَّهِ رَفَعَهُ اللَّهُ", translation: "Kim Allah üçün təvazökarlıq edərsə, Allah onu ucaldar" }
        ]
    },
    {
        id: 154,
        title: "Yalanın Təhlükəsi",
        dialogue: [
            { arabic: "مَا هُوَ الْكَذِبُ؟", translation: "Yalan nədir?" },
            { arabic: "الإِخْبَارُ بِغَيْرِ الْحَقِيقَةِ", translation: "Həqiqətə uyğun olmayan xəbər verməkdir" },
            { arabic: "إِلَى أَيْنَ يَهْدِي الْكَذِبُ؟", translation: "Yalan haraya aparır?" },
            { arabic: "يَهْدِي إِلَى الْفُجُورِ", translation: "Fıska (günaha) aparır" },
            { arabic: "وَالْفُجُورُ إِلَى أَيْنَ يَهْدِي؟", translation: "Bəs fısq haraya aparır?" },
            { arabic: "يَهْدِي إِلَى النَّارِ", translation: "Cəhənnəmə aparır" },
            { arabic: "هَلْ يُكْتَبُ الْكَاذِبُ عِنْدَ اللَّهِ؟", translation: "Yalançı Allah dərgahında qeyd olunar?" },
            { arabic: "نَعَمْ، يُكْتَبُ عِنْدَ اللَّهِ كَذَّابًا", translation: "Bəli, Allah dərgahında yalançı yazılar" }
        ]
    },
    {
        id: 155,
        title: "Əmanətdarlıq (Əmanət)",
        dialogue: [
            { arabic: "مَا هِيَ الأَمَانَةُ؟", translation: "Əmanət nədir?" },
            { arabic: "حِفْظُ حُقُوقِ اللَّهِ وَحُقُوقِ الْعِبَادِ", translation: "Allahın və bəndələrin haqlarını qorumaqdır" },
            { arabic: "مَا ضِدُّ الأَمَانَةِ؟", translation: "Əmanətin ziddi nədir?" },
            { arabic: "الْخِيَانَةُ", translation: "Xəyanətdir" },
            { arabic: "مَا صِفَةُ الْمُنَافِقِ فِي الأَمَانَةِ؟", translation: "Münafiqin əmanətdəki sifəti nədir?" },
            { arabic: "إِذَا اؤْتُمِنَ خَانَ", translation: "Əmanət olunduqda xəyanət edər" },
            { arabic: "هَلْ يَجِبُ أَدَاءُ الأَمَانَاتِ؟", translation: "Əmanətləri qaytarmaq vacibdir?" },
            { arabic: "نَعَمْ، إنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تُؤَدُّوا الأَمَانَاتِ إِلَى أَهْلِهَا", translation: "Bəli, 'Şübhəsiz ki, Allah sizə əmanətləri sahiblərinə qaytarmanızı əmr edir'" }
        ]
    },
    {
        id: 156,
        title: "Əhdə Vəfa (Sözündə Durmaq)",
        dialogue: [
            { arabic: "مَا هُوَ الْوَفَاءُ بِالْعَهْدِ؟", translation: "Əhdə vəfa etmək nədir?" },
            { arabic: "الإِلْتِزَامُ بِالْوَعْدِ وَالْعَقْدِ", translation: "Vədə və müqaviləyə riayət etməkdir" },
            { arabic: "مَا حُكْمُ نَقْضِ الْعَهْدِ؟", translation: "Əhdi pozmağın hökmü nədir?" },
            { arabic: "حَرَامٌ وَمِنْ صِفَاتِ الْمُنَافِقِينَ", translation: "Haramdır və münafiqlərin sifətlərindəndir" },
            { arabic: "مَاذَا قَالَ اللَّهُ فِي الْمُؤْمِنِينَ؟", translation: "Allah möminlər haqqında nə buyurub?" },
            { arabic: "وَالَّذِينَ هُمْ لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ", translation: "Onlar əmanətlərinə və əhdlərinə riayət edəndilər" },
            { arabic: "هَلْ يُسْأَلُ الْعَبْدُ عَنْ عَهْدِهِ؟", translation: "Bəndə əhdindən sorğu-sual olunacaq?" },
            { arabic: "نَعَمْ، إِنَّ الْعَهْدَ كَانَ مَسْئُولًا", translation: "Bəli, şübhəsiz ki, əhd sorğu-suala çəkiləcəkdir" }
        ]
    },
    {
        id: 157,
        title: "Qeybətin Haramlığı",
        dialogue: [
            { arabic: "مَا هِيَ الْغِيبَةُ؟", translation: "Qeybət nədir?" },
            { arabic: "ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ فِي غَيْبَتِهِ", translation: "Qardaşını onun olmadığı yerdə xoşlamadığı şeylə anmağındır" },
            { arabic: "وَإِنْ كَانَ فِيهِ مَا أَقُولُ؟", translation: "Bəs dediyim şey onda varsa?" },
            { arabic: "فَقَدِ اغْتَبْتَهُ", translation: "Artıq onun qeybətini etmiş olursan" },
            { arabic: "وَإِنْ لَمْ يَكُنْ فِيهِ؟", translation: "Bəs dediyim şey onda yoxdursa?" },
            { arabic: "فَقَدْ بَهَتَّهُ (اِفْتَرَيْتَ عَلَيْهِ)", translation: "Artıq ona böhtan atmış olursan" },
            { arabic: "بِمَاذَا شَبَّهَ اللَّهُ الْغِيبَةَ؟", translation: "Allah qeybəti nəyə bənzətmişdir?" },
            { arabic: "بِأَكْلِ لَحْمِ الأَخِ المَيِّتِ", translation: "Ölmüş qardaşın ətini yeməyə" }
        ]
    },
    {
        id: 158,
        title: "Nəmimə (Söz Gəzdirmək)",
        dialogue: [
            { arabic: "مَا هِيَ النَّمِيمَةُ؟", translation: "Xəbərçilik (Nəmimə) nədir?" },
            { arabic: "نَقْلُ الْكَلامِ بَيْنَ النَّاسِ لِلإِفْسَادِ", translation: "İnsanlar arasında araları vurmaq üçün söz gəzdirməkdir" },
            { arabic: "مَا حُكْمُ النَّمِيمَةِ؟", translation: "Xəbərçiliyin hökmü nədir?" },
            { arabic: "كَبِيرَةٌ مِنْ كَبَائِرِ الذُّنُوبِ", translation: "Böyük günahlardan bir günahdır" },
            { arabic: "مَا عَقَابُ النَّمَّامِ؟", translation: "Xəbərçinin cəzası nədir?" },
            { arabic: "لا يَدْخُلُ الْجَنَّةَ نَمَّامٌ", translation: "Xəbərçi Cənnətə girməz" },
            { arabic: "هَلْ يُعَذَّبُ فِي الْقَبْرِ؟", translation: "O qəbirdə əzab çəkər?" },
            { arabic: "نَعَمْ، النَّمِيمَةُ مِنْ أَسْبَابِ عَذَابِ الْقَبْرِ", translation: "Bəli, xəbərçilik qəbir əzabının səbəblərindəndir" }
        ]
    },
    {
        id: 159,
        title: "Suizən (Pisi Zənn Etmək)",
        dialogue: [
            { arabic: "مَا هُوَ السُّوءُ الظَّنِّ؟", translation: "Suizən (pis zənn) nədir?" },
            { arabic: "اتِّهَامُ الْمُسْلِمِ بِالشَّرِّ بِلا دَلِيلٍ", translation: "Müsəlmanı dəlil olmadan şərlə ittiham etməkdir" },
            { arabic: "مَاذَا قَالَ اللَّهُ عَنِ الظَّنِّ؟", translation: "Allah zənn haqqında nə buyurub?" },
            { arabic: "اجْتَنِبُوا كَثِيرًا مِنَ الظَّنِّ إِنَّ بَعْضَ الظَّنِّ إِثْمٌ", translation: "Zənnin çoxundan çəkinin, çünki zənnin bəzisi günahdır" },
            { arabic: "بِمَاذَا نَظُنُّ بِإِخْوَانِنَا؟", translation: "Qardaşlarımız haqqında necə zənn etməliyik?" },
            { arabic: "نَظُنُّ بِهِمْ خَيْرًا وَنَحْمِلُهُمْ عَلَى أَحْسَنِ الْمَحَامِلِ", translation: "Onlar haqqında xeyir düşünür və gözəl şeylərə yozuruq" },
            { arabic: "هَلْ نَجَسَّسُ عَلَيْهِمْ؟", translation: "Onları pusuruq (güdürük)?" },
            { arabic: "لَا، وَلا تَجَسَّسُوا", translation: "Xeyr, 'Biri-birinizi güdməyin'" }
        ]
    },
    {
        id: 160,
        title: "Həsədin Təhlükəsi",
        dialogue: [
            { arabic: "مَاذَا يَفْعَلُ الْحَسَدُ فِي الْحَسَنَاتِ؟", translation: "Həsəd yaxşı əməllərə nə edər?" },
            { arabic: "يَأْكُلُ الْحَسَنَاتِ كَمَا تَأْكُلُ النَّارُ الْحَطَبَ", translation: "Od odunu yandırıb bitirdiyi kimi yaxşılıqları yeyər" },
            { arabic: "مَنْ هُوَ الْمَحْسُودُ؟", translation: "Paxıllıq olunan kimdir?" },
            { arabic: "مَنْ أَنْعَمَ اللَّهُ عَلَيْهِ بِنِعْمَةٍ", translation: "Allahın nəsib etdiyi nemət sahibi olan kəsdir" },
            { arabic: "مَاذَا يَقُولُ الْمُسْلِمُ إِذَا رَأَى نِعْمَةً؟", translation: "Müsəlman nemət gördükdə nə deməlidir?" },
            { arabic: "مَا شَاءَ اللَّهُ لا قُوَّةَ إِلا بِاللَّهِ، بَارَكَ اللَّهُ", translation: "Maşallah la quvvətə illa billah, barəkallah" },
            { arabic: "كَيْفَ يُعَالِجُ الْحَاسِدُ نَفْسَهُ؟", translation: "Paxıl insan özünü necə müalicə etməlidir?" },
            { arabic: "بِالرِّضَا بِقَضَاءِ اللَّهِ وَالدُّعَاءِ لِلْمَغْبُوطِ", translation: "Allahın qədərinə razı olmaqla və o şəxsə dua etməklə" }
        ]
    },
    {
        id: 161,
        title: "Qəzəbi Udmaq (Hilm)",
        dialogue: [
            { arabic: "مَنْ هُوَ الشَّدِيدُ الْحَقِيقِيُّ؟", translation: "Həqiqi güclü kəs kimdir?" },
            { arabic: "الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ", translation: "Qəzəblənən an özünə sahib olan kəsdir" },
            { arabic: "مَاذَا نَفْعَلُ عِنْدَ الْغَضَبِ؟", translation: "Qəzəblənəndə nə etməliyik?" },
            { arabic: "نَسْتَعِيذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ", translation: "Qovulmuş şeytandan Allaha sığınırıq" },
            { arabic: "وَإِنْ كُنَّا قِيَامًا؟", translation: "Ayaqdasamsa nə edək?" },
            { arabic: "نَجْلِسُ، وَإِنْ كُنَّا جُلُوسًا نَضْطَجِعُ", translation: "Otururuq, oturuqsa uzanırıq" },
            { arabic: "هَلْ يُفِيدُ الْوُضُوءُ؟", translation: "Dəstəmaz almaq fayda verər?" },
            { arabic: "نَعَمْ، الْغَضَبُ مِنَ الشَّيْطَانِ وَالشَّيْطَانُ خُلِقَ مِنَ النَّارِ", translation: "Bəli, qəzəb şeytandandır, şeytan da oddan yaradılmışdır" }
        ]
    },
    {
        id: 162,
        title: "Səxavət və Cimrilik",
        dialogue: [
            { arabic: "مَا هُوَ الْكَرَمُ؟", translation: "Səxavət nədir?" },
            { arabic: "إِنْفَاقُ الْمَالِ فِي وُجُوهِ الْخَيْرِ", translation: "Malı xeyir yollarda xərcləməkdir" },
            { arabic: "وَمَا هُوَ الْبُخْلُ؟", translation: "Bəs xəsislik (cimrilik) nədir?" },
            { arabic: "مَنْعُ أَدَاءِ الْوَاجِبَاتِ المَالِيَّةِ", translation: "Vacib olan maliyyə haqlarını verməkdən imtina etməkdir" },
            { arabic: "مَاذَا يَقُولُ الْمَلَكُ كُلَّ صَبَاحٍ؟", translation: "Mələk hər səhər nə dua edər?" },
            { arabic: "اللَّهُمَّ أَعْطِ مُنْفِقًا خَلَفًا وَأَعْطِ مُمْسِكًا تَلَفًا", translation: "Allahım, infaq edənə əvəzini ver, xəsislik edənə tələf ver" },
            { arabic: "هَلْ يَنْقُصُ الْمَالُ بِالصَّدَقَةِ؟", translation: "Sədəqə ilə mal azalar?" },
            { arabic: "لَا، ما نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ", translation: "Xeyr, 'Sədəqə malı azaltmaz'" }
        ]
    },
    {
        id: 163,
        title: "Təvazökarlığın Fəziləti",
        dialogue: [
            { arabic: "كَيْفَ يَكُونُ الْمُؤْمِنُ مَعَ النَّاسِ؟", translation: "Mömin insanlarla necə davranar?" },
            { arabic: "هَيِّنًا لَيِّنًا سَهْلًا قَرِيبًا", translation: "Təvazökar, yumşaq, asan və yaxın" },
            { arabic: "هَلْ يَتَكَبَّرُ بِعِلْمِهِ أَوْ مَالِهِ؟", translation: "Elmi və ya malı ilə təkəbbürlük edər?" },
            { arabic: "لَا، لا يَتَكَبَّرُ أَبَدًا", translation: "Xeyr, heç vaxt təkəbbürlük etməz" },
            { arabic: "مَاذَا قَالَ النَّبِيُّ ﷺ فِي التَّوَاضُعِ؟", translation: "Peyğəmbər ﷺ təvazökarlıq haqqında nə buyurub?" },
            { arabic: "إنَّ اللَّهَ أَوْحَى إِلَيَّ أَنْ تَوَاضَعُوا", translation: "Allah mənə təvazökar olmağınızı vəhy etdi" },
            { arabic: "حَتَّى لا يَبْغِيَ أَحَدٌ عَلَى أَحَدٍ؟", translation: "Hətta heç kim başqasına zülm etməsin diye?" },
            { arabic: "نَعَمْ، وَلا يَفْخَرَ أَحَدٌ عَلَى أَحَدٍ", translation: "Bəli, və heç kim başqasına fəxr etməsin" }
        ]
    },
    {
        id: 164,
        title: "Həya İmandandır",
        dialogue: [
            { arabic: "مَا هُوَ الْحَيَاءُ؟", translation: "Həya nədir?" },
            { arabic: "خُلُقٌ يَحُثُّ عَلَى فِعْلِ الْجَمِيلِ وَتَرْكِ الْقَبِيحِ", translation: "Gözəl işlər görməyə və pis işləri tərk etməyə sövq edən əxlaqdır" },
            { arabic: "مَا مَكَانَةُ الْحَيَاءِ فِي الإِيمَانِ؟", translation: "Həyanın imandakı yeri nədir?" },
            { arabic: "الْحَيَاءُ شُعْبَةٌ مِنَ الإِيمَانِ", translation: "Həya imandan bir şöbədir" },
            { arabic: "هَلْ يَأْتِي الْحَيَاءُ إِلا بِخَيْرٍ؟", translation: "Həya yalnız xeyir gətirər?" },
            { arabic: "لَا، الْحَيَاءُ لا يَأْتِي إِلا بِخَيْرٍ", translation: "Xeyr, həya yalnız xeyir gətirər" },
            { arabic: "مَاذَا عَنِ الْحَيَاءِ مِنَ اللَّهِ؟", translation: "Bəs Allahdan həya etmək necədir?" },
            { arabic: "أَنْ تَحْفَظَ الرَّأْسَ وَمَا وَعَى وَالْبَطْنَ وَمَا حَوَى", translation: "Başı və daşıdıqlarını, qarnı və ehtiva etdiklərini qorumaqdır" }
        ]
    },
    {
        id: 165,
        title: "Hədiyyələşmək (Təhaddu)",
        dialogue: [
            { arabic: "مَا حُكْمُ الإِهْدَاءِ بَيْنَ الْمُسْلِمِينَ؟", translation: "Müsəlmanlar arasında hədiyyə verməyin hökmü nədir?" },
            { arabic: "سُنَّةٌ مُسْتَحَبَّةٌ تُورِثُ الْمَحَبَّةَ", translation: "Məhəbbət qazandıran müstəhəb sünnədir" },
            { arabic: "مَاذَا قَالَ النَّبِيُّ ﷺ فِي ذَلِكَ؟", translation: "Peyğəmbər ﷺ bu barədə nə buyurub?" },
            { arabic: "تَهَادَوْا تَحَابُّوا", translation: "Hədiyyələşin ki, bir-birinizi sevəsiniz" },
            { arabic: "هَلْ نَرُدُّ الْهَدِيَّةَ؟", translation: "Hədiyyəni rədd edirik?" },
            { arabic: "لَا، لا تَرُدُّ الْهَدِيَّةَ إِلا لِعُذْرٍ", translation: "Xeyr, üzr olmadan hədiyyə rədd olunmaz" },
            { arabic: "مَاذَا نَقُولُ لِلْمُهْدِي؟", translation: "Hədiyyə verənə nə deyirik?" },
            { arabic: "جَزَاكَ اللَّهُ خَيْرًا", translation: "Jazakallahu khayran" }
        ]
    },
    {
        id: 166,
        title: "Qonşu Haqqı",
        dialogue: [
            { arabic: "مَا هُوَ حَقُّ الْجَارِ؟", translation: "Qonşunun haqqı nədir?" },
            { arabic: "الإِحْسَانُ إِلَيْهِ وَكَفُّ الأَذَى عَنْهُ", translation: "Ona yaxşılıq etmək və əziyyət verməkdən çəkinməkdir" },
            { arabic: "كَمْ أَنْوَاعُ الْجِيرَانِ؟", translation: "Qonşuların neçə növü var?" },
            { arabic: "ثَلَاثَةٌ: جَارٌ لَهُ حَقٌّ، وَجَارٌ لَهُ حَقَّانِ، وَجَارٌ لَهُ ثَلَاثَةُ حُقُوقٍ", translation: "Üç növü var: Bir haqqı olan, iki haqqı olan və üç haqqı olan" },
            { arabic: "مَنْ لَهُ ثَلَاثَةُ حُقُوقٍ؟", translation: "Üç haqqı olan kimdir?" },
            { arabic: "الْجَارُ الْمُسْلِمُ الْقَرِيبُ", translation: "Qohum olan Müsəlman qonşu" },
            { arabic: "مَاذَا قَالَ جِبْرِيلُ عَنِ الْجَارِ؟", translation: "Cəbrayıl qonşu haqqında nə tövsiyə edib?" },
            { arabic: "ما زَالَ يُوصِينِي بِالْجَارِ حَتَّى ظَنَنْتُ أَنَّهُ سَيُوَرِّثُهُ", translation: "Mənə qonşunu o qədər tapşırdı ki, onun qonşuya mirasçı olacağını zənn etdim" }
        ]
    },
    {
        id: 167,
        title: "Qonaq Pərvərlik (İkramuz-Zeyf)",
        dialogue: [
            { arabic: "مَا حُكْمُ إِكْرَامِ الضَّيْفِ؟", translation: "Qonağa ikram etməyin hökmü nədir?" },
            { arabic: "وَاجِبٌ وَمِنْ عَلَامَاتِ الإِيمَانِ", translation: "Vacibdir və imanın əlamətlərindəndir" },
            { arabic: "مَا الدَّلِيلُ؟", translation: "Dəlil nədir?" },
            { arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيُكْرِمْ ضَيْفَهُ", translation: "Kim Allaha və axirət gününə inanırsa, qonağına ikram etsin" },
            { arabic: "كَمْ مُدَّةُ الضِّيَافَةِ الْوَاجِبَةِ؟", translation: "Vacib olan qonaqlıq müddəti nə qədərdir?" },
            { arabic: "يَوْمٌ وَلَيْلَةٌ، وَالتَّمَامُ ثَلَاثَةُ أَيَّامٍ", translation: "Bir gün bir gecə, tam müddət isə üç gündür" },
            { arabic: "وَمَا زَادَ عَنْ ذَلِكَ؟", translation: "Ondan artığı nədir?" },
            { arabic: "فَهُوَ صَدَقَةٌ عَلَيْهِ", translation: "Ona olunan sədəqədir" }
        ]
    },
    {
        id: 168,
        title: "Yetimə Qayğı",
        dialogue: [
            { arabic: "مَنْ هُوَ الْيَتِيمُ؟", translation: "Yetim kimdir?" },
            { arabic: "مَنْ مَاتَ أَبُوهُ وَهُوَ صَغِيرٌ قَبْلَ الْبُلُوغِ", translation: "Atası vəfat etmiş, həddi-büluğa çatmamış kiçik uşaqdır" },
            { arabic: "مَا أِجْرُ كَافِلِ الْيَتِيمِ؟", translation: "Yetimə baxanın mükafatı nədir?" },
            { arabic: "مُرَافَقَةُ النَّبِيِّ ﷺ فِي الْجَنَّةِ", translation: "Cənnətdə Peyğəmbərlə ﷺ qonşu (bərabər) olmaq" },
            { arabic: "كَيْفَ أَشَارَ النَّبِيُّ ﷺ؟", translation: "Peyğəmbər ﷺ necə işarə etmişdir?" },
            { arabic: "أَشَارَ بِالسَّبَّابَةِ وَالْوُسْطَى", translation: "Şəhadət barmağı və orta barmağı ilə" },
            { arabic: "مَا حُكْمُ أِكْلِ مَالِ الْيَتِيمِ؟", translation: "Yetim malı yeməyin hökmü nədir?" },
            { arabic: "كَبِيرَةٌ عَظِيمَةٌ، يَأْكُلُونَ فِي بُطُونِهِمْ نَارًا", translation: "Çox böyük günahdır, qarınlarına od doldururlar" }
        ]
    },
    {
        id: 169,
        title: "Zəif və Kasıblara Kömək",
        dialogue: [
            { arabic: "مَا فَضْلُ السَّاعِي عَلَى الأَرْمَلَةِ وَالْمِسْكِينِ؟", translation: "Dul qadına və kasıba kömək edənin fəziləti nədir?" },
            { arabic: "كَالْمُجَاهِدِ فِي سَبِيلِ اللَّهِ", translation: "Allah yolunda cihad edən kimsə kimidir" },
            { arabic: "أَوْ كَمَنْ؟", translation: "Yaxud kim kimidir?" },
            { arabic: "كَالَّذِي يَصُومُ النَّهَارَ وَيَقُومُ اللَّيْلَ", translation: "Gündüzləri oruc tutub gecələri namaz qılan kimsə kimi" },
            { arabic: "هَلْ يُنْصَرُ الْمُسْلِمُونَ بِالضُّعَفَاءِ؟", translation: "Müsəlmanlara zəiflərinə görə kömək olunar?" },
            { arabic: "نَعَمْ، إِنَّمَا تُنْصَرُونَ وَتُرْزَقُونَ بِضُعَفَائِكُمْ", translation: "Bəli, 'Siz yalnız zəiflərinizin duası və ixlası ilə yardım olunur və ruziləndirilirsiniz'" },
            { arabic: "بِمَاذَا؟", translation: "Nə ilə?" },
            { arabic: "بِدَعْوَتِهِمْ وَصَلَاتِهِمْ وَإِخْلَاصِهِمْ", translation: "Onların duası, namazı və ixlası ilə" }
        ]
    },
    {
        id: 170,
        title: "Nəfsi Təmizləmək (Təzkiyyə)",
        dialogue: [
            { arabic: "مَا هِيَ تَزْكِيَةُ النَّفْسِ؟", translation: "Nəfsin təzkiyyəsi (təmizlənməsi) nədir?" },
            { arabic: "تَطْهِيرُهَا مِنَ الذُّنُوبِ وَتَحْلِيَتُهَا بِالطَّاعَاتِ", translation: "Onu günahlardan təmizləyib itaətlərlə bəzəməkdir" },
            { arabic: "مَا فَلَاحُ مَنْ زَكَّاهَا؟", translation: "Onu təmizləyənin nicatı nədir?" },
            { arabic: "قَدْ أَفْلَحَ مَنْ زَكَّاهَا", translation: "Onu təmizləyən artıq nicat tapmışdır" },
            { arabic: "وَمَنْ دَسَّاهَا؟", translation: "Bəs onu günaha batıran?" },
            { arabic: "وَقَدْ خَابَ مَنْ دَسَّاهَا", translation: "Onu günaha batıran isə ziyana uğramışdır" },
            { arabic: "بِمَاذَا تُزَكَّى النَّفْسُ؟", translation: "Nəfs nə ilə təmizlənir?" },
            { arabic: "بِالتَّوْحِيدِ وَالْعَمَلِ الصَّالِحِ", translation: "Təvhid və saleh əməllə" }
        ]
    },
    {
        id: 171,
        title: "Tövbə Qapısı",
        dialogue: [
            { arabic: "هَلْ تُقْبَلُ التَّوْبَةُ عِنْدَ كُلِّ ذَنْبٍ؟", translation: "Hər bir günahdan tövbə qəbul olunarmı?" },
            { arabic: "نَعَمْ، إِذَا اسْتَجْمَعَتِ الشُّرُوطَ", translation: "Bəli, şərtləri özündə cəmlədikdə" },
            { arabic: "هَلْ يَغْفِرُ اللَّهُ الذُّنُوبَ جَمِيعًا؟", translation: "Allah bütün günahları bağışlayar?" },
            { arabic: "نَعَمْ، إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا", translation: "Bəli, 'Şübhəsiz ki, Allah bütün günahları bağışlayar'" },
            { arabic: "حَتَّى الشِّرْكَ إِذَا تَابَ مِنْهُ؟", translation: "Hətta tövbə etdikdə şirk günahını da?" },
            { arabic: "نَعَمْ، التَّوْبَةُ تَهْدِمُ مَا كَانَ قَبْلَهَا", translation: "Bəli, tövbə özündən əvvəlki günahları silər" },
            { arabic: "فَلَا نَيْأَسُ مِنْ رَحْمَةِ اللَّهِ؟", translation: "Deyəmsə Allahın rəhmətindən ümid üzmürük?" },
            { arabic: "لَا تَقْنَطُوا مِنْ رَحْمَةِ اللَّهِ", translation: "'Allahın rəhmətindən ümidinizi üzməyin'" }
        ]
    },
    {
        id: 172,
        title: "İstiğfarın Bərəkəti",
        dialogue: [
            { arabic: "مَاذَا يَجْلِبُ الإِسْتِغْفَارُ لِلْعَبْدِ؟", translation: "İstiğfar bəndəyə nə gətirər?" },
            { arabic: "الْمَطَرَ وَالأَمْوَالَ وَالْبَنِينَ", translation: "Yağış, mal-dövlət və övladlar" },
            { arabic: "مَا الدَّلِيلُ مِنْ سُورَةِ نُوحٍ؟", translation: "Nuh surəsindən dəlil nədir?" },
            { arabic: "اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا", translation: "Rəbbinizdən bağışlanma diləyin, çünki O, çox bağışlayandır" },
            { arabic: "وَمَاذَا يُرْسِلِ السَّمَاءَ؟", translation: "Və səmanı necə göndərər?" },
            { arabic: "يُرْسِلِ السَّمَاءَ عَلَيْكُمْ مِدْرَارًا", translation: "Üzərinizə bolluca yağış göndərər" },
            { arabic: "وَيُمْدِدْكُمْ بِمَاذَا؟", translation: "Və sizə nə ilə imdad (kömək) edər?" },
            { arabic: "وَيُمْدِدْكُمْ بِأَمْوَالٍ وَبَنِينَ", translation: "Sizə mal-dövlət və övladlarla kömək edər" }
        ]
    },
    {
        id: 173,
        title: "Allaha Həmd Etmək (Şükür)",
        dialogue: [
            { arabic: "مَا هُوَ الْحَمْدُ؟", translation: "Həmd nədir?" },
            { arabic: "الثَّنَاءُ عَلَى اللَّهِ بِصِفَاتِ كَمَالِهِ", translation: "Allaha Onun kamillik sifətləri ilə tərif deməkdir" },
            { arabic: "مَا هُوَ أَفْضَلُ الدُّعَاءِ؟", translation: "Ən fəzilətli dua hansıdır?" },
            { arabic: "الْحَمْدُ لِلَّهِ", translation: "Alhamdulillah" },
            { arabic: "مَاذَا تَمْلَأُ الْحَمْدُ لِلَّهِ؟", translation: "Alhamdulillah nəyi doldurar?" },
            { arabic: "تَمْلَأُ الْمِيزَانَ", translation: "Mizan tərəzisini doldurar" },
            { arabic: "مَتَى نَحْمَدُ اللَّهَ؟", translation: "Allaha ne vaxt həmd edirik?" },
            { arabic: "فِي كُلِّ حَالٍ، فِي السَّرَّاءِ وَالضَّرَّاءِ", translation: "Hər bir halda, sevincli və çətin vaxtda" }
        ]
    },
    {
        id: 174,
        title: "Təsbəh və Təhlil (Zikr)",
        dialogue: [
            { arabic: "مَا مَعْنَى سُبْحَانَ اللَّهِ؟", translation: "Subhanallahın mənası nədir?" },
            { arabic: "تَنْزِيهُ اللَّهِ عَنْ كُلِّ نَقْصٍ", translation: "Allaha hər bir nöqsanı uzaq tutmaqdır" },
            { arabic: "وَمَا مَعْنَى اللَّهُ أَكْبَرُ؟", translation: "Allahu Əkbərin mənası nədir?" },
            { arabic: "اللَّهُ أَعْظَمُ مِنْ كُلِّ شَيْءٍ", translation: "Allah hər şeydən daha əzəmətlidir" },
            { arabic: "كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ؟", translation: "Dildə yüngül olan iki kəlmə hansıdır?" },
            { arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ", translation: "Subhanallahi və bihamdihi Subhanallahil-Azim" },
            { arabic: "ثَقِيلَتَانِ فِي الْمِيزَانِ؟", translation: "Mizanda ağır gəlirlər?" },
            { arabic: "نَعَمْ، حَبِيبَتَانِ إِلَى الرَّحْمَنِ", translation: "Bəli, Rəhmənə sevimli olan iki kəlmədir" }
        ]
    },
    {
        id: 175,
        title: "Bəlalara Səbr Etmək",
        dialogue: [
            { arabic: "لِمَاذَا يَبْتَلِي اللَّهُ الْمُؤْمِنِينَ؟", translation: "Allah möminləri nə üçün imtahana çəkər (bəla verər)?" },
            { arabic: "لِيَرْفَعَ دَرَجَاتِهِمْ وَيُكَفِّرَ سَيِّئَاتِهِمْ", translation: "Dərəcələrini ucaltmaq və günahlarını silmək üçün" },
            { arabic: "مَنْ أَشَدُّ النَّاسِ بَلَاءً؟", translation: "İnsanların ən şiddətli imtahan olunanı kimdir?" },
            { arabic: "الأَنْبِيَاءُ ثُمَّ الأَمْثَلُ فَالأَمْثَلُ", translation: "Peyğəmbərlər, sonra dində onlara yaxın olanlar" },
            { arabic: "كَيْفَ يُبْتَلَى الرَّجُلُ؟", translation: "Kişi necə imtahan olunar?" },
            { arabic: "عَلَى حَسَبِ دِينِهِ", translation: "Dininin dərəcəsinə görə" },
            { arabic: "مَا الواجِبُ عِنْدَ الصَّدْمَةِ الأُولَى؟", translation: "İlk bəla anında borc nədir?" },
            { arabic: "الصَّبْرُ، إِنَّمَا الصَّبْرُ عِنْدَ الصَّدْمَةِ الأُولَى", translation: "Səbr etmək, 'Həqiqi səbr ilk bəla anındakı səbrdir'" }
        ]
    },
    {
        id: 176,
        title: "Qədərə Razılıq (Rida)",
        dialogue: [
            { arabic: "مَا هُوَ الرِّضَا بِالْقَضَاءِ؟", translation: "Qədərə razı olmaq nədir?" },
            { arabic: "سُكُونُ الْقَلْبِ لِمَا أَمَضَاهُ اللَّهُ", translation: "Allahın hökmünə qəlbin rahatlıq tapmasıdır" },
            { arabic: "هَلْ هُوَ أَعْلَى مِنَ الصَّبْرِ؟", translation: "O səbrdən üstündür?" },
            { arabic: "نَعَمْ، الرِّضَا مُسْتَحَبٌّ وَالصَّبْرُ وَاجِبٌ", translation: "Bəli, razılıq müstəhəb, səbr isə vacibdir" },
            { arabic: "مَاذَا يَقُولُ الْمُؤْمِنُ عِنْدَ الْمُصِيبَةِ؟", translation: "Mömin musibət anında nə deyər?" },
            { arabic: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ", translation: "İnna lillahi və inna ileyhi raciun (Biz Allaha məxsusuq və Ona qayıdacağıq)" },
            { arabic: "وَمَاذَا يُعَوِّضُهُ اللَّهُ؟", translation: "Allah onun əvəzinə nə verər?" },
            { arabic: "يُعَوِّضُهُ خَيْرًا مِنْهَا", translation: "Ona ondan daha xeyirlisini verər" }
        ]
    },
    {
        id: 177,
        title: "Ölümü Xatırlamaq",
        dialogue: [
            { arabic: "مَا هُوَ هَادِمُ اللَّذَّاتِ؟", translation: "Ləzzətləri dağıdan nədir?" },
            { arabic: "الْمَوْتُ", translation: "Ölümdür" },
            { arabic: "لِمَاذَا نَذْكُرُ الْمَوْتَ؟", translation: "Niyə ölümü xatırlayırıq?" },
            { arabic: "لِيُرِقَّ الْقَلْبُ وَنَسْتَعِدَّ لِلآخِرَةِ", translation: "Qəlbin yumşalması və axirətə hazırlaşmaq üçün" },
            { arabic: "مَنْ هُوَ الكَيِّسُ (العَاقِلُ)؟", translation: "Ağıllı (fərasətli) kəs kimdir?" },
            { arabic: "مَنْ دَانَ نَفْسَهُ وَعَمِلَ لِمَا بَعْدَ الْمَوْتِ", translation: "Nəfsini hesaba çəkən və ölümdən sonrası üçün əməl edəndir" },
            { arabic: "هَلْ يَسْتَأْذِنُ الْمَوْتُ أَحَدًا؟", translation: "Ölüm kimsədən icazə alar?" },
            { arabic: "لَا، إِذَا جَاءَ أَجَلُهُمْ لا يَسْتَأْخِرُونَ سَاعَةً وَلا يَسْتَقْدِمُونَ", translation: "Xeyr, 'Əcəlləri gəldiyi zaman onu bir saat belə nə yubada, nə də təcili edə bilərlər'" }
        ]
    },
    {
        id: 178,
        title: "Qəbir Ziyarəti",
        dialogue: [
            { arabic: "لِمَاذَا نَزُورُ الْقُبُورَ؟", translation: "Nə üçün qəbirləri ziyarət edirik?" },
            { arabic: "لِتُذَكِّرَنَا الآخِرَةَ وَنَدْعُوَ لِلْمَوْتَى", translation: "Bizə axirəti xatırlatması və ölülərə dua etməyimiz üçün" },
            { arabic: "مَاذَا نَقُولُ عِنْدَ دُخُولِ الْمَقْبَرَةِ؟", translation: "Qəbiristanlığa girərkən nə deyirik?" },
            { arabic: "السَّلَامُ عَلَيْكُمْ دَارَ قَوْمٍ مُؤْمِنِينَ", translation: "Salam olsun sizə, ey möminlər diyarı" },
            { arabic: "وَنَحْنُ إِنْ شَاءَ اللَّهُ بِكُمْ لاحِقُونَ؟", translation: "Biz də inşallah sizə qoşulacağıq?" },
            { arabic: "نَعَمْ، يَرْحَمُ اللَّهُ الْمُسْتَقْدِمِينَ وَالْمُسْتَأْخِرِينَ", translation: "Bəli, Allah əvvəlkilərə də, sonrakılara də rəhm etsin" },
            { arabic: "هَلْ نَدْعُو صَاحِبَ الْقَبْرِ؟", translation: "Qəbir sahibinə dua edirik?" },
            { arabic: "لَا، نَدْعُو اللَّهَ لَهُ وَلا نَدْعُوهُ", translation: "Xeyr, onun üçün Allaha dua edirik, onun özünə dua etmirik" }
        ]
    },
    {
        id: 179,
        title: "Cənnət Nemətləri",
        dialogue: [
            { arabic: "مَاذَا فِي الْجَنَّةِ مِنَ النَّعِيمِ؟", translation: "Cənnətdə nə kimi nemətlər var?" },
            { arabic: "مَا لا عَيْنٌ رَأَتْ وَلا أُذُنٌ سَمِعَتْ", translation: "Gözün görmədiyi, qulağın eşitmədiyi" },
            { arabic: "وَلا خَطَرَ عَلَى قَلْبِ بَشَرٍ؟", translation: "Və insanın qəlbindən belə keçmədiyi?" },
            { arabic: "نَعَمْ، فِيهَا نَعِيمٌ مُقِيمٌ", translation: "Bəli, orada daimi nemətlər var" },
            { arabic: "مَا هُوَ أَعْظَمُ نَعِيمِ الْجَنَّةِ؟", translation: "Cənnətin ən böyük neməti nədir?" },
            { arabic: "الرُّؤْيَةُ إِلَى وَجْهِ اللَّهِ الْكَرِيمِ", translation: "Uca Allahın Zatına (Üzünə) baxmaqdır" },
            { arabic: "هَلْ يَمُوتُ أَهْلُ الْجَنَّةِ؟", translation: "Cənnət əhli ölər?" },
            { arabic: "لَا، خُلُودٌ فَلا مَوْتَ أَبَدًا", translation: "Xeyr, əbədilikdir, heç vaxt ölüm yoxdur" }
        ]
    },
    {
        id: 180,
        title: "Cəhənnəm Əzabı",
        dialogue: [
            { arabic: "مِمَّ نَسْتَعِيذُ فِي الصَّلَاةِ؟", translation: "Namazda nədən sığınırıq?" },
            { arabic: "مِنْ عَذَابِ جَهَنَّمَ وَعَذَابِ الْقَبْرِ", translation: "Cəhənnəm əzabından və qəbir əzabından" },
            { arabic: "مَا هُوَ وَقُودُ النَّارِ؟", translation: "Cəhənnəm odunun yanacağı nədir?" },
            { arabic: "النَّاسُ وَالْحِجَارَةُ", translation: "İnsanlar və daşlar" },
            { arabic: "كَيْفَ شِدَّةُ حَرِّهَا؟", translation: "Onun istiliyinin şiddəti necədir?" },
            { arabic: "أَشَدُّ مِنْ نَارِ الدُّنْيَا بِسَبْعِينَ جُزْءًا", translation: "Dünya odundan yetmiş qat daha şiddətlidir" },
            { arabic: "اللَّهُمَّ أَجِرْنَا مِنَ النَّارِ", translation: "Allahım, bizi Cəhənnəm odundan qoru" },
            { arabic: "آمِينَ يا رَبَّ العَالَمِينَ", translation: "Amin, ey aləmlərin Rəbbi" }
        ]
    },
    {
        id: 181,
        title: "Sırat Körpüsü",
        dialogue: [
            { arabic: "أَيْنَ يُنْصَبُ الصِّرَاطُ؟", translation: "Sırat körpüsü harada qurular?" },
            { arabic: "عَلَى مَتْنِ جَهَنَّمَ", translation: "Cəhənnəmin üzərində" },
            { arabic: "كَيْفَ صِفَتُهُ؟", translation: "Onun sifəti (görünüşü) necədir?" },
            { arabic: "أَدَقُّ مِنَ الشَّعْرِ وَأَحَدُّ مِنَ السَّيْفِ", translation: "Tükdən nazik, qılıncdan iti" },
            { arabic: "كَيْفَ يَمُرُّ النَّاسُ عَلَيْهِ؟", translation: "İnsanlar oradan necə keçərlər?" },
            { arabic: "عَلَى قَدْرِ أَعْمَالِهِمْ", translation: "Əməllərinin dərəcəsinə görə" },
            { arabic: "مِنْهُمْ كَالْبَرْقِ وَالرِّيحِ؟", translation: "Onlardan ildırım və külək kimi keçənlər olar?" },
            { arabic: "نَعَمْ، وَمِنْهُمْ مَنْ يَزْحَفُ زَحْفًا", translation: "Bəli, və onlardan iməkləyərək keçənlər də olar" }
        ]
    },
    {
        id: 182,
        title: "Kəvsər Havuzu (Hovuz)",
        dialogue: [
            { arabic: "مَا هُوَ حَوْضُ النَّبِيِّ ﷺ؟", translation: "Peyğəmbərin ﷺ hovuzu nədir?" },
            { arabic: "حَوْضٌ أَعْطَاهُ اللَّهُ لِلنَّبِيِّ فِي المَوْقِفِ", translation: "Məhşər meydanında Allahın Peyğəmbərə verdiyi hovuzdur" },
            { arabic: "مَا صِفَةُ مَائِهِ؟", translation: "Suyunun xüsusiyyəti nədir?" },
            { arabic: "أَبْيَضُ مِنَ اللَّبَنِ وَأَحْلَى مِنَ الْعَسَلِ", translation: "Süddən bəyaz, baldan şirindir" },
            { arabic: "مَنْ يَشْرَبُ مِنْهُ؟", translation: "Ondan kimlər içər?" },
            { arabic: "أُمَّتُهُ الْمُتَّبِعُونَ لِسُنَّتِهِ", translation: "Onun Sünnəsinə tabe olan ümməti" },
            { arabic: "هَلْ يَظْمَأُ مَنْ شَرِبَ مِنْهُ؟", translation: "Ondan içən bir daha susayar?" },
            { arabic: "لَا يَظْمَأُ بَعْدَهَا أَبَدًا", translation: "Ondan sonra bir daha əbədi susamaz" }
        ]
    },
    {
        id: 183,
        title: "Böyük Şəfaət (Məqam-ı Mahmud)",
        dialogue: [
            { arabic: "مَا هِيَ الشَّفَاعَةُ الْعُظْمَى؟", translation: "Ən böyük şəfaət nədir?" },
            { arabic: "شَفَاعَةُ النَّبِيِّ ﷺ لِفَصْلِ الْقَضَاءِ", translation: "Məhşərdə hesabın başlaması üçün Peyğəmbərin ﷺ etdiyi şəfaətdir" },
            { arabic: "مَنْ يَطْلُبُهَا النَّاسُ أَّوَلًا؟", translation: "İnsanlar onu ilk öncə kimdən istəyərlər?" },
            { arabic: "مِنَ الأَنْبِيَاءِ: آدَمَ، نُوحٍ، إِبْرَاهِيمَ، مُوسَى، عِيسَى", translation: "Peyğəmbərlərdən: Adəm, Nuh, İbrahim, Musa, İsa" },
            { arabic: "فَمَاذَا يَقُولُونَ؟", translation: "Onlar nə deyərlər?" },
            { arabic: "اِذْهَبُوا إِلَى غَيْرِي", translation: "Məndən başqasının yanına gedin" },
            { arabic: "حَتَّى تَانْتَهِيَ إِلَى مَنْ؟", translation: "Sonda kimə gəlib çatacaq?" },
            { arabic: "إِلَى مُحَمَّدٍ ﷺ فَيَقُولُ: أَنَا لَهَا", translation: "Məhəmmədə ﷺ gələr və o: 'Mən buna hazıram' deyər" }
        ]
    },
    {
        id: 184,
        title: "Saleh Dost Seçimi",
        dialogue: [
            { arabic: "كَيْفَ نَخْتَارُ الصَّدِيقَ؟", translation: "Dostu necə seçirik?" },
            { arabic: "نَخْتَارُ صَاحِبَ الدِّينِ وَالْخُلُقِ", translation: "Din və əxlaq sahibini seçirik" },
            { arabic: "مَاذَا قَالَ النَّبِيُّ ﷺ فِي المَرْءِ؟", translation: "Peyğəmbər ﷺ insan haqqında nə buyurub?" },
            { arabic: "الْمَرْءُ عَلَى دِينِ خَلِيلِهِ", translation: "İnsan dostunun dini üzərindədir" },
            { arabic: "فَلْيَنْظُرْ أَحَدُكُمْ مَنْ يُخَالِلُ؟", translation: "Sizdən biri kiminlə dostluq etdiyinə baxsın?" },
            { arabic: "نَعَمْ، فَلْيَنْظُرْ مَنْ يُخَالِلُ", translation: "Bəli, 'Kiminlə dostluq etdiyinə dqqət etsin'" },
            { arabic: "مَا مَثَلُ الْجَلِيسِ الصَّالِحِ؟", translation: "Saleh dostun misalı nədir?" },
            { arabic: "كَحَامِلِ الْمِسْكِ", translation: "Ətir satan (müşk daşıyan) kəs kimidir" }
        ]
    },
    {
        id: 185,
        title: "Pis Dostun Zərəri",
        dialogue: [
            { arabic: "مَا مَثَلُ جَلِيسِ السُّوءِ؟", translation: "Pis dostun misalı nədir?" },
            { arabic: "كَنَافِخِ الْكِيرِ", translation: "Kürək körüyən (dəmirçi) kimsə kimidir" },
            { arabic: "مَاذَا يَفْعَلُ بِكَ؟", translation: "Sənə nə edər?" },
            { arabic: "إِمَّا أَنْ يُحْرِقَ ثِيَابَكَ أَوْ تَجِدَ رِيحًا خَبِيثَةً", translation: "Ya paltarını yandırar, ya da pis qoxu hiss edərsən" },
            { arabic: "هَلْ يَنْدَمُ الإِنْسَانُ يَوْمَ القِيَامَةِ عَلَى صُحْبَتِهِ؟", translation: "İnsan Qiyamət günü onunla dostluğuna peşman olar?" },
            { arabic: "نَعَمْ، يَقُولُ: يا وَيْلَتَى لَيْتَنِي لَمْ أَتَّخِذْ فُلَانًا خَلِيلًا", translation: "Bəli, 'Eyvahlar olsun mənə, kaş ki filankəslə dost olmayaydım' deyər" },
            { arabic: "لَقَدْ أَضَلَّنِي عَنِ الذِّكْرِ؟", translation: "Məni zikr oxumaqdan sapaırtdı?" },
            { arabic: "نَعَمْ، بَعْدَ إِذْ جَاءَنِي", translation: "Bəli, 'Mənə zikr gəldikdən sonra məni azdırdı'" }
        ]
    },
    {
        id: 186,
        title: "Elm Öyrənməyin Vacibliyi",
        dialogue: [
            { arabic: "مَا حُكْمُ طَلَبِ الْعِلْمِ؟", translation: "Elm öyrənməyin hökmü nədir?" },
            { arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ", translation: "Elm öyrənmək hər bir Müsəlmana fərzdir" },
            { arabic: "أَيُّ عِلْمٍ هُوَ الْفَرْضُ؟", translation: "Hansı elm fərzdir?" },
            { arabic: "مَا لا يَسَعُ الْمُسْلِمَ جَهْلُهُ مِنْ دِينِهِ", translation: "Müsəlmanın dinindən bilməməsi uzrlu olmayan elmdir" },
            { arabic: "كَالتَّوْحِيدِ وَالصَّلَاةِ؟", translation: "Təvhid və namaz kimi?" },
            { arabic: "نَعَمْ، وَالطَّهَارَةِ وَأَحْكَامِ الْعِبَادَاتِ", translation: "Bəli, təmizlik və ibadət hökmləri kimi" },
            { arabic: "مَا سَبِيلُ مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا؟", translation: "Elm öyrənmək üçün yola çıxanın yolu harayadır?" },
            { arabic: "سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ", translation: "Allah ona Cənnətə gedən yolu asanlaşdırar" }
        ]
    },
    {
        id: 187,
        title: "Alimlərin Məqamı",
        dialogue: [
            { arabic: "مَنْ هُمْ وَرَثَةُ الأَنْبِيَاءِ؟", translation: "Peyğəmbərlərin varisləri kimlərdir?" },
            { arabic: "الْعُلَمَاءُ هُمْ وَرَثَةُ الأَنْبِيَاءِ", translation: "Alimlər Peyğəmbərlərin varisləridir" },
            { arabic: "مَاذَا وَرَّثَ الأَنْبِيَاءُ؟", translation: "Peyğəmbərlər nə miras qoydular?" },
            { arabic: "لَمْ يُوَرِّثُوا دِينَارًا وَلا دِرْهَمًا، وَإِنَّمَا وَرَّثُوا الْعِلْمَ", translation: "Dinar və dirhəm miras qoymadılar, yalnız elm miras qoydular" },
            { arabic: "مَنْ أَخَذَ بِهِ؟", translation: "Kimsə onu götürərsə?" },
            { arabic: "أَخَذَ بِحَظٍّ وَافِرٍ", translation: "Böyük bir pay götürmüş olar" },
            { arabic: "هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لا يَعْلَمُونَ؟", translation: "Bilənlərlə bilməyənlər eyni olar?" },
            { arabic: "لَا، قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لا يَعْلَمُونَ", translation: "Xeyr, 'De ki: Hiç bilənlərlə bilməyənlər eyni olarmı?'" }
        ]
    },
    {
        id: 188,
        title: "Elmə Əməl Etmək",
        dialogue: [
            { arabic: "مَا هُوَ ثَمَرَةُ الْعِلْمِ؟", translation: "Elmin bəhrəsi nədir?" },
            { arabic: "الْعَمَلُ بِهِ", translation: "Ona əməl etməkdir" },
            { arabic: "مَا حُكْمُ مَنْ عَلِمَ وَلَمْ يَعْمَلْ؟", translation: "Bilib əməl etməyənin hökmü nədir?" },
            { arabic: "مَغْضُوبٌ عَلَيْهِ وَشَبِيهٌ بِالْيَهُودِ", translation: "Qəzəbə uğramış və yəhudilərə bənzəyən kəsdir" },
            { arabic: "وَمَنْ عَمِلَ بِبِلا عِلْمٍ؟", translation: "Bəs elmsiz əməl edən?" },
            { arabic: "ضَالٌّ وَشَبِيهٌ بِالنَّصَارَى", translation: "Zəlalətdədir və xristianlara bənzəyir" },
            { arabic: "مَاذَا نَسْأَلُ اللَّهَ فِي كُلِّ صَلَاةٍ؟", translation: "Hər namazda Allahdan nə istəyirik?" },
            { arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ", translation: "Bizi doğru yola yönəlt, nemət verdiyin kəslərin yoluna" }
        ]
    },
    {
        id: 189,
        title: "İxlaslı Dəvətçi",
        dialogue: [
            { arabic: "مَا هِيَ صِفَاتُ الدَّاعِيَةِ المَوَفَّقِ؟", translation: "Uğur qazanmış dəvətçinin sifətləri hansılardır?" },
            { arabic: "الْعِلْمُ، وَالإِخْلَاصُ، وَالْحِلْمُ، وَالصَّبْرُ", translation: "Elm, İxlas, Həlimlik və Səbr" },
            { arabic: "هَلْ يَبْتَغِي بِدَعْوَتِهِ مَالًا أَوْ جَاهًا؟", translation: "Dəvəti ilə mal və ya şan-şöhrət istəyər?" },
            { arabic: "لَا، يَبْتَغِي وَجْهَ اللَّهِ فَقَطْ", translation: "Xeyr, yalnız Allahın razılığını istəyər" },
            { arabic: "مَاذَا يَقُولُ لِلنَّاسِ؟", translation: "İnsanlara nə deyər?" },
            { arabic: "لا أَسْأَلُكُمْ عَلَيْهِ أَجْرًا إِنْ أَجْرِيَ إِلا عَلَى اللَّهِ", translation: "Sizdən buna görə bir mükafat istəmirəm, mənim mükafatım yalnız Allahadır" },
            { arabic: "كَيْفَ يُعَامِلُ مَنْ أَذَاهُ؟", translation: "Ona əziyyət verənlə necə rəftar edər?" },
            { arabic: "يَصْبِرُ وَيَحْتَسِبُ وَيَدْعُو لَهُمْ بِالْهِدَايَةِ", translation: "Səbr edər, savabını Allahdan gözləyər və onlara hidayət diləyər" }
        ]
    },
    {
        id: 190,
        title: "Yumşaq Sözlə Dəvət",
        dialogue: [
            { arabic: "كَيْفَ نَتَكَلَّمُ مَعَ الْمَعْصِيَةِ أَوْ الْكَافِرِ عِنْدَ الدَّعْوَةِ؟", translation: "Dəvət edərkən günahkar və ya kafirlə necə danışırıq?" },
            { arabic: "بِالْكَلامِ اللَّيِّنِ وَالْحِكْمَةِ", translation: "Yumşaq söz və hikmətlə" },
            { arabic: "مَاذَا قَالَ اللَّهُ لِمُوسَى وَهَارُونَ عِنْدَ فِرْعَوْنَ؟", translation: "Allah Fironun yanına gedərkən Musa və Haruna nə buyurdu?" },
            { arabic: "فَقُولا لَهُ قَوْلًا لَيِّنًا", translation: "Ona yumşaq söz deyin" },
            { arabic: "لَعَلَّهُ مَاذَا؟", translation: "Bəlkə nə etsin?" },
            { arabic: "لَعَلَّهُ يَتَذَكَّرُ أَوْ يَخْشَى", translation: "Bəlkə öyüd-nəsihət ala və ya qorxa" },
            { arabic: "فَإِذَا كَانَ هَذَا مَعَ فِرْعَوْنَ؟", translation: "Əgər Fironla belə danışmaq əmr olunubsa?" },
            { arabic: "فَكَيْفَ بِمَنْ هُوَ دُونَهُ مِنَ الْمُسْلِمِينَ!", translation: "Ondan daha aşağıda olan Müsəlmanla necə olmalıdır!" }
        ]
    },
    {
        id: 191,
        title: "Sünnəni Yaşatmaq",
        dialogue: [
            { arabic: "مَا أِجْرُ مَنْ أَحْيَا سُنَّةً قَدْ أُمِيتَتْ؟", translation: "Unudulmuş bir sünnəni canlandıranın mükafatı nədir?" },
            { arabic: "لَهُ أَجْرُهَا وَأَجْرُ مَنْ عَمِلَ بِهَا", translation: "Onun savabı və onunla əməl edənlərin savabı qədər mükafatı var" },
            { arabic: "مِنْ غَيْرِ أَنْ يَنْقُصَ مِنْ أُجُورِهِمْ شَيْءٌ؟", translation: "Onların savabından bir şey əskilmədən?" },
            { arabic: "نَعَمْ، لا يَنْقُصُ مِنْ أُجُورِهِمْ شَيْئًا", translation: "Bəli, onların savabından heç bir şey əskilmədən" },
            { arabic: "وَمَنْ سَنَّ سُنَّةً سَيِّئَةً (بِدْعَةً)؟", translation: "Bəs pis bir yol (bidət) qoyan kəs?" },
            { arabic: "عَلَيْهِ وِزْرُهَا وَوِزْرُ مَنْ عَمِلَ بِهَا", translation: "Onun günahı və onunla əməl edənlərin günahı onun üzərinədir" },
            { arabic: "فَلْنَحْذَرْ مِنَ الْبِدَعِ؟", translation: "Elə isə bidətlərdən çəkinək?" },
            { arabic: "نَعَمْ، نَحْذَرُ وَنَتَّبِعُ السُّنَّةَ", translation: "Bəli, çəkinək və Sünnəyə tabe olaq" }
        ]
    },
    {
        id: 192,
        title: "Qəlb Təmizliyi (Səlamətus-Sadr)",
        dialogue: [
            { arabic: "مَا هِيَ سَلَامَةُ الصَّدْرِ؟", translation: "Qəlb təmizliyi nədir?" },
            { arabic: "خُلُوُّ الْقَلْبِ مِنَ الْغِلِّ وَالْحَقَدِ وَالْحَسَدِ لِلْمُسْلِمِينَ", translation: "Qəlbin Müsəlmanlara qarşı kin, ədavət və həsəddən pak olmasıdır" },
            { arabic: "مَا صِفَةُ أَهْلِ الْجَنَّةِ فِي صُدُورِهِمْ؟", translation: "Cənnət əhlinin qəlblərindəki sifət necədir?" },
            { arabic: "وَنَزَعْنَا مَا فِي صُدُورِهِمْ مِنْ غِلٍّ إِخْوَانًا", translation: "Onların qəlblərində olan kini çıxarıb qardaş etdik" },
            { arabic: "كَيْفَ يَنَامُ الْمُسْلِمُ سَلِيمَ الصَّدْرِ؟", translation: "Müsəlman qəlbi pak şəkildə necə yatmalıdır?" },
            { arabic: "يُسَامِحُ مَنْ ظَلَمَهُ وَيَدْعُو لِلْمُسْلِمِينَ", translation: "Ona zülm edəni bağışlayar və Müsəlmanlara dua edər" },
            { arabic: "هَلْ هَذِهِ مِنْ أَسْبَابِ دُخُولِ الْجَنَّةِ؟", translation: "Bu Cənnətə girmə səbəblərindəndir?" },
            { arabic: "نَعَمْ، مِنْ أَعْظَمِ الأَسْبَابِ", translation: "Bəli, ən böyük səbəblərdəndir" }
        ]
    },
    {
        id: 193,
        title: "Allaha Hüsnüzən (Gözəl Zənn)",
        dialogue: [
            { arabic: "مَا هُوَ حُسْنُ الظَّنِّ بِاللَّهِ؟", translation: "Allaha hüsnüzən (gözəl zənn) nədir?" },
            { arabic: "تَوَقُّعُ الْخَيْرِ وَالرَّحْمَةِ وَالمَغْفِرَةِ مِنَ اللَّهِ", translation: "Allahdan xeyir, rəhmət və bağışlanma gözləməkdir" },
            { arabic: "مَاذَا يَقُولُ اللَّهُ فِي الْحَدِيثِ الْقُدْسِيِّ؟", translation: "Kudsi hədisdə Allah nə buyurur?" },
            { arabic: "أَنَا عِنْدَ ظَنِّ عَبْدِي بِي", translation: "Mən bəndəmin Mənim haqqımdakı zənni yanındayam" },
            { arabic: "فَلْيَظُنَّ بِي مَا شَاءَ؟", translation: "Elə isə Mənim haqqımda istədiyini düşünsün?" },
            { arabic: "نَعَمْ، إِنْ خَيْرًا فَخَيْرٌ وَإِنْ شَرًّا فَشَرٌّ", translation: "Bəli, xeyir düşünsə xeyir, şər düşünsə şər olar" },
            { arabic: "مَتَى يَتَأَكَّدُ حُسْنُ الظَّنِّ؟", translation: "Gözəl zənn ne vaxt daha vacib olar?" },
            { arabic: "عِنْدَ الْمَوْتِ وَعِنْدَ الدُّعَاءِ", translation: "Ölüm anında və dua edərkən" }
        ]
    },
    {
        id: 194,
        title: "Niyyətin Düzgünlüyü",
        dialogue: [
            { arabic: "مَا هُوَ المِعْيَارُ فِي قَبُولِ الأَعْمَالِ؟", translation: "Əməllərin qəbulunda meyar nədir?" },
            { arabic: "إِصْلَاحُ النِّيَّةِ لِلَّهِ", translation: "Niyyəti Allah üçün islah etməkdir" },
            { arabic: "مَاذَا قَالَ النَّبِيُّ ﷺ فِي الْحَدِيثِ الْمَشْهُورِ؟", translation: "Peyğəmbər ﷺ məşhur hədisdə nə buyurub?" },
            { arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ", translation: "Əməllər yalnız niyyətlərə görədir" },
            { arabic: "وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى؟", translation: "Və hər bir kəs üçün nəsib olan yalnız niyyət etdiyidir?" },
            { arabic: "نَعَمْ، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ", translation: "Bəli, 'Kim Allaha və Rəsuluna hicrət edərsə, hicrəti Allaha və Rəsulunadır'" },
            { arabic: "وَهَلْ تُحَوِّلُ النِّيَّةُ العَادَةَ إِلَى عِبَادَةٍ؟", translation: "Niyyət adəti ibadətə çevirər?" },
            { arabic: "نَعَمْ، النِّيَّةُ الصَّالِحَةُ تُحَوِّلُ المُبَاحَاتِ إِلَى طَاعَاتٍ", translation: "Bəli, saleh niyyət mübah (adi) işləri itaətə çevirər" }
        ]
    },
    {
        id: 195,
        title: "Halal və Haramı Tanımaq",
        dialogue: [
            { arabic: "هَلِ الْحَلَالُ بَيِّنٌ وَالْحَرَامُ بَيِّنٌ؟", translation: "Halal bəyən (aşkardır) və haram bəyəndir?" },
            { arabic: "نَعَمْ، الْحَلَالُ بَيِّنٌ وَالْحَرَامُ بَيِّنٌ", translation: "Bəli, 'Halal da bəyəndir, haram da bəyəndir'" },
            { arabic: "وَمَاذَا بَيْنَهُمَا؟", translation: "Bəs onların arasında nə var?" },
            { arabic: "وَبَيْنَهُمَا أُمُورٌ مُشْتَبِهَاتٌ", translation: "Onların arasında şübhəli məsələlər var" },
            { arabic: "مَنْ يَعْلَمُ الْمُشْتَبِهَاتِ؟", translation: "Şübhəli şeyləri kim bilər?" },
            { arabic: "لا يَعْلَمُهُنَّ كَثِيرٌ مِنَ النَّاسِ", translation: "İnsanların çoxu onları bilməz" },
            { arabic: "فَمَنِ اتَّقَى الشُّبُهَاتِ؟", translation: "Kim şübhəli şeylərdən çəkinərsə?" },
            { arabic: "فَقَدِ اسْتَبْرَأَ لِدِينِهِ وَعِرْضِهِ", translation: "Dini və namusu üçün təmizlik arzulayaramş olar" }
        ]
    },
    {
        id: 196,
        title: "Möminin Şərəfi (Gecə Namazı)",
        dialogue: [
            { arabic: "مَا هُوَ شَرَفُ الْمُؤْمِنِ؟", translation: "Möminin şərəfi nədir?" },
            { arabic: "قِيَامُ اللَّيْلِ", translation: "Gecə namazıdır (Qiyamul-leyl)" },
            { arabic: "وَمَا هُوَ عِزُّهُ؟", translation: "Bəs onun izzəti nədir?" },
            { arabic: "اسْتِغْنَاؤُهُ عَنِ النَّاسِ", translation: "İnsanlara möhtac olmaması (ehtiyacsızlığı)" },
            { arabic: "مَتَى يَنزِلُ رَبُّنَا إِلَى السَّمَاءِ الدُّنْيَا؟", translation: "Rəbbimiz dünya səmasına ne vaxt enər?" },
            { arabic: "فِي الثُّلُثِ الأَخِيرِ مِنَ اللَّيْلِ", translation: "Gecənin son üçdə birində" },
            { arabic: "مَاذَا يَقُولُ جَلَّ وَعَلَا؟", translation: "Uca olan Allah nə buyurar?" },
            { arabic: "مَنْ يَدْعُونِي فَأَسْتَجِيبَ لَهُ؟ مَنْ يَسْأَلُنِي فَأُعْطِيَهُ؟", translation: "Mənə dua edən varmı cavab verim? Bəndə Məndən istəyir ki verim?" }
        ]
    },
    {
        id: 197,
        title: "Təvəkkül və Səbəb",
        dialogue: [
            { arabic: "كَيْفَ نَجْمَعُ بَيْنَ التَّوَكُّلِ وَالأَخْذِ بِالأَسْبَابِ؟", translation: "Təvəkküllə səbəblərdən tutunmağı necə cəmləyirik?" },
            { arabic: "نَعْمَلُ بِالأَسْبَابِ بِالْجَوَارِحِ وَنَتَوَكَّلُ بِالْقَلْبِ عَلَى اللَّهِ", translation: "Əzalarla səbəbləri edir, qəlblə isə Allaha təvəkkül edirik" },
            { arabic: "هَلْ نَعْتَقِدُ أَنَّ السَّبَبَ يَخْلُقُ النَّتِيجَةَ؟", translation: "Səbəbin nəticəni yaratdığına inanırıq?" },
            { arabic: "لَا، المُمَكِّنُ وَالمُسَبِّبُ هُوَ اللَّهُ وَحْدَهُ", translation: "Xeyr, imkan verən və səbəbi yaradan tək Allahdır" },
            { arabic: "مَا مَثَلُ الطَّيْرِ فِي التَّوَكُّلِ؟", translation: "Təvəkküldə quşların misalı nədir?" },
            { arabic: "تَغْدُو خِمَاصًا وَتَرُوحُ بِطَانًا", translation: "Səhər ac çıxar, axşam tox qayıdar" },
            { arabic: "لَوْ تَوَكَّلْتُمْ عَلَى اللَّهِ حَقَّ تَوَكُّلِهِ؟", translation: "Əgər Allaha haqqı ilə təvəkkül etsəniz?" },
            { arabic: "لَرُزِقْتُمْ كَمَا يُرْزَقُ الطَّيْرُ", translation: "Quşlar ruziləndirildiyi kimi siz də ruziləndirilərsiniz" }
        ]
    },
    {
        id: 198,
        title: "Uca Əxlaqın Məqamı",
        dialogue: [
            { arabic: "مَا هُوَ أَثْقَلُ شَيْءٍ فِي مِيزَانِ الْمُؤْمِنِ؟", translation: "Möminin tərəzisində ən ağır gələn şey nədir?" },
            { arabic: "حُسْنُ الْخُلُقِ", translation: "Gözəl əxlaqdır" },
            { arabic: "هَلْ يَبْلُغُ بِهِ دَرَجَةَ الصَّائِمِ القَائِمِ؟", translation: "Onunla gündüz oruc tutan, gecə namaz kılanın dərəcəsinə çatar?" },
            { arabic: "نَعَمْ، إِنَّ الْمُؤْمِنَ لَيُدْرِكُ بِحُسْنِ خُلُقِهِ دَرَجَةَ القَائِمِ الصَّائِمِ", translation: "Bəli, 'Mömin gözəl əxlaqı ilə gecə namaz qılanın və gündüz oruc tutanın dərəcəsinə çatar'" },
            { arabic: "مَا هُوَ تَعْرِيفُ حُسْنِ الْخُلُقِ؟", translation: "Gözəl əxlaqın tərifi nədir?" },
            { arabic: "كَفُّ الأَذَى، وَبَذْلُ النَّدَى، وَطَلاقَةُ الْوَجْهِ", translation: "Əziyyət verməmək, yaxşılıq etmək və gülərüz olmaq" },
            { arabic: "اللَّهُمَّ حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي", translation: "Allahım, yaradılışımı gözəl etdiyin kimi əxlaqımı da gözəlləşdir" },
            { arabic: "آمِينَ يا رَبَّ العَالَمِينَ", translation: "Amin, ey aləmlərin Rəbbi" }
        ]
    },
    {
        id: 199,
        title: "Müsəlmanın Müsəlman Üzərindəki Haqqı",
        dialogue: [
            { arabic: "كَمْ حُقُوقُ الْمُسْلِمِ عَلَى الْمُسْلِمِ؟", translation: "Müsəlmanın Müsəlman üzərindəki haqqı neçədir?" },
            { arabic: "سِتُّ حُقُوقٍ", translation: "Altı haqqı var" },
            { arabic: "اذْكُرْهَا لِي", translation: "Onları mənə zikr et" },
            { arabic: "إِذَا لَقِيتَهُ فَسَلِّمْ عَلَيْهِ، وَإِذَا دَعَاكَ فَأَجِبْهُ", translation: "Rastlaşdıqda salam ver, dəvət etdikdə icabət et" },
            { arabic: "وَإِذَا اسْتَنْصَحَكَ؟", translation: "Bəs nəsihət istədikdə?" },
            { arabic: "فَانْصَحْ لَهُ، وَإِذَا عَطَسَ فَحَمِدَ اللَّهَ فَشَمِّتْهُ", translation: "Ona nəsihət et, asqırıb Alhamdulillah dedikdə Yarhamukallah de" },
            { arabic: "وَإِذَا مَرِضَ أَوْ مَاتَ؟", translation: "Bəs xəstələndikdə və ya öldükdə?" },
            { arabic: "إِذَا مَرِضَ فَعُدْهُ، وَإِذَا مَاتَ فَاتَّبِعْهُ", translation: "Xəstələndikdə baş çək, öldükdə cənazəsini izlə" }
        ]
    },
    {
        id: 200,
        title: "Xeyirli Sonluq (Hüsnul-Xatimə)",
        dialogue: [
            { arabic: "مَا هِيَ حُسْنُ الْخَاتِمَةِ؟", translation: "Xeyirli sonluq (Hüsnul-Xatimə) nədir?" },
            { arabic: "أَنْ يَمُوتَ العَبْدُ عَلَى طَاعَةٍ وَتَوْحِيدٍ", translation: "Bəndənin itaət və təvhid üzərində vəfat etməsidir" },
            { arabic: "مَا هِيَ أَعْظَمُ عَلَامَاتِهَا؟", translation: "Onun ən böyük əlaməti hansıdır?" },
            { arabic: "أَنْ يَكُونَ آخِرُ كَلَامِهِ: لا إِلَهَ إِلا اللَّهُ", translation: "Son sözünün 'La ilahə illallah' olmasıdır" },
            { arabic: "مَا جَزَاءُ مَنْ كَانَ آخِرُ كَلَامِهِ لا إِلَهَ إِلا اللَّهُ؟", translation: "Son sözü 'La ilahə illallah' olanın mükafatı nədir?" },
            { arabic: "دَخَلَ الْجَنَّةَ", translation: "Cənnətə daxil olar" },
            { arabic: "اللَّهُمَّ ارْزُقْنَا حُسْنَ الْخَاتِمَةِ", translation: "Allahım, bizə xeyirli sonluq nəsib et" },
            { arabic: "آمِينَ يا رَبَّ العَالَمِينَ", translation: "Amin, ey aləmlərin Rəbbi" }
        ]
    },
    {
        id: 201,
        title: "Nəfilə Orucları",
        dialogue: [
            { arabic: "مَا هِيَ النَّوَافِلُ فِي الصِّيَامِ؟", translation: "Orucda nəfilə (müstəhəb) olanlar hansılardır?" },
            { arabic: "صِيَامُ الإِثْنَيْنِ وَالْخَمِيسِ", translation: "Bazar ertəsi və cümə axşamı orucları" },
            { arabic: "وَمَاذَا أَيْضًا؟", translation: "Və daha nə?" },
            { arabic: "صِيَامُ ثَلَاثَةِ أَيَّامٍ مِنْ كُلِّ شَهْرٍ", translation: "Hər aydan üç gün oruc tutmaq (Ağ günlər)" },
            { arabic: "وَصِيَامُ يَوْمِ عَرَفَةَ؟", translation: "Bəs Ərəfə günü orucu?" },
            { arabic: "يُكَفِّرُ السَّنَةَ الْمَاضِيَةَ وَالْبَاقِيَةَ", translation: "Keçən və gələn ilin günahlarını silər" },
            { arabic: "وَصِيَامُ عَاشُورَاءَ؟", translation: "Bəs Aşura orucu?" },
            { arabic: "يُكَفِّرُ السَّنَةَ الْمَاضِيَةَ", translation: "Keçən ilin günahlarını silər" }
        ]
    },
    {
        id: 202,
        title: "Qəza Orucu",
        dialogue: [
            { arabic: "مَنْ أَفْطَرَبِعُذْرٍ فِي رَمَضَانَ؟", translation: "Ramazanda üzrlə orucunu pozan nə etməlidir?" },
            { arabic: "عَلَيْهِ الْقَضَاءُ بَعْدَ رَمَضَانَ", translation: "Ramazandan sonra qəzasını tutmalıdır" },
            { arabic: "هَلْ يَجِبُ التَّتَابُعُ فِي الْقَضَاءِ؟", translation: "Qəzada ardıcıllıq vacibdir?" },
            { arabic: "لَا، لا يَجِبُ التَّتَابُعُ", translation: "Xeyr, ardıcıllıq vacib deyildir" },
            { arabic: "مَتَى يَنْتَهِي وَقْتُ الْقَضَاءِ؟", translation: "Qəzanın vaxtı ne vaxt bitir?" },
            { arabic: "قَبْلَ حُلُولِ رَمَضَانَ الْقَادِمِ", translation: "Növbəti Ramazan gələnə kadar" },
            { arabic: "وَمَنْ عَجَزَ عَنِ الصَّوْمِ لِكِبَرٍ؟", translation: "Bəs qocalığa görə oruc tuta bilməyən?" },
            { arabic: "يُطْعِمُ عَنْ كُلِّ يَوْمٍ مِسْكِينًا", translation: "Hər gün üçün bir fəqir yeməkləndirər" }
        ]
    },
    {
        id: 203,
        title: "Leylətul-Qədr (Qədr Gecəsi)",
        dialogue: [
            { arabic: "مَا هِيَ لَيْلَةُ الْقَدْرِ؟", translation: "Qədr gecəsi nədir?" },
            { arabic: "لَيْلَةٌ خَيْرٌ مِنْ أَلْفِ شَهْرٍ", translation: "Min aydan daha xeyirli bir gecədir" },
            { arabic: "مَتَى نَلْتَمِسُهَا؟", translation: "Onu ne vaxt axtarırıq?" },
            { arabic: "فِي العَشْرِ الأَوَاخِرِ مِنْ رَمَضَانَ", translation: "Ramazanın son on günündə" },
            { arabic: "فِي الأَوْتَارِ مِنْهَا؟", translation: "Onun tək gecələrində?" },
            { arabic: "نَعَمْ، فِي الأَوْتَارِ أَأْكَدُ", translation: "Bəli, tək gecələrində daha təkidlidir" },
            { arabic: "مَاذَا نَدْعُو فِيهَا؟", translation: "Onda nə dua edirik?" },
            { arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي", translation: "Allahım, Sən çox bağışlayansan, bağışlamağı sevirsən, beni bağışla" }
        ]
    },
    {
        id: 204,
        title: "İtikaf İbadəti",
        dialogue: [
            { arabic: "مَا هُوَ الإِعْتِكَافُ؟", translation: "İtikaf nədir?" },
            { arabic: "لُزُومُ الْمَسْجِدِ لِطَاعَةِ اللَّهِ", translation: "Allaha itaət üçün məsciddə qalmaqdır" },
            { arabic: "مَتَى يَكُونُ آكَدَ؟", translation: "Ne vaxt daha təkidli sünnədir?" },
            { arabic: "فِي العَشْرِ الأَوَاخِرِ مِنْ رَمَضَانَ", translation: "Ramazanın son on günündə" },
            { arabic: "هَلْ يَخْرُجُ الْمُعْتَكِفُ مِنَ الْمَسْجِدِ؟", translation: "İtikafda olan məsciddən çıxa bilər?" },
            { arabic: "لَا، إِلا لِحَاجَةٍ لا بُدَّ مِنْهَا", translation: "Xeyr, yalnız zəruri ehtiyac üçün çıxa bilər" },
            { arabic: "مَا هُوَ المَقْصُودُ مِنْهُ؟", translation: "Ondan məqsəd nədir?" },
            { arabic: "تَفْرِيغُ الْقَلْبِ لِعِبَادَةِ اللَّهِ", translation: "Qəlbi tək Allaha ibadətə həsr etməkdir" }
        ]
    },
    {
        id: 205,
        title: "Zəkatın Nisabı",
        dialogue: [
            { arabic: "مَا هُوَ النِّصَابُ فِي الزَّكَاةِ؟", translation: "Zəkatda nisab nədir?" },
            { arabic: "الْمِقْدَارُ الَّذِي إِذَا بَلَغَهُ الْمَالُ وَجَبَتْ فِيهِ الزَّكَاةُ", translation: "Mal o miqdara çatdıqda zəkatın vacib olduğu həddir" },
            { arabic: "كَمْ نِصَابُ الذَّهَبِ؟", translation: "Qızılın nisabı nə qədərdir?" },
            { arabic: "خَمْسَةٌ وَثَمَانُونَ جِرَامًا", translation: "Səksən beş qram" },
            { arabic: "وَكَمْ يُخْرَجُ مِنْهُ؟", translation: "Ondan neçə faiz (miqdar) çıxarılır?" },
            { arabic: "رُبُعُ الْعُشْرِ (اثْنَانِ وَنِصْفٌ فِي المِائَةِ)", translation: "Qırxda biri (iki faiz yarım)" },
            { arabic: "مَعَ مُرُورِ الْحَوْلِ؟", translation: "Bir il tamam olmaqla bərabər?" },
            { arabic: "نَعَمْ، إِذَا حَالَ عَلَيْهِ الْحَوْلُ", translation: "Bəli, üzərindən bir il keçdikdə" }
        ]
    },
    {
        id: 206,
        title: "Sədəqə-i Cariyə",
        dialogue: [
            { arabic: "مَا هِيَ الصَّدَقَةُ الْجَارِيَةُ؟", translation: "Sədəqə-i cariyə nədir?" },
            { arabic: "مَا يَبْقَى نَفْعُهُ بَعْدَ الْمَوْتِ", translation: "Ölümdən sonra faydası davam edən sədəqədir" },
            { arabic: "مِثْلُ مَاذَا؟", translation: "Nə kimi?" },
            { arabic: "كَبِنَاءِ الْمَسَاجِدِ وَحَفْرِ الآبَارِ", translation: "Məscidlər tikmək və quyular qazmaq kimi" },
            { arabic: "وَنَشْرِ الْعِلْمِ النافِعِ؟", translation: "Və faydalı elmi yaymaq?" },
            { arabic: "نَعَمْ، وَكِتَابَةِ الْمَصَاحِفِ وَالْكُتُبِ", translation: "Bəli, və Quran ilə kitablar yazdırmaq" },
            { arabic: "هَلْ يَصِلُ أَجْرُهَا لِلْمَيِّتِ؟", translation: "Onun savabı ölüyə çatır?" },
            { arabic: "نَعَمْ، يَنْقَطِعُ عَمَلُهُ إِلا مِنْ ثَلَاثٍ", translation: "Bəli, 'İnsanın əməli üç şeydən başqa kəsilər'" }
        ]
    },
    {
        id: 207,
        title: "Gizli Sədəqə",
        dialogue: [
            { arabic: "مَا فَضْلُ صَدَقَةِ السِّرِّ؟", translation: "Gizli sədəqənin fəziləti nədir?" },
            { arabic: "تُطْفِئُ غَضَبَ الرَّبِّ", translation: "Rəbbin qəzəbini söndürər" },
            { arabic: "مَنْ هُمْ أَهْلُ الظِّلِّ يَوْمَ الْقِيَامَةِ؟", translation: "Qiyamət günü kölgədə olanlardan biri kimdir?" },
            { arabic: "رَجُلٌ تَصَدَّقَ بِصَدَقَةٍ فَأَخْفَاهَا", translation: "Gizli sədəqə verən kimsədir" },
            { arabic: "حَتَّى لا تَعْلَمَ شِمَالُهُ؟", translation: "Hətta sol əli bilməyəcək dərəcədə?" },
            { arabic: "حَتَّى لا تَعْلَمَ شِمَالُهُ مَا تُنْفِقُ يَمِينُهُ", translation: "Sağ əlinin verdiyini sol əli bilməyəcək dərəcədə" },
            { arabic: "هَلْ هَذَا أَبْعَدُ عَنِ الرِّيَاءِ؟", translation: "Bu riyadan daha uzaqdır?" },
            { arabic: "نَعَمْ، أَعْظَمُ إِخْلَاصًا", translation: "Bəli, ixlas baxımından ən böyükdür" }
        ]
    },
    {
        id: 208,
        title: "Əmrə İbadəti",
        dialogue: [
            { arabic: "مَا هِيَ العُمْرَةُ؟", translation: "Ümrə nədir?" },
            { arabic: "زِيَارَةُ بَيْتِ اللَّهِ الحَرَامِ لِلْنُّسُكِ", translation: "İbadət amacıyla Allahın möhtərəm evini ziyarət etməkdir" },
            { arabic: "كَمْ أَرْكَانُ الْعُمْرَةِ؟", translation: "Ümrənin rüknləri neçədir?" },
            { arabic: "أَرْكَانُهَا ثَلَاثَةٌ", translation: "Rüknləri üçdür" },
            { arabic: "مَا هِيَ؟", translation: "Hansılardır?" },
            { arabic: "الإِحْرَامُ، وَالطَّوَافُ، وَالسَّعْيُ", translation: "İhram, Təvaf və Sə'y" },
            { arabic: "وَمَاذَا بَعْدَ السَّعْيِ؟", translation: "Sə'ydən sonra nə edilir?" },
            { arabic: "الْحَلْقُ أَوْ التَّقْصِيرُ", translation: "Təraş olmaq və ya saçdan kəsdirmək" }
        ]
    },
    {
        id: 209,
        title: "Ehram Hökmləri",
        dialogue: [
            { arabic: "مَا هُوَ الإِحْرَامُ؟", translation: "İhram nədir?" },
            { arabic: "نِيَّةُ الدُّخُولِ فِي النُّسُكِ", translation: "İbadətə girmək niyyətidir" },
            { arabic: "مَاذَا يَجْتَنِبُ الْمُحْرِمُ؟", translation: "İhramda olan kəs nədən çəkinməlidir?" },
            { arabic: "تَغْطِيَةَ الرَّأْسِ وَتَقْلِيمَ الأَظْفَارِ وَالطِّيبَ", translation: "Başı örtməkdən, dırnaq kəsməkdən və ətirlənməkdən" },
            { arabic: "وَلُبْسَ الْمَخِيطِ لِلرِّجَالِ؟", translation: "Kişilər üçün tikili geyim geyinməkdən?" },
            { arabic: "نَعَمْ، وَقَطْعَ الشَّعْرِ وَالصَّيْدَ", translation: "Bəli, və tük kəsməkdən, ov etməkdən" },
            { arabic: "مِنْ أَيْنَ يَبْدَأُ الإِحْرَامُ؟", translation: "İhram haradan başlayır?" },
            { arabic: "مِنَ المِيقَاتِ المَكَانِيِّ", translation: "Təyin olunmuş mikat yerindən" }
        ]
    },
    {
        id: 210,
        title: "Kəbəni Təvaf Etmək",
        dialogue: [
            { arabic: "كَيْفَ نَبْدَأُ الطَّوَافَ؟", translation: "Təvafa necə başlayırıq?" },
            { arabic: "مِنَ الحَجَرِ الأَسْوَدِ", translation: "Qara daşdan (Həcərul-Əsvəddən)" },
            { arabic: "مَاذَا نَقُولُ عِنْدَهُ؟", translation: "Onun yanında nə deyirik?" },
            { arabic: "بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ", translation: "Bismillahi Vallahu Əkbər" },
            { arabic: "كَمْ شَوْطًا نَطُوفُ؟", translation: "Neçə dövrə (şəvt) təvaf edirik?" },
            { arabic: "سَبْعَةَ أَشْوَاطٍ", translation: "Yeddi dövrə" },
            { arabic: "أَيْنَ نُصَلِّي بَعْدَ الطَّوَافِ؟", translation: "Təvafdan sonra harada namaz qılırıq?" },
            { arabic: "خَلْفَ مَقَامِ إِبْرَاهِيمَ رَكْعَتَيْنِ", translation: "Məqamı İbrahimin arxasında iki rükət" }
        ]
    },
    {
        id: 211,
        title: "Səfa və Mərvə (Sə'y)",
        dialogue: [
            { arabic: "مَا هُوَ السَّعْيُ؟", translation: "Sə'y nədir?" },
            { arabic: "الْمَشْيُ بَيْنَ الصَّفَا وَالْمَرْوَةِ", translation: "Səfa və Mərvə təpələri arasında gəzməkdir" },
            { arabic: "مِنْ أَيْنَ نَبْدَأُ؟", translation: "Haradan başlayırıq?" },
            { arabic: "نَبْدَأُ مِنَ الصَّفَا", translation: "Səfadan başlayırıq" },
            { arabic: "وَبِمَاذَا نَخْتِمُ؟", translation: "Və nə ilə bitiririk?" },
            { arabic: "نَخْتِمُ بِالْمَرْوَةِ", translation: "Mərvədə bitiririk" },
            { arabic: "كَمْ شَوْطًا؟", translation: "Neçə gediş-gəliş (şəvt)?" },
            { arabic: "سَبْعَةَ أَشْوَاطٍ", translation: "Yeddi şəvt" }
        ]
    },
    {
        id: 212,
        title: "Ərəfət Günü",
        dialogue: [
            { arabic: "مَا هُوَ أَعْظَمُ أَيَّامِ الْحَجِّ؟", translation: "Həccin ən böyük günü hansıdır?" },
            { arabic: "يَوْمُ عَرَفَةَ", translation: "Ərəfə günüdür" },
            { arabic: "مَاذَا قَالَ النَّبِيُّ ﷺ عَنِ الْحَجِّ؟", translation: "Peyğəmbər ﷺ həcc haqqında nə buyurub?" },
            { arabic: "الْحَجُّ عَرَفَةُ", translation: "Həcc Ərəfədir" },
            { arabic: "مَاذَا يَفْعَلُ الْحُجَّاجُ فِي عَرَفَةَ؟", translation: "Hacılar Ərəfədə nə edirlər?" },
            { arabic: "يَقِفُونَ بِعَرَفَةَ وَيَدْعُونَ اللَّهَ", translation: "Ərəfədə vəqfədə durur və Allaha dua edirlər" },
            { arabic: "مَا هُوَ أَفْضَلُ الدُّعَاءِ فِي يَوْمِ عَرَفَةَ؟", translation: "Ərəfə gününün ən fəzilətli duası nədir?" },
            { arabic: "لا إِلَهَ إِلا اللَّهُ وَحْدَهُ لا شَرِيكَ لَهُ", translation: "La ilahə illallahu vahdəhu la şərikə ləh" }
        ]
    },
    {
        id: 213,
        title: "Təşriq Günləri",
        dialogue: [
            { arabic: "مَا هِيَ أَيَّامُ التَّشْرِيقِ؟", translation: "Təşriq günləri hansılardır?" },
            { arabic: "الأَيَّامُ الثَّلَاثَةُ بَعْدَ يَوْمِ النَّحْرِ", translation: "Qurban günündən sonrakı üç gün" },
            { arabic: "مَاذَا يَفْعَلُ الْحُجَّاجُ فِيهَا؟", translation: "Hacılar o günlərdə nə edirlər?" },
            { arabic: "يَرْمُونَ الْجِمَارَ وَيَذْكُرُونَ اللَّهَ", translation: "Daş atır və Allahı zikr edirlər" },
            { arabic: "هَلْ يَجُوزُ صِيَامُ أَيَّامِ التَّشْرِيقِ؟", translation: "Təşriq günlərində oruc tutmaq olarmı?" },
            { arabic: "لَا، أَيَّامُ أَكْلٍ وَشُرْبٍ وَذِكْرٍ لِلَّهِ", translation: "Xeyr, onlar yemək, içmək və Allahı zikr etmək günləridir" },
            { arabic: "إِلَّا لِمَنْ لَمْ يَجِدِ الْهَدْيَ؟", translation: "Ancaq qurbanlıq tapa bilməyənlər üçün?" },
            { arabic: "نَعَمْ، يُرَخَّصُ لِلْمُتَمَتِّعِ الفَاقِدِ", translation: "Bəli, qurban tapmayan Mütəməttiyə icazə verilir" }
        ]
    },
    {
        id: 214,
        title: "Quranı Hifz Etmək",
        dialogue: [
            { arabic: "مَا فَضْلُ حَافِظِ الْقُرْآنِ؟", translation: "Quranı əzbərləyənin (hafizin) fəziləti nədir?" },
            { arabic: "يُقَالُ لَهُ: اقْرَأْ وَارْتَقِ وَرَتِّلْ", translation: "Ona deyildilər: Oxu, ucal və tərtillə oxu" },
            { arabic: "فَإِنَّ مَنْزِلَتَكَ عِنْدَ آخِرِ آيَةٍ؟", translation: "Çünki sənin məqamın oxuduğun son ayənin yanındadır?" },
            { arabic: "نَعَمْ، عِنْدَ آخِرِ آيَةٍ تَقْرَؤُهَا", translation: "Bəli, oxuduğun son ayənin yanındadır" },
            { arabic: "وَمَاذَا يُلْبَسُ وَالِدَاهُ؟", translation: "Onun valideynlərinə nə geyindirilməyədir?" },
            { arabic: "تَاجَ الْوَقَارِ يَوْمَ الْقِيَامَةِ", translation: "Qiyamət günü vəqar tacı geyindirilməyədir" },
            { arabic: "اللَّهُمَّ اجْعَلْنَا مِنْ أَهْلِ الْقُرْآنِ", translation: "Allahım, bizi Quran əhlindən et" },
            { arabic: "آمِينَ يا رَبَّ العَالَمِينَ", translation: "Amin, ey aləmlərin Rəbbi" }
        ]
    },
    {
        id: 215,
        title: "Quran Dinləmək",
        dialogue: [
            { arabic: "مَاذَا نَفْعَلُ إِذَا قُرِئَ الْقُرْآنُ؟", translation: "Quran oxunarkən nə edirik?" },
            { arabic: "نَسْتَمِعُ لَهُ وَنُنْصِتُ", translation: "Onu dinləyir və sakit dururuq" },
            { arabic: "مَا الدَّلِيلُ؟", translation: "Dəlil nədir?" },
            { arabic: "وَإِذَا قُرِئَ الْقُرْآنُ فَاسْتَمِعُوا لَهُ وَأَنْصِتُوا", translation: "Quran oxunduğu zaman onu dinləyin və susun" },
            { arabic: "لَعَلَّكُمْ تُؤْجَرُونَ؟", translation: "Bəlkə rəhm olunasınız?" },
            { arabic: "لَعَلَّكُمْ تُرْحَمُونَ", translation: "Bəlkə sizə rəhm oluna" },
            { arabic: "هَلْ كَانَ النَّبِيُّ ﷺ يُحِبُّ أَنْ يَسْمَعَهُ مِنْ غَيْرِهِ؟", translation: "Peyğəmbər ﷺ Quranı başqasından dinləməyi sevərdi?" },
            { arabic: "نَعَمْ، كَانَ يُحِبُّ سَمَاعَهُ مِنْ صَحَابَتِهِ", translation: "Bəli, onu səhabələrindən dinləməyi sevərdi" }
        ]
    },
    {
        id: 216,
        title: "Qadının Ərinə Qarşı Haqqı",
        dialogue: [
            { arabic: "مَا هِيَ حُقُوقُ الزَّوْجَةِ عَلَى زَوْجِهَا؟", translation: "Qadının əri üzərindəki haqları hansılardır?" },
            { arabic: "النَّفَقَةُ، وَالرِّعَايَةُ، وَحُسْنُ الْمُعَاشَرَةِ", translation: "Nəfəqə (dolanişıq), qayğı və gözəl rəftar" },
            { arabic: "مَاذَا قَالَ النَّبِيُّ ﷺ فِي الْعَاشِرَةِ؟", translation: "Peyğəmbər ﷺ yoldaşlıq haqqında nə buyurub?" },
            { arabic: "خَيْرُكُمْ خَيْرُكُمْ لأَهْلِهِ", translation: "Sizin ən xeyirliniz öz ailəsinə ən xeyirli olanınızdır" },
            { arabic: "وَأَنَا خَيْرُكُمْ لأَهْلِي؟", translation: "Və mən ailəm üçün sizin ən xeyirlinizəm?" },
            { arabic: "نَعَمْ، كَانَ أَلْطَفَ النَّاسِ مَعَ أَهْلِهِ", translation: "Bəli, O, ailəsi ilə insanların ən lütfkarı idi" },
            { arabic: "هَلْ يَجُوزُ ظُلْمُ الزَّوْجَةِ؟", translation: "Qadına zülm etmək olarmı?" },
            { arabic: "لَا، الظُّلْمُ حَرَامٌ مُطْلَقًا", translation: "Xeyr, zülm mütləq şəkildə haramdır" }
        ]
    },
    {
        id: 217,
        title: "Ərin Qadın Üzərindəki Haqqı",
        dialogue: [
            { arabic: "مَا هُوَ حَقُّ الزَّوْجِ عَلَى زَوْجَتِهِ؟", translation: "Ərin qadını üzərindəki haqqı nədir?" },
            { arabic: "الطَّاعَةُ فِي الْمَعْرُوفِ وَحِفْظُ سِرِّهِ وَمَالِهِ", translation: "Yaxşı işlərdə itaət, sirrini və malını qorumaq" },
            { arabic: "هَلْ تَخْرُجُ بِغَيْرِ إِذْنِهِ؟", translation: "İcazəsiz evdən çıxa bilər?" },
            { arabic: "لَا، لا تَخْرُجُ إِلا بِإِذْنِهِ", translation: "Xeyr, yalnız onun icazəsi ilə çıxar" },
            { arabic: "مَا جَزَاءُ الْمَرْأَةِ الصَّالِحَةِ الْمُطِيعَةِ؟", translation: "İtaətkar saleh qadının mükafatı nədir?" },
            { arabic: "تَدْخُلُ مِنْ أَيِّ أَبْوَابِ الْجَنَّةِ شَاءَتْ", translation: "Cənnətin istədiyi qapısından daxil olar" },
            { arabic: "إِذَا صَلَّتْ خَمْسَهَا وَأَطَاعَتْ زَوْجَهَا؟", translation: "Beş vaxt namazını qılıb ərinə itaət etdikdə?" },
            { arabic: "نَعَمْ، دَخَلَتْ جَنَّةَ رَبِّهَا", translation: "Bəli, Rəbbinin Cənnətinə daxil olar" }
        ]
    },
    {
        id: 218,
        title: "Övlad Tərbiyəsi",
        dialogue: [
            { arabic: "كَيْفَ نُرَبِّي أَوْلَادَنَا؟", translation: "Övladlarımızı necə tərbiyə edək?" },
            { arabic: "عَلَى التَّوْحِيدِ وَالطَّاعَةِ وَالأَخْلَاقِ", translation: "Təvhid, itaət və gözəl əxlaq üzərində" },
            { arabic: "بِمَاذَا نَأْمُرُهُمْ فِي سِنِّ السَّبْعِ؟", translation: "Yeddi yaşında onlar nəyi əmr edirik?" },
            { arabic: "نَأْمُرُهُمْ بِالصَّلَاةِ", translation: "Onlara namazı əmr edirik" },
            { arabic: "وَمَتَى نَضْرِبُهُمْ عَلَيْهَا؟", translation: "Neçə yaşında namazsızlığa görə (xəfifcə) tənbeh edirik?" },
            { arabic: "فِي سِنِّ الْعَشْرِ", translation: "On yaşında" },
            { arabic: "هَلْ نَعْدِلُ بَيْنَ الأَوْلَادِ؟", translation: "Övladlar arasında ədalətli oluruq?" },
            { arabic: "نَعَمْ، اتَّقُوا اللَّهَ وَاعْدِلُوا بَيْنَ أَوْلَادِكُمْ", translation: "Bəli, 'Allahdan qorxun və övladlarınız arasında ədalətli olun'" }
        ]
    },
    {
        id: 219,
        title: "Anaya Hörmət",
        dialogue: [
            { arabic: "مَنْ أَحَقُّ النَّاسِ بِحُسْنِ الصَّحَابَةِ؟", translation: "İnsanların daxilində gözəl rəftara ən haqlı kəs kimdir?" },
            { arabic: "أُمُّكَ", translation: "Anandır" },
            { arabic: "ثُمَّ مَنْ؟", translation: "Sonra kimdir?" },
            { arabic: "أُمُّكَ", translation: "Anandır" },
            { arabic: "ثُمَّ مَنْ؟", translation: "Sonra kimdir?" },
            { arabic: "أُمُّكَ", translation: "Anandır" },
            { arabic: "ثُمَّ مَنْ؟", translation: "Sonra kimdir?" },
            { arabic: "أَبُوكَ", translation: "Atandır" }
        ]
    },
    {
        id: 220,
        title: "Ataya İtaət",
        dialogue: [
            { arabic: "مَا مَكَانَةُ الأَبِ فِي الإِسْلَامِ؟", translation: "İslamda atanın məqamı nədir?" },
            { arabic: "الأَبُ أَوْسَطُ أَبْوَابِ الْجَنَّةِ", translation: "Ata Cənnətin orta qapısıdır" },
            { arabic: "فَهَلْ نَحْفَظُ هَذَا الْبَابَ؟", translation: "Elə isə bu qapını qoruyaq?" },
            { arabic: "إنْ شِئْتَ فَاحْفَظْ أَوْ ضَيِّعْ", translation: "İstəsən o qapını qoru, istəsən zay et" },
            { arabic: "هَلْ نُطِيعُهُ فِي المَعْصِيَةِ؟", translation: "Asilikdə ata-anaya itaət edirik?" },
            { arabic: "لَا، لا طَاعَةَ فِي مَعْصِيَةِ اللَّهِ", translation: "Xeyr, Allaha asilikdə itaət olunmaz" },
            { arabic: "وَنُصَاحِبُهُمَا فِي الدُّنْيَا بِمَاذَا؟", translation: "Bəs dünyada onlar necə yoldaşlıq edirik?" },
            { arabic: "وَصَاحِبْهُمَا فِي الدُّنْيَا مَعْرُوفًا", translation: "Dünyada onlarla gözəl rəftar et" }
        ]
    },
    {
        id: 221,
        title: "Gözü Haramdan Qorumaq",
        dialogue: [
            { arabic: "مَا حُكْمُ غَضِّ الْبَصَرِ؟", translation: "Gözü haramdan yummağın hökmü nədir?" },
            { arabic: "وَاجِبٌ عَلَى كُلِّ مُسْلِمٍ وَمُسْلِمَةٍ", translation: "Hər bir Müsəlman kişiyə və qadına vacibdir" },
            { arabic: "مَا الدَّلِيلُ فِي الْقُرْآنِ؟", translation: "Qurandakı dəlil nədir?" },
            { arabic: "قُلْ لِلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ", translation: "Mömin kişilərə de ki, gözlərini haramdan yumsumlar" },
            { arabic: "وَمَا ثَمَرَةُ غَضِّ الْبَصَرِ؟", translation: "Gözü haramdan yummağın bəhrəsi nədir?" },
            { arabic: "حَلَاوَةُ الإِيمَانِ وَطَهَارَةُ الْقَلْبِ", translation: "İmanın şirinliyi və qəlbin təmizliyidir" },
            { arabic: "وَالنَّظَرُ سَهْمٌ مِنْ سِهَامِ إِبْلِيسَ؟", translation: "Haram baxış İblisin oxlarından biridir?" },
            { arabic: "نَعَمْ، سَهْمٌ مَسْمُومٌ", translation: "Bəli, zəhərli bir oxdur" }
        ]
    },
    {
        id: 222,
        title: "Hicabın Fərziyyəti",
        dialogue: [
            { arabic: "مَا حُكْمُ الْحِجَابِ لِلْمَرْأَةِ؟", translation: "Qadın üçün hicabın hökmü nədir?" },
            { arabic: "فَرِيضَةٌ مِنَ اللَّهِ تَعَالَى", translation: "Uca Allah tərəfindən fərzdir" },
            { arabic: "مَا هِيَ شُرُوطُ الْحِجَابِ الشَّرْعِيِّ؟", translation: "Şəriətə uyğun hicabın şərtləri hansılardır?" },
            { arabic: "أَنْ يَكُونَ سَاتِرًا، ثَخِينًا، وَلا يَكُونَ زِينَةً", translation: "Örtücü, qalın olmalı və bəzəkli olmamalıdır" },
            { arabic: "وَلا فَضْفَاضًا وَلا يُشْبِهُ رِجَالًا؟", translation: "Geniş olmalı və kişilərin geyiminə bənzəməməlidir?" },
            { arabic: "نَعَمْ، سَاتِرًا لِلْجَسَدِ كُلِّهِ", translation: "Bəli, bütün bədəni örtən olmalıdır" },
            { arabic: "مَا الْغَرَضُ مِنْهُ؟", translation: "Ondan məqsəd nədir?" },
            { arabic: "العِفَّةُ وَالْحِمَايَةُ مِنَ الْفِتْنَةِ", translation: "İffət və fitnədən qorunmaqdır" }
        ]
    },
    {
        id: 223,
        title: "Qadın və Kişi Məhrəmliyi",
        dialogue: [
            { arabic: "مَنْ هُوَ الْمَحْرَمُ لِلْمَرْأَةِ؟", translation: "Qadının məhrəmi kimdir?" },
            { arabic: "مَنْ يَحْرُمُ عَلَيْهَا نِكَاحُهُ أَبَدًا", translation: "Onunla nikahlanması əbədi haram olan şəxsdir" },
            { arabic: "مِثْلُ مَنْ؟", translation: "Kimi?" },
            { arabic: "كَالأَبِ، وَالاِبْنِ، وَالأَخِ، وَالْعَمِّ", translation: "Ata, oğul, qardaş və əmi kimi" },
            { arabic: "هَلْ يَجُوزُ السَّفَرُ بِدُونِ مَحْرَمٍ؟", translation: "Məhrəmsiz səfərə çıxmaq olarmı?" },
            { arabic: "لَا، لا تُسَافِرُ المَرْأَةُ إِلا مَعَ ذِي مَحْرَمٍ", translation: "Xeyr, 'Qadın yalnız məhrəmi ilə səfərə çıxa bilər'" },
            { arabic: "وَالْخَلْوَةُ بِالأَجْنَبِيِّ؟", translation: "Bəs naməhrəmlə tək qalmaq?" },
            { arabic: "حَرَامٌ، فَالشَّيْطَانُ ثالثُهُمَا", translation: "Haramdır, çünki üçüncüləri şeytandır" }
        ]
    },
    {
        id: 224,
        title: "Asilikdən Çəkinmək",
        dialogue: [
            { arabic: "مَا هِيَ الْمَعْصِيَةُ؟", translation: "Asilik (günah) nədir?" },
            { arabic: "مُخَالَفَةُ أَمْرِ اللَّهِ وَرَسُولِهِ", translation: "Allahın və Rəsulunun əmrinə qarşı çıxmaqdır" },
            { arabic: "مَا أَثَرُ الذَّنْبِ عَلَى الْقَلْبِ؟", translation: "Günahın qəlbə təsiri nədir?" },
            { arabic: "يُنْكَتُ فِيهِ نُكْتَةٌ سَوْدَاءُ", translation: "Qəlbə qara bir ləkə düşər" },
            { arabic: "فَإِنْ تَابَ وَاسْتَغْفَرَ؟", translation: "Tövbə edib bağışlanma diləsə?" },
            { arabic: "صُقِلَ قَلْبُهُ وَتَطَهَّرَ", translation: "Qəlbi təmizlənər və cilalanar" },
            { arabic: "وَإِنْ زَادَ فِي الذُّنُوبِ؟", translation: "Günahları artırarsa?" },
            { arabic: "رَانَ عَلَى قَلْبِهِ", translation: "Qəlbini pas bürüyər" }
        ]
    },
    {
        id: 225,
        title: "Haram Qazanc",
        dialogue: [
            { arabic: "مَا هُوَ الْمَالُ الْحَرَامُ؟", translation: "Haram mal nədir?" },
            { arabic: "كُلُّ مَالٍ كُسِبَ مِنْ طَرِيقٍ غَيْرِ شَرْعِيٍّ", translation: "Şəriətə zidd yolla qazanılan hər bir maldır" },
            { arabic: "مِثْلُ مَاذَا؟", translation: "Nə kimi?" },
            { arabic: "كَالرِّبَا، وَالسِّرْقَةِ، وَالرِّشْوَةِ", translation: "Sələm, oğurluq və rüşvət kimi" },
            { arabic: "هَلْ يُقْبَلُ الدُّعَاءُ مَعَ أِكْلِ الْحَرَامِ؟", translation: "Haram yeməklə dua qəbul olunar?" },
            { arabic: "لَا، مَطْعَمُهُ حَرَامٌ فَأَنَّى يُسْتَجَابُ لَهُ", translation: "Xeyr, yeməyi haramdırsa duası necə qəbul olsun!" },
            { arabic: "كُلُّ جَسَدٍ نَبَتَ مِنْ سُحْتٍ؟", translation: "Haramla bəslənən hər bir bədən?" },
            { arabic: "فَالنَّارُ أَوْلَى بِهِ", translation: "Cəhənnəm odu ona daha layiqdir" }
        ]
    },
    {
        id: 226,
        title: "Riba (Sələm) Haramlığı",
        dialogue: [
            { arabic: "مَا هُوَ الرِّبَا؟", translation: "Riba (sələm) nədir?" },
            { arabic: "الزِّيَادَةُ الْمَشْرُوطَةُ فِي الْقَرْضِ أَوْ الْبَيْعِ", translation: "Borcda və ya satışda şərt qoyulmuş artıq faizdir" },
            { arabic: "مَا حُكْمُهُ فِي الإِسْلَامِ؟", translation: "İslamda onun hökmü nədir?" },
            { arabic: "كَبِيرَةٌ مِنْ أَعْظَمِ الْكَبَائِرِ", translation: "Böyük günahların ən böyüklərindəndir" },
            { arabic: "مَاذَا أَعْلَنَ اللَّهُ عَلَى آكِلِ الرِّبَا؟", translation: "Allah sələm yeyənə nə elan etmişdir?" },
            { arabic: "أَعْلَنَ عَلَيْهِ حَرْبًا مِنَ اللَّهِ وَرَسُولِهِ", translation: "Allah və Rəsulu tərəfindən müharibə elan edilmişdir" },
            { arabic: "مَنْ لَعَنَ النَّبِيُّ ﷺ فِي الرِّبَا؟", translation: "Peyğəmbər ﷺ sələmdə kimləri lənətləyib?" },
            { arabic: "آكِلَهُ، وَمُوكِلَهُ، وَكَاتِبَهُ، وَشَاهِدَيْهِ", translation: "Yeyənini, yedizdirənini, yazanını və iki şahidini" }
        ]
    },
    {
        id: 227,
        title: "Rüşvətdən Çəkinmək",
        dialogue: [
            { arabic: "مَا هِيَ الرِّشْوَةُ؟", translation: "Rüşvət nədir?" },
            { arabic: "مَا يُعْطَى لِإِبْطَالِ حَقٍّ أَوْ إِحْقَاقِ بَاطِلٍ", translation: "Haqqı batil etmək və ya batili haqq etmək üçün verilən maldır" },
            { arabic: "مَا حُكْمُ الرَّاشِي وَالْمُرْتَشِي؟", translation: "Rüşvət verən və alanın hökmü nədir?" },
            { arabic: "لَعَنَ رَسُولُ اللَّهِ الرَّاشِيَ وَالْمُرْتَشِيَ", translation: "Allahın Rəsulu rüşvət verəni də, alanı da lənətləmişdir" },
            { arabic: "هَلْ فِيهَا أَكْلُ أَمْوَالِ النَّاسِ بِالْبَاطِلِ؟", translation: "Onda insanların malını haqsız yemək var?" },
            { arabic: "نَعَمْ، وَهِيَ مِنَ الْفَسَادِ فِي الأَرْضِ", translation: "Bəli, və o yer üzündə fitnə-fəsaddandır" },
            { arabic: "كَيْفَ نَطْهُرُ مَكْسَبَنَا؟", translation: "Qazancımızı necə təmizləyirik?" },
            { arabic: "بِالتَّرْكِ وَالتَّوْبَةِ وَالأَمَانَةِ", translation: "Tərk etməklə, tövbə və əmanətlə" }
        ]
    },
    {
        id: 228,
        title: "Qumarın Haramlığı",
        dialogue: [
            { arabic: "مَا هُوَ الْمَيْسِرُ (الْقِمَارُ)؟", translation: "Qumar (Məysir) nədir?" },
            { arabic: "كُلُّ لَعِبٍ فِيهِ خَسَارَةٌ أَوْ كَسْبٌ مَالِيٌّ مَشْرُوطٌ", translation: "Uduzmaq və ya maliyyə qazancı şərti olan hər bir oyundur" },
            { arabic: "مَا حُكْمُهُ فِي القُرْآنِ؟", translation: "Quranda onun hökmü nədir?" },
            { arabic: "رِجْسٌ مِنْ عَمَلِ الشَّيْطَانِ", translation: "Şeytan əməlindən olan bir murdarlıqdır" },
            { arabic: "مَاذَا يَجِبُ عَلَيْنَا؟", translation: "Bizə ne vacibdir?" },
            { arabic: "فاجْتَنِبُوهُ لَعَلَّكُمْ تُفْلِحُونَ", translation: "Ondan çəkinin ki, nicat tapasınız" },
            { arabic: "هَلْ يُورِثُ الْعَدَاوَةَ؟", translation: "O düşmənçilik yaradır?" },
            { arabic: "نَعَمْ، يُورِثُ الْعَدَاوَةَ وَالْبَغْضَاءَ", translation: "Bəli, düşmənçilik və kin yaradır" }
        ]
    },
    {
        id: 229,
        title: "Ticarət Əxlaqı",
        dialogue: [
            { arabic: "كَيْفَ يَكُونُ التَّاجِرُ الصَّدُوقُ؟", translation: "Doğruçu tacir necə olar?" },
            { arabic: "لا يَكْذِبُ وَلا يَغُشُّ وَلا يَحْلِفُ كَذِبًا", translation: "Yalan deməz, hələ etməz və yalandan and içməz" },
            { arabic: "مَا مَكَانَةُ التَّاجِرِ الصَّدُوقِ يَوْمَ القِيَامَةِ؟", translation: "Doğruçu tacirin Qiyamət günü məqamı nədir?" },
            { arabic: "مَعَ النَّبِيِّينَ وَالصِّدِّيقِينَ وَالشُّهَدَاءِ", translation: "Peyğəmbərlər, siddqlər və şəhidlərlə bərabərdir" },
            { arabic: "مَا حُكْمُ الْغَشِّ فِي الْبَيْعِ؟", translation: "Ticarətdə hiylənin (kələyin) hökmü nədir?" },
            { arabic: "مَنْ غَشَّنَا فَلَيْسَ مِنَّا", translation: "Kim bizi aldadarsa bizdən deyildir" },
            { arabic: "هَلْ نُبَيِّنُ عُيُوبَ السِّلْعَةِ؟", translation: "Malın eyblərini bildirməliyik?" },
            { arabic: "نَعَمْ، الْبَيِّنَانِ بُورِكَ لَهُمَا", translation: "Bəli, aydın bəyan edənlərin ticarətinə bərəkət verilər" }
        ]
    },
    {
        id: 230,
        title: "İşçi Haqqı",
        dialogue: [
            { arabic: "مَتَى يُعْطَى الأَجِيرُ حَقَّهُ؟", translation: "İşçinin haqqı ne vaxt verilir?" },
            { arabic: "أَعْطُوا الأَجِيرَ أَجْرَهُ قَبْلَ أَنْ يَجِفَّ عَرَقُهُ", translation: "İşçinin haqqını təri qurumadan verin" },
            { arabic: "مَا حُكْمُ مَنْ ظَلَمَ الأَجِيرَ؟", translation: "İşçiyə zülm edənin hökmü nədir?" },
            { arabic: "اللَّهُ خَصْمُهُ يَوْمَ الْقِيَامَةِ", translation: "Qiyamət günü Allah onun düşmənidir" },
            { arabic: "هَلْ يُكَلَّفُ الْعَامِلُ فَوْقَ طَاقَتِهِ؟", translation: "İşçiyə gücündən artıq iş tapşırılar?" },
            { arabic: "لَا، لا تُكَلِّفُوهُمْ مَا يَغْلِبُهُمْ", translation: "Xeyr, gücləri çatmayacaq şeyi tapşırmayın" },
            { arabic: "فَإِنْ كَلَّفْتُمُوهُمْ؟", translation: "Bəs tapşırırsınızsa?" },
            { arabic: "فَأَعِينُوهُمْ", translation: "Onda onlara kömək edin" }
        ]
    },
    {
        id: 231,
        title: "Qəlb Xəstəlikləri",
        dialogue: [
            { arabic: "مَا هِيَ أَمْرَاضُ الْقَلْبِ؟", translation: "Qəlb xəstəlikləri hansılardır?" },
            { arabic: "الْكِبْرُ، وَالْحَسَدُ، وَالرِّيَاءُ، وَالْغِلُّ", translation: "Təkəbbür, həsəd, riya və kin" },
            { arabic: "مَا هُوَ دَوَاؤُهَا؟", translation: "Onların dərmanı nədir?" },
            { arabic: "الْإِخْلَاصُ، وَالذِّكْرُ، وَقِرَاءَةُ الْقُرْآنِ", translation: "İxlas, zikr və Quran oxumaq" },
            { arabic: "هَلْ يَنْفَعُ الْمَالُ يَوْمَ القِيَامَةِ؟", translation: "Qiyamət günü mal-dövlət fayda verər?" },
            { arabic: "يَوْمَ لا يَنْفَعُ مَالٌ وَلا بَنُونَ", translation: "O gün ki, nə mal-dövlət, nə də övladlar fayda verməz" },
            { arabic: "إِلا مَنْ أَتَى اللَّهَ بِمَاذَا؟", translation: "Yalnız Allaha nə ilə gələndən başqa?" },
            { arabic: "إِلَّا مَنْ أَتَى اللَّهَ بِقَلْبٍ سَلِيمٍ", translation: "Yalnız Allaha sağlam qəlblə gələnlərdən başqa" }
        ]
    },
    {
        id: 232,
        title: "Ucub (Özünü Bəyənmək)",
        dialogue: [
            { arabic: "مَا هُوَ الْعُجْبُ؟", translation: "Ucub (özünü bəyənmək) nədir?" },
            { arabic: "رُؤْيَةُ العَبْدِ كَمَالَ نَفْسِهِ وَعَمَلِهِ", translation: "Bəndənin öz nəfsini və əməlini mükəmməl görməsidir" },
            { arabic: "مَا خَطَرُ الْعُجْبِ؟", translation: "Ucubun təhlükəsi nədir?" },
            { arabic: "يُحْبِطُ الْعَمَلَ وَيُهْلِكُ الصَّاحِبَ", translation: "Əməli batil edər və insanı məhv edər" },
            { arabic: "مَا هِيَ الْمُهْلِكَاتُ الثَّلَاثُ؟", translation: "Məhv edici üç şey hansıdır?" },
            { arabic: "شُحٌّ مُطَاعٌ، وَهَوًى مُتَّبَعٌ، وَإِعْجَابُ الْمَرْءِ بِنَفْسِهِ", translation: "İtaət olunan xəsislik, uyulan nəfs və insanın özünü bəyənməsi" },
            { arabic: "كَيْفَ نَتَخَلَّصُ مِنْهُ؟", translation: "Ondan necə xilas oluruq?" },
            { arabic: "بِرُؤْيَةِ فَضْلِ اللَّهِ وَتَقْصِيرِ النَّفْسِ", translation: "Allahın fəzilətini görməklə və nəfsin qüsurunu bilməklə" }
        ]
    },
    {
        id: 233,
        title: "Riyadan Sığınmaq",
        dialogue: [
            { arabic: "مَا هُوَ الشِّرْكُ الْخَفِيُّ؟", translation: "Gizli şirk nədir?" },
            { arabic: "هُوَ الرِّيَاءُ فِي الْعِبَادَةِ", translation: "O ibadətdə riyakarlıq etməkdir" },
            { arabic: "كَيْفَ يَدْخُلُ الرِّيَاءُ؟", translation: "Riya necə daxil olar?" },
            { arabic: "أَدَبَّ مِنْ دَبِيبِ النَّمْلَةِ السَّوْدَاءِ", translation: "Qara qarışqanın yeriməsindən daha gizli" },
            { arabic: "مَاذَا نَدْعُو لِلْوِقَايَةِ مِنْهُ؟", translation: "Ondan qorunmaq üçün nə dua edirik?" },
            { arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أُشْرِكَ بِكَ وَأَنَا أَعْلَمُ", translation: "Allahım, bilərək Sənə şərik qoşmaqdan Sənə sığınıram" },
            { arabic: "وَأَسْتَغْفِرُكَ لِمَا لا أَعْلَمُ؟", translation: "Və bilmədiklərim üçün Səndən bağışlanma diləyirəm?" },
            { arabic: "نَعَمْ، هَذَا هُوَ الدُّعَاءُ النَّبَوِيُّ", translation: "Bəli, Peyğəmbərimizin öyrətdiyi dua budur" }
        ]
    },
    {
        id: 234,
        title: "Şöhrət Həvəsi",
        dialogue: [
            { arabic: "مَا حُكْمُ حُبِّ الشُّهْرَةِ وَالظُّهُورِ؟", translation: "Şöhrət və gözə girmək həvəsinin hökmü nədir?" },
            { arabic: "مَذْمُومٌ وَيَكْسِرُ الإِخْلَاصَ", translation: "Pisləniləndir və ixlası pozur" },
            { arabic: "مَاذَا قَالَ السَّلَفُ فِي الظُّهُورِ؟", translation: "Sələf gözə girmək haqqında nə deyib?" },
            { arabic: "حُبُّ الظُّهُورِ يَقْصِمُ الظُّهُورَ", translation: "Gözə girmək sevdası bel qırar" },
            { arabic: "هَلْ كَانُوا يُحِبُّونَ الخَفَاءَ؟", translation: "Onlar gizli olmağı sevərdilər?" },
            { arabic: "نَعَمْ، كَانُوا يُحِبُّونَ الْعَمَلَ الْخَفِيَّ", translation: "Bəli, gizli əməl etməyi sevərdilər" },
            { arabic: "كَيْفَ نَحْمِي أَنْفُسَنَا؟", translation: "Özümüzü necə qoruyaq?" },
            { arabic: "بِإِخْفَاءِ الطَّاعَاتِ وَطَلَبِ رِضَا اللَّهِ", translation: "İtaətləri gizləməklə və Allahın razılığını istəməklə" }
        ]
    },
    {
        id: 235,
        title: "Dünya Həvəsi",
        dialogue: [
            { arabic: "مَا حَقِيقَةُ الدُّنْيَا؟", translation: "Dünyanın həqiqəti nədir?" },
            { arabic: "مَتَاعُ الْغُرُورِ وَزَوَالٌ سَرِيعٌ", translation: "Aldadıcı bir ləzzət və tez yox olan şeydir" },
            { arabic: "مَا مَثَلُ الدُّنْيَا فِي الآخِرَةِ؟", translation: "Dünyanın axirət yanında misalı nədir?" },
            { arabic: "كَمَا يَجْعَلُ أَحَدُكُمْ إِصْبَعَهُ فِي الْيَمِّ", translation: "Sizdən birinin barmağını dənizə batırması kimidir" },
            { arabic: "فَلْيَنْظُرْ بِمَ يَرْجِعُ؟", translation: "Baxsın görsün barmağı nə ilə qayıdır?" },
            { arabic: "نَعَمْ، بِقَطْرَةٍ صَغِيرَةٍ", translation: "Bəli, kiçik bir damla ilə" },
            { arabic: "هَلْ نَجْعَلُهَا فِي قُلُوبِنَا؟", translation: "Onu qəlbimizdə yerləşdiririk?" },
            { arabic: "لَا، نَجْعَلُهَا فِي أَيْدِينَا لا فِي قُلُوبِنَا", translation: "Xeyr, onu əlimizdə saxlayırıq, qəlbimizdə yox" }
        ]
    },
    {
        id: 236,
        title: "Zuhd Nədir?",
        dialogue: [
            { arabic: "مَا هُوَ الزُّهْدُ الْحَقِيقِيُّ؟", translation: "Həqiqi zühd (dünyadan çəkinmək) nədir?" },
            { arabic: "تَرْكُ مَا لا يَنْفَعُ فِي الآخِرَةِ", translation: "Axirətdə fayda verməyən şeyi tərk etməkdir" },
            { arabic: "هَلْ هُوَ تَحْرِيمُ الْحَلَالِ؟", translation: "O halalı haram etməkdir?" },
            { arabic: "لَا، لَيْسَ بِتَحْرِيمِ الحَلَالِ وَلا إِضَاعَةِ المَالِ", translation: "Xeyr, halalı haram etmək və malı zay etmək deyildir" },
            { arabic: "فَمَا هُوَ إِذَنْ؟", translation: "Bəs onda nədir?" },
            { arabic: "أَنْ تَكُونَ بِمَا فِي يَدِ اللَّهِ أَوْثَقَ مِنْهُ بِمَا فِي يَدِكَ", translation: "Allahın dərgahında olana öz əlindəkindən daha çox güvənməyindir" },
            { arabic: "ازْهَدْ فِي الدُّنْيَا يُحِبَّكَ اللَّهُ؟", translation: "Dünyada zahid ol ki, Allah seni sevsin?" },
            { arabic: "نَعَمْ، وَازْهَدْ فِيمَا عِنْدَ النَّاسِ يُحِبَّكَ النَّاسُ", translation: "Bəli, 'Və insanların əlində olandan gözünü çək ki, insanlar da səni sevsin'" }
        ]
    },
    {
        id: 237,
        title: "Qənaətkar Olmaq",
        dialogue: [
            { arabic: "مَا هِيَ الْقَنَاعَةُ؟", translation: "Qənaət nədir?" },
            { arabic: "الرِّضَا بِمَا قَسَمَهُ اللَّهُ", translation: "Allahın nəsib etdiyi bölüşə razı olmaqdır" },
            { arabic: "مَنْ هُوَ الْغَنِيُّ الْحَقِيقِيُّ؟", translation: "Həqiqi varlı kəs kimdir?" },
            { arabic: "غَنِيُّ النَّفْسِ لا كَثْرَةُ الْعَرَضِ", translation: "Qəlbi varlı olan kəsdir, mal-dövləti çox olan yox" },
            { arabic: "قَدْ أَفْلَحَ مَنْ أَسْلَمَ وَرُزِقَ كَفَافًا؟", translation: "Müsəlman olub bəs edəcək ruzi verilən nicat tapdı?" },
            { arabic: "نَعَمْ، وَقَنَّعَهُ اللَّهُ بِمَا آتَاهُ", translation: "Bəli, 'Və Allahın verdiyinə qənaət edən nicat tapdı'" },
            { arabic: "الْقَنَاعَةُ كَنْزٌ لا يَفْنَى؟", translation: "Qənaət tükənməz bir xəzinədir?" },
            { arabic: "نَعَمْ، كَنْزٌ عَظِيمٌ", translation: "Bəli, böyük bir xəzinədir" }
        ]
    },
    {
        id: 238,
        title: "Allaha Təvəkkülün Əlaməti",
        dialogue: [
            { arabic: "كَيْفَ نَعْرِفُ صِدْقَ التَّوَكُّلِ؟", translation: "Səmimi təvəkkülü necə bilirik?" },
            { arabic: "بِاطْمِئْنَانِ الْقَلْبِ وَعَدَمِ الْجَزَعِ", translation: "Qəlbin rahatlığı və həyəcanlanmamaqla" },
            { arabic: "هَلْ يَحْزَنُ الْمُتَوَكِّلُ عَلَى مَا فَاتَهُ؟", translation: "Təvəkkül edən əlindən çıxan şeyə kədərlənər?" },
            { arabic: "لَا، يَعْلَمُ أَنَّ مَا أَصَابَهُ لَمْ يَكُنْ لِيُخْطِئَهُ", translation: "Xeyr, bilir ki, başıına gələn yan keçməzdi" },
            { arabic: "وَمَا أَخْطَأَهُ لَمْ يَكُنْ لِيُصِيبَهُ؟", translation: "Və yan keçən şey də başına gəlməzdi?" },
            { arabic: "نَعَمْ، كُلُّ شَيْءٍ بِقَدَرِ اللَّهِ", translation: "Bəli, hər şey Allahın qədəri ilədir" },
            { arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ؟", translation: "Allah bizə kifayətdir, O neçə gözəl vəkildir?" },
            { arabic: "نَعَمْ، نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيرُ", translation: "Bəli, O neçə gözəl Hami və neçə gözəl Köməkçidir" }
        ]
    },
    {
        id: 239,
        title: "İxlası Qorumaq",
        dialogue: [
            { arabic: "كَيْفَ نُحَافِظُ عَلَى الإِخْلَاصِ؟", translation: "İxlası necə qoruyuruq?" },
            { arabic: "بِمُجَاهَدَةِ النَّفْسِ وَالدُّعَاءِ الدَّائِمِ", translation: "Nəfslə mücadilə və davamlı dua ilə" },
            { arabic: "هَلْ يَتَغَيَّرُ الإِخْلَاصُ؟", translation: "İxlas dəyişə bilər?" },
            { arabic: "نَعَمْ، الْقُلُوبُ بَيْنَ أِصَبُعَيْنِ مِنْ أَصَابِعِ الرَّحْمَنِ", translation: "Bəli, 'Qəlblər Rəhmənin barmaqlarından iki barmağı arasındadır'" },
            { arabic: "يُقَلِّبُهَا كَيْفَ يَشَاءُ؟", translation: "Onları istədiyi kimi çevirər?" },
            { arabic: "نَعَمْ، يُقَلِّبُهَا كَيْفَ يَشَاءُ", translation: "Bəli, istədiyi kimi çevirər" },
            { arabic: "مَاذَا كَانَ يَدْعُو النَّبِيُّ ﷺ؟", translation: "Peyğəmbər ﷺ nə dua edərdi?" },
            { arabic: "يا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ", translation: "Ey qəlbləri çevirən Rəbbim, qəlbimi dinin üzərində sabit et" }
        ]
    },
    {
        id: 240,
        title: "Muhasibə (Nəfsi Hesaba Çəkmək)",
        dialogue: [
            { arabic: "مَا هِيَ الْمُحَاسَبَةُ؟", translation: "Muhasibə (nəfsi hesaba çəkmək) nədir?" },
            { arabic: "أَنْ يُحَاسِبَ العَبْدُ نَفْسَهُ قَبْلَ يَوْمِ الْقِيَامَةِ", translation: "Bəndənin Qiyamət günündən əvvəl öz nəfsini hesaba çəkməsidir" },
            { arabic: "مَاذَا قَالَ عُمَرُ رَضِيَ اللَّهُ عَنْهُ؟", translation: "Ömər (radiyallahu anh) nə buyurub?" },
            { arabic: "حَاسِبُوا أَنْفُسَكُمْ قَبْلَ أَنْ تُحَاسَبُوا", translation: "Hesaba çəkilməzdən əvvəl özünüzü hesaba çəkin" },
            { arabic: "وَزِنُوا أَنْفُسَكُمْ قَبْلَ أَنْ تُوزَنُوا؟", translation: "Tərəziyə qoyulmazdan əvvəl özünüzü tartın?" },
            { arabic: "نَعَمْ، وَتَزَيَّنُوا لِلْعَرْضِ الأَكْبَرِ", translation: "Bəli, 'Və böyük hüzura çıxmaq üçün hazırlaşın'" },
            { arabic: "مَتَى نُحَاسِبُ أَنْفُسَنَا؟", translation: "Nəfsimizi ne vaxt hesaba çəkirik?" },
            { arabic: "فِي كُلِّ لَيْلَةٍ قَبْلَ النَّوْمِ", translation: "Hər gecə yatmazdan əvvəl" }
        ]
    },
    {
        id: 241,
        title: "Adəm Əleyhissalam",
        dialogue: [
            { arabic: "مَنْ هُوَ أَبُو الْبَشَرِ؟", translation: "İnsanlığın atası kimdir?" },
            { arabic: "آدَمُ عَلَيْهِ السَّلَامُ", translation: "Adəm əleyhissalamdır" },
            { arabic: "مِمَّ خَلَقَهُ اللَّهُ؟", translation: "Allah onu nədən yaratdı?" },
            { arabic: "خَلَقَهُ مِنْ طِينٍ", translation: "Torpaqdan (balçıqdan) yaratdı" },
            { arabic: "مَاذَا عَلَّمَهُ اللَّهُ؟", translation: "Allah ona nə öyrətdi?" },
            { arabic: "وَعَلَّمَ آدَمَ الأَسْمَاءَ كُلَّهَا", translation: "Adəmə bütün adları öyrətdi" },
            { arabic: "مَاذَا قَالَ عِنْدَمَا أَكَلَ مِنَ الشَّجَرَةِ؟", translation: "Ağacdan yediyi zaman nə dedi?" },
            { arabic: "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ", translation: "Rəbbimiz, biz özümüzə zülm etdik, əgər bizi bağışlamasan və rəhm etməsən ziyana uğrayanlardan olarıq" }
        ]
    },
    {
        id: 242,
        title: "Nuh Əleyhissalam",
        dialogue: [
            { arabic: "كَمْ لَبِثَ نُوحٌ فِي قَوْمِهِ يَدْعُوهُمْ؟", translation: "Nuh öz qövmü arasında nə qədər dəvət etdi?" },
            { arabic: "أَلْفَ سَنَةٍ إِلا خَمْسِينَ عَامًا", translation: "Əllisi əskik min il (950 il)" },
            { arabic: "بِمَاذَا أَمَرَهُ اللَّهُ؟", translation: "Allah ona nəyi əmr etdi?" },
            { arabic: "بِبِنَاءِ السَّفِينَةِ", translation: "Gəmi tikməyi" },
            { arabic: "مَنْ نَجَا مَعَهُ؟", translation: "Onunla kimlər xilas oldu?" },
            { arabic: "الْمُؤْمِنُونَ فَقَطْ", translation: "Yalnız möminlər" },
            { arabic: "وَمَاذَا حَدَثَ لِلْكَافِرِينَ؟", translation: "Kafirlərə nə oldu?" },
            { arabic: "أُغْرِقُوا بِالطُّوفَانِ", translation: "Tufanla suda batırıldılar" }
        ]
    },
    {
        id: 243,
        title: "İbrahim Əleyhissalam",
        dialogue: [
            { arabic: "مَنْ هُوَ خَلِيلُ الرَّحْمَنِ؟", translation: "Rəhmənin dostu (Xəlilullah) kimdir?" },
            { arabic: "إِبْرَاهِيمُ عَلَيْهِ السَّلَامُ", translation: "İbrahim əleyhissalamdır" },
            { arabic: "مَاذَا فَعَلَ بِالأَصْنَامِ؟", translation: "Bütlərə nə etdi?" },
            { arabic: "كَسَرَهَا إِلا كَبِيرًا لَهُمْ", translation: "Onların böyüyündən başqa hamısını qırdı" },
            { arabic: "مَاذَا فَعَلَ الْكُفَّارُ بِهِ؟", translation: "Kafir ona nə etdilər?" },
            { arabic: "أَلْقَوْهُ فِي النَّارِ", translation: "Onu oda atdılar" },
            { arabic: "مَاذَا قَالَ اللَّهُ لِلنَّارِ؟", translation: "Allah oda nə buyurdu?" },
            { arabic: "يا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَى إِبْرَاهِيمَ", translation: "Ey od, İbrahim üçün sərinlik və salamatlıq ol" }
        ]
    },
    {
        id: 244,
        title: "Musa Əleyhissalam",
        dialogue: [
            { arabic: "مَنْ هُوَ كَلِيمُ اللَّهِ؟", translation: "Allahın vasitəsiz danışdığı (Kəlimullah) peyğəmbər kimdir?" },
            { arabic: "مُوسَى عَلَيْهِ السَّلَامُ", translation: "Musa əleyhissalamdır" },
            { arabic: "إِلَى مَنْ أُرْسِلَ؟", translation: "Kimə göndərildi?" },
            { arabic: "إِلَى فِرْعَوْنَ وَبَنِي إِسْرَائِيلَ", translation: "Firona və İsrail oğullarına" },
            { arabic: "مَا هِيَ مُعْجِزَتُهُ الْكُبْرَى؟", translation: "Onun en böyük möcüzəsi nə idi?" },
            { arabic: "الْعَصَا وَانْفِلَاقُ الْبَحْرِ", translation: "Əsası və dənizin yarılması" },
            { arabic: "مَاذَا حَدَثَ لِفِرْعَوْنَ؟", translation: "Firona nə oldu?" },
            { arabic: "أَغْرَقَهُ اللَّهُ فِي الْبَحْرِ", translation: "Allah onu dənizdə batırdı" }
        ]
    },
    {
        id: 245,
        title: "İsa Əleyhissalam",
        dialogue: [
            { arabic: "مَنْ هُوَ عِيسَى ابْنُ مَرْيَمَ؟", translation: "Məryəm oğlu İsa kimdir?" },
            { arabic: "عَبْدُ اللَّهِ وَرَسُولُهُ وَكَلِمَتُهُ", translation: "Allahın bəndəsi, Rəsulu və kəlməsidir" },
            { arabic: "هَلْ خُلِقَ بِلا أَبٍ؟", translation: "O atasız yaradılıb?" },
            { arabic: "نَعَمْ، خَلَقَهُ اللَّهُ مِنْ مَرْيَمَ بِلا أَبٍ", translation: "Bəli, Allah onu Məryəmdən atasız yaratdı" },
            { arabic: "هَلْ قُتِلَ أَوْ صُلِبَ؟", translation: "O öldürüldü, yoxsa çarmıxa çəkildi?" },
            { arabic: "وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ وَلَكِنْ شُبِّهَ لَهُمْ", translation: "Onu nə öldürdülər, nə de çarmıxa çəkdilər, yalnız onlara elə gəldi" },
            { arabic: "أَيْنَ هُوَ الآنَ؟", translation: "O indi haradadır?" },
            { arabic: "رَفَعَهُ اللَّهُ إِلَيْهِ فِي السَّمَاءِ", translation: "Allah onu Öz dərgahına - səmaya ucaltmışdır" }
        ]
    },
    {
        id: 246,
        title: "Peyğəmbərin ﷺ Doğulması",
        dialogue: [
            { arabic: "أَيْنَ وُلِدَ النَّبِيُّ ﷺ؟", translation: "Peyğəmbər ﷺ harada doğuldu?" },
            { arabic: "فِي مَكَّةَ الْمُكَرَّمَةِ", translation: "Məkkə-i Mukərrəmədə" },
            { arabic: "فِي أَيِّ عَامٍ؟", translation: "Hansı ildə?" },
            { arabic: "فِي عَامِ الْفِيلِ", translation: "Fil ilində" },
            { arabic: "مَنْ هُوَ أَبُوهُ؟", translation: "Onun atası kimdir?" },
            { arabic: "عَبْدُ اللَّهِ بْنُ عَبْدِ الْمُطَّلِبِ", translation: "Abdullah ibn Əbdülmüttəlibdir" },
            { arabic: "وَمَنْ هِيَ أُمُّهُ؟", translation: "Bəs anası kimdir?" },
            { arabic: "آمِنَةُ بِنْتُ وَهْبٍ", translation: "Aminə bint Vəhbdir" }
        ]
    },
    {
        id: 247,
        title: "Peyğəmbərin ﷺ Əxlaqı",
        dialogue: [
            { arabic: "بِمَاذَا وَصَفَهُ اللَّهُ فِي الْقُرْآنِ؟", translation: "Allah onu Quranda necə vəsf etmişdir?" },
            { arabic: "وَإِنَّكَ لَعَلَى خُلُقٍ عَظِيمٍ", translation: "Şübhəsiz ki, sən böyük əxlaq üzərindəsən" },
            { arabic: "مَاذَا قَالَتْ عَائِشَةُ عَنْ خُلُقِهِ؟", translation: "Aişə onun əxlaqı haqqında nə demişdir?" },
            { arabic: "كَانَ خُلُقُهُ الْقُرْآنَ", translation: "Onun əxlaqı Quran idi" },
            { arabic: "بِمَاذَا كَانَ يُلَقَّبُ قَبْلَ الْبِعْثَةِ؟", translation: "Peyğəmbərlikdən əvvəl nə ləqəb verilmişdi?" },
            { arabic: "بِالصَّادِقِ الأَمِينِ", translation: "Əs-Siddiq əl-Əmin (Doğruçu və Əmanətdar)" },
            { arabic: "صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ", translation: "Sallallahu əleyhi və səlləm" },
            { arabic: "جَزَاكَ اللَّهُ خَيْرًا", translation: "Allah sene xeyir versin" }
        ]
    },
    {
        id: 248,
        title: "Hicrət Hadisəsi",
        dialogue: [
            { arabic: "مِنْ أَيْنَ هَاجَرَ النَّبِيُّ ﷺ؟", translation: "Peyğəmbər ﷺ haradan hicrət etdi?" },
            { arabic: "مِنْ مَكَّةَ إِلَى الْمَدِينَةِ", translation: "Məkkədən Mədinəyə" },
            { arabic: "مَنْ كَانَ رَفِيقَهُ فِي الْهِجْرَةِ؟", translation: "Hicrətdə yoldaşı kim idi?" },
            { arabic: "أَبُو بَكْرٍ الصِّدِّيقُ رَضِيَ اللَّهُ عَنْهُ", translation: "Əbu Bəkr əs-Siddiq (radiyallahu anh)" },
            { arabic: "أَيْنَ اخْتَبَآ مِنَ الْكُفَّارِ؟", translation: "Kafirlərdən harada gizləndilər?" },
            { arabic: "فِي غَارِ ثَوْرٍ", translation: "Səvr mağarasında" },
            { arabic: "مَاذَا قَالَ لأَبِي بَكْرٍ فِي الْغَارِ؟", translation: "Mağarada Əbu Bəkrə nə dedi?" },
            { arabic: "لا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا", translation: "Kədərlənmə, şübhəsiz ki, Allah bizimlədir" }
        ]
    },
    {
        id: 249,
        title: "Bədr Döyüşü İbrəti",
        dialogue: [
            { arabic: "مَتَى وَقَعَتْ غَزْوَةُ بَدْرٍ؟", translation: "Bədr döyüşü ne vaxt baş verdi?" },
            { arabic: "فِي السَّنَةِ الثَّانِيَةِ مِنَ الْهِجْرَةِ", translation: "Hicrətin ikinci ilində" },
            { arabic: "كَمْ كَانَ عَدَدُ الْمُسْلِمِينَ؟", translation: "Müsəlmanların sayı neçə idi?" },
            { arabic: "ثَلَاثَمِائَةٍ وَبِضْعَةَ عَشَرَ", translation: "Üç yüz on bir neçə nəfər" },
            { arabic: "وَكَمْ كَانَ عَدَدُ الْمُشْرِكِينَ؟", translation: "Bəs müşriklərin sayı?" },
            { arabic: "نَحْوَ أَلْفِ رَجُلٍ", translation: "Min nəfərə yaxın" },
            { arabic: "بِمَنْ أَيَّدَ اللَّهُ الْمُؤْمِنِينَ؟", translation: "Allah möminlərə nə ilə yardım etdi?" },
            { arabic: "بِالْمَلَائِكَةِ وَأَنْزَلَ النَّصْرَ", translation: "Mələklərlə yardım etdi və qələbə endirdi" }
        ]
    },
    {
        id: 250,
        title: "Uhud Döyüşü Dərsi",
        dialogue: [
            { arabic: "مَا هُوَ السَّبَبُ فِي خَسَارَةِ أُحُدٍ؟", translation: "Uhud döyüşündəki məğlubiyyətin (sınağın) səbəbi nə idi?" },
            { arabic: "مُخَالَفَةُ أَمْرِ النَّبِيِّ ﷺ", translation: "Peyğəmbərin ﷺ əmrinə qarşı çıxmaq" },
            { arabic: "مِنْ مَنْ؟", translation: "Kimlər tərəfindən?" },
            { arabic: "مِنَ الرُّمَاةِ عَلَى الْجَبَلِ", translation: "Dağda duran oxçular tərəfindən" },
            { arabic: "مَاذَا نَتَعَلَّمُ مِنْ ذَلِك؟", translation: "Buradan nə öyrənirik?" },
            { arabic: "أَنَّ المَعْصِيَةَ سَبَبٌ لِلْفَشَلِ", translation: "Asiliyin uduzmaq səbəbi olduğunu" },
            { arabic: "وَالطَّاعَةَ سَبَبٌ لِلنَّصْرِ؟", translation: "İtaətin isə qələbə səbəbi olduğunu?" },
            { arabic: "نَعَمْ، الطَّاعَةُ مِفْتَاحُ النَّصْرِ", translation: "Bəli, itaət qələbənin açarıdır" }
        ]
    },
    {
        id: 251,
        title: "Məkkənin Fəthi",
        dialogue: [
            { arabic: "مَتَى تَمَّ فَتْحُ مَكَّةَ؟", translation: "Məkkənin fəthi ne vaxt oldu?" },
            { arabic: "فِي السَّنَةِ الثَّامِنَةِ مِنَ الْهِجْرَةِ", translation: "Hicrətin səkkizinci ilində" },
            { arabic: "كَيْفَ دَخَلَ النَّبِيُّ ﷺ مَكَّةَ؟", translation: "Peyğəmbər ﷺ Məkkəyə necə daxil oldu?" },
            { arabic: "دَخَلَهَا مُتَوَاضِعًا شَاكِرًا لِلَّهِ", translation: "Təvazökar və Allaha şükür edərək daxil oldu" },
            { arabic: "مَاذَا قَالَ لأَهْلِ مَكَّةَ؟", translation: "Məkkə əhlinə nə dedi?" },
            { arabic: "اذْهَبُوا فَأَنْتُمُ الطُّلَقَاءُ", translation: "Gedin, siz artıq azadsınız" },
            { arabic: "مَاذَا فَعَلَ بِالأَصْنَامِ حَوْلَ الْكَعْبَةِ؟", translation: "Kəbə ətrafındakı bütlərə nə etdi?" },
            { arabic: "كَسَرَهَا وَقَالَ: جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ", translation: "Onları qırdı və 'Haqq gəldi, batil yox oldu' dedi" }
        ]
    },
    {
        id: 252,
        title: "Vidalaşma Həcci",
        dialogue: [
            { arabic: "مَتَى كَانَتْ حَجَّةُ الْوَدَاعِ؟", translation: "Vida həcci nə vaxt oldu?" },
            { arabic: "فِي السَّنَةِ الْعَاشِرَةِ مِنَ الْهِجْرَةِ", translation: "Hicrətin onuncu ilində" },
            { arabic: "مَاذَا أَوْصَى النَّبِيُّ ﷺ فِي خُطْبَتِهِ؟", translation: "Peyğəmbər ﷺ xütbəsində nə tövsiyə etdi?" },
            { arabic: "حُرْمَةَ الدِّمَاءِ وَالأَمْوَالِ وَالأَعْرَاضِ", translation: "Qanın, malın və namusun toxunulmazlığını" },
            { arabic: "وَمَاذَا أُنْزِلَ فِيهَا؟", translation: "Onda nə nazil oldu?" },
            { arabic: "الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ", translation: "Bu gün sizin dininizi kamilləşdirdim" },
            { arabic: "وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي؟", translation: "Və üzərinizdəki nemətimi tamamladım?" },
            { arabic: "نَعَمْ، وَرَضِيتُ لَكُمُ الإِسْلَامَ دِينًا", translation: "Bəli, 'Və sizin üçün din olaraq İslamdan razı qaldım'" }
        ]
    },
    {
        id: 253,
        title: "Peyğəmbərin ﷺ Vəfatı",
        dialogue: [
            { arabic: "مَتَى تُوُفِّيَ النَّبِيُّ ﷺ؟", translation: "Peyğəmbər ﷺ nə vaxt vəfat etdi?" },
            { arabic: "فِي السَّنَةِ الْحَادِيَةَ عَشْرَةَ مِنَ الْهِجْرَةِ", translation: "Hicrətin on birinci ilində" },
            { arabic: "فِي أَيِّ شَهْرٍ؟", translation: "Hansı ayda?" },
            { arabic: "فِي شَهْرِ رَبِيعٍ الأَوَّلِ", translation: "Rəbiüləvvəl ayında" },
            { arabic: "مَاذَا كَانَتْ آخِرُ وَصَايَاهُ؟", translation: "Onun son tövsiyələri nə idi?" },
            { arabic: "الصَّلَاةَ الصَّلَاةَ وَمَا مَلَكَتْ أَيْمَانُكُمْ", translation: "Namazı, namazı qoruyun və əlinizin altında olanlara diqqət edin" },
            { arabic: "أَيْنَ دُفِنَ؟", translation: "Harada dəfn olundu?" },
            { arabic: "فِي حُجْرَةِ عَائِشَةَ فِي الْمَدِينَةِ", translation: "Mədinədə Aişənin hücrəsində" }
        ]
    },
    {
        id: 254,
        title: "Əbu Bəkr əs-Siddiq",
        dialogue: [
            { arabic: "مَنْ هُوَ أَّوَلُ الْخُلَفَاءِ الرَّاشِدِينَ؟", translation: "Xuləfayi-Raşidinin birincisi kimdir?" },
            { arabic: "أَبُو بَكْرٍ الصِّدِّيقُ رَضِيَ اللَّهُ عَنْهُ", translation: "Əbu Bəkr əs-Siddiq (radiyallahu anh)" },
            { arabic: "لِمَاذَا سُمِّيَ الصِّدِّيقَ؟", translation: "Niyə 'əs-Siddiq' adlandırıldı?" },
            { arabic: "لِأَنَّهُ صَدَّقَ النَّبِيَّ ﷺ فِي الإِسْرَاءِ وَالْمِعْرَاجِ", translation: "Çünki İsra və Merac hadisəsində Peyğəmbəri ﷺ təsdiqlədi" },
            { arabic: "مَا هُوَ أَعْظَمُ عَمَلِهِ فِي الْخِلَافَةِ؟", translation: "Xilafətindəki ən böyük əməli nə idi?" },
            { arabic: "قِتَالُ أَهْلِ الرِّدَّةِ وَجَمْعُ الْقُرْآنِ", translation: "Mürtədlərə qarşı döyüşmək və Quranı toplamaq" },
            { arabic: "رَضِيَ اللَّهُ عَنْهُ وَأَرْضَاهُ", translation: "Allah ondan razı olsun" },
            { arabic: "آمِينَ يا رَبَّ العَالَمِينَ", translation: "Amin, ey aləmlərin Rəbbi" }
        ]
    },
    {
        id: 255,
        title: "Ömər ibn əl-Xəttab",
        dialogue: [
            { arabic: "مَنْ هُوَ الْفَارُوقُ؟", translation: "əl-Faruq (haqqı batildən ayıran) kimdir?" },
            { arabic: "عُمَرُ بْنُ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ", translation: "Ömər ibn əl-Xəttab (radiyallahu anh)" },
            { arabic: "لِمَاذَا سُمِّيَ بِالْفَارُوقِ؟", translation: "Niyə Faruq adlandırıldı?" },
            { arabic: "لِأَنَّ اللَّهَ فَرَّقَ بِهِ بَيْنَ الْحَقِّ وَالْبَاطِلِ", translation: "Çünki Allah onunla haqq ilə batili ayırdı" },
            { arabic: "مَاذَا كَانَ يَفْعَلُ الشَّيْطَانُ مِنْهُ؟", translation: "Şeytan ondan nə edərdi?" },
            { arabic: "كَانَ يَفِرُّ مِنْ طَرِيقِهِ", translation: "Onun keçdiyi yoldan qaçardı" },
            { arabic: "كَيْفَ كَانَ عَدْلُهُ؟", translation: "Onun ədaləti necə idi?" },
            { arabic: "شَهِيرًا فِي الآفَاقِ بِالْعَدْلِ", translation: "Ədaləti ilə dünyada məşhur idi" }
        ]
    },
    {
        id: 256,
        title: "Osman ibn Əffan",
        dialogue: [
            { arabic: "مَنْ هُوَ ذُو النُّورَيْنِ؟", translation: "Zun-Nurayn (iki nur sahibi) kimdir?" },
            { arabic: "عُثْمَانُ بْنُ عَفَّانَ رَضِيَ اللَّهُ عَنْهُ", translation: "Osman ibn Əffan (radiyallahu anh)" },
            { arabic: "لِمَاذَا سُمِّيَ بِذِي النُّورَيْنِ؟", translation: "Niyə Zun-Nurayn adlandırıldı?" },
            { arabic: "لِأَنَّهُ تَزَوَّجَ بِنْتَيْ النَّبِيِّ ﷺ", translation: "Çünki Peyğəmbərin ﷺ iki qızı ilə evlənmişdi" },
            { arabic: "مَا هِيَ أَبْرَزُ صِفَاتِهِ؟", translation: "Onun en bariz sifəti nə idi?" },
            { arabic: "الْحَيَاءُ وَالْكَرَمُ", translation: "Həya və səxavət" },
            { arabic: "مَاذَا فَعَلَ بِالْمُصْحَفِ؟", translation: "Musahəfə nə etdi?" },
            { arabic: "جَمَعَهُ عَلَى حَرْفٍ وَاحِدٍ وَوَحَّدَ الْمَصَاحِفَ", translation: "Onu bir qiraət üzrə topladı və nüsxələri birləşdirdi" }
        ]
    },
    {
        id: 257,
        title: "Əli ibn Əbi Talib",
        dialogue: [
            { arabic: "مَنْ هُوَ رَابِعُ الْخُلَفَاءِ الرَّاشِدِينَ؟", translation: "Xuləfayi-Raşidinin dördüncüsü kimdir?" },
            { arabic: "عَلِيُّ بْنُ أَبِي طَالِبٍ رَضِيَ اللَّهُ عَنْهُ", translation: "Əli ibn Əbi Talib (radiyallahu anh)" },
            { arabic: "مَا صِلَتُهُ بِالنَّبِيِّ ﷺ؟", translation: "Peyğəmbərlə ﷺ qohumluğu nə idi?" },
            { arabic: "ابْنُ عَمِّهِ وَزَوْجُ بِنْتِهِ فَاطِمَةَ", translation: "Əmisi oğlu və qızı Fatimənin yoldaşı idi" },
            { arabic: "مَنْ أَوَّلُ مَنْ آمَنَ مِنَ الصِّبْيَانِ؟", translation: "Uşaqlardan ilk iman gətirən kimdir?" },
            { arabic: "عَلِيٌّ رَضِيَ اللَّهُ عَنْهُ", translation: "Əli (radiyallahu anh)" },
            { arabic: "مَاذَا قَالَ النَّبِيُّ ﷺ يَوْمَ خَيْبَرَ؟", translation: "Xeybər günü Peyğəmbər ﷺ nə buyurdu?" },
            { arabic: "لَأُعْطِيَنَّ الرَّايَةَ غَدًا رَجُلًا يُحِبُّ اللَّهَ وَرَسُولَهُ", translation: "Sabah bayrağı öyle bir adama verəcəyəm ki, o Allahı və Rəsulunu sevir" }
        ]
    },
    {
        id: 258,
        title: "Cənnətlə Müjdələnənlər",
        dialogue: [
            { arabic: "كَمْ عَدَدُ الْمُبَشَّرِينَ بِالْجَنَّةِ فِي حَدِيثٍ وَاحِدٍ؟", translation: "Bircə hədisdə Cənnətlə müjdələnənlərin sayı neçədir?" },
            { arabic: "عَشَرَةٌ مِنَ الصَّحَابَةِ", translation: "Səhabələrdən on nəfərdir" },
            { arabic: "اذْكُرْ بَعْضًا مِنْ غَيْرِ الْخُلَفَاءِ", translation: "Xəlifələrdən başqa bəzilərini de" },
            { arabic: "طَلْحَةُ، وَالزُّبَيْرُ، وَعَبْدُ الرَّحْمَنِ بْنُ عَوْفٍ", translation: "Təlhə, Zubeyr və Əbdürrəhman ibn Auf" },
            { arabic: "وَمَنْ أَيْضًا؟", translation: "Və daha kimlər?" },
            { arabic: "سَعْدٌ، وَسَعِيدٌ، وَأَبُو عُبَيْدَةَ بْنُ الْجَرَّاحِ", translation: "Sə'd, Səid və Əbu Ubeydə ibn əl-Cərrah" },
            { arabic: "رَضِيَ اللَّهُ عَنْهُمْ أَجْمَعِينَ", translation: "Allah onların hamısından razı olsun" },
            { arabic: "آمِينَ يا رَبَّ العَالَمِينَ", translation: "Amin, ey aləmlərin Rəbbi" }
        ]
    },
    {
        id: 259,
        title: "Muhacirlər",
        dialogue: [
            { arabic: "مَنْ هُمُ الْمُهَاجِرُونَ؟", translation: "Muhacirlər kimlərdir?" },
            { arabic: "الَّذِينَ تَرَكُوا دِيَارَهُمْ وَهَاجَرُوا إِلَى الْمَدِينَةِ", translation: "Evlərini tərk edib Mədinəyə hicrət edənlərdir" },
            { arabic: "لِمَاذَا هَاجَرُوا؟", translation: "Nə üçün hicrət etdilər?" },
            { arabic: "نُصْرَةً لِلَّهِ وَرَسُولِهِ وَفِرَارًا بِدِينِهِمْ", translation: "Allaha və Rəsuluna kömək etmək və dinlərini qorumaq üçün" },
            { arabic: "مَا مَكَانَتُهُمْ فِي الْقُرْآنِ؟", translation: "Quranda onların məqamı nədir?" },
            { arabic: "وَالسَّابِقُونَ الأَوَّلُونَ مِنَ الْمُهَاجِرِينَ وَالأَنْصَارِ", translation: "Önə keçən ilk Muhacirlər və Ənsarlar" },
            { arabic: "رَضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ؟", translation: "Allah onlardan razı qaldı, onlar da Ondan?" },
            { arabic: "نَعَمْ، وَأَعَدَّ لَهُمْ جَنَّاتٍ", translation: "Bəli, 'Və onlar üçün Cənnətlər hazırladı'" }
        ]
    },
    {
        id: 260,
        title: "Ənsarlar",
        dialogue: [
            { arabic: "مَنْ هُمُ الأَنْصَارُ؟", translation: "Ənsarlar kimlərdir?" },
            { arabic: "أَهْلُ الْمَدِينَةِ الَّذِينَ نَصَرُوا النَّبِيَّ ﷺ", translation: "Peyğəmbərə ﷺ kömək edən Mədinə əhlidir" },
            { arabic: "مِنْ أَيِّ قَبِيلَتَيْنِ؟", translation: "Hansı iki qəbilədən?" },
            { arabic: "مِنَ الأَوْسِ وَالْخَزْرَجِ", translation: "Evs və Xəzrəc qəbilələrindən" },
            { arabic: "بِمَاذَا اتَّصَفُوا؟", translation: "Nə ilə xarakterizə olunurdular?" },
            { arabic: "بِالإِيثَارِ وَالْكَرَمِ وَالْمَحَبَّةِ", translation: "Fədakarlıq, səxavət və məhəbbətlə" },
            { arabic: "مَا عَلَامَةُ الإِيمَانِ فِيهِمْ؟", translation: "Onlara qarşı imanın əlaməti nədir?" },
            { arabic: "آيَةُ الإِيمَانِ حُبُّ الأَنْصَارِ", translation: "İmanın əlaməti Ənsarı sevməkdir" }
        ]
    },
    {
        id: 261,
        title: "Xədicə bint Xuvəylid",
        dialogue: [
            { arabic: "مَنْ هِيَ أَوَّلُ أُمَّهَاتِ الْمُؤْمِنِينَ؟", translation: "Möminlərin analarının birincisi kimdir?" },
            { arabic: "خَدِيجَةُ بِنْتُ خُوَيلِدٍ رَضِيَ اللَّهُ عَنْهَا", translation: "Xədicə bint Xuvəylid (radiyallahu anha)" },
            { arabic: "مَا فَضْلُهَا؟", translation: "Onun fəziləti nədir?" },
            { arabic: "آَمَنَتْ بِهِ حِينَ كَفَرَ النَّاسُ", translation: "İnsanlar inkar edəndə o iman gətirdi" },
            { arabic: "وَوَاسَتْهُ بِمَالِهَا؟", translation: "Və malı ilə ona dəstək oldu?" },
            { arabic: "نَعَمْ، وَرَزَقَهُ اللَّهُ مِنْهَا الْوَلَدَ", translation: "Bəli, və Allah ona ondan övlad nəsib etdi" },
            { arabic: "مَاذَا أَرْسَلَ اللَّهُ إِلَيْهَا؟", translation: "Allah ona nə göndərdi?" },
            { arabic: "أَرْسَلَ إِلَيْهَا السَّلَامَ مَعَ جِبْرِيلَ", translation: "Cəbrayıl ilə ona salam göndərdi" }
        ]
    },
    {
        id: 262,
        title: "Aişə bint Əbi Bəkr",
        dialogue: [
            { arabic: "مَنْ هِيَ الصِّدِّيقَةُ بِنْتُ الصِّدِّيقِ؟", translation: "Siddiqə bint əs-Siddiq (Siddiqin qızı) kimdir?" },
            { arabic: "عَائِشَةُ رَضِيَ اللَّهُ عَنْهَا", translation: "Aişə (radiyallahu anha)" },
            { arabic: "بِمَاذَا تَمَيَّزَتْ؟", translation: "Nə ilə seçilirdi?" },
            { arabic: "بِالْعِلْمِ وَالْفِقْهِ وَكَثْرَةِ الرِّوَايَةِ", translation: "Elm, fiqh və çoxlu hədis rəvayət etməklə" },
            { arabic: "مَا مَثَلُ فَضْلِهَا عَلَى النِّسَاءِ؟", translation: "Onun qadınlar üzərindəki fəzilətinin misalı nədir?" },
            { arabic: "كَفَضْلِ الثَّرِيدِ عَلَى سَائِرِ الطَّعَامِ", translation: "Sərid xörəyinin digər yeməklərə olan üstünlüyü kimi" },
            { arabic: "أَيْنَ تُوُفِّيَ النَّبِيُّ ﷺ؟", translation: "Peyğəmbər ﷺ harada vəfat etdi?" },
            { arabic: "فِي حَجْرِهَا وَفِي بَيْتِهَا", translation: "Onun qucağında və evində" }
        ]
    },
    {
        id: 263,
        title: "Fatimə az-Zəhra",
        dialogue: [
            { arabic: "مَنْ هِيَ سَيِّدَةُ نِسَاءِ أَهْلِ الْجَنَّةِ؟", translation: "Cənnət qadınlarının seyyidəsi (xanımı) kimdir?" },
            { arabic: "فَاطِمَةُ الزَّهْرَاءُ رَضِيَ اللَّهُ عَنْهَا", translation: "Fatimə az-Zəhra (radiyallahu anha)" },
            { arabic: "مَنْ هُوَ أَبُوهَا؟", translation: "Onun atası kimdir?" },
            { arabic: "رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ", translation: "Allahın Rəsulu (sallallahu əleyhi və səlləm)" },
            { arabic: "وَمَنْ هُوَ زَوْجُهَا؟", translation: "Bəs yoldaşı kimdir?" },
            { arabic: "عَلِيُّ بْنُ أَبِي طَالِبٍ", translation: "Əli ibn Əbi Talibdir" },
            { arabic: "وَمَنْ هُمَا وَلَدَاهَا؟", translation: "Bəs iki oğlu kimlərdir?" },
            { arabic: "الْحَسَنُ وَالْحُسَيْنُ", translation: "Həsən və Hüseyndir" }
        ]
    },
    {
        id: 264,
        title: "Həsən və Hüseyn",
        dialogue: [
            { arabic: "مَنْ هُمَا سَيِّدَا شَبَابِ أَهْلِ الْجَنَّةِ؟", translation: "Cənnət cavanlarının iki seyyidı (ağası) kimdir?" },
            { arabic: "الْحَسَنُ وَالْحُسَيْنُ رَضِيَ اللَّهُ عَنْهُمَا", translation: "Həsən və Hüseyn (radiyallahu anhuma)" },
            { arabic: "مَاذَا قَالَ النَّبِيُّ ﷺ عَنْهُمَا؟", translation: "Peyğəmbər ﷺ onlar haqqında nə buyurub?" },
            { arabic: "هُمَا رَيْحَانَتَايَ مِنَ الدُّنْيَا", translation: "Onlar mənim dünyadakı iki reyhanımdır" },
            { arabic: "مَاذَا فَعَلَ الْحَسَنُ فِي الْأُمَّةِ؟", translation: "Həsən ümmət arasında nə etdi?" },
            { arabic: "أَصْلَحَ اللَّهُ بِهِ بَيْنَ فِئَتَيْنِ عَظِيمَتَيْنِ", translation: "Allah onunla iki böyük dəstə arasında sülh yaratdı" },
            { arabic: "رَضِيَ اللَّهُ عَنْهُمَا وَأَرْضَاهُمَا", translation: "Allah onların ikisindən də razı olsun" },
            { arabic: "آمِينَ يا رَبَّ العَالَمِينَ", translation: "Amin, ey aləmlərin Rəbbi" }
        ]
    },
    {
        id: 265,
        title: "Səhabələrin İxlası",
        dialogue: [
            { arabic: "بِمَاذَا سَبَقَ الصَّحَابَةُ مَنْ بَعْدَهُمْ؟", translation: "Səhabələr özlərindən sonrakıları nə ilə ötdülər?" },
            { arabic: "بِمَا كَانَ فِي قُلُوبِهِمْ مِنَ الإِيمَانِ وَالإِخْلَاصِ", translation: "Qəlblərində olan iman və ixlasla" },
            { arabic: "هَلْ يُسَاوِيهِمْ أَحَدٌ فِي الأَجْرِ؟", translation: "Savabda heç kim onlara bərabər ola bilər?" },
            { arabic: "لَا، لَوْ أَنْفَقَ أَحَدُكُمْ مِثْلَ أُحُدٍ ذَهَبًا", translation: "Xeyr, sizdən biri Uhud dağı qədər qızıl infaq etsə də" },
            { arabic: "مَا بَلَغَ مُدَّ أَحَدِهِمْ وَلا نَصِيفَهُ؟", translation: "Onlardan birinin bir ovucuna və ya yarısına çata bilməz?" },
            { arabic: "نَعَمْ، لا يَبْلُغُ فَضْلَهُمْ أَحَدٌ", translation: "Bəli, heç kim onların fəzilətinə çata bilməz" },
            { arabic: "اللَّهُمَّ ارْضَ عَنْ صَحَابَةِ نَبِيِّكَ", translation: "Allahım, Peyğəmbərinin səhabələrindən razı ol" },
            { arabic: "آمِينَ يا رَبَّ العَالَمِينَ", translation: "Amin, ey aləmlərin Rəbbi" }
        ]
    },
    {
        id: 266,
        title: "Tabiinlərin Yolu",
        dialogue: [
            { arabic: "مَنْ هُمُ التَّابِعُونَ؟", translation: "Tabiinlər kimlərdir?" },
            { arabic: "الَّذِينَ لَقُوا الصَّحَابَةَ مُؤْمِنِينَ وَمَاتُوا عَلَى الإِسْلَامِ", translation: "Səhabələrlə mömin olaraq görüşən və İslam üzrə ölənlərdir" },
            { arabic: "مَا هُوَ الْقَرْنُ الثَّانِي فِي الْفَضْلِ؟", translation: "Fəzilətdə ikinci əsr (nəsil) hansıdır?" },
            { arabic: "قَرْنُ التَّابِعِينَ", translation: "Tabiinlər əsridir" },
            { arabic: "كَيْفَ أَخَذُوا الدِّينَ؟", translation: "Dini necə götürdülər?" },
            { arabic: "أَخَذُوهُ عَنِ الصَّحَابَةِ بِإِتْقَانٍ", translation: "Onu səhabələrdən dəqiqliklə götürdülər" },
            { arabic: "مِثْلُ مَنْ؟", translation: "Kimi?" },
            { arabic: "كَسَعِيدِ بْنِ الْمُسَيَّبِ وَالْحَسَنِ الْبَصْرِيِّ", translation: "Səid ibn əl-Müsəyyəb və Həsən əl-Bəsri kimi" }
        ]
    },
    {
        id: 267,
        title: "Dörd İmam",
        dialogue: [
            { arabic: "مَنْ هُمْ أئِمَّةُ الْمَذَاهِبِ الأَرْبَعَةِ؟", translation: "Dörd məzhəbin imamları kimlərdir?" },
            { arabic: "أَبُو حَنِيفَةَ، وَمَالِكٌ، وَالشَّافِعِيُّ، وَأَحْمَدُ", translation: "Əbu Hənifə, Malik, əş-Şafi və Əhməd" },
            { arabic: "هَلْ كَانُوا عَلَى عَقِيدَةٍ وَاحِدَةٍ؟", translation: "Onlar tək bir əqidə üzərində idilər?" },
            { arabic: "نَعَمْ، عَقِيدَتُهُمْ وَاحِدَةٌ هِيَ عَقِيدَةُ السَّلَفِ", translation: "Bəli, əqidələri tək idi — Sələf əqidəsi" },
            { arabic: "مَاذَا قَالُوا إِذَا صَحَّ الْحَدِيثُ؟", translation: "Hədis səhih olduqda nə deyərdilər?" },
            { arabic: "إِذَا صَحَّ الْحَدِيثُ فَهُوَ مَذْهَبِي", translation: "Hədis səhihdir də mənim məzhəbim odur" },
            { arabic: "هَلْ نُقَلِّدُهُمْ فِي الْخَطَأِ؟", translation: "Xətada onlara kor-koranə tabe oluruq?" },
            { arabic: "لَا، نَتَّبِعُ الدَّلِيلَ المَعَ صَالِحِ قَوْلِهِمْ", translation: "Xeyr, dəlilə və onların doğru sözlərinə tabe oluruq" }
        ]
    },
    {
        id: 268,
        title: "İmam Əbu Hənifə",
        dialogue: [
            { arabic: "مَنْ هُوَ الإِمَامُ أَبُو حَنِيفَةَ؟", translation: "İmam Əbu Hənifə kimdir?" },
            { arabic: "النُّعْمَانُ بْنُ ثَابِتٍ إِمَامُ أَهْلِ الرَّأْيِ وَالْفِقْهِ", translation: "Numan ibn Sabit, rəy və fiqh imamıdır" },
            { arabic: "أَيْنَ كَانَ يَعِيشُ؟", translation: "Harada yaşayırdı?" },
            { arabic: "فِي الْكُوفَةِ بِالْعِرَاقِ", translation: "İraqın Kufə şəhərində" },
            { arabic: "مَاذَا قَالَ عَنِ اتِّبَاعِ الدَّلِيلِ؟", translation: "Dəlilə tabe olmaq haqqında nə deyib?" },
            { arabic: "لا يَحِلُّ لِأَحَدٍ أَنْ يَأْخُذَ بِقَوْلِنَا حَتَّى يَعْلَمَ مِنْ أَيْنَ أَخَذْنَاهُ", translation: "Haradan götürdüyümüzü bilmədən sözümüzü götürmək heç kimə halal olmaz" },
            { arabic: "رحِمَهُ اللَّهُ رَحْمَةً وَاسِعَةً", translation: "Allah ona geniş rəhmət etsin" },
            { arabic: "آمِينَ يا رَبَّ العَالَمِينَ", translation: "Amin, ey aləmlərin Rəbbi" }
        ]
    },
    {
        id: 269,
        title: "İmam Malik",
        dialogue: [
            { arabic: "مَنْ هُوَ إِمَامُ دَارِ الْهِجْرَةِ؟", translation: "Hicrət diyarının (Mədinənin) imamı kimdir?" },
            { arabic: "الإِمَامُ مَالِكُ بْنُ أَنَسٍ", translation: "İmam Malik ibn Ənəsdir" },
            { arabic: "مَا هُوَ كِتَابُهُ الْمَشْهُورُ؟", translation: "Onun məşhur kitabı hansıdır?" },
            { arabic: "كِتَابُ الْمُوَطَّأِ", translation: "əl-Muvatta kitabıdır" },
            { arabic: "مَاذَا قَالَ عِنْدَ قَبْرِ النَّبِيِّ ﷺ؟", translation: "Peyğəmbərin ﷺ qəbri yanında nə deyib?" },
            { arabic: "كُلُّ كَلَامٍ يُؤْخَذُ مِنْهُ وَيُرَدُّ إِلا صَاحِبَ هَذَا الْقَبْرِ", translation: "Bu qəbir sahibindən başqa hər kəsin sözü götürülə də bilər, rədd edilə də" },
            { arabic: "رَحِمَهُ اللَّهُ تَعَالَى", translation: "Uca Allah ona rəhm etsin" },
            { arabic: "آمِينَ يا رَبَّ العَالَمِينَ", translation: "Amin, ey aləmlərin Rəbbi" }
        ]
    },
    {
        id: 270,
        title: "İmam əs-Şafi",
        dialogue: [
            { arabic: "مَنْ هُوَ نَاصِرُ السُّنَّةِ مِنَ الأئِمَّةِ؟", translation: "İmamlardan Sünnənin köməkçisi kimdir?" },
            { arabic: "الإِمَامُ مُحَمَّدُ بْنُ إِدْرِيسَ الشَّافِعِيُّ", translation: "İmam Məhəmməd ibn İdris əş-Şafidir" },
            { arabic: "مَا هُوَ أَوَّلُ كِتَابٍ فِي أُصُولِ الْفِقْهِ؟", translation: "Usulul-fiqhdə ilk kitab hansıdır?" },
            { arabic: "كِتَابُ الرِّسَالَةِ لِلشَّافِعِيِّ", translation: "Şafinin 'ər-Risalə' kitabıdır" },
            { arabic: "مَاذَا قَالَ فِي السُّنَّةِ؟", translation: "Sünnə haqqında nə deyib?" },
            { arabic: "إِذَا وَجَدْتُمْ فِي كِتَابِي خِلَافَ سُنَّةِ رَسُولِ اللَّهِ فَقُولُوا بِالسُّنَّةِ", translation: "Kitabımda Allah Rəsulunun Sünnəsinə zidd bir şey tapsanız, Sünnəni götürün" },
            { arabic: "وَدَعُوا قَوْلِي؟", translation: "Və mənim sözümü buraxın?" },
            { arabic: "نَعَمْ، وَاضْرِبُوا بِقَوْلِي الحَائِطَ", translation: "Bəli, 'Mənim sözümü divara çırpın'" }
        ]
    },
    {
        id: 271,
        title: "İmam Əhməd ibn Hənbəl",
        dialogue: [
            { arabic: "مَنْ هُوَ إِمَامُ أَهْلِ السُّنَّةِ؟", translation: "Əhli-Sünnənin imamı kimdir?" },
            { arabic: "الإِمَامُ أَحْمَدُ بْنُ حَنْبَلٍ", translation: "İmam Əhməd ibn Hənbəldir" },
            { arabic: "بِمَاذَا ابْتُلِيَ فِي فِتْنَةِ خَلْقِ الْقُرْآنِ؟", translation: "Quranın yaradılması fitnəsində nə ilə imtahan olundu?" },
            { arabic: "بِالسِّجْنِ وَالضَّرْبِ فَصَبَرَ عَلَى الْحَقِّ", translation: "Həbs və işgəncə ilə, lakin haqq üzərində səbr etdi" },
            { arabic: "مَا هُوَ كِتَابُهُ فِي الْحَدِيثِ؟", translation: "Hədisdə kitabı hansıdır?" },
            { arabic: "مُسْنَدُ الإِمَامِ أَحْمَدَ", translation: "İmam Əhmədin 'Musnəd' kitabıdır" },
            { arabic: "رَحِمَهُ اللَّهُ وَجَزَاهُ عَنِ الإِسْلَامِ خَيْرًا", translation: "Allah ona rəhm etsin və İslam adından xeyirlə mükafatlandırsın" },
            { arabic: "آمِينَ يا رَبَّ العَالَمِينَ", translation: "Amin, ey aləmlərin Rəbbi" }
        ]
    },
    {
        id: 272,
        title: "Hədis Elminin Əhəmiyyəti",
        dialogue: [
            { arabic: "مَا هُوَ عِلْمُ الْحَدِيثِ؟", translation: "Hədis elmi nədir?" },
            { arabic: "عِلْمٌ يُعْرَفُ بِهِ أَقْوَالُ النَّبِيِّ ﷺ وَأَفْعَالُهُ وَأَحْوَالُهُ", translation: "Peyğəmbərin ﷺ sözləri, əməlləri və halları bilinən elmdir" },
            { arabic: "مَا هُوَ الْحَدِيثُ الصَّحِيحُ؟", translation: "Səhih hədis nədir?" },
            { arabic: "مَا اتَّصَلَ سَنَدُهُ بِنَقْلِ الْعَدْلِ الضَّابِطِ", translation: "Sənədi ədalətli və dəqiq ravətçinin nəqli ilə bitəşən hədisdir" },
            { arabic: "مِنْ غَيْرِ شُذُوذٍ وَلا عِلَّةٍ؟", translation: "Şazlıq və illət (qüsur) olmadan?" },
            { arabic: "نَعَمْ، مِنْ غَيْرِ شُذُوذٍ وَلا عِلَّةٍ", translation: "Bəli, şazlıq və qüsur olmadan" },
            { arabic: "هَلْ يُعْتَمَدُ عَلَيْهِ فِي الأَحْكَامِ؟", translation: "Hökmlərdə ona əsaslanılır?" },
            { arabic: "نَعَمْ، هُوَ حُجَّةٌ فِي الدِّينِ", translation: "Bəli, o dində hüccətdir (dəlildir)" }
        ]
    },
    {
        id: 273,
        title: "Səhih Buxari və Müslüm",
        dialogue: [
            { arabic: "مَا هُمَا أَصَحُّ الْكُتُبِ بَعْدَ القُرْآنِ؟", translation: "Qurandan sonra ən səhih iki kitab hansıdır?" },
            { arabic: "صَحِيحُ الْبُخَارِيِّ وَصَحِيحُ مُسْلِمٍ", translation: "Səhih əl-Buxari və Səhih Müslüm" },
            { arabic: "مَاذَا يُسَمَّى مَا اتَّفَقَا عَلَيْهِ؟", translation: "İkisinin razılaşdığı (rəvayət etdiyi) hədis necə adlanır?" },
            { arabic: "مُتَّفَقٌ عَلَيْهِ", translation: "'Muttəfəqun əleyh' (Üzərində ittifaq edilmiş)" },
            { arabic: "هَلْ لَهُمَا المَرْتَبَةُ العُلْيَا فِي الصِّحَّةِ؟", translation: "Səhihlikdə ən uca dərəcə onlarındır?" },
            { arabic: "نَعَمْ، هُمَا فِي أَعْلَى مَرَاتِبِ الصِّحَّةِ", translation: "Bəli, onlar səhihliyin ən uca mərtəbəsindədirlər" },
            { arabic: "جَزَى اللَّهُ الْمُحَدِّثِينَ خَيْرًا", translation: "Allah hədis alimlərini xeyirlə mükafatlandırsın" },
            { arabic: "آمِينَ يا رَبَّ العَالَمِينَ", translation: "Amin, ey aləmlərin Rəbbi" }
        ]
    },
    {
        id: 274,
        title: "Sünnətə Sarılmaq",
        dialogue: [
            { arabic: "مَاذَا قَالَ النَّبِيُّ ﷺ فِي السُّنَّةِ؟", translation: "Peyğəmbər ﷺ Sünnə haqqında nə buyurub?" },
            { arabic: "عَلَيْكُمْ بِسُنَّتِي وَسُنَّةِ الْخُلَفَاءِ الرَّاشِدِينَ", translation: "Mənim Sünnəmdən və Xuləfayi-Raşidinin Sünnəsindən yapışın" },
            { arabic: "كَيْفَ نَتَمَسَّكُ بِهَا؟", translation: "Ondan necə bərk yapışırıq?" },
            { arabic: "عَضُّوا عَلَيْهَا بِالنَّوَاجِذِ", translation: "Ondan azı dişlərinizlə yapışın" },
            { arabic: "وَمَاذَا حَذَّرَنَا مِنْهُ؟", translation: "Və bizi nədən çəkindirdi?" },
            { arabic: "وإِيَّاكُمْ وَمُحْدَثَاتِ الأُمُورِ", translation: "Sonradan uydurulan işlərdən çəkinin" },
            { arabic: "فَإِنَّ كُلَّ مُحْدَثَةٍ بِدْعَةٌ؟", translation: "Çünki hər bir sonradan uydurulan şey bidətdir?" },
            { arabic: "نَعَمْ، وَكُلُّ بِدْعَةٍ ضَلَالَةٌ", translation: "Bəli, 'Və hər bir bidət zəlalətdir'" }
        ]
    },
    {
        id: 275,
        title: "Firqələrdən Çəkinmək",
        dialogue: [
            { arabic: "إِلَى كَمْ فِرْقَةٍ سَتَفْتَرِقُ الأُمَّةُ؟", translation: "Ümmət neçə firqəyə bölünəcək?" },
            { arabic: "سَتَفْتَرِقُ عَلَى ثَلَاثٍ وَسَبْعِينَ فِرْقَةً", translation: "Yetmiş üç firqəyə bölünəcək" },
            { arabic: "كَمْ فِرْقَةً فِي الْجَنَّةِ؟", translation: "Neçəsi Cənnətdədir?" },
            { arabic: "كُلُّهَا فِي النَّارِ إِلا وَاحِدَةً", translation: "Biri müstəsna, hamısı Cəhənnəmdədir" },
            { arabic: "مَنْ هِيَ التِّلْكَ الْوَاحِدَةُ؟", translation: "O tək olan firqə kimdir?" },
            { arabic: "مَا أَنَا عَلَيْهِ الْيَوْمَ وَأَصْحَابِي", translation: "Mənim və səhabələrimin bu gün olduğu yol üzərində olanlar" },
            { arabic: "وَهِيَ الْجَمَاعَةُ؟", translation: "Və o Camaatdır?" },
            { arabic: "نَعَمْ، هِيَ الْجَمَاعَةُ وَأَهْلُ السُّنَّةِ", translation: "Bəli, o Camaat və Əhli-Sünnədir" }
        ]
    },
    {
        id: 276,
        title: "Haqq Yolunda Sabitlik",
        dialogue: [
            { arabic: "كَيْفَ نَثْبُتُ عَلَى الْحَقِّ؟", translation: "Haqq üzərində necə sabit qalırıq?" },
            { arabic: "بِالْعِلْمِ النَّافِعِ وَالْعَمَلِ الصَّالِحِ وَالدُّعَاءِ", translation: "Faydalı elm, saleh əməl və dua ilə" },
            { arabic: "هَلْ الْغُرْبَةُ لِأَهْلِ السُّنَّةِ؟", translation: "Sünnə əhlinə qəriblik (tənhalıq) varmı?" },
            { arabic: "نَعَمْ، بَدَأَ الإِسْلَامُ غَرِيبًا وَسَيَعُودُ غَرِيبًا", translation: "Bəli, 'İslam qərib başladı və qərib olaraq da qayıdacaq'" },
            { arabic: "فَطُوبَى لِمَنْ؟", translation: "Müjdə (Tuba) kimlərə olsun?" },
            { arabic: "فَطُوبَى لِلْغُرَبَاءِ", translation: "Müjdə olsun o qəriblərə" },
            { arabic: "مَنْ هُمُ الْغُرَبَاءُ؟", translation: "Qəriblər kimlərdir?" },
            { arabic: "الَّذِينَ يُصْلِحُونَ مَا أَفْسَدَ النَّاسُ مِنْ سُنَّتِي", translation: "İnsanların Sünnəmdən korladıqlarını islah edənlərdir" }
        ]
    },
    {
        id: 277,
        title: "Şərtsiz İtaət",
        dialogue: [
            { arabic: "كَيْفَ يُقَابِلُ الْمُؤْمِنُ أَمْرَ اللَّهِ؟", translation: "Mömin Allahın əmrini necə qarşılayar?" },
            { arabic: "بِالسَّمْعِ وَالطَّاعَةِ دُونَ تَرَدُّدٍ", translation: "Tərəddüdsüz eşidib itaət etməklə" },
            { arabic: "مَاذَا يَقُولُ الْمُؤْمِنُونَ؟", translation: "Möminlər nə deyərlər?" },
            { arabic: "سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا", translation: "Eşitdik və itaət etdik, Rəbbimiz, bağışlanmanı diləyirik" },
            { arabic: "هَلْ يَجُوزُ إِعْمَالُ الرَّأْيِ أَمَامَ النَّصِّ؟", translation: "Nəss (ayə/hədis) qarşısında rəy yürütmək caizdir?" },
            { arabic: "لَا، لا اجْتِهَادَ مَعَ النَّصِّ", translation: "Xeyr, nəss olan yerdə ictihad (şəxsi rəy) olmaz" },
            { arabic: "وَمَا كَانَ لِمُؤْمِنٍ وَلا مُؤْمِنَةٍ إِذَا قَضَى اللَّهُ أَمْرًا؟", translation: "Allah bir işə hökm verdikdə mömin kişiyə və qadına yaraşar?" },
            { arabic: "أَنْ يَكُونَ لَهُمُ الْخِيَرَةُ مِنْ أَمْرِهِمْ", translation: "Öz işlərində seçimlərinin olması yaraşmaz" }
        ]
    },
    {
        id: 278,
        title: "Ağlın Vəhyə Tabe Olması",
        dialogue: [
            { arabic: "مَا مَكَانَةُ الْعَقْلِ فِي الإِسْلَامِ؟", translation: "İslamda ağlın yeri nədir?" },
            { arabic: "الْعَقْلُ أَدَاةٌ لِفَهْمِ الْوَحْيِ لا لِلْحُكْمِ عَلَيْهِ", translation: "Ağıl vəhyi anlamaq üçün bir vasitədir, vəhyə hökm etmək üçün yox" },
            { arabic: "فَإِذَا تَعَارَضَ العَقْلُ مَعَ النَّقْلِ الصَّحِيحِ؟", translation: "Ağıl səhih nəss ilə ziddiyyət təşkil edərsə?" },
            { arabic: "نُقَدِّمُ النَّقْلَ وَنَتَّهِمُ الْعَقْلَ", translation: "Nəssi üstün tutur və ağlı təqsirləndiririk" },
            { arabic: "مَاذَا قَالَ عَلِيٌّ رَضِيَ اللَّهُ عَنْهُ فِي الْمَسْحِ؟", translation: "Əli (radiyallahu anh) məsh haqqında nə demişdir?" },
            { arabic: "لَوْ كَانَ الدِّينُ بِالرَّأْيِ لَكَانَ أَسْفَلُ الْخُفِّ أَوْلَى بِالْمَسْحِ مِنْ أَعْلَاهُ", translation: "Əgər din rəylə olsaydı, xəffin altı üstündən məsh olunmağa daha layiq olardı" },
            { arabic: "وَلَكِنَّهُ رَأَى النَّبِيَّ ﷺ يَمْسَحُ عَلَى ظَاهِرِهِ؟", translation: "Lakin O, Peyğəmbərin ﷺ xəffin üstünə məsh etdiyini gördü?" },
            { arabic: "نَعَمْ، اتِّبَاعًا لِلسُّنَّةِ", translation: "Bəli, Sünnəyə tabe olaraq" }
        ]
    },
    {
        id: 279,
        title: "Fasiqlərin Xəbəri",
        dialogue: [
            { arabic: "مَاذَا نَفْعَلُ إِذَا جَاءَنَا فَاسِقٌ بِنَبَإٍ؟", translation: "Bir fasiq bizə bir xəbər gətirdikdə nə edirik?" },
            { arabic: "نَتَبَيَّنُ وَنَتَأَكَّدُ قَبْلَ الْحُكْمِ", translation: "Hökm verməzdən əvvəl araşdırır və dəqiqləşdiririk" },
            { arabic: "مَا الدَّلِيلُ فِي سُورَةِ الْحُجُرَاتِ؟", translation: "Hucurat surəsindən dəlil nədir?" },
            { arabic: "إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا", translation: "Əgər bir fasiq sizə xəbər gətirərsə, onu dəqiqləşdirin" },
            { arabic: "لِئَلَّا تُصِيبُوا قَوْمًا بَجَهَالَةٍ؟", translation: "Bilmədən bir qövmə zərər vurmayasınız diye?" },
            { arabic: "نَعَمْ، فَتُصْبِحُوا عَلَى مَا فَعَلْتُمْ نَادِمِينَ", translation: "Bəli, 'Yoxsa etdiyinizə peşman olarsınız'" },
            { arabic: "هَلْ نَنْشُرُ كُلَّ مَا نَسْمَعُ؟", translation: "Eşitdiyimiz hər şeyi yayırıq?" },
            { arabic: "لَا، كَفَى بِالْمَرْءِ كَذِبًا أَنْ يُحَدِّثَ بِكُلِّ مَا سَمِعَ", translation: "Xeyr, 'İnsana yalançı kimi eşitdiyi hər şeyi danışması kifayətdir'" }
        ]
    },
    {
        id: 280,
        title: "Fitnə Zamanı Dilə Yiyə Durmaq",
        dialogue: [
            { arabic: "مَا هُوَ الْوَاجِبُ عِنْدَ انْتِشَارِ الشَّائِعَاتِ؟", translation: "Şayiələr yayılanda borcumuz nədir?" },
            { arabic: "الصَّمْتُ وَعَدَمُ النَّشْرِ", translation: "Sakit durmaq və yaymamaq" },
            { arabic: "مَاذَا قَالَ النَّبِيُّ ﷺ فِي الْفِتْنَةِ؟", translation: "Peyğəmbər ﷺ fitnə haqqında nə buyurub?" },
            { arabic: "الْقَاعِدُ فِيهَا خَيْرٌ مِنَ الْقَائِمِ", translation: "Onda oturan ayaqda durandan daha xeyirlidir" },
            { arabic: "وَالْقَائِمُ خَيْرٌ مِنَ الْمَاشِي؟", translation: "Ayaqda duran gəzəndən xeyirlidir?" },
            { arabic: "نَعَمْ، فَمَنْ وَجَدَ مَلْجَأً فَلْيَعُذْ بِهِ", translation: "Bəli, 'Kim sığınacaq taparsa ora sığınsın'" },
            { arabic: "وَكَيْفَ نَحْفَظُ السَّنَتَنَا؟", translation: "Dilimizi necə qoruyaq?" },
            { arabic: "بِتَرْكِ الْخَوْضِ فِيمَا لا يَعْنِينَا", translation: "Bizi maraqlandırmayan işlərə qarışmamaqla" }
        ]
    },
    {
        id: 281,
        title: "Səfər Ədəbləri",
        dialogue: [
            { arabic: "مَاذَا نَقُولُ عِنْدَ رُكُوبِ الدَّابَّةِ أَوْ السَّيَّارَةِ؟", translation: "Miniyə və ya maşına minəndə nə deyirik?" },
            { arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ", translation: "Bunu bizə ram edən Allah pak və müqəddəsdir, biz buna qadir deyildik" },
            { arabic: "وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ؟", translation: "Və biz şübhəsiz Rəbbimizə qayıdacağıq?" },
            { arabic: "نَعَمْ، هَذَا هُوَ دُعَاءُ الرُّكُوبِ", translation: "Bəli, minik duası budur" },
            { arabic: "مَاذَا نَدْعُو لِلْمُقِيمِ؟", translation: "Evdə qalana nə dua edirik?" },
            { arabic: "أَسْتَوْدِعُكُمُ اللَّهَ الَّذِي لا تَضِيعُ وَدَائِعُهُ", translation: "Sizi əmanətləri zay olmayan Allaha tapşırıram" },
            { arabic: "وَبِمَاذَا يُجِيبُ الْمُقِيمُ؟", translation: "Evdə qalan nə cavab verir?" },
            { arabic: "أَسْتَوْدِعُ اللَّهَ دِينَكَ وَأَمَانَتَكَ وَخَوَاتِيمَ عَمَلِكَ", translation: "Dininizi, əmanətinizi və əməlinizin sonunu Allaha tapşırıram" }
        ]
    },
    {
        id: 282,
        title: "Səfər Namazı (Qəsri və Cəm)",
        dialogue: [
            { arabic: "كَيْفَ نُصَلِّي فِي السَّفَرِ؟", translation: "Səfərdə namazı necə qılırıq?" },
            { arabic: "نَقْصُرُ الصَّلَاةَ الرُّبَاعِيَّةَ إِلَى رَكْعَتَيْنِ", translation: "Dörd rükətli namazları iki rükətə qısaldırıq" },
            { arabic: "هَلْ يَجُوزُ الْجَمْعُ بَيْنَ الصَّلَاتَيْنِ؟", translation: "İki namazı cəm etmək (birləşdirmək) olarmı?" },
            { arabic: "نَعَمْ، نَجْمَعُ بَيْنَ الظُّهْرِ وَالْعَصْرِ، وَالْمَغْرِبِ وَالْعِشَاءِ", translation: "Bəli, Zöhrlə Əsri, Məğriblə İşanı birləşdiririk" },
            { arabic: "هَلْ الْقَصْرُ سُنَّةٌ أَمْ رُخْصَةٌ؟", translation: "Qısaltmaq sünnədir, yoxsa icazə?" },
            { arabic: "صَدَقَةٌ تَصَدَّقَ اللَّهُ بِهَا عَلَيْكُمْ فَاقْبَلُوا صَدَقَتَهُ", translation: "Allahın sizə verdiyi sədəqədir, Onun sədəqəsini qəbul edin" },
            { arabic: "مَا هِيَ مَسَافَةُ السَّفَرِ؟", translation: "Səfər məsafəsi nə qədərdir?" },
            { arabic: "مَا عُدَّ سَفَرًا فِي الْعُرْفِ (نَحْوُ 80 كَم)", translation: "Örfə görə səfər sayılan məsafə (təxminən 80 km)" }
        ]
    },
    {
        id: 283,
        title: "Xəstə Ziyarəti",
        dialogue: [
            { arabic: "مَا حُكْمُ عِيَادَةِ الْمَرِيضِ؟", translation: "Xəstəyə baş çəkməyin hökmü nədir?" },
            { arabic: "سُنَّةٌ مُؤَكَّدَةٌ وَحَقٌّ لِلْمُسْلِمِ", translation: "Təkid olunmuş sünnə və Müsəlmanın haqqıdır" },
            { arabic: "مَاذَا نَقُولُ لِلْمَرِيضِ؟", translation: "Xəstəyə nə deyirik?" },
            { arabic: "لا بَأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ", translation: "Eybi yok, inşallah günahlardan təmizlənmədir" },
            { arabic: "وَمَاذَا نَدْعُو لَهُ سَبْعَ مَرَّاتٍ؟", translation: "Yeddi dəfə ona nə dua edirik?" },
            { arabic: "أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ", translation: "Böyük ərşin Rəbbi olan Böyük Allahdan sənə şəfa verməsini istəyirəm" },
            { arabic: "مَا أِجْرُ زَائِرِ الْمَرِيضِ؟", translation: "Xəstəyə baş çəkənin mükafatı nədir?" },
            { arabic: "يُصَلِّي عَلَيْهِ سَبْعُونَ أَلْفَ مَلَكٍ", translation: "Yetmiş min mələk onun üçün dua edər" }
        ]
    },
    {
        id: 284,
        title: "Xəstənin Namazı",
        dialogue: [
            { arabic: "كَيْفَ يُصَلِّي الْمَرِيضُ إِذَا عَجَزَ عَنِ الْقِيَامِ؟", translation: "Xəstə ayaqda dura bilməsə necə namaz qılar?" },
            { arabic: "يُصَلِّي قَاعِدًا", translation: "Oturaraq qılar" },
            { arabic: "فَإِنْ لَمْ يَسْتَطِعْ قَاعِدًا؟", translation: "Bəs oturaraq da bacarmasa?" },
            { arabic: "فَعَلَى جَنْبٍ", translation: "Böyürü üstə uzanaraq" },
            { arabic: "فَإِنْ لَمْ يَسْتَطِعْ؟", translation: "Bəs bunu da bacarmasa?" },
            { arabic: "يُومِئُ إِيمَاءً بِرَأْسِهِ", translation: "Başı ilə işarə edər" },
            { arabic: "هَلْ تَسْقُطُ الصَّلَاةُ مَا دَامَ الْعَقْلُ حَاضِرًا؟", translation: "Ağıl başında olduğu müddətdə namaz ləğv olunar?" },
            { arabic: "لَا، لا تَسْقُطُ أَبَدًا", translation: "Xeyr, heç vaxt ləğv olunmaz" }
        ]
    },
    {
        id: 285,
        title: "Şəriətə Uyğun Ruqiyyə",
        dialogue: [
            { arabic: "مَا هِيَ الرُّقْيَةُ الشَّرْعِيَّةُ؟", translation: "Şəriətə uyğun ruqiyyə nədir?" },
            { arabic: "الْقِرَاءَةُ مِنَ الْقُرْآنِ وَالأَدْعِيَةِ النَّبَوِيَّةِ لِلشِّفَاءِ", translation: "Şəfa üçün Qurandan və Peyğəmbər dualarından oxumaqdır" },
            { arabic: "مَا هي شُرُوطُهَا؟", translation: "Onun şərtləri hansılardır?" },
            { arabic: "أَنْ تَكُونَ بِكَلامِ اللَّهِ وَبِاللُّغَةِ الْعَرَبِيَّةِ وَالاعْتِقَادِ أَنَّ الشِّفَاءَ مِنَ اللَّهِ", translation: "Allahın kəlamı ilə, ərəb dilində və şəfanın Allahdan olduğuna inanmaqla" },
            { arabic: "مَا هِيَ أَعْظَمُ سُورَةٍ لِلرُّقْيَةِ؟", translation: "Ruqiyyə üçün ən böyük surə hansıdır?" },
            { arabic: "سُورَةُ الْفَاتِحَةِ وَالمُعَوِّذَتَانِ", translation: "Fatihə surəsi və Fələq, Nas surələri" },
            { arabic: "هَلْ يَجُوزُ اسْتِعْمَالُ التَّمَائِمِ (الْخَرَسَاتِ)؟", translation: "Gözmuncuğu və ya göz həmayilləri taxmaq olarmı?" },
            { arabic: "لَا، التَّمَائِمُ شِرْكٌ", translation: "Xeyr, həmayil taxmaq şirkdir" }
        ]
    },
    {
        id: 286,
        title: "Nəzər və Gözdəymə",
        dialogue: [
            { arabic: "هَلِ الْعَيْنُ حَقٌّ؟", translation: "Gözdəymə (nəzər) həqiqətdir?" },
            { arabic: "نَعَمْ، الْعَيْنُ حَقٌّ وَلَوْ كَانَ شَيْءٌ سَابَقَ الْقَدَرَ لَسَبَقَتْهُ الْعَيْنُ", translation: "Bəli, 'Nəzər həqiqətdir, əgər qədəri öcəcək bir şey olsaydı o göz olardı'" },
            { arabic: "كَيْفَ نَحْمِي أَنْفُسَنَا مِنَ الْعَيْنِ؟", translation: "Özümüzü göz dəyməkdən necə qoruyaq?" },
            { arabic: "بِالأَذْكَارِ وَالتَّبْرِيكِ عِنْدَ الإِعْجَابِ", translation: "Zikrlərlə və bir şey xoşumuza gəldikdə bərəkət duası etməklə" },
            { arabic: "مَاذَا نَقُولُ إِذَا رَأَيْنَا مَا يُعْجِبُنَا؟", translation: "Xoşumuza gələn şey gördükdə nə deyirik?" },
            { arabic: "مَا شَاءَ اللَّهُ لا قُوَّةَ إِلا بِاللَّهِ، اللَّهُمَّ بَارِكْ فِيهِ", translation: "Maşallah la quvvətə illa billah, Allahım buna bərəkət ver" },
            { arabic: "كَيْفَ يُعَالَجُ الْمَعْيُونُ؟", translation: "Göz dəymiş şəxs necə müalicə olunur?" },
            { arabic: "بِالرُّقْيَةِ أَوْ بِغُسْلِ العَائِنِ", translation: "Ruqiyyə ilə və ya gözü dəyən şəxsin dəstəmaz suyu ilə" }
        ]
    },
    {
        id: 287,
        title: "Şəfa Allahdandır",
        dialogue: [
            { arabic: "مَنْ هُوَ الشَّافِي؟", translation: "Şəfa verən kimdir?" },
            { arabic: "اللَّهُ وَحْدَهُ لا شَرِيكَ لَهُ", translation: "Şəriksiz tək olan Allahdır" },
            { arabic: "مَاذَا قَالَ إِبْرَاهِيمُ عَلَيْهِ السَّلَامُ؟", translation: "İbrahim əleyhissalam nə demişdir?" },
            { arabic: "وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ", translation: "Xəstələndiyim zaman mənə şəfa verən Odur" },
            { arabic: "هَلْ الدَّوَاءُ سَبَبٌ؟", translation: "Dərman bir səbəbdir?" },
            { arabic: "نَعَمْ، الدَّوَاءُ سَبَبٌ وَالشَّافِي هُوَ اللَّهُ", translation: "Bəli, dərman səbəbdir, şəfagənc isə Allahdır" },
            { arabic: "هَلْ نَتَدَاوَى بِالْحَرَامِ؟", translation: "Haramla müalicə olunuruq?" },
            { arabic: "لَا، إنَّ اللَّهَ لَمْ يَجْعَلْ شِفَاءَكُمْ فِيمَا حَرَّمَ عَلَيْكُمْ", translation: "Xeyr, 'Şübhəsiz ki, Allah şəfanızı sizə haram etdiyi şeylərdə qoymamışdır'" }
        ]
    },
    {
        id: 288,
        title: "Təbabəti-Nəbəvi (Peyğəmbər Təbabəti)",
        dialogue: [
            { arabic: "مَا هِيَ الحَبَّةُ السَّوْدَاءُ؟", translation: "Qara çörəkotu nədir?" },
            { arabic: "شِفَاءٌ مِنْ كُلِّ دَاءٍ إِلا السَّامَ", translation: "Ölümdən başqa hər bir dərdin dərmanıdır" },
            { arabic: "وَمَا هُوَ السَّامُ؟", translation: "Bəs 'Səm' nədir?" },
            { arabic: "الْمَوْتُ", translation: "Ölümdür" },
            { arabic: "وَمَاذَا عَنِ الْحِجَامَةِ؟", translation: "Bəs həcəmət (qan aldırmaq) haqqında?" },
            { arabic: "إِنَّ أَمْثَلَ مَا تَدَاوَيْتُمْ بِهِ الْحِجَامَةُ", translation: "Müalicə olunduğunuz şeylərin ən xeyirlisi həcəmətdir" },
            { arabic: "وَمَاذَا عَنْ عَسَلِ النَّحْلِ؟", translation: "Bəs arı balı haqqında?" },
            { arabic: "فِيهِ شِفَاءٌ لِلنَّاسِ", translation: "Onda insanlar üçün şəfa var" }
        ]
    },
    {
        id: 289,
        title: "Oturub-Durmaq Ədəbi",
        dialogue: [
            { arabic: "كَيْفَ نَجْلِسُ فِي الْمَجَالِسِ؟", translation: "Məclislərdə necə otururuq?" },
            { arabic: "بِتَوَاضُعٍ وَأَدَبٍ وَتَوْسِعَةٍ لِلآخَرِينَ", translation: "Təvazökarlıqla, ədəblə və başqalarına yer verməklə" },
            { arabic: "هَلْ يُقِيمُ الرَّجُلُ أَخَاهُ مِنْ مَجْلِسِهِ؟", translation: "Adam öz qardaşını yerindən qaldıra bilər?" },
            { arabic: "لَا، لا يُقِيمُ الرَّجُلُ الرَّجُلَ مِنْ مَجْلِسِهِ ثُمَّ يَجْلِسُ فِيهِ", translation: "Xeyr, adam başqasını yerindən qaldırıb özü orada oturmaz" },
            { arabic: "وَلَكِنْ مَاذَا يَفْعَلُونَ؟", translation: "Lakin nə etməlidirlər?" },
            { arabic: "تَفَسَّحُوا فِي الْمَجَالِسِ يَفْسَحِ اللَّهُ لَكُمْ", translation: "Məclislərdə yer açın ki, Allah da sizə genişlik versin" },
            { arabic: "أَيْنَ نَجْلِسُ إِذَا دَخَلْنَا المَجْلِسَ؟", translation: "Məclisə girdikdə harada otururuq?" },
            { arabic: "حَيْثُ يَنْتَهِي بِنَا الْمَجْلِسُ", translation: "Məclisin qurtardığı boş yerdə" }
        ]
    },
    {
        id: 290,
        title: "Məclis Ədəbləri",
        dialogue: [
            { arabic: "هَلْ يَجُوزُ التَّنَاجِي بَيْنَ اثْنَيْنِ دُونَ الثَّالِثِ؟", translation: "Üçüncü şəxs ola-ola iki nəfərin pıçıldaşması caizdir?" },
            { arabic: "لَا، لا يَتَنَاجَى اثْنَانِ دُونَ الآخَرِ", translation: "Xeyr, iki nəfər digərini qoyub pıçıldaşmaz" },
            { arabic: "لِمَاذَا؟", translation: "Nə üçün?" },
            { arabic: "لِأَنَّ ذَلِكَ يُحْزِنُهُ", translation: "Çünki bu onu məyus edər" },
            { arabic: "هَلْ نَفْشِي أَسْرَارَ الْمَجَالِسِ؟", translation: "Məclislərin sirrini yayırıq?" },
            { arabic: "لَا، الْمَجَالِسُ بِالأَمَانَةِ", translation: "Xeyr, məclislər əmanətdir" },
            { arabic: "جَزَاكَ اللَّهُ خَيْرًا", translation: "Allah sene xeyir versin" },
            { arabic: "وَإِيَّاكَ يا أَخِي", translation: "Sənə də, qardaşım" }
        ]
    },
    {
        id: 291,
        title: "Məclisin Kəffarəsi",
        dialogue: [
            { arabic: "مَاذَا نَقُولُ عِنْدَ الْقِيَامِ مِنَ الْمَجْلِسِ؟", translation: "Məclisdən qalxarkən nə deyirik?" },
            { arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ", translation: "Allahım, Sən pak və müqəddəssən, Sənə həmd olsun" },
            { arabic: "أَشْهَدُ أَنْ لا إِلَهَ إِلا أَنْتَ؟", translation: "Şəhadət verirəm ki, Səndən başqa məbud yoxdur?" },
            { arabic: "أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ", translation: "Səndən bağışlanma diləyir və Sənə tövbə edirəm" },
            { arabic: "مَا فَائِدَةُ هَذَا الدُّعَاءِ؟", translation: "Bu duanın faydası nədir?" },
            { arabic: "كُفِرَ لَهُ مَا كَانَ فِي مَجْلِسِهِ ذَلِكَ", translation: "O məclisdə olan xətaları bağışlanar" },
            { arabic: "هَلْ يُسَمَّى كَفَّارَةَ الْمَجْلِسِ؟", translation: "Buna məclisin kəffarəsi deyilir?" },
            { arabic: "نَعَمْ، هُوَ كَفَّارَةُ الْمَجْلِسِ", translation: "Bəli, o məclisin kəffarəsidir" }
        ]
    },
    {
        id: 292,
        title: "Musiqi və Qina Haramlığı",
        dialogue: [
            { arabic: "مَا حُكْمُ الْمَعَازِفِ وَالْمُسِيقَى فِي الإِسْلَامِ؟", translation: "İslamda musiqi alətlərinin hökmü nədir?" },
            { arabic: "مُحَرَّمَةٌ بِالْكِتَابِ وَالسُّنَّةِ", translation: "Kitab və Sünnə ilə haram buyurulmuşdur" },
            { arabic: "مَاذَا قَالَ اللَّهُ فِي سُورَةِ لُقْمَانَ؟", translation: "Allah Luqman surəsində nə buyurub?" },
            { arabic: "وَمِنَ النَّاسِ مَنْ يَشْتَرِي لَهْوَ الْحَدِيثِ", translation: "İnsanlardan eləsi var ki, aldadıcı sözləri (boş lağlağını) satın alar" },
            { arabic: "بِمَاذَا فَسَّرَهَا ابْنُ مَسْعُودٍ؟", translation: "İbn Məsud bunu nə ilə təfsir etmişdir?" },
            { arabic: "فَسَّرَهَا بِالْغِنَاءِ وَاللَّهِ الَّذِي لا إِلَهَ إِلا هُوَ", translation: "Ondan başqa məbud olmayan Allaha and olsun ki, o mahnıdır" },
            { arabic: "مَاذَا اخْبَرَ النَّبِيُّ ﷺ عَنْ أُمَّتِهِ؟", translation: "Peyğəmbər ﷺ ümməti haqqında nə xəbər verib?" },
            { arabic: "لَيَكُونَنَّ مِنْ أُمَّتِي أَقْوَامٌ يَسْتَحِلُّونَ الْحِرَ وَالْحَرِيرَ وَالْخَمْرَ وَالْمَعَازِفَ", translation: "Ümmətimdən elə bir qövm olacaq ki, zinakarlığı, ipəyi, içkini və musiqi alətlərini halal sayacaqlar" }
        ]
    },
    {
        id: 293,
        title: "Şəkil və Heykəllər",
        dialogue: [
            { arabic: "مَا حُكْمُ تَصْوِيرِ ذَوَاتِ الأَرْوَاحِ؟", translation: "Canlıların şəklini/heykəlini çəkməyin hökmü nədir?" },
            { arabic: "مُحَرَّمٌ وَمِنَ الْكَبَائِرِ", translation: "Haramdır və böyük günahlardandır" },
            { arabic: "مَنْ أَشَدُّ النَّاسِ عَذَابًا يَوْمَ الْقِيَامَةِ؟", translation: "Qiyamət günü insanların ən şiddətli əzab görəni kimdir?" },
            { arabic: "الْمُصَوِّرُونَ الَّذِينَ يُضَاهُونَ بِخَلْقِ اللَّهِ", translation: "Allahın yaratdığına oxşatmaya çalışan surətçilərdir" },
            { arabic: "هَلْ تَدْخُلُ الْمَلَائِكَةُ بَيْتًا فِيهِ صُورَةٌ؟", translation: "İçində şəkil olan evə mələklər daxil olar?" },
            { arabic: "لَا، لا تَدْخُلُ الْمَلَائِكَةُ بَيْتًا فِيهِ كَلْبٌ وَلا صُورَةٌ", translation: "Xeyr, 'İçində it və şəkil olan evə mələklər girməz'" },
            { arabic: "مَاذَا يُقَالُ لَهُمْ يَوْمَ الْقِيَامَةِ؟", translation: "Qiyamət günü onlara nə deyiləcək?" },
            { arabic: "أَحْيُوا مَا خَلَقْتُمْ", translation: "Yaratdıqlarınıza can verin!" }
        ]
    },
    {
        id: 294,
        title: "İt Saxlamaq Hökmləri",
        dialogue: [
            { arabic: "هَلْ يَجُوزُ اقْتِنَاءُ الْكَلْبِ فِي الْبَيْتِ؟", translation: "Evdə it saxlamaq caizdir?" },
            { arabic: "لَا، لا يَجُوزُ إِلا لِحَاجَةٍ شَرْعِيَّةٍ", translation: "Xeyr, şəriətə uyğun ehtiyac olmadan olmaz" },
            { arabic: "مِثْلُ مَاذَا؟", translation: "Nə kimi?" },
            { arabic: "كَكَلْبِ الصَّيْدِ وَالْمَاشِيَةِ وَالْحِرَاسَةِ", translation: "Ov, çoban və keşikçi iti kimi" },
            { arabic: "مَاذَا يَنْقُصُ مِنْ أَجْرِ مَنْ اقْتَنَى كَلْبًا لِغَيْرِ ذَلِكَ؟", translation: "Bundan başqa məqsədlə it saxlayanın savabından nə azalar?" },
            { arabic: "يَنْقُصُ مِنْ عَمَلِهِ كُلَّ يَوْمٍ قِيرَاطَانِ", translation: "Hər gün əməlindən iki qirat azalar" },
            { arabic: "وَكَيْفَ نَغْسِلُ الإِنَاءَ إِذَا وَلَغَ فِيهِ الْكَلْبُ؟", translation: "İt qabı yaladıqda o qabı necə yuyuruq?" },
            { arabic: "سَبْعَ مَرَّاتٍ أُولاهُنَّ بِالتُّرَابِ", translation: "Yeddi dəfə, birincisi torpaqla olmaqla" }
        ]
    },
    {
        id: 295,
        title: "Halal və Təmiz Qidalar",
        dialogue: [
            { arabic: "مَاذَا أَمَرَنَا اللَّهُ أَنْ نَأْكُلَ؟", translation: "Allah bizə nə yeməyi əmr edib?" },
            { arabic: "كُلُوا مِنْ طَيِّبَاتِ مَا رَزَقْنَاكُمْ", translation: "Sizə ruzi verdiyimiz pak şeylərdən yeyin" },
            { arabic: "مَا هُوَ الطَّيِّبُ؟", translation: "Pak (Peyyib) nədir?" },
            { arabic: "الْحَلَالُ النَّافِعُ غَيْرُ الضَّارِّ", translation: "Zərərli olmayan halal və faydalı şeydir" },
            { arabic: "مَا هُوَ الْخَبِيثُ؟", translation: "Murdar (Xəbis) nədir?" },
            { arabic: "الْمُحَرَّمُ الضَّارُّ كَالْمَيْتَةِ وَالدَّمِ وَالْخِنْزِيرِ", translation: "Meyit, qan və donuz kimi haram və zərərli şeydir" },
            { arabic: "وَيُحِلُّ لَهُمُ الطَّيِّبَاتِ وَيُحَرِّمُ عَلَيْهِمُ الْخَبَائِثَ؟", translation: "Pak şeyləri halal, murdar şeyləri haram edər?" },
            { arabic: "نَعَمْ، هَذِهِ شَرِيعَةُ الإِسْلَامِ", translation: "Bəli, İslam şəriəti budur" }
        ]
    },
    {
        id: 296,
        title: "Alkoqol və Narkotik Haramlığı",
        dialogue: [
            { arabic: "مَا هُوَ الْخَمْرُ؟", translation: "Xəmr (sərxoşedici içki) nədir?" },
            { arabic: "كُلُّ مَا خَامَرَ الْعَقْلَ وَأَسْكَرَ", translation: "Ağlı dumanlandıran və sərxoş edən hər şeydir" },
            { arabic: "مَا حُكْمُ كَثِيرِهِ وَقَلِيلِهِ؟", translation: "Çoxunun və azının hökmü nədir?" },
            { arabic: "مَا أَسْكَرَ كَثِيرُهُ فَقَلِيلُهُ حَرَامٌ", translation: "Çoxu sərxoş edən şeyin azı da haramdır" },
            { arabic: "مَا هِيَ أُمُّ الْخَبَائِثِ؟", translation: "Murdarlıqların anası nədir?" },
            { arabic: "الْخَمْرُ هِيَ أُمُّ الْخَبَائِثِ", translation: "İçki murdarlıqların anasıdır" },
            { arabic: "هَلْ المَخَدِّرَاتُ مِثْلُ الخَمْرِ؟", translation: "Narkotik vasitələr də içki kimidir?" },
            { arabic: "نَعَمْ، أِشَدُّ حُرْمَةً وَفَسَادًا", translation: "Bəli, haramlıq və fəsad baxımından daha ağırdır" }
        ]
    },
    {
        id: 297,
        title: "Əhdə Vəfa və Əmanət",
        dialogue: [
            { arabic: "مَا هِيَ عِلاَقَةُ الإِيمَانِ بِالأَمَانَةِ؟", translation: "İmanın əmanətlə əlaqəsi nədir?" },
            { arabic: "لا إِيمَانَ لِمَنْ لا أَمَانَةَ لَهُ", translation: "Əmanətdar olmayanın imanı yoxdur (kamilləşməyib)" },
            { arabic: "وَلا دِينَ لِمَنْ لا عَهْدَ لَهُ؟", translation: "Əhdinə vəfa etməyənin dini yoxdur?" },
            { arabic: "نَعَمْ، هَذَا حَدِيثٌ نَبَوِيٌّ شَرِيفٌ", translation: "Bəli, bu şərif hədisdir" },
            { arabic: "كَيْفَ نَكُونُ أُمَنَاءَ فِي عَمَلِنَا؟", translation: "İşimizdə necə əmanətdar olaq?" },
            { arabic: "بِإِتْقَانِهِ وَعَدَمِ الْغَشِّ وَالتَّأْخِيرِ", translation: "İşi mükəmməl görməklə, kələk gəlməməklə və gecikdirməməklə" },
            { arabic: "إنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ؟", translation: "Sizdən biri bir iş gördükdə onu dəqiqliklə görməsini Allah sevir?" },
            { arabic: "نَعَمْ، يُحِبُّ الإِتْقَانَ فِي كُلِّ شَيْءٍ", translation: "Bəli, hər şeydə dəqiqliyi və keyfiyyəti sevir" }
        ]
    },
    {
        id: 298,
        title: "Tövhidin Son Söz Olması",
        dialogue: [
            { arabic: "مَا هِيَ أَعْظَمُ أُمْنِيَةٍ لِلْمُؤْمِنِ؟", translation: "Möminin ən böyük arzusu nədir?" },
            { arabic: "أَنْ يَخْتِمَ اللَّهُ لَهُ بِالتَّوْحِيدِ", translation: "Allahın onun ömrünü təvhidlə bitirməsidir" },
            { arabic: "مَاذَا نُلَقِّنُ الْمُحْتَضَرَ؟", translation: "Can verən şəxsə nəyi təlqin edirik?" },
            { arabic: "لَقِّنُوا مَوْتَاكُمْ لا إِلَهَ إِلا اللَّهُ", translation: "Can verənlərinizə 'La ilahə illallah'ı təlqin edin" },
            { arabic: "مَنْ كَانَ آخِرُ كَلَامِهِ لا إِلَهَ إِلا اللَّهُ؟", translation: "Son sözü 'La ilahə illallah' olan şəxs?" },
            { arabic: "دَخَلَ الْجَنَّةَ", translation: "Cənnətə daxil olar" },
            { arabic: "اللَّهُمَّ اجْعَلْ آخِرَ كَلَامِنَا لا إِلَهَ إِلا اللَّهُ", translation: "Allahım, son sözümüzü 'La ilahə illallah' et" },
            { arabic: "آمِينَ يا رَبَّ العَالَمِينَ", translation: "Amin, ey aləmlərin Rəbbi" }
        ]
    },
    {
        id: 299,
        title: "Allahdan Qorxan Qəlb",
        dialogue: [
            { arabic: "مَا هِيَ صِفَةُ الْقَلْبِ الْمُؤْمِنِ؟", translation: "Mömin qəlbin sifəti nədir?" },
            { arabic: "إِذَا ذُكِرَ اللَّهُ وَجِلَتْ قُلُوبُهُمْ", translation: "Allah zikr olunduqda qəlbləri qorxuya düşər" },
            { arabic: "وَإِذَا تُلِيَتْ عَلَيْهِمْ آيَاتُهُ؟", translation: "Onlara Onun ayələri oxunduqda?" },
            { arabic: "زَادَتْهُمْ إِيمَانًا وَعَلَى رَبِّهِمْ يَتَوَكَّلُونَ", translation: "İmanlarını artırar və onlar yalnız Rəblərinə təvəkkül edərlər" },
            { arabic: "هَلْ تَبْكِي الْعَيْنُ مِنْ خَشْيَةِ اللَّهِ؟", translation: "Allah qorxusundan göz yaş tökər?" },
            { arabic: "نَعَمْ، عَيْنٌ بَكَتْ مِنْ خَشْيَةِ اللَّهِ لا تَمَسُّهَا النَّارُ", translation: "Bəli, 'Allah qorxusundan ağlayan gözə Cəhənnəm odu toxunmaz'" },
            { arabic: "اللَّهُمَّ ارْزُقْنَا عَيْنًا بَاكِيَةً وَقَلْبًا خَاشِعًا", translation: "Allahım, bizə ağlayan göz və təzim edən qəlb bəxş et" },
            { arabic: "آمِينَ يا رَبَّ العَالَمِينَ", translation: "Amin, ey aləmlərin Rəbbi" }
        ]
    },
    {
        id: 300,
        title: "Son Dua və Bağlanış",
        dialogue: [
            { arabic: "بِمَاذَا نَخْتِمُ دَعْوَتَنَا وَكَلَامَنَا؟", translation: "Dəvətimizi və sözümüzü nə ilə bitiririk?" },
            { arabic: "بِالْحَمْدِ لِلَّهِ رَبِّ الْعَالَمِينَ", translation: "Aləmlərin Rəbbi olan Allaha həmd etməklə" },
            { arabic: "مَاذَا قَالَ اللَّهُ عَنْ دَعْوَى أَهْلِ الْجَنَّةِ؟", translation: "Allah Cənnət əhlinin duası haqqında nə buyurub?" },
            { arabic: "وآخِرُ دَعْوَاهُمْ أَنِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", translation: "Onların son duası: Aləmlərin Rəbbi olan Allaha həmd olsun!" },
            { arabic: "وَالصَّلَاةُ وَالسَّلَامُ عَلَى المُرْسَلِينَ؟", translation: "Və elçilərə salavat və salam olsun?" },
            { arabic: "نَعَمْ، عَلَى نَبِيِّنَا مُحَمَّدٍ وَآلِهِ وَصَحْبِهِ أَجْمَعِينَ", translation: "Bəli, Peyğəmbərimiz Məhəmmədə, ailəsinə və bütün səhabələrinə" },
            { arabic: "جَزَاكَ اللَّهُ خَيْرًا يا أَخِي عَلَى هَذَا الْمَجْهُودِ", translation: "Bu zəhmətə görə Allah səni xeyirlə mükafatlandırsın, qardaşım" },
            { arabic: "وَإِيَّاكَ، وَفَّقَنَا اللَّهُ وَإِيَّاكُمْ لِمَا يُحِبُّهُ وَيَرْضَاهُ", translation: "Səni də. Allah bizi və sizi sevdiyi və razı olduğu şeylərə müvəffəq etsin" }
        ]
    }
];

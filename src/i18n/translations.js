// src/i18n/translations.js
// Place this file at: src/i18n/translations.js

const translations = {

  // ── NAVBAR ──────────────────────────────────────────────────────────────────
  nav: {
    home:     { en: 'Home',     hi: 'होम',            mr: 'मुख्यपृष्ठ',   ur: 'ہوم'              },
    packages: { en: 'Packages', hi: 'पैकेज',          mr: 'पॅकेजेस',      ur: 'پیکیجز'           },
    about:    { en: 'About',    hi: 'हमारे बारे में', mr: 'आमच्याबद्दल',  ur: 'ہمارے بارے میں'  },
    gallery:  { en: 'Gallery',  hi: 'गैलरी',          mr: 'गॅलरी',        ur: 'گیلری'            },
    contact:  { en: 'Contact',  hi: 'संपर्क',          mr: 'संपर्क',        ur: 'رابطہ'            },
    bookNow:  { en: 'Book Now', hi: 'अभी बुक करें',   mr: 'आता बुक करा',  ur: 'ابھی بک کریں'    },
    language: { en: 'Language', hi: 'भाषा',           mr: 'भाषा',         ur: 'زبان'             },
    selectLanguage: { en: 'Select language', hi: 'भाषा चुनें', mr: 'भाषा निवडा', ur: 'زبان منتخب کریں' },
    tagline:  { en: 'Hajj & Umrah Services', hi: 'हज और उमरा सेवाएं', mr: 'हज आणि उमराह सेवा', ur: 'حج اور عمرہ خدمات' },
  },

  // ── HOME PAGE ───────────────────────────────────────────────────────────────
  home: {
    // Hero
    heroTitle1:      { en: 'Experience the Sacred Journey of', hi: 'पाक सफर का अनुभव लें', mr: 'पवित्र प्रवासाचा अनुभव घ्या', ur: 'مقدس سفر کا تجربہ کریں' },
    heroTitle2:      { en: 'Hajj & Umrah',    hi: 'हज और उमरा',   mr: 'हज आणि उमराह',  ur: 'حج اور عمرہ'   },
    heroSubtitle:    { en: 'Professional and trusted service for your spiritual journey to the holy cities of Makkah and Madinah. Let us guide you every step of the way.', hi: 'मक्का और मदीना की पाक यात्रा के लिए पेशेवर और विश्वसनीय सेवा। हम हर कदम पर आपके साथ हैं।', mr: 'मक्का आणि मदीनाच्या पवित्र प्रवासासाठी व्यावसायिक आणि विश्वासू सेवा. आम्ही प्रत्येक पावलावर आपल्यासोबत आहोत.', ur: 'مکہ اور مدینہ کے مقدس سفر کے لیے پیشہ ورانہ اور قابل اعتماد خدمت۔ ہم ہر قدم پر آپ کے ساتھ ہیں۔' },
    explorePackages: { en: 'Explore Packages', hi: 'पैकेज देखें', mr: 'पॅकेजेस पहा', ur: 'پیکیجز دیکھیں' },
    contactUs:       { en: 'Contact Us',       hi: 'संपर्क करें', mr: 'संपर्क करा',   ur: 'رابطہ کریں'    },

    // Services
    servicesBadge:    { en: 'Our Services',   hi: 'हमारी सेवाएं',  mr: 'आमच्या सेवा',  ur: 'ہماری خدمات'  },
    servicesTitle1:   { en: 'Complete',       hi: 'संपूर्ण',       mr: 'संपूर्ण',      ur: 'مکمل'         },
    servicesTitle2:   { en: 'Hajj & Umrah',   hi: 'हज और उमरा',   mr: 'हज आणि उमराह', ur: 'حج اور عمرہ'  },
    servicesTitle3:   { en: 'Solutions',      hi: 'समाधान',        mr: 'उपाय',         ur: 'سلوشنز'       },
    servicesSubtitle: { en: 'We provide end-to-end services ensuring your pilgrimage is comfortable, safe, and spiritually fulfilling.', hi: 'हम संपूर्ण सेवाएं प्रदान करते हैं जो आपकी यात्रा को आरामदायक, सुरक्षित और आध्यात्मिक रूप से पूर्ण बनाती हैं।', mr: 'आम्ही संपूर्ण सेवा प्रदान करतो जेणेकरून आपचा प्रवास आरामदायक, सुरक्षित आणि परिपूर्ण असेल.', ur: 'ہم مکمل خدمات فراہم کرتے ہیں جو آپ کی یاترا کو آرام دہ، محفوظ اور روحانی طور پر بھرپور بناتی ہیں۔' },
    svc1: { en: 'Personal Guidance',    hi: 'व्यक्तिगत मार्गदर्शन', mr: 'वैयक्तिक मार्गदर्शन', ur: 'ذاتی رہنمائی'         },
    svc2: { en: 'Pre-Journey Training', hi: 'यात्रा-पूर्व प्रशिक्षण', mr: 'प्रवासपूर्व प्रशिक्षण', ur: 'سفر سے پہلے تربیت'  },
    svc3: { en: 'Accommodations',       hi: 'आवास',                mr: 'निवास',               ur: 'رہائش'               },
    svc4: { en: 'Laundry Services',     hi: 'लॉन्ड्री सेवाएं',     mr: 'लॉन्ड्री सेवा',       ur: 'لانڈری خدمت'         },
    svc5: { en: 'Food',                 hi: 'भोजन',                mr: 'जेवण',                ur: 'کھانا'               },
    svc6: { en: 'Umrah Kit',            hi: 'उमरा किट',            mr: 'उमराह किट',           ur: 'عمرہ کٹ'            },
    svc7: { en: 'Transportation',       hi: 'परिवहन',              mr: 'वाहतूक',              ur: 'ٹرانسپورٹ'           },
    svc8: { en: 'Visa Services',        hi: 'वीज़ा सेवाएं',        mr: 'व्हिसा सेवा',         ur: 'ویزا خدمات'          },

    // Stats
    stat1: { en: 'Happy Pilgrims',       hi: 'खुश तीर्थयात्री',   mr: 'आनंदी यात्रेकरू',  ur: 'خوش حاجی'        },
    stat2: { en: 'Years of Experience',  hi: 'वर्षों का अनुभव',    mr: 'वर्षांचा अनुभव',   ur: 'سالوں کا تجربہ'  },
    stat3: { en: 'Sacred Sites Covered', hi: 'पवित्र स्थल',        mr: 'पवित्र स्थळे',     ur: 'مقدس مقامات'     },
    stat4: { en: 'Satisfaction Rate',    hi: 'संतुष्टि दर',        mr: 'समाधान दर',        ur: 'اطمینان کی شرح'  },

    // Packages
    packagesBadge:    { en: 'Our Packages',    hi: 'हमारे पैकेज',       mr: 'आमचे पॅकेजेस',   ur: 'ہمارے پیکیجز'      },
    packagesTitle1:   { en: 'Popular',         hi: 'लोकप्रिय',          mr: 'लोकप्रिय',       ur: 'مقبول'             },
    packagesTitle2:   { en: 'Travel Packages', hi: 'यात्रा पैकेज',       mr: 'प्रवास पॅकेजेस', ur: 'ٹریول پیکیجز'      },
    packagesSubtitle: { en: 'Choose from our carefully curated Hajj and Umrah packages designed for every budget and comfort level.', hi: 'हर बजट और सुविधा स्तर के लिए तैयार किए गए हमारे हज और उमरा पैकेज में से चुनें।', mr: 'प्रत्येक बजेट आणि आरामाच्या पातळीसाठी तयार केलेल्या आमच्या पॅकेजमधून निवडा.', ur: 'ہر بجٹ اور آرام کی سطح کے لیے تیار کردہ پیکیجز میں سے انتخاب کریں۔' },
    viewAllPackages:  { en: 'View All Packages', hi: 'सभी पैकेज देखें', mr: 'सर्व पॅकेजेस पहा', ur: 'تمام پیکیجز دیکھیں' },

    // Reviews
    reviewsBadge:    { en: 'Testimonials',   hi: 'प्रशंसापत्र',      mr: 'अभिप्राय',          ur: 'تعریفی کلمات'    },
    reviewsTitle1:   { en: 'What Our',       hi: 'हमारे',            mr: 'आमचे',              ur: 'ہمارے'           },
    reviewsTitle2:   { en: 'Pilgrims Say',   hi: 'यात्री क्या कहते हैं', mr: 'यात्रेकरू काय म्हणतात', ur: 'حاجی کیا کہتے ہیں' },
    reviewsSubtitle: { en: 'Read heartfelt experiences from those who trusted us with their sacred journey.', hi: 'उन लोगों के दिल की बात पढ़ें जिन्होंने अपनी पाक यात्रा के लिए हम पर भरोसा किया।', mr: 'ज्यांनी पवित्र प्रवासासाठी आमच्यावर विश्वास ठेवला त्यांचे अनुभव वाचा.', ur: 'ان لوگوں کے دلی تجربات پڑھیں جنہوں نے مقدس سفر کے لیے ہم پر اعتماد کیا۔' },

    // Videos
    videosBadge:    { en: 'Our Videos',  hi: 'हमारे वीडियो', mr: 'आमचे व्हिडिओ', ur: 'ہماری ویڈیوز'   },
    videosTitle1:   { en: 'Watch Our',   hi: 'देखें हमारे',  mr: 'पहा आमचे',     ur: 'دیکھیں ہماری'   },
    videosTitle2:   { en: 'Videos',      hi: 'वीडियो',       mr: 'व्हिडिओ',       ur: 'ویڈیوز'         },
    videosSubtitle: { en: 'Experience the spiritual journey through our video collection of Hajj and Umrah pilgrimages.', hi: 'हमारे हज और उमरा वीडियो संग्रह के माध्यम से आध्यात्मिक यात्रा का अनुभव करें।', mr: 'आमच्या व्हिडिओ संग्रहाद्वारे आध्यात्मिक प्रवासाचा अनुभव घ्या.', ur: 'ہمارے ویڈیو مجموعہ کے ذریعے روحانی سفر کا تجربہ کریں۔' },
    visitYoutube:   { en: 'Visit our YouTube Channel →', hi: 'हमारा YouTube चैनल देखें →', mr: 'आमचे YouTube चॅनेल पहा →', ur: '← ہمارا YouTube چینل دیکھیں' },
    scrollDown:     { en: 'Scroll Down', hi: 'नीचे स्क्रॉल करें', mr: 'खाली स्क्रोल करा', ur: 'نیچے سکرول کریں' },
    callLabel:      { en: 'Call Us',  hi: 'हमें कॉल करें',  mr: 'आम्हाला कॉल करा', ur: 'ہمیں کال کریں'  },
    emailLabel:     { en: 'Email',    hi: 'ईमेल',            mr: 'ईमेल',             ur: 'ای میل'          },

    // ── 6 videos matching your actual YouTube uploads ──
    video1Title: { en: 'Complete Umrah Guide',             hi: 'संपूर्ण उमरा गाइड',          mr: 'संपूर्ण उमराह मार्गदर्शक',     ur: 'مکمل عمرہ گائیڈ'                    },
    video1Desc:  { en: 'Step-by-step instructions for performing Umrah correctly.', hi: 'उमरा सही ढंग से करने के निर्देश।', mr: 'उमराह योग्यरित्या करण्यासाठी सूचना.', ur: 'عمرہ صحیح طریقے سے ادا کرنے کی ہدایات۔' },
    video2Title: { en: 'Past Umrah Journey',               hi: 'पिछली उमरा यात्रा',           mr: 'मागील उमराह प्रवास',           ur: 'گزشتہ عمرہ سفر'                     },
    video2Desc:  { en: 'Photos and insights about our previous Umrah journey.', hi: 'हमारी पिछली उमरा यात्रा की तस्वीरें और जानकारी।', mr: 'आमच्या मागील उमराह प्रवासाचे फोटो आणि माहिती.', ur: 'ہمارے گزشتہ عمرہ سفر کی تصاویر اور معلومات۔' },
    video3Title: { en: 'Interview about Umrah Experience', hi: 'उमरा अनुभव पर साक्षात्कार',  mr: 'उमराह अनुभवाबद्दल मुलाखत',    ur: 'عمرہ کے تجربے پر انٹرویو'          },
    video3Desc:  { en: 'A pilgrim shares their Umrah experience and tips.', hi: 'एक तीर्थयात्री अपना उमरा अनुभव साझा करते हैं।', mr: 'एक यात्रेकरू त्यांचा उमराह अनुभव सांगतो.', ur: 'ایک حاجی اپنا عمرہ کا تجربہ بیان کرتے ہیں۔' },
    video4Title: { en: 'Umrah Journey Experience',         hi: 'उमरा यात्रा अनुभव',           mr: 'उमराह प्रवास अनुभव',           ur: 'عمرہ سفر کا تجربہ'                  },
    video4Desc:  { en: 'Step-by-step instructions for performing Umrah correctly.', hi: 'उमरा सही ढंग से करने के निर्देश।', mr: 'उमराह योग्यरित्या करण्यासाठी सूचना.', ur: 'عمرہ صحیح طریقے سے ادا کرنے کی ہدایات۔' },
    video5Title: { en: 'Meals in Makkah al-Mukarramah',    hi: 'मक्का में भोजन',              mr: 'मक्केतील जेवण',               ur: 'مکہ مکرمہ میں کھانا'               },
    video5Desc:  { en: 'Authentic Indian food options available for pilgrims in Makkah.', hi: 'मक्का में तीर्थयात्रियों के लिए प्रामाणिक भारतीय भोजन।', mr: 'मक्केतील यात्रेकरूंसाठी खाद्यपदार्थ.', ur: 'مکہ میں حاجیوں کے لیے اصل ہندوستانی کھانا۔' },
    video6Title: { en: 'Meals in Madinah Al Munawwarah',   hi: 'मदीना में भोजन',              mr: 'मदीन्यातील जेवण',             ur: 'مدینہ المنورہ میں کھانا'           },
    video6Desc:  { en: 'Indian meal options available for pilgrims in Madinah.', hi: 'मदीना में तीर्थयात्रियों के लिए भारतीय भोजन।', mr: 'मदीन्यातील यात्रेकरूंसाठी जेवण पर्याय.', ur: 'مدینہ میں حاجیوں کے لیے ہندوستانی کھانے کے اختیارات۔' },

    // Contact
    contactBadge:    { en: 'Get in Touch', hi: 'संपर्क करें',     mr: 'संपर्क साधा',    ur: 'رابطہ کریں'      },
    contactTitle1:   { en: 'Contact',      hi: 'संपर्क',          mr: 'संपर्क',         ur: 'ہم سے رابطہ'     },
    contactTitle2:   { en: 'Us Today',     hi: 'करें आज',         mr: 'करा आज',        ur: 'کریں آج'         },
    contactSubtitle: { en: 'Ready to embark on your spiritual journey? Reach out through any of these channels.', hi: 'आध्यात्मिक यात्रा शुरू करने के लिए तैयार हैं? किसी भी माध्यम से हमसे संपर्क करें।', mr: 'आध्यात्मिक प्रवासासाठी तयार आहात? कोणत्याही माध्यमातून संपर्क करा.', ur: 'روحانی سفر کے لیے تیار ہیں؟ کسی بھی ذریعے سے رابطہ کریں۔' },
    whatsappDesc:    { en: 'Chat with us instantly',        hi: 'हमसे तुरंत चैट करें',           mr: 'आमच्याशी तात्काळ चॅट करा',    ur: 'فوری چیٹ کریں'           },
    callDesc:        { en: 'Speak directly with our team',  hi: 'सीधे हमारी टीम से बात करें',    mr: 'थेट आमच्या टीमशी बोला',       ur: 'براہ راست ہماری ٹیم سے بات کریں' },
    emailDesc:       { en: 'Send us a detailed inquiry',    hi: 'हमें विस्तृत जानकारी भेजें',    mr: 'आम्हाला तपशीलवार चौकशी पाठवा', ur: 'تفصیلی استفسار بھیجیں'   },
  },

  // ── ABOUT PAGE ──────────────────────────────────────────────────────────────
  about: {
    heroBadge:    { en: 'About Us',            hi: 'हमारे बारे में',      mr: 'आमच्याबद्दल',        ur: 'ہمارے بارے میں'    },
    heroTitle1:   { en: 'Your Trusted Partner for', hi: 'आपका भरोसेमंद साथी', mr: 'आपला विश्वासू भागीदार', ur: 'آپ کا قابل اعتماد ساتھی' },
    heroTitle2:   { en: 'Sacred Journeys',     hi: 'पाक सफर के लिए',     mr: 'पवित्र प्रवासासाठी', ur: 'مقدس سفر کے لیے'  },
    heroSubtitle: { en: 'Over a decade of guiding pilgrims with care, comfort, and devotion to the holy cities of Makkah and Madinah.', hi: 'एक दशक से मक्का और मदीना की पाक यात्रा के लिए देखभाल और समर्पण के साथ मार्गदर्शन।', mr: 'एक दशकाहून अधिक काळ मक्का आणि मदीनाच्या प्रवासासाठी काळजीने मार्गदर्शन.', ur: 'ایک دہائی سے مکہ اور مدینہ کے مقدس سفر کے لیے عنایت اور عقیدت کے ساتھ رہنمائی۔' },

    storyBadge:      { en: 'Our Story',    hi: 'हमारी कहानी',    mr: 'आमची कहाणी',   ur: 'ہماری کہانی'  },
    expText:         { en: 'Years of Excellence', hi: 'उत्कृष्टता के वर्ष', mr: 'उत्कृष्टतेची वर्षे', ur: 'اعلیٰ کارکردگی کے سال' },
    storyTitle1:     { en: 'A Journey Built on', hi: 'एक यात्रा जो बनी है', mr: 'एक प्रवास ज्याचा आधार', ur: 'ایک سفر جو بنا ہے' },
    storyTitle2:     { en: 'Faith & Trust', hi: 'आस्था और विश्वास पर', mr: 'श्रद्धा आणि विश्वासावर', ur: 'ایمان اور اعتماد پر' },
    storyP1:         { en: 'Bajm Tours Hajj & Umrah Services was founded with a simple yet profound mission — to make the sacred journey of Hajj and Umrah accessible, comfortable, and spiritually enriching for every Muslim.', hi: 'बजम टूर्स की स्थापना हर मुस्लिम के लिए हज और उमरा की पाक यात्रा को सुलभ, आरामदायक और आध्यात्मिक रूप से समृद्ध बनाने के मिशन के साथ हुई।', mr: 'बजम टूर्सची स्थापना प्रत्येक मुस्लिमासाठी हज आणि उमराहचा पवित्र प्रवास सुलभ, आरामदायक करण्याच्या ध्येयाने झाली.', ur: 'بجم ٹورز کی بنیاد ہر مسلمان کے لیے حج اور عمرہ کے مقدس سفر کو آسان اور روحانی طور پر بھرپور بنانے کے مشن کے ساتھ رکھی گئی۔' },
    storyP2:         { en: 'Starting from Akluj, Maharashtra, we have grown into a trusted name, serving over 1000+ pilgrims with our personalized service and attention to detail.', hi: 'अकलूज, महाराष्ट्र से शुरू होकर, हम 1000+ से अधिक तीर्थयात्रियों की सेवा करने वाले एक भरोसेमंद नाम बन गए हैं।', mr: 'अकलूज, महाराष्ट्रापासून सुरुवात करून, आम्ही 1000+ यात्रेकरूंना सेवा देणारे विश्वासू नाव बनलो आहोत.', ur: 'اکلوج، مہاراشٹرا سے شروع ہو کر، ہم 1000+ سے زیادہ حاجیوں کی خدمت کرنے والا قابل اعتماد نام بن گئے ہیں۔' },
    storyP3:         { en: 'We treat every pilgrim like family. Comfortable hotel arrangements near the Haram, quality Indian meals, and knowledgeable guides make your spiritual journey truly memorable.', hi: 'हम हर तीर्थयात्री को परिवार जैसा मानते हैं। हरम के पास आरामदायक होटल, अच्छा भारतीय भोजन और अनुभवी गाइड आपकी यात्रा को यादगार बनाते हैं।', mr: 'आम्ही प्रत्येक यात्रेकरूला कुटुंबासारखे मानतो. हरमजवळील आरामदायक हॉटेल, भारतीय जेवण आणि अनुभवी मार्गदर्शक तुमचा प्रवास संस्मरणीय करतात.', ur: 'ہم ہر حاجی کو خاندان سمجھتے ہیں۔ حرم کے قریب آرام دہ ہوٹل، معیاری ہندوستانی کھانا اور ماہر رہنما آپ کے سفر کو یادگار بناتے ہیں۔' },
    explorePackages: { en: 'Explore Our Packages', hi: 'हमारे पैकेज देखें', mr: 'आमचे पॅकेजेस पहा', ur: 'ہمارے پیکیجز دیکھیں' },

    valuesBadge:  { en: 'Our Values',  hi: 'हमारे मूल्य',  mr: 'आमची मूल्ये', ur: 'ہماری اقدار'           },
    valuesTitle1: { en: 'What',        hi: 'क्या',          mr: 'काय',         ur: 'کیا'                   },
    valuesTitle2: { en: 'Drives Us',   hi: 'हमें प्रेरित करता है', mr: 'आम्हाला प्रेरित करते', ur: 'ہمیں آگے بڑھاتا ہے' },
    val1Title: { en: 'Devotion',          hi: 'समर्पण',          mr: 'भक्ती',          ur: 'عقیدت'          },
    val1Desc:  { en: 'Every pilgrimage is sacred. We serve with sincere devotion and spiritual awareness.', hi: 'हर तीर्थयात्रा पवित्र है। हम सच्ची भक्ति और आध्यात्मिक जागरूकता के साथ सेवा करते हैं।', mr: 'प्रत्येक यात्रा पवित्र आहे. आम्ही भक्ती आणि आध्यात्मिक जाणीवेने सेवा करतो.', ur: 'ہر حج مقدس ہے۔ ہم خلوص دل سے عقیدت کے ساتھ خدمت کرتے ہیں۔' },
    val2Title: { en: 'Trust & Safety',    hi: 'विश्वास और सुरक्षा', mr: 'विश्वास आणि सुरक्षा', ur: 'اعتماد اور حفاظت' },
    val2Desc:  { en: 'Your safety and peace of mind are our top priorities. We ensure secure, well-organized journeys.', hi: 'आपकी सुरक्षा और मन की शांति हमारी सर्वोच्च प्राथमिकता है।', mr: 'आपली सुरक्षा आमची सर्वोच्च प्राथमिकता आहे.', ur: 'آپ کی حفاظت ہماری اولین ترجیح ہے۔' },
    val3Title: { en: 'Personalized Care', hi: 'व्यक्तिगत देखभाल', mr: 'वैयक्तिक काळजी', ur: 'ذاتی نگہداشت'    },
    val3Desc:  { en: 'We treat every pilgrim like family, providing individual attention and customized experiences.', hi: 'हम हर तीर्थयात्री को परिवार की तरह मानते हैं।', mr: 'आम्ही प्रत्येक यात्रेकरूला कुटुंबाप्रमाणे वागवतो.', ur: 'ہم ہر حاجی کو خاندان کی طرح سمجھتے ہیں۔' },
    val4Title: { en: 'Experienced Team',  hi: 'अनुभवी टीम',       mr: 'अनुभवी टीम',     ur: 'تجربہ کار ٹیم'  },
    val4Desc:  { en: 'Our multilingual guides have years of experience navigating the holy cities with expertise.', hi: 'हमारे बहुभाषी गाइडों के पास पवित्र शहरों में मार्गदर्शन के वर्षों का अनुभव है।', mr: 'आमच्या बहुभाषिक मार्गदर्शकांना पवित्र शहरांमध्ये मार्गदर्शन करण्याचा अनेक वर्षांचा अनुभव आहे.', ur: 'ہمارے کثیر اللسانی گائیڈوں کو مقدس شہروں میں رہنمائی کا سالوں کا تجربہ ہے۔' },

    whyBadge:  { en: 'Why Choose Us', hi: 'हमें क्यों चुनें',  mr: 'आम्हाला का निवडा', ur: 'ہمیں کیوں چنیں'  },
    whyTitle1: { en: 'The',           hi: '',                   mr: '',                  ur: ''                },
    whyTitle2: { en: 'Bajm Tours',    hi: 'बजम टूर्स',          mr: 'बजम टूर्स',         ur: 'بجم ٹورز'        },
    whyTitle3: { en: 'Difference',    hi: 'की विशेषता',         mr: 'फरक',               ur: 'کی خصوصیت'       },
    why1: { en: 'Hotels within walking distance of the Haram',       hi: 'हरम से पैदल दूरी पर होटल',                   mr: 'हरमजवळ चालत अंतरावर हॉटेल',         ur: 'حرم سے پیدل دوری پر ہوٹل'              },
    why2: { en: 'Authentic South Indian food throughout the journey', hi: 'यात्रा में प्रामाणिक दक्षिण भारतीय भोजन',    mr: 'प्रवासभर अस्सल दक्षिण भारतीय जेवण', ur: 'سفر بھر اصل جنوبی ہندوستانی کھانا'    },
    why3: { en: 'Experienced multilingual guides for Ziyarah',       hi: 'ज़ियारत के लिए अनुभवी बहुभाषी गाइड',         mr: 'झियारतसाठी बहुभाषिक मार्गदर्शक',    ur: 'زیارت کے لیے کثیر اللسانی گائیڈ'      },
    why4: { en: '24/7 on-ground support for all pilgrims',           hi: 'सभी तीर्थयात्रियों के लिए 24/7 सहायता',      mr: 'सर्व यात्रेकरूंसाठी 24/7 आधार',     ur: 'تمام حاجیوں کے لیے 24/7 معاونت'       },
    why5: { en: 'Flexible packages for every budget',                hi: 'हर बजट के लिए लचीले पैकेज',                  mr: 'प्रत्येक बजेटसाठी लवचिक पॅकेजेस',  ur: 'ہر بجٹ کے لیے لچکدار پیکیجز'          },
    why6: { en: 'Family-friendly tours with individual attention',   hi: 'परिवार के अनुकूल दौरे',                       mr: 'कुटुंबासाठी अनुकूल दौरे',           ur: 'خاندانی دورے اور انفرادی توجہ'         },
    why7: { en: 'Quick visa processing and documentation',           hi: 'त्वरित वीज़ा प्रसंस्करण',                    mr: 'जलद व्हिसा प्रक्रिया',              ur: 'فوری ویزا پروسیسنگ'                    },
    why8: { en: 'Group and private transportation options',          hi: 'समूह और निजी परिवहन विकल्प',                 mr: 'गट आणि खाजगी वाहतूक पर्याय',       ur: 'گروپ اور نجی ٹرانسپورٹ کے اختیارات'  },
  },

  // ── PACKAGES PAGE ───────────────────────────────────────────────────────────
  packages: {
    badge:    { en: 'Our Packages', hi: 'हमारे पैकेज', mr: 'आमचे पॅकेजेस', ur: 'ہمارے پیکیجز' },
    title1:   { en: 'Hajj & Umrah', hi: 'हज और उमरा',  mr: 'हज आणि उमराह', ur: 'حج اور عمرہ'  },
    title2:   { en: 'Packages',     hi: 'पैकेज',        mr: 'पॅकेजेस',      ur: 'پیکیجز'       },
    subtitle: { en: 'Choose from our carefully curated packages designed for comfort, convenience, and a deeply fulfilling spiritual experience.', hi: 'आराम और सुविधा के लिए तैयार किए गए हमारे पैकेज में से चुनें।', mr: 'आराम आणि सोयीसाठी तयार केलेल्या पॅकेजमधून निवडा.', ur: 'آرام اور سہولت کے لیے تیار کردہ پیکیجز میں سے انتخاب کریں۔' },
    all:   { en: 'All',   hi: 'सभी',  mr: 'सर्व', ur: 'تمام' },
    hajj:  { en: 'Hajj',  hi: 'हज',   mr: 'हज',   ur: 'حج'   },
    umrah: { en: 'Umrah', hi: 'उमरा', mr: 'उमराह',ur: 'عمرہ' },
  },

  // ── GALLERY PAGE ────────────────────────────────────────────────────────────
  gallery: {
    badge:       { en: 'Gallery',  hi: 'गैलरी',  mr: 'गॅलरी',  ur: 'گیلری'  },
    title1:      { en: 'Sacred',   hi: 'पाक',     mr: 'पवित्र', ur: 'مقدس'   },
    title2:      { en: 'Moments',  hi: 'पल',      mr: 'क्षण',   ur: 'لمحات'  },
    subtitle:    { en: 'Glimpses of the holy cities and unforgettable experiences from our pilgrim journeys.', hi: 'पवित्र शहरों की झलक और हमारी यात्राओं के अविस्मरणीय अनुभव।', mr: 'पवित्र शहरांची झलक आणि अविस्मरणीय अनुभव.', ur: 'مقدس شہروں کی جھلکیاں اور ناقابل فراموش تجربات۔' },
    all:         { en: 'All',      hi: 'सभी',      mr: 'सर्व',    ur: 'تمام'   },
    makkah:      { en: 'Makkah',   hi: 'मक्का',    mr: 'मक्का',   ur: 'مکہ'    },
    madinah:     { en: 'Madinah',  hi: 'मदीना',    mr: 'मदिना',   ur: 'مدینہ'  },
    hotels:      { en: 'Hotels',   hi: 'होटल',     mr: 'हॉटेल्स', ur: 'ہوٹلز'  },
    pilgrims:    { en: 'Pilgrims', hi: 'तीर्थयात्री', mr: 'यात्रेकरू', ur: 'حاجی' },
    makkahSub:   { en: 'The holiest city — home of Masjid al-Haram and the sacred Kaaba.', hi: 'सबसे पवित्र शहर — मस्जिद अल-हरम और पवित्र काबा।', mr: 'सर्वात पवित्र शहर — मस्जिद अल-हराम आणि काबा.', ur: 'سب سے مقدس شہر — مسجد الحرام اور کعبہ۔' },
    medinahSub:  { en: 'The city of the Prophet ﷺ — home of Al-Masjid an-Nabawi.', hi: 'नबी ﷺ का शहर — मस्जिद अन-नबवी।', mr: 'पैगंबर ﷺ यांचे शहर — अल-मस्जिद अन-नबवी.', ur: 'نبی ﷺ کا شہر — مسجد نبوی۔' },
    hotelsSub:   { en: 'Premium accommodation steps away from the holy sites.', hi: 'पवित्र स्थलों से कुछ कदम दूर प्रीमियम आवास।', mr: 'पवित्र स्थळांजवळ उत्तम निवास.', ur: 'مقدس مقامات سے قریب اعلیٰ رہائش۔' },
    pilgrimsSub: { en: 'Cherished moments from the journeys of our blessed pilgrims.', hi: 'हमारे तीर्थयात्रियों की यात्राओं के अनमोल पल।', mr: 'आमच्या यात्रेकरूंच्या प्रवासातील मौल्यवान क्षण.', ur: 'ہمارے حاجیوں کے سفر کے قیمتی لمحات۔' },
  },

  // ── PACKAGE CARD ────────────────────────────────────────────────────────────
  card: {
    popularBadge:   { en: '⭐ Popular', hi: '⭐ लोकप्रिय', mr: '⭐ लोकप्रिय', ur: '⭐ مقبول' },
    viewDetails:    { en: 'View Full Details →', hi: 'पूरी जानकारी देखें →', mr: 'संपूर्ण तपशील पहा →', ur: '← مکمل تفصیل دیکھیں' },
    moreInclusions: { en: 'more inclusions',     hi: 'और सुविधाएं',           mr: 'अधिक समावेश',         ur: 'مزید سہولتیں'         },
    whatsapp:       { en: 'WhatsApp',            hi: 'व्हाट्सएप',              mr: 'व्हॉट्सॲप',            ur: 'واٹس ایپ'             },
    call:           { en: 'Call',               hi: 'कॉल',                   mr: 'कॉल',                  ur: 'کال'                  },
    email:          { en: 'Email',              hi: 'ईमेल',                  mr: 'ईमेल',                 ur: 'ای میل'               },
  },

  // ── FOOTER ──────────────────────────────────────────────────────────────────
  footer: {
    ctaTitle1:   { en: 'Ready to Begin Your',   hi: 'शुरू करने के लिए तैयार हैं?', mr: 'सुरू करण्यास तयार आहात का?', ur: 'شروع کرنے کے لیے تیار ہیں؟' },
    ctaTitle2:   { en: 'Spiritual Journey?',    hi: 'आपकी आध्यात्मिक यात्रा?',    mr: 'आपला आध्यात्मिक प्रवास?',    ur: 'آپ کا روحانی سفر؟'          },
    ctaDesc:     { en: 'Contact us today and let us help you plan the perfect Hajj or Umrah experience.', hi: 'आज ही हमसे संपर्क करें।', mr: 'आज आम्हाला संपर्क करा.', ur: 'آج ہم سے رابطہ کریں۔' },
    chatWA:      { en: 'Chat on WhatsApp', hi: 'WhatsApp पर चैट करें', mr: 'WhatsApp वर चॅट करा', ur: 'واٹس ایپ پر چیٹ کریں' },
    callNow:     { en: 'Call Now',         hi: 'अभी कॉल करें',         mr: 'आत्ता कॉल करा',       ur: 'ابھی کال کریں'         },
    description: { en: 'Your trusted partner for sacred journeys to Makkah and Madinah.', hi: 'मक्का और मदीना की पाक यात्राओं के लिए विश्वसनीय साझेदार।', mr: 'मक्का आणि मदीनाच्या पवित्र प्रवासासाठी विश्वासू भागीदार.', ur: 'مکہ اور مدینہ کے مقدس سفر کے لیے قابل اعتماد ساتھی۔' },
    description2: { en: 'We provide professional, comfortable, and spiritually enriching Hajj & Umrah services.', hi: 'हम पेशेवर, आरामदायक और आध्यात्मिक रूप से समृद्ध हज और उमरा सेवाएं प्रदान करते हैं।', mr: 'आम्ही व्यावसायिक, आरामदायक आणि आध्यात्मिकदृष्ट्या समृद्ध हज आणि उमराह सेवा देतो.', ur: 'ہم پیشہ ورانہ، آرام دہ اور روحانی طور پر بھرپور حج و عمرہ خدمات فراہم کرتے ہیں۔' },
    quickLinks:  { en: 'Quick Links',  hi: 'त्वरित लिंक',  mr: 'जलद दुवे',    ur: 'فوری لنکس'   },
    ourServices: { en: 'Our Services', hi: 'हमारी सेवाएं', mr: 'आमच्या सेवा', ur: 'ہماری خدمات' },
    hajjPackages: { en: 'Hajj Packages', hi: 'हज पैकेज', mr: 'हज पॅकेजेस', ur: 'حج پیکیجز' },
    umrahPackages: { en: 'Umrah Packages', hi: 'उमरा पैकेज', mr: 'उमराह पॅकेजेस', ur: 'عمرہ پیکیجز' },
    contactUs:   { en: 'Contact Us',   hi: 'संपर्क करें',  mr: 'संपर्क करा',   ur: 'ہم سے رابطہ' },
    address:     { en: 'B-4 Ratnai Park Akluj, Maharashtra, India', hi: 'बी-4 रत्नाई पार्क, अकलूज, महाराष्ट्र', mr: 'बी-4 रत्नाई पार्क, अकलूज, महाराष्ट्र', ur: 'بی-4 رتنائی پارک اکلوج، مہاراشٹرا' },
    rights:      { en: 'All rights reserved.', hi: 'सर्वाधिकार सुरक्षित।', mr: 'सर्व हक्क राखीव.', ur: 'جملہ حقوق محفوظ ہیں۔' },
  },

  // ── PACKAGE DETAILS PAGE ───────────────────────────────────────────────────
  details: {
    notFoundTitle:     { en: 'Package Not Found', hi: 'पैकेज नहीं मिला', mr: 'पॅकेज सापडले नाही', ur: 'پیکیج نہیں ملا' },
    notFoundSubtitle:  { en: "The package you're looking for doesn't exist.", hi: 'आप जिस पैकेज को खोज रहे हैं वह मौजूद नहीं है।', mr: 'तुम्ही शोधत असलेले पॅकेज उपलब्ध नाही.', ur: 'آپ جس پیکیج کو تلاش کر رہے ہیں وہ موجود نہیں ہے۔' },
    viewAllPackages:   { en: 'View All Packages', hi: 'सभी पैकेज देखें', mr: 'सर्व पॅकेजेस पहा', ur: 'تمام پیکیجز دیکھیں' },
    backToPackages:    { en: 'Back to Packages', hi: 'पैकेज पर वापस जाएं', mr: 'पॅकेजेसकडे परत जा', ur: 'پیکیجز پر واپس جائیں' },
    aboutPackage:      { en: 'About This Package', hi: 'इस पैकेज के बारे में', mr: 'या पॅकेजबद्दल', ur: 'اس پیکیج کے بارے میں' },
    hotelAccommodation:{ en: 'Hotel Accommodation', hi: 'होटल आवास', mr: 'हॉटेल निवास', ur: 'ہوٹل رہائش' },
    makkah:            { en: 'Makkah', hi: 'मक्का', mr: 'मक्का', ur: 'مکہ' },
    madinah:           { en: 'Madinah', hi: 'मदीना', mr: 'मदिना', ur: 'مدینہ' },
    included:          { en: "What's Included", hi: 'क्या शामिल है', mr: 'काय समाविष्ट आहे', ur: 'کیا شامل ہے' },
    notIncluded:       { en: "What's Not Included", hi: 'क्या शामिल नहीं है', mr: 'काय समाविष्ट नाही', ur: 'کیا شامل نہیں ہے' },
    startingFrom:      { en: 'Starting from', hi: 'शुरुआत', mr: 'सुरुवात', ur: 'شروع سے' },
    enquireWhatsapp:   { en: 'Enquire on WhatsApp', hi: 'WhatsApp पर पूछताछ करें', mr: 'WhatsApp वर चौकशी करा', ur: 'واٹس ایپ پر پوچھ گچھ کریں' },
    emailInquiry:      { en: 'Email Inquiry', hi: 'ईमेल पूछताछ', mr: 'ईमेल चौकशी', ur: 'ای میل انکوائری' },
    priceNote1:        { en: 'Prices may vary based on season and availability', hi: 'मौसम और उपलब्धता के अनुसार कीमत बदल सकती है', mr: 'हंगाम आणि उपलब्धतेनुसार किंमत बदलू शकते', ur: 'موسم اور دستیابی کے مطابق قیمت بدل سکتی ہے' },
    priceNote2:        { en: 'Group discounts available', hi: 'समूह छूट उपलब्ध है', mr: 'गट सवलत उपलब्ध आहे', ur: 'گروپ ڈسکاؤنٹ دستیاب ہے' },
    priceNote3:        { en: 'Customizable packages on request', hi: 'अनुरोध पर अनुकूलित पैकेज उपलब्ध', mr: 'विनंतीवर सानुकूल पॅकेज उपलब्ध', ur: 'درخواست پر حسب ضرورت پیکیجز دستیاب' },
    whatsappIntro:     { en: 'Assalamu Alaikum, I am interested in the', hi: 'अस्सलामु अलैकुम, मुझे इसमें रुचि है', mr: 'अस्सलामु अलैकुम, मला यामध्ये रस आहे', ur: 'السلام علیکم، مجھے اس میں دلچسپی ہے' },
    whatsappOutro:     { en: 'Please share more details and availability.', hi: 'कृपया अधिक जानकारी और उपलब्धता साझा करें।', mr: 'कृपया अधिक माहिती आणि उपलब्धता सांगा.', ur: 'براہ کرم مزید تفصیل اور دستیابی بتائیں۔' },
    emailSubject:      { en: 'Inquiry:', hi: 'पूछताछ:', mr: 'चौकशी:', ur: 'انکوائری:' },
    emailBodyIntro:    { en: 'I am interested in the', hi: 'मुझे इसमें रुचि है', mr: 'मला यामध्ये रस आहे', ur: 'مجھے اس میں دلچسپی ہے' },
    emailBodyOutro:    { en: 'Please share availability and more details.', hi: 'कृपया उपलब्धता और अधिक जानकारी साझा करें।', mr: 'कृपया उपलब्धता आणि अधिक माहिती सांगा.', ur: 'براہ کرم دستیابی اور مزید تفصیل بتائیں۔' },
  },
};

export default translations;
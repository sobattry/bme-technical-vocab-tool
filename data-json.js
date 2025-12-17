 // data-json.js
var Dictionary = [
  {id: 1, views: 1, type: "mathSym", fav: false, name: "2.6666666666....", synonym:  "two point six recurring"},

  {id: 2, views: 1, type: "mathSym", fav: false, name: "2.612361236123...", synonym:  "two point six one two three recurring"},
  
  {id: 3, views: 1, type: "mathSym", fav: false, name: "1.0123", synonym:  "one point oh one two three"},
  
  {id: 4, views: 1, type: "mathSym", fav: false, name: "A ⋃ B", synonym:  "A union B"},
  
  {id: 5, views: 1, type: "mathSym", fav: false, name: "A ⋂ B", synonym:  "A intersection B"},
  
  {id: 6, views: 1, type: "mathSym", fav: false, name: "A ⊆ B", synonym:  "A is contained in B; A is a subset of B"},
  
  {id: 7, views: 1, type: "mathSym", fav: false, name: "LtΔx→0", synonym:  "the limit as delta x approaches zero, the limit as delta x tends to zero"},
  
  {id: 8, views: 1, type: "mathSym", fav: false, name: "limΔx→0", synonym:  "the limit as delta x approaches zero, the limit as delta x tends to zero"},
  
  {id: 9, views: 1, type: "mathSym", fav: false, name: "Δx → 0", synonym:  "delta x approaches zero"},
  
  {id: 10, views: 1, type: "mathSym", fav: false, name: "logey", synonym:  "log to the base e of y; log y to the base e; natural log (of) y"},
  
  {id: 11, views: 1, type: "mathSym", fav: false, name: "d²v/dθ²", synonym:  "d 2 v by d theta squared, the second derivative of v with respect to theta,"},
  
  {id: 12, views: 1, type: "mathSym", fav: false, name: "dv/dθ", synonym:  "d v by d theta, the derivative of v with respect to theta"},
  
  {id: 13, views: 1, type: "mathSym", fav: false, name: "dv", synonym:  "the derivative of v"},
  
  {id: 14, views: 1, type: "mathSym", fav: false, name: "∂²v/∂θ²", synonym:  "delta two v by delta theta squared; the second partial derivative of v with respect to θ"},
  
  {id: 15, views: 1, type: "mathSym", fav: false, name: "f^(4)", synonym: "f four x; the fourth derivative of f with respect to x"},
  
  {id: 16, views: 1, type: "mathSym", fav: false, name: "∂v", synonym:  "the partial derivative of v"},
  
  {id: 17, views: 1, type: "mathSym", fav: false, name: "∂v/∂θ", synonym:  "delta v by delta theta, the partial derivative of v with respect to θ"},
  
  {id: 18, views: 1, type: "mathSym", fav: false, name: "f(x)", synonym:  "fx f of x; the function of x"},
  
  {id: 19, views: 1, type: "mathSym", fav: false, name: "f'(x)", synonym:  "f dash x; the (first) derivative of with respect to x"},
  
  {id: 20, views: 1, type: "mathSym", fav: false, name: "f'''(x)", synonym:  "f triple-dash x; f treble-dash x; the third derivative of f with respect to x"},
  
  {id: 21, views: 1, type: "mathSym", fav: false, name: "x ∝ 1/y", synonym:  "x varies as one over y; x is indirectly proportional to y"},
  
  {id: 22, views: 1, type: "mathSym", fav: false, name: "x ∝ y", synonym:  "x varies as y; x is (directly) proportional to y"},
  
  {id: 23, views: 1, type: "mathSym", fav: false, name: "(x/y)²", synonym:  "x over y all squared"},
  
  {id: 24, views: 1, type: "mathSym", fav: false, name: "(x + y)²", synonym:  "x plus y all squared"},
  
  {id: 25, views: 1, type: "mathSym", fav: false, name: "∜", synonym:  "the fourth root of x"},
  
  {id: 26, views: 1, type: "mathSym", fav: false, name: "∛", synonym:  "the cube root of x"},
  
  {id: 27, views: 1, type: "mathSym", fav: false, name: "xy", synonym:  "x y; x times y; x multiplied by y"},
  
  {id: 28, views: 1, type: "mathSym", fav: false, name: "x ± 1", synonym:  "x plus or minus one"},
  
  {id: 29, views: 1, type: "mathSym", fav: false, name: "x/y", synonym:  "x over y; x divided by y"},
  
  {id: 30, views: 1, type: "mathSym", fav: false, name: "x ÷ y", synonym:  "x divided by y"},
  
  {id: 31, views: 1, type: "mathSym", fav: false, name: "x ≈ y", synonym:  "x is approximately equal to y"},
  
  {id: 32, views: 1, type: "mathSym", fav: false, name: "x ≡ y", synonym:  "x is equivalent to y; x is identical with y"},
  
  {id: 33, views: 1, type: "mathSym", fav: false, name: "0 ≤ x ≤ 1", synonym:  "zero is less than or equal to x is less than or equal to 1; x is greater than or equal to zero and less than or equal to 1"},
  
  {id: 34, views: 1, type: "mathSym", fav: false, name: "x²", synonym:  "x squared"},
  
  {id: 35, views: 1, type: "mathSym", fav: false, name: "x³", synonym:  "x cubed"},
  
  {id: 36, views: 1, type: "mathSym", fav: false, name: "x^-n", synonym:  "x to the minus n; x to the power of minus n"},
  
  {id: 37, views: 1, type: "mathSym", fav: false, name: "cc, cm³", synonym:  "cubic centimetre, centimetre cubed"},
  
  {id: 38, views: 1, type: "mathSym", fav: false, name: "0°K, 273.15 °C", synonym:  "absolute zero"},
  
  {id: 39, views: 1, type: "mathSym", fav: false, name: "℃", synonym:  "degrees Centigrade"},
  
  {id: 40, views: 1, type: "mathSym", fav: false, name: "|x|", synonym:  "mod x; modulus x"},
  
  {id: 41, views: 1, type: "mathSym", fav: false, name: "∀", synonym:  "for all"},
  
  {id: 45, views: 1, type: "mathSym", fav: false, name: "⊂", synonym:  "contained in; a proper subset of"},
  
  {id: 46, views: 1, type: "mathSym", fav: false, name: "∉", synonym:  "does not belong to; is not a member of"},
  
  {id: 47, views: 1, type: "mathSym", fav: false, name: "∫", synonym:  "integral"},
  
  {id: 48, views: 1, type: "mathSym", fav: false, name: "Σ", synonym:  "sum"},
  
  {id: 49, views: 1, type: "mathSym", fav: false, name: "/", synonym:  "over; divided by"},
  
  {id: 50, views: 1, type: "mathSym", fav: false, name: "/", synonym:  "per"},
  
  {id: 51, views: 1, type: "mathSym", fav: false, name: "∈", synonym:  "belongs to; a member of; an element of"},
  
  {id: 52, views: 1, type: "mathSym", fav: false, name: "→", synonym:  "gives, leads to, approaches"},
  
  {id: 53, views: 1, type: "mathSym", fav: false, name: "∵", synonym:  "because"},
  
  {id: 54, views: 1, type: "mathSym", fav: false, name: "∴", synonym:  "therefore"},
  
  {id: 55, views: 1, type: "mathSym", fav: false, name: "log₂x", synonym:  "log to the base 2 of x"},
  
  {id: 56, views: 1, type: "mathSym", fav: false, name: "w.r.t.", synonym:  "with respect to"},
  
  {id: 57, views: 1, type: "mathSym", fav: false, name: "∂", synonym:  "partial derivative, delta"},
  
  {id: 58, views: 1, type: "mathSym", fav: false, name: "˙", synonym:  "dot"},
  
  {id: 59, views: 1, type: "mathSym", fav: false, name: "¨", synonym:  "double dot"},
  
  {id: 60, views: 1, type: "mathSym", fav: false, name: "∝", synonym:  "varies as; proportional to"},
  
  {id: 61, views: 1, type: "mathSym", fav: false, name: "≫", synonym:  "much greater than"},
  
  {id: 62, views: 1, type: "mathSym", fav: false, name: "≪", synonym:  "much less than"},
  
  {id: 63, views: 1, type: "mathSym", fav: false, name: "=", synonym:  "equals"},
  
  {id: 64, views: 1, type: "mathSym", fav: false, name: "≡", synonym:  "equivalent to; identical"},
  
  {id: 65, views: 1, type: "mathSym", fav: false, name: "≈", synonym:  "approximately, similar"},
  
  {id: 66, views: 1, type: "mathSym", fav: false, name: "⊥", synonym:  "perpendicular to"},
  
  {id: 66, views: 1, type: "bioMed", fav: false, name: "Accompanied", meaning: "همراه"},

  {id: 67, views: 1, type: "bioMed", fav: false, name: "Action potential", meaning: "پتانسیل عمل"},

  {id: 68, views: 1, type: "bioMed", fav: false, name: "Albeit", meaning: "هرچند; البته"},

  {id: 69, views: 1, type: "bioMed", fav: false, name: "Anterior", meaning: "قدامی"},

  {id: 70, views: 1, type: "bioMed", fav: false, name: "Artery", meaning: "شریان"},

  {id: 71, views: 1, type: "bioMed", fav: false, name: "Aspect", meaning: "جنبه"},

  {id: 72, views: 1, type: "bioMed", fav: false, name: "Assess", meaning: "ارزیابی کردن; تعیین کردن"},

  {id: 73, views: 1, type: "bioMed", fav: false, name: "Associated", meaning: "مرتبط است"},

  {id: 74, views: 1, type: "bioMed", fav: false, name: "Avalanche", meaning: "بهمن"},

  {id: 75, views: 1, type: "bioMed", fav: false, name: "Boldface", meaning: "حروف ضخیم; جسور"},

  {id: 76, views: 1, type: "bioMed", fav: false, name: "Cardiac", meaning: "قلبی"},

  {id: 77, views: 1, type: "bioMed", fav: false, name: "Cardiovascular", meaning: "قلبی عروقی"},

  {id: 78, views: 1, type: "bioMed", fav: false, name: "Catheters", meaning: "لوله ی تخلیه یا جراحی; سوند"},

  {id: 79, views: 1, type: "bioMed", fav: false, name: "Cavity", meaning: "حفره"},

  {id: 80, views: 1, type: "bioMed", fav: false, name: "Component", meaning: "مولفه; جزء"},

  {id: 81, views: 1, type: "bioMed", fav: false, name: "Concentration", meaning: "تمرکز; غلظت"},

  {id: 82, views: 1, type: "bioMed", fav: false, name: "Concentric", meaning: "متحدالمرکز"},

  {id: 83, views: 1, type: "bioMed", fav: false, name: "Constituent", meaning: "تشکیل دهنده"},

  {id: 84, views: 1, type: "bioMed", fav: false, name: "Constitute", meaning: "سازنده; تشکیل"},

  {id: 85, views: 1, type: "bioMed", fav: false, name: "Context", meaning: "متن نوشته; چهار چوب"},

  {id: 86, views: 1, type: "bioMed", fav: false, name: "Core", meaning: "هسته"},

  {id: 87, views: 1, type: "bioMed", fav: false, name: "Corresponding", meaning: "متناظر; مربوطه"},

  {id: 88, views: 1, type: "bioMed", fav: false, name: "Course", meaning: "دوره; مسیر"},

  {id: 89, views: 1, type: "bioMed", fav: false, name: "Critically", meaning: "انتقادی"},

  {id: 90, views: 1, type: "bioMed", fav: false, name: "Depicted", meaning: "به تصویر کشیده شده; ترسیم شده"},

  {id: 91, views: 1, type: "bioMed", fav: false, name: "Diagnosis", meaning: "تشخیص"},

  {id: 92, views: 1, type: "bioMed", fav: false, name: "Distinctly", meaning: "مجزا"},

  {id: 93, views: 1, type: "bioMed", fav: false, name: "Disturbance", meaning: "آشفتگی; اختلال"},

  {id: 94, views: 1, type: "bioMed", fav: false, name: "Due to", meaning: "به واسطه; به دلیل"},

  {id: 95, views: 1, type: "bioMed", fav: false, name: "Efflux", meaning: "جریان"},

  {id: 96, views: 1, type: "bioMed", fav: false, name: "Elbow", meaning: "آرنج"},

  {id: 97, views: 1, type: "bioMed", fav: false, name: "Encased", meaning: "محصور شده"},

  {id: 98, views: 1, type: "bioMed", fav: false, name: "Encountered", meaning: "مواجه شده"},

  {id: 99, views: 1, type: "bioMed", fav: false, name: "Equilibrium", meaning: "تعادل"},

  {id: 100, views: 1, type: "bioMed", fav: false, name: "Establish", meaning: "تاسيس كردن; ایجاد"},

  {id: 101, views: 1, type: "bioMed", fav: false, name: "Extrudes", meaning: "از قالب دراوردن; بیرون انداختن"},

  {id: 102, views: 1, type: "bioMed", fav: false, name: "Far less", meaning: "خیلی کمتر; مراتب کمتر"},

  {id: 103, views: 1, type: "bioMed", fav: false, name: "Generic", meaning: "عمومی"},

  {id: 104, views: 1, type: "bioMed", fav: false, name: "Glance", meaning: "نگاه"},

  {id: 105, views: 1, type: "bioMed", fav: false, name: "Ignored", meaning: "نادیده گرفته شد"},

  {id: 106, views: 1, type: "bioMed", fav: false, name: "Imbalance", meaning: "عدم تعادل"},

  {id: 107, views: 1, type: "bioMed", fav: false, name: "In exchange for", meaning: "به جای; در ازای"},

  {id: 108, views: 1, type: "bioMed", fav: false, name: "Inability", meaning: "عجز; ناتوانی"},

  {id: 109, views: 1, type: "bioMed", fav: false, name: "Indication", meaning: "نشانه"},

  {id: 110, views: 1, type: "bioMed", fav: false, name: "Infection", meaning: "عفونت"},

  {id: 111, views: 1, type: "bioMed", fav: false, name: "Innervated", meaning: "درون ریز"},

  {id: 112, views: 1, type: "bioMed", fav: false, name: "Inrush", meaning: "ازدحام سوی درون"},

  {id: 113, views: 1, type: "bioMed", fav: false, name: "Instrument", meaning: "ابزار"},

  {id: 114, views: 1, type: "bioMed", fav: false, name: "Instrumentation", meaning: "ابزار دقیق; ابزار"},

  {id: 115, views: 1, type: "bioMed", fav: false, name: "Intensive-care monitoring", meaning: "نظارت بر مراقبت های ویژه"},

  {id: 116, views: 1, type: "bioMed", fav: false, name: "Isolation", meaning: "انزوا"},

  {id: 117, views: 1, type: "bioMed", fav: false, name: "Latencies", meaning: "مرحله پنهانی; دوره ی کمون; وضعیت آرام; دوره عکس العمل"},

  {id: 118, views: 1, type: "bioMed", fav: false, name: "Leads to", meaning: "منجر به"},

  {id: 119, views: 1, type: "bioMed", fav: false, name: "Lengthwise", meaning: "از طول; از درازا"},

  {id: 120, views: 1, type: "bioMed", fav: false, name: "Loose bundles", meaning: "بسته های گشاد"},

  {id: 121, views: 1, type: "bioMed", fav: false, name: "Maintain", meaning: "حفظ"},

  {id: 122, views: 1, type: "bioMed", fav: false, name: "Manifest", meaning: "اشاره کردن"},

  {id: 123, views: 1, type: "bioMed", fav: false, name: "Margin", meaning: "لبه; حاشیه"},

  {id: 124, views: 1, type: "bioMed", fav: false, name: "Membrane", meaning: "غشاء"},

  {id: 125, views: 1, type: "bioMed", fav: false, name: "Musculoskeletal", meaning: "اسکلتی-عضلانی"},

  {id: 126, views: 1, type: "bioMed", fav: false, name: "Nanobioscience", meaning: "نانو علوم زیستی"},

  {id: 127, views: 1, type: "bioMed", fav: false, name: "Net result", meaning: "نتیجه ی خالص"},

  {id: 128, views: 1, type: "bioMed", fav: false, name: "Neurotransmitters", meaning: "انتقال دهنده های عصبی"},

  {id: 129, views: 1, type: "bioMed", fav: false, name: "Nutrient", meaning: "مواد مغذی"},

  {id: 130, views: 1, type: "bioMed", fav: false, name: "Organism", meaning: "ارگانیسم"},

  {id: 131, views: 1, type: "bioMed", fav: false, name: "Oxygenation", meaning: "اکسیژن رسانی"},

  {id: 132, views: 1, type: "bioMed", fav: false, name: "Palm", meaning: "کف دست"},

  {id: 133, views: 1, type: "bioMed", fav: false, name: "Panel", meaning: "قطعه"},

  {id: 134, views: 1, type: "bioMed", fav: false, name: "Paradoxical", meaning: "متناقض"},

  {id: 135, views: 1, type: "bioMed", fav: false, name: "Pathologic", meaning: "وابسته به اسیبشناسی"},

  {id: 136, views: 1, type: "bioMed", fav: false, name: "Penetrate", meaning: "نفوذ"},

  {id: 137, views: 1, type: "bioMed", fav: false, name: "Peripheral", meaning: "پیرامونی; محیطی"},

  {id: 138, views: 1, type: "bioMed", fav: false, name: "Phenomena", meaning: "پدیده ها"},

  {id: 139, views: 1, type: "bioMed", fav: false, name: "Pioneering", meaning: "پیشگام"},

  {id: 140, views: 1, type: "bioMed", fav: false, name: "Plot", meaning: "توطئه; نقشه"},

  {id: 141, views: 1, type: "bioMed", fav: false, name: "Predominant", meaning: "غالب"},

  {id: 142, views: 1, type: "bioMed", fav: false, name: "Process", meaning: "روند; فرایند"},

  {id: 143, views: 1, type: "bioMed", fav: false, name: "Qualitative", meaning: "کیفی"},

  {id: 144, views: 1, type: "bioMed", fav: false, name: "Quantitive measurements", meaning: "اندازه گیری های کمّی; اندازه گیری تدریجی"},

  {id: 145, views: 1, type: "bioMed", fav: false, name: "Readily", meaning: "به راحتی; آسانی"},

  {id: 146, views: 1, type: "bioMed", fav: false, name: "Refractory", meaning: "نسوز; مقاوم"},

  {id: 147, views: 1, type: "bioMed", fav: false, name: "Relaxed posture", meaning: "حالت آرامش"},

  {id: 148, views: 1, type: "bioMed", fav: false, name: "Representation", meaning: "نمایندگی"},

  {id: 149, views: 1, type: "bioMed", fav: false, name: "Requires", meaning: "نیاز دارد"},

  {id: 150, views: 1, type: "bioMed", fav: false, name: "Schematic", meaning: "الگو وار; نموداری; شماتیک"},

  {id: 151, views: 1, type: "bioMed", fav: false, name: "Schematic representation", meaning: "نمایش شماتیک"},

  {id: 152, views: 1, type: "bioMed", fav: false, name: "Selective", meaning: "انتخابی"},

  {id: 153, views: 1, type: "bioMed", fav: false, name: "Semipermeable", meaning: "نیمه نفوذپذیر"},

  {id: 154, views: 1, type: "bioMed", fav: false, name: "Sensed", meaning: "احساس"},

  {id: 155, views: 1, type: "bioMed", fav: false, name: "Setting", meaning: "تنظیم، تنظیمات"},

  {id: 156, views: 1, type: "bioMed", fav: false, name: "Sites", meaning: "مکان"},

  {id: 157, views: 1, type: "bioMed", fav: false, name: "Specification", meaning: "مشخصات"},

  {id: 158, views: 1, type: "bioMed", fav: false, name: "Strip-chart", meaning: "نمودار نوار دار; نوار نمودار"},

  {id: 159, views: 1, type: "bioMed", fav: false, name: "Susceptible", meaning: "حساس است"},

  {id: 160, views: 1, type: "bioMed", fav: false, name: "Synchronously", meaning: "همزمان"},

  {id: 161, views: 1, type: "bioMed", fav: false, name: "Task", meaning: "وظیفه"},

  {id: 162, views: 1, type: "bioMed", fav: false, name: "Trace", meaning: "پی گیری; ردیابی"},

  {id: 163, views: 1, type: "bioMed", fav: false, name: "Traces", meaning: "ردپاها; آثار"},

  {id: 164, views: 1, type: "bioMed", fav: false, name: "Trend", meaning: "روند"},

  {id: 165, views: 1, type: "bioMed", fav: false, name: "Triggered", meaning: "باعث شده"},

  {id: 166, views: 1, type: "bioMed", fav: false, name: "Trough", meaning: "از طریق"},

  {id: 167, views: 1, type: "bioMed", fav: false, name: "Twitch", meaning: "چرخش"},

  {id: 168, views: 1, type: "bioMed", fav: false, name: "Tympanic", meaning: "بشکل طبل مانند; صماخ مانند"},

  {id: 169, views: 1, type: "bioMed", fav: false, name: "Typically", meaning: "معمولا"},

  {id: 170, views: 1, type: "bioMed", fav: false, name: "Undergoing", meaning: "در حال انجام"},

  {id: 171, views: 1, type: "bioMed", fav: false, name: "Uniform", meaning: "یکنواخت"},

  {id: 172, views: 1, type: "bioMed", fav: false, name: "Upset", meaning: "ناراحت"},

  {id: 173, views: 1, type: "bioMed", fav: false, name: "Upstroke", meaning: "فراز، صعودی"},

  {id: 174, views: 1, type: "bioMed", fav: false, name: "Velocity", meaning: "سرعت"},

  {id: 175, views: 1, type: "bioMed", fav: false, name: "Via", meaning: "از طریق"},

  {id: 176, views: 1, type: "bioMed", fav: false, name: "Volitional", meaning: "ارادی"},

  {id: 177, views: 1, type: "bioMed", fav: false, name: "Well-being", meaning: "تندرستی; رفاه"},

  {id: 178 ,views: 1, type: "mathSym", fav: false, name: "correspondence", meaning: "تشابه"},

  {id: 179 ,views: 1, type: "mathSym", fav: false, name: "transcendental", meaning: "غیر جبری"},

  {id: 180 ,views: 1, type: "mathSym", fav: false, name: "die" ,synonym: "pl. dice"},

  {id: 181 ,views: 1, type: "mathSym", fav: false, name: "fair" ,synonym: "unbiased"},

  {id: 182 ,views: 1, type: "mathSym", fav: false, name: "biased" ,synonym: "loaded"},

  {id: 183 ,views: 1, type: "mathSym", fav: false, name: "geometric progression", meaning: "پیشرفت هندسی"},

  {id: 184 ,views: 1, type: "mathSym", fav: false, name: "arithmetic progression", meaning: "پیشرفت حسابی"},

  {id: 185 ,views: 1, type: "mathSym", fav: false, name: "diverge", meaning: "واگرایی"},

  {id: 186 ,views: 1, type: "mathSym", fav: false, name: "criterion", meaning: "ملاک"},

  {id: 187 ,views: 1, type: "mathSym", fav: false, name: "approach", meaning: "رویکرد; رهنده"},

  {id: 188 ,views: 1, type: "mathSym", fav: false, name: "PDE" ,synonym: "partial differential equation"},

  {id: 189 ,views: 1, type: "mathSym", fav: false, name: "bounded", meaning: "محدود; کراندار"},

  {id: 190 ,views: 1, type: "mathSym", fav: false, name: "cosh(x)" ,synonym: "hyperbolic cosine x"},

  {id: 191 ,views: 1, type: "mathSym", fav: false, name: "theorem", meaning: "قضیه"},

  {id: 192 ,views: 1, type: "mathSym", fav: false, name: "t.f.a.e." ,synonym: "the following are equivalent"},

  {id: 193 ,views: 1, type: "mathSym", fav: false, name: "reduce to", meaning: "کاهش به"},

  {id: 194 ,views: 1, type: "mathSym", fav: false, name: "corollary", meaning: "نتیجه; نتیجه فرعی"},

  {id: 195 ,views: 1, type: "mathSym", fav: false, name: "conjectre", meaning: "حدس"},

  {id: 196 ,views: 1, type: "mathSym", fav: false, name: "axiom", meaning: "اصل; اصل موضوع"},

  {id: 197 ,views: 1, type: "mathSym", fav: false, name: "denote", meaning: "مشخص کن"},

  {id: 198 ,views: 1, type: "mathSym", fav: false, name: "S <=> T " ,synonym: "S is equivalent to T; S iff T"},

  {id: 199 ,views: 1, type: "mathSym", fav: false, name: "S => T" ,synonym: "S implies T; if S then T"},

  {id: 200 ,views: 1, type: "mathSym", fav: false, name: "relation", meaning: "رابطه"},

  {id: 201 ,views: 1, type: "mathSym", fav: false, name: "quadruple", meaning: "چهارگوش; چهار برابر"},

  {id: 202 ,views: 1, type: "mathSym", fav: false, name: "intersection", meaning: "تقاطع"},

  {id: 203 ,views: 1, type: "mathSym", fav: false, name: "surjective", meaning: "پوشا"},

  {id: 204 ,views: 1, type: "mathSym", fav: false, name: "A × B" ,synonym: "the product of (the sets) A and B; A times B"},
  
  {id: 205 ,views: 1, type: "mathSym", fav: false, name: "{x | . . .}" ,synonym: "the set of all x such that . . ."},

  {id: 206 ,views: 1, type: "mathSym", fav: false, name: "C " ,synonym: "the set of all complex numbers"},

  {id: 207 ,views: 1, type: "mathSym", fav: false, name: "Q " ,synonym: "the set of all rational numbers"},

  {id: 208 ,views: 1, type: "mathSym", fav: false, name: "R " ,synonym: "the set of all reall numbers"},

  {id: 209 ,views: 1, type: "mathSym", fav: false, name: "symmetric", meaning: "متقارن"},

  {id: 210 ,views: 1, type: "mathSym", fav: false, name: "scalar", meaning: "اسکالر; عددی"},

  {id: 211 ,views: 1, type: "mathSym", fav: false, name: "kernel", meaning: "هسته"},

  {id: 212 ,views: 1, type: "mathSym", fav: false, name: "isometry", meaning: "همسان; ایزومتری"},

  {id: 213 ,views: 1, type: "mathSym", fav: false, name: "eigenvalue", meaning: "مقدار خاص; ارزش ویژه"},

  {id: 214 ,views: 1, type: "mathSym", fav: false, name: "coordinate", meaning: "مختصات"},

  {id: 215 ,views: 1, type: "mathSym", fav: false, name: "a, b (mod m) " ,synonym: "a is congruent to b modulo m"},

  {id: 216 ,views: 1, type: "mathSym", fav: false, name: "Congruences", meaning: "تناسب"},

  {id: 217 ,views: 1, type: "mathSym", fav: false, name: "precisely", meaning: "دقیقاً"},

  {id: 218 ,views: 1, type: "mathSym", fav: false, name: "multiplicities", meaning: "تعدد"},

  {id: 219 ,views: 1, type: "mathSym", fav: false, name: "complex", meaning: "پیچیده"},

  {id: 220 ,views: 1, type: "mathSym", fav: false, name: "coefficient", meaning: "ضریب"},

  {id: 221 ,views: 1, type: "mathSym", fav: false, name: "discriminant", meaning: "تفکیک کننده"},

  {id: 222 ,views: 1, type: "mathSym", fav: false, name: "(m,n)" ,synonym: "the binomial coefficient; n over m"},

  {id: 223 ,views: 1, type: "mathSym", fav: false, name: "b = qa + r " ,synonym: "The integer q (resp., r) is the quotient (resp., the remainder) of the division of b by a."},

  {id: 224 ,views: 1, type: "mathSym", fav: false, name: "notation", meaning: "نشانه گذاری"},

  {id: 225 ,views: 1, type: "mathSym", fav: false, name: "denominator", meaning: "مخرج"},

  {id: 226 ,views: 1, type: "mathSym", fav: false, name: "quotient", meaning: "خارج قسمت"},

  {id: 227 ,views: 1, type: "mathSym", fav: false, name: "divisibility", meaning: "تقسیم پذیری"},

  {id: 228 ,views: 1, type: "mathSym", fav: false, name: "ppcm" ,synonym: "plus petit commun multiple"},

  {id: 229 ,views: 1, type: "mathSym", fav: false, name: "pgcd" ,synonym: "plus grand commun diviseur"},

  {id: 230 ,views: 1, type: "mathSym", fav: false, name: "gcd" ,synonym: "greatest common divisor"},

  {id: 231 ,views: 1, type: "mathSym", fav: false, name: "lcm" ,synonym: "least common multiple"},

  {id: 237 ,views: 1, type: "bioMed", fav: false, name: "standard - n", synonym: " a level of quality or behior"},

  {id: 238 ,views: 1, type: "bioMed", fav: false, name: "decade - n", synonym: " a period of 10 years"},

  {id: 239 ,views: 1, type: "bioMed", fav: false, name: "rotation - n", synonym: " turning in a circular direction"},

  {id: 240 ,views: 1, type: "bioMed", fav: false, name: "variability - n", synonym: " the state of changing often"},

  {id: 241 ,views: 1, type: "bioMed", fav: false, name: "author - n", synonym: " a writer of a book or report"},

  {id: 242 ,views: 1, type: "bioMed", fav: false, name: "view - n", synonym: " the ability to see something or to be seen"},

  {id: 243 ,views: 1, type: "bioMed", fav: false, name: "parameter - n", synonym: " a limit that controls the way something is done"},

  {id: 244 ,views: 1, type: "bioMed", fav: false, name: "geology - n", synonym: " the study of rocks and soil and the physical structure of the Earth"},
  
  {id: 245 ,views: 1, type: "bioMed", fav: false, name: "boring - adj", synonym: " not interesting"},

  {id: 246 ,views: 1, type: "bioMed", fav: false, name: "option - n", synonym: " a choice or possibility"},

  {id: 247 ,views: 1, type: "bioMed", fav: false, name: "fungus- n", synonym: " a type of plant without leaves that gets its food from other living or decaying things"},

  {id: 248 ,views: 1, type: "bioMed", fav: false, name: "ecosystem -n", synonym: " a biological community of interacting organisms and their physical environment"},
  
  {id: 249 ,views: 1, type: "bioMed", fav: false, name: "drastic - adj", synonym: " sudden or extreme"},

  {id: 250 ,views: 1, type: "bioMed", fav: false, name: "recycle -v", synonym: " to reuse something that has been used before often in another way"},
  
  {id: 251 ,views: 1, type: "bioMed", fav: false, name: "strain - n", synonym: " a type of disease or plant"},

  {id: 252 ,views: 1, type: "bioMed", fav: false, name: "enzyme - n", synonym: " a chemical substance produced by living cells that makes particular chemical"},
  
  {id: 253 ,views: 1, type: "mathSym", fav: false, name: "r subscript i", synonym: "r lower i; !=superscript", meaning: "اندیس"},

  {id: 254 ,views: 1, type: "bioMed", fav: false, name: "respond - v", synonym: " say or react to something in reply; reactions happen in animals and plants"},

  {id: 255 ,views: 1, type: "bioMed", fav: false, name: "confident - adj", synonym: " having a feeling or belief that you can do something well or succeed at something"},
  
  {id: 256 ,views: 1, type: "bioMed", fav: false, name: "coincide - v", synonym: " to happen at the same time as something else"},

  {id: 257 ,views: 1, type: "bioMed", fav: false, name: "lockdown - n", synonym: " a situation in which people are not allowed to enter or leave a building or area because of an emergency"},
  
  {id: 258 ,views: 1, type: "bioMed", fav: false, name: "outbreak - n", synonym: " the sudden occurrence of war or disease"},

  {id: 259 ,views: 1, type: "bioMed", fav: false, name: "specific - adj", synonym: " relating to one thing and not others"},

  {id: 260 ,views: 1, type: "bioMed", fav: false, name: "dramatic - adj", synonym: " very sudden or noticeable"},

  {id: 261 ,views: 1, type: "bioMed", fav: false, name: "mask - n", synonym: " something that covers part of all of the face"},

  {id: 262 ,views: 1, type: "bioMed", fav: false, name: "artificial intelligence - n", synonym: " the development of computer systems with the ability to perform work that normally requires human intelligence"},

  {id: 263 ,views: 1, type: "bioMed", fav: false, name: "channel -n", synonym: " a way of communicating or getting something done"},
  
  {id: 264 ,views: 1, type: "bioMed", fav: false, name: "surveillance - n", synonym: " the activity of watching people carefully; often secretly; especially by an army or police force"},
  
  {id: 265 ,views: 1, type: "bioMed", fav: false, name: "ensure - v", synonym: " to make sure something is done of happens"},

  {id: 266, views: 1, type: "mathSym", fav: false, name: "exclusive", meaning: "انحصاری"},

  {id: 267, views: 1, type: "mathSym", fav: false, name: "mutually", meaning: "متقابلا"},

  {id: 268, views: 1, type: "bioMed", fav: false, name: "stimulate", meaning: "تحریک"},

  {id: 269, views: 1, type: "bioMed", fav: false, name: "generic", meaning: "عمومی"},

  {id: 270, views: 1, type: "bioMed", fav: false, name: "facilitate", meaning: "تسهیل کردن"},

  {id: 271, views: 1, type: "bioMed", fav: false, name: "criterion", meaning: "ملاک; معیار"},

  {id: 272, views: 1, type: "bioMed", fav: false, name: "axis", meaning: "محور"},

  {id: 273, views: 1, type: "bioMed", fav: false, name: "thesis", meaning: "پایان نامه"},

  {id: 274, views: 1, type: "bioMed", fav: false, name: "soma", meaning: "جسم سلول"},

  {id: 275, views: 1, type: "idioms", fav: false, name: "to get in/to get on", synonym: "to enter or to board a vehicle"},

  {id: 276, views: 1, type: "idioms", fav: false, name: "to get out of/to get off", synonym: "to leave or to descend from a vehicle. To get out of is used for cars; to get off is used for all other forms of transportation."},

  {id: 277, views: 1, type: "idioms", fav: false, name: "to put on", synonym: "to place on oneself (usually said of clothes) (S)"},

  {id: 278, views: 1, type: "idioms", fav: false, name: "to take off", synonym: "to remove (usually said of clothes) (S)"},

  {id: 279, views: 1, type: "idioms", fav: false, name: "to call up", synonym: "to telephone (also to give some one a call) (S) To call can be used instead of to call up, as in the first example below."},

  {id: 280, views: 1, type: "idioms", fav: false, name: "to turn on", synonym: "to start or cause to function (also to switch on) (S)"},

  {id: 281, views: 1, type: "idioms", fav: false, name: "to turn off", synonym: "to cause to stop functioning (also to switch off, to shut off) (S) Turn on and turn off, as well as their related forms, are used for things that flow, such as electricity, water, gas, etc."}, 

  {id: 282, views: 1, type: "idioms", fav: false, name: "right away", synonym: "very soon; immediately (also at once)"},

  {id: 283, views: 1, type: "idioms", fav: false, name: "to pick up", synonym: "to lift form the floor, table, etc., with one's fingers (S)"},

  {id: 284, views: 1, type: "idioms", fav: false, name: "sooner or later", synonym: "eventually, after a period of time"},

  {id: 285, views: 1, type: "idioms", fav: false, name: "to get up", synonym: "to arise, to rise from a bed; to make someone arise (S) For the last definition a noun phrase must separate the verb and particle."},

  {id: 286, views: 1, type: "idioms", fav: false, name: "at first", synonym: "in the beginning, originally"},

  {id: 287, views: 1, type: "idioms", fav: false, name: "to dress up", synonym: "to wear formal clothes, to dress very nicely"},

  {id: 288, views: 1, type: "idioms", fav: false, name: "at last", synonym: "finally, after a long time."},

  {id: 289, views: 1, type: "idioms", fav: false, name: "as usual", synonym: "as is the general case, as is typical"},

  {id: 290, views: 1, type: "idioms", fav: false, name: "to find out", synonym: "get information about, to determine (S) This idiom is separable only when a pronoun is used, as in the second example."},

  {id: 291, views: 1, type: "idioms", fav: false, name: "to look at", synonym: "give one's attention to; to watch"},

  {id: 292, views: 1, type: "idioms", fav: false, name: "to look for", synonym: "to try to find, to search for An adverb phrase such as all over can be put between the verb and preposition, as in the second example, however, the idiom cannot be separated by a noun or pronoun."}, 

  {id: 293, views: 1, type: "idioms", fav: false, name: "all right", synonym: "acceptable, fine; yes, okay This idiom can also be spelled alright in informal usage."},

  {id: 294, views: 1, type: "idioms", fav: false, name: "all along", synonym: "all the time, from the beginning (without change)"},

  {id: 295, views: 1, type: "idioms", fav: false, name: "little by little", synonym: "gradually, slowly (also step by step)"},

  {id: 296, views: 1, type: "idioms", fav: false, name: "to tire out", synonym: "to make very weary due to difficult conditions or hard effort (also to wear out) (S)"},

  {id: 297, views: 1, type: "idioms", fav: false, name: "to call on", synonym: "to ask for a response from; to visit (also to drop in on)"},

  {id: 298, views: 1, type: "idioms", fav: false, name: "never mind", synonym: "don't be concerned about it; ignore what was just said"},

  {id: 299, views: 1, type: "idioms", fav: false, name: "to pick out", synonym: "to choose, to select (S)"},

  {id: 300, views: 1, type: "idioms", fav: false, name: "to take one's time", synonym: "to do without rush, not to hurry This idiom is often used in the imperative form. (See the first example)"},

  {id: 301, views: 1, type: "idioms", fav: false, name: "to talk over", synonym: "to discuss or consider a situation with others (S)"},

  {id: 302, views: 1, type: "idioms", fav: false, name: "to lie down", synonym: "to place oneself in a flat position, to recline"},

  {id: 303, views: 1, type: "idioms", fav: false, name: "to stand up", synonym: "to rise from a sitting or lying position (also to get up)"},

  {id: 304, views: 1, type: "idioms", fav: false, name: "to sit down", synonym: "to be seated (also take a seat)"},

  {id: 305, views: 1, type: "idioms", fav: false, name: "all (day, week, month, year) long", synonym: "the entire day, week, month, year"},

  {id: 306, views: 1, type: "idioms", fav: false, name: "by oneself", synonym: "alone, without assistance"},

  {id: 307, views: 1, type: "idioms", fav: false, name: "on purpose", synonym: "for a reason, deliberately This idiom is usually used when someone does something wrong or unfair"},

  {id: 308, views: 1, type: "idioms", fav: false, name: "to get along with", synonym: "to associate or work well with; to succeed or manage in doing (also to get on with)"},

  {id: 309, views: 1, type: "idioms", fav: false, name: "to make a difference (to)", synonym: "to be of importance (to), to affect This idiom is often used with adjectives to show the degree of importance"},

  {id: 310, views: 1, type: "idioms", fav: false, name: "to take out", synonym: "to remove, to extract (S); to go on a date with (S) (also to go out with)"},

  {id: 311, views: 1, type: "idioms", fav: false, name: "to take part in", synonym: "to be involved in, to participate in (also to be in on"},

  {id: 312, views: 1, type: "idioms", fav: false, name: "at all", synonym: "to any degree (also in the least)"},

  {id: 313, views: 1, type: "idioms", fav: false, name: "to look up", synonym: "to locate information in a directory, dictionary, book, etc. (S)"},

  {id: 314, views: 1, type: "idioms", fav: false, name: "to wait on", synonym: "to serve in a store or restaurant"},

  {id: 315, views: 1, type: "idioms", fav: false, name: "at least", synonym: "a minimum of, no fewer (or less) than"},

  {id: 316, views: 1, type: "idioms", fav: false, name: "so far", synonym: "until now, until the present time (also up to now, as of yet) This idiom is usually used with the present perfect tense."},

  {id: 317, views: 1, type: "idioms", fav: false, name: "to take a walk, stroll, hike, etc.", synonym: "to go for a walk, stroll, hike, etc. A stroll involves slow, easy walking; a hike involves serious, strenuous walking"},

  {id: 318, views: 1, type: "idioms", fav: false, name: "to take a trip", synonym: "to go on a journey, to travel"},

  {id: 319, views: 1, type: "idioms", fav: false, name: "to try on", synonym: "to wear clothes to check the style or fit before buying (S)"},

  {id: 320, views: 1, type: "idioms", fav: false, name: "to think over", synonym: "to consider carefully before deciding (S)"},

  {id: 321, views: 1, type: "idioms", fav: false, name: "to take place", synonym: "to occur, to happen according to plan"},

  {id: 322, views: 1, type: "idioms", fav: false, name: "to put away", synonym: "to remove from slight, to put in the proper place (S)"},

  {id: 323, views: 1, type: "idioms", fav: false, name: "to look out", synonym: "to be careful or cautious (also to watch out) Both of these idioms can occur with the preposition for."},

  {id: 324, views: 1, type: "idioms", fav: false, name: "to shake hands", synonym: "to exchange greetings by clasping hands"},

  {id: 325, views: 1, type: "idioms", fav: false, name: "to get back", synonym: "to return (S)"},

  {id: 326, views: 1, type: "idioms", fav: false, name: "to catch cold", synonym: "to become sick with a cold of the nose for throat"},

  {id: 327, views: 1, type: "idioms", fav: false, name: "to get over", synonym: "to recover from an illness; to accept a loss or sorrow"},

  {id: 328, views: 1, type: "idioms", fav: false, name: "to make up one's mind", synonym: "to reach a decision, to decide finally"},

  {id: 328, views: 1, type: "idioms", fav: false, name: "to change one's mind", synonym: "to alter one's decision or opinion"},

  {id: 330 ,views: 1  ,type: "TEproj", fav: false, name: "reticular", meaning: "مشبک"},

  {id: 331 ,views: 1  ,type: "TEproj", fav: false, name: "excitatory", meaning: "تحریک کننده; تحریک"},

  {id: 332 ,views: 1  ,type: "TEproj", fav: false, name: "agitation", meaning: "تحریک"},

  {id: 333 ,views: 1  ,type: "TEproj", fav: false, name: "secretion", meaning: "ترشح"},

  {id: 334 ,views: 1  ,type: "TEproj", fav: false, name: "caudate", meaning: "دمی"},

  {id: 335 ,views: 1  ,type: "TEproj", fav: false, name: "dome", meaning: "گنبد"},

  {id: 336 ,views: 1  ,type: "TEproj", fav: false, name: "contractions", meaning: "انقباضات"},

  {id: 337 ,views: 1  ,type: "TEproj", fav: false, name: "diminished", meaning: "کاسته; کاهش"},

  {id: 338 ,views: 1  ,type: "TEproj", fav: false, name: "dementia", meaning: "زوال عقل"},

  {id: 339 ,views: 1  ,type: "TEproj", fav: false, name: "cerebral", meaning: "مغزی"},

  {id: 340 ,views: 1  ,type: "TEproj", fav: false, name: "alkalosis", meaning: "قلیایی"},

  {id: 341 ,views: 1  ,type: "TEproj", fav: false, name: "predisposition", meaning: "تمایل; استعداد"},

  {id: 342 ,views: 1  ,type: "TEproj", fav: false, name: "hereditary", meaning: "ارثی"},

  {id: 343 ,views: 1  ,type: "TEproj", fav: false, name: "deficits", meaning: "کسری"},

  {id: 344 ,views: 1  ,type: "TEproj", fav: false, name: "precursor", meaning: "پیشرو"},

  {id: 345 ,views: 1  ,type: "TEproj", fav: false, name: "approximately", meaning: "تقریباً; حدود"},

  {id: 346 ,views: 1  ,type: "TEproj", fav: false, name: "neurodegenerative", meaning: "عصبی"},

  {id: 347 ,views: 1  ,type: "TEproj", fav: false, name: "visuospatial", meaning: "بصری; دیداری فضایی"},

  {id: 348 ,views: 1  ,type: "TEproj", fav: false, name: "anterior", meaning: "قدامی"},

  {id: 349 ,views: 1  ,type: "TEproj", fav: false, name: "lesions", meaning: "ضایعات"},

  {id: 350 ,views: 1  ,type: "TEproj", fav: false, name: "rigidity", meaning: "سختی; سفتی"},

  {id: 351 ,views: 1  ,type: "TEproj", fav: false, name: "dissociation", meaning: "تفکیک"},

  {id: 352 ,views: 1  ,type: "TEproj", fav: false, name: "incoherent", meaning: "ناهماهنگ; نامنسجم"},

  {id: 353 ,views: 1  ,type: "TEproj", fav: false, name: "persecution", meaning: "آزار; اذیت"},

  {id: 354 ,views: 1  ,type: "TEproj", fav: false, name: "delusions", meaning: "هذیان"},

  {id: 355 ,views: 1  ,type: "TEproj", fav: false, name: "contentment", meaning: "قناعت; رضایت"},

  {id: 356 ,views: 1  ,type: "TEproj", fav: false, name: "manic", meaning: "جنون"},

  {id: 357 ,views: 1  ,type: "TEproj", fav: false, name: "exhibit", meaning: "نمایش دادن; نمایشگاه"},

  {id: 358 ,views: 1  ,type: "TEproj", fav: false, name: "mania", meaning: "شیدایی"},

  {id: 359 ,views: 1  ,type: "TEproj", fav: false, name: "transmitters", meaning: "فرستنده ها"},

  {id: 360 ,views: 1  ,type: "TEproj", fav: false, name: "reuptake", meaning: "بازگشت مجدد; بازجذب"},

  {id: 361 ,views: 1  ,type: "TEproj", fav: false, name: "cord", meaning: "طناب; بند ناف"},

  {id: 362 ,views: 1  ,type: "TEproj", fav: false, name: "peripheral", meaning: "پیرامونی; محیطی"},

  {id: 363 ,views: 1  ,type: "TEproj", fav: false, name: "epilepsy", meaning: "صرع"},

  {id: 364 ,views: 1  ,type: "TEproj", fav: false, name: "absence", meaning: "غیبت; فقدان"},

  {id: 365 ,views: 1  ,type: "TEproj", fav: false, name: "seizure", meaning: "تشنج"},

  {id: 366 ,views: 1  ,type: "TEproj", fav: false, name: "intensity", meaning: "شدت"},

  {id: 367 ,views: 1  ,type: "TEproj", fav: false, name: "motility", meaning: "تحرک"},

  {id: 368 ,views: 1  ,type: "TEproj", fav: false, name: "deficiency", meaning: "کمبود"},

  {id: 369 ,views: 1  ,type: "TEproj", fav: false, name: "narcolepsy", meaning: "حمله خواب"},

  {id: 370 ,views: 1  ,type: "TEproj", fav: false, name: "circuitry", meaning: "مداری; مدارات"},

  {id: 371 ,views: 1  ,type: "TEproj", fav: false, name: "contextual", meaning: "متنی"},

  {id: 372 ,views: 1  ,type: "TEproj", fav: false, name: "genesis", meaning: "پیدایش"},

  {id: 373 ,views: 1  ,type: "TEproj", fav: false, name: "regulation", meaning: "مقررات"},

  {id: 374 ,views: 1  ,type: "TEproj", fav: false, name: "ureters", meaning: "مجرای ادرار; حالب"},

  {id: 375 ,views: 1  ,type: "TEproj", fav: false, name: "thoracic", meaning: "قفسه سینه ای; قفسه سینه"},

  {id: 376 ,views: 1  ,type: "TEproj", fav: false, name: "proximal", meaning: "نزدیکی"},

  {id: 377 ,views: 1  ,type: "TEproj", fav: false, name: "gallbladder", meaning: "كيسه صفرا"},

  {id: 378 ,views: 1  ,type: "TEproj", fav: false, name: "conversely", meaning: "متقابلا"},

  {id: 379 ,views: 1  ,type: "TEproj", fav: false, name: "visceral", meaning: "احشایی"},

  {id: 380 ,views: 1  ,type: "TEproj", fav: false, name: "cranial", meaning: "جمجمه ای"},

  {id: 381 ,views: 1  ,type: "TEproj", fav: false, name: "sacral", meaning: "خاجی"},

  {id: 382 ,views: 1  ,type: "TEproj", fav: false, name: "pupillary", meaning: "مردمک"},

  {id: 383 ,views: 1  ,type: "TEproj", fav: false, name: "sphincter", meaning: "اسفنکتر"},

  {id: 384 ,views: 1  ,type: "TEproj", fav: false, name: "ciliary", meaning: "مژگانی"},

  {id: 385 ,views: 1  ,type: "TEproj", fav: false, name: "gland", meaning: "غده"},

  {id: 386 ,views: 1  ,type: "TEproj", fav: false, name: "rudimentary", meaning: "ابتدایی"},

  {id: 387 ,views: 1  ,type: "TEproj", fav: false, name: "derived", meaning: "نشات گرفته; مشتق"},

  {id: 388 ,views: 1  ,type: "TEproj", fav: false, name: "primitive", meaning: "اولیه; بدوی"},

  {id: 389 ,views: 1  ,type: "TEproj", fav: false, name: "thorax", meaning: "قفسه سینه"},

  {id: 390 ,views: 1  ,type: "TEproj", fav: false, name: "segment", meaning: "بخش"},

  {id: 391 ,views: 1  ,type: "TEproj", fav: false, name: "conformational", meaning: "تطبیقی"},

  {id: 392 ,views: 1  ,type: "TEproj", fav: false, name: "influx", meaning: "هجوم"},

  {id: 393 ,views: 1  ,type: "TEproj", fav: false, name: "contraction", meaning: "اختصار; انقباض"},

  {id: 394 ,views: 1  ,type: "TEproj", fav: false, name: "protrudes", meaning: "بیرون زده"},

  {id: 395 ,views: 1  ,type: "TEproj", fav: false, name: "permeability", meaning: "نفوذپذیری"},

  {id: 396 ,views: 1  ,type: "TEproj", fav: false, name: "substance", meaning: "ماده"},

  {id: 397 ,views: 1  ,type: "TEproj", fav: false, name: "penetrate", meaning: "نفوذ کردن; نفوذ"},

  {id: 398 ,views: 1  ,type: "TEproj", fav: false, name: "prosthetic", meaning: "پروتز; مصنوعی"},

  {id: 399 ,views: 1  ,type: "TEproj", fav: false, name: "effector", meaning: "مؤثر"},

  {id: 400 ,views: 1  ,type: "TEproj", fav: false, name: "diffusely", meaning: "بطور گسترده; منتشر"},

  {id: 401 ,views: 1  ,type: "TEproj", fav: false, name: "vesicles", meaning: "وزیکول"},

  {id: 402 ,views: 1  ,type: "TEproj", fav: false, name: "varicosities", meaning: "واریس"},

  {id: 403 ,views: 1  ,type: "TEproj", fav: false, name: "diffuse", meaning: "پخش; منتشر"},

  {id: 404 ,views: 1  ,type: "TEproj", fav: false, name: "bulbous", meaning: "برآمده; پیازی"},

  {id: 405 ,views: 1  ,type: "TEproj", fav: false, name: "synthesis", meaning: "سنتز"},

  {id: 406 ,views: 1  ,type: "TEproj", fav: false, name: "stimulated", meaning: "تحریک شده; تحریک"},

  {id: 407 ,views: 1  ,type: "TEproj", fav: false, name: "adjacent", meaning: "مجاور"},

  {id: 408 ,views: 1  ,type: "TEproj", fav: false, name: "innervate", meaning: "داخلی; پی"},

  {id: 409 ,views: 1  ,type: "TEproj", fav: false, name: "junction", meaning: "اتصال"},

  {id: 410 ,views: 1  ,type: "TEproj", fav: false, name: "terminal", meaning: "پایانه; ترمینال"},

  {id: 411 ,views: 1  ,type: "TEproj", fav: false, name: "lipolysis", meaning: "تجزیه"},

  {id: 412 ,views: 1  ,type: "TEproj", fav: false, name: "ducts", meaning: "مجاری; مجرای"},

  {id: 413 ,views: 1  ,type: "TEproj", fav: false, name: "copious", meaning: "فراوان"},

  {id: 414 ,views: 1  ,type: "TEproj", fav: false, name: "apocrine", meaning: "منافق"},

  {id: 415 ,views: 1  ,type: "TEproj", fav: false, name: "pancreatic", meaning: "لوزالمعده"},

  {id: 416 ,views: 1  ,type: "TEproj", fav: false, name: "gastric", meaning: "معده"},

  {id: 417 ,views: 1  ,type: "TEproj", fav: false, name: "submandibular", meaning: "فرعی"},

  {id: 418 ,views: 1  ,type: "TEproj", fav: false, name: "lacrimal", meaning: "اشکی"},

  {id: 419 ,views: 1  ,type: "TEproj", fav: false, name: "nasal", meaning: "بینی"},

  {id: 420 ,views: 1  ,type: "TEproj", fav: false, name: "constricted", meaning: "محدود شده; تنگ شده"},

  {id: 421 ,views: 1  ,type: "TEproj", fav: false, name: "dilated", meaning: "گشاد شده; متسع"},

  {id: 422 ,views: 1  ,type: "TEproj", fav: false, name: "autonomic", meaning: "خودمختار"},

  {id: 423 ,views: 1  ,type: "TEproj", fav: false, name: "clarified", meaning: "روشن شده"},

  {id: 424 ,views: 1  ,type: "TEproj", fav: false, name: "reciprocally", meaning: "متقابلاً"},

  {id: 425 ,views: 1  ,type: "TEproj", fav: false, name: "odoriferous", meaning: "بو; بودار"},

  {id: 426 ,views: 1  ,type: "TEproj", fav: false, name: "axillae", meaning: "زیر بغل"},

  {id: 427 ,views: 1  ,type: "TEproj", fav: false, name: "vasoconstriction", meaning: "انقباض عروق"},

  {id: 428 ,views: 1  ,type: "TEproj", fav: false, name: "alimentary", meaning: "تغذیه ای; مجرای گوارش"},

  {id: 429 ,views: 1  ,type: "TEproj", fav: false, name: "salivary", meaning: "بزاقی"},

  {id: 430 ,views: 1  ,type: "TEproj", fav: false, name: "ligaments", meaning: "رباط ها"},

  {id: 431 ,views: 1  ,type: "TEproj", fav: false, name: "intrinsic", meaning: "ذاتی"},

  {id: 432 ,views: 1  ,type: "TEproj", fav: false, name: "retina", meaning: "شبکیه چشم"},

  {id: 433 ,views: 1  ,type: "TEproj", fav: false, name: "constrict", meaning: "انقباض"},

  {id: 434 ,views: 1  ,type: "TEproj", fav: false, name: "dilate", meaning: "گشاد کردن"},

  {id: 435 ,views: 1  ,type: "TEproj", fav: false, name: "contracts", meaning: "قراردادها"},

  {id: 436 ,views: 1  ,type: "TEproj", fav: false, name: "intestinal", meaning: "روده"},

  {id: 437 ,views: 1  ,type: "TEproj", fav: false, name: "dilation", meaning: "اتساع"},

  {id: 438 ,views: 1  ,type: "TEproj", fav: false, name: "contractile", meaning: "انقباضی"},

  {id: 439 ,views: 1  ,type: "TEproj", fav: false, name: "vasodilation", meaning: "گشاد کردن عروق; تاخیر خون شاهرگ"},

  {id: 440 ,views: 1  ,type: "TEproj", fav: false, name: "gastrointestinal", meaning: "دستگاه گوارش"},

  {id: 441 ,views: 1  ,type: "TEproj", fav: false, name: "gut", meaning: "روده"},

  {id: 442 ,views: 1  ,type: "TEproj", fav: false, name: "consequent", meaning: "نتیجه"},

  {id: 443 ,views: 1  ,type: "TEproj", fav: false, name: "prolonged", meaning: "طولانی مدت"},

  {id: 444 ,views: 1  ,type: "TEproj", fav: false, name: "atony", meaning: "ضعف; سستی"},

  {id: 445 ,views: 1  ,type: "TEproj", fav: false, name: "diameter", meaning: "قطر"},

  {id: 446 ,views: 1  ,type: "TEproj", fav: false, name: "suffices", meaning: "کافی است"},

  {id: 447 ,views: 1  ,type: "TEproj", fav: false, name: "abrogate", meaning: "لغو; نسخ"},

  {id: 448 ,views: 1  ,type: "TEproj", fav: false, name: "medullary", meaning: "مغزی"},

  {id: 449 ,views: 1  ,type: "TEproj", fav: false, name: "excitability", meaning: "تحریک پذیری"},

  {id: 450 ,views: 1  ,type: "TEproj", fav: false, name: "proportions", meaning: "نسبت ها"},

  {id: 451 ,views: 1  ,type: "TEproj", fav: false, name: "basal", meaning: "اساس"},

  {id: 452 ,views: 1  ,type: "TEproj", fav: false, name: "bronchi", meaning: "برونش"},

  {id: 453 ,views: 1  ,type: "TEproj", fav: false, name: "ureter", meaning: "میزنای; حالب"},

  {id: 454 ,views: 1  ,type: "TEproj", fav: false, name: "acute", meaning: "حاد"},

  {id: 455 ,views: 1  ,type: "TEproj", fav: false, name: "propulsion", meaning: "پیشرانش"},

  {id: 456 ,views: 1  ,type: "TEproj", fav: false, name: "arterial", meaning: "شریانی"},

  {id: 457 ,views: 1  ,type: "TEproj", fav: false, name: "vasoconstrictor", meaning: "تنگ کننده عروق"},

  {id: 458 ,views: 1  ,type: "TEproj", fav: false, name: "strenuous", meaning: "شدید"},

  {id: 459 ,views: 1  ,type: "TEproj", fav: false, name: "tract", meaning: "دستگاه"},

  {id: 460 ,views: 1  ,type: "TEproj", fav: false, name: "intramural", meaning: "درونی; داخل"},

  {id: 461 ,views: 1  ,type: "TEproj", fav: false, name: "plexus", meaning: "شبکه"},

  {id: 462 ,views: 1  ,type: "TEproj", fav: false, name: "peristalsis", meaning: "حرکت دودی شکل"},

  {id: 463 ,views: 1  ,type: "TEproj", fav: false, name: "vigorous", meaning: "نیرومند; شدید"},

  {id: 464 ,views: 1  ,type: "TEproj", fav: false, name: "aforementioned", meaning: "فوق الذکر"},

  {id: 465 ,views: 1  ,type: "TEproj", fav: false, name: "extent", meaning: "حد"},

  {id: 466 ,views: 1  ,type: "TEproj", fav: false, name: "secretory", meaning: "ترشحی"},

  {id: 467 ,views: 1  ,type: "TEproj", fav: false, name: "widespread", meaning: "بطور گسترده"},

  {id: 468 ,views: 1  ,type: "TEproj", fav: false, name: "micturition", meaning: "ادرار"},

  {id: 469 ,views: 1  ,type: "TEproj", fav: false, name: "excretion", meaning: "دفع"},

  {id: 470 ,views: 1  ,type: "TEproj", fav: false, name: "defecation", meaning: "دفع مدفوع; اجابت مزاج"},

  {id: 471 ,views: 1  ,type: "TEproj", fav: false, name: "rectum", meaning: "راست روده; مقعد"},

  {id: 472 ,views: 1  ,type: "TEproj", fav: false, name: "portion", meaning: "بخش"},

  {id: 473 ,views: 1  ,type: "TEproj", fav: false, name: "transmitted", meaning: "منتقل شده"},

  {id: 474 ,views: 1  ,type: "TEproj", fav: false, name: "enhanced", meaning: "پیشرفته"},

  {id: 475 ,views: 1  ,type: "TEproj", fav: false, name: "manyfold", meaning: "چند برابر"},

  {id: 476 ,views: 1  ,type: "TEproj", fav: false, name: "demonstrated", meaning: "نشان داده شده"},

  {id: 477 ,views: 1  ,type: "TEproj", fav: false, name: "partially", meaning: "تا اندازه ای; بخشی"},

  {id: 478 ,views: 1  ,type: "TEproj", fav: false, name: "compensation", meaning: "جبران"},

  {id: 479 ,views: 1  ,type: "TEproj", fav: false, name: "stellate", meaning: "پرتودار"},

  {id: 480 ,views: 1  ,type: "TEproj", fav: false, name: "supersensitization", meaning: "ابر حساس شدن"},

  {id: 481 ,views: 1  ,type: "TEproj", fav: false, name: "vasculature", meaning: "عروق"},

  {id: 482 ,views: 1  ,type: "TEproj", fav: false, name: "endocrine", meaning: "غدد درون ریز; غدد"},

  {id: 483 ,views: 1  ,type: "TEproj", fav: false, name: "vertebrates", meaning: "مهره داران"},

  {id: 484 ,views: 1  ,type: "TEproj", fav: false, name: "contemporary", meaning: "امروزی; معاصر"},

  {id: 485 ,views: 1  ,type: "TEproj", fav: false, name: "hypotension", meaning: "افت فشار خون"},

  {id: 486 ,views: 1  ,type: "TEproj", fav: false, name: "overshadow", meaning: "تحت الشعاع قرار دادن"},

  {id: 487 ,views: 1  ,type: "TEproj", fav: false, name: "seldom", meaning: "به ندرت"},

  {id: 488 ,views: 1  ,type: "TEproj", fav: false, name: "antimuscarinic", meaning: "ضد قارچ"},

  {id: 489 ,views: 1  ,type: "TEproj", fav: false, name: "potentiating", meaning: "تقویت کننده; مهار"},

  {id: 490 ,views: 1  ,type: "TEproj", fav: false, name: "involuntary", meaning: "غیر ارادی"},

  {id: 491 ,views: 1  ,type: "TEproj", fav: false, name: "duodenum", meaning: "اثنی عشر"},

  {id: 492 ,views: 1  ,type: "TEproj", fav: false, name: "constipation", meaning: "یبوست"},

  {id: 493 ,views: 1  ,type: "TEproj", fav: false, name: "palpitation", meaning: "تپش قلب"},

  {id: 494 ,views: 1  ,type: "TEproj", fav: false, name: "cerebrum", meaning: "مغز; مخ"},

  {id: 495 ,views: 1  ,type: "TEproj", fav: false, name: "intravenous", meaning: "داخل وریدی"},

  {id: 496 ,views: 1  ,type: "TEproj", fav: false, name: "regulatory", meaning: "نظارتی"},

  {id: 497 ,views: 1  ,type: "TEproj", fav: false, name: "scintillation", meaning: "ضرب و شتم; سوسوزن; جرقه"},

  {id: 498 ,views: 1  ,type: "TEproj", fav: false, name: "decay", meaning: "فروپاشی"},

  {id: 499 ,views: 1  ,type: "TEproj", fav: false, name: "markedly", meaning: "به طور قابل توجهی"},

  {id: 500 ,views: 1  ,type: "TEproj", fav: false, name: "epileptic", meaning: "صرعی"},

  {id: 501 ,views: 1  ,type: "TEproj", fav: false, name: "intracellular", meaning: "داخل سلولی"},

  {id: 502 ,views: 1  ,type: "TEproj", fav: false, name: "opposed", meaning: "مخالف"},

  {id: 503 ,views: 1  ,type: "TEproj", fav: false, name: "deranged", meaning: "آشفته"},

  {id: 504 ,views: 1  ,type: "TEproj", fav: false, name: "fortuitous", meaning: "اتفاقی"},

  {id: 505 ,views: 1  ,type: "TEproj", fav: false, name: "subarachnoid  ", meaning: "زیر عنکبوتیه"},

  {id: 506 ,views: 1  ,type: "TEproj", fav: false, name: "penetrating", meaning: "نافذ"},

  {id: 507 ,views: 1  ,type: "TEproj", fav: false, name: "vault", meaning: "طاق; خرک"},

  {id: 508 ,views: 1  ,type: "TEproj", fav: false, name: "lumbar", meaning: "کمری"},

  {id: 509 ,views: 1  ,type: "TEproj", fav: false, name: "hydrocephalus", meaning: "ازدیاد غیر عادی مایع"},

  {id: 510 ,views: 1  ,type: "TEproj", fav: false, name: "reabsorption", meaning: "بازجذب"},

  {id: 511 ,views: 1  ,type: "TEproj", fav: false, name: "seldom", meaning: "به ندرت"},

  {id: 512 ,views: 1  ,type: "TEproj", fav: false, name: "villi", meaning: "پرز; کرک"},

  {id: 513 ,views: 1  ,type: "TEproj", fav: false, name: "valves", meaning: "دریچه ها; سوپاپ"},

  {id: 514 ,views: 1  ,type: "TEproj", fav: false, name: "infectious", meaning: "عفونی"},

  {id: 515 ,views: 1  ,type: "TEproj", fav: false, name: "debris", meaning: "باقی مانده"},

  {id: 516 ,views: 1  ,type: "TEproj", fav: false, name: "particulate", meaning: "ذرات"},

  {id: 517 ,views: 1  ,type: "TEproj", fav: false, name: "extraneous", meaning: "بیرونی; خارجی"},

  {id: 518 ,views: 1  ,type: "TEproj", fav: false, name: "cerebrospinal", meaning: "مغزی نخاعی"},

  {id: 519 ,views: 1  ,type: "TEproj", fav: false, name: "interstitial", meaning: "بینابینی"},

  {id: 520 ,views: 1  ,type: "TEproj", fav: false, name: "perivascular", meaning: "دور عروقی"},

  {id: 521 ,views: 1  ,type: "TEproj", fav: false, name: "conglomerates", meaning: "کنگره ها"},

  {id: 522 ,views: 1  ,type: "TEproj", fav: false, name: "epithelial", meaning: "مخاطی"},

  {id: 523 ,views: 1  ,type: "TEproj", fav: false, name: "cauliflower", meaning: "گل كلم"},

  {id: 524 ,views: 1  ,type: "TEproj", fav: false, name: "venous", meaning: "وریدی"},

  {id: 525 ,views: 1  ,type: "TEproj", fav: false, name: "pores", meaning: "منافذ"},

  {id: 526 ,views: 1  ,type: "TEproj", fav: false, name: "cisterna", meaning: "مخزن"},

  {id: 527 ,views: 1  ,type: "TEproj", fav: false, name: "ventricle", meaning: "بطن; شکم"},

  {id: 528 ,views: 1  ,type: "TEproj", fav: false, name: "choroid  ", meaning: "مشیمیه"},

  {id: 529 ,views: 1  ,type: "TEproj", fav: false, name: "membranes", meaning: "غشاها"},

  {id: 530 ,views: 1  ,type: "TEproj", fav: false, name: "ependymal", meaning: "اپیدمیال"},

  {id: 531 ,views: 1  ,type: "TEproj", fav: false, name: "vehicular", meaning: "وابسته به  برندگر"},

  {id: 532 ,views: 1  ,type: "TEproj", fav: false, name: "contusion", meaning: "کوفتگی"},

  {id: 533 ,views: 1  ,type: "TEproj", fav: false, name: "contrecoup", meaning: "تقابل; تماس"},

  {id: 534 ,views: 1  ,type: "TEproj", fav: false, name: "deceleration", meaning: "کاهش; کاهش سرعت"},

  {id: 535 ,views: 1  ,type: "TEproj", fav: false, name: "impact", meaning: "تأثیر"},

  {id: 536 ,views: 1  ,type: "TEproj", fav: false, name: "protuberances", meaning: "برآمدگی"},

  {id: 537 ,views: 1  ,type: "TEproj", fav: false, name: "temporal", meaning: "موقتی"},

  {id: 538 ,views: 1  ,type: "TEproj", fav: false, name: "momentarily", meaning: "لحظه ای"},

  {id: 539 ,views: 1  ,type: "TEproj", fav: false, name: "intense", meaning: "شدید; قوی"},

  {id: 540 ,views: 1  ,type: "TEproj", fav: false, name: "remainder", meaning: "باقی مانده"},

  {id: 541 ,views: 1  ,type: "TEproj", fav: false, name: "enclosing", meaning: "محصور کردن; متصل کردن"},

  {id: 542 ,views: 1  ,type: "TEproj", fav: false, name: "cavity", meaning: "حفره"},

  {id: 543 ,views: 1  ,type: "TEproj", fav: false, name: "dural", meaning: "دورنگ"},

  {id: 544 ,views: 1  ,type: "TEproj", fav: false, name: "sinuses", meaning: "سینوس ها"},

  {id: 545 ,views: 1  ,type: "TEproj", fav: false, name: "demented", meaning: "مجنون"},

  {id: 546 ,views: 1  ,type: "TEproj", fav: false, name: "hemisphere", meaning: "نیمکره"},

  {id: 547 ,views: 1  ,type: "TEproj", fav: false, name: "midportion", meaning: "واسطه; بخش میانی"},

  {id: 548 ,views: 1  ,type: "TEproj", fav: false, name: "compromising", meaning: "سازش; افت"},

  {id: 549 ,views: 1  ,type: "TEproj", fav: false, name: "plaques", meaning: "پلاک ها"},

  {id: 550 ,views: 1  ,type: "TEproj", fav: false, name: "arteriosclerotic", meaning: "تصلب شرایین"},

  {id: 551 ,views: 1  ,type: "TEproj", fav: false, name: "edema", meaning: "ورم; ادم"},

  {id: 552 ,views: 1  ,type: "TEproj", fav: false, name: "transudation", meaning: "انتقال"},

  {id: 553 ,views: 1  ,type: "TEproj", fav: false, name: "overstretching", meaning: "بیش از حد کشش"},

  {id: 554 ,views: 1  ,type: "TEproj", fav: false, name: "leaky", meaning: "نشتی; چکه کن"},

  {id: 555 ,views: 1  ,type: "TEproj", fav: false, name: "correspondingly", meaning: "متقابلا; نسبت"},

  {id: 556 ,views: 1  ,type: "TEproj", fav: false, name: "capillaries", meaning: "عروق شعریه; مویرگ"},

  {id: 557 ,views: 1  ,type: "TEproj", fav: false, name: "circulatory", meaning: "گردش خون"},

  {id: 558 ,views: 1  ,type: "TEproj", fav: false, name: "excessive", meaning: "بیش از اندازه"},

  {id: 559 ,views: 1  ,type: "TEproj", fav: false, name: "constancy", meaning: "ثبات"},

  {id: 560 ,views: 1  ,type: "TEproj", fav: false, name: "hypertensive", meaning: "فشار خون بالا"},

  {id: 561 ,views: 1  ,type: "TEproj", fav: false, name: "Fluctuations", meaning: "نوسانات"},

  {id: 562 ,views: 1  ,type: "TEproj", fav: false, name: "autoregulation", meaning: "خود تنظیمی; فرايندی"},

  {id: 563 ,views: 1  ,type: "TEproj", fav: false, name: "resonance", meaning: "تشدید; رزونانس"},

  {id: 564 ,views: 1  ,type: "TEproj", fav: false, name: "occipital", meaning: "پس سری; قمحدوه"},

  {id: 565 ,views: 1  ,type: "TEproj", fav: false, name: "extracellular", meaning: "خارج سلولی"},

  {id: 566 ,views: 1  ,type: "TEproj", fav: false, name: "coupling", meaning: "اتصال; جفت"},

  {id: 567 ,views: 1  ,type: "TEproj", fav: false, name: "chemoreflex", meaning: "شیمی درمانی"},

  {id: 568 ,views: 1  ,type: "TEproj", fav: false, name: "interpretation", meaning: "تفسیر"},

  {id: 569 ,views: 1  ,type: "TEproj", fav: false, name: "overtreatment", meaning: "بیش از حد"},

  {id: 570 ,views: 1  ,type: "TEproj", fav: false, name: "psychotic", meaning: "بیمار روانی"},

  {id: 571 ,views: 1  ,type: "TEproj", fav: false, name: "anaerobic", meaning: "بی هوازی"},

  {id: 572 ,views: 1  ,type: "TEproj", fav: false, name: "peculiarities", meaning: "خصوصیات; مختصات"},

  {id: 573 ,views: 1  ,type: "TEproj", fav: false, name: "intracerebral", meaning: "داخل مغزی"},

  {id: 574 ,views: 1  ,type: "TEproj", fav: false, name: "puncture", meaning: "سوراخ"},

  {id: 575 ,views: 1  ,type: "TEproj", fav: false, name: "barriers", meaning: "موانع"},

  {id: 576 ,views: 1  ,type: "TEproj", fav: false, name: "peritoneal", meaning: "صفاقی"},

  {id: 577 ,views: 1  ,type: "TEproj", fav: false, name: "infancy", meaning: "شیرخوارگی; مراحل ابتدایی"},

  {id: 578 ,views: 1  ,type: "TEproj", fav: false, name: "pliable", meaning: "قابل استفاده; قابل انعطاف"},

  {id: 579 ,views: 1  ,type: "TEproj", fav: false, name: "swell", meaning: "متورم; تورم"},

  {id: 580 ,views: 1  ,type: "TEproj", fav: false, name: "nucleus", meaning: "هسته"},

  {id: 581 ,views: 1  ,type: "TEproj", fav: false, name: "diminished", meaning: "کاسته; کاهش"},

  {id: 582 ,views: 1  ,type: "TEproj", fav: false, name: "blockade", meaning: "محاصره"},

  {id: 583 ,views: 1  ,type: "TEproj", fav: false, name: "presumably", meaning: "احتمالاً"},

  {id: 584 ,views: 1  ,type: "TEproj", fav: false, name: "epileptogenic", meaning: "مستعد صرع"},

  {id: 585 ,views: 1  ,type: "TEproj", fav: false, name: "stimuli", meaning: "محرک ها"},

  {id: 586 ,views: 1  ,type: "TEproj", fav: false, name: "predisposed", meaning: "مستعد"},

  {id: 587 ,views: 1  ,type: "TEproj", fav: false, name: "consciousness", meaning: "هوشیاری; آگاهی"},

  {id: 588 ,views: 1  ,type: "TEproj", fav: false, name: "fatigued", meaning: "خسته"},

  {id: 589 ,views: 1  ,type: "TEproj", fav: false, name: "propagation", meaning: "انتشار"},

  {id: 590 ,views: 1  ,type: "TEproj", fav: false, name: "homeostasis", meaning: "هموستاز"},

  {id: 591 ,views: 1  ,type: "TEproj", fav: false, name: "respiratory", meaning: "تنفسی"},

  {id: 592 ,views: 1  ,type: "TEproj", fav: false, name: "perfusing", meaning: "خوشبو کننده"},

  {id: 593 ,views: 1  ,type: "TEproj", fav: false, name: "limitans", meaning: "مرزبانان"},

  {id: 594 ,views: 1  ,type: "TEproj", fav: false, name: "soluble", meaning: "محلول"},

  {id: 595 ,views: 1  ,type: "TEproj", fav: false, name: "slit", meaning: "شکاف"},

  {id: 596 ,views: 1  ,type: "TEproj", fav: false, name: "osmolality", meaning: "اسمولالیته"},

  {id: 597 ,views: 1  ,type: "TEproj", fav: false, name: "appetizing", meaning: "اشتها آور"},

  {id: 598 ,views: 1  ,type: "TEproj", fav: false, name: "simultaneously", meaning: "همزمان"},

  {id: 599 ,views: 1  ,type: "TEproj", fav: false, name: "transection", meaning: "انتقال; قطع"},

  {id: 600 ,views: 1  ,type: "TEproj", fav: false, name: "astroglial", meaning: "آسمونی"},

  {id: 601 ,views: 1  ,type: "TEproj", fav: false, name: "abnormally", meaning: "غیرطبیعی"},

  {id: 602 ,views: 1  ,type: "TEproj", fav: false, name: "parasympathetic", meaning: "پارا سمپاتیک"},

  {id: 603 ,views: 1  ,type: "TEproj", fav: false, name: "sympathetic", meaning: "سمپاتیک"},

  {id: 604 ,views: 1  ,type: "TEproj", fav: false, name: "schizophrenia", meaning: "اسکیزوفرنی"},

  {id: 605 ,views: 1  ,type: "TEproj", fav: false, name: "bibliography", meaning: "کتاب شناسی"},

  {id: 606 ,views: 1  ,type: "TEproj", fav: false, name: "ventral", meaning: "شکمی"},

  {id: 607 ,views: 1  ,type: "TEproj", fav: false, name: "dorsal", meaning: "پشتی"},

  {id: 608 ,views: 1  ,type: "TEproj", fav: false, name: "thorax", meaning: "قفسه سینه"},

  {id: 609 ,views: 1  ,type: "TEproj", fav: false, name: "bladder", meaning: "مثانه"},

  {id: 610 ,views: 1  ,type: "TEproj", fav: false, name: "neurophysiology", meaning: "فیزیولوژی اعصاب; نوروفیزیولوژی"},

  {id: 611 ,views: 1  ,type: "TEproj", fav: false, name: "intestine", meaning: "روده"},

  {id: 612 ,views: 1  ,type: "TEproj", fav: false, name: "ramus", meaning: "شاخ; اطاله یافته"},

  {id: 613 ,views: 1  ,type: "TEproj", fav: false, name: "originated", meaning: "نشات گرفته; منشأ"},

  {id: 614 ,views: 1  ,type: "TEproj", fav: false, name: "terminate", meaning: "خاتمه دادن"},

  {id: 615 ,views: 1  ,type: "TEproj", fav: false, name: "integrative", meaning: "یکپارچه; منسجم"},

  {id: 616 ,views: 1  ,type: "TEproj", fav: false, name: "structure", meaning: "ساختار"},

  {id: 617 ,views: 1  ,type: "TEproj", fav: false, name: "amyloid  ", meaning: "نشاستهای"},

  {id: 618 ,views: 1  ,type: "TEproj", fav: false, name: "dysfunction", meaning: "اختلال عملکرد"},

  {id: 619 ,views: 1  ,type: "TEproj", fav: false, name: "harbinger", meaning: "منادی"},

  {id: 620 ,views: 1  ,type: "TEproj", fav: false, name: "stroke", meaning: "سکته"},

  {id: 621 ,views: 1  ,type: "TEproj", fav: false, name: "bipolar", meaning: "دو قطبی"},

  {id: 622 ,views: 1  ,type: "TEproj", fav: false, name: "mid  life", meaning: "میانسالی"},

  {id: 623 ,views: 1  ,type: "TEproj", fav: false, name: "accumulation", meaning: "انباشتگی; تجمع"},

  {id: 624 ,views: 1  ,type: "TEproj", fav: false, name: "compounds", meaning: "ترکیبات"},

];
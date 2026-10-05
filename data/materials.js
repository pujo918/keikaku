// Data Materi Kursus Keikaku (Perencanaan Pembelajaran Bahasa Jepang)
// Diurutkan presisi sesuai RPS Resmi Jugyou Keikaku
const MATERIALS_DATA = [
  {
    "id": "modul-1",
    "number": 1,
    "rpsWeek": "Minggu 1",
    "title": "Paradigma Pembelajaran Bahasa Asing & Faktor yang Mempengaruhi",
    "subtitle": "Behavioris vs Komunikatif, Faktor Afektif, Hipotesis Periode Kritis, Interlanguage, & Fosilisasi",
    "tags": [
      "Paradigma",
      "Faktor Afektif",
      "Critical Period",
      "Interlanguage",
      "Fosilisasi",
      "Keigo"
    ],
    "icon": "sparkles",
    "summary": "Membedah evolusi paradigma pengajaran bahasa asing dari pendekatan struktural-behavioris (GTM, ALM) ke paradigma komunikatif modern. Menganalisis faktor afektif/psikologis (self-esteem, language ego, motivasi), emosional, biologis (Critical Period), serta faktor linguistik (transfer interlingual, interlanguage, dan pencegahan fosilisasi).",
    "sections": [
      {
        "heading": "1. Pergeseran Paradigma: Pendekatan Struktural vs Komunikatif",
        "content": "* **Paradigma Tradisional (Strukturalis - Behavioris)**:\n  * *Hakikat Bahasa:* Bahasa dipandang sebagai sistem formal yang tersusun atas kode, rumus gramatika, dan kosakata terpisah (*structural view*).\n  * *Hakikat Belajar:* Belajar bahasa adalah proses pembentukan kebiasaan mekanistik (*habit formation*) melalui stimulus-respons dan pengulangan berulang (*behaviorism*).\n  * *Metode Terkait:* \n    * **Grammar Translation Method (GTM)**: Terjemahan kata demi kata, hafalan daftar kata, analisis gramatika rumit dalam bahasa ibu. Bahasa lisan diabaikan.\n    * **Audio-Lingual Method (ALM)**: Latihan pola kalimat repetitif (*drills* berulang), menghafal dialog baku, kesalahan langsung dipotong agar tidak membeku jadi kebiasaan buruk.\n\n* **Paradigma Komunikatif (Communicative Approach)**:\n  * Menempatkan **kemampuan berkomunikasi nyata, fleksibel, dan bermakna** sebagai tujuan paling utama.\n  * Bergeser dari *Language Usage* (analisis rumus kalimat secara teoritis) ke *Language Use* (penggunaan bahasa langsung untuk tujuan fungsional).\n  * Bersifat *Student-Centered*: Guru bukan satu-satunya sumber otoritas melainkan fasilitator kelas yang interaktif."
      },
      {
        "heading": "2. Faktor Afektif & Psikologis dalam Pemerolehan Bahasa",
        "content": "Faktor psikologis internal sangat menentukan apakah seorang pembelajar berani berbahasa atau terkunci:\n\n* **Harga Diri (Self-Esteem)**: Keyakinan siswa terhadap nilai dan kemampuan dirinya sendiri. Siswa dengan self-esteem tinggi tidak gampang tertekan saat salah pelafalan.\n* **Ego Bahasa (Language Ego)**: Identitas diri seseorang sangat lekat dengan bahasa ibunya. Ketika belajar bahasa asing, seseorang sering merasa 'konyol' atau 'kehilangan jati diri'. Pembelajar harus mampu melunakkan dinding pertahanan ego agar lentur menyerap norma bahasa baru.\n* **Motivasi Belajar**:\n  * *Intrinsik* (keinginan dari dalam hati karena senang anime/budaya Jepang) vs *Ekstrinsik* (dorongan nilai rapor, pujian orang tua).\n  * *Integratif* (keinginan membaur dan menjadi bagian dari komunitas penutur Jepang) vs *Instrumental* (keinginan mencapai tujuan praktis: lulus ujian JLPT N3, bekerja, beasiswa).\n* **Pengambilan Risiko (Risk-Taking)**: Karakter penting di mana pembelajar bersedia 'bertaruh' mencoba berbicara kalimat baru tanpa takut ditertawakan."
      },
      {
        "heading": "3. Faktor Emosional & Peran Guru di Kelas",
        "content": "* **Kecemasan Berbahasa (Language Anxiety)**:\n  * *Kecemasan Debilitatif*: Rasa takut berlebihan yang melumpuhkan mental siswa sehingga tidak mampu berkata apa-apa.\n  * *Kecemasan Fasilitatif*: Sedikit ketegangan positif yang justru memicu adrenalin siswa untuk bersiap dan berkonsentrasi tinggi.\n* **Empati**: Kemampuan merasakan dan menempatkan diri pada sudut pandang lawan bicara, kunci kelancaran interaksi sosial.\n* **Regulasi Emosi & Sikap Guru**: Guru harus menciptakan iklim kelas yang *aman secara psikologis* (*psychological safety*). Guru yang murah senyum, mengapresiasi keberanian siswa, dan tidak reaktif mempermalukan kesalahan akan menurunkan filter afektif (*Affective Filter*) siswa."
      },
      {
        "heading": "4. Faktor Kognitif, Gaya Belajar, & Usia (Biologis)",
        "content": "* **Strategi Belajar**:\n  * *Metakognitif*: Merencanakan, memonitor, dan mengevaluasi cara belajar sendiri.\n  * *Kognitif*: Mengelompokkan kata, membuat catatan ringkas, mengaitkan kanji dengan mnemonik visual.\n  * *Sosioafektif*: Belajar bersama teman, bertanya saat tidak paham, mengendalikan kecemasan.\n* **Toleransi terhadap Ambiguitas (Ambiguity Tolerance)**: Kemampuan menerima kenyataan bahwa dalam bahasa Jepang ada hal-hal yang tidak bisa diterjemahkan plek secara harfiah ke bahasa Indonesia (misal: konsep *Yoroshiku onegaishimasu*, *Itadakimasu*, partikel *wa* vs *ga*).\n\n* **Hipotesis Periode Kritis (Critical Period Hypothesis)**:\n  * Ada jendela masa biologis (sebelum pubertas) di mana akuisisi aksen fonologis dan pelafalan seperti penutur asli (*native-like pronunciation*) paling mudah tercapai secara alami.\n  * *Anak-anak:* Unggul dalam kemudahan memperoleh aksen natural dan intuisi bunyi.\n  * *Orang Dewasa:* Memiliki keunggulan dalam kematangan kognitif, daya analisis gramatika abstrak, dan strategi belajar yang lebih sistematis."
      },
      {
        "heading": "5. Faktor Linguistik: Interlanguage & Bahaya Fosilisasi (Fossilization)",
        "content": "* **Transfer Interlingual (Interferensi Bahasa Ibu)**:\n  Pengaruh struktur bahasa pertama (Bahasa Indonesia: S-P-O) terhadap bahasa sasaran (Bahasa Jepang: S-O-P). Misal: salah menempatkan predikat di tengah kalimat atau bingung dengan partikel.\n\n* **Fase Bahasa Antara (Interlanguage)**:\n  Sistem linguistik transisi yang dibangun siswa secara mandiri di antara bahasa ibu dan bahasa target. **Kesalahan dalam interlanguage adalah bukti aktif bahwa siswa sedang berpikir dan mencoba mengonstruksi aturan bahasa!**\n\n* **Fosilisasi (Fossilization)**:\n  * *Pengertian:* Kondisi di mana kesalahan bahasa tertentu membeku atau menetap secara permanen dalam sistem bahasa siswa, sehingga sulit diperbaiki meskipun siswa terus belajar bertahun-tahun.\n  * *Penyebab:* Kesalahan yang dibiarkan terus-menerus tanpa umpan balik (*corrective feedback*), atau ketika pembelajar merasa lawan bicaranya sudah paham sehingga tidak merasa perlu memperbaiki ketepatan tata bahasa.\n  * *Cara Mengatasi:* Memberikan *corrective feedback* secara tepat waktu dan bijak, melatih kesadaran diri (*noticing hypothesis*), serta memberikan latihan reflektif terfokus."
      },
      {
        "heading": "6. Kompetensi Pragmatik & Sosiokultural: Keigo & Aizuchi",
        "content": "Kalimat yang 100% benar secara gramatika bisa menjadi sangat tidak sopan atau memicu kegagalan komunikasi bila melanggar norma pragmatik:\n\n* **Konsep Uchi (内 - Kelompok Dalam) & Soto (外 - Kelompok Luar)**:\n  Dalam bahasa Jepang, penggunaan ragam hormat (*Sonkeigo*) dan ragam rendah diri (*Kenjougo*) ditentukan oleh hubungan Uchi vs Soto. Kita merendahkan diri kita dan anggota keluarga/perusahaan kita sendiri (*Uchi*) di hadapan orang luar (*Soto*).\n* **Budaya Respons Lisan (Aizuchi - 相槌)**:\n  Di Indonesia, menyimak sering ditandai dengan diam mendengarkan sampai selesai. Di Jepang, pendengar *wajib* memberikan umpan balik bunyi/anggukan (*Aizuchi* seperti: *Hai, Sou desu ka, Naruhodo, Ee*) untuk menunjukkan bahwa ia sedang aktif mendengarkan. Jika pendengar diam tanpa aizuchi, penutur Jepang akan merasa cemas dan mengira bicaranya tidak dipahami atau tidak didengar!"
      }
    ],
    "key_takeaways": [
      "Paradigma komunikatif memprioritaskan language use (makna & fungsi) di atas sekadar language usage (rumus).",
      "Faktor afektif (self-esteem, motivasi, risk-taking) adalah penentu utama keberanian siswa mempraktikkan bahasa.",
      "Kesalahan dalam fase interlanguage adalah normal, namun harus diwaspadai agar tidak menjadi fosilisasi permanen.",
      "Kompetensi pragmatik dan pemahaman budaya (Uchi-Soto, Keigo, Aizuchi) mutlak diperlukan agar komunikasi tidak gagal."
    ]
  },
  {
    "id": "modul-2",
    "number": 2,
    "rpsWeek": "Minggu 2-3",
    "title": "Karakteristik & Perencanaan Pembelajaran Bahasa Jepang (Kurikulum Merdeka)",
    "subtitle": "Karakteristik Bahasa Jepang, Capaian Pembelajaran, & Prinsip Deep Learning",
    "tags": [
      "Kurikulum Merdeka",
      "JF Standard",
      "Can-Do",
      "CP-TP-ATP",
      "Asesmen"
    ],
    "icon": "book-open",
    "summary": "Membedah esensi pembelajaran bahasa Jepang sebagai bahasa asing di era Kurikulum Merdeka (Fase F / SMA). Menitikberatkan pada kompetensi komunikatif, standar JF A2.1 dengan konsep 'Can-Do', hirarki penurunan CP menjadi TP & ATP, serta 3 prinsip pembelajaran mendalam (berkesadaran, bermakna, menggembirakan).",
    "sections": [
      {
        "heading": "1. Karakteristik Unsur Pembelajaran Bahasa Jepang",
        "content": "Bahasa Jepang memiliki 5 elemen linguistik pokok yang diajarkan secara terintegrasi:\n\n1. **Hatsuon (発音 - Pelafalan)**: Vokal panjang (chouon), konsonan rangkap (sokuon), mora sengau (hatsuon ん), intonasi tinggi-rendah (pitch accent).\n2. **Moji (文字 - Sistem Huruf)**: \n   * *Hiragana (ひらがな)* untuk tata bahasa asli dan kata asli Jepang.\n   * *Katakana (カタカナ)* untuk kata serapan asing (*gairaigo*) dan onomatopoeia.\n   * *Kanji (漢字)* lambang morfemik/makna kata.\n3. **Goi (語彙 - Kosakata)**: Perbendaharaan kata dasar, kata kerja berkonjugasi, kata sifat -i dan -na.\n4. **Bunpou (文法 - Tata Bahasa)**: Pola partikel (joshi は, が, を, に, で), urutan SPOV (predikat di akhir kalimat), serta bentuk waktu lampau/non-lampau.\n5. **Hyougen (表現 - Ungkapan)**: Salam sehari-hari (*aisatsu*), ungkapan perasaan, konvensi budaya kesopanan (*Keigo*)."
      },
      {
        "heading": "2. Paradigma Baru: Komunikatif & JF Standard (CEFR A2.1)",
        "content": "Di Kurikulum Merdeka (Fase F - Kelas 11 & 12 SMA), paradigma pengajaran bergeser dari sekadar menghafal rumus pola kalimat dan kanji ke arah **kemampuan komunikasi nyata melalui teks multimodal** (tulisan, lisan, audio, video, infografis).\n\n* **Standar Acuan**: JF Standard for Japanese-Language Education (Japan Foundation) setara Level A2.1 (Basic User).\n* **Konsep 'Can-Do'**: Kemampuan diukur berdasarkan *'Apa yang mampu dilakukan peserta didik dengan bahasa Jepang'* dalam kehidupan nyata (bukan sekadar berapa nilai gramatika).\n  * *Contoh Can-Do:* 'Dapat memesan makanan di kedai ramen sederhana menggunakan bahasa yang sopan' atau 'Dapat memperkenalkan diri dan menjelaskan minat/hobi kepada teman sebaya'."
      },
      {
        "heading": "3. Hirarki Perencanaan Pembelajaran: CP -> TP -> ATP",
        "content": "Perencanaan pembelajaran menghubungkan 3 pertanyaan besar:\n*Apa tujuannya?* $\\rightarrow$ *Bagaimana cara mencapainya?* $\\rightarrow$ *Bagaimana cara menilai ketercapaiannya?*\n\nTahapan menyusun perencanaan:\n1. **Menganalisis Capaian Pembelajaran (CP)**: Memahami rasional, tujuan, karakteristik, dan fase capaian (Fase F mencakup menyimak, berbicara, membaca, dan menulis secara multimodal).\n2. **Merumuskan Tujuan Pembelajaran (TP)**: Menurunkan rumusan CP yang bersifat makro menjadi tujuan-tujuan yang spesifik, operasional, dan terukur.\n3. **Menyusun Alur Tujuan Pembelajaran (ATP)**: Mengurutkan TP secara logis, mulai dari yang sederhana (reseptif) ke yang kompleks (produktif/kreasi).\n4. **Merancang Pembelajaran & Asesmen**: Menyusun modul ajar, materi, aktivitas, dan lembar kerja."
      },
      {
        "heading": "4. Prinsip Pembelajaran Mendalam & Tripartit Pengalaman Belajar",
        "content": "Untuk menghasilkan pemahaman jangka panjang, pembelajaran bahasa Jepang harus mengusung 3 prinsip utama:\n* **Berkesadaran**: Siswa memahami tujuan dan manfaat dari materi yang dipelajari bagi kehidupannya.\n* **Bermakna**: Bahasa dipraktikkan dalam konteks realistis dan kultural, bukan hafalan kata lepas.\n* **Menggembirakan**: Kelas interaktif, bebas dari rasa takut salah, serta memanfaatkan media variatif.\n\n**Tiga Pengalaman Belajar (Tripartit):**\n1. **Memahami**: Mengeksplorasi makna, mengidentifikasi kosakata, pola kalimat, dan konteks penggunaan.\n2. **Mengaplikasi**: Mempraktikkan bahasa dalam dialog, role play, menulis pesan singkat, atau menyimak informasi autentik.\n3. **Merefleksi**: Mengevaluasi capaian diri (*self-assessment*), menemukan kesulitan, dan merencanakan tindak lanjut."
      },
      {
        "heading": "5. Tiga Dimensi Asesmen Pembelajaran",
        "content": "Asesmen tidak selalu harus berbentuk tes tertulis:\n* **Asesmen Awal (Diagnostik)**: Dilakukan di awal semester/bab untuk mendeteksi kesiapan dan gaya belajar siswa (redinesu).\n* **Asesmen Proses (Formatif)**: Dilakukan selama proses belajar berlangsung (observasi kaiwa, kuis interaktif, peer feedback) untuk memberikan umpan balik perbaikan segera.\n* **Asesmen Akhir (Sumatif)**: Dilakukan di akhir periode (UTS/UAS, proyek presentasi, portofolio sakubun) untuk menentukan ketercapaian tujuan pembelajaran."
      }
    ],
    "key_takeaways": [
      "Tujuan Kurikulum Merdeka Fase F adalah kompetensi komunikatif A2.1 JF Standard berbasis Can-Do.",
      "Unsur bahasa (Hatsuon, Moji, Goi, Bunpou, Hyougen) harus diajarkan terpadu dalam konteks makna.",
      "Alur perencanaan: CP dianalisis -> diturunkan jadi TP -> diurutkan jadi ATP -> dibuat modul ajar & asesmen.",
      "Prinsip belajar mendalam: Berkesadaran, Bermakna, Menggembirakan melalui fase Memahami, Mengaplikasi, Merefleksi."
    ]
  },
  {
    "id": "modul-3",
    "number": 3,
    "rpsWeek": "Minggu 4",
    "title": "Course Design (コースデザイン) & Analisis Kebutuhan",
    "subtitle": "Pondasi Perancangan Pembelajaran Bahasa Jepang yang Komprehensif",
    "tags": [
      "Course Design",
      "Niizu Chousa",
      "Redinesu",
      "Tekisei",
      "Jouken"
    ],
    "icon": "compass",
    "summary": "Course Design adalah tahapan paling fundamental yang dilakukan oleh lembaga/pendidik sebelum merancang kurikulum dan silabus. Meliputi pendataan 4 pilar (kebutuhan, kesiapan, bakat kebahasaan, kondisi pembelajaran) yang kemudian dianalisis untuk menyusun silabus, pelaksanaan, dan evaluasi program.",
    "sections": [
      {
        "heading": "1. Pengertian & Hakikat Course Design (コースデザイン)",
        "content": "Course Design (コースデザイン) adalah proses perancangan paling awal dan mendasar yang wajib dilaksanakan oleh institusi atau pengajar sebelum pembelajaran bahasa Jepang dimulai. \n\nTujuan utamanya adalah memastikan seluruh program pembelajaran yang akan diselenggarakan relevan, efisien, terarah, dan memenuhi harapan seluruh pemangku kepentingan (pembelajar, guru, institusi, maupun pengguna lulusan).\n\nProses ini bukan sekadar menyusun jadwal, melainkan sebuah siklus ilmiah yang terdiri dari:\n1. **Pendataan Awal (Survey/Chousa)**: Pengumpulan data riil dari calon pembelajar dan lingkungan.\n2. **Analisis Data (Bunseki)**: Pengolahan data untuk merumuskan tujuan, kompetensi, materi, dan format pembelajaran.\n3. **Penyusunan Desain (Kurikulum & Silabus)**: Penentuan materi, alokasi waktu, bahan ajar, metodologi, dan sistem evaluasi.\n4. **Pelaksanaan (Jisshi)**: Penerapan proses belajar-mengajar di kelas.\n5. **Evaluasi & Revisi (Hyouka & Kaizen)**: Penilaian hasil pelaksanaan sebagai dasar penyempurnaan kurikulum pada periode berikutnya."
      },
      {
        "heading": "2. Empat Pilar Pendataan (Chousa - 調査)",
        "content": "Menurut Takamizawa (2004) dan Kobayashi (2001), sebelum merancang kursus, pendidik harus melakukan pendataan terhadap 4 aspek krusial:\n\n* **1. Pendataan Kebutuhan (ニーズ調査 - Nīzu Chōsa)**\n  Survei untuk mengetahui alasan dan tujuan mengapa pembelajar ingin belajar bahasa Jepang.\n  * *Apa saja yang disurvei?* Siapa pembelajarnya, apa target pembelajarannya, di mana bahasa Jepang akan digunakan (misal: pabrik, kantor perhotelan, kampus), siapa lawan bicaranya (atasan, rekan sebaya, pelanggan Jepang), keterampilan apa yang paling mendesak (kaiwa lisan atau dokkai membaca dokumen), target level (misal JLPT N4 / N3), serta reward atau sertifikasi yang diharapkan (bekerja di Jepang, beasiswa MEXT).\n  \n* **2. Pendataan Kesiapan (レディネス調査 - Redinesu Chōsa / 既習能力調査)**\n  Survei untuk memetakan modal atau kemampuan awal (*entry level/prior knowledge*) pembelajar.\n  * *Fokus survei:* Apakah pembelajar pemula total (zero beginner) atau sudah pernah belajar? Jika pernah, materi apa yang sudah dipelajari, buku apa yang digunakan, seberapa jauh penguasaan huruf (Hiragana, Katakana, Kanji), dan sertifikasi apa yang telah dimiliki sebelumnya.\n\n* **3. Pendataan Bakat Kebahasaan (言語学習適性調査 - Gengo Gakushū Tekisei Chōsa)**\n  Pendataan untuk memahami karakteristik kognitif bawaan pembelajar yang mempengaruhi kecepatan akuisisi bahasa asing.\n  * *Tiga dimensi utama:*\n    1. Kemampuan membedakan bunyi fonologis (*phonetic coding ability*).\n    2. Kepekaan terhadap aturan tata bahasa (*grammatical sensitivity*).\n    3. Kapasitas daya ingat asosiatif (*rote learning ability/memory retention*).\n\n* **4. Pendataan Kondisi & Syarat Pembelajaran (学習条件調査 - Gakushū Jōken Chōsa)**\n  Pengumpulan data operasional dan latar belakang personal pembelajar serta institusi.\n  * *Aspek yang didata:* Bahasa ibu (L1) dan bahasa asing lain yang telah dikuasai, riwayat pernah tinggal di Jepang/luar negeri, gaya belajar favorit (visual, auditori, kinestetik), ketersediaan jam belajar per minggu, fasilitas perangkat (laptop/internet), dan anggaran belajar."
      },
      {
        "heading": "3. Perbedaan Krusial: Pendataan vs Analisis",
        "content": "Banyak guru pemula mencampuradukkan kedua istilah ini. Keduanya memiliki posisi yang berbeda dalam metodologi pengajaran:\n\n| Dimensi | Pendataan (調査 - Chōsa) | Analisis (分析 - Bunseki) |\n|---|---|---|\n| **Definisi** | Proses mengumpulkan fakta mentah dan informasi lapangan secara obyektif melalui instrumen (angket, wawancara, tes penempatan). | Proses mengolah, menginterpretasi, dan menyimpulkan data mentah menjadi keputusan pedagogis. |\n| **Output** | Kumpulan data kuantitatif & kualitatif (skor tes awal, profil responden, lembar angket). | Keputusan kurikulum: Rumusan Tujuan Pembelajaran (TP), silabus, materi ajar, dan metode evaluasi. |\n| **Contoh Kasus** | Mengetahui bahwa 80% siswa ingin bekerja di bidang caregiver (kaigo) di Jepang. | Memutuskan menyusun silabus percakapan bertema *Nursing/Kaigo Japanese* dengan fokus kosakata medis dan Keigo sopan."
      },
      {
        "heading": "4. Alur Lengkap Siklus Course Design",
        "content": "Alur penyusunan pembelajaran bahasa Jepang berjalan secara siklis dan berkesinambungan:\n\n1. **Tahap Survey & Analisis Kebutuhan**: Menggali niizu, redinesu, bakat kebahasaan, dan kondisi/kendala belajar.\n2. **Penyusunan Desain Kurikulum & Silabus**:\n   * Menetapkan Capaian Kompetensi / Can-Do.\n   * Memilih dan menyusun sekuens materi pokok.\n   * Menentukan bahan ajar (textbook, multimedia digital).\n   * Merancang strategi/metodologi pengajaran.\n   * Merancang sistem asesmen (awal, formatif, sumatif).\n   * Merencanakan bimbingan individual (*remedial & enrichment*).\n3. **Pelaksanaan Program Pembelajaran**: Pelaksanaan kegiatan belajar mengajar sesuai rencana.\n4. **Evaluasi Program Pembelajaran**: Mengukur efektivitas kurikulum, ketercapaian target siswa, serta mengidentifikasi kendala sebagai bahan perbaikan (*Kaizen*) silabus mendatang."
      }
    ],
    "key_takeaways": [
      "Course Design adalah langkah pertama dan paling strategis dalam manajemen pendidikan bahasa Jepang.",
      "4 Pilar Survei: Nīzu (kebutuhan), Redinesu (kesiapan awal), Tekisei (bakat bahasa), Jōken (syarat/kondisi belajar).",
      "Pendataan adalah pengumpulan fakta mentah; Analisis adalah penerjemahan data menjadi keputusan kurikuler.",
      "Desain yang baik selalu memiliki siklus evaluasi (feedback loop) untuk continuous improvement."
    ]
  },
  {
    "id": "modul-4",
    "number": 4,
    "rpsWeek": "Minggu 5",
    "title": "Integrasi 4 Keterampilan Berbahasa & Keterampilan Abad 21 (4C)",
    "subtitle": "Menyimak, Berbicara, Membaca, Menulis dalam Sinergi Critical Thinking, Creativity, Collaboration, Communication",
    "tags": [
      "4 Skill",
      "4C",
      "Choukai",
      "Kaiwa",
      "Dokkai",
      "Sakubun",
      "Seidoku"
    ],
    "icon": "layers",
    "summary": "Analisis mendalam terhadap 4 keterampilan berbahasa Jepang: Menyimak (聴く), Berbicara (話す), Membaca (読む), dan Menulis (書く). Mempelajari teknik membaca (Seidoku, Sokudoku, Skimming, Scanning, Yosoku), metode kaiwa, serta matriks integrasi keterampilan abad 21 (4C) dalam tahapan pembelajaran bahasa.",
    "sections": [
      {
        "heading": "1. Klasifikasi 4 Keterampilan: Reseptif vs Produktif",
        "content": "Keempat keterampilan berbahasa saling menopang dan tidak dapat dipisahkan:\n\n* **Keterampilan Reseptif (Menerima & Memahami Informasi)**:\n  * **Menyimak (聴く / 聞く - Choukai / Kiku)**: Menerima dan memproses informasi dari bahasa lisan.\n  * **Membaca (読む - Dokkai / Yomu)**: Memahami makna dan gagasan dari teks tertulis.\n  * *Peran:* Reseptif menjadi input dan pondasi esensial untuk memunculkan keterampilan produktif.\n\n* **Keterampilan Produktif (Menghasilkan & Menyampaikan Makna)**:\n  * **Berbicara (話す - Kaiwa / Hanasu)**: Menyampaikan gagasan, pesan, dan berinteraksi secara lisan.\n  * **Menulis (書く - Sakubun / Kaku)**: Menuangkan ide dan perasaan dalam bentuk bahasa tulis yang terorganisir.\n  * *Peran:* Bukti nyata bahwa pembelajar telah mampu mengonstruksi pemikiran dalam bahasa sasaran."
      },
      {
        "heading": "2. Keterampilan Menyimak (聴く / 聞く - Listening)",
        "content": "Menurut Sudjianto, *mendengar* sekadar menangkap getaran suara dengan telinga, sedangkan *menyimak* adalah proses mendengarkan dengan penuh perhatian dan pemikiran kritis untuk memetik pesan.\n\n* **Karakteristik & Tantangan**: Bunyi bersifat sementara (*transient*) dan cepat hilang, terdapat fenomena pelesapan partikel/kata dalam percakapan lisan wajar, serta menuntut pemrosesan makna seketika (*real-time*).\n* **Metode & Teknik**:\n  1. *Sentakuteki Kikitori (選択的聴き取り)* - Menyimak Selektif: Fokus hanya pada informasi tertentu sesuai target (misal: mencari jam keberangkatan kereta atau harga barang).\n  2. *Tai'i no Kikitori (大意の聞き取り)* - Menyimak Intisari: Menangkap garis besar atau ide pokok percakapan tanpa terbebani kata per kata.\n  3. *Kakitori (書き取り)* - Dikte: Mendengarkan audio lalu mencatat akurat bentuk ejaan dan tata bahasa.\n* **3 Tahap Pembelajaran**: Pre-listening (aktivasi skemata), While-listening (mengerjakan task menyimak), Post-listening (diskusi jawaban & refleksi)."
      },
      {
        "heading": "3. Keterampilan Berbicara (話す - Speaking / Kaiwa)",
        "content": "Menurut Toyoko (2016) dan Shibata (2001), berbicara bukan sekadar hafal pola percakapan baku, melainkan **proses komunikasi dua arah (timbal balik) dengan lawan bicara** dalam situasi nyata.\n\n* **Pengelompokan Teknik Kaiwa**:\n  1. *Latihan Dasar (Drilling)*: Ulang-ucap (*repetition*), lihat-ucap (*flashcard drill*).\n  2. *Komunikasi Interpersonal*: Wawancara (interview), telepon berantai.\n  3. *Simulasi Nyata*: Bermain peran (*Role Play* - misal: pelanggan dan pelayan di restoran 「レストランで」).\n  4. *Komunikasi Publik & Narasi*: Pidato (*Speech*), presentasi topik pribadi (misal: 「私の家族」), dan *Storytelling* (reka cerita gambar)."
      },
      {
        "heading": "4. Keterampilan Membaca (読む - Reading / Dokkai)",
        "content": "Penting membedakan antara *Yomikata* (cara mengeja huruf Hiragana/Katakana/Kanji) dengan *Dokkai (読解)* yang berorientasi pada pemahaman makna, konteks, dan interpretasi gagasan wacana.\n\n* **Metode & Teknik Membaca**:\n  1. **Seidoku (精読 - Membaca Intensif)**: Membaca teliti kata demi kata, membedah struktur gramatika, partikel, dan nuansa ekspresi teks.\n  2. **Sokudoku (速読 - Membaca Cepat)**: Membaca cepat untuk menyerap intisari tanpa membuka kamus, mengabaikan detail minor.\n  3. **Skimming**: Membaca sekilas pandang (judul, subjudul, paragraf awal/akhir) untuk menangkap topik umum.\n  4. **Scanning**: Memindai teks secara vertikal untuk mencari data spesifik (nama orang, tanggal, angka).\n  5. **Yosoku (予測 - Membaca Prediktif)**: Menebak isi teks berdasarkan judul, gambar, maupun konjungsi sebelum membaca tuntas."
      },
      {
        "heading": "5. Keterampilan Menulis (書く - Writing / Sakubun)",
        "content": "Menulis adalah keterampilan produktif kompleks. *Kakikata* fokus pada goresan huruf, sedangkan *Sakubun (作文)* fokus pada penyusunan karangan utuh.\n\n* **4 Dimensi Kompetensi Menulis (Sudjianto)**:\n  1. *Linguistic Accuracy*: Ketepatan ejaan huruf (Kanji/Kana), partikel, dan konjugasi kata kerja.\n  2. *Organization*: Kerapian susunan ide (Pernyataan $\\rightarrow$ Contoh $\\rightarrow$ Penjelasan).\n  3. *Communicative Competence*: Kesesuaian gaya bahasa dengan pembaca dan genre (surat, catatan harian, esai).\n  4. *Critical & Creative Expression*: Kemampuan menyajikan ide orisinal dan opini kritis.\n* **Teknik Pembelajaran**: Mengisi task kalimat rumpang, meniru pola model (*model sentences*), dan karangan terbimbing (*Guided Composition*).\n* **Model Feedback**: Peer-correction (koreksi antar teman), dialog bimbingan guru-siswa, dan evaluasi kesalahan umum kelas."
      },
      {
        "heading": "6. Matriks Integrasi 4 Skill dengan Keterampilan Abad 21 (4C)",
        "content": "Pembelajaran modern mengintegrasikan 4 skill bahasa dengan 4C:\n\n| Tahap Belajar | Keterampilan Bahasa | Aktivitas Siswa | Integrasi 4C |\n|---|---|---|---|\n| **Input** | Choukai (聴く) & Dokkai (読む) | Mengumpulkan data dari audio dan teks artikel. | **Critical Thinking** (memilih info valid) |\n| **Processing** | Dokkai (読む) & Kaiwa (話す) | Menganalisis masalah dan berdiskusi kelompok. | **Critical Thinking + Communication** |\n| **Planning** | Kaiwa (話す) & Sakubun (書く) | Menyusun storyboard, peta konsep, atau outline. | **Collaboration + Creativity** |\n| **Production** | Sakubun (書く) | Menulis karangan, komik strip, atau poster. | **Creativity + Communication** |\n| **Feedback** | Dokkai (読む) & Kaiwa (話す) | Saling mereview draf tulisan teman. | **Collaboration + Critical Thinking** |\n| **Presentation**| Kaiwa (話す) | Mempresentasikan karya di depan kelas. | **Communication + Creativity** |"
      }
    ],
    "key_takeaways": [
      "Reseptif (Choukai, Dokkai) adalah penyedia input; Produktif (Kaiwa, Sakubun) adalah wujud output komunikatif.",
      "Metode Dokkai: Seidoku (intensif bedah struktur), Sokudoku (cepat intisari), Skimming (sekilas), Scanning (info khusus), Yosoku (prediksi).",
      "Kaiwa berfokus pada interaksi timbal balik nyata, bukan sekadar hafalan dialog kaku.",
      "Integrasi 4C memastikan belajar bahasa melatih nalar kritis, kerjasama, kreativitas, dan daya komunikasi."
    ]
  },
  {
    "id": "modul-5",
    "number": 5,
    "rpsWeek": "Minggu 6",
    "title": "Bahan Ajar & Media Pembelajaran Bahasa Jepang Abad 21",
    "subtitle": "Distingsi, Inovasi Digital, Gamifikasi, dan Pemanfaatan AI",
    "tags": [
      "Bahan Ajar",
      "Media Pembelajaran",
      "Inovasi Digital",
      "AI",
      "Kamishibai"
    ],
    "icon": "cpu",
    "summary": "Membahas perbedaan esensial antara Bahan Ajar (substansi materi pembelajaran) dan Media Pembelajaran (sarana penyalur pesan). Membedah ragam media cetak tradisional (Kamishibai, flashcards) hingga media inovasi digital modern abad 21 (Aplikasi interaktif, TikTok edukasi, Padlet, AI sebagai rekan menulis).",
    "sections": [
      {
        "heading": "1. Distingsi Pokok: Bahan Ajar vs Media Pembelajaran",
        "content": "Sering terjadi kerancuan antara Bahan Ajar dan Media. Keduanya memiliki fungsi pedagogis yang berbeda namun saling melengkapi:\n\n* **Bahan Ajar (教材 - Kyouzai / Teaching Materials)**:\n  * *Pengertian:* Materi atau substansi pembelajaran yang dipelajari siswa untuk mencapai target kompetensi. Mencakup konten kosakata (*goi*), tata bahasa (*bunpou*), kanji, teks bacaan, dan dialog.\n  * *Format:* Bahan ajar cetak (buku teks, handout modul, lembar kerja LKS) dan bahan ajar non-cetak (teks digital, rekaman dialog audio, script teks).\n  * *Fungsi:* Menyediakan materi rujukan, contoh kalimat, panduan belajar mandiri, dan latihan soal.\n\n* **Media Pembelajaran (メディア - Media / Learning Media)**:\n  * *Pengertian:* Saluran, wahana, atau alat perantara fisik/digital yang digunakan untuk menyampaikan bahan ajar kepada siswa agar proses belajar lebih menarik dan efektif.\n  * *Fungsi:* Membangkitkan motivasi, mengkonkretkan konsep abstrak (misal urutan goresan kanji), memvariasikan aktivitas kelas, dan meningkatkan interaktivitas.\n  * *Analogi Sederhana:* Jika bahan ajar adalah 'air teh manis' (isi nutrisinya), maka media pembelajaran adalah 'cangkir kaca' (wadah penyalurnya)."
      },
      {
        "heading": "2. Klasifikasi Media Pembelajaran Tradisional vs Modern",
        "content": "* **Media Visual Tradisional**:\n  * *Flashcard (単語カード - Tango Kaado)*: Kartu kata berpasangan kanji-gambar untuk melatih daya ingat cepat melalui drilling visual.\n  * *Kamishibai (紙芝居)*: Seni mendongeng tradisional Jepang menggunakan serangkaian panel gambar berbingkai kayu untuk melatih pemahaman menyimak dan narasi lisan (*storytelling*).\n\n* **Media Inovasi Digital Abad 21**:\n  * Menggunakan teknologi multimedia untuk menciptakan pembelajaran yang fleksibel, interaktif, kolaboratif, dan sesuai kebutuhan generasi digital:\n    1. *Video Platform (YouTube, TikTok Edukasi)*: Menampilkan percakapan penutur asli (*native speaker*) dengan intonasi natural dan konteks budaya riil.\n    2. *Gamifikasi (Quizizz, Kahoot, Duolingo, Kanji Study)*: Pembelajaran berbasis kuis berpoin dan animasi goresan huruf interaktif.\n    3. *Papan Kolaboratif (Padlet, Google Slides)*: Wadah interaksi untuk tugas kelompok, pameran karya sakubun digital, dan sarana peer-feedback.\n    4. *Platform Tadoku Digital*: Bahan bacaan berjenjang (*graded readers*) yang memungkinkan siswa membaca banyak wacana santai tanpa stres.\n    5. *Kecerdasan Buatan (Generative AI)*: Pemanfaatan AI sebagai tutor percakapan virtual, korektor tata bahasa awal pada draf sakubun, dan generator ide dialog tematik."
      },
      {
        "heading": "3. Matriks Pemanfaatan Media Berdasarkan 4 Keterampilan",
        "content": "| Keterampilan | Bahan Ajar Pokok | Rekomendasi Media Pembelajaran | Aktivitas 4C |\n|---|---|---|---|\n| **Menyimak (聴く)** | Kosakata, dialog situasi, aksen pelafalan. | Video percakapan, anime pendek, podcast NHK Easy, Quizizz Listening. | Menganalisis konteks sosial dan menangkap intisari (Critical Thinking). |\n| **Berbicara (話す)** | Pola kalimat, formula Keigo, skenario percakapan. | Perekam video smartphone, aplikasi video call, presentasi slide infografis. | Membuat video role play berpasangan (Collaboration + Creativity). |\n| **Membaca (読む)** | Teks pendek, artikel budaya, cerita bergambar. | E-module interaktif, Web Tadoku, website berita ramah pembelajar (NHK Web Easy). | Membaca kritis dan membedah kosakata baru (Critical Thinking). |\n| **Menulis (書く)** | Huruf Kana/Kanji, pola konjugasi, struktur karangan. | Aplikasi tracing stroke order (Write It Japanese), Google Docs kolaboratif, Padlet. | Menulis draf karangan, saling koreksi teman, membuat e-komik (Creativity + Collaboration). |"
      },
      {
        "heading": "4. Isu & Tantangan Penggunaan Media Abad 21 di Kelas",
        "content": "Dari sesi diskusi kelas (*studi kasus diskusi mahasiswa*):\n1. **Bahaya Distraksi Digital**: Penggunaan gadget dan e-book seringkali membuat siswa tergoda membuka media sosial/game di tengah jam pelajaran. Solusi guru: menetapkan aturan batas waktu (*time-boxing*), memanfaatkan aplikasi terintegrasi dengan layar monitor guru, dan memberikan task berbasis aksi nyata.\n2. **Objektivitas Penilaian Kolaboratif**: Sering terjadi ketimpangan di mana hanya 1-2 siswa dominan yang bekerja, sementara anggota lain pasif (*free-rider*). Solusi guru: membagi peran individual secara tegas (misal: pencari kosakata, pembuat naskah, pemeran dialog, editor video) dan menerapkan instrumen *peer-evaluation*.\n3. **Kriteria Media/Aplikasi 'Worth It'**: Banyak aplikasi belajar kini menerapkan sistem langganan berbayar. Guru dan siswa harus mampu mengaudit apakah aplikasi tersebut benar-benar memiliki konten pedagogis valid, sesuai kurikulum, dan memiliki fitur latihan adaptif sebelum memutuskan berlangganan."
      }
    ],
    "key_takeaways": [
      "Bahan Ajar adalah substansi materi; Media Pembelajaran adalah wahana penyampai pesan.",
      "Media tradisional (Flashcard, Kamishibai) tetap relevan bila dipadukan dengan media digital modern.",
      "Media abad 21 memanfaatkan AI, video autentik, gamifikasi, dan ruang kolaborasi daring.",
      "Tantangan media digital: distraksi siswa, keadilan kerja kelompok, dan selektivitas memilih aplikasi berkualitas."
    ]
  },
  {
    "id": "modul-6",
    "number": 6,
    "rpsWeek": "Minggu 7",
    "title": "Penyusunan Program Tahunan (PROTA) & Program Semester (PROSEM)",
    "subtitle": "Manajemen Alokasi Waktu, Analisis Minggu Efektif (ME), dan Pemetaan Materi Bahasa Jepang",
    "tags": [
      "PROTA",
      "PROSEM",
      "Minggu Efektif",
      "Alokasi Waktu",
      "Kalender Pendidikan",
      "Jam Pelajaran"
    ],
    "icon": "calendar",
    "summary": "Membedah konsep, fungsi, dan langkah teknis penyusunan Program Tahunan (PROTA) dan Program Semester (PROSEM) dalam pembelajaran bahasa Jepang. Menjelaskan analisis kalender akademik, perhitungan Minggu Efektif (ME) vs Tidak Efektif, penentuan Jam Pelajaran (JP), serta sinkronisasi sekuens materi bahasa Jepang.",
    "sections": [
      {
        "heading": "1. Pengertian, Fungsi, & Hakikat PROTA (Program Tahunan)",
        "content": "**Program Tahunan (PROTA)** adalah rencana penetapan alokasi waktu satu tahun ajaran untuk mencapai target Capaian Pembelajaran (CP) atau Kompetensi Dasar (KD) yang telah ditetapkan.\n\nPROTA berfungsi sebagai:\n* **Pedoman Induk (*Master Guide*):** Acuan dasar guru dalam menurunkan perangkat pembelajaran lainnya, seperti Program Semester (PROSEM), Alur Tujuan Pembelajaran (ATP), dan Modul Ajar (RPP).\n* **Alat Kontrol & Manajemen Waktu:** Memastikan seluruh cakupan materi atau bab terselesaikan secara merata sepanjang tahun ajaran tanpa ada materi esensial yang terlewat atau menumpuk di akhir semester.\n* **Jaminan Efisiensi:** Mengoptimalkan jam pelajaran efektif sehingga target kurikulum tercapai tepat waktu."
      },
      {
        "heading": "2. Komponen Utama Dokumen PROTA",
        "content": "Dokumen PROTA terdiri dari komponen utama berikut:\n1. **Identitas Satuan Pendidikan:** Nama sekolah, mata pelajaran (Bahasa Jepang), kelas/fase (Fase F - Kelas XI/XII), dan tahun ajaran berjalan.\n2. **Capaian Pembelajaran (CP) / KD:** Target kompetensi atau tema materi pokok yang wajib dikuasai peserta didik.\n3. **Analisis Alokasi Waktu (Jam Pelajaran - JP):** Total jam pelajaran yang dialokasikan untuk setiap bab/elemen kompetensi.\n4. **Analisis Mingguan:** Perhitungan jumlah **Minggu Efektif (ME)** dan **Minggu Tidak Efektif** (misal: libur semester, asesmen nasional, masa pengenalan lingkungan sekolah, libur hari besar keagamaan)."
      },
      {
        "heading": "3. Tiga Acuan Utama & Langkah Penyusunan PROTA",
        "content": "Dalam menyusun PROTA, guru berpatokan pada 3 dokumen acuan pokok:\n1. **Kalender Pendidikan (Kaldik):** Menghitung jumlah minggu dalam satu tahun dan memilah minggu efektif belajar.\n2. **Dokumen Kurikulum (CP / Silabus):** Mengidentifikasi ruang lingkup materi pokok dan kedalaman target capaian.\n3. **Struktur Kurikulum (Alokasi Jam):** Mengetahui beban jam tatap muka per minggu (misal: 2 JP atau 3 JP per minggu).\n\n**Langkah-Langkah Penyusunan PROTA:**\n1. Mengidentifikasi dokumen acuan (Kaldik dan Struktur Kurikulum).\n2. Menghitung jumlah minggu dalam satu tahun dan menentukan jumlah **Minggu Efektif (ME)**.\n3. Mengidentifikasi capaian kompetensi (CP) serta materi pokok dan sub-materi bahasa Jepang.\n4. Menentukan alokasi waktu pembelajaran (total JP efektif = ME × JP per minggu).\n5. Mendistribusikan alokasi jam ke masing-masing materi pokok dalam format tabel PROTA."
      },
      {
        "heading": "4. Konsep Dasar & Hakikat PROSEM (Program Semester)",
        "content": "**Program Semester (PROSEM)** adalah rencana pembelajaran yang menjabarkan pelaksanaan pembelajaran secara rinci selama **satu semester**. \n\nPROSEM memuat pokok bahasan/sub-pokok bahasan, alokasi jam tatap muka, serta pemetaan minggu pelaksanaan secara terjadwal di setiap bulan.\n\nDalam konteks mata pelajaran Bahasa Jepang, PROSEM menjadwalkan urutan materi secara runut:\n* Pengenalan sistem huruf (*Hiragana & Katakana*)\n* Kosakata (*Goi*) dan Pola Kalimat (*Bunpou*)\n* Kanji dasar\n* Keterampilan menyimak (*Choukai*) dan berbicara (*Kaiwa*)\n* Keterampilan membaca wacana (*Dokkai*) dan menulis (*Sakubun*)\n* Proyek budaya atau presentasi akhir semester."
      },
      {
        "heading": "5. Hubungan Hirarkis: PROTA vs PROSEM",
        "content": "Keduanya memiliki hubungan keterikatan yang mutlak:\n$$\\text{PROTA} \\longrightarrow \\text{PROSEM} \\longrightarrow \\text{MODUL AJAR / RPP}$$\n\n| Dimensi | PROTA (Program Tahunan) | PROSEM (Program Semester) |\n|---|---|---|\n| **Rentang Waktu** | 1 Tahun Ajaran Penuh (2 Semester: Ganjil & Genap). | 1 Semester (sekitar 6 bulan). |\n| **Tingkat Rincian** | Alokasi waktu makro per materi pokok/kompetensi. | Alokasi mikro per pertemuan dan per minggu kalender. |\n| **Posisi Penyusunan** | Disusun pertama kali sebagai dokumen induk. | Disusun setelah PROTA selesai (penjabaran operasional). |\n| **Contoh Pemetaan** | Alokasi 1 Bab = 12 JP dalam setahun. | Dijabarkan menjadi 6 pertemuan (2 JP/minggu) pada bulan September minggu ke-1 sampai ke-3. |"
      },
      {
        "heading": "6. Langkah-Langkah Sistematis Menyusun PROSEM",
        "content": "Tahapan teknis menyusun matriks PROSEM:\n1. **Menelaah Kalender Pendidikan & Menghitung Jam Efektif Semester:**\n   * Menghitung total minggu dalam satu semester.\n   * Menandai minggu tidak efektif (ujian tengah/akhir semester, libur semester, kegiatan jeda sekolah).\n   * Menghitung total Minggu Efektif (ME) dan Jam Pelajaran (JP) efektif.\n2. **Menyiapkan Format Matriks PROSEM:**\n   * Kolom Identitas, Materi Pokok/Sub-Materi, Alokasi JP, serta kolom Bulan dan Minggu (Minggu 1, 2, 3, 4, 5).\n3. **Memasukkan Data dari PROTA:**\n   * Memindahkan sekuens materi dan alokasi JP per materi pokok dari PROTA ke baris PROSEM.\n4. **Memetakan Minggu Tidak Efektif:**\n   * Memberikan tanda arsir atau warna khusus pada minggu-minggu ujian dan libur agar tidak terisi jadwal KBM.\n5. **Mendistribusikan Jam Pelajaran (JP):**\n   * Membagi JP ke minggu efektif sesuai beban materi.\n   * Menyisipkan waktu khusus untuk asesmen sumatif lingkup materi dan waktu remedial/pengayaan.\n6. **Re-checking & Pengesahan:**\n   * Memeriksa kesesuaian total JP baris dan kolom agar jumlahnya presisi sesuai kalender pendidikan, lalu disahkan oleh kepala sekolah."
      }
    ],
    "key_takeaways": [
      "PROTA adalah rencana alokasi waktu satu tahun ajaran; PROSEM adalah penjabaran operasional dalam satu semester.",
      "PROSEM tidak dapat dibuat sebelum PROTA selesai disusun.",
      "Acuan utama: Kalender Pendidikan (Kaldik), Dokumen Kurikulum (CP), dan Struktur Alokasi Jam Tatap Muka.",
      "Rumus JP Efektif = Jumlah Minggu Efektif (ME) × Alokasi JP per Minggu.",
      "Minggu tidak efektif (libur, ujian nasional, jeda semester) wajib diarsir dalam matriks PROSEM."
    ]
  },
  {
    "id": "modul-7",
    "number": 7,
    "rpsWeek": "Minggu 9 (Pasca-UTS / Pengayaan)",
    "title": "Program Literasi (GLS) & Pembelajaran Bahasa Jepang Berbasis Literasi",
    "subtitle": "Multiliterasi, 3 Fase Implementasi, Strategi Membaca Kognitif, & Struktur Ki-Shou-Ten-Ketsu",
    "tags": [
      "Literasi",
      "GLS",
      "Multimodal",
      "SQ3R",
      "Ki-Shou-Ten-Ketsu",
      "PISA"
    ],
    "icon": "book-check",
    "summary": "Meninjau konsep Gerakan Literasi Sekolah (GLS) dari definisi tradisional ke multiliterasi abad 21. Membedah 6 literasi dasar Kemendikbud, 3 fase pembudayaan literasi (Pembiasaan, Pengembangan, Pembelajaran), strategi instruksional membaca 3 level kognitif, serta struktur logika karangan Jepang Ki-Shou-Ten-Ketsu (起承転結).",
    "sections": [
      {
        "heading": "1. Pergeseran Paradigma: Literasi Tradisional vs Multiliterasi Abad 21",
        "content": "* **Definisi Konvensional (Tradisional)**:\n  Literasi dimaknai secara sempit sebatas 'keaksaraan' (*reading & writing / calistung*). Seseorang dinilai literat jika tidak buta huruf dan bisa mengeja bacaan.\n\n* **Definisi Abad 21 (Multiliterasi)**:\n  Kemampuan seseorang dalam mengidentifikasi, memahami, menafsirkan, membuat, mengomunikasikan, dan merasionalkan berbagai bentuk teks (cetak, visual, audio, spasial, dan digital) atau **teks multimodal**. Siswa tidak hanya dituntut bisa membaca kata, tetapi mampu bernalar kritis (*critical literacy*) untuk memilah fakta dari opini di era luapan informasi (*infobesity* & hoax)."
      },
      {
        "heading": "2. Enam Literasi Dasar Kemendikbud & 6 Prinsip Beers (2009)",
        "content": "Kemendikbudristek menetapkan 6 Literasi Dasar yang wajib ditanamkan:\n1. **Literasi Baca-Tulis**: Memahami dan merefleksikan teks tertulis untuk pengembangan diri.\n2. **Literasi Numerasi**: Menggunakan konsep matematika dalam pemecahan masalah nyata.\n3. **Literasi Sains**: Menggunakan pengetahuan ilmiah untuk menjelaskan fenomena alam dan menarik simpulan berbasis bukti.\n4. **Literasi Digital**: Memanfaatkan piranti digital secara aman, etis, dan produktif.\n5. **Literasi Finansial**: Mengelola keuangan, anggaran, dan risiko secara bijak.\n6. **Literasi Budaya & Kewargaan**: Memahami dan merawat keanekaragaman budaya serta hak/kewajiban sebagai warga negara.\n\n* **Prinsip GLS menurut Beers (2009)**:\n  Perkembangan literasi harus disesuaikan dengan tahapan usia siswa, kegiatannya beragam, terintegrasi ke dalam semua kurikulum mapel, membaca-menulis dapat berlangsung kapan saja, mengembangkan budaya tutur lisan, serta memupuk kesadaran kebinekaan."
      },
      {
        "heading": "3. Tiga Fase Pelaksanaan Gerakan Literasi Sekolah (GLS)",
        "content": "Program GLS tidak bisa instan, melainkan dilaksanakan melalui 3 tahapan berjenjang:\n\n1. **Fase 1: Pembiasaan (Penumbuhan Minat Baca)**\n   * *Aktivitas:* Membaca buku non-pelajaran selama 15 menit setiap pagi sebelum jam pertama dimulai (membaca dalam hati atau guru membacakan cerita).\n   * *Ciri Khas:* **Murni tanpa tagihan akademis/tugas rapor!** Tujuannya semata-mata menumbuhkan kecintaan membaca yang rileks dan menyenangkan.\n\n2. **Fase 2: Pengembangan (Penajaman Daya Pikir & Non-Akademis)**\n   * *Aktivitas:* Siswa merespons buku yang dibaca dengan kegiatan kreatif tanpa beban nilai rapor: menulis review/sinopsis singkat di pohon literasi, bedah buku di pojok baca kelas, mendongeng (*kamishibai*), atau kunjungan rutin perpustakaan.\n\n3. **Fase 3: Pembelajaran (Integrasi Kurikulum & Tagihan Akademik)**\n   * *Aktivitas:* Strategi literasi diintegrasikan langsung ke dalam silabus semua mata pelajaran. Menggunakan teks multimodal untuk melatih High Order Thinking Skills (HOTS).\n   * *Ciri Khas:* **Memiliki tagihan akademis**, seperti portofolio analisis wacana, makalah komparasi teks, dan proyek karya yang masuk dalam komponen penilaian semester."
      },
      {
        "heading": "4. Strategi Literasi dalam Pembelajaran Membaca Bahasa Jepang",
        "content": "Tahapan membaca teks bahasa Jepang berbasis literasi:\n* **Kegiatan Prabaca (Pre-reading)**: Membangun skemata menggunakan KWL Chart (*What I Know, What I Want to know, What I Learned*), menebak alur teks lewat gambar sampul (*Yosoku*).\n* **Kegiatan Saat Membaca (While-reading - 3 Level Kognitif PISA)**:\n  1. *Find / Locate (Informasi Tersurat)*: Menemukan kata kunci, nama tokoh, waktu, atau fakta langsung dalam teks wacana Jepang.\n  2. *Interpret & Integrate (Memahami & Menyimpulkan)*: Menganalisis fungsi partikel penghubung, menafsirkan hubungan sebab-akibat antarkalimat, dan menyimpulkan ide pokok.\n  3. *Evaluate & Reflect (Mengevaluasi & Merefleksi)*: Mengkritisi pandangan penulis teks, membandingkan budaya dalam teks Jepang dengan realitas budaya di Indonesia.\n* **Kegiatan Pascabaca (Post-reading)**: Menulis tanggapan kreatif, diskusi kelompok metode Think-Pair-Share, membuat ringkasan infografis."
      },
      {
        "heading": "5. Struktur Retorika Karangan Jepang: Ki-Shou-Ten-Ketsu (起承転結)",
        "content": "Dalam literasi menulis bahasa Jepang, siswa diajarkan menyusun alur karangan menggunakan struktur tradisional Asia Timur:\n\n* **Ki (起 - Pengenalan)**: Memperkenalkan topik bahasan, latar waktu/tempat, atau pengantar masalah utama.\n* **Shou (承 - Pengembangan / Elaborasi)**: Melanjutkan dan mengembangkan informasi di bagian Ki dengan uraian lebih detail, data, atau narasi pendukung.\n* **Ten (転 - Kejutan / Sudut Pandang Baru)**: Bagian perubahan alur, kontras, analogi tak terduga, atau perspektif berbeda yang memantik rasa ingin tahu pembaca.\n* **Ketsu (結 - Kesimpulan / Resolusi)**: Penutup yang menyatukan alur Ki, Shou, dan Ten menjadi satu kesimpulan utuh, pandangan reflektif, atau pesan moral.\n\n**Contoh Teks Sakubun Singkat:**\n* (起) わたしは まいにち がっこうへ いきます。がっこうの せいかつは たのしいです。(Setiap hari saya pergi ke sekolah. Kehidupan sekolah menyenangkan.)\n* (承) まいにち いろいろな じゅぎょうを べんきょうします。ひるやすみに ともだちと ごはんを たべます。(Setiap hari belajar beragam pelajaran. Saat istirahat makan bersama teman.)\n* (転) でも、ときどき テストや しゅくだいが おおくて、たいへんです。(Namun, terkadang ujian dan PR sangat banyak sehingga berat.)\n* (結) ですから、いろいろな ことが ありますが、わたしは がっこうが だいすきです。(Oleh karena itu, walau ada berbagai hal, saya tetap sangat mencintai sekolah.)"
      }
    ],
    "key_takeaways": [
      "Multiliterasi abad 21 melibatkan kemampuan membaca kritis teks multimodal (visual, lisan, digital).",
      "3 Fase GLS: Pembiasaan (15 mnt tanpa tagihan) -> Pengembangan (respons kreatif santai) -> Pembelajaran (terintegrasi kurikulum berbobot nilai).",
      "3 Level kognitif membaca: Find/Locate (tersurat), Interpret & Integrate (simpulan), Evaluate & Reflect (kritisi & kaitkan).",
      "Struktur logika tulisan Jepang Ki-Shou-Ten-Ketsu: Pengenalan (Ki) -> Pengembangan (Shou) -> Sudut pandang baru/kejutan (Ten) -> Kesimpulan (Ketsu)."
    ]
  }
];

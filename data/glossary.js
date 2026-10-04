// Data Kamus Istilah Keikaku UTS (Termasuk PROTA & PROSEM)
const GLOSSARY_DATA = [
  {
    "term": "PROTA (Program Tahunan)",
    "kanji": "年間指導計画",
    "category": "Kurikulum",
    "definition": "Rencana penetapan alokasi waktu satu tahun ajaran penuh untuk mencapai Capaian Pembelajaran (CP) yang menjadi acuan induk perangkat pembelajaran."
  },
  {
    "term": "PROSEM (Program Semester)",
    "kanji": "学期指導計画",
    "category": "Kurikulum",
    "definition": "Rencana pembelajaran operasional yang menjabarkan alokasi waktu dan urutan materi pokok per minggu dan per pertemuan dalam satu semester."
  },
  {
    "term": "Minggu Efektif (ME)",
    "kanji": "有効授業週数",
    "category": "Manajemen Waktu",
    "definition": "Jumlah minggu dalam kalender pendidikan yang benar-benar digunakan untuk kegiatan proses belajar-mengajar efektif di luar minggu libur dan ujian."
  },
  {
    "term": "Jam Pelajaran (JP)",
    "kanji": "授業時間数",
    "category": "Manajemen Waktu",
    "definition": "Satuan durasi pembelajaran tatap muka di sekolah (misal: 1 JP = 45 menit di SMA; total JP = ME × JP/minggu)."
  },
  {
    "term": "Kalender Pendidikan (Kaldik)",
    "kanji": "学校暦 / 教育カレンダー",
    "category": "Manajemen Waktu",
    "definition": "Pengaturan waktu untuk kegiatan pembelajaran peserta didik selama satu tahun ajaran yang mencakup permulaan tahun ajaran, minggu efektif, dan hari libur."
  },
  {
    "term": "RPS (Rencana Pembelajaran Semester)",
    "kanji": "シラバス / 授業計画書",
    "category": "Kurikulum",
    "definition": "Dokumen perencanaan pembelajaran perguruan tinggi yang memuat CPL, CPMK, Sub-CPMK, indikator, materi mingguan, metode, dan bobot penilaian."
  },
  {
    "term": "Course Design",
    "kanji": "コースデザイン",
    "category": "Kurikulum",
    "definition": "Proses perancangan pembelajaran paling awal yang mencakup pendataan kebutuhan, perumusan silabus, pelaksanaan, hingga evaluasi program."
  },
  {
    "term": "Nīzu Chōsa",
    "kanji": "ニーズ調査",
    "category": "Survei",
    "definition": "Pendataan Kebutuhan: survei untuk menggali tujuan, alasan, target level JLPT, dan situasi penggunaan bahasa Jepang pembelajar."
  },
  {
    "term": "Redinesu Chōsa",
    "kanji": "レディネス調査",
    "category": "Survei",
    "definition": "Pendataan Kesiapan (既習能力調査): survei untuk mengukur kemampuan awal bahasa Jepang, riwayat belajar, dan penguasaan huruf sebelumnya."
  },
  {
    "term": "Gengo Gakushū Tekisei Chōsa",
    "kanji": "言語学習適性調査",
    "category": "Survei",
    "definition": "Pendataan Bakat Kebahasaan: pemetaan karakteristik kognitif bawaan (daya membedakan bunyi, kepekaan tata bahasa, dan kapasitas daya ingat)."
  },
  {
    "term": "Gakushū Jōken Chōsa",
    "kanji": "学習条件調査",
    "category": "Survei",
    "definition": "Pendataan Kondisi/Syarat Belajar: informasi operasional seperti bahasa ibu, gaya belajar, jam belajar, dan sarana perangkat."
  },
  {
    "term": "Can-Do Statement",
    "kanji": "Can-do",
    "category": "JF Standard",
    "definition": "Pernyataan deskriptor kemampuan fungsional mengenai hal-hal nyata apa saja yang dapat dilakukan pembelajar menggunakan bahasa Jepang."
  },
  {
    "term": "JF Standard",
    "kanji": "JF日本語教育スタンダード",
    "category": "Standar",
    "definition": "Standar pendidikan bahasa Jepang yang dikembangkan oleh Japan Foundation berbasis kerangka CEFR untuk melatih kompetensi komunikatif."
  },
  {
    "term": "Capaian Pembelajaran (CP)",
    "kanji": "到達目標",
    "category": "Kurikulum Merdeka",
    "definition": "Kompetensi pembelajaran yang harus dicapai peserta didik pada setiap fase perkembangan (Fase F = SMA Kelas 11 & 12)."
  },
  {
    "term": "Alur Tujuan Pembelajaran (ATP)",
    "kanji": "学習目標シークエンス",
    "category": "Kurikulum Merdeka",
    "definition": "Rangkaian tujuan pembelajaran yang tersusun secara logis dan runtut dari awal hingga akhir fase."
  },
  {
    "term": "Chōkai / Kiku",
    "kanji": "聴解 / 聞く",
    "category": "4 Skill",
    "definition": "Keterampilan menyimak/mendengarkan bahasa lisan dengan pemahaman dan nalar kritis (keterampilan reseptif)."
  },
  {
    "term": "Kaiwa / Hanasu",
    "kanji": "会話 / 話す",
    "category": "4 Skill",
    "definition": "Keterampilan berbicara dan berkomunikasi dua arah secara lisan menggunakan bahasa Jepang (keterampilan produktif)."
  },
  {
    "term": "Dokkai / Yomu",
    "kanji": "読解 / 読む",
    "category": "4 Skill",
    "definition": "Keterampilan membaca dan memahami makna serta pesan tersurat/tersirat dalam karangan tertulis (keterampilan reseptif)."
  },
  {
    "term": "Sakubun / Kaku",
    "kanji": "作文 / 書く",
    "category": "4 Skill",
    "definition": "Keterampilan menulis karangan utuh untuk menuangkan gagasan, perasaan, dan informasi (keterampilan produktif)."
  },
  {
    "term": "Seidoku",
    "kanji": "精読",
    "category": "Membaca",
    "definition": "Membaca intensif: menelaah kalimat secara cermat, memeriksa kosakata, tata bahasa, dan susunan wacana secara teliti."
  },
  {
    "term": "Sokudoku",
    "kanji": "速読",
    "category": "Membaca",
    "definition": "Membaca cepat: menangkap intisari teks secara umum dari konteks tanpa terhambat membuka kamus."
  },
  {
    "term": "Skimming",
    "kanji": "スキミング",
    "category": "Membaca",
    "definition": "Teknik membaca sekilas wacana (judul, subjudul, awal/akhir paragraf) untuk menangkap ide pokok secara global."
  },
  {
    "term": "Scanning",
    "kanji": "スキャニング",
    "category": "Membaca",
    "definition": "Teknik memindai teks secara cepat untuk mencari lokasi informasi spesifik (angka, waktu, nama orang)."
  },
  {
    "term": "Yosoku",
    "kanji": "予測",
    "category": "Membaca",
    "definition": "Membaca prediktif: membuat prakiraan isi teks sebelum membaca tuntas berdasarkan judul, gambar, atau kata penghubung."
  },
  {
    "term": "Kamishibai",
    "kanji": "紙芝居",
    "category": "Media",
    "definition": "Seni teater mendongeng tradisional Jepang menggunakan panel-panel gambar bertingkat berbingkai kayu."
  },
  {
    "term": "Tadoku",
    "kanji": "多読",
    "category": "Membaca",
    "definition": "Membaca ekstensif: melatih membaca banyak materi menyenangkan tanpa beban kamus dan tanpa ujian hafalan."
  },
  {
    "term": "GLS (Gerakan Literasi Sekolah)",
    "kanji": "学校識字運動",
    "category": "Literasi",
    "definition": "Gerakan terencana yang melibatkan seluruh ekosistem sekolah untuk menumbuhkan budaya membaca dan bernalar kritis."
  },
  {
    "term": "Ki-Shou-Ten-Ketsu",
    "kanji": "起承転結",
    "category": "Menulis",
    "definition": "Struktur logika karangan Asia Timur: Pengenalan (Ki), Pengembangan (Shou), Titik balik/kejutan (Ten), dan Kesimpulan (Ketsu)."
  },
  {
    "term": "4C Skills",
    "kanji": "21世紀スキル",
    "category": "Abad 21",
    "definition": "Empat kompetensi abad 21: Critical Thinking (Kritis), Creativity (Kreatif), Collaboration (Kerjasama), dan Communication (Komunikasi)."
  },
  {
    "term": "GTM (Grammar Translation Method)",
    "kanji": "文法訳読法",
    "category": "Metode",
    "definition": "Metode pembelajaran tradisional yang berfokus pada penghafalan kaidah tata bahasa dan terjemahan harfiah kata demi kata."
  },
  {
    "term": "ALM (Audio-Lingual Method)",
    "kanji": "オーディオリンガル法",
    "category": "Metode",
    "definition": "Metode pembiasaan lisan berbasis behaviorisme melalui latihan pola (pattern drills) dan dialog mekanistis berulang-ulang."
  },
  {
    "term": "Language Ego",
    "kanji": "言語自我",
    "category": "Afektif",
    "definition": "Identitas diri yang melekat kuat pada bahasa ibu seseorang, yang dapat menimbulkan rasa cemas/enggan saat belajar bahasa asing."
  },
  {
    "term": "Language Anxiety",
    "kanji": "言語不安",
    "category": "Emosional",
    "definition": "Kecemasan berbahasa; bisa bersifat debilitatif (melumpuhkan/merugikan) atau fasilitatif (ketegangan positif yang memacu semangat)."
  },
  {
    "term": "Critical Period Hypothesis",
    "kanji": "臨界期仮説",
    "category": "Biologis",
    "definition": "Hipotesis masa biologis tertentu (sebelum pubertas) yang memudahkan perolehan aksen alami seperti penutur asli."
  },
  {
    "term": "Interlanguage",
    "kanji": "中間言語",
    "category": "Linguistik",
    "definition": "Sistem bahasa transisi mandiri yang dibangun siswa di antara bahasa pertama dan bahasa sasaran dalam proses belajar."
  },
  {
    "term": "Fosilisasi (Fossilization)",
    "kanji": "化石化",
    "category": "Linguistik",
    "definition": "Kondisi membekunya kesalahan berbahasa tertentu secara permanen akibat pengulangan tanpa koreksi terarah."
  },
  {
    "term": "Aizuchi",
    "kanji": "相槌",
    "category": "Pragmatik",
    "definition": "Ujaran respons singkat lisan (Hai, Naruhodo, Ee) yang wajib diberikan pendengar di Jepang untuk menandakan ia aktif menyimak."
  },
  {
    "term": "Uchi dan Soto",
    "kanji": "内と外",
    "category": "Sosiokultural",
    "definition": "Konsep pembagian sosial antara kelompok dalam (Uchi - diri/keluarga/kantor sendiri) dan luar (Soto - tamu/klien) yang menentukan ragam Keigo."
  }
];

# -*- coding: utf-8 -*-
"""
Generator for Flashcards Data (data/flashcards.js)
Strictly aligned with official RPS Jugyou Keikaku order.
"""

import json

flashcards = [
    # =========================================================================
    # MODUL 1 (Minggu 1): Paradigma & Faktor Pembelajaran Bahasa Asing
    # =========================================================================
    {
        "id": "fc-1-1",
        "moduleId": "modul-1",
        "moduleTitle": "Modul 1: Paradigma Bahasa Asing",
        "front": "Apa perbedaan hakikat belajar bahasa dalam pandangan Behavioris vs Komunikatif?",
        "back": "• Behavioris: Belajar bahasa adalah pembentukan kebiasaan mekanis (habit formation) lewat stimulus-respons, repetisi, dan drill hafalan rumus.\n• Komunikatif: Belajar bahasa adalah proses interaksi bermakna untuk menyampaikan pesan fungsional (language use) dalam kehidupan nyata.",
        "tag": "Paradigma",
        "difficulty": "Medium"
    },
    {
        "id": "fc-1-2",
        "moduleId": "modul-1",
        "moduleTitle": "Modul 1: Paradigma Bahasa Asing",
        "front": "Apa perbedaan Motivasi Integratif dan Motivasi Instrumental?",
        "back": "• Motivasi Integratif: Keinginan belajar bahasa karena ingin berbaur, memahami, dan menjadi bagian dari budaya penutur asli Jepang.\n• Motivasi Instrumental: Belajar bahasa untuk tujuan utiliter/praktis (lulus ujian JLPT, mendapatkan pekerjaan, kenaikan gaji, beasiswa).",
        "tag": "Faktor Afektif",
        "difficulty": "Medium"
    },
    {
        "id": "fc-1-3",
        "moduleId": "modul-1",
        "moduleTitle": "Modul 1: Paradigma Bahasa Asing",
        "front": "Apa perbedaan Kecemasan Debilitatif dan Kecemasan Fasilitatif?",
        "back": "• Kecemasan Debilitatif: Rasa takut dan gugup berlebihan yang melumpuhkan mental siswa sehingga tidak berani berbicara.\n• Kecemasan Fasilitatif: Sedikit ketegangan positif yang justru memicu adrenalin siswa untuk fokus belajar dan mempersiapkan diri dengan baik.",
        "tag": "Faktor Emosional",
        "difficulty": "Medium"
    },
    {
        "id": "fc-1-4",
        "moduleId": "modul-1",
        "moduleTitle": "Modul 1: Paradigma Bahasa Asing",
        "front": "Apa yang dimaksud dengan 'Language Ego' (Ego Bahasa)?",
        "back": "Identitas diri yang sangat terikat dengan bahasa pertama seseorang. Belajar bahasa asing menuntut siswa melunakkan pertahanan egonya agar tidak merasa teralienasi atau minder saat mengekspresikan norma bahasa baru.",
        "tag": "Faktor Afektif",
        "difficulty": "Hard"
    },
    {
        "id": "fc-1-5",
        "moduleId": "modul-1",
        "moduleTitle": "Modul 1: Paradigma Bahasa Asing",
        "front": "Jelaskan Hipotesis Periode Kritis (Critical Period Hypothesis)!",
        "back": "Hipotesis biologis yang menyatakan ada masa usia tertentu (sebelum pubertas) di mana seseorang dapat menguasai bahasa asing dengan pelafalan/aksen seperti penutur asli secara alami. Setelah masa itu, aksen native lebih sulit diraih.",
        "tag": "Faktor Biologis",
        "difficulty": "Medium"
    },
    {
        "id": "fc-1-6",
        "moduleId": "modul-1",
        "moduleTitle": "Modul 1: Paradigma Bahasa Asing",
        "front": "Apa yang dimaksud dengan Interlanguage (Bahasa Antara)?",
        "back": "Sistem linguistik transisi yang dibangun siswa secara mandiri di antara bahasa ibu (L1) dan bahasa target (L2). Kesalahan dalam interlanguage adalah bukti dinamis bahwa siswa sedang berproses mengkonstruksi kaidah bahasa.",
        "tag": "Faktor Linguistik",
        "difficulty": "Hard"
    },
    {
        "id": "fc-1-7",
        "moduleId": "modul-1",
        "moduleTitle": "Modul 1: Paradigma Bahasa Asing",
        "front": "Apa itu Fosilisasi (Fossilization) dan bagaimana cara mengatasinya?",
        "back": "Kondisi di mana kesalahan bahasa menetap secara permanen dalam kemampuan siswa karena dibiarkan terus menerus tanpa koreksi.\nCara mengatasi: Memberikan corrective feedback yang terarah, latihan reflektif, dan menumbuhkan kesadaran diri (noticing) siswa.",
        "tag": "Faktor Linguistik",
        "difficulty": "Hard"
    },
    {
        "id": "fc-1-8",
        "moduleId": "modul-1",
        "moduleTitle": "Modul 1: Paradigma Bahasa Asing",
        "front": "Mengapa budaya Aizuchi (相槌) penting dalam percakapan bahasa Jepang?",
        "back": "Aizuchi adalah respons lisan pendek (Hai, Ee, Naruhodo) saat mendengarkan. Di Jepang, aizuchi wajib diberikan untuk menunjukkan bahwa pendengar aktif memperhatikan. Diam tanpa aizuchi dianggap tidak peduli atau tidak paham.",
        "tag": "Pragmatik & Budaya",
        "difficulty": "Medium"
    },
    {
        "id": "fc-1-9",
        "moduleId": "modul-1",
        "moduleTitle": "Modul 1: Paradigma Bahasa Asing",
        "front": "Jelaskan konsep Uchi (内) dan Soto (外) dalam penentuan ragam bahasa sopan (Keigo)!",
        "back": "• Uchi: Kelompok dalam (diri sendiri, keluarga, rekan satu kantor).\n• Soto: Kelompok luar (orang lain, tamu, pelanggan kantor lain).\nAturan Keigo: Seseorang merendahkan pihak Uchi (pakai Kenjougo) dan meninggikan pihak Soto (pakai Sonkeigo).",
        "tag": "Pragmatik & Budaya",
        "difficulty": "Hard"
    },

    # =========================================================================
    # MODUL 2 (Minggu 2-3): Karakteristik & Perencanaan Pembelajaran
    # =========================================================================
    {
        "id": "fc-2-1",
        "moduleId": "modul-2",
        "moduleTitle": "Modul 2: Perencanaan Pembelajaran",
        "front": "Sebutkan 5 karakteristik unsur pembelajaran bahasa Jepang!",
        "back": "1. Hatsuon (発音 - Pelafalan)\n2. Moji (文字 - Hiragana, Katakana, Kanji)\n3. Goi (語彙 - Kosakata)\n4. Bunpou (文法 - Tata Bahasa)\n5. Hyougen (表現 - Ungkapan & Kesantunan)",
        "tag": "Unsur Bahasa",
        "difficulty": "Easy"
    },
    {
        "id": "fc-2-2",
        "moduleId": "modul-2",
        "moduleTitle": "Modul 2: Perencanaan Pembelajaran",
        "front": "Apa standar acuan kompetensi pembelajaran bahasa Jepang Fase F (SMA) dalam Kurikulum Merdeka?",
        "back": "Setara Level A2.1 pada JF Standard for Japanese-Language Education (Japan Foundation), dengan penekanan pada kompetensi komunikatif melalui teks multimodal dan kompetensi interkultural.",
        "tag": "Kurikulum Merdeka",
        "difficulty": "Medium"
    },
    {
        "id": "fc-2-3",
        "moduleId": "modul-2",
        "moduleTitle": "Modul 2: Perencanaan Pembelajaran",
        "front": "Apa filosofi utama dari konsep 'Can-Do' pada JF Standard?",
        "back": "Berfokus pada 'Apa yang dapat dilakukan pembelajar menggunakan bahasa Jepang dalam kehidupan nyata', bukan sekadar berapa banyak hafalan rumus tata bahasa dan kanji.",
        "tag": "JF Standard",
        "difficulty": "Easy"
    },
    {
        "id": "fc-2-4",
        "moduleId": "modul-2",
        "moduleTitle": "Modul 2: Perencanaan Pembelajaran",
        "front": "Jelaskan hirarki penurunan Capaian Pembelajaran: CP -> TP -> ATP!",
        "back": "1. Analisis CP: Memahami rasional dan capaian fase secara utuh.\n2. Rumuskan TP (Tujuan Pembelajaran): Menurunkan CP menjadi tujuan operasional yang spesifik dan terukur.\n3. Susun ATP (Alur Tujuan Pembelajaran): Mengurutkan TP secara kronologis dan logis sebagai panduan modul ajar.",
        "tag": "Alur Dokumen",
        "difficulty": "Medium"
    },
    {
        "id": "fc-2-5",
        "moduleId": "modul-2",
        "moduleTitle": "Modul 2: Perencanaan Pembelajaran",
        "front": "Sebutkan 3 prinsip Pembelajaran Mendalam (Deep Learning)!",
        "back": "1. Berkesadaran (mindful, tahu tujuan dan manfaat belajar)\n2. Bermakna (meaningful, relevan dengan kehidupan nyata & konteks)\n3. Menggembirakan (joyful, memicu antusiasme & rasa aman belajar).",
        "tag": "Deep Learning",
        "difficulty": "Easy"
    },
    {
        "id": "fc-2-6",
        "moduleId": "modul-2",
        "moduleTitle": "Modul 2: Perencanaan Pembelajaran",
        "front": "Sebutkan 3 fase Pengalaman Belajar peserta didik!",
        "back": "1. Memahami (mengeksplorasi konsep dan makna bahasa)\n2. Mengaplikasi (mempraktikkan dalam komunikasi/kegiatan nyata)\n3. Merefleksi (menilai perkembangan diri dan menetapkan tindak lanjut).",
        "tag": "Pengalaman Belajar",
        "difficulty": "Easy"
    },
    {
        "id": "fc-2-7",
        "moduleId": "modul-2",
        "moduleTitle": "Modul 2: Perencanaan Pembelajaran",
        "front": "Jelaskan 3 jenis asesmen dalam pembelajaran bahasa Jepang!",
        "back": "• Asesmen Awal (Diagnostik): Memetakan kesiapan & kemampuan awal siswa sebelum pembelajaran.\n• Asesmen Proses (Formatif): Memantau perkembangan belajar dan memberikan umpan balik perbaikan berkelanjutan saat KBM.\n• Asesmen Akhir (Sumatif): Mengukur ketercapaian tujuan pembelajaran di akhir materi/semester.",
        "tag": "Asesmen",
        "difficulty": "Medium"
    },

    # =========================================================================
    # MODUL 3 (Minggu 4): Course Design (コースデザイン)
    # =========================================================================
    {
        "id": "fc-3-1",
        "moduleId": "modul-3",
        "moduleTitle": "Modul 3: Course Design",
        "front": "Apa itu Course Design (コースデザイン) dalam pembelajaran bahasa Jepang?",
        "back": "Proses perancangan paling awal yang dilakukan oleh institusi atau pengajar sebelum pembelajaran dimulai. Mencakup pendataan kebutuhan & kesiapan, analisis kurikulum & silabus, pelaksanaan, hingga evaluasi program untuk continuous improvement.",
        "tag": "Konsep Dasar",
        "difficulty": "Easy"
    },
    {
        "id": "fc-3-2",
        "moduleId": "modul-3",
        "moduleTitle": "Modul 3: Course Design",
        "front": "Apa yang dimaksud dengan ニーズ調査 (Nīzu Chōsa)? Apa saja aspek yang disurvei?",
        "back": "Pendataan Kebutuhan: survei untuk menggali tujuan belajar dan konteks bahasa Jepang yang dibutuhkan pembelajar.\nAspek: untuk apa belajar, siapa lawan bicara, di mana digunakan, keterampilan apa yang diprioritaskan, target level (misal JLPT N4/N3), dan penghargaan yang diharapkan.",
        "tag": "4 Pilar Survei",
        "difficulty": "Medium"
    },
    {
        "id": "fc-3-3",
        "moduleId": "modul-3",
        "moduleTitle": "Modul 3: Course Design",
        "front": "Apa yang dimaksud dengan レディネス調査 (Redinesu Chōsa)?",
        "back": "Pendataan Kesiapan (既習能力調査): survei untuk mengetahui modal/kemampuan awal bahasa Jepang pembelajar. Apakah sudah pernah belajar sebelumnya, materi apa yang telah dikuasai, penguasaan huruf Kana/Kanji, dan sertifikat yang dimiliki.",
        "tag": "4 Pilar Survei",
        "difficulty": "Medium"
    },
    {
        "id": "fc-3-4",
        "moduleId": "modul-3",
        "moduleTitle": "Modul 3: Course Design",
        "front": "Sebutkan 3 dimensi dalam 言語学習適性調査 (Gengo Gakushuu Tekisei Chousa)!",
        "back": "1. Kemampuan membedakan bunyi fonologis (phonetic coding ability)\n2. Kepekaan terhadap aturan tata bahasa (grammatical sensitivity)\n3. Kapasitas daya ingat asosiatif (memory retention).",
        "tag": "4 Pilar Survei",
        "difficulty": "Hard"
    },
    {
        "id": "fc-3-5",
        "moduleId": "modul-3",
        "moduleTitle": "Modul 3: Course Design",
        "front": "Apa saja aspek dalam 学習条件調査 (Gakushuu Jouken Chousa)?",
        "back": "Pendataan Kondisi/Syarat Pembelajaran: bahasa ibu (L1), bahasa asing lain yang dikuasai, gaya belajar yang disukai, riwayat kunjungan ke luar negeri, ketersediaan alokasi waktu, serta fasilitas sarana.",
        "tag": "4 Pilar Survei",
        "difficulty": "Medium"
    },
    {
        "id": "fc-3-6",
        "moduleId": "modul-3",
        "moduleTitle": "Modul 3: Course Design",
        "front": "Jelaskan perbedaan mendasar antara 'Pendataan' (調査) dan 'Analisis' (分析)!",
        "back": "• Pendataan (Chōsa): Proses menghimpun data mentah dari calon pembelajar secara objektif lewat instrumen (angket, tes awal).\n• Analisis (Bunseki): Proses mengolah dan menginterpretasikan data tersebut untuk merumuskan keputusan kurikuler (tujuan pembelajaran, materi silabus, bahan ajar, dan metode evaluasi).",
        "tag": "Distingsi Konsep",
        "difficulty": "Hard"
    },

    # =========================================================================
    # MODUL 4 (Minggu 5): Integrasi 4 Skill Berbahasa & 4C
    # =========================================================================
    {
        "id": "fc-4-1",
        "moduleId": "modul-4",
        "moduleTitle": "Modul 4: Integrasi 4 Skill & 4C",
        "front": "Sebutkan pengelompokan 4 keterampilan bahasa menjadi Reseptif dan Produktif!",
        "back": "• Keterampilan Reseptif (Menerima): Menyimak (聴く/聞く) dan Membaca (読む).\n• Keterampilan Produktif (Menghasilkan): Berbicara (話す) dan Menulis (書く).",
        "tag": "Klasifikasi Skill",
        "difficulty": "Easy"
    },
    {
        "id": "fc-4-2",
        "moduleId": "modul-4",
        "moduleTitle": "Modul 4: Integrasi 4 Skill & 4C",
        "front": "Jelaskan teknik Seidoku (精読) dan Sokudoku (速読) dalam dokkai!",
        "back": "• Seidoku (Membaca Intensif): Membaca cermat kata demi kata, memeriksa gramatika, partikel, dan struktur kalimat secara menyeluruh.\n• Sokudoku (Membaca Cepat): Membaca cepat untuk menyerap poin inti wacana dari konteks tanpa terhambat membuka kamus.",
        "tag": "Teknik Dokkai",
        "difficulty": "Medium"
    },
    {
        "id": "fc-4-3",
        "moduleId": "modul-4",
        "moduleTitle": "Modul 4: Integrasi 4 Skill & 4C",
        "front": "Apa perbedaan teknik Skimming dan Scanning dalam membaca?",
        "back": "• Skimming: Membaca sekilas pandang wacana untuk mendapatkan ide umum atau topik utama karangan.\n• Scanning: Memindai teks secara cepat untuk mencari lokasi informasi tertentu yang spesifik (angka, waktu, nama lokasi).",
        "tag": "Teknik Dokkai",
        "difficulty": "Easy"
    },
    {
        "id": "fc-4-4",
        "moduleId": "modul-4",
        "moduleTitle": "Modul 4: Integrasi 4 Skill & 4C",
        "front": "Sebutkan 4C dalam Keterampilan Pembelajaran Abad 21!",
        "back": "1. Critical Thinking (Berpikir Kritis & Pemecahan Masalah)\n2. Creativity (Kreativitas & Inovasi)\n3. Collaboration (Kolaborasi & Kerjasama)\n4. Communication (Komunikasi Efektif)",
        "tag": "Keterampilan Abad 21",
        "difficulty": "Easy"
    },

    # =========================================================================
    # MODUL 5 (Minggu 6): Bahan Ajar & Media Pembelajaran Abad 21
    # =========================================================================
    {
        "id": "fc-5-1",
        "moduleId": "modul-5",
        "moduleTitle": "Modul 5: Bahan Ajar & Media",
        "front": "Apa perbedaan esensial antara 'Bahan Ajar' (教材) dan 'Media Pembelajaran' (メディア)?",
        "back": "• Bahan Ajar: Materi/substansi informasi pengetahuan yang dipelajari (kosakata, tata bahasa, kanji, teks).\n• Media Pembelajaran: Wahana/alat perantara yang digunakan untuk menyalurkan bahan ajar tersebut kepada siswa (video, kartu, web, aplikasi).",
        "tag": "Distingsi Konsep",
        "difficulty": "Medium"
    },
    {
        "id": "fc-5-2",
        "moduleId": "modul-5",
        "moduleTitle": "Modul 5: Bahan Ajar & Media",
        "front": "Apa itu Kamishibai (紙芝居) dan apa manfaatnya dalam kelas bahasa Jepang?",
        "back": "Seni bercerita bergambar tradisional Jepang menggunakan panel gambar bertingkat. Bermanfaat untuk melatih choukai (menyimak alur cerita) dan kaiwa (menceritakan kembali kisah secara lisan/storytelling).",
        "tag": "Media Tradisional",
        "difficulty": "Medium"
    },
    {
        "id": "fc-5-3",
        "moduleId": "modul-5",
        "moduleTitle": "Modul 5: Bahan Ajar & Media",
        "front": "Apa itu platform 'Tadoku' dalam pembelajaran membaca bahasa Jepang?",
        "back": "Platform/metode membaca ekstensif (baca banyak) menggunakan buku berjenjang (graded readers). Prinsipnya: baca teks yang mudah, tanpa buka kamus, lewati kata yang tidak tahu, dan berhenti jika membosankan.",
        "tag": "Media Digital",
        "difficulty": "Hard"
    },

    # =========================================================================
    # MODUL 6 (Minggu 7 - NEW): Program Tahunan (PROTA) & Program Semester (PROSEM)
    # =========================================================================
    {
        "id": "fc-6-1",
        "moduleId": "modul-6",
        "moduleTitle": "Modul 6: PROTA & PROSEM",
        "front": "Apa pengertian Program Tahunan (PROTA) dalam perencanaan pembelajaran?",
        "back": "Rencana penetapan alokasi waktu selama satu tahun ajaran penuh untuk mencapai tujuan pembelajaran (CP/KD) yang telah ditetapkan kurikulum, yang menjadi pedoman induk dalam menyusun perangkat pembelajaran lainnya.",
        "tag": "Konsep PROTA",
        "difficulty": "Easy"
    },
    {
        "id": "fc-6-2",
        "moduleId": "modul-6",
        "moduleTitle": "Modul 6: PROTA & PROSEM",
        "front": "Sebutkan fungsi dan tujuan utama penyusunan PROTA!",
        "back": "• Fungsi: Sebagai pedoman kerja guru selama satu tahun dan alat kontrol evaluasi ketercapaian target kurikulum.\n• Tujuan: Mengoptimalkan penggunaan jam belajar efektif serta mencegah materi menumpuk di akhir semester.",
        "tag": "Fungsi PROTA",
        "difficulty": "Medium"
    },
    {
        "id": "fc-6-3",
        "moduleId": "modul-6",
        "moduleTitle": "Modul 6: PROTA & PROSEM",
        "front": "Sebutkan 3 dokumen acuan pokok dalam menyusun PROTA!",
        "back": "1. Kalender Pendidikan (Kaldik): menghitung minggu efektif dan libur.\n2. Dokumen Kurikulum (CP/Silabus): memetakan ruang lingkup materi pokok.\n3. Struktur Kurikulum (Alokasi Waktu): menentukan jam tatap muka per minggu (misal: 2 JP/minggu).",
        "tag": "Acuan PROTA",
        "difficulty": "Medium"
    },
    {
        "id": "fc-6-4",
        "moduleId": "modul-6",
        "moduleTitle": "Modul 6: PROTA & PROSEM",
        "front": "Apa pengertian Program Semester (PROSEM) dan apa bedanya dengan PROTA?",
        "back": "• PROSEM adalah rencana pembelajaran yang menjabarkan pelaksanaan pembelajaran secara rinci selama satu semester per minggu dan per pertemuan.\n• Bedanya: PROTA berjangka 1 tahun (alokasi waktu makro per materi), sedangkan PROSEM berjangka 1 semester (pemetaan mikro jadwal dan distribusi jam per minggu).",
        "tag": "Konsep PROSEM",
        "difficulty": "Medium"
    },
    {
        "id": "fc-6-5",
        "moduleId": "modul-6",
        "moduleTitle": "Modul 6: PROTA & PROSEM",
        "front": "Bagaimana hubungan hirarkis antara PROTA dan PROSEM? Mengapa PROSEM tidak bisa dibuat sebelum PROTA?",
        "back": "Alurnya: PROTA -> PROSEM -> Modul Ajar (RPP).\nPROSEM adalah penjabaran operasional dari PROTA. Alokasi jam dan urutan materi di PROSEM bersumber langsung dari pembagian waktu yang telah disepakati di dalam PROTA.",
        "tag": "Alur Hubungan",
        "difficulty": "Hard"
    },
    {
        "id": "fc-6-6",
        "moduleId": "modul-6",
        "moduleTitle": "Modul 6: PROTA & PROSEM",
        "front": "Bagaimana rumus menghitung Jam Pelajaran (JP) Efektif dalam satu semester?",
        "back": "Total JP Efektif = Jumlah Minggu Efektif (ME) × Alokasi Jam Tatap Muka per Minggu.\nContoh: 18 Minggu Efektif × 2 JP/minggu = 36 JP Efektif per semester.",
        "tag": "Rumus Alokasi",
        "difficulty": "Medium"
    },
    {
        "id": "fc-6-7",
        "moduleId": "modul-6",
        "moduleTitle": "Modul 6: PROTA & PROSEM",
        "front": "Apa yang harus dilakukan terhadap 'Minggu Tidak Efektif' pada tabel format PROSEM?",
        "back": "Minggu tidak efektif (seperti libur semester, asesmen sumatif sekolah/PTS/PAS, libur nasional) harus diidentifikasi dan diberi tanda khusus berupa arsir atau warna berbeda agar tidak dialokasikan untuk materi KBM reguler.",
        "tag": "Langkah PROSEM",
        "difficulty": "Easy"
    },

    # =========================================================================
    # MODUL 7 (Minggu 9 / Pengayaan): Program Literasi (GLS)
    # =========================================================================
    {
        "id": "fc-7-1",
        "moduleId": "modul-7",
        "moduleTitle": "Modul 7: Program Literasi",
        "front": "Jelaskan pergeseran makna literasi dari konvensional ke abad 21 (multiliterasi)!",
        "back": "• Konvensional: Keaksaraan sempit, sekadar kemampuan dasar membaca dan menulis (bebas buta huruf).\n• Abad 21: Multiliterasi, yakni kemampuan memahami, menganalisis, dan memproduksi makna dari berbagai ragam teks multimodal (teks cetak, audio, visual, digital) secara kritis.",
        "tag": "Konsep Literasi",
        "difficulty": "Medium"
    },
    {
        "id": "fc-7-2",
        "moduleId": "modul-7",
        "moduleTitle": "Modul 7: Program Literasi",
        "front": "Sebutkan 6 Literasi Dasar Kemendikbudristek!",
        "back": "1. Literasi Baca-Tulis\n2. Literasi Numerasi\n3. Literasi Sains\n4. Literasi Digital\n5. Literasi Finansial\n6. Literasi Budaya & Kewargaan",
        "tag": "6 Literasi Dasar",
        "difficulty": "Easy"
    },
    {
        "id": "fc-7-3",
        "moduleId": "modul-7",
        "moduleTitle": "Modul 7: Program Literasi",
        "front": "Jelaskan 3 Fase Pelaksanaan Gerakan Literasi Sekolah (GLS)!",
        "back": "1. Fase Pembiasaan: 15 menit membaca non-pelajaran sebelum KBM, MURNI TANPA TAGIHAN AKADEMIS untuk menumbuhkan minat.\n2. Fase Pengembangan: Merespons buku secara kreatif non-akademis (pohon literasi, sinopsis santai, bedah buku).\n3. Fase Pembelajaran: Terintegrasi dalam kurikulum semua mapel dengan tagihan akademis berbasis HOTS.",
        "tag": "Fase GLS",
        "difficulty": "Hard"
    },
    {
        "id": "fc-7-4",
        "moduleId": "modul-7",
        "moduleTitle": "Modul 7: Program Literasi",
        "front": "Jelaskan struktur retorika penulisan Jepang: 起承転結 (Ki-Shou-Ten-Ketsu)!",
        "back": "• Ki (起): Pengenalan topik atau latar masalah.\n• Shou (承): Pengembangan dan pemaparan detail dari topik Ki.\n• Ten (転): Kejutan, perubahan sudut pandang, perbandingan, atau plot twist.\n• Ketsu (結): Kesimpulan dan penutup yang mengikat alur karangan secara utuh.",
        "tag": "Ki-Shou-Ten-Ketsu",
        "difficulty": "Medium"
    }
]

# Write flashcards.js
with open('data/flashcards.js', 'w', encoding='utf-8') as f:
    f.write("// Data Flashcards Interaktif UTS Keikaku (Diurutkan sesuai RPS Resmi)\n")
    f.write("const FLASHCARDS_DATA = " + json.dumps(flashcards, ensure_ascii=False, indent=2) + ";\n")

print(f"Generated data/flashcards.js with {len(flashcards)} flashcards across 7 modules successfully.")

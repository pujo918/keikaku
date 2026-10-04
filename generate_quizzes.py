# -*- coding: utf-8 -*-
"""
Generator for Quizzes and Exam Practice Data (data/quizzes.js)
Strictly aligned with official RPS Jugyou Keikaku order.
"""

import json

quizzes = [
    # =========================================================================
    # MODUL 1 (Minggu 1): Paradigma & Faktor Pembelajaran Bahasa Asing
    # =========================================================================
    {
        "id": "q-1-1",
        "moduleId": "modul-1",
        "moduleTitle": "Modul 1: Paradigma Bahasa Asing",
        "type": "mcq",
        "question": "Seorang pembelajar bahasa Jepang selalu melakukan kesalahan partikel 'wa' dan 'ga' yang sama secara konsisten selama bertahun-tahun, meskipun sudah berkali-kali dijelaskan rumusnya. Fenomena ini dalam psikolinguistik disebut...",
        "options": [
            "A. Kodifikasi",
            "B. Fosilisasi (Fossilization)",
            "C. Pelesapan (Ellipsis)",
            "D. Aizuchi"
        ],
        "answerIndex": 1,
        "explanation": "B. Fosilisasi (Fossilization) adalah pembekuan kesalahan bahasa yang menetap permanen dalam kompetensi pembelajar bahasa kedua, biasanya karena kesalahan dibiarkan tanpa perbaikan terarah.",
        "difficulty": "Medium"
    },
    {
        "id": "q-1-2",
        "moduleId": "modul-1",
        "moduleTitle": "Modul 1: Paradigma Bahasa Asing",
        "type": "mcq",
        "question": "Apa fungsi utama dari respon lisan 'Aizuchi' (相槌 - seperti Hai, Ee, Naruhodo) dalam budaya komunikasi lisan masyarakat Jepang?",
        "options": [
            "A. Memotong pembicaraan orang lain agar cepat selesai.",
            "B. Menandakan persetujuan mutlak terhadap seluruh isi pembicaraan.",
            "C. Menunjukkan secara aktif kepada lawan bicara bahwa pendengar sedang memperhatikan dan mendengarkan dengan seksama.",
            "D. Menyatakan ketidaksetujuan secara halus tanpa menyinggung perasaan."
        ],
        "answerIndex": 2,
        "explanation": "C. Aizuchi berfungsi sebagai sinyal aktif mendengarkan (*active listening cue*). Di Jepang, ketiadaan respon aizuchi membuat pembicara merasa gelisah dan mengira pendengar tidak memahami ucapannya.",
        "difficulty": "Medium"
    },
    {
        "id": "q-1-3",
        "moduleId": "modul-1",
        "moduleTitle": "Modul 1: Paradigma Bahasa Asing",
        "type": "mcq",
        "question": "Ketika seorang karyawan Jepang berbicara dengan klien dari kantor luar mengenai pimpinannya sendiri (Direktur Tanaka), ia merendahkan Tanaka dengan menyebut 'Tanaka wa...' tanpa gelar kehormatan 'Shachou/San'. Hal ini mencerminkan prinsip...",
        "options": [
            "A. Sonkeigo kepada atasan sendiri di depan orang luar",
            "B. Aturan sosial kelompok dalam (Uchi) dan kelompok luar (Soto)",
            "C. Kesalahan fatal tata bahasa Keigo",
            "D. Direct Method Drill"
        ],
        "answerIndex": 1,
        "explanation": "B. Berdasarkan konsep Uchi vs Soto, pimpinan sendiri adalah anggota kelompok dalam (Uchi). Saat berbicara dengan pihak luar (Soto / klien), pihak Uchi harus direndahkan (Kenjougo/tanpa san) demi menghormati pihak Soto.",
        "difficulty": "Hard"
    },
    {
        "id": "q-1-4",
        "moduleId": "modul-1",
        "moduleTitle": "Modul 1: Paradigma Bahasa Asing",
        "type": "mcq",
        "question": "Siswa yang belajar bahasa Jepang karena berminat mendalam pada kebudayaan tradisional Jepang dan ingin memiliki sahabat pena serta tinggal berbaur di masyarakat Jepang didorong oleh tipe motivasi...",
        "options": [
            "A. Motivasi Instrumental",
            "B. Motivasi Debilitatif",
            "C. Motivasi Integratif",
            "D. Motivasi Mekanistik"
        ],
        "answerIndex": 2,
        "explanation": "C. Motivasi integratif didasari oleh keinginan tulus untuk mengenal, berinteraksi, dan berintegrasi ke dalam lingkungan sosio-kultural penutur bahasa sasaran.",
        "difficulty": "Medium"
    },

    # =========================================================================
    # MODUL 2 (Minggu 2-3): Karakteristik & Perencanaan Pembelajaran
    # =========================================================================
    {
        "id": "q-2-1",
        "moduleId": "modul-2",
        "moduleTitle": "Modul 2: Perencanaan Pembelajaran",
        "type": "mcq",
        "question": "Dalam Kurikulum Merdeka Fase F, capaian pembelajaran bahasa Jepang mengacu pada JF Standard for Japanese-Language Education dengan target setara level...",
        "options": [
            "A. Level A1",
            "B. Level A2.1",
            "C. Level B1.2",
            "D. Level C1"
        ],
        "answerIndex": 1,
        "explanation": "B. Standar capaian pembelajaran bahasa Jepang Fase F pada Kurikulum Merdeka mengacu pada level A2.1 JF Standard (Basic User) yang berfokus pada kompetensi komunikatif dasar dalam konteks kehidupan sehari-hari.",
        "difficulty": "Easy"
    },
    {
        "id": "q-2-2",
        "moduleId": "modul-2",
        "moduleTitle": "Modul 2: Perencanaan Pembelajaran",
        "type": "mcq",
        "question": "Pernyataan 'Dapat memesan menu makanan di restoran menggunakan ungkapan sederhana yang sopan' merupakan contoh dari penerapan prinsip...",
        "options": [
            "A. Audio-Lingual Habit Drill",
            "B. Can-Do Statement",
            "C. Grammar-Translation Direct Rule",
            "D. Mechanical Substitution"
        ],
        "answerIndex": 1,
        "explanation": "B. 'Can-Do Statement' pada JF Standard merumuskan kompetensi berbasis aksi nyata fungsional: apa yang mampu dilakukan peserta didik dengan bahasa Jepang dalam situasi riil.",
        "difficulty": "Easy"
    },
    {
        "id": "q-2-3",
        "moduleId": "modul-2",
        "moduleTitle": "Modul 2: Perencanaan Pembelajaran",
        "type": "mcq",
        "question": "Manakah urutan yang benar dalam menurunkan dokumen kurikulum operasional di sekolah?",
        "options": [
            "A. Tujuan Pembelajaran (TP) -> Capaian Pembelajaran (CP) -> Alur Tujuan Pembelajaran (ATP)",
            "B. Capaian Pembelajaran (CP) -> Tujuan Pembelajaran (TP) -> Alur Tujuan Pembelajaran (ATP)",
            "C. Alur Tujuan Pembelajaran (ATP) -> Capaian Pembelajaran (CP) -> Tujuan Pembelajaran (TP)",
            "D. Modul Ajar -> Capaian Pembelajaran (CP) -> Tujuan Pembelajaran (TP)"
        ],
        "answerIndex": 1,
        "explanation": "B. Urutan hierarki: Menganalisis Capaian Pembelajaran (CP) -> Merumuskan Tujuan Pembelajaran (TP) -> Mengurutkan TP menjadi Alur Tujuan Pembelajaran (ATP) -> Merancang Modul Ajar dan Asesmen.",
        "difficulty": "Easy"
    },
    {
        "id": "q-2-4",
        "moduleId": "modul-2",
        "moduleTitle": "Modul 2: Perencanaan Pembelajaran",
        "type": "mcq",
        "question": "Seorang guru memberikan kuis interaktif singkat di tengah kegiatan belajar untuk memantau kesulitan siswa dan memberikan arahan perbaikan langsung. Ini adalah contoh...",
        "options": [
            "A. Asesmen Diagnostik",
            "B. Asesmen Formatif (Proses)",
            "C. Asesmen Sumatif (Akhir)",
            "D. Asesmen Penempatan"
        ],
        "answerIndex": 1,
        "explanation": "B. Asesmen formatif dilakukan berkelanjutan selama KBM untuk memantau dan memperbaiki efektivitas pembelajaran secara langsung.",
        "difficulty": "Easy"
    },

    # =========================================================================
    # MODUL 3 (Minggu 4): Course Design (コースデザイン)
    # =========================================================================
    {
        "id": "q-3-1",
        "moduleId": "modul-3",
        "moduleTitle": "Modul 3: Course Design",
        "type": "mcq",
        "question": "Seorang guru bahasa Jepang melakukan survei untuk mengetahui apakah calon siswanya sudah pernah belajar bahasa Jepang sebelumnya dan seberapa banyak huruf Kanji yang sudah dihafal. Survei ini termasuk ke dalam pilar...",
        "options": [
            "A. ニーズ調査 (Nīzu Chōsa)",
            "B. レディネス調査 (Redinesu Chōsa)",
            "C. 言語学習適性調査 (Gengo Gakushū Tekisei Chōsa)",
            "D. 学習条件調査 (Gakushū Jōken Chōsa)"
        ],
        "answerIndex": 1,
        "explanation": "B. レディネス調査 (Redinesu Chōsa / 既習能力調査) adalah survei kesiapan atau kemampuan awal pembelajar, seperti riwayat materi yang pernah dipelajari, level kemampuan awal, dan penguasaan huruf sebelumnya.",
        "difficulty": "Easy"
    },
    {
        "id": "q-3-2",
        "moduleId": "modul-3",
        "moduleTitle": "Modul 3: Course Design",
        "type": "mcq",
        "question": "Manakah pernyataan berikut yang paling tepat menggambarkan perbedaan antara 'Pendataan' (調査) dan 'Analisis' (分析) dalam Course Design?",
        "options": [
            "A. Pendataan menghasilkan silabus, sedangkan analisis menghasilkan lembar kuesioner.",
            "B. Pendataan adalah proses mengumpulkan data mentah, sedangkan analisis adalah proses mengolah data tersebut untuk menentukan keputusan kurikuler.",
            "C. Pendataan dilakukan oleh kepala sekolah, sedangkan analisis dilakukan oleh siswa.",
            "D. Pendataan hanya bersifat kualitatif, sedangkan analisis hanya bersifat kuantitatif."
        ],
        "answerIndex": 1,
        "explanation": "B. Pendataan (Chōsa) adalah kegiatan pengumpulan fakta dan informasi riil calon pembelajar melalui instrumen survei. Sedangkan analisis (Bunseki) adalah pemrosesan data mentah tersebut guna merumuskan Tujuan Pembelajaran, pemilihan materi, dan penyusunan silabus.",
        "difficulty": "Medium"
    },

    # =========================================================================
    # MODUL 4 (Minggu 5): Integrasi 4 Skill & 4C
    # =========================================================================
    {
        "id": "q-4-1",
        "moduleId": "modul-4",
        "moduleTitle": "Modul 4: Integrasi 4 Skill & 4C",
        "type": "mcq",
        "question": "Ketika siswa diminta membaca teks brosur wisata Jepang secara cepat hanya untuk mencari informasi tentang 'jam buka museum dan harga tiket masuk', teknik membaca yang digunakan adalah...",
        "options": [
            "A. Seidoku (精読)",
            "B. Skimming",
            "C. Scanning",
            "D. Kakitori (書き取り)"
        ],
        "answerIndex": 2,
        "explanation": "C. Scanning adalah teknik membaca memindai untuk menemukan informasi spesifik tertentu (seperti harga, jam buka, tanggal, atau nama tempat) tanpa membaca keseluruhan wacana.",
        "difficulty": "Easy"
    },
    {
        "id": "q-4-2",
        "moduleId": "modul-4",
        "moduleTitle": "Modul 4: Integrasi 4 Skill & 4C",
        "type": "mcq",
        "question": "Apa keunggulan utama dari teknik membaca Seidoku (精読) dibanding teknik lainnya?",
        "options": [
            "A. Siswa dapat membaca 5 halaman wacana hanya dalam waktu 1 menit.",
            "B. Siswa melatih ketelitian memahami makna kalimat, partikel, tata bahasa, dan struktur karangan secara mendalam.",
            "C. Siswa tidak perlu memikirkan arti kosakata baru.",
            "D. Siswa hanya fokus pada membaca judul teks saja."
        ],
        "answerIndex": 1,
        "explanation": "B. Seidoku (Membaca Intensif) melatih analisis mendalam terhadap arti kata, struktur gramatika, fungsi partikel joshi, dan kohesi antarkalimat.",
        "difficulty": "Medium"
    },

    # =========================================================================
    # MODUL 5 (Minggu 6): Bahan Ajar & Media Pembelajaran Abad 21
    # =========================================================================
    {
        "id": "q-5-1",
        "moduleId": "modul-5",
        "moduleTitle": "Modul 5: Bahan Ajar & Media",
        "type": "mcq",
        "question": "Manakah di bawah ini yang merupakan contoh 'Bahan Ajar' (Bukan Media Pembelajaran)?",
        "options": [
            "A. Proyektor LCD dan kabel HDMI",
            "B. Kumpulan naskah percakapan dan daftar kosakata bertema 'Keluarga'",
            "C. Aplikasi smartphone Padlet",
            "D. Kotak panggung kayu Kamishibai"
        ],
        "answerIndex": 1,
        "explanation": "B. Bahan ajar (教材) adalah substansi isi/materi pengetahuan yang dipelajari (naskah, pola kalimat, kosakata, teks). Sedangkan LCD, Padlet, dan kotak panggung adalah Media Pembelajaran (alat penyalur).",
        "difficulty": "Easy"
    },
    {
        "id": "q-5-2",
        "moduleId": "modul-5",
        "moduleTitle": "Modul 5: Bahan Ajar & Media",
        "type": "mcq",
        "question": "Platform Tadoku (多読) dalam pengajaran membaca bahasa Jepang menerapkan prinsip utama berupa...",
        "options": [
            "A. Setiap kata sulit wajib dicari di kamus kanji tebal sebelum melanjutkan membaca.",
            "B. Membaca teks berjenjang yang mudah dipahami, tanpa membuka kamus, dan melewati bagian yang tidak dimengerti agar membaca terasa menyenangkan.",
            "C. Membaca naskah hukum kuno untuk menguji ketahanan siswa.",
            "D. Menghafal seluruh isi bacaan untuk disetorkan kepada guru secara lisan."
        ],
        "answerIndex": 1,
        "explanation": "B. Prinsip Tadoku (membaca ekstensif): 1. Mulai dari yang mudah, 2. Membaca tanpa kamus, 3. Lewati kata yang tidak dipahami, 4. Ganti buku jika membosankan.",
        "difficulty": "Medium"
    },

    # =========================================================================
    # MODUL 6 (Minggu 7 - NEW): PROTA & PROSEM
    # =========================================================================
    {
        "id": "q-6-1",
        "moduleId": "modul-6",
        "moduleTitle": "Modul 6: PROTA & PROSEM",
        "type": "mcq",
        "question": "Sebuah semester memiliki 20 minggu dalam kalender pendidikan. Setelah dianalisis, terdapat 2 minggu ujian, 1 minggu libur semester, dan 1 minggu kegiatan jeda sekolah. Berapakah jumlah Minggu Efektif (ME) semester tersebut?",
        "options": [
            "A. 14 Minggu",
            "B. 16 Minggu",
            "C. 18 Minggu",
            "D. 20 Minggu"
        ],
        "answerIndex": 1,
        "explanation": "B. Rumus: Minggu Efektif (ME) = Total Minggu Kalender - Jumlah Minggu Tidak Efektif. 20 - (2 + 1 + 1) = 20 - 4 = 16 Minggu Efektif.",
        "difficulty": "Medium"
    },
    {
        "id": "q-6-2",
        "moduleId": "modul-6",
        "moduleTitle": "Modul 6: PROTA & PROSEM",
        "type": "mcq",
        "question": "Jika suatu mata pelajaran Bahasa Jepang di SMA memiliki alokasi 3 JP per minggu dan pada semester ganjil terdapat 18 Minggu Efektif (ME), berapakah total Jam Pelajaran (JP) Efektif yang dialokasikan dalam PROSEM?",
        "options": [
            "A. 36 JP",
            "B. 48 JP",
            "C. 54 JP",
            "D. 60 JP"
        ],
        "answerIndex": 2,
        "explanation": "C. Total JP Efektif = Minggu Efektif × JP per minggu = 18 × 3 = 54 Jam Pelajaran (JP).",
        "difficulty": "Easy"
    },
    {
        "id": "q-6-3",
        "moduleId": "modul-6",
        "moduleTitle": "Modul 6: PROTA & PROSEM",
        "type": "mcq",
        "question": "Mengapa penyusunan Program Semester (PROSEM) mutlak memerlukan terselesaikannya Program Tahunan (PROTA) terlebih dahulu?",
        "options": [
            "A. Karena PROTA dibuat oleh dinas pendidikan sedangkan PROSEM dibuat oleh guru.",
            "B. Karena PROSEM merupakan penjabaran operasional dari alokasi waktu dan sekuens materi yang telah diputuskan di dalam PROTA.",
            "C. Karena PROSEM hanya berlaku untuk kegiatan ekstrakurikuler saja.",
            "D. Karena PROTA tidak mencantumkan alokasi waktu jam pelajaran."
        ],
        "answerIndex": 1,
        "explanation": "B. PROTA menetapkan total alokasi jam dan capaian kompetensi setahun penuh. PROSEM adalah instrumen operasional mingguan yang menjabarkan pembagian alokasi waktu PROTA ke dalam semester berjalan.",
        "difficulty": "Medium"
    },
    {
        "id": "q-6-4",
        "moduleId": "modul-6",
        "moduleTitle": "Modul 6: PROTA & PROSEM",
        "type": "mcq",
        "question": "Dalam format tabel matriks PROSEM, bagaimana guru memperlakukan minggu-minggu yang bertepatan dengan Penilaian Tengah Semester (PTS) atau libur hari besar?",
        "options": [
            "A. Tetap diisi dengan materi pokok kosakata baru.",
            "B. Diberi tanda arsir atau warna khusus (arsiran) sebagai minggu tidak efektif.",
            "C. Dihapus dari kolom bulan pada tabel.",
            "D. Digabungkan dengan jam pelajaran mata pelajaran lain."
        ],
        "answerIndex": 1,
        "explanation": "B. Pada tabel PROSEM, minggu tidak efektif diarsir atau diwarnai khusus agar guru tidak menjadwalkan materi KBM reguler pada minggu tersebut.",
        "difficulty": "Easy"
    },

    # =========================================================================
    # MODUL 7 (Minggu 9 / Pengayaan): Program Literasi (GLS)
    # =========================================================================
    {
        "id": "q-7-1",
        "moduleId": "modul-7",
        "moduleTitle": "Modul 7: Program Literasi",
        "type": "mcq",
        "question": "Fase pelaksanaan Gerakan Literasi Sekolah (GLS) yang berupa 'kegiatan membaca buku nonteks 15 menit sebelum pelajaran dimulai TANPA TAGIHAN AKADEMIS/NILAI' disebut...",
        "options": [
            "A. Fase Pengembangan",
            "B. Fase Pembiasaan",
            "C. Fase Pembelajaran",
            "D. Fase Akreditasi"
        ],
        "answerIndex": 1,
        "explanation": "B. Fase Pembiasaan bertujuan murni menumbuhkan kecintaan membaca tanpa tekanan nilai akademis rapor.",
        "difficulty": "Easy"
    },
    {
        "id": "q-7-2",
        "moduleId": "modul-7",
        "moduleTitle": "Modul 7: Program Literasi",
        "type": "mcq",
        "question": "Dalam struktur penulisan karangan tradisional Jepang '起承転結' (Ki-Shou-Ten-Ketsu), fungsi dari bagian 'Ten' (転) adalah...",
        "options": [
            "A. Mengenalkan nama penulis dan judul karangan.",
            "B. Menghadirkan sudut pandang baru, kejutan, perbandingan tak terduga, atau plot twist.",
            "C. Menuliskan daftar pustaka dan referensi.",
            "D. Mengulang kembali kalimat pertama tanpa perubahan."
        ],
        "answerIndex": 1,
        "explanation": "B. Ten (転) adalah bagian titik balik / kejutan yang memberikan sudut pandang alternatif atau kontras sebelum ditarik kesimpulan pada bagian Ketsu (結).",
        "difficulty": "Medium"
    }
]

essay_studies = [
    {
        "id": "essay-1",
        "moduleId": "modul-6",
        "title": "Studi Kasus 1: Perancangan PROTA & PROSEM Bahasa Jepang Fase F (Kelas XI SMA)",
        "scenario": "Anda adalah guru baru bahasa Jepang di sebuah SMA. Pada awal tahun ajaran baru, Anda menerima Kalender Pendidikan (Kaldik) yang mencatat total 21 minggu di semester ganjil. Dari hasil identifikasi Kaldik, ditemukan: 1 minggu MPLS, 2 minggu Asesmen Sumatif (PTS & PAS), 1 minggu kegiatan P5 (Projek Profil Pancasila), dan 1 minggu libur semester. Alokasi jam bahasa Jepang adalah 2 JP per minggu.",
        "question": "1. Hitunglah jumlah Minggu Efektif (ME) dan total Jam Pelajaran (JP) efektif untuk semester ganjil!\n2. Jelaskan langkah-langkah konkret Anda dalam memetakan materi (Huruf Kana, Kosakata, Bunpou, Dokkai, Kaiwa) dari PROTA ke dalam matriks mingguan PROSEM!",
        "rubric": [
            "Ketepatan perhitungan rumus Minggu Efektif (ME) dan Jam Pelajaran Efektif",
            "Penjelasan 3 dokumen acuan pokok penyusunan Prota & Prosem",
            "Sistematika langkah pemetaan materi ke format tabel Prosem"
        ],
        "modelAnswer": """**Langkah Penyelesaian & Kunci Jawaban:**

1. **Perhitungan Minggu Efektif & JP Efektif:**
   * Total minggu kalender pendidikan = 21 minggu.
   * Jumlah minggu tidak efektif = 1 (MPLS) + 2 (PTS & PAS) + 1 (P5) + 1 (Libur Semester) = 5 minggu.
   * **Minggu Efektif (ME) = 21 - 5 = 16 Minggu Efektif.**
   * Alokasi jam tatap muka per minggu = 2 JP.
   * **Total JP Efektif Semester Ganjil = 16 ME × 2 JP = 32 Jam Pelajaran (JP).**

2. **Langkah Pemetaan Materi dari PROTA ke PROSEM:**
   * **Langkah 1 (Penyiapan Matriks):** Menyiapkan format tabel PROSEM dengan kolom: Identitas, Capaian Pembelajaran, Materi Pokok/Sub-Materi, Alokasi Waktu (JP), serta kolom rincian Bulan (Juli-Desember) dan Minggu (1 s.d. 5).
   * **Langkah 2 (Pengarsiran Minggu Tidak Efektif):** Mengarsir 5 minggu tidak efektif (minggu MPLS di Juli, minggu PTS di September/Oktober, minggu PAS di Desember, dan libur) agar tidak teralokasi materi KBM.
   * **Langkah 3 (Distribusi Materi Pokok):** Membagi 32 JP efektif ke dalam topik secara berurutan dan logis:
     - Bab 1 (Salam & Huruf Hiragana): 8 JP (4 pertemuan / 4 minggu).
     - Bab 2 (Perkenalan Diri & Keberadaan Orang/Benda): 8 JP (4 pertemuan / 4 minggu).
     - Bab 3 (Kehidupan Sekolah & Jadwal Pelajaran): 8 JP (4 pertemuan / 4 minggu).
     - Bab 4 (Keluarga & Kegiatan Sehari-hari): 6 JP (3 pertemuan / 3 minggu).
     - Cadangan Asesmen Sumatif Lingkup Materi / Remedial: 2 JP (1 pertemuan).
     - Total = 32 JP (Sinkron dengan PROTA).
   * **Langkah 4 (Re-checking & Pengesahan):** Menjumlahkan seluruh alokasi baris dan kolom untuk memastikan totalnya tepat 32 JP, lalu diajukan kepada Kepala Sekolah untuk disahkan."""
    },
    {
        "id": "essay-2",
        "moduleId": "modul-3",
        "title": "Studi Kasus 2: Course Design Bahasa Jepang untuk Tenaga Kerja Caregiver (Kaigo)",
        "scenario": "Sebuah LPK berencana membuka kelas intensif bahasa Jepang 4 bulan untuk calon tenaga kerja bidang Caregiver (Kaigo) ke Tokyo. Calon pembelajar adalah lulusan SMK Kesehatan yang belum pernah belajar bahasa Jepang sama sekali.",
        "question": "Sebagai Course Designer, uraikan langkah konkret Anda berdasarkan 4 Pilar Survei (Niizu, Redinesu, Tekisei, Jouken) dan bagaimana Anda menerjemahkan data tersebut ke dalam desain silabus!",
        "rubric": [
            "Kesesuaian identifikasi 4 Pilar Chousa",
            "Kesesuaian analisis data menjadi silabus spesifik",
            "Pemilihan metode dan bentuk asesmen evaluasi"
        ],
        "modelAnswer": """**Langkah Analisis & Desain Course:**

1. **Pelaksanaan 4 Pilar Survei (調査):**
   * **Nīzu Chōsa (Kebutuhan):** Kebutuhan spesifik adalah kemampuan komunikasi langsung (Kaiwa & Choukai) dalam lingkup lansia/panti jompo (Kaigo), penguasaan istilah medis dasar, instruksi darurat, dan ragam bahasa sopan (Keigo dasar). Target: JFT-Basic A2 / JLPT N4.
   * **Redinesu Chōsa (Kesiapan):** Status peserta pemula total (zero beginner). Bulan pertama wajib dialokasikan untuk pemadatan Kana dan instruksi kelas.
   * **Tekisei Chōsa (Bakat Bahasa):** Tes kepekaan bunyi dan daya ingat cepat, mengingat ritme kerja perawat menuntut respons pendengaran yang cekatan.
   * **Jōken Chōsa (Kondisi/Syarat):** Latar belakang SMK Kesehatan merupakan modal kuat. Waktu intensif asrama 6-8 jam per hari.

2. **Penerjemahan ke Desain Silabus (Rancangan):**
   * *Bulan 1:* Fondasi Kana, pelafalan, salam dasar (*aisatsu*), angka, partikel dasar, dan ungkapan instruksi kelas.
   * *Bulan 2-3:* Tata bahasa A2 berbasis Can-Do, latihan menyimak audio instruksi pasien lansia, dan simulasi dialog harian.
   * *Bulan 4:* Kursus spesifik *Kaigo no Nihongo* (istilah perawatan, role play memindahkan pasien, menyajikan makanan, Keigo sopan, dan etika kerja 5S Jepang).

3. **Evaluasi Program:** Ujian lisan simulasi wawancara (*menkan*) dan tes formatif berkala dengan standar Can-Do JF Standard."""
    },
    {
        "id": "essay-3",
        "moduleId": "modul-1",
        "title": "Studi Kasus 3: Mengatasi Kelas Bahasa Jepang yang Pasif dan Terpaku Tata Bahasa",
        "scenario": "Di sebuah SMA, guru bahasa Jepang mengeluh bahwa para siswa mendapatkan nilai 90-100 saat ujian tertulis pilihan ganda pola kalimat (Bunpou), namun saat diminta berpasangan mempraktikkan percakapan lisan (Kaiwa), seluruh kelas hening, cemas, dan takut berbicara.",
        "question": "Analisis penyebab permasalahan di atas ditinjau dari Paradigma Pembelajaran (Strukturalis vs Komunikatif) serta faktor afektif-emosional siswa. Rumuskan solusi pedagogis berbasis integrasi 4 Skill dan keterampilan 4C!",
        "rubric": [
            "Analisis paradigma pengajaran (usage vs use)",
            "Analisis faktor afektif (language anxiety, language ego, fear of mistake)",
            "Solusi konkret aktivitas komunikatif & 4C"
        ],
        "modelAnswer": """**Analisis Masalah:**

1. **Penyebab Paradigma:**
   * Guru masih terjebak pada pendekatan struktural-behavioris (GTM/ALM kaku) yang hanya melatih *Language Usage* (pengetahuan teoretis rumus kalimat) tanpa memberikan porsi *Language Use* (penggunaan fungsional dalam komunikasi autentik).
   * Asesmen kelas hanya menguji kemampuan reseptif pasif lewat soal tertulis, bukan kemampuan produktif interaktif.

2. **Penyebab Afektif & Emosional:**
   * Tingginya *Debilitative Anxiety* (kecemasan melumpuhkan) akibat takut ditertawakan teman atau langsung disalahkan guru (*affective filter* terlalu tebal).
   * Siswa memiliki *Language Ego* yang defensif dan rendahnya keberanian mengambil risiko (*risk-taking*).

**Solusi Pedagogis Berbasis 4 Skill & 4C:**

1. **Ubah Iklim Kelas (Psychological Safety):** Guru harus menegaskan bahwa *'Kesalahan dalam berbicara adalah bukti proses belajar (Interlanguage) yang wajar dan berharga, bukan aib.'*
2. **Tahapan Scaffolded Kaiwa (Berjenjang):**
   * *Tahap 1 (Latihan Berpasangan Tertutup):* Gunakan Role Play bertarget Can-Do sederhana (misal: memesan minuman di kafe). Latihan berpasangan 3 menit tanpa dinilai langsung di depan kelas untuk menurunkan ketegangan.
   * *Tahap 2 (Integrasi 4C - Collaboration & Creativity):* Siswa membuat komik strip atau video rekaman percakapan santai di luar kelas menggunakan smartphone kelompok.
   * *Tahap 3 (Komunikasi Bermakna):* Diskusi kelompok kecil membandingkan hobi/budaya Jepang vs Indonesia (Communication & Critical Thinking)."""
    }
]

# Write quizzes.js
with open('data/quizzes.js', 'w', encoding='utf-8') as f:
    f.write("// Data Kuis Latihan & Simulasi UTS Keikaku (Sesuai RPS Resmi)\n")
    f.write("const QUIZZES_DATA = {\n")
    f.write("  mcqs: " + json.dumps(quizzes, ensure_ascii=False, indent=2) + ",\n")
    f.write("  essays: " + json.dumps(essay_studies, ensure_ascii=False, indent=2) + "\n")
    f.write("};\n")

print(f"Generated data/quizzes.js with {len(quizzes)} MCQs and {len(essay_studies)} Essay Studies successfully.")

# -*- coding: utf-8 -*-
"""
Generator for RPS Data (data/rps_data.js)
Extracted directly from RPS Jugyo Keikaku.docx (Universitas Brawijaya)
"""

import json

rps_info = {
    "mataKuliah": "Jugyou Keikaku (Perencanaan Pembelajaran Bahasa Jepang)",
    "programStudi": "Pendidikan Bahasa Jepang - Fakultas Ilmu Budaya Universitas Brawijaya",
    "dosenPengembang": "Febi Ariani Saragih, M.Pd",
    "penilaian": [
        {"jenis": "Tugas", "bobot": "15%"},
        {"jenis": "PJBL (Project-Based Learning)", "bobot": "50%"},
        {"jenis": "UTS (Ujian Tengah Semester)", "bobot": "10%"},
        {"jenis": "UAS (Ujian Akhir Semester)", "bobot": "25%"}
    ],
    "weeks": [
        {
            "week": 1,
            "moduleId": "modul-1",
            "title": "Paradigma Pembelajaran Bahasa Asing & Faktor yang Mempengaruhi",
            "subCpmk": "Mampu memahami dan menjelaskan Paradigma pembelajaran bahasa asing dan faktor-faktor yang mempengaruhinya.",
            "indikator": "Ketepatan teori dan kemampuan menjawab pertanyaan terkait Paradigma pembelajaran bahasa asing dan faktor afektif/emosional/biologis/linguistik.",
            "metode": "Presentasi Kelompok 1, Diskusi, Analisis Studi Kasus",
            "bobot": "5%",
            "status": "Materi UTS"
        },
        {
            "week": 2,
            "moduleId": "modul-2",
            "title": "Tujuan Pembelajaran Bahasa Jepang & Keterampilan Bahasa Asing",
            "subCpmk": "Memahami tujuan pembelajaran bahasa Jepang dan karakteristik pembelajarannya sebagai bahasa asing (JF Standard A2.1).",
            "indikator": "Ketepatan membedakan kompetensi komunikatif Can-Do dan multimodal teks.",
            "metode": "Presentasi Kelompok 2, Diskusi Kelas",
            "bobot": "1%",
            "status": "Materi UTS"
        },
        {
            "week": 3,
            "moduleId": "modul-2",
            "title": "Konsep Dasar & Langkah Menyusun Perencanaan Pengajaran",
            "subCpmk": "Mampu memahami dan menjelaskan definisi, masalah, langkah-langkah menyusun, dimensi, tujuan, dan manfaat perencanaan pengajaran.",
            "indikator": "Ketepatan teori dan perumusan CP -> TP -> ATP serta 3 jenis asesmen.",
            "metode": "Presentasi Kelompok 2, Diskusi Kelas",
            "bobot": "1%",
            "status": "Materi UTS"
        },
        {
            "week": 4,
            "moduleId": "modul-3",
            "title": "Course Design (コースデザイン) dari JF",
            "subCpmk": "Mampu memahami dan menjelaskan rancangan Course Design.",
            "indikator": "Ketepatan menganalisis 4 pilar survei (Niizu, Redinesu, Tekisei, Jouken) dan menyusun silabus.",
            "metode": "Presentasi Kelompok 3, Diskusi, Project Course Design",
            "bobot": "5%",
            "status": "Materi UTS"
        },
        {
            "week": 5,
            "moduleId": "modul-4",
            "title": "Metode Pembelajaran 4 Skill Berbahasa Sesuai Keterampilan Abad 21 (4C)",
            "subCpmk": "Mampu memahami dan menjelaskan metode pembelajaran 4 skill berbahasa (Choukai, Kaiwa, Dokkai, Sakubun) terintegrasi 4C.",
            "indikator": "Ketepatan teori teknik membaca (Seidoku, Sokudoku, Skimming, Scanning) dan integrasi 4C.",
            "metode": "Presentasi Kelompok 4, Diskusi, Desain Pembelajaran 4 Skill",
            "bobot": "5%",
            "status": "Materi UTS"
        },
        {
            "week": 6,
            "moduleId": "modul-5",
            "title": "Jenis-Jenis Bahan Ajar & Media Pembelajaran Abad 21",
            "subCpmk": "Mampu memahami dan menjelaskan distingsi bahan ajar vs media pembelajaran serta pemanfaatan inovasi digital.",
            "indikator": "Ketepatan membedakan bahan ajar vs media serta analisis efektivitas media digital/AI.",
            "metode": "Presentasi Kelompok 5, Diskusi, Analisis Media Digital",
            "bobot": "5%",
            "status": "Materi UTS"
        },
        {
            "week": 7,
            "moduleId": "modul-6",
            "title": "Pengertian dan Langkah-Langkah Menyusun PROTA dan PROSEM",
            "subCpmk": "Mampu memahami dan menjelaskan pengertian serta langkah-langkah menyusun Program Tahunan (PROTA) dan Program Semester (PROSEM).",
            "indikator": "Ketepatan analisis Minggu Efektif (ME), perhitungan JP efektif, dan pemetaan materi ke format tabel.",
            "metode": "Presentasi Kelompok 6, Diskusi, Project Penyusunan Prota & Prosem",
            "bobot": "10%",
            "status": "Materi UTS Utama"
        },
        {
            "week": 8,
            "moduleId": None,
            "title": "UJIAN TENGAH SEMESTER (UTS)",
            "subCpmk": "Evaluasi penguasaan materi perkuliahan minggu 1 sampai dengan minggu 7.",
            "indikator": "Ketepatan analisis soal esai studi kasus, pemahaman konsep pedagogi, dan penguasaan terminologi.",
            "metode": "Ujian Tertulis UTS",
            "bobot": "10%",
            "status": "EVALUASI UTS"
        },
        {
            "week": 9,
            "moduleId": "modul-7",
            "title": "Program Literasi dan Pembelajaran Bahasa Jepang Berbasis Literasi",
            "subCpmk": "Mampu memahami dan menjelaskan Gerakan Literasi Sekolah (GLS) dan pembelajaran bahasa Jepang berbasis literasi.",
            "indikator": "Ketepatan membedakan 3 fase GLS, 3 level kognitif membaca, dan struktur Ki-Shou-Ten-Ketsu.",
            "metode": "Presentasi Kelompok 1, Studi Kasus Evaluasi Literasi",
            "bobot": "5%",
            "status": "Pengayaan / Pasca UTS"
        },
        {
            "week": 10,
            "moduleId": None,
            "title": "CEFR dan JF Standard A2 dalam Kaitannya dengan Kurikulum Merdeka",
            "subCpmk": "Evaluasi RPM sesuai JF Standard A2.",
            "indikator": "Ketepatan analisis descriptor CEFR dan JF Standard.",
            "metode": "Presentasi & Studi Kasus",
            "bobot": "5%",
            "status": "Materi UAS"
        },
        {
            "week": 11,
            "moduleId": None,
            "title": "Asesmen IKM Berbasis HOTS dan AKM",
            "subCpmk": "Analisis soal asesmen berbasis Higher Order Thinking Skills.",
            "indikator": "Kemampuan merancang instrumen evaluasi HOTS.",
            "metode": "Studi Kasus Analisis Soal",
            "bobot": "5%",
            "status": "Materi UAS"
        },
        {
            "week": 12,
            "moduleId": None,
            "title": "Pengembangan Silabus dan Alur Tujuan Pembelajaran (ATP)",
            "subCpmk": "Praktik merancang model ATP dalam IKM.",
            "indikator": "Ketepatan penyusunan alur ATP bahasa Jepang.",
            "metode": "Project Penyusunan ATP",
            "bobot": "20%",
            "status": "Materi UAS"
        },
        {
            "week": 13,
            "moduleId": None,
            "title": "Pengembangan Rencana Pembelajaran Modul (RPM / RPP)",
            "subCpmk": "Prinsip-prinsip penyusunan RPM/Modul Ajar dalam IKM.",
            "indikator": "Ketepatan sistematika modul ajar.",
            "metode": "Presentasi & Diskusi",
            "bobot": "3%",
            "status": "Materi UAS"
        },
        {
            "week": 14,
            "moduleId": None,
            "title": "Project Penyusunan RPM IKM Kelas XI (Fase F)",
            "subCpmk": "Menyusun perangkat pembelajaran bahasa Jepang kelas XI.",
            "indikator": "Ketepatan hasil produk modul ajar kelas XI.",
            "metode": "PJBL (Project Based Learning)",
            "bobot": "10%",
            "status": "Materi UAS"
        },
        {
            "week": 15,
            "moduleId": None,
            "title": "Project Penyusunan RPM IKM Kelas XII (Fase F)",
            "subCpmk": "Menyusun perangkat pembelajaran bahasa Jepang kelas XII.",
            "indikator": "Ketepatan hasil produk modul ajar kelas XII.",
            "metode": "PJBL (Project Based Learning)",
            "bobot": "10%",
            "status": "Materi UAS"
        },
        {
            "week": 16,
            "moduleId": None,
            "title": "UJIAN AKHIR SEMESTER (UAS)",
            "subCpmk": "Evaluasi menyeluruh perangkat pembelajaran dan teori.",
            "indikator": "Penguasaan komprehensif seluruh CPL dan CPMK.",
            "metode": "Ujian Akhir Semester & Portofolio Produk",
            "bobot": "25%",
            "status": "EVALUASI UAS"
        }
    ]
}

with open('data/rps_data.js', 'w', encoding='utf-8') as f:
    f.write("// Data RPS Resmi Jugyou Keikaku (Universitas Brawijaya)\n")
    f.write("const RPS_DATA = " + json.dumps(rps_info, ensure_ascii=False, indent=2) + ";\n")

print("Generated data/rps_data.js successfully.")

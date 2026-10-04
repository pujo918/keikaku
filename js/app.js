/**
 * KEIKAKU UTS STUDY HUB - CORE APPLICATION SCRIPT
 * Full-featured interactive engine for study, flashcards, quizzes, RPS, pomodoro, & audio
 * Strictly aligned with official RPS Jugyou Keikaku order.
 */

// Application State
const state = {
  currentView: 'materi', // 'materi', 'reading', 'flashcards', 'quizzes', 'glossary', 'cheatsheet', 'rps'
  currentModuleId: null,
  theme: localStorage.getItem('keikaku_theme') || 'dark',
  fontSize: localStorage.getItem('keikaku_font_size') || 'md',
  
  // Flashcard State
  flashcardIndex: 0,
  flashcardFilter: 'all',
  flashcardFlipped: false,
  flashcardDeck: [],
  masteredCards: new Set(JSON.parse(localStorage.getItem('keikaku_mastered_cards') || '[]')),

  // Quiz State
  quizFilter: 'all',
  quizAnswers: {}, // { qId: selectedOptionIndex }
  quizSubmitted: false,

  // Reading Progress State
  readModules: new Set(JSON.parse(localStorage.getItem('keikaku_read_modules') || '[]')),

  // Pomodoro State
  pomodoroMinutes: 25,
  pomodoroSeconds: 0,
  pomodoroInterval: null,
  pomodoroIsRunning: false,
  pomodoroMode: 'study', // 'study' (25) or 'break' (5)

  // Web Audio Synth State
  audioCtx: null,
  noiseNode: null,
  isAudioPlaying: false
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(state.theme);
  applyFontSize(state.fontSize);
  initDeck();
  renderApp();
  updateProgressWidget();
  setupKeyboardShortcuts();
});

// Theme & Display Settings
function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('keikaku_theme', theme);

  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === theme);
  });
}

function applyFontSize(size) {
  state.fontSize = size;
  document.documentElement.setAttribute('data-font-size', size);
  localStorage.setItem('keikaku_font_size', size);

  document.querySelectorAll('.font-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.size === size);
  });
}

// Router / View Navigation
function navigateTo(view, moduleId = null) {
  state.currentView = view;
  state.currentModuleId = moduleId;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update Sidebar active state
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.view === view && !moduleId);
  });

  renderApp();
}

function renderApp() {
  const container = document.getElementById('view-content');
  if (!container) return;

  switch (state.currentView) {
    case 'materi':
      container.innerHTML = renderMateriView();
      break;
    case 'reading':
      container.innerHTML = renderReadingView(state.currentModuleId);
      break;
    case 'flashcards':
      container.innerHTML = renderFlashcardsView();
      break;
    case 'quizzes':
      container.innerHTML = renderQuizzesView();
      break;
    case 'rps':
      container.innerHTML = renderRpsView();
      break;
    case 'glossary':
      container.innerHTML = renderGlossaryView();
      break;
    case 'cheatsheet':
      container.innerHTML = renderCheatsheetView();
      break;
    default:
      container.innerHTML = renderMateriView();
  }
}

// ==========================================================================
// 1. MATERI VIEW (Module Directory - Ordered strictly by RPS)
// ==========================================================================
function renderMateriView() {
  return `
    <div class="hero-banner">
      <div class="card-badge" style="margin-bottom: 8px;">UTS Preparation Hub • Sesuai RPS Resmi</div>
      <h1 class="hero-title">Perencanaan Pembelajaran Bahasa Jepang (Jugyou Keikaku)</h1>
      <p class="hero-desc">
        Materi kuliah terstruktur dari Minggu 1 s.d. Minggu 7 (sesuai urutan resmi Rencana Pembelajaran Semester), lengkap dengan modul PROTA & PROSEM dan pengayaan literasi.
      </p>
    </div>

    <div class="module-grid">
      ${MATERIALS_DATA.map(mod => {
        const isRead = state.readModules.has(mod.id);
        return `
          <div class="module-card" onclick="navigateTo('reading', '${mod.id}')">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 12px;">
              <span class="card-badge">${mod.rpsWeek} • Modul 0${mod.number}</span>
              ${isRead ? '<span style="font-size:0.75rem; color:var(--accent-success); font-weight:700;">✓ Selesai Dibaca</span>' : ''}
            </div>
            <h2 class="card-title">${mod.title}</h2>
            <p class="card-summary">${mod.summary}</p>
            <div class="card-footer">
              <div class="card-tags">
                ${mod.tags.slice(0, 3).map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
              </div>
              <button class="btn-read">
                Pelajari →
              </button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ==========================================================================
// 2. READING VIEW (Detailed Study Material per Module)
// ==========================================================================
function renderReadingView(moduleId) {
  const mod = MATERIALS_DATA.find(m => m.id === moduleId);
  if (!mod) return `<p>Modul tidak ditemukan.</p>`;

  const isRead = state.readModules.has(mod.id);

  return `
    <div class="reading-view">
      <div class="reading-header">
        <button class="reading-back-btn" onclick="navigateTo('materi')">
          ← Kembali ke Daftar Modul
        </button>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div>
            <span class="card-badge" style="margin-bottom: 8px;">${mod.rpsWeek} • Modul 0${mod.number}</span>
            <h1 class="reading-title">${mod.title}</h1>
            <p class="reading-subtitle">${mod.subtitle}</p>
          </div>
          <button class="btn-control ${isRead ? 'active' : ''}" onclick="toggleMarkAsRead('${mod.id}')">
            ${isRead ? '✓ Sudah Ditandai Selesai' : 'Tandai Selesai Dibaca'}
          </button>
        </div>
      </div>

      <div class="key-takeaway-box">
        <div class="key-takeaway-title">
          <span>💡</span> Intisari Penting untuk Ujian UTS
        </div>
        <ul style="margin: 0 0 0 20px;">
          ${mod.key_takeaways.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>

      ${mod.sections.map(sec => `
        <div class="reading-section">
          <h3>${sec.heading}</h3>
          <div class="reading-content">
            ${formatMarkdownLike(sec.content)}
          </div>
        </div>
      `).join('')}

      <div style="margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
        <button class="btn-control" onclick="navigateTo('materi')">
          ← Semua Modul
        </button>
        <button class="btn-control active" onclick="startFlashcardsForModule('${mod.id}')">
          Latih Flashcard Modul Ini (${getFlashcardCountForModule(mod.id)} Kartu) →
        </button>
      </div>
    </div>
  `;
}

function formatMarkdownLike(text) {
  let html = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^### (.*$)/gim, '<h4 style="font-size:1.15rem; margin:16px 0 8px;">$1</h4>')
    .replace(/^## (.*$)/gim, '<h3 style="font-size:1.25rem; margin:20px 0 10px;">$1</h3>');

  if (html.includes('|')) {
    const lines = html.split('\n');
    let inTable = false;
    let tableHtml = '<table>';
    let newLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('|') && line.endsWith('|')) {
        if (!inTable) {
          inTable = true;
          tableHtml = '<table>';
        }
        if (line.includes('---')) {
          continue;
        }
        const cells = line.split('|').filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
        const tag = tableHtml.includes('<tbody>') ? 'td' : 'th';
        
        if (tag === 'th') {
          tableHtml += '<thead><tr>' + cells.map(c => `<th>${c.trim()}</th>`).join('') + '</tr></thead><tbody>';
        } else {
          tableHtml += '<tr>' + cells.map(c => `<td>${c.trim()}</td>`).join('') + '</tr>';
        }
      } else {
        if (inTable) {
          inTable = false;
          tableHtml += '</tbody></table>';
          newLines.push(tableHtml);
        }
        newLines.push(line);
      }
    }
    if (inTable) {
      tableHtml += '</tbody></table>';
      newLines.push(tableHtml);
    }
    html = newLines.join('\n');
  }

  html = html.split('\n\n').map(p => {
    if (p.trim().startsWith('* ') || p.trim().startsWith('- ')) {
      const items = p.split('\n').map(item => `<li>${item.replace(/^[\*\-]\s+/, '')}</li>`).join('');
      return `<ul>${items}</ul>`;
    }
    if (p.trim().startsWith('1. ') || p.trim().startsWith('2. ')) {
      const items = p.split('\n').map(item => `<li>${item.replace(/^\d+\.\s+/, '')}</li>`).join('');
      return `<ol>${items}</ol>`;
    }
    if (p.trim().startsWith('<table') || p.trim().startsWith('<h')) {
      return p;
    }
    return `<p>${p.replace(/\n/g, '<br>')}</p>`;
  }).join('');

  return html;
}

function toggleMarkAsRead(moduleId) {
  if (state.readModules.has(moduleId)) {
    state.readModules.delete(moduleId);
  } else {
    state.readModules.add(moduleId);
  }
  localStorage.setItem('keikaku_read_modules', JSON.stringify(Array.from(state.readModules)));
  updateProgressWidget();
  renderApp();
}

function updateProgressWidget() {
  const total = MATERIALS_DATA.length;
  const read = state.readModules.size;
  const pct = Math.round((read / total) * 100);

  const fill = document.getElementById('progress-bar-fill');
  const text = document.getElementById('progress-text');
  if (fill && text) {
    fill.style.width = `${pct}%`;
    text.textContent = `${read}/${total} Selesai (${pct}%)`;
  }
}

// ==========================================================================
// 3. RPS ROADMAP VIEW (Rencana Pembelajaran Semester)
// ==========================================================================
function renderRpsView() {
  return `
    <div class="hero-banner" style="padding: 24px 28px; margin-bottom: 24px;">
      <span class="card-badge" style="background-color:rgba(129,140,248,0.2); color:var(--accent-secondary);">RPS Resmi</span>
      <h2 style="font-size: 1.55rem; font-weight:800; margin: 8px 0 4px;">Rencana Pembelajaran Semester (RPS)</h2>
      <p style="font-size: 0.9rem; color: var(--text-secondary);">
        <strong>${RPS_DATA.mataKuliah}</strong> • ${RPS_DATA.programStudi} • Dosen Pengembang: ${RPS_DATA.dosenPengembang}
      </p>
    </div>

    <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap:14px; margin-bottom:28px;">
      ${RPS_DATA.penilaian.map(item => `
        <div class="question-card" style="padding:16px 20px; text-align:center;">
          <div style="font-size:0.8rem; color:var(--text-muted); font-weight:600;">Bobot Penilaian</div>
          <div style="font-size:1.4rem; font-weight:800; color:var(--accent-primary); margin:4px 0;">${item.bobot}</div>
          <div style="font-size:0.9rem; font-weight:600; color:var(--text-primary);">${item.jenis}</div>
        </div>
      `).join('')}
    </div>

    <table class="glossary-table">
      <thead>
        <tr>
          <th style="width: 10%;">Minggu</th>
          <th style="width: 28%;">Sub-CPMK / Topik Materi</th>
          <th style="width: 32%;">Indikator & Pengalaman Belajar</th>
          <th style="width: 10%;">Bobot</th>
          <th style="width: 20%;">Aksi Modul</th>
        </tr>
      </thead>
      <tbody>
        ${RPS_DATA.weeks.map(w => {
          const isUts = w.week === 8;
          const isBeforeUts = w.week < 8;
          return `
            <tr style="${isUts ? 'background-color:rgba(251,191,36,0.1); font-weight:bold;' : ''}">
              <td style="font-weight:700; color:${isUts ? 'var(--accent-warning)' : 'var(--accent-primary)'};">
                Minggu ${w.week}
              </td>
              <td>
                <div style="font-weight:700; color:var(--text-primary); margin-bottom:4px;">${w.title}</div>
                <div style="font-size:0.82rem; color:var(--text-secondary); line-height:1.4;">${w.subCpmk}</div>
              </td>
              <td>
                <div style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:4px;">${w.indikator}</div>
                <span class="tag-pill">${w.metode}</span>
              </td>
              <td style="font-weight:700; color:var(--accent-secondary);">${w.bobot}</td>
              <td>
                ${w.moduleId ? `
                  <button class="btn-control" style="padding:5px 10px; font-size:0.78rem;" onclick="navigateTo('reading', '${w.moduleId}')">
                    Buka Modul →
                  </button>
                ` : `<span class="tag-pill" style="background-color:rgba(251,191,36,0.2); color:var(--accent-warning);">${w.status}</span>`}
              </td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  `;
}

// ==========================================================================
// 4. FLASHCARDS COMPONENT (3D Flip & Spaced Repetition)
// ==========================================================================
function initDeck() {
  if (state.flashcardFilter === 'all') {
    state.flashcardDeck = [...FLASHCARDS_DATA];
  } else {
    state.flashcardDeck = FLASHCARDS_DATA.filter(c => c.moduleId === state.flashcardFilter);
  }
  state.flashcardIndex = 0;
  state.flashcardFlipped = false;
}

function renderFlashcardsView() {
  if (state.flashcardDeck.length === 0) {
    return `<p>Tidak ada flashcard pada kategori ini.</p>`;
  }

  const current = state.flashcardDeck[state.flashcardIndex];
  const isMastered = state.masteredCards.has(current.id);

  return `
    <div class="flashcard-wrapper">
      <div class="hero-banner" style="padding: 20px 24px; margin-bottom: 24px;">
        <h2 style="font-size: 1.4rem; font-weight:800; margin-bottom: 4px;">🎴 Flashcard Interaktif Keikaku</h2>
        <p style="font-size: 0.88rem; color: var(--text-secondary);">
          Kuasai terminologi, PROTA/PROSEM, metodologi, dan pilar survei dengan cepat. Klik kartu atau tekan Spasi untuk membalik jawaban.
        </p>
      </div>

      <div class="flashcard-controls">
        <select class="deck-filter-select" onchange="changeFlashcardFilter(this.value)">
          <option value="all" ${state.flashcardFilter === 'all' ? 'selected' : ''}>Semua Modul (${FLASHCARDS_DATA.length} Kartu)</option>
          ${MATERIALS_DATA.map(m => `
            <option value="${m.id}" ${state.flashcardFilter === m.id ? 'selected' : ''}>
              ${m.rpsWeek}: ${m.title.substring(0, 32)}...
            </option>
          `).join('')}
        </select>

        <span class="flashcard-counter">
          Kartu ${state.flashcardIndex + 1} dari ${state.flashcardDeck.length}
          ${isMastered ? '<span style="color:var(--accent-success); margin-left:8px;">★ Dikuasai</span>' : ''}
        </span>
      </div>

      <div class="card-scene" onclick="flipFlashcard()">
        <div class="card-object ${state.flashcardFlipped ? 'is-flipped' : ''}" id="flashcard-card">
          <!-- SISI DEPAN (Pertanyaan) -->
          <div class="card-face card-front">
            <div class="card-top-info">
              <span>${current.moduleTitle}</span>
              <span class="tag-pill">${current.tag}</span>
            </div>
            <div class="card-main-text">
              ${current.front}
            </div>
            <div class="card-hint">
              👆 Klik atau tekan <strong>[Spasi]</strong> untuk melihat jawaban
            </div>
          </div>

          <!-- SISI BELAKANG (Jawaban) -->
          <div class="card-face card-back">
            <div class="card-top-info">
              <span>Jawaban & Penjelasan</span>
              <span class="tag-pill" style="background-color:rgba(56,189,248,0.2); color:var(--accent-primary);">${current.difficulty}</span>
            </div>
            <div class="card-main-text">
              ${current.back}
            </div>
            <div class="card-hint">
              Gunakan tombol di bawah untuk menilai pemahaman Anda
            </div>
          </div>
        </div>
      </div>

      <div class="flashcard-actions">
        <button class="btn-card-action btn-repeat" onclick="markCardRepeat('${current.id}')" title="Ulangi lagi nanti">
          ↻ Belum Hafal [←]
        </button>
        <button class="btn-card-action btn-flip" onclick="flipFlashcard()">
          Balik Kartu [Spasi]
        </button>
        <button class="btn-card-action btn-mastered" onclick="markCardMastered('${current.id}')" title="Sudah mengerti dengan baik">
          ✓ Sudah Paham [→]
        </button>
      </div>

      <div style="display:flex; justify-content:center; gap:24px; margin-top:24px; font-size:0.85rem; color:var(--text-muted);">
        <span>Total Dikuasai: <strong style="color:var(--accent-success);">${state.masteredCards.size}</strong> kartu</span>
        <span>•</span>
        <span>Pintasan: [←] Belum Paham | [Spasi] Balik | [→] Sudah Paham</span>
      </div>
    </div>
  `;
}

function flipFlashcard() {
  state.flashcardFlipped = !state.flashcardFlipped;
  const card = document.getElementById('flashcard-card');
  if (card) {
    card.classList.toggle('is-flipped', state.flashcardFlipped);
  }
}

function nextFlashcard() {
  state.flashcardFlipped = false;
  state.flashcardIndex = (state.flashcardIndex + 1) % state.flashcardDeck.length;
  renderApp();
}

function prevFlashcard() {
  state.flashcardFlipped = false;
  state.flashcardIndex = (state.flashcardIndex - 1 + state.flashcardDeck.length) % state.flashcardDeck.length;
  renderApp();
}

function markCardMastered(id) {
  state.masteredCards.add(id);
  localStorage.setItem('keikaku_mastered_cards', JSON.stringify(Array.from(state.masteredCards)));
  nextFlashcard();
}

function markCardRepeat(id) {
  state.masteredCards.delete(id);
  localStorage.setItem('keikaku_mastered_cards', JSON.stringify(Array.from(state.masteredCards)));
  nextFlashcard();
}

function changeFlashcardFilter(filterVal) {
  state.flashcardFilter = filterVal;
  initDeck();
  renderApp();
}

function startFlashcardsForModule(moduleId) {
  state.flashcardFilter = moduleId;
  initDeck();
  navigateTo('flashcards');
}

function getFlashcardCountForModule(moduleId) {
  return FLASHCARDS_DATA.filter(c => c.moduleId === moduleId).length;
}

// ==========================================================================
// 5. QUIZZES & EXAM SIMULATION COMPONENT
// ==========================================================================
function renderQuizzesView() {
  const filteredMcqs = state.quizFilter === 'all' 
    ? QUIZZES_DATA.mcqs 
    : QUIZZES_DATA.mcqs.filter(q => q.moduleId === state.quizFilter);

  let correctCount = 0;
  let answeredCount = 0;
  filteredMcqs.forEach(q => {
    if (state.quizAnswers[q.id] !== undefined) {
      answeredCount++;
      if (state.quizAnswers[q.id] === q.answerIndex) {
        correctCount++;
      }
    }
  });

  const readinessPct = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  return `
    <div class="hero-banner" style="padding: 24px 28px; margin-bottom: 24px;">
      <h2 style="font-size: 1.5rem; font-weight:800; margin-bottom: 6px;">📝 Latihan Soal & Simulasi Ujian UTS</h2>
      <p style="font-size: 0.9rem; color: var(--text-secondary);">
        Soal latihan pilihan ganda dan studi kasus esai yang diurutkan menurut RPS resmi Minggu 1 sampai Minggu 7.
      </p>
    </div>

    <div class="quiz-header-bar">
      <div style="display:flex; align-items:center; gap:12px;">
        <label style="font-size:0.88rem; font-weight:600; color:var(--text-secondary);">Filter Modul:</label>
        <select class="deck-filter-select" onchange="changeQuizFilter(this.value)">
          <option value="all" ${state.quizFilter === 'all' ? 'selected' : ''}>Simulasi Lengkap Semua Modul (${QUIZZES_DATA.mcqs.length} Soal)</option>
          ${MATERIALS_DATA.map(m => `
            <option value="${m.id}" ${state.quizFilter === m.id ? 'selected' : ''}>
              ${m.rpsWeek}: ${m.title.substring(0, 30)}...
            </option>
          `).join('')}
        </select>
      </div>

      <div class="quiz-score-badge">
        Hasil: <strong>${correctCount}/${answeredCount} Benar</strong> 
        ${answeredCount > 0 ? `(${readinessPct}% Akurasi)` : ''}
      </div>
    </div>

    <!-- TAB PILIHAN GANDA VS STUDI KASUS -->
    <div style="display:flex; gap:10px; margin-bottom:24px;">
      <button class="btn-control active" id="btn-tab-mcq" onclick="showQuizTab('mcq')">
        Soal Pilihan Ganda (${filteredMcqs.length})
      </button>
      <button class="btn-control" id="btn-tab-essay" onclick="showQuizTab('essay')">
        Studi Kasus Analisis & Esai (${QUIZZES_DATA.essays.length})
      </button>
    </div>

    <!-- KONTEN MCQ -->
    <div id="quiz-tab-mcq-content" class="quiz-container">
      ${filteredMcqs.map((q, idx) => {
        const userChoice = state.quizAnswers[q.id];
        const isAnswered = userChoice !== undefined;
        const isCorrect = userChoice === q.answerIndex;

        return `
          <div class="question-card" id="q-card-${q.id}">
            <div class="q-meta">
              <span>Soal ${idx + 1} • ${q.moduleTitle}</span>
              <span class="tag-pill">${q.difficulty}</span>
            </div>
            <div class="q-text">${q.question}</div>
            
            <div class="options-list">
              ${q.options.map((opt, optIdx) => {
                let optClass = 'option-btn';
                if (isAnswered) {
                  optClass += ' disabled';
                  if (optIdx === q.answerIndex) {
                    optClass += ' correct';
                  } else if (optIdx === userChoice) {
                    optClass += ' wrong';
                  }
                }
                return `
                  <button class="${optClass}" onclick="selectQuizAnswer('${q.id}', ${optIdx})">
                    ${opt}
                  </button>
                `;
              }).join('')}
            </div>

            <div class="explanation-box ${isAnswered ? 'show' : ''}">
              <div style="font-weight:700; color:${isCorrect ? 'var(--accent-success)' : 'var(--accent-danger)'}; margin-bottom:6px;">
                ${isCorrect ? '✓ Jawaban Anda Benar!' : '✗ Jawaban Belum Tepat'}
              </div>
              <div>${q.explanation}</div>
            </div>
          </div>
        `;
      }).join('')}
    </div>

    <!-- KONTEN ESSAY / STUDI KASUS -->
    <div id="quiz-tab-essay-content" class="quiz-container" style="display:none;">
      ${QUIZZES_DATA.essays.map((essay, idx) => `
        <div class="essay-card">
          <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
            <span class="card-badge">Studi Kasus 0${idx + 1}</span>
            <span style="font-size:0.8rem; color:var(--accent-secondary); font-weight:600;">Soal Analisis UTS</span>
          </div>
          <h3 style="font-size:1.2rem; font-weight:700; margin-bottom:12px;">${essay.title}</h3>
          
          <div class="essay-scenario">
            <strong>Skenario Kasus:</strong><br>
            ${essay.scenario}
          </div>

          <div style="font-weight:600; margin:16px 0 10px; color:var(--text-primary); white-space:pre-line;">
            <strong>Pertanyaan Ujian:</strong><br>
            ${essay.question}
          </div>

          <div style="margin: 16px 0;">
            <button class="btn-control" onclick="toggleModelAnswer('answer-${essay.id}')">
              💡 Buka Kunci Jawaban Model & Rubrik Penilaian
            </button>
          </div>

          <div class="model-answer-box" id="answer-${essay.id}">
            <div style="font-weight:700; color:var(--accent-primary); margin-bottom:10px;">
              Kunci Jawaban Ideal & Pembahasan Komprehensif:
            </div>
            <div style="font-size:0.92rem; line-height:1.7; color:var(--text-primary); white-space:pre-line;">
              ${essay.modelAnswer}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function selectQuizAnswer(questionId, optionIndex) {
  if (state.quizAnswers[questionId] !== undefined) return;
  state.quizAnswers[questionId] = optionIndex;
  renderApp();
}

function changeQuizFilter(val) {
  state.quizFilter = val;
  renderApp();
}

function showQuizTab(tab) {
  const mcqContent = document.getElementById('quiz-tab-mcq-content');
  const essayContent = document.getElementById('quiz-tab-essay-content');
  const btnMcq = document.getElementById('btn-tab-mcq');
  const btnEssay = document.getElementById('btn-tab-essay');

  if (tab === 'mcq') {
    if (mcqContent) mcqContent.style.display = 'flex';
    if (essayContent) essayContent.style.display = 'none';
    if (btnMcq) btnMcq.classList.add('active');
    if (btnEssay) btnEssay.classList.remove('active');
  } else {
    if (mcqContent) mcqContent.style.display = 'none';
    if (essayContent) essayContent.style.display = 'flex';
    if (btnMcq) btnMcq.classList.remove('active');
    if (btnEssay) btnEssay.classList.add('active');
  }
}

function toggleModelAnswer(elementId) {
  const el = document.getElementById(elementId);
  if (el) {
    el.classList.toggle('show');
  }
}

// ==========================================================================
// 6. GLOSSARY VIEW (Kamus Istilah Cepat)
// ==========================================================================
function renderGlossaryView() {
  return `
    <div class="hero-banner" style="padding: 24px 28px; margin-bottom: 24px;">
      <h2 style="font-size: 1.5rem; font-weight:800; margin-bottom: 6px;">📖 Kamus Istilah Keikaku & Linguistik</h2>
      <p style="font-size: 0.9rem; color: var(--text-secondary);">
        Daftar lengkap 38 istilah teknis, kanji bahasa Jepang, dan konsep pedagogis yang sering keluar di soal ujian UTS.
      </p>
    </div>

    <div style="margin-bottom: 18px;">
      <input type="text" class="search-input" id="glossary-filter-input" placeholder="Ketik istilah atau konsep untuk memfilter..." onkeyup="filterGlossaryTable(this.value)">
    </div>

    <table class="glossary-table">
      <thead>
        <tr>
          <th style="width: 24%;">Istilah (Term)</th>
          <th style="width: 20%;">Kanji / Katakana</th>
          <th style="width: 16%;">Kategori</th>
          <th>Definisi Pedagogis</th>
        </tr>
      </thead>
      <tbody id="glossary-table-body">
        ${GLOSSARY_DATA.map(item => `
          <tr class="glossary-row">
            <td class="glossary-term">${item.term}</td>
            <td class="glossary-kanji">${item.kanji}</td>
            <td><span class="tag-pill">${item.category}</span></td>
            <td style="font-size:0.9rem; color:var(--text-secondary);">${item.definition}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function filterGlossaryTable(query) {
  const q = query.toLowerCase();
  document.querySelectorAll('.glossary-row').forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(q) ? '' : 'none';
  });
}

// ==========================================================================
// 7. CHEATSHEET VIEW (Poin Kunci Kilat UTS - 15 Menit Sebelum Ujian)
// ==========================================================================
function renderCheatsheetView() {
  return `
    <div class="hero-banner" style="padding: 24px 28px; margin-bottom: 28px;">
      <span class="card-badge" style="background-color:rgba(251,191,36,0.2); color:var(--accent-warning);">⚡ Ringkasan Kilat</span>
      <h2 style="font-size: 1.55rem; font-weight:800; margin: 8px 0 4px;">Poin Kunci Kilat UTS (Cheatsheet)</h2>
      <p style="font-size: 0.9rem; color: var(--text-secondary);">
        Matriks ringkas rumus materi, singkatan penting, dan istilah kunci yang wajib dihafal sebelum masuk ruang ujian UTS.
      </p>
    </div>

    <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap:20px; margin-bottom:40px;">
      
      <!-- Card 1 -->
      <div class="question-card">
        <div class="card-badge">Minggu 1</div>
        <h3 style="font-size:1.15rem; color:var(--accent-primary); margin-bottom:12px;">1. Paradigma & Psikolinguistik</h3>
        <ul style="padding-left:20px; font-size:0.92rem; line-height:1.7;">
          <li><strong>Struktural vs Komunikatif:</strong> Language usage (rumus mati) vs Language use (interaksi fungsional).</li>
          <li><strong>Interlanguage:</strong> Sistem bahasa transisi mandiri siswa (kesalahan adalah bukti berpikir).</li>
          <li><strong>Fosilisasi:</strong> Kesalahan membeku permanen akibat tiada corrective feedback.</li>
          <li><strong>Aizuchi:</strong> Respon aktif mendengarkan (Hai, Naruhodo, Ee).</li>
          <li><strong>Uchi-Soto:</strong> Merendahkan pihak dalam (Uchi) dan meninggikan pihak luar (Soto) dalam Keigo.</li>
        </ul>
      </div>

      <!-- Card 2 -->
      <div class="question-card">
        <div class="card-badge">Minggu 2-3</div>
        <h3 style="font-size:1.15rem; color:var(--accent-primary); margin-bottom:12px;">2. Kurikulum Merdeka & JF Standard</h3>
        <ul style="padding-left:20px; font-size:0.92rem; line-height:1.7;">
          <li><strong>Target Fase F:</strong> Level A2.1 (Basic User) JF Standard.</li>
          <li><strong>Prinsip Can-Do:</strong> Mengukur apa yang mampu <em>dilakukan</em> dengan bahasa Jepang di situasi riil.</li>
          <li><strong>Hierarki:</strong> Capaian Pembelajaran (CP) $\\rightarrow$ Tujuan Pembelajaran (TP) $\\rightarrow$ Alur Tujuan Pembelajaran (ATP).</li>
          <li><strong>3 Asesmen:</strong> Diagnostik Awal, Formatif (Proses), Sumatif (Akhir).</li>
        </ul>
      </div>

      <!-- Card 3 -->
      <div class="question-card">
        <div class="card-badge">Minggu 4</div>
        <h3 style="font-size:1.15rem; color:var(--accent-primary); margin-bottom:12px;">3. 4 Pilar Survei Course Design</h3>
        <ul style="padding-left:20px; font-size:0.92rem; line-height:1.7;">
          <li><strong>Nīzu (ニーズ):</strong> Kebutuhan (tujuan, situasi, lawan bicara, target JLPT).</li>
          <li><strong>Redinesu (レディネス):</strong> Kesiapan / kemampuan awal (zero beginner vs kisyuu nouryoku).</li>
          <li><strong>Tekisei (適性):</strong> Bakat bahasa (beda bunyi fonemis, tata bahasa, memori).</li>
          <li><strong>Jōken (条件):</strong> Syarat/kondisi (bahasa ibu, gaya belajar, jam belajar).</li>
        </ul>
      </div>

      <!-- Card 4 -->
      <div class="question-card">
        <div class="card-badge">Minggu 5</div>
        <h3 style="font-size:1.15rem; color:var(--accent-primary); margin-bottom:12px;">4. Teknik Dokkai & Integrasi 4C</h3>
        <ul style="padding-left:20px; font-size:0.92rem; line-height:1.7;">
          <li><strong>Seidoku (精読):</strong> Membaca intensif bedah kosakata & gramatika.</li>
          <li><strong>Sokudoku (速読):</strong> Membaca cepat mengambil intisari tanpa kamus.</li>
          <li><strong>Skimming:</strong> Baca sekilas pandang menangkap ide global.</li>
          <li><strong>Scanning:</strong> Memindai mencari info spesifik (jam, harga, nama).</li>
          <li><strong>Yosoku (予測):</strong> Membaca prediktif menerka alur dari gambar/judul.</li>
          <li><strong>4C:</strong> Critical Thinking, Creativity, Collaboration, Communication.</li>
        </ul>
      </div>

      <!-- Card 5 -->
      <div class="question-card">
        <div class="card-badge">Minggu 6</div>
        <h3 style="font-size:1.15rem; color:var(--accent-primary); margin-bottom:12px;">5. Bahan Ajar vs Media Abad 21</h3>
        <ul style="padding-left:20px; font-size:0.92rem; line-height:1.7;">
          <li><strong>Bahan Ajar:</strong> Substansi isi pengetahuan (kosakata, teks, dialog).</li>
          <li><strong>Media Pembelajaran:</strong> Alat penyalur (video, LCD, platform Padlet, AI).</li>
          <li><strong>Kamishibai:</strong> Panel gambar dongeng tradisional Jepang.</li>
          <li><strong>Tadoku:</strong> Membaca banyak secara santai tanpa membuka kamus.</li>
        </ul>
      </div>

      <!-- Card 6 -->
      <div class="question-card">
        <div class="card-badge">Minggu 7 (Baru)</div>
        <h3 style="font-size:1.15rem; color:var(--accent-primary); margin-bottom:12px;">6. PROTA & PROSEM</h3>
        <ul style="padding-left:20px; font-size:0.92rem; line-height:1.7;">
          <li><strong>PROTA:</strong> Rencana penetapan alokasi waktu satu tahun ajaran (pedoman induk).</li>
          <li><strong>PROSEM:</strong> Penjabaran rinci materi & alokasi waktu dalam 1 semester.</li>
          <li><strong>Alur Wajib:</strong> PROTA $\\rightarrow$ PROSEM $\\rightarrow$ Modul Ajar (RPP).</li>
          <li><strong>Rumus JP:</strong> Total JP Efektif = Minggu Efektif (ME) × JP tatap muka/minggu.</li>
          <li><strong>Minggu Tidak Efektif:</strong> Diarsir/diberi warna khusus pada tabel PROSEM.</li>
        </ul>
      </div>

      <!-- Card 7 -->
      <div class="question-card">
        <div class="card-badge">Minggu 9</div>
        <h3 style="font-size:1.15rem; color:var(--accent-primary); margin-bottom:12px;">7. Program Literasi (GLS)</h3>
        <ul style="padding-left:20px; font-size:0.92rem; line-height:1.7;">
          <li><strong>3 Fase GLS:</strong> Pembiasaan (15 mnt tanpa nilai) $\\rightarrow$ Pengembangan (respons kreatif) $\\rightarrow$ Pembelajaran (terintegrasi nilai).</li>
          <li><strong>Ki (起):</strong> Pengenalan topik/masalah.</li>
          <li><strong>Shou (承):</strong> Pengembangan detail.</li>
          <li><strong>Ten (転):</strong> Kejutan / sudut pandang baru / plot twist.</li>
          <li><strong>Ketsu (結):</strong> Kesimpulan utuh.</li>
        </ul>
      </div>

    </div>
  `;
}

// ==========================================================================
// 8. KEYBOARD SHORTCUTS
// ==========================================================================
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (state.currentView === 'flashcards') {
      if (e.code === 'Space') {
        e.preventDefault();
        flipFlashcard();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        const current = state.flashcardDeck[state.flashcardIndex];
        if (current) markCardMastered(current.id);
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        const current = state.flashcardDeck[state.flashcardIndex];
        if (current) markCardRepeat(current.id);
      }
    }
  });
}

// ==========================================================================
// 9. FOCUS TOOLS: POMODORO TIMER
// ==========================================================================
function togglePomodoro() {
  if (state.pomodoroIsRunning) {
    pausePomodoro();
  } else {
    startPomodoro();
  }
}

function startPomodoro() {
  state.pomodoroIsRunning = true;
  updatePomodoroDisplay();

  state.pomodoroInterval = setInterval(() => {
    if (state.pomodoroSeconds > 0) {
      state.pomodoroSeconds--;
    } else if (state.pomodoroMinutes > 0) {
      state.pomodoroMinutes--;
      state.pomodoroSeconds = 59;
    } else {
      playChime();
      if (state.pomodoroMode === 'study') {
        alert('🎉 Sesi Belajar 25 Menit Selesai! Saatnya istirahat mata dan peregangan selama 5 menit.');
        state.pomodoroMode = 'break';
        state.pomodoroMinutes = 5;
      } else {
        alert('⏰ Istirahat 5 menit selesai! Siap melanjutkan belajar modul berikutnya?');
        state.pomodoroMode = 'study';
        state.pomodoroMinutes = 25;
      }
      state.pomodoroSeconds = 0;
    }
    updatePomodoroDisplay();
  }, 1000);
}

function pausePomodoro() {
  state.pomodoroIsRunning = false;
  clearInterval(state.pomodoroInterval);
  updatePomodoroDisplay();
}

function resetPomodoro() {
  pausePomodoro();
  state.pomodoroMode = 'study';
  state.pomodoroMinutes = 25;
  state.pomodoroSeconds = 0;
  updatePomodoroDisplay();
}

function updatePomodoroDisplay() {
  const el = document.getElementById('pomodoro-time');
  const btn = document.getElementById('pomodoro-toggle-btn');
  if (el) {
    const m = String(state.pomodoroMinutes).padStart(2, '0');
    const s = String(state.pomodoroSeconds).padStart(2, '0');
    el.textContent = `${m}:${s}`;
  }
  if (btn) {
    btn.textContent = state.pomodoroIsRunning ? 'Pause' : 'Start';
  }
}

function playChime() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime);
    osc.frequency.setValueAtTime(880, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 1.2);
  } catch (err) {}
}

// ==========================================================================
// 10. FOCUS TOOLS: AMBIENT SOUND SYNTHESIZER
// ==========================================================================
function toggleAmbientSound() {
  if (state.isAudioPlaying) {
    stopAmbientSound();
  } else {
    startAmbientSound();
  }
}

function startAmbientSound() {
  try {
    if (!state.audioCtx) {
      state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (state.audioCtx.state === 'suspended') {
      state.audioCtx.resume();
    }

    const bufferSize = state.audioCtx.sampleRate * 2;
    const buffer = state.audioCtx.createBuffer(1, bufferSize, state.audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5;
    }

    const noise = state.audioCtx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = state.audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, state.audioCtx.currentTime);

    const gain = state.audioCtx.createGain();
    gain.gain.setValueAtTime(0.08, state.audioCtx.currentTime);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(state.audioCtx.destination);

    noise.start();
    state.noiseNode = noise;
    state.isAudioPlaying = true;

    const btn = document.getElementById('ambient-sound-btn');
    if (btn) btn.textContent = '🔊 Rain: On';
  } catch (err) {}
}

function stopAmbientSound() {
  if (state.noiseNode) {
    try {
      state.noiseNode.stop();
      state.noiseNode.disconnect();
    } catch (e) {}
    state.noiseNode = null;
  }
  state.isAudioPlaying = false;
  const btn = document.getElementById('ambient-sound-btn');
  if (btn) btn.textContent = '🔈 Rain: Off';
}

function handleGlobalSearch(query) {
  if (!query.trim()) {
    navigateTo('materi');
    return;
  }
  navigateTo('glossary');
  setTimeout(() => {
    const input = document.getElementById('glossary-filter-input');
    if (input) {
      input.value = query;
      filterGlossaryTable(query);
    }
  }, 50);
}

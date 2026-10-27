
  /* ===== Hằng số & tiện ích dùng chung cho các phòng thí nghiệm ===== */
  const LAB_FRAME_MS = 40;          // 1 "khung hình" mô phỏng (Scratch thật ~33ms)
  const STAGE_UNITS_Y = 360;        // Sân khấu Scratch cao 360 đơn vị (y từ -180 đến 180)
  const STAGE_UNITS_X = 480;        // và rộng 480 đơn vị
  const STAGE_TOP_Y = 180;
  const STAGE_LEFT_X = -240;
  const SPRITE_PX = 32;             // cỡ emoji nhân vật trong lab
  const FENCE_Y = -165;             // Scratch giữ nhân vật không rời hẳn Sân khấu
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const isActive = id => document.getElementById(id).classList.contains('active');
  const yToPx = (stage, y) => (STAGE_TOP_Y - y) / STAGE_UNITS_Y * stage.clientHeight;
  const xToPx = (stage, x) => (x - STAGE_LEFT_X) / STAGE_UNITS_X * stage.clientWidth;
  const fmt = n => (Math.round(n * 10) / 10).toString();
  const escapeHtml = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const ok = t => `<span style="color:#15803d;">${t}</span>`;
  const bad = t => `<span style="color:#dc2626;">${t}</span>`;
  function setGround(el, groundY) { el.style.height = ((groundY - (-STAGE_TOP_Y)) / STAGE_UNITS_Y * 100) + '%'; }
  function markActive(buttons, activeBtn) { buttons.forEach(b => b.classList.toggle('active', b === activeBtn)); }

  /* ===== ARENA — Đúng hay Sai? ===== */
  const arenaScenarios = [
    { emoji: '🍎', text: 'Vật rơi trong đời thật luôn rơi với tốc độ đều nhau.', sub: 'Đúng hay sai?', answer: false, explain: 'Vật rơi nhanh dần theo thời gian — vì vậy ta cần biến vy thay đổi mỗi bước.' },
    { emoji: '⬆️', text: 'Biến vy dương nghĩa là nhân vật đang đi lên.', sub: 'Đúng hay sai?', answer: true, explain: 'vy dương là đi lên, vy âm là rơi xuống, vy = 0 là đứng lại ở đỉnh.' },
    { emoji: '🕳️', text: 'Không cần kiểm tra chạm đất, nhân vật vẫn tự dừng đúng chỗ.', sub: 'Đúng hay sai?', answer: false, explain: 'Thiếu khối nếu <tọa độ y < mặt đất>, nhân vật rơi xuyên qua đất và kẹt ở mép dưới Sân khấu.' },
    { emoji: '⬇️', text: 'Trọng lực làm vy giảm dần mỗi bước (thay đổi vy một lượng -1).', sub: 'Đúng hay sai?', answer: true, explain: 'Mỗi khung hình vy trừ đi 1: đang bay lên thì chậm dần, rồi đổi chiều và rơi nhanh dần.' },
    { emoji: '🦘', text: 'Nên cho nhân vật nhảy được cả khi đang ở giữa không trung.', sub: 'Đúng hay sai?', answer: false, explain: 'Chỉ cho nhảy khi đang đứng trên đất (tọa độ y = mặt đất), nếu không bấm liên tục là nhân vật bay mất.' },
    { emoji: '🏀', text: 'Mỗi lần bóng chạm đất, nhân lực nảy với 0.8 thì bóng sẽ nảy thấp dần.', sub: 'Đúng hay sai? (Câu hỏi bật mí bài hôm nay!)', answer: true, explain: 'Lực nảy chỉ còn 80% sau mỗi lần nảy nên bóng thấp dần, gần như nằm yên. Mình sẽ luyện ngay!' }
  ];
  let arenaIdx = 0, arenaStreak = 0, arenaAnswered = false;
  const arenaScenarioEl = document.getElementById('arenaScenario');
  const arenaEmojiEl = document.getElementById('arenaEmoji');
  const arenaTextEl = document.getElementById('arenaText');
  const arenaSubEl = document.getElementById('arenaSub');
  const arenaFeedbackEl = document.getElementById('arenaFeedback');
  const arenaStreakEl = document.getElementById('arenaStreak');
  const btnArenaTrue = document.getElementById('btnArenaTrue');
  const btnArenaFalse = document.getElementById('btnArenaFalse');
  const btnArenaNext = document.getElementById('btnArenaNext');
  function loadArenaScenario() {
    arenaAnswered = false;
    btnArenaTrue.disabled = false; btnArenaFalse.disabled = false;
    btnArenaTrue.classList.remove('correct-glow', 'wrong-glow');
    btnArenaFalse.classList.remove('correct-glow', 'wrong-glow');
    arenaScenarioEl.classList.remove('right', 'wrongc');
    const s = arenaScenarios[arenaIdx];
    arenaEmojiEl.textContent = s.emoji;
    arenaTextEl.textContent = `Câu ${arenaIdx + 1}/${arenaScenarios.length}: ${s.text}`;
    arenaSubEl.textContent = s.sub;
    arenaFeedbackEl.textContent = 'Cả lớp đoán trước, rồi thầy/cô bấm để kiểm tra nhé!';
    btnArenaNext.style.display = 'none';
    arenaScenarioEl.classList.add('pop'); setTimeout(() => arenaScenarioEl.classList.remove('pop'), 300);
  }
  function handleArena(chosen) {
    if (arenaAnswered) return;
    arenaAnswered = true;
    const s = arenaScenarios[arenaIdx];
    const correct = chosen === s.answer;
    const chosenBtn = chosen ? btnArenaTrue : btnArenaFalse;
    btnArenaTrue.disabled = true; btnArenaFalse.disabled = true;
    if (correct) {
      arenaStreak++;
      chosenBtn.classList.add('correct-glow');
      arenaScenarioEl.classList.add('right');
      arenaFeedbackEl.innerHTML = ok(`🎉 CHÍNH XÁC! ${escapeHtml(s.explain)}`);
    } else {
      arenaStreak = 0;
      chosenBtn.classList.add('wrong-glow');
      arenaScenarioEl.classList.add('wrongc');
      arenaFeedbackEl.innerHTML = bad(`💡 Chưa đúng — đáp án là ${s.answer ? 'ĐÚNG' : 'SAI'}. ${escapeHtml(s.explain)}`);
    }
    arenaStreakEl.textContent = `🔥 Chuỗi đúng: ${arenaStreak}`;
    arenaStreakEl.classList.remove('bump'); void arenaStreakEl.offsetWidth; arenaStreakEl.classList.add('bump');
    btnArenaNext.textContent = arenaIdx < arenaScenarios.length - 1 ? 'Câu tiếp theo ➡️' : 'Chơi lại từ đầu 🔄';
    btnArenaNext.style.display = 'block';
  }
  btnArenaTrue.addEventListener('click', e => { e.stopPropagation(); handleArena(true); });
  btnArenaFalse.addEventListener('click', e => { e.stopPropagation(); handleArena(false); });
  btnArenaNext.addEventListener('click', e => {
    e.stopPropagation();
    if (arenaIdx < arenaScenarios.length - 1) arenaIdx++;
    else { arenaIdx = 0; arenaStreak = 0; arenaStreakEl.textContent = '🔥 Chuỗi đúng: 0'; }
    loadArenaScenario();
  });
  loadArenaScenario();

  /* ===== THẺ KIẾN THỨC — bấm để xem khối lệnh ===== */
  document.querySelectorAll('.btn-reveal').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const open = btn.closest('.k-card').classList.toggle('open');
      btn.textContent = open ? '🙈 Ẩn khối lệnh' : '👀 Xem khối lệnh';
    });
  });

  /* ===== LAB A — Trọng lực: đủ công thức vs quên chạm đất vs quên đặt y ===== */
  const LA_START_Y = 150, LA_GROUND_Y = -120, LA_GRAVITY = -1, LA_SETTLE_FRAMES = 10;
  const LA_MAX_FRAMES = { ok: 80, noGround: 55, noSnap: 75 };
  const laStage = document.getElementById('laStage');
  const laSprite = document.getElementById('laSprite');
  const laYEl = document.getElementById('laY');
  const laVyEl = document.getElementById('laVy');
  const laFeedback = document.getElementById('laFeedback');
  const laBtns = [document.getElementById('btnLaOk'), document.getElementById('btnLaNoGround'), document.getElementById('btnLaNoSnap')];
  let laRunId = 0;
  function laRender(y, vy) {
    laSprite.style.top = (yToPx(laStage, y) - SPRITE_PX) + 'px';
    laYEl.textContent = fmt(y); laVyEl.textContent = fmt(vy);
  }
  function laLayout() { setGround(document.getElementById('laGround'), LA_GROUND_Y); laRender(LA_START_Y, 0); }
  async function runLabA(mode, btn) {
    const runId = ++laRunId;
    markActive(laBtns, btn);
    let y = LA_START_Y, vy = 0, settled = 0;
    laRender(y, vy);
    laFeedback.textContent = 'Đang chạy: thay đổi vy → thay đổi y…';
    for (let frame = 0; frame < LA_MAX_FRAMES[mode]; frame++) {
      await sleep(LAB_FRAME_MS);
      if (runId !== laRunId || !isActive('slLabA')) return;
      vy += LA_GRAVITY; y += vy;
      if (mode === 'ok') { if (y < LA_GROUND_Y) { y = LA_GROUND_Y; vy = 0; } }
      else if (mode === 'noSnap') { if (y < LA_GROUND_Y) vy = 0; }
      if (y < FENCE_Y) y = FENCE_Y;
      laRender(y, vy);
      if (mode === 'ok' && y === LA_GROUND_Y) { if (++settled >= LA_SETTLE_FRAMES) break; } else settled = 0;
    }
    if (mode === 'ok') {
      laFeedback.innerHTML = ok('🎉 Táo rơi <strong>nhanh dần</strong> rồi dừng đúng mặt đất (y = -120), vy về 0. Đủ 4 khối nên rất ổn!');
    } else if (mode === 'noGround') {
      laStage.classList.remove('shake-it'); void laStage.offsetWidth; laStage.classList.add('shake-it');
      laFeedback.innerHTML = bad('⚠️ Không có <code>nếu &lt;tọa độ y &lt; -120&gt;</code>: táo <strong>xuyên qua đất</strong>, kẹt ở mép dưới Sân khấu — vy cứ tụt mãi, nhìn con số trên bảng!');
    } else {
      laStage.classList.remove('shake-it'); void laStage.offsetWidth; laStage.classList.add('shake-it');
      laFeedback.innerHTML = bad('⚠️ Có <code>đặt vy thành 0</code> nhưng quên <code>đặt y thành -120</code>: táo lún quá mặt đất rồi <strong>chìm thêm mỗi khung hình</strong>!');
    }
  }
  laBtns[0].addEventListener('click', e => { e.stopPropagation(); runLabA('ok', laBtns[0]); });
  laBtns[1].addEventListener('click', e => { e.stopPropagation(); runLabA('noGround', laBtns[1]); });
  laBtns[2].addEventListener('click', e => { e.stopPropagation(); runLabA('noSnap', laBtns[2]); });

  /* ===== LAB B — Bóng nảy tắt dần ===== */
  const LB_START_Y = 150, LB_GROUND_Y = -130, LB_POWER_START = 10, LB_DAMP = 0.8;
  const LB_STOP_POWER = 0.5, LB_DRIFT_PX = 2, LB_START_LEFT_PX = 22, LB_GRAVITY = -1;
  const LB_MAX_FRAMES = { ok: 220, noDamp: 120, outside: 75 };
  const lbStage = document.getElementById('lbStage');
  const lbSprite = document.getElementById('lbSprite');
  const lbVyEl = document.getElementById('lbVy');
  const lbPowerEl = document.getElementById('lbPower');
  const lbFeedback = document.getElementById('lbFeedback');
  const lbBtns = [document.getElementById('btnLbOk'), document.getElementById('btnLbNoDamp'), document.getElementById('btnLbOutside')];
  let lbRunId = 0;
  function lbRender(y, vy, power, xPx) {
    lbSprite.style.left = xPx + 'px';
    lbSprite.style.top = (yToPx(lbStage, y) - SPRITE_PX) + 'px';
    lbVyEl.textContent = fmt(vy); lbPowerEl.textContent = fmt(power);
  }
  function lbClearTrail() { lbStage.querySelectorAll('.pl-dot').forEach(d => d.remove()); }
  function lbDot(xPx, y) {
    const d = document.createElement('div');
    d.className = 'pl-dot';
    d.style.left = (xPx - 2) + 'px';
    d.style.top = (yToPx(lbStage, y) - SPRITE_PX / 2 - 2) + 'px';
    lbStage.appendChild(d);
  }
  function lbLayout() { lbClearTrail(); setGround(document.getElementById('lbGround'), LB_GROUND_Y); lbRender(LB_START_Y, 0, LB_POWER_START, LB_START_LEFT_PX); }
  async function runLabB(mode, btn) {
    const runId = ++lbRunId;
    markActive(lbBtns, btn);
    lbClearTrail();
    let y = LB_START_Y, vy = 0, power = LB_POWER_START, xPx = LB_START_LEFT_PX, bounces = 0;
    lbRender(y, vy, power, xPx);
    lbFeedback.textContent = 'Đang chạy: rơi → chạm đất → nảy…';
    for (let frame = 0; frame < LB_MAX_FRAMES[mode]; frame++) {
      await sleep(LAB_FRAME_MS);
      if (runId !== lbRunId || !isActive('slLT1')) return;
      vy += LB_GRAVITY; y += vy;
      if (y < LB_GROUND_Y) {
        y = LB_GROUND_Y; vy = power; bounces++;
        if (mode === 'ok') power *= LB_DAMP;
      }
      if (mode === 'outside') power *= LB_DAMP;     // khối nhân nằm ngoài "nếu" → chạy ở MỌI khung hình
      xPx += LB_DRIFT_PX;
      lbRender(y, vy, power, xPx);
      lbDot(xPx, y);
      if (mode === 'ok' && bounces > 0 && power < LB_STOP_POWER) break;
    }
    if (mode === 'ok') {
      lbFeedback.innerHTML = ok('🎉 Mỗi lần chạm đất, lực nảy nhân <strong>0.8</strong> nên bóng nảy thấp dần rồi gần như nằm yên. Nhìn các chấm cam: đỉnh nảy hạ dần!');
    } else if (mode === 'noDamp') {
      lbFeedback.innerHTML = bad('⚠️ Quên nhân 0.8: lực nảy luôn là 10 nên bóng nảy <strong>mãi mãi cùng một độ cao</strong> — không bao giờ dừng!');
    } else {
      lbFeedback.innerHTML = bad('⚠️ Khối nhân 0.8 nằm <strong>ngoài</strong> <code>nếu</code> nên bị nhân ở mọi khung hình: lực nảy tụt về gần 0 trước khi bóng chạm đất, bóng chỉ nảy xíu rồi nằm yên!');
    }
  }
  lbBtns[0].addEventListener('click', e => { e.stopPropagation(); runLabB('ok', lbBtns[0]); });
  lbBtns[1].addEventListener('click', e => { e.stopPropagation(); runLabB('noDamp', lbBtns[1]); });
  lbBtns[2].addEventListener('click', e => { e.stopPropagation(); runLabB('outside', lbBtns[2]); });

  /* ===== LAB C — Chạy thử LT2: nhảy qua chướng ngại ===== */
  const LC_GROUND_Y = -120, LC_CHAR_X = -100, LC_OBS_START_X = 240, LC_OBS_SPEED = 6, LC_OBS_WRAP_X = -240;
  const LC_JUMP_VY = 12, LC_GRAVITY = -1;
  const LC_HIT_DX = 28, LC_OBS_HEIGHT = 38;        // đơn vị Sân khấu; Scratch tính va chạm theo điểm ảnh nhìn thấy nên hẹp hơn khung emoji
  const LC_SAY_FRAMES = Math.round(2000 / LAB_FRAME_MS);   // "nói trong 2 giây"
  const lcStage = document.getElementById('lcStage');
  const lcChar = document.getElementById('lcChar');
  const lcObs = document.getElementById('lcObs');
  const lcBubble = document.getElementById('lcBubble');
  const lcDodgedEl = document.getElementById('lcDodged');
  const lcStateEl = document.getElementById('lcState');
  const lcFeedback = document.getElementById('lcFeedback');
  const btnLcStart = document.getElementById('btnLcStart');
  const btnLcJump = document.getElementById('btnLcJump');
  const btnLcBug = document.getElementById('btnLcBug');
  const btnLcReset = document.getElementById('btnLcReset');
  let lcRunId = 0, lcRunning = false, lcJumpQueued = false, lcForgotStop = false;
  let lcX = LC_OBS_START_X, lcOffset = 0, lcVy = 0, lcFreeze = 0, lcDodged = 0, lcLapHit = false;
  function lcRender() {
    const groundTop = yToPx(lcStage, LC_GROUND_Y);
    const unitPx = lcStage.clientHeight / STAGE_UNITS_Y;
    const charLeft = xToPx(lcStage, LC_CHAR_X);
    const charTop = groundTop - lcOffset * unitPx - SPRITE_PX;
    lcChar.style.left = charLeft + 'px'; lcChar.style.top = charTop + 'px';
    lcObs.style.left = xToPx(lcStage, lcX) + 'px'; lcObs.style.top = (groundTop - lcObs.offsetHeight) + 'px';
    lcBubble.style.left = charLeft + 'px'; lcBubble.style.top = Math.max(2, charTop - 28) + 'px';
    lcBubble.classList.toggle('show', lcFreeze > 0);
    lcDodgedEl.textContent = lcDodged;
  }
  function lcResetState() {
    lcRunId++; lcRunning = false; lcJumpQueued = false;
    lcX = LC_OBS_START_X; lcOffset = 0; lcVy = 0; lcFreeze = 0; lcDodged = 0; lcLapHit = false;
    lcStateEl.textContent = 'Chưa chạy';
    btnLcStart.classList.remove('active');
    lcRender();
  }
  function lcLayout() { setGround(document.getElementById('lcGround'), LC_GROUND_Y); lcResetState(); }
  async function runLabC() {
    lcResetState();
    const runId = lcRunId;
    lcRunning = true;
    btnLcStart.classList.add('active');
    lcStateEl.textContent = 'Đang chạy';
    lcFeedback.textContent = 'Bấm Nhảy đúng lúc khi hòn đá tới gần nhân vật!';
    while (runId === lcRunId && isActive('slLT2')) {
      await sleep(LAB_FRAME_MS);
      if (runId !== lcRunId || !isActive('slLT2')) return;
      // Sprite Chướng ngại: thay đổi x -6; hết màn hình thì quay lại bên phải
      lcX -= LC_OBS_SPEED;
      if (lcX < LC_OBS_WRAP_X) {
        lcX = LC_OBS_START_X;
        if (!lcLapHit) { lcDodged++; lcFeedback.innerHTML = ok('🎉 Né được rồi! Hòn đá quay lại bên phải, số lần né tăng thêm 1.'); }
        lcLapHit = false;
      }
      // Sprite Nhân vật: "nói trong 2 giây" làm kịch bản của nhân vật đứng chờ (trọng lực cũng đứng!)
      if (lcFreeze > 0) {
        lcFreeze--;
        if (lcFreeze === 0) {
          if (!lcForgotStop) {
            lcRunning = false; lcStateEl.textContent = 'Game dừng'; btnLcStart.classList.remove('active');
            lcFeedback.innerHTML = bad('💥 Chạm hòn đá! Nhân vật nói "Thua rồi!" 2 giây (trong lúc đó hòn đá vẫn chạy) rồi <code>dừng lại [tất cả]</code>. Bấm Làm lại để chơi tiếp.');
            lcRender();
            return;
          }
          lcFeedback.innerHTML = bad('🐞 Quên <code>dừng lại [tất cả]</code>: nhân vật nói xong là game <strong>vẫn chạy tiếp</strong> — thua rồi mà vẫn chơi!');
        }
      } else {
        if (lcJumpQueued && lcOffset === 0) lcVy = LC_JUMP_VY;      // chỉ nhảy khi đang đứng trên đất
        lcJumpQueued = false;
        lcVy += LC_GRAVITY; lcOffset += lcVy;
        if (lcOffset < 0) { lcOffset = 0; lcVy = 0; }
        if (Math.abs(lcX - LC_CHAR_X) < LC_HIT_DX && lcOffset < LC_OBS_HEIGHT) {
          lcLapHit = true; lcFreeze = LC_SAY_FRAMES;
          lcStage.classList.remove('shake-it'); void lcStage.offsetWidth; lcStage.classList.add('shake-it');
        }
      }
      lcRender();
    }
  }
  btnLcStart.addEventListener('click', e => { e.stopPropagation(); runLabC(); });
  btnLcJump.addEventListener('click', e => {
    e.stopPropagation();
    if (!lcRunning) { lcFeedback.textContent = 'Bấm cờ xanh trước đã nhé! 🏳️'; return; }
    if (lcFreeze > 0) { lcFeedback.textContent = 'Nhân vật đang nói "Thua rồi!" nên đứng chờ, chưa nhảy được.'; return; }
    if (lcOffset > 0) { lcFeedback.innerHTML = bad('🚫 Đang ở trên không: điều kiện <code>tọa độ y = -120</code> không đúng nên không nhảy lần 2 được!'); return; }
    lcJumpQueued = true;
  });
  btnLcBug.addEventListener('click', e => {
    e.stopPropagation();
    lcForgotStop = !lcForgotStop;
    btnLcBug.textContent = `🐞 Quên dừng lại: ${lcForgotStop ? 'BẬT' : 'TẮT'}`;
    btnLcBug.classList.toggle('bug-on', lcForgotStop);
  });
  btnLcReset.addEventListener('click', e => {
    e.stopPropagation(); lcResetState();
    lcFeedback.innerHTML = 'Bấm <strong>cờ xanh</strong>, rồi bấm <strong>Nhảy</strong> đúng lúc để né hòn đá!';
  });

  // Bố cục các sân khấu mini phụ thuộc kích thước thật → vẽ lại khi đổi cỡ cửa sổ / vào toàn màn hình
  function layoutLabs() { laRunId++; lbRunId++; laLayout(); lbLayout(); lcLayout(); }
  window.addEventListener('resize', layoutLabs);

  /* ===== BÁC SĨ SCRATCH ===== */
  document.querySelectorAll('.btn-cure').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); btn.closest('.clinic-card').classList.add('cured'); });
  });

  /* ===== CHECKLIST RÀ SOÁT ===== */
  const finalItems = document.querySelectorAll('#finalChecklist li');
  const checkFill = document.getElementById('checkFill');
  const checkStatus = document.getElementById('checkStatus');
  function renderChecklist() {
    const done = document.querySelectorAll('#finalChecklist li.checked').length;
    checkFill.style.width = (done / finalItems.length) * 100 + '%';
    checkStatus.textContent = done === finalItems.length ? '🎉 Tuyệt vời! Em đã hoàn thành mọi mục — nhớ lưu dự án nhé!' : `${done} / ${finalItems.length} mục hoàn thành`;
  }
  finalItems.forEach(li => li.addEventListener('click', e => { e.stopPropagation(); li.classList.toggle('checked'); renderChecklist(); }));
  renderChecklist();

  /* ===== DANH HIỆU SHOWCASE ===== */
  document.querySelectorAll('.award').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); btn.classList.toggle('lit'); });
  });

  /* ===== QUIZ ===== */
  const quizQuestions = [
    { q: '1. Em muốn bóng nảy THẤP DẦN mỗi lần chạm đất. Sau khối "đặt vy thành (lực nảy)", em thêm khối nào?', opts: ['đặt lực nảy thành 0', 'đặt lực nảy thành (lực nảy * 0.8)', 'thay đổi y một lượng 10', 'đặt vy thành 0'], ans: 1, explain: 'Nhân lực nảy với 0.8 thì lần nảy sau chỉ còn 80% lần trước, bóng thấp dần.' },
    { q: '2. Khối "đặt lực nảy thành (lực nảy * 0.8)" bị đặt NGOÀI khối "nếu". Chuyện gì xảy ra?', opts: ['Bóng nảy cao hơn', 'Mọi thứ vẫn bình thường', 'Lực nảy luôn là 10', 'Lực nảy bị nhân 0.8 ở mọi khung hình, tụt gần 0 trước khi bóng chạm đất'], ans: 3, explain: 'Khối ngoài "nếu" chạy ở mọi khung hình nên lực nảy co lại rất nhanh — bóng chỉ nảy xíu rồi nằm yên.' },
    { q: '3. Muốn nhân vật CHỈ nhảy khi đang đứng trên đất, em ghép điều kiện nào?', opts: ['<phím cách được bấm?> và <tọa độ y = -120>', '<phím cách được bấm?> hoặc <tọa độ y = -120>', 'Chỉ cần <phím cách được bấm?>', '<tọa độ y < -120>'], ans: 0, explain: 'Khối "và" cần CẢ HAI điều kiện đúng. Dùng "hoặc" thì chỉ cần giữ phím cách là nhảy giữa trời được!' },
    { q: '4. Nhân vật chạm chướng ngại, nói "Thua rồi!" và em muốn GAME DỪNG HẲN. Em thêm khối nào?', opts: ['ẩn', 'đặt vy thành 0', 'dừng lại [tất cả]', 'đợi (2) giây'], ans: 2, explain: 'Khối "dừng lại [tất cả]" dừng mọi kịch bản. Thiếu nó thì nói xong game vẫn chạy tiếp.' },
    { q: '5. Game 3 mạng: sau khi mất mạng, em muốn bất tử 1 giây mà trọng lực KHÔNG bị đứng hình. Em nên làm gì?', opts: ['Đặt "đợi 1 giây" ngay trong vòng lặp chính', 'Dùng script riêng "khi nhận [HồiSinh]" để đợi 1 giây rồi tắt bất tử', 'Tăng mạng lên 100', 'Xóa khối trọng lực'], ans: 1, explain: 'Khối đợi trong vòng lặp chính làm cả kịch bản đứng chờ. Script riêng chạy song song nên nhân vật vẫn rơi bình thường.' }
  ];
  let currentQuizIdx = 0, quizScore = 0, quizAnswered = false;
  const quizProgressText = document.getElementById('quizProgressText');
  const quizScoreText = document.getElementById('quizScoreText');
  const quizQuestion = document.getElementById('quizQuestion');
  const quizOptions = document.getElementById('quizOptions');
  const quizExplain = document.getElementById('quizExplain');
  const btnQuizNext = document.getElementById('btnQuizNext');
  function renderQuizQuestion() {
    quizAnswered = false;
    const qData = quizQuestions[currentQuizIdx];
    quizProgressText.textContent = `Câu hỏi ${currentQuizIdx + 1} / ${quizQuestions.length}`;
    quizQuestion.textContent = qData.q;
    quizExplain.className = 'quiz-explain'; quizExplain.textContent = '';
    btnQuizNext.className = 'btn-quiz-next';
    const letters = ['A', 'B', 'C', 'D'];
    quizOptions.innerHTML = qData.opts.map((opt, i) => `<button class="quiz-opt-btn" data-opt="${i}"><span class="quiz-opt-badge">${letters[i]}</span><span>${escapeHtml(opt)}</span></button>`).join('');
    quizOptions.querySelectorAll('.quiz-opt-btn').forEach(btn => { btn.addEventListener('click', e => { e.stopPropagation(); if (quizAnswered) return; handleQuizSelect(Number(btn.dataset.opt)); }); });
  }
  function handleQuizSelect(selectedIdx) {
    quizAnswered = true;
    const qData = quizQuestions[currentQuizIdx];
    const isCorrect = selectedIdx === qData.ans;
    quizOptions.querySelectorAll('.quiz-opt-btn').forEach((btn, i) => { btn.disabled = true; if (i === qData.ans) btn.classList.add('correct'); else if (i === selectedIdx) btn.classList.add('wrong'); });
    if (isCorrect) { quizScore += 20; quizScoreText.textContent = `⭐ Điểm: ${quizScore}`; quizExplain.innerHTML = `🎉 <strong>Chính xác!</strong> ${escapeHtml(qData.explain)}`; }
    else { quizExplain.innerHTML = `💡 <strong>Chưa chính xác!</strong> Đáp án đúng là <strong>${['A', 'B', 'C', 'D'][qData.ans]}</strong>. ${escapeHtml(qData.explain)}`; }
    quizExplain.classList.add('show');
    btnQuizNext.textContent = currentQuizIdx < quizQuestions.length - 1 ? 'Câu tiếp theo ➡️' : 'Xem kết quả chung cuộc 🏆';
    btnQuizNext.classList.add('show');
  }
  function quizTitleFor(score) {
    if (score >= 80) return 'KỸ SƯ TRỌNG LỰC TÀI BA!';
    if (score >= 40) return 'THỢ XÂY GAME NHÍ!';
    return 'NHÀ THÁM HIỂM TÁO RƠI!';
  }
  btnQuizNext.addEventListener('click', e => {
    e.stopPropagation();
    if (currentQuizIdx < quizQuestions.length - 1) { currentQuizIdx++; renderQuizQuestion(); return; }
    quizProgressText.textContent = 'Hoàn thành!';
    quizQuestion.innerHTML = `🎉 Hoàn thành Đấu trường Quiz Buổi 36! Điểm của em: <strong>${quizScore} / 100</strong>`;
    quizOptions.innerHTML = `<div style="grid-column: span 2; background:#faf5ff; border:2px solid #a855f7; border-radius:14px; padding:18px; text-align:center;"><div class="trophy">🏆🍎</div><h3 style="color:#7e22ce; font-size:1.2rem; margin-bottom:6px;">DANH HIỆU: ${quizTitleFor(quizScore)}</h3><p style="font-size:0.95rem; font-weight:700; color:#581c87;">Em đã nắm công thức trọng lực, bóng nảy tắt dần, điều kiện nhảy và cách dùng mạng. Buổi sau em sẽ cho nhân vật chạy nhảy trên nhiều bệ đá!</p></div>`;
    quizExplain.className = 'quiz-explain'; btnQuizNext.className = 'btn-quiz-next';
  });
  renderQuizQuestion();

  /* ===== KHỞI TẠO ===== */
  buildDots();
  slides.forEach((s, i) => { s.setAttribute('aria-hidden', i !== 0); if (i === 0) s.classList.add('active'); else s.classList.add('next'); });
  progressBar.style.width = (1 / total) * 100 + '%';
  btnPrev.disabled = true;
  layoutLabs();

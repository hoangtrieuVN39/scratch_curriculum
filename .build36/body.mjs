// Sinh body HTML buổi 36 (helpers đảm bảo mọi header .c-block đều bọc .block-head)
export const a = t => `<span class="block-arg">${t}</span>`;
const blk = (cls, t, opt = false) => `<div class="block ${cls}${opt ? ' optional' : ''}">${t}</div>`;
const cb = (cls, head, body, opt = false) =>
  `<div class="block ${cls} c-block${opt ? ' optional' : ''}"><span class="block-head">${head}</span><div class="c-body">${body}</div></div>`;
const bc = inner => `<div class="blocks-container compact">${inner}</div>`;
const flag = blk('event', 'khi bấm vào 🏳️');
const muted = t => `<div class="muted-row">${t}</div>`;
const LT = '&lt;', GT = '&gt;';
const cond = (...p) => LT + p.join('') + GT;

// khối thường dùng
const setVar = (v, val, o) => blk('variable', `đặt ${a(v + ' ▾')} thành ${a(val)}`, o);
const chgVar = (v, val, o) => blk('variable', `thay đổi ${a(v + ' ▾')} một lượng ${a(val)}`, o);
const chgY = (val, o) => blk('motion', `thay đổi y một lượng ${a(val)}`, o);
const chgX = (val, o) => blk('motion', `thay đổi x một lượng ${a(val)}`, o);
const setY = (val, o) => blk('motion', `đặt y thành ${a(val)}`, o);
const setX = (val, o) => blk('motion', `đặt x thành ${a(val)}`, o);
const goTo = (x, y) => blk('motion', `đi tới x: ${a(x)} y: ${a(y)}`);
const wait = s => blk('control', `đợi ${a(s)} giây`);
const stopAll = blk('control', `dừng lại ${a('tất cả ▾')}`);
const sayFor = (t, s) => blk('looks', `nói ${a(t)} trong ${a(s)} giây`);
const forever = body => cb('control', 'liên tục', body);
const ifc = (c, body, opt) => cb('control', `nếu ${c} thì`, body, opt);
const touching = n => `${LT}đang chạm ${a(n + ' ▾')}?${GT}`;
const yLess = n => `${LT}${a('tọa độ y')} &lt; ${a(n)}${GT}`;

const gravity = chgVar('vy', '-1') + chgY('vy');

const slides = [];

// 1 — Tiêu đề
slides.push(`
  <!-- Slide 1: Tiêu đề -->
  <section class="slide title-slide active" data-index="0" aria-label="Tiêu đề">
    <div class="slide-main">
      <div class="title-emoji"><span>🍎</span><span>🏀</span><span>🦘</span></div>
      <h1>Luyện Trọng Lực</h1>
      <p class="subtitle">Bóng nảy thấp dần, nhảy qua chướng ngại — và làm game nhảy xịn hơn!</p>
      <div class="title-meta">
        <span class="badge highlight">📅 Tuần 18</span>
        <span class="badge">🛠️ Buổi 36 — Bài tập</span>
        <span class="badge">🎯 Độ tuổi: 7–10</span>
      </div>
      <p class="start-hint">Nhấn → hoặc Phím cách để bắt đầu nào! 🚀</p>
    </div>
  </section>`);

// 2 — Khởi động Đúng/Sai
slides.push(`
  <!-- Slide 2: Khởi động — Đúng hay Sai? -->
  <section class="slide" data-index="1" aria-label="Khởi động Đúng hay Sai">
    <div class="slide-main">
      <span class="slide-tag purple">🎬 Khởi động ôn tập (10 phút)</span>
      <h2>Đúng Hay Sai? Nhớ Lại Buổi 35 Nào! ⚡</h2>
      <div class="slide-body">
        <div class="arena-wrap">
          <div class="arena-rule-bar">
            <span>Đọc to câu hỏi → cả lớp đoán → bấm <strong>✅ ĐÚNG</strong> hoặc <strong>❌ SAI</strong></span>
            <span class="arena-streak-badge" id="arenaStreak">🔥 Chuỗi đúng: 0</span>
          </div>
          <div class="arena-scenario" id="arenaScenario">
            <div class="arena-scenario-emoji" id="arenaEmoji">🍎</div>
            <div class="arena-scenario-text" id="arenaText">Đang tải câu hỏi...</div>
            <div class="arena-scenario-sub" id="arenaSub"></div>
          </div>
          <div class="arena-btns">
            <button class="btn-arena win" id="btnArenaTrue">✅ ĐÚNG!</button>
            <button class="btn-arena lose" id="btnArenaFalse">❌ SAI!</button>
          </div>
          <div class="arena-feedback-msg" id="arenaFeedback">Cả lớp đoán trước, rồi thầy/cô bấm để kiểm tra nhé!</div>
          <button class="btn-arena-next" id="btnArenaNext" style="display:none;">Câu tiếp theo ➡️</button>
        </div>
      </div>
    </div>
  </section>`);

// 3 — Trạm kỹ năng + Lab A
const kcard = (title, desc, reveal) => `
            <div class="k-card">
              <span class="k-card-title">${title}</span>
              <span class="k-card-desc">${desc}</span>
              <button class="btn-reveal">👀 Xem khối lệnh</button>
              <div class="k-reveal">${reveal}</div>
            </div>`;
slides.push(`
  <!-- Slide 3: Trạm kỹ năng cốt lõi + Phòng thí nghiệm Trọng lực -->
  <section class="slide" id="slLabA" data-index="2" aria-label="Ôn nhanh trọng lực">
    <div class="slide-main">
      <span class="slide-tag orange">🔁 Trạm kỹ năng cốt lõi</span>
      <h2>4 Điều Nhớ Về Trọng Lực 🍎</h2>
      <div class="slide-body">
        <div class="cols-60-40" style="margin-top:0;">
          <div class="knowledge-grid">${kcard('⬇️ Công thức trọng lực', 'Mỗi khung hình: giảm vy một chút, rồi dịch y theo vy — lặp trong liên tục.',
            gravity)}${kcard('↕️ Dấu của vy', 'vy dương = đi lên · vy âm = rơi xuống · giảm dần theo thời gian.',
            `<div class="k-note">vy = 12 ⬆️ đang bay lên</div><div class="k-note">vy = 0 ⏸️ dừng ở đỉnh / đứng yên</div><div class="k-note">vy = -8 ⬇️ đang rơi xuống</div>`)}${kcard('🛬 Chạm đất', 'Chạm đất thì đặt y về mặt đất và vy về 0.',
            ifc(yLess('-120'), setY('-120') + setVar('vy', '0')))}${kcard('🦘 Nhảy', 'Chỉ nhảy khi đang đứng trên đất.',
            ifc(cond(`${LT}phím ${a('cách ▾')} được bấm?${GT} và ${LT}${a('tọa độ y')} = ${a('-120')}${GT}`), setVar('vy', '12')))}
          </div>
          <div class="anim-lab" id="labA">
            <div class="anim-lab-title">🧪 Phòng thí nghiệm Trọng lực</div>
            <div class="pl-stage" id="laStage">
              <div class="pl-hud"><span>y: <span class="val" id="laY">150</span></span><span>vy: <span class="val" id="laVy">0</span></span></div>
              <div class="pl-sprite" id="laSprite">🍎</div>
              <div class="pl-ground front" id="laGround"></div>
              <div class="pl-ground-mark">Mặt đất y = -120</div>
            </div>
            <div class="anim-btns three">
              <button class="btn-anim" id="btnLaOk">✅ Đủ công thức</button>
              <button class="btn-anim danger" id="btnLaNoGround">🕳️ Quên chạm đất</button>
              <button class="btn-anim danger" id="btnLaNoSnap">🫠 Quên đặt y</button>
            </div>
            <div class="anim-feedback" id="laFeedback">Bấm thử 3 nút để so sánh: táo rơi từ <strong>y = 150</strong> xuống mặt đất!</div>
          </div>
        </div>
      </div>
    </div>
  </section>`);

// 4 — LT1 + Lab B
const lt1Script = bc(
  flag + goTo('0', '150') + setVar('vy', '0') + setVar('lực nảy', '10') +
  forever(gravity +
    ifc(yLess('-130'), setY('-130') + setVar('vy', 'lực nảy') + setVar('lực nảy', 'lực nảy * 0.8')))
);
slides.push(`
  <!-- Slide 4: LT1 — Bóng nảy tắt dần + Lab B -->
  <section class="slide" id="slLT1" data-index="3" aria-label="Luyện tập 1 Bóng nảy tắt dần">
    <div class="slide-main">
      <span class="slide-tag red">✍️ Luyện tập tại lớp · LT1</span>
      <h2><span class="th-badge">LT1</span> Bóng Nảy Tắt Dần 🏀</h2>
      <div class="slide-body">
        <div class="cols-60-40" style="margin-top:0;">
          <div class="cols" style="margin-top:0; grid-template-columns: 1.05fr 0.95fr;">
            <div>
              <p class="block-label">Kịch bản mẫu (tạo biến <code>vy</code> và <code>lực nảy</code>)</p>
              ${lt1Script}
            </div>
            <div>
              <p class="section-label" style="margin-top:0;">Checklist tự kiểm LT1</p>
              <ul class="checklist">
                <li><span class="check-icon">✓</span> Bóng rơi nhanh dần, không rơi đều</li>
                <li><span class="check-icon">✓</span> Chạm đất bật lên ngay</li>
                <li><span class="check-icon">✓</span> Mỗi lần nảy thấp hơn lần trước</li>
                <li><span class="check-icon">✓</span> Cuối cùng bóng gần như nằm yên</li>
              </ul>
              <div class="tip" style="font-size:0.8rem;">
                <span class="tip-icon">⚠️</span>
                <div>Bóng nảy mãi không thấp đi? Kiểm tra khối <code>lực nảy * 0.8</code> có nằm <strong>bên trong</strong> khối <code>nếu</code> không!</div>
              </div>
            </div>
          </div>
          <div class="anim-lab" id="labB">
            <div class="anim-lab-title">🏀 Phòng thí nghiệm Bóng nảy</div>
            <div class="pl-stage" id="lbStage">
              <div class="pl-hud"><span>vy: <span class="val" id="lbVy">0</span></span><span>lực nảy: <span class="val" id="lbPower">10</span></span></div>
              <div class="pl-sprite" id="lbSprite" style="left:0;">🏀</div>
              <div class="pl-ground" id="lbGround"></div>
              <div class="pl-ground-mark">Mặt đất y = -130</div>
            </div>
            <div class="anim-btns three">
              <button class="btn-anim" id="btnLbOk">✅ Nhân 0.8 trong nếu</button>
              <button class="btn-anim danger" id="btnLbNoDamp">♾️ Quên nhân 0.8</button>
              <button class="btn-anim danger" id="btnLbOutside">📤 Nhân 0.8 ngoài nếu</button>
            </div>
            <div class="anim-feedback" id="lbFeedback">Bấm thử 3 nút. Chấm cam là <strong>vết đường đi</strong> — nhìn đỉnh nảy cao hay thấp dần nhé!</div>
          </div>
        </div>
      </div>
    </div>
  </section>`);

// 5 — LT2 + Lab C
const lt2Obstacle = bc(
  flag + goTo('240', '-120') +
  forever(chgX('-6') + ifc(`${LT}${a('tọa độ x')} &lt; ${a('-240')}${GT}`, setX('240')))
);
const lt2Hero = bc(
  muted('trong liên tục của Nhân vật (code TH2):') +
  ifc(touching('Chướng ngại'), sayFor('Thua rồi!', '2') + stopAll)
);
slides.push(`
  <!-- Slide 5: LT2 — Nhảy qua chướng ngại + Lab C -->
  <section class="slide" id="slLT2" data-index="4" aria-label="Luyện tập 2 Nhảy qua chướng ngại vật">
    <div class="slide-main">
      <span class="slide-tag red">✍️ Luyện tập tại lớp · LT2</span>
      <h2><span class="th-badge">LT2</span> Nhảy Qua Chướng Ngại Vật 🚧</h2>
      <div class="slide-body">
        <div class="cols-60-40" style="margin-top:0;">
          <div class="cols" style="margin-top:0; grid-template-columns: 1fr 1fr;">
            <div>
              <p class="block-label">Sprite Chướng ngại</p>
              ${lt2Obstacle}
              <p class="block-label" style="margin-top:8px;">Sprite Nhân vật — thêm vào</p>
              ${lt2Hero}
            </div>
            <div>
              <p class="section-label" style="margin-top:0;">Checklist tự kiểm LT2</p>
              <ul class="checklist">
                <li><span class="check-icon">✓</span> Nhảy được qua chướng ngại</li>
                <li><span class="check-icon">✓</span> Chướng ngại chạy mãi, hết màn hình thì quay lại</li>
                <li><span class="check-icon">✓</span> Chạm vào thì báo thua và dừng game</li>
              </ul>
              <div class="tip" style="font-size:0.8rem;">
                <span class="tip-icon">🤔</span>
                <div>Khó né quá? Thử đổi số <code>-6</code> hoặc thu nhỏ chướng ngại. Vật chạy nhanh thì khó canh, vật chạy chậm thì phải ở trên không lâu hơn!</div>
              </div>
            </div>
          </div>
          <div class="anim-lab" id="labC">
            <div class="anim-lab-title">🚧 Chạy thử LT2</div>
            <div class="pl-stage" id="lcStage">
              <div class="pl-hud"><span>Đã né: <span class="val" id="lcDodged">0</span></span><span id="lcState">Chưa chạy</span></div>
              <div class="pl-bubble" id="lcBubble">Thua rồi!</div>
              <div class="pl-sprite" id="lcChar" style="left:0;">🐱</div>
              <div class="pl-obstacle" id="lcObs">🪨</div>
              <div class="pl-ground" id="lcGround"></div>
            </div>
            <div class="anim-btns two">
              <button class="btn-anim" id="btnLcStart">▶️ Bấm cờ xanh</button>
              <button class="btn-anim" id="btnLcJump">🦘 Nhảy (phím cách)</button>
              <button class="btn-anim danger" id="btnLcBug">🐞 Quên dừng lại: TẮT</button>
              <button class="btn-anim" id="btnLcReset">🔄 Làm lại</button>
            </div>
            <div class="anim-feedback" id="lcFeedback">Bấm <strong>cờ xanh</strong>, rồi bấm <strong>Nhảy</strong> đúng lúc để né hòn đá!</div>
          </div>
        </div>
      </div>
    </div>
  </section>`);

// 6 — Bác sĩ Scratch
const patientBall = bc(
  flag +
  forever(gravity +
    ifc(yLess('-130'), setVar('vy', 'lực nảy')) +
    setVar('lực nảy', 'lực nảy * 0.8'))
);
const patientHero = bc(
  flag +
  forever(
    ifc(cond(`phím ${a('cách ▾')} được bấm?`), setVar('vy', '12')) +
    ifc(touching('Chướng ngại'), sayFor('Thua rồi!', '2')))
);
const clinic = (badge, symptom, cure) => `
            <div class="clinic-card">
              <span class="clinic-badge sick">${badge}</span>
              <span class="clinic-symptom">${symptom}</span>
              <button class="btn-cure">💊 Xem phương thuốc</button>
              <div class="clinic-cure">${cure}</div>
            </div>`;
slides.push(`
  <!-- Slide 6: Bác sĩ Scratch -->
  <section class="slide" data-index="5" aria-label="Bác sĩ Scratch sửa lỗi">
    <div class="slide-main">
      <span class="slide-tag red">🩺 Bác sĩ Scratch sửa lỗi</span>
      <h2>Phòng Khám Trọng Lực: Chữa Bệnh Cho Bóng &amp; Nhân Vật! 🚑</h2>
      <div class="slide-body">
        <div class="cols-40-60" style="margin-top:0;">
          <div>
            <p class="block-label">🤒 Bệnh nhân 1 — "Quả bóng ốm"</p>
            ${patientBall}
            <p class="block-label" style="margin-top:8px;">🤒 Bệnh nhân 2 — "Nhân vật ốm"</p>
            ${patientHero}
            <p style="margin-top:6px; font-size:0.84rem; font-weight:800; color:#9f1239;">👉 Cả lớp tìm xem có mấy bệnh?</p>
          </div>
          <div class="clinic-grid">${clinic('Bệnh 1: Lún đất 🫠', 'Khi bóng gần nằm yên thì cứ chìm dần xuống mép dưới Sân khấu.',
            'Thêm <code>đặt y thành (-130)</code> ngay trong <code>nếu</code>, trước <code>đặt vy thành (lực nảy)</code> — đưa bóng về đúng mặt đất.')}${clinic('Bệnh 2: Nảy xong là xẹp 🫧', 'Bóng chỉ nảy xíu ở lần đầu rồi nằm yên.',
            'Kéo <code>đặt lực nảy thành (lực nảy * 0.8)</code> vào <strong>bên trong</strong> <code>nếu</code>. Đặt ngoài thì bị nhân 0.8 mỗi khung hình, lực nảy tụt về gần 0 trước khi bóng kịp chạm đất.')}${clinic('Bệnh 3: Bay lên trời 🚀', 'Giữ phím cách là nhân vật bay mãi, không rơi xuống.',
            'Ghép thêm <code>và &lt;tọa độ y = -120&gt;</code> vào điều kiện nhảy. Không có khóa này, <code>đặt vy thành (12)</code> chạy lại ở mọi khung hình khi còn giữ phím.')}${clinic('Bệnh 4: Thua mà không dừng 🏃', 'Nhân vật nói "Thua rồi!" nhưng chướng ngại vẫn chạy, game không dừng.',
            'Thêm <code>dừng lại [tất cả]</code> ngay dưới <code>nói</code>, bên trong <code>nếu &lt;đang chạm [Chướng ngại]?&gt; thì</code>.')}
          </div>
        </div>
      </div>
    </div>
  </section>`);

// 7 — Giới thiệu mức
slides.push(`
  <!-- Slide 7: Giới thiệu bài mở rộng -->
  <section class="slide" data-index="6" aria-label="Giới thiệu bài mở rộng">
    <div class="slide-main">
      <span class="slide-tag green">🎯 Thử thách phân tầng (10 phút giới thiệu)</span>
      <h2>Chọn Mức Thử Thách Của Em! 🚀</h2>
      <div class="slide-body">
        <div class="tip" style="margin-top:0; margin-bottom:10px;">
          <span class="tip-icon">📌</span>
          <div>Em chọn <strong>1 mức</strong> A, B hoặc C, rồi chọn <strong>1 trong 2 bài</strong> của mức đó. Làm hết checklist rồi mới đổi bài nhé!</div>
        </div>
        <div class="cols-3">
          <div class="card green">
            <span class="level-badge level-a">🅰️ Mức A — Cơ bản</span>
            <h3>🎾 Luyện công thức trọng lực</h3>
            <p class="desc">Em luyện <strong>rơi</strong> và <strong>nảy</strong> đúng công thức, thêm âm thanh hoặc vỗ cánh.</p>
            <p class="desc" style="margin-top:6px;"><strong>A1:</strong> Trái banh tennis nảy sân<br><strong>A2:</strong> Chim nhỏ vỗ cánh bay</p>
          </div>
          <div class="card blue">
            <span class="level-badge level-b">🅱️ Mức B — Trung bình</span>
            <h3>🏃 Trọng lực + chướng ngại + điểm</h3>
            <p class="desc">Em kết hợp <strong>vy</strong> với chướng ngại vật và <strong>biến điểm</strong>.</p>
            <p class="desc" style="margin-top:6px;"><strong>B1:</strong> Nhảy vượt chướng ngại có điểm<br><strong>B2:</strong> Bậc thang lên núi</p>
          </div>
          <div class="card purple">
            <span class="level-badge level-c">🅲 Mức C — Thử thách</span>
            <h3>❤️ Game nhảy nhiều mạng, khó dần</h3>
            <p class="desc">Em làm game nhảy có <strong>nhiều mạng</strong> hoặc <strong>độ khó tăng dần</strong>.</p>
            <p class="desc" style="margin-top:6px;"><strong>C1:</strong> Game nhảy 3 mạng<br><strong>C2:</strong> Leo tháp không giới hạn</p>
          </div>
        </div>
        <div class="highlight-box purple" style="margin-top:12px; font-size:0.88rem;">
          👀 <strong>Thầy/cô demo trước:</strong> Bài <strong>B1</strong> trên máy chiếu — chỉ rõ cách kết hợp <code>vy</code> với biến <code>điểm</code>: mỗi lần chướng ngại quay lại bên phải nghĩa là em đã né qua!
        </div>
      </div>
    </div>
  </section>`);

// 8 — Mức A
slides.push(`
  <!-- Slide 8: Mức A -->
  <section class="slide" data-index="7" aria-label="Bài mở rộng Mức A">
    <div class="slide-main">
      <span class="slide-tag green">Bài mở rộng · Mức A (Cơ bản)</span>
      <h2>Mức A: Trái Banh &amp; Chú Chim Nhỏ 🎾🐦</h2>
      <div class="slide-body">
        <div class="cols" style="margin-top:0;">
          <div class="ex-card a">
            <span class="level-badge level-a">A1</span>
            <h3>Trái banh tennis nảy sân 🎾</h3>
            <p class="ex-req">🎯 <strong>Yêu cầu:</strong> Biến <code>vy</code>; chạm sân thì nảy lên <strong>kèm âm thanh</strong>; không rơi xuyên sân.</p>
            ${bc(flag + goTo('0', '150') + setVar('vy', '0') +
              forever(gravity + ifc(yLess('-130'), setY('-130') + setVar('vy', '10') + blk('sound', `bắt đầu âm thanh ${a('Pop ▾')}`))))}
            <p class="ex-check">✅ Rơi nhanh dần · Nảy đúng lúc chạm sân · Có âm thanh · Đã lưu</p>
            <div class="ex-try">✨ <strong>Thử thêm:</strong> Nhấn mũi tên trái/phải để đẩy banh qua lại — thêm <code>thay đổi x</code> ngay trong cùng khối <code>liên tục</code>.</div>
          </div>
          <div class="ex-card a">
            <span class="level-badge level-a">A2</span>
            <h3>Chim nhỏ vỗ cánh bay 🐦</h3>
            <p class="ex-req">🎯 <strong>Yêu cầu:</strong> Phím cách làm <code>vy</code> tăng (vỗ cánh); trọng lực kéo xuống liên tục; đổi trang phục khi vỗ.</p>
            ${bc(flag + forever(chgVar('vy', '-0.5') + chgY('vy') +
              ifc(`${LT}${a('tọa độ y')} &gt; ${a('150')}${GT}`, setY('150') + setVar('vy', '0')))) }
            ${bc(blk('event', `khi nhấn phím ${a('cách ▾')}`) + chgVar('vy', '6') +
              blk('looks', `chuyển sang trang phục ${a('cánh xòe ▾')}`) + wait('0.2') +
              blk('looks', `chuyển sang trang phục ${a('cánh gập ▾')}`))}
            <p class="ex-check">✅ Rơi dần khi không bấm · Bấm là bay lên · Không bay ra khỏi màn hình</p>
            <div class="ex-try">✨ <strong>Thử thêm:</strong> Làm ống trụ chạy từ phải sang trái như Flappy Bird, có biến <code>điểm</code> tăng khi bay qua một cặp ống.</div>
          </div>
        </div>
      </div>
    </div>
  </section>`);

// 9 — Mức B
slides.push(`
  <!-- Slide 9: Mức B -->
  <section class="slide" data-index="8" aria-label="Bài mở rộng Mức B">
    <div class="slide-main">
      <span class="slide-tag">Bài mở rộng · Mức B (Trung bình)</span>
      <h2>Mức B: Vượt Chướng Ngại &amp; Leo Núi 🏃🏔️</h2>
      <div class="slide-body">
        <div class="cols" style="margin-top:0;">
          <div class="ex-card b">
            <span class="level-badge level-b">B1</span>
            <h3>Nhảy vượt chướng ngại có điểm 🏃‍♂️</h3>
            <p class="ex-req">🎯 <strong>Yêu cầu:</strong> Biến <code>vy</code> và <code>điểm</code>; chướng ngại chạy liên tục; né được thì điểm tăng; chạm vào thì dừng game.</p>
            <p class="block-label">Sprite Chướng ngại</p>
            ${bc(flag + setVar('điểm', '0') + goTo('240', '-120') +
              forever(chgX('-6') + ifc(`${LT}${a('tọa độ x')} &lt; ${a('-240')}${GT}`, setX('240') + chgVar('điểm', '1'))))}
            <p class="block-label">Sprite Nhân vật — thêm vào</p>
            ${bc(ifc(touching('Chướng ngại'), sayFor('(kết hợp [Thua! Điểm: ] (điểm))', '2') + stopAll))}
            <div class="ex-try">✨ <strong>Thử thêm:</strong> Cho chướng ngại <strong>tăng tốc dần</strong> theo điểm (<code>thay đổi tốc độ một lượng 0.2</code> mỗi lần né).</div>
          </div>
          <div class="ex-card b">
            <span class="level-badge level-b">B2</span>
            <h3>Bậc thang lên núi 🏔️</h3>
            <p class="ex-req">🎯 <strong>Yêu cầu:</strong> Biến <code>vy</code>, <code>độ cao</code>, <code>độ cao cao nhất</code>; chỉ tăng <code>độ cao</code> khi lên cao hơn kỷ lục; không rơi xuyên đất.</p>
            ${bc(flag + setVar('độ cao', '0') + setVar('độ cao cao nhất', '-120') +
              forever(muted('… công thức trọng lực &amp; nhảy như TH2 …') +
                ifc(`${LT}${a('tọa độ y')} &gt; ${a('độ cao cao nhất')}${GT}`,
                  setVar('độ cao cao nhất', 'tọa độ y') + chgVar('độ cao', '1'))))}
            <p class="ex-check">✅ Nhảy nhiều lần liên tiếp · Nhảy lại cùng độ cao cũ thì không tính điểm · Hiện <code>độ cao</code> trên Sân khấu</p>
            <div class="ex-try">✨ <strong>Thử thêm:</strong> <code>nếu &lt;độ cao &gt; 9&gt; thì nói [Chinh phục đỉnh núi!]</code> kèm hiệu ứng ăn mừng.</div>
          </div>
        </div>
      </div>
    </div>
  </section>`);

// 10 — Mức C
slides.push(`
  <!-- Slide 10: Mức C -->
  <section class="slide" data-index="9" aria-label="Bài mở rộng Mức C">
    <div class="slide-main">
      <span class="slide-tag purple">Bài mở rộng · Mức C (Thử thách)</span>
      <h2>Mức C: Game Nhảy Hoàn Chỉnh ❤️🗼</h2>
      <div class="slide-body">
        <div class="cols" style="margin-top:0;">
          <div class="ex-card c">
            <span class="level-badge level-c">C1</span>
            <h3>Game nhảy 3 mạng ❤️❤️❤️</h3>
            <p class="ex-req">🎯 <strong>Yêu cầu:</strong> Biến <code>mạng</code> (= 3 lúc đầu), <code>điểm</code>, <code>bất tử</code>. Chạm là mất 1 mạng + bất tử 1 giây; hết mạng mới thua.</p>
            ${bc(
              ifc(cond(touching('Chướng ngại'), ' và ', `${LT}${a('bất tử')} = ${a('0')}${GT}`),
                chgVar('mạng', '-1') + setVar('bất tử', '1') + blk('event', `phát ${a('HồiSinh ▾')}`)) +
              ifc(`${LT}${a('mạng')} &lt; ${a('1')}${GT}`, sayFor('Hết mạng!', '2') + stopAll))}
            ${bc(blk('event', `khi nhận ${a('HồiSinh ▾')}`) + wait('1') + setVar('bất tử', '0'))}
            <p class="ex-check">✅ Mất đúng 1 mạng mỗi lần chạm · Có 1 giây bất tử · Hết mạng thì dừng</p>
            <div class="ex-try">✨ <strong>Thử thêm:</strong> Cho nhân vật <strong>nhấp nháy</strong> lúc bất tử (<code>thay đổi hiệu ứng màu</code> xen <code>xóa mọi hiệu ứng đồ họa</code>).</div>
          </div>
          <div class="ex-card c">
            <span class="level-badge level-c">C2</span>
            <h3>Leo tháp không giới hạn 🗼</h3>
            <p class="ex-req">🎯 <strong>Yêu cầu:</strong> <code>vy</code> và <code>độ cao</code>; ít nhất <strong>3 bệ</strong>; nhảy lại chỉ khi chạm bệ; rơi xuống đáy thì thua.</p>
            <div class="scene-strip">
              <div class="scene-pill"><b>🧱</b>Bệ 1<br>thấp</div>
              <div class="scene-pill"><b>🧱</b>Bệ 2<br>giữa</div>
              <div class="scene-pill"><b>🧱</b>Bệ 3<br>cao</div>
              <div class="scene-pill"><b>💀</b>Rơi<br>y &lt; -170</div>
            </div>
            ${bc(
              ifc(cond(`${LT}phím ${a('cách ▾')} được bấm?${GT}`, ' và ', touching('Bệ')), setVar('vy', '12')) +
              ifc(yLess('-170'), sayFor('(kết hợp [Rơi rồi! Độ cao: ] (độ cao))', '2') + stopAll))}
            <p class="ex-check">✅ Nhảy bệ này sang bệ khác · Có ≥ 3 bệ · Rơi đáy thì thua · Hiện độ cao</p>
            <div class="ex-try">✨ <strong>Thử thêm:</strong> Làm các bệ <strong>trôi qua lại</strong>; hoặc cuộn màn hình: nhân vật lên quá nửa thì <code>thay đổi y -2</code> cho <strong>cả nhân vật và mọi bệ</strong>.</div>
          </div>
        </div>
      </div>
    </div>
  </section>`);

// 11 — Quiz
slides.push(`
  <!-- Slide 11: Đấu trường Quiz -->
  <section class="slide" data-index="10" aria-label="Đấu trường Quiz">
    <div class="slide-main">
      <span class="slide-tag purple">🏆 Đấu trường Quiz (5 phút củng cố)</span>
      <h2>Thử Tài Kỹ Sư Trọng Lực! 🧠</h2>
      <div class="slide-body">
        <div class="quiz-arena">
          <div class="quiz-header">
            <span id="quizProgressText">Câu hỏi 1 / 5</span>
            <span id="quizScoreText" style="color:var(--scratch-orange); font-weight:900;">⭐ Điểm: 0</span>
          </div>
          <div class="quiz-question-box" id="quizQuestion">1. Đang tải câu hỏi...</div>
          <div class="quiz-options" id="quizOptions"></div>
          <div class="quiz-explain" id="quizExplain"></div>
          <div class="quiz-nav-row">
            <button class="btn-quiz-next" id="btnQuizNext">Câu tiếp theo ➡️</button>
          </div>
        </div>
      </div>
    </div>
  </section>`);

// 12 — Rà soát
slides.push(`
  <!-- Slide 12: Rà soát & lưu bài -->
  <section class="slide" data-index="11" aria-label="Rà soát và lưu bài">
    <div class="slide-main">
      <span class="slide-tag yellow">📋 Rà soát &amp; lưu bài</span>
      <h2>Kiểm Tra Lần Cuối Rồi Lưu Dự Án! 💾</h2>
      <div class="slide-body">
        <p class="section-label" style="margin-top:0;">Bấm vào từng mục để tick khi em đã làm xong:</p>
        <ul class="checklist interactive" id="finalChecklist">
          <li><span class="check-icon">✓</span><span>1. Biến <code>vy</code> hiện trên Sân khấu; bóng / nhân vật rơi <strong>nhanh dần</strong>.</span></li>
          <li><span class="check-icon">✓</span><span>2. Chạm đất thì <code>đặt y thành</code> mặt đất <strong>và</strong> <code>đặt vy</code> (về 0 hoặc lực nảy).</span></li>
          <li><span class="check-icon">✓</span><span>3. LT1: mỗi lần nảy thấp hơn; khối <code>lực nảy * 0.8</code> nằm <strong>trong</strong> <code>nếu</code>.</span></li>
          <li><span class="check-icon">✓</span><span>4. LT2: chỉ nhảy khi đứng trên đất; chạm chướng ngại thì báo thua và dừng game.</span></li>
          <li><span class="check-icon">✓</span><span>5. Bài mở rộng em chọn (A / B / C) đã đạt đủ checklist.</span></li>
          <li><span class="check-icon">✓</span><span>6. Đã lưu <code>LT1-bong-nay-giam-dan</code>, <code>LT2-nhay-vuot-chuong-ngai</code> và bài mở rộng.</span></li>
        </ul>
        <div class="check-progress"><div class="check-progress-fill" id="checkFill"></div></div>
        <div class="check-status" id="checkStatus">0 / 6 mục hoàn thành</div>
      </div>
    </div>
  </section>`);

// 13 — Showcase & Tổng kết
slides.push(`
  <!-- Slide 13: Showcase & Tổng kết -->
  <section class="slide" data-index="12" aria-label="Showcase và Tổng kết">
    <div class="slide-main">
      <span class="slide-tag yellow">🖼️ Showcase &amp; Tổng kết (15 phút)</span>
      <h2>Triển Lãm Game Nhảy Của Lớp Mình! 🎪</h2>
      <div class="slide-body">
        <div class="cols-60-40" style="margin-top:0;">
          <div>
            <p class="section-label" style="margin-top:0;">🚶 Cách đi triển lãm</p>
            <div class="card" style="display:flex; flex-direction:column; gap:7px;">
              <div style="display:flex; align-items:center; font-size:0.86rem; font-weight:700; color:#334155;"><span class="step-pill">1</span> Để project đang chạy sẵn trên máy của em.</div>
              <div style="display:flex; align-items:center; font-size:0.86rem; font-weight:700; color:#334155;"><span class="step-pill">2</span> Đi xem 3–4 project của các bạn gần nhất, chú ý bài mức C xem nhân vật nhảy mượt đến đâu.</div>
              <div style="display:flex; align-items:center; font-size:0.86rem; font-weight:700; color:#334155;"><span class="step-pill">3</span> Khen bạn 1 điều em thích nhất!</div>
            </div>
            <p class="section-label">🏅 Bình chọn danh hiệu (bấm để trao)</p>
            <div class="award-grid">
              <button class="award"><span class="award-emoji">🎾</span><span class="award-name">Vua nảy bóng</span><span class="award-desc">Bóng nảy đẹp nhất</span></button>
              <button class="award"><span class="award-emoji">🏃</span><span class="award-name">Chiến thần né</span><span class="award-desc">Vượt chướng ngại mượt nhất</span></button>
              <button class="award"><span class="award-emoji">🏔️</span><span class="award-name">Nhà leo núi</span><span class="award-desc">Leo cao nhất, nhảy chuẩn nhất</span></button>
            </div>
          </div>
          <div>
            <div class="highlight-box green" style="margin-top:0; font-size:0.88rem;">
              ✅ <strong>Hôm nay em đã:</strong><br>
              • Luyện công thức trọng lực <code>vy</code><br>
              • Làm bóng nảy tắt dần, nhảy né chướng ngại<br>
              • Kết hợp với điểm số &amp; mạng để làm game hoàn chỉnh hơn
            </div>
            <div class="card purple" style="margin-top:10px;">
              <h3>🔮 Bật mí Buổi 37:</h3>
              <p class="desc"><strong>Platformer</strong> — nhân vật chạy nhảy trên <strong>nhiều bệ đá</strong>, và em tự thiết kế cả một <strong>màn chơi</strong>! 🏃🧱</p>
            </div>
            <p style="margin-top:10px; font-size:0.95rem; color:#16a34a; font-weight:900; text-align:center;">💾 Nhớ lưu dự án trước khi ra về!</p>
          </div>
        </div>
      </div>
    </div>
  </section>`);

// 14 — Ghi chú GV
slides.push(`
  <!-- Slide 14: Ghi chú cho giáo viên -->
  <section class="slide" data-index="13" aria-label="Ghi chú giáo viên">
    <div class="slide-main">
      <span class="slide-tag red">👩‍🏫 Dành cho Giáo viên</span>
      <h2>Chiến Lược Sư Phạm &amp; Quản Trị Lớp Buổi 36 🍎</h2>
      <div class="slide-body">
        <div class="cols" style="margin-top:0;">
          <div class="card">
            <h3>⚡ Phân hóa theo nhịp độ</h3>
            <ul style="font-size:0.82rem; line-height:1.5; margin-top:4px;">
              <li><strong>Học sinh chậm:</strong> Chắc chắn LT1, làm LT2 phần nhảy trước; chọn Mức A (A1 trước, bỏ qua âm thanh nếu chưa kịp).</li>
              <li><strong>Học sinh vừa:</strong> Xong LT1, LT2, chọn Mức B; cho đổi máy 2 phút để kiểm checklist chéo.</li>
              <li><strong>Học sinh nhanh:</strong> Mức C; thử "Thử thêm" (nhấp nháy bất tử, bệ trôi, cuộn màn hình).</li>
            </ul>
          </div>
          <div class="card green">
            <h3>🩺 Lỗi thường gặp</h3>
            <ul style="font-size:0.82rem; line-height:1.5; margin-top:4px;">
              <li>Thiếu <code>đặt y thành</code> khi chạm đất → nhân vật <strong>lún dần</strong> xuống mép dưới Sân khấu (không phải rung giật).</li>
              <li>Khối <code>lực nảy * 0.8</code> đặt <strong>ngoài</strong> <code>nếu</code> → lực nảy tụt gần 0 ngay từ lần rơi đầu.</li>
              <li>Quên <code>và &lt;tọa độ y = -120&gt;</code> → giữ phím cách là bay mãi.</li>
              <li>Đặt <code>đợi 1 giây</code> trong vòng lặp chính (bài C1) → trọng lực đứng hình 1 giây; hãy dùng script riêng <code>khi nhận</code>.</li>
            </ul>
          </div>
        </div>
        <div class="cols" style="margin-top:8px;">
          <div class="card orange">
            <h3>🔇 Quản lý âm thanh lớp học</h3>
            <p class="desc">Bài A1 có <code>bắt đầu âm thanh</code> — nhắc học sinh vặn nhỏ loa hoặc đeo tai nghe. Phòng thí nghiệm &amp; minigame trên slide đều <strong>không phát âm thanh</strong>; chỉ bật loa khi demo hoặc Showcase.</p>
          </div>
          <div class="card purple">
            <h3>⏱️ Phân bổ thời gian (90 phút)</h3>
            <p class="desc" style="color:#4c1d95;">
              • 0–10p: Khởi động Đúng/Sai (Slide 2)<br>
              • 10–15p: Ôn nhanh + Lab trọng lực (Slide 3)<br>
              • 15–35p: LT1, LT2 + Bác sĩ Scratch (Slide 4–6)<br>
              • 35–45p: Giới thiệu mức A/B/C (Slide 7)<br>
              • 45–75p: Làm bài mở rộng (Slide 8–10)<br>
              • 75–80p: Quiz (Slide 11) · 80–85p: Rà soát &amp; lưu (Slide 12)<br>
              • 85–90p: Showcase &amp; Tổng kết (Slide 13)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>`);

export const body = slides.join('\n');
export const TOTAL = slides.length;

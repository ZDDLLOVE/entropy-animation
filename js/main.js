const canvas = document.getElementById('scene');
const ctx = canvas.getContext('2d');

const subtitleManager = new SubtitleManager();
const particleSystem = new ParticleSystem(40, canvas.width, canvas.height);
const sceneManager = new SceneManager();

const state = {
  time: 0,
  isPlaying: true,
  lastTs: 0
};

const slider = document.getElementById('timeline-slider');
const timeDisplay = document.getElementById('time-display');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

function updateTimeDisplay() {
  timeDisplay.textContent = `${state.time.toFixed(1)}s / ${SCENE_CONFIG.duration}s`;
  slider.value = state.time.toFixed(1);
}

function renderBackground(t) {
  const gradient = ctx.createRadialGradient(
    canvas.width / 2,
    canvas.height / 2,
    50,
    canvas.width / 2,
    canvas.height / 2,
    canvas.width * 0.7
  );

  gradient.addColorStop(0, '#1A1613');
  gradient.addColorStop(0.4, '#12100F');
  gradient.addColorStop(1, '#090806');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  for (let i = 0; i < 5; i++) {
    const radius = 160 + i * 120 + Math.sin(t * 0.7 + i) * 18;
    ctx.beginPath();
    ctx.strokeStyle = `rgba(255, 245, 230, ${0.04 + i * 0.02})`;
    ctx.lineWidth = 1.2;
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}

function renderFrame(time) {
  renderBackground(time);
  particleSystem.update(time);
  particleSystem.draw(ctx);

  const scene = sceneManager.getActiveScene(time);
  if (scene && scene.render) {
    scene.render(ctx, time, time - scene.start);
  }

  subtitleManager.update(time);
}

function tick(ts) {
  if (state.isPlaying) {
    const dt = (ts - state.lastTs) / 1000;
    state.time += dt;
    if (state.time > SCENE_CONFIG.duration) {
      state.time = SCENE_CONFIG.duration;
      state.isPlaying = false;
    }
  }

  state.lastTs = ts;
  updateTimeDisplay();
  renderFrame(state.time);
  requestAnimationFrame(tick);
}

slider.addEventListener('input', (e) => {
  state.time = Number(e.target.value);
  updateTimeDisplay();
  renderFrame(state.time);
});

playBtn.addEventListener('click', () => {
  state.isPlaying = true;
});

pauseBtn.addEventListener('click', () => {
  state.isPlaying = false;
});

resetBtn.addEventListener('click', () => {
  state.time = 0;
  state.isPlaying = false;
  updateTimeDisplay();
  renderFrame(state.time);
});

state.lastTs = performance.now();
requestAnimationFrame(tick);

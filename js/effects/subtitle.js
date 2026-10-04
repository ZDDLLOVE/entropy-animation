class SubtitleManager {
  constructor() {
    this.container = document.getElementById('subtitle-container');
    this.element = null;
    this.currentText = '';
  }

  getActiveSubtitle(time) {
    for (let i = 0; i < SCENE_CONFIG.subtitles.length; i++) {
      const sub = SCENE_CONFIG.subtitles[i];
      if (time >= sub.start && time <= sub.end + 0.8) {
        return sub;
      }
    }
    return null;
  }

  update(time) {
    const active = this.getActiveSubtitle(time);
    if (!active) {
      if (this.element) {
        this.element.style.opacity = '0';
      }
      return;
    }

    if (!this.element) {
      this.element = document.createElement('div');
      this.element.className = 'subtitle';
      this.container.appendChild(this.element);
    }

    const fadeIn = 0.6;
    const fadeOut = 0.6;
    const start = active.start;
    const end = active.end;

    let opacity = 1;
    if (time < start + fadeIn) {
      opacity = (time - start) / fadeIn;
    } else if (time > end) {
      opacity = Math.max(0, (end + fadeOut - time) / fadeOut);
    }

    const html = active.text.replace(/(\d{4})/g, '<span class="year">$1</span>');
    if (this.currentText !== active.text) {
      this.element.innerHTML = html;
      this.currentText = active.text;
    }

    this.element.style.opacity = String(clamp(opacity, 0, 1));
  }
}

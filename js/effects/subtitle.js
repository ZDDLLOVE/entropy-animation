class SubtitleManager {
  constructor() {
    this.container = document.getElementById('subtitle-container');
    this.element = null;
  }

  update(time) {
    const active = this.getActiveSubtitle(time);
    if (!active) {
      if (this.element) {
        this.element.classList.remove('active');
      }
      return;
    }

    if (!this.element) {
      this.element = document.createElement('div');
      this.element.className = 'subtitle';
      this.container.appendChild(this.element);
    }

    const html = active.text.replace(/(\d{4})/g, '<span class="year">$1</span>');
    this.element.innerHTML = html;
    this.element.classList.add('active');
  }

  getActiveSubtitle(time) {
    for (let i = 0; i < SCENE_CONFIG.subtitles.length; i++) {
      const sub = SCENE_CONFIG.subtitles[i];
      if (time >= sub.start && time <= sub.end + 0.6) {
        return sub;
      }
    }
    return null;
  }
}

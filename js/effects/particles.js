class ParticleSystem {
  constructor(count = 40, width = 1920, height = 1080) {
    this.count = count;
    this.width = width;
    this.height = height;
    this.particles = [];

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2.3 + 0.8,
        alpha: Math.random() * 0.5 + 0.2,
        drift: Math.random() * 0.6 + 0.2,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.3 + 0.08
      });
    }
  }

  update(time) {
    for (const p of this.particles) {
      p.phase += 0.004 + p.speed * 0.04;
      p.x += Math.sin(p.phase * 1.5) * 0.12 + p.drift * 0.05;
      p.y += Math.cos(p.phase) * 0.13 + p.drift * 0.04;

      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;
      if (p.y < -10) p.y = this.height + 10;
      if (p.y > this.height + 10) p.y = -10;
    }
  }

  draw(ctx) {
    for (const p of this.particles) {
      const flicker = 0.35 + Math.sin(p.phase * 3.0) * 0.25;
      const alpha = clamp(p.alpha * flicker, 0.08, 0.9);

      ctx.beginPath();
      ctx.fillStyle = `rgba(247, 240, 228, ${alpha})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function drawKelvinScene(ctx, time, localT) {
  const cx = ctx.canvas.width / 2;
  const cy = ctx.canvas.height / 2;

  ctx.save();
  ctx.translate(cx, cy);

  for (let i = 0; i < 7; i++) {
    const radius = 55 + i * 42 + Math.sin(time * 1.2 + i) * 5;
    ctx.beginPath();
    ctx.strokeStyle = `rgba(255, 218, 170, ${0.18 - i * 0.02})`;
    ctx.lineWidth = 1.4;
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.fillStyle = 'rgba(255, 220, 160, 0.12)';
  ctx.beginPath();
  ctx.arc(0, 0, 120, 0, Math.PI * 2);
  ctx.fill();

  for (let i = 0; i < 24; i++) {
    const angle = (i / 24) * Math.PI * 2 + time * 0.2;
    const x = Math.cos(angle) * (160 + (i % 3) * 38);
    const y = Math.sin(angle) * (160 + (i % 3) * 38);
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 240, 220, ${0.15 + (i % 4) * 0.1})`;
    ctx.arc(x, y, 2.5, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

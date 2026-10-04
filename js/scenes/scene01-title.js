function drawTitleScene(ctx, time, localT) {
  const cx = ctx.canvas.width / 2;
  const cy = ctx.canvas.height / 2;
  const progress = clamp(localT / 2.5, 0, 1);

  ctx.save();
  ctx.translate(cx, cy);
  for (let i = 0; i < 60; i++) {
    const angle = (i / 60) * Math.PI * 2;
    const len = 180 + 220 * easeInOutQuad(progress);
    const start = 30;
    const end = start + len;

    ctx.beginPath();
    ctx.strokeStyle = `rgba(255, 248, 238, ${0.08 + (i % 5) * 0.02})`;
    ctx.lineWidth = 1.1;
    ctx.moveTo(Math.cos(angle) * start, Math.sin(angle) * start);
    ctx.lineTo(Math.cos(angle) * end, Math.sin(angle) * end);
    ctx.stroke();
  }
  ctx.restore();

  ctx.save();
  for (let i = 0; i < 4; i++) {
    const radius = 120 + i * 90 + Math.sin(time * 0.8 + i) * 8;
    ctx.beginPath();
    ctx.strokeStyle = `rgba(255, 245, 220, ${0.04 + i * 0.03})`;
    ctx.lineWidth = 1.4;
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}

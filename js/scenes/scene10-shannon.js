function drawShannonScene(ctx, time, localT) {
  const cx = ctx.canvas.width / 2;
  const cy = ctx.canvas.height / 2;

  ctx.save();
  ctx.translate(cx - 300, cy + 120);

  ctx.strokeStyle = 'rgba(255,245,230,0.7)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i < 120; i++) {
    const x = i * 5.5;
    const y = Math.sin(i * 0.32 + time * 0.8) * 36 + Math.sin(i * 0.17 + time * 1.3) * 18;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 100);
  ctx.lineTo(620, 100);
  ctx.strokeStyle = 'rgba(255,255,255,0.12)';
  ctx.stroke();

  ctx.restore();
}

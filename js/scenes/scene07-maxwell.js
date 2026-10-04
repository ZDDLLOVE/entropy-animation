function drawMaxwellScene(ctx, time, localT) {
  const cx = ctx.canvas.width / 2;
  const cy = ctx.canvas.height / 2;

  ctx.save();
  ctx.translate(cx, cy);

  ctx.strokeStyle = 'rgba(255,245,230,0.7)';
  ctx.lineWidth = 2.2;
  ctx.fillStyle = 'rgba(255,255,255,0.02)';
  ctx.fillRect(-240, -120, 180, 180);
  ctx.strokeRect(-240, -120, 180, 180);
  ctx.fillRect(60, -120, 180, 180);
  ctx.strokeRect(60, -120, 180, 180);

  ctx.beginPath();
  ctx.moveTo(-150, 0);
  ctx.lineTo(0, 0);
  ctx.lineTo(0, -30);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 30);
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = 'rgba(255, 220, 160, 0.8)';
  ctx.arc(-150, 0, 12, 0, Math.PI * 2);
  ctx.fill();

  for (let i = 0; i < 28; i++) {
    const x = -200 + (i % 7) * 30 + Math.sin(time * 1.8 + i) * 6;
    const y = -90 + Math.floor(i / 7) * 32 + Math.cos(time * 1.7 + i) * 8;
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 248, 232, ${0.18 + (i % 3) * 0.14})`;
    ctx.arc(x, y, 4 + (i % 2), 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.strokeStyle = 'rgba(255,255,255,0.12)';
  ctx.beginPath();
  ctx.moveTo(-400, 180);
  ctx.lineTo(400, 180);
  ctx.stroke();

  ctx.restore();
}

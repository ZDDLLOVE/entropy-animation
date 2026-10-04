function drawLandauerScene(ctx, time, localT) {
  const cx = ctx.canvas.width / 2;
  const cy = ctx.canvas.height / 2;

  ctx.save();
  ctx.translate(cx, cy);

  for (let i = 0; i < 10; i++) {
    const x = -240 + i * 55;
    ctx.strokeStyle = 'rgba(255,245,230,0.75)';
    ctx.lineWidth = 2.2;
    ctx.strokeRect(x, -54, 42, 42);
    ctx.fillStyle = 'rgba(255, 245, 230, 0.06)';
    ctx.fillRect(x, -54, 42, 42);
  }

  for (let i = 0; i < 26; i++) {
    const x = -220 + (i % 5) * 55 + Math.sin(time * 1.6 + i) * 8;
    const y = -44 + Math.floor(i / 5) * 18 + Math.cos(time * 1.5 + i) * 5;
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 230, 175, ${0.4 + (i % 2) * 0.2})`;
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.strokeStyle = 'rgba(255, 190, 110, 0.9)';
  ctx.beginPath();
  ctx.moveTo(-140, 0);
  ctx.lineTo(150, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(120, -18);
  ctx.lineTo(180, 0);
  ctx.lineTo(120, 18);
  ctx.fillStyle = 'rgba(255, 190, 110, 0.9)';
  ctx.fill();

  for (let i = 0; i < 16; i++) {
    const angle = (i / 16) * Math.PI * 2 + time;
    const x = Math.cos(angle) * (190 + i * 1.2);
    const y = Math.sin(angle) * (100 + i * 0.7);
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 168, 98, ${0.18 + i * 0.02})`;
    ctx.arc(x, y, 2.8, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

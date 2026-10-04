function drawHawkingScene(ctx, time, localT) {
  const cx = ctx.canvas.width / 2;
  const cy = ctx.canvas.height / 2;

  ctx.save();
  ctx.translate(cx, cy);

  ctx.fillStyle = 'rgba(16, 16, 18, 0.9)';
  ctx.beginPath();
  ctx.arc(0, 0, 150, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = 'rgba(255, 240, 200, 0.7)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(0, 0, 168, 0, Math.PI * 2);
  ctx.stroke();

  for (let i = 0; i < 18; i++) {
    const angle = (i / 18) * Math.PI * 2 + time * 0.5;
    const x = Math.cos(angle) * (230 + (i % 3) * 18);
    const y = Math.sin(angle) * (230 + (i % 3) * 18);
    ctx.beginPath();
    ctx.strokeStyle = `rgba(255, 230, 180, ${0.15 + i * 0.02})`;
    ctx.moveTo(x, y);
    ctx.lineTo(x * 1.08, y * 1.08);
    ctx.stroke();
  }

  for (let i = 0; i < 26; i++) {
    const angle = (i / 26) * Math.PI * 2 + time * 0.7;
    const x = Math.cos(angle) * (240 + 10 * Math.sin(time + i));
    const y = Math.sin(angle) * (240 + 10 * Math.cos(time + i));
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 240, 220, 0.48)';
    ctx.arc(x, y, 2.2, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

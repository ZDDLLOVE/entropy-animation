function drawSchrodingerScene(ctx, time, localT) {
  const cx = ctx.canvas.width / 2;
  const cy = ctx.canvas.height / 2;

  ctx.save();
  ctx.translate(cx, cy);

  ctx.strokeStyle = 'rgba(255,245,230,0.8)';
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.ellipse(0, 0, 180, 110, 0, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.ellipse(0, 0, 150, 90, 0, 0, Math.PI * 2);
  ctx.stroke();

  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const x = Math.cos(angle) * 250;
    const y = Math.sin(angle) * 180;
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 230, 180, 0.18)';
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fill();
  }

  for (let i = 0; i < 14; i++) {
    const x = -180 + (i % 7) * 36 + Math.sin(time * 1.5 + i) * 8;
    const y = -60 + Math.floor(i / 7) * 28 + Math.cos(time * 1.2 + i) * 8;
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 240, 220, 0.7)';
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

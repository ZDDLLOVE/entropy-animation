function drawCarnotScene(ctx, time, localT) {
  const cx = ctx.canvas.width / 2;
  const cy = ctx.canvas.height / 2;

  ctx.save();
  ctx.translate(cx, cy);

  ctx.fillStyle = 'rgba(255, 180, 90, 0.26)';
  ctx.strokeStyle = 'rgba(255, 230, 180, 0.7)';
  ctx.lineWidth = 2;
  ctx.fillRect(-220, -80, 120, 120);
  ctx.strokeRect(-220, -80, 120, 120);

  ctx.fillStyle = 'rgba(113, 170, 255, 0.22)';
  ctx.strokeStyle = 'rgba(180, 220, 255, 0.7)';
  ctx.fillRect(100, -80, 120, 120);
  ctx.strokeRect(100, -80, 120, 120);

  ctx.save();
  ctx.translate(0, 60);
  ctx.rotate(time * 0.6);
  ctx.strokeStyle = 'rgba(255, 240, 220, 0.5)';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos((i / 6) * Math.PI * 2) * 120, Math.sin((i / 6) * Math.PI * 2) * 120);
    ctx.stroke();
  }
  ctx.restore();

  ctx.strokeStyle = 'rgba(255, 194, 110, 0.9)';
  ctx.fillStyle = 'rgba(255, 194, 110, 0.9)';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(-100, -20);
  ctx.lineTo(80, -20);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(60, -36);
  ctx.lineTo(90, -20);
  ctx.lineTo(60, -4);
  ctx.fill();

  ctx.strokeStyle = 'rgba(255,255,255,0.12)';
  for (let i = 0; i < 12; i++) {
    const y = 160 + i * 6;
    ctx.beginPath();
    ctx.moveTo(-400, y);
    ctx.lineTo(400, y);
    ctx.stroke();
  }

  ctx.restore();
}

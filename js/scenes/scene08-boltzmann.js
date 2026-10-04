function drawBoltzmannScene(ctx, time, localT) {
  const cx = ctx.canvas.width / 2;
  const cy = ctx.canvas.height / 2;

  ctx.save();
  ctx.translate(cx, cy);

  ctx.strokeStyle = 'rgba(255,255,255,0.7)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-350, 0);
  ctx.lineTo(-30, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(30, 0);
  ctx.lineTo(350, 0);
  ctx.stroke();

  for (let i = 0; i < 16; i++) {
    const x = -260 + (i % 6) * 48 + Math.sin(time * 1.7 + i) * 10;
    const y = -20 + Math.floor(i / 6) * 36 + Math.cos(time * 1.5 + i) * 10;
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 240, 200, 0.7)';
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  for (let i = 0; i < 40; i++) {
    const x = 80 + (i % 8) * 42 + Math.sin(time * 1.3 + i * 0.8) * 18;
    const y = -90 + Math.floor(i / 8) * 32 + Math.cos(time * 1.9 + i * 0.6) * 18;
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 210, 150, 0.6)';
    ctx.arc(x, y, 3 + (i % 2), 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.strokeStyle = 'rgba(255,255,255,0.18)';
  ctx.beginPath();
  ctx.moveTo(-360, 220);
  ctx.quadraticCurveTo(-80, 120, 0, 150);
  ctx.quadraticCurveTo(80, 180, 350, 230);
  ctx.stroke();

  ctx.restore();
}

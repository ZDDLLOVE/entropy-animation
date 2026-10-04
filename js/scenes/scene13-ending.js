function drawEndingScene(ctx, time, localT) {
  const cx = ctx.canvas.width / 2;
  const cy = ctx.canvas.height / 2;

  ctx.save();
  ctx.translate(cx, cy);

  const glow = 80 + Math.sin(time * 0.9) * 18;
  const grad = ctx.createRadialGradient(0, 0, 20, 0, 0, glow);
  grad.addColorStop(0, 'rgba(255, 246, 230, 0.9)');
  grad.addColorStop(0.35, 'rgba(255, 220, 160, 0.3)');
  grad.addColorStop(1, 'rgba(255, 220, 160, 0)');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, glow, 0, Math.PI * 2);
  ctx.fill();

  for (let i = 0; i < 7; i++) {
    const radius = 110 + i * 110;
    ctx.beginPath();
    ctx.strokeStyle = `rgba(255, 245, 230, ${0.08 - i * 0.01})`;
    ctx.lineWidth = 1.2;
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.restore();
}

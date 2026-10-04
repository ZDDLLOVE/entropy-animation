function drawEntropyScene(ctx, time, localT) {
  const cx = ctx.canvas.width / 2;
  const cy = ctx.canvas.height / 2;

  ctx.save();
  ctx.translate(cx, cy);

  ctx.beginPath();
  ctx.strokeStyle = 'rgba(255, 245, 225, 0.8)';
  ctx.lineWidth = 2.2;
  ctx.moveTo(-160, 30);
  ctx.bezierCurveTo(-100, -80, 40, 80, 160, 20);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
  ctx.setLineDash([8, 10]);
  ctx.arc(0, 0, 180, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2 + time * 0.35;
    const x = Math.cos(angle) * (220 + (i % 2) * 20);
    const y = Math.sin(angle) * (220 + (i % 2) * 20);
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 240, 220, ${0.2 + (i % 3) * 0.12})`;
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

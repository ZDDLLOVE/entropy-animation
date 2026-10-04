function drawClausiusScene(ctx, time, localT) {
  const cx = ctx.canvas.width / 2;
  const cy = ctx.canvas.height / 2;

  ctx.save();
  ctx.translate(cx, cy);

  ctx.strokeStyle = 'rgba(245, 236, 220, 0.75)';
  ctx.lineWidth = 2;
  ctx.fillStyle = 'rgba(255,255,255,0.03)';

  const leftX = -250;
  const rightX = 250;
  const boxY = -80;
  const boxH = 180;

  ctx.fillRect(leftX, boxY, 180, boxH);
  ctx.strokeRect(leftX, boxY, 180, boxH);
  ctx.fillRect(rightX - 180, boxY, 180, boxH);
  ctx.strokeRect(rightX - 180, boxY, 180, boxH);

  for (let i = 0; i < 18; i++) {
    const x = leftX + 22 + (i % 5) * 30;
    const y = boxY + 20 + Math.floor(i / 5) * 40 + Math.sin(time * 1.6 + i) * 8;
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 232, 180, ${0.2 + (i % 3) * 0.15})`;
    ctx.arc(x, y, 3 + (i % 2), 0, Math.PI * 2);
    ctx.fill();
  }

  for (let i = 0; i < 18; i++) {
    const x = rightX - 160 + 22 + (i % 5) * 30;
    const y = boxY + 20 + Math.floor(i / 5) * 40 + Math.cos(time * 1.7 + i) * 9;
    ctx.beginPath();
    ctx.fillStyle = `rgba(170, 195, 255, ${0.18 + (i % 3) * 0.12})`;
    ctx.arc(x, y, 3 + (i % 2), 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.strokeStyle = 'rgba(255, 205, 110, 0.9)';
  ctx.fillStyle = 'rgba(255, 205, 110, 0.9)';
  ctx.beginPath();
  ctx.moveTo(-70, 0);
  ctx.lineTo(70, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(40, -18);
  ctx.lineTo(90, 0);
  ctx.lineTo(40, 18);
  ctx.fill();

  ctx.strokeStyle = 'rgba(255, 90, 90, 0.9)';
  ctx.beginPath();
  ctx.moveTo(-40, -20);
  ctx.lineTo(-40, 20);
  ctx.moveTo(-50, 10);
  ctx.lineTo(-30, 10);
  ctx.moveTo(-50, -10);
  ctx.lineTo(-30, -10);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(255,255,255,0.12)';
  ctx.beginPath();
  ctx.moveTo(-420, 200);
  ctx.lineTo(420, 200);
  ctx.stroke();

  ctx.restore();
}

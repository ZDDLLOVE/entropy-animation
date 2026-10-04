function drawLifeScene(ctx, time, localT) {
  const cx = ctx.canvas.width / 2;
  const cy = ctx.canvas.height / 2;

  const leftX = cx - 300;
  const rightX = cx + 200;
  const roomY = cy + 60;

  function drawRoom(xBase, isOrder) {
    ctx.save();
    ctx.translate(xBase, roomY);
    ctx.strokeStyle = 'rgba(255,245,230,0.8)';
    ctx.lineWidth = 2;
    ctx.strokeRect(-90, -120, 180, 150);
    ctx.strokeRect(-36, -80, 70, 80);
    ctx.beginPath();
    ctx.moveTo(-90, -120);
    ctx.lineTo(-90, 60);
    ctx.moveTo(90, -120);
    ctx.lineTo(90, 60);
    ctx.stroke();

    if (isOrder) {
      const books = [
        [-60, -90, 20, 30],
        [-35, -90, 20, 30],
        [-10, -90, 20, 30],
        [15, -90, 20, 30],
        [40, -90, 20, 30],
        [-40, -45, 24, 22],
        [-10, -45, 24, 22],
        [20, -45, 24, 22]
      ];
      for (const [x, y, w, h] of books) {
        ctx.fillStyle = 'rgba(255, 235, 180, 0.18)';
        ctx.fillRect(x, y, w, h);
        ctx.strokeRect(x, y, w, h);
      }
    } else {
      for (let i = 0; i < 8; i++) {
        const x = -60 + (i % 4) * 40 + Math.sin(time * 0.9 + i) * 14;
        const y = -90 + Math.floor(i / 4) * 42 + Math.cos(time * 1.2 + i) * 12;
        const w = 24 + (i % 3) * 8;
        const h = 18 + (i % 2) * 10;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((Math.sin(time + i) * 0.8) + i * 0.2);
        ctx.fillStyle = 'rgba(255, 224, 170, 0.18)';
        ctx.fillRect(-w / 2, -h / 2, w, h);
        ctx.strokeRect(-w / 2, -h / 2, w, h);
        ctx.restore();
      }
    }

    ctx.restore();
  }

  drawRoom(leftX, true);
  drawRoom(rightX, false);

  ctx.strokeStyle = 'rgba(255, 214, 144, 0.8)';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(leftX + 120, roomY - 35);
  ctx.lineTo(rightX - 120, roomY - 35);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(rightX - 120, roomY - 35);
  ctx.lineTo(rightX - 80, roomY - 60);
  ctx.lineTo(rightX - 30, roomY - 35);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(255,255,255,0.12)';
  for (let i = 0; i < 8; i++) {
    const y = cy + 170 + i * 10;
    ctx.beginPath();
    ctx.moveTo(-500, y);
    ctx.lineTo(500, y);
    ctx.stroke();
  }
}

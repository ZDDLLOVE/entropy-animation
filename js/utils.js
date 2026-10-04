const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const lerp = (a, b, t) => a + (b - a) * t;

const easeInOutQuad = (t) => {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
};

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const mapRange = (value, inMin, inMax, outMin, outMax) => {
  return outMin + ((value - inMin) / (inMax - inMin)) * (outMax - outMin);
};

const randomRange = (min, max) => min + Math.random() * (max - min);

const distance = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);

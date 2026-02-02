function updateAnimationValues() {
  const card = document.querySelector(".card");
  if (!card) return;
  const PX_PER_SEC = 100;
  const SIZE_FACTOR = 1.4;
  const { width, height } = card.getBoundingClientRect();

  const filterHeight = height * SIZE_FACTOR;
  const filterWidth = width * SIZE_FACTOR;
  const durationY = (filterHeight / PX_PER_SEC).toFixed(2);
  const durationX = (filterWidth / PX_PER_SEC).toFixed(2);
  const animateDY1 = document.getElementById("animate-dy-1");
  const animateDY2 = document.getElementById("animate-dy-2");
  const animateDX1 = document.getElementById("animate-dx-1");
  const animateDX2 = document.getElementById("animate-dx-2");
  if (animateDY1) {
    animateDY1.setAttribute("values", `${filterHeight};0`);
    animateDY1.setAttribute("dur", `${durationY}s`);
  }
  if (animateDY2) {
    animateDY2.setAttribute("values", `0;-${filterHeight}`);
    animateDY2.setAttribute("dur", `${durationY}s`);
  }
  if (animateDX1) {
    animateDX1.setAttribute("values", `${filterWidth};0`);
    animateDX1.setAttribute("dur", `${durationX}s`);
  }
  if (animateDX2) {
    animateDX2.setAttribute("values", `0;-${filterWidth}`);
    animateDX2.setAttribute("dur", `${durationX}s`);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  if (!card) return;
  const resizeObserver = new ResizeObserver(() => {
    updateAnimationValues();
  });
  updateAnimationValues();
  resizeObserver.observe(card);
});

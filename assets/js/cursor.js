// Initialize hacker cursor
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.innerHTML = `
  <div class="cursor-outer"></div>
  <div class="cursor-inner"></div>
  <div class="cursor-crosshair"></div>
`;
document.body.appendChild(cursor);

// Follow mouse movement
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Click effect
document.addEventListener('mousedown', () => {
  cursor.classList.add('click-active');
});

document.addEventListener('mouseup', () => {
  cursor.classList.remove('click-active');
});

// Text selection effect
let isSelecting = false;
const selectEffect = document.createElement('div');
selectEffect.className = 'text-select-effect';
document.body.appendChild(selectEffect);

document.addEventListener('mousedown', (e) => {
  if (e.target.closest('p, div, span, article, pre, code')) {
    isSelecting = true;
  }
});

document.addEventListener('mousemove', (e) => {
  if (isSelecting) {
    const selection = window.getSelection();
    if (!selection.isCollapsed) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      
      selectEffect.style.left = `${rect.left}px`;
      selectEffect.style.top = `${rect.top}px`;
      selectEffect.style.width = `${rect.width}px`;
      selectEffect.style.height = `${rect.height}px`;
      
      // Restart animation
      selectEffect.style.animation = 'none';
      void selectEffect.offsetWidth;
      selectEffect.style.animation = 'textSelectPulse 0.4s ease-out';
    }
  }
});

document.addEventListener('mouseup', () => {
  isSelecting = false;
});

// Hover effects
function setupHoverEffect(selector, className) {
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add(className));
    el.addEventListener('mouseleave', () => cursor.classList.remove(className));
  });
}

setupHoverEffect('a, [data-cursor="link"]', 'hover-link');
setupHoverEffect('input, textarea, [contenteditable], pre, code', 'hover-text');
setupHoverEffect('button, .btn, [role="button"]', 'hover-button');
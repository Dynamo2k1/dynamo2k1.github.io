// Enhanced cursor script
const cursor = document.querySelector('.custom-cursor');
const cursorInner = document.querySelector('.cursor-inner');
const cursorOuter = document.querySelector('.cursor-outer');
const cursorHalo = document.querySelector('.cursor-halo');
const cursorCrosshair = document.querySelector('.cursor-crosshair');

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

// Hover effects
const links = document.querySelectorAll('a, [data-cursor="link"]');
const buttons = document.querySelectorAll('button, [data-cursor="button"]');
const textElements = document.querySelectorAll('input, textarea, [data-cursor="text"]');

links.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hover-link');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover-link');
  });
});

buttons.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hover-button');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover-button');
  });
});

textElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hover-text');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover-text');
  });
});

// Special effect - cursor trail
const trailElements = 10;
for (let i = 0; i < trailElements; i++) {
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  cursor.appendChild(trail);
}

// Trail animation
document.addEventListener('mousemove', (e) => {
  const trails = document.querySelectorAll('.cursor-trail');
  let x = e.clientX;
  let y = e.clientY;
  
  trails.forEach((trail, index) => {
    setTimeout(() => {
      trail.style.left = `${x}px`;
      trail.style.top = `${y}px`;
      trail.style.opacity = `${1 - (index / trails.length)}`;
      trail.style.transform = `scale(${1 - (index / trails.length / 2)})`;
    }, index * 50);
  });
});
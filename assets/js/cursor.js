// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add cursor-loaded class to body
    document.body.classList.add('cursor-loaded');
    
    const cursor = document.querySelector('.custom-cursor');
    const cursorInner = document.querySelector('.cursor-inner');
    const cursorOuter = document.querySelector('.cursor-outer');
    const cursorHalo = document.querySelector('.cursor-halo');
    const cursorCrosshair = document.querySelector('.cursor-crosshair');
  
    // Follow mouse movement
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      
      // Update trail elements
      updateCursorTrail(e.clientX, e.clientY);
    });
  
    // Click effect
    document.addEventListener('mousedown', () => {
      cursor.classList.add('click-active');
      cursorInner.style.transform = 'translate(-50%, -50%) scale(0.5)';
      cursorOuter.style.transform = 'scale(0.8)';
    });
  
    document.addEventListener('mouseup', () => {
      cursor.classList.remove('click-active');
      cursorInner.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorOuter.style.transform = 'scale(1)';
    });
  
    // Create cursor trail elements
    const trailElements = 8;
    for (let i = 0; i < trailElements; i++) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.transitionDuration = `${0.1 + (i * 0.05)}s`;
      cursor.appendChild(trail);
    }
  
    function updateCursorTrail(x, y) {
      const trails = document.querySelectorAll('.cursor-trail');
      
      trails.forEach((trail, index) => {
        setTimeout(() => {
          trail.style.left = `${x}px`;
          trail.style.top = `${y}px`;
          trail.style.opacity = `${1 - (index / trails.length)}`;
          trail.style.transform = `translate(-50%, -50%) scale(${1 - (index / trails.length / 2)})`;
        }, index * 50);
      });
    }
  
    // Hover effects for different elements
    function setupHoverEffects(selector, className) {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.classList.add(className);
        });
        el.addEventListener('mouseleave', () => {
          cursor.classList.remove(className);
        });
      });
    }
  
    setupHoverEffects('a, [data-cursor="link"]', 'hover-link');
    setupHoverEffects('button, [data-cursor="button"]', 'hover-button');
    setupHoverEffects('input, textarea, [data-cursor="text"]', 'hover-text');
  });
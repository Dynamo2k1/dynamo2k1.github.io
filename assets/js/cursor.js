document.addEventListener('DOMContentLoaded', function() {
    // Initialize cursor
    document.body.classList.add('cursor-loaded');
    const cursor = document.querySelector('.custom-cursor');
    
    // Create trail elements (now closer together)
    const trailCount = 5;
    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.transition = `all ${0.1 + (i * 0.03)}s ease-out`;
      cursor.appendChild(trail);
    }
  
    // Mouse movement
    let lastX = 0;
    let lastY = 0;
    let velocity = 0;
    
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Calculate velocity for dynamic effects
      const deltaX = x - lastX;
      const deltaY = y - lastY;
      velocity = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY) * 0.5, 30);
      
      // Update cursor position
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      
      // Update trail with tighter spacing
      const trails = document.querySelectorAll('.cursor-trail');
      trails.forEach((trail, i) => {
        const delay = (i + 1) * 3; // Reduced delay for tighter trail
        setTimeout(() => {
          trail.style.left = `${x}px`;
          trail.style.top = `${y}px`;
          trail.style.opacity = `${1 - (i / trails.length)}`;
          trail.style.width = `${6 + velocity * 0.3}px`;
          trail.style.height = `${6 + velocity * 0.3}px`;
        }, delay);
      });
      
      lastX = x;
      lastY = y;
    });
  
    // Click effects
    document.addEventListener('mousedown', () => {
      cursor.classList.add('click-active');
    });
    
    document.addEventListener('mouseup', () => {
      cursor.classList.remove('click-active');
    });
  
    // Text selection effects
    let isSelecting = false;
    let selectEffect = document.createElement('div');
    selectEffect.className = 'text-select-effect';
    document.body.appendChild(selectEffect);
    
    document.addEventListener('mousedown', (e) => {
      if (e.target.closest('p, div, span, article')) {
        isSelecting = true;
        cursor.classList.add('selecting-text');
      }
    });
    
    document.addEventListener('mousemove', (e) => {
      if (isSelecting) {
        // Create selection effect
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
          void selectEffect.offsetWidth; // Trigger reflow
          selectEffect.style.animation = 'textSelectPulse 0.5s ease-out';
        }
      }
    });
    
    document.addEventListener('mouseup', () => {
      isSelecting = false;
      cursor.classList.remove('selecting-text');
    });
  
    // Hover effects
    function setupHoverEffect(selector, className) {
      document.querySelectorAll(selector).forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add(className));
        el.addEventListener('mouseleave', () => cursor.classList.remove(className));
      });
    }
    
    setupHoverEffect('a, [data-cursor="link"]', 'hover-link');
    setupHoverEffect('input, textarea, [contenteditable]', 'hover-text');
    setupHoverEffect('button, .btn', 'hover-button');
  });
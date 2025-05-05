const cursor = document.querySelector('.custom-cursor');

// Move cursor with mouse
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Click effect
document.addEventListener('mousedown', () => {
  cursor.classList.add('clicking');
});
document.addEventListener('mouseup', () => {
  cursor.classList.remove('clicking');
});

// Hover effect for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .clickable');

interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hovering');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hovering');
  });
});

// Detect text selection mode (focus on input/textarea)
document.addEventListener('selectionchange', () => {
  const selection = document.getSelection();
  if (selection && selection.type === 'Range') {
    cursor.classList.add('selecting');
  } else {
    cursor.classList.remove('selecting');
  }
});

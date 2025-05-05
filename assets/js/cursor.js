// Custom cursor follow effect
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Click effect
document.addEventListener('click', () => {
  cursor.classList.add('cursor-click');
  setTimeout(() => {
    cursor.classList.remove('cursor-click');
  }, 300);
});
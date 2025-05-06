// Typewriter Effect for Headings
document.addEventListener('DOMContentLoaded', function() {
  const typewriterElements = document.querySelectorAll('.typewriter');
  
  typewriterElements.forEach(el => {
    const text = el.textContent;
    el.textContent = '';
    
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
        // Add blinking cursor after typing completes
        const cursor = document.createElement('span');
        cursor.className = 'blinking-cursor';
        cursor.textContent = '_';
        el.appendChild(cursor);
      }
    }, 50);
  });
});
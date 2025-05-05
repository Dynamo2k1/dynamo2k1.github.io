// Main interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Typewriter effect for terminal elements
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
            }
        }, 50);
    });
    
    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
    
    // Terminal cursor blink
    const cursors = document.querySelectorAll('.cursor');
    setInterval(() => {
        cursors.forEach(cursor => {
            cursor.style.visibility = 
                cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
        });
    }, 500);
});
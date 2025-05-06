// Cyber Terminal Loader
document.addEventListener('DOMContentLoaded', function() {
  const terminalLoader = document.querySelector('.terminal-loader');
  const terminalContent = document.querySelector('.terminal-content');
  
  // Boot sequence messages
  const bootMessages = [
    "Initializing cyber security protocols...",
    "Loading 0xDEFCON modules...",
    "Mounting encrypted partitions...",
    "Establishing secure connection...",
    "Verifying PGP keys...",
    "Scanning for intrusions...",
    "System fully operational"
  ];
  
  // Simulate system boot
  function typeWriter(text, index, callback) {
    if (index < text.length) {
      terminalContent.innerHTML += text.charAt(index);
      setTimeout(() => typeWriter(text, index + 1, callback), 20);
    } else {
      setTimeout(callback, 500);
    }
  }
  
  function displayMessages(messages, index) {
    if (index < messages.length) {
      terminalContent.innerHTML += `<p>> `;
      typeWriter(messages[index], 0, () => {
        terminalContent.scrollTop = terminalContent.scrollHeight;
        displayMessages(messages, index + 1);
      });
    } else {
      setTimeout(() => {
        terminalLoader.style.opacity = '0';
        setTimeout(() => {
          terminalLoader.style.display = 'none';
        }, 1000);
      }, 1000);
    }
  }
  
  // Start the boot sequence
  displayMessages(bootMessages, 0);
  
  // Add blinking cursor effect
  setInterval(() => {
    const lastLine = terminalContent.lastElementChild;
    if (lastLine) {
      const cursor = document.createElement('span');
      cursor.className = 'blinking-cursor';
      cursor.textContent = '_';
      
      if (lastLine.querySelector('.blinking-cursor')) {
        lastLine.removeChild(lastLine.querySelector('.blinking-cursor'));
      } else {
        lastLine.appendChild(cursor);
      }
    }
  }, 500);
});
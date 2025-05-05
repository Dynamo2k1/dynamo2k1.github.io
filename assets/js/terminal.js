document.addEventListener('DOMContentLoaded', function() {
  const terminalLoader = document.querySelector('.terminal-loader');
  const terminalContent = document.querySelector('.terminal-content');

  const bootMessages = [
    "Initializing cyber security protocols...",
    "Loading 0xDEFCON modules...",
    "Mounting encrypted partitions...",
    "Establishing secure connection...",
    "ACCEPTED..."
  ];

  function typeWriter(text, index, lineElement, callback) {
    if (index < text.length) {
      lineElement.textContent = lineElement.textContent + text.charAt(index);
      setTimeout(() => typeWriter(text, index + 1, lineElement, callback), 10);
    } else {
      setTimeout(callback, 10);
    }
  }

  function displayMessages(messages, index) {
    if (index < messages.length) {
      const line = document.createElement('p');
      line.textContent = '> ';  
      terminalContent.appendChild(line);

      typeWriter(messages[index], 0, line, () => {
        terminalContent.scrollTop = terminalContent.scrollHeight;
        displayMessages(messages, index + 1);
      });
    } else {
      setTimeout(() => {
        terminalLoader.style.opacity = '0';
        setTimeout(() => {
          terminalLoader.style.display = 'none';
        }, 500);
      }, 500);
    }
  }

  // Start the boot sequence
  displayMessages(bootMessages, 0);

  // Blinking cursor effect on the last line
  setInterval(() => {
    const lastLine = terminalContent.lastElementChild;
    if (lastLine) {
      let cursor = lastLine.querySelector('.blinking-cursor');
      if (cursor) {
        cursor.remove();
      } else {
        cursor = document.createElement('span');
        cursor.className = 'blinking-cursor';
        cursor.textContent = '_';
        lastLine.appendChild(cursor);
      }
    }
  }, 500);
});

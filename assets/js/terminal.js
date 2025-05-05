document.addEventListener('DOMContentLoaded', function() {
  const terminalLoader = document.querySelector('.terminal-loader');
  const terminalContent = document.querySelector('.terminal-content');

  const bootMessages = [
    "Initializing cyber security protocols...",
    "Loading 0xDEFCON modules...",
    "Mounting encrypted partitions...",
    "Establishing secure connection...",
    "Verifying PGP keys...",
    "Scanning for intrusions...",
    "System fully operational"
  ];

  // typeWriter now receives the line element and updates its content
  function typeWriter(text, index, lineElement, callback) {
    if (index < text.length) {
      lineElement.textContent = lineElement.textContent + text.charAt(index);
      setTimeout(() => typeWriter(text, index + 1, lineElement, callback), 20);
    } else {
      setTimeout(callback, 500);
    }
  }

  function displayMessages(messages, index) {
    if (index < messages.length) {
      // Create a new <p> element for each line
      const line = document.createElement('p');
      line.textContent = '> ';  // Prompt symbol
      terminalContent.appendChild(line);

      // Start typing inside this line
      typeWriter(messages[index], 0, line, () => {
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

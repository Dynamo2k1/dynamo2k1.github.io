// Enhanced Matrix Rain Effect
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Characters - taken from the original Matrix
    const matrixChars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%^&*()";
    
    // Convert the string into an array of single characters
    const chars = matrixChars.split("");
    
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // Create an array of drops - one per column
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start at random positions above the viewport
    }
    
    // Color gradient for the rain
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#20c20e");
    gradient.addColorStop(0.5, "#00ff9d");
    gradient.addColorStop(1, "#20c20e");
    
    // Drawing the characters
    function draw() {
      // Translucent BG to show trail
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = gradient;
      ctx.font = `${fontSize}px monospace`;
      
      // Loop over drops
      for (let i = 0; i < drops.length; i++) {
        // Random character to print
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // x = i * fontSize, y = value of drops[i] * fontSize
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Randomly reset drop to top when it reaches bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Increment Y coordinate
        drops[i]++;
      }
    }
    
    // Animation loop
    const matrixInterval = setInterval(draw, 35);
    
    // Handle window resize
    window.addEventListener('resize', function() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const newColumns = canvas.width / fontSize;
      
      // Adjust drops array
      if (newColumns > drops.length) {
        // Add new columns
        for (let i = drops.length; i < newColumns; i++) {
          drops[i] = Math.random() * -100;
        }
      } else if (newColumns < drops.length) {
        // Remove extra columns
        drops.length = newColumns;
      }
      
      // Update gradient
      gradient.addColorStop(0, "#20c20e");
      gradient.addColorStop(0.5, "#00ff9d");
      gradient.addColorStop(1, "#20c20e");
    });
  });
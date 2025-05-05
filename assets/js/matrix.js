// Matrix Rain Effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set canvas to full window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters - taken from the original Matrix
const matrixChars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Convert the string into an array of single characters
const chars = matrixChars.split("");

const fontSize = 14;
const columns = canvas.width / fontSize;

// Create an array of drops - one per column
const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

// Drawing the characters
function draw() {
    // Black BG for the canvas
    // Translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#20c20e"; // Green text
    ctx.font = fontSize + "px monospace";
    
    // Loop over drops
    for (let i = 0; i < drops.length; i++) {
        // Random character to print
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // x = i * fontSize, y = value of drops[i] * fontSize
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Sending the drop back to the top randomly after it has crossed the height
        // Adding randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        
        // Increment Y coordinate
        drops[i]++;
    }
}


// Animation loop
setInterval(draw, 35);

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = canvas.width / fontSize;
    drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * canvas.height / fontSize;
    }
});

// Matrix Rain Effect
const matrix = document.getElementById('matrix');
const ctx = matrix.getContext('2d');

matrix.width = window.innerWidth;
matrix.height = window.innerHeight;

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
const drops = [];

for(let i = 0; i < 100; i++) {
  drops[i] = 1;
}

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, matrix.width, matrix.height);
  
  ctx.fillStyle = '#0F0';
  ctx.font = '15px monospace';

  drops.forEach((drop, i) => {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * 20, drop * 20);
    
    if(drop * 20 > matrix.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  });
}

setInterval(drawMatrix, 50);

// GitHub Integration
async function fetchGitHub() {
  try {
    const response = await fetch('https://api.github.com/users/dynamo2k1/repos');
    const repos = await response.json();
    
    const projectsContainer = document.getElementById('repos');
    projectsContainer.innerHTML = repos
      .map(repo => `
        <div class="repo-card">
          <h3>${repo.name}</h3>
          <p>${repo.description || 'Cybersecurity project'}</p>
          <p>Stars: ${repo.stargazers_count} | Language: ${repo.language}</p>
        </div>
      `).join('');
    
  } catch (error) {
    console.error('GitHub API Error:', error);
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  fetchGitHub();
  
  // Typewriter Effect
  const typewriter = document.getElementById('typewriter');
  const lines = typewriter.children;
  let index = 0;
  
  function typeLine() {
    if(index < lines.length) {
      lines[index].style.display = 'block';
      index++;
      setTimeout(typeLine, 1000);
    }
  }
  typeLine();
});
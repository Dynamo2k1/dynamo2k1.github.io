// script.js
const securityFeed = document.getElementById('security-feed');

async function updateSecurityFeed() {
    const response = await fetch('https://api.github.com/users/dynamo2k1/repos');
    const data = await response.json();
    
    securityFeed.innerHTML = data.map(alert => `
        <div class="alert-card ${alert.severity}">
            <i class="fas fa-exclamation-triangle"></i>
            <h5>${alert.title}</h5>
            <p>${alert.description}</p>
        </div>
    `).join('');
}
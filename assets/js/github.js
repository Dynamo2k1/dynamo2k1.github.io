// GitHub Activity Feed
document.addEventListener('DOMContentLoaded', function() {
    const githubContent = document.getElementById('github-content');
    
    // Replace with your GitHub username
    const username = 'dynamo2k1';
    
    fetch(`https://api.github.com/users/${username}/events`)
        .then(response => response.json())
        .then(data => {
            let output = '';
            const events = data.slice(0, 5); // Get last 5 events
            
            events.forEach(event => {
                const repo = event.repo.name;
                const type = event.type;
                const date = new Date(event.created_at).toLocaleString();
                
                let action = '';
                switch(type) {
                    case 'PushEvent':
                        action = 'pushed to';
                        break;
                    case 'CreateEvent':
                        action = 'created';
                        break;
                    case 'PullRequestEvent':
                        action = 'opened PR in';
                        break;
                    default:
                        action = 'modified';
                }
                
                output += `> [${date}] ${action} ${repo}\n`;
            });
            
            githubContent.innerHTML = output;
        })
        .catch(err => {
            githubContent.innerHTML = '> Error fetching GitHub activity';
            console.error('GitHub API Error:', err);
        });
});
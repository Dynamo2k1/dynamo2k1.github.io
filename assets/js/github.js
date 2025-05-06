// GitHub Activity Feed
document.addEventListener('DOMContentLoaded', function() {
    const githubContent = document.getElementById('github-content');
    const username = 'dynamo2k1'; // Replace with your GitHub username
    
    // Display loading message
    githubContent.innerHTML = '> Connecting to GitHub API...';
    
    // Fetch GitHub activity
    fetch(`https://api.github.com/users/${username}/events`)
      .then(response => {
        if (!response.ok) {
          throw new Error('GitHub API rate limit exceeded');
        }
        return response.json();
      })
      .then(data => {
        const events = data.slice(0, 5); // Get last 5 events
        
        if (events.length === 0) {
          githubContent.innerHTML = '> No recent activity found';
          return;
        }
        
        let output = '';
        events.forEach(event => {
          const repo = event.repo.name.split('/')[1];
          const type = event.type;
          const date = new Date(event.created_at).toLocaleString();
          
          let action = '';
          let icon = '';
          
          switch(type) {
            case 'PushEvent':
              action = 'pushed to';
              icon = '<i class="fas fa-code-commit"></i>';
              break;
            case 'CreateEvent':
              action = 'created';
              icon = '<i class="fas fa-plus-square"></i>';
              break;
            case 'PullRequestEvent':
              action = 'opened PR in';
              icon = '<i class="fas fa-code-pull-request"></i>';
              break;
            case 'IssueCommentEvent':
              action = 'commented on issue in';
              icon = '<i class="fas fa-comment-dots"></i>';
              break;
            default:
              action = 'modified';
              icon = '<i class="fas fa-edit"></i>';
          }
          
          output += `> [${date}] ${icon} ${action} ${repo}\n`;
        });
        
        githubContent.innerHTML = output;
      })
      .catch(err => {
        githubContent.innerHTML = `> Error: ${err.message}`;
        console.error('GitHub API Error:', err);
      });
  });
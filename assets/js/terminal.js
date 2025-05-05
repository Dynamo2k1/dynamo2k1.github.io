// Terminal Loader Animation
document.addEventListener('DOMContentLoaded', function() {
    const terminalLoader = document.querySelector('.terminal-loader');
    const terminalContent = document.querySelector('.terminal-content');
    
    // Simulate system boot
    setTimeout(() => {
        terminalContent.innerHTML += '\n> Loading security modules...';
    }, 1000);
    
    setTimeout(() => {
        terminalContent.innerHTML += '\n> Verifying PGP keys...';
    }, 2000);
    
    setTimeout(() => {
        terminalContent.innerHTML += '\n> Establishing secure connection...';
    }, 3000);
    
    setTimeout(() => {
        terminalContent.innerHTML += '\n\n> SYSTEM READY';
        setTimeout(() => {
            terminalLoader.style.opacity = '0';
            setTimeout(() => {
                terminalLoader.style.display = 'none';
            }, 1000);
        }, 1000);
    }, 4000);
});
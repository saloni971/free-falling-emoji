// Function to pause the game
function pauseGame() {
    // Logic to pause the game:
    // - Stop emoji movement
    // - Stop any timers
    // - Disable user input
    let emojis = document.querySelectorAll('.emoji_image');
    emojis.forEach(emoji => {
        emoji.style.animationPlayState = 'paused'; // Pause the CSS animation
    });
    // Additional game mechanics to pause (e.g., stop timers, prevent further actions)
}

// Function to resume the game
function resumeGame() {
    // Logic to resume the game:
    // - Resume emoji movement
    // - Resume any timers
    // - Enable user input
    let emojis = document.querySelectorAll('.emoji_image');
    emojis.forEach(emoji => {
        emoji.style.animationPlayState = 'running'; // Resume the CSS animation
    });
    // Additional game mechanics to resume (e.g., restart timers, allow actions)
}

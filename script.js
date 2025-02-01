// Get elements
const openingScreen = document.getElementById('opening-screen');
const pictureScreen = document.getElementById('picture-screen');
const proposalScreen = document.getElementById('proposal-screen');
const celebrationScreen = document.getElementById('celebration-screen');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const arrows = document.querySelectorAll('.arrow');

// Add event listeners for arrows
arrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    if (openingScreen.classList.contains('hidden')) {
      openingScreen.classList.add('hidden');
      pictureScreen.classList.remove('hidden');
    } else if (pictureScreen.classList.contains('hidden')) {
      pictureScreen.classList.add('hidden');
      proposalScreen.classList.remove('hidden');
    }
  });
});

// Handle 'Yes' button click
yesButton.addEventListener('click', () => {
  proposalScreen.classList.add('hidden');
  celebrationScreen.classList.remove('hidden');
  triggerConfetti();
});

// Handle 'No' button click
noButton.addEventListener('click', () => {
  alert('Try again! You know you want to say yes!');
});

// Confetti effect
function triggerConfetti() {
  const confettiSettings = { target: 'confetti-canvas' };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}
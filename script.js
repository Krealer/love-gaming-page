// Fetch the game list from games.json
fetch('games.json')
  .then(response => response.json())
  .then(games => {
    const container = document.getElementById('game-container');

    games.forEach(game => {
      // Create a container div for each game
      const card = document.createElement('div');
      card.className = 'game-card';

      // Fill the card with HTML using game data
      card.innerHTML = `
        <img src="${game.icon}" alt="${game.name} Icon" class="game-icon">
        <h2>${game.name}</h2>
        <p>${game.description}</p>
        <a href="games/${game.file}" download>
          <button>Download</button>
        </a>
      `;

      // Add the card to the page
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading games:", error);
  });

// === THEME TOGGLE ===
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.remove('dark', 'light');
  body.classList.add(savedTheme);
}

// Toggle theme on click
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');
  const newTheme = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
});

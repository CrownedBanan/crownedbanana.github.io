
const grid = document.getElementById('grid');

// Create player element
const player = document.createElement('div');
player.classList.add('player');

// Get player starting position
let playerRow = Math.floor(Math.random() * 8);
let playerColumn = Math.floor(Math.random() * 8);

// Add player to starting position
grid.children[playerRow].children[playerColumn].appendChild(player);

// Handle arrow key events
document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      movePlayer(-1, 0);
      break;
    case 'ArrowDown':
      movePlayer(1, 0);
      break;
    case 'ArrowLeft':
      movePlayer(0, -1);
      break;
    case 'ArrowRight':
      movePlayer(0, 1);
      break;
  }
});

// Constants
const Rock_num = 10; // Number of rocks

// Generate rocks
for (let i = 0; i < Rock_num; i++) {
  // Create rock element
  const rock = document.createElement('div');
  rock.classList.add('rock');

  // Get random position for rock
  let rockRow = Math.floor(Math.random() * 8);
  let rockColumn = Math.floor(Math.random() * 8);

  // Check if cell is already occupied
  while (grid.children[rockRow].children[rockColumn].innerHTML !== '') {
    rockRow = Math.floor(Math.random() * 8);
    rockColumn = Math.floor(Math.random() * 8);
  }

  // Add rock to grid
  grid.children[rockRow].children[rockColumn].appendChild(rock);
}



// Create goal element
const goal = document.createElement('div');
goal.classList.add('goal');

// Get random position for goal
let goalRow = Math.floor(Math.random() * 8);
let goalColumn = Math.floor(Math.random() * 8);

// Check if cell is already occupied
while (grid.children[goalRow].children[goalColumn].innerHTML !== '') {
  goalRow = Math.floor(Math.random() * 8);
  goalColumn = Math.floor(Math.random() * 8);
}

// Add goal to grid
grid.children[goalRow].children[goalColumn].appendChild(goal);




// Function to move player
function movePlayer(row, column) {
  // Remove player from current position
  //grid.children[playerRow].children[playerColumn].innerHTML = '';
  grid.children[playerRow].children[playerColumn].removeChild(player);


  // Update player position
  playerRow += row;
  playerColumn += column;

  // Check if player is out of bounds or hits a rock and reload when closed
  if (playerRow < 0 || playerRow > 7 || playerColumn < 0 || playerColumn > 7 || grid.children[playerRow].children[playerColumn].innerHTML === '<div class="rock"></div>') {
    alert('You lost!')
    location.reload();
  } else if (grid.children[playerRow].children[playerColumn].innerHTML === '<div class="goal"></div>') {
    // Show victory alert message and reload page when closed
    alert('You won!')
    location.reload();
  } else {
    // If not out of bounds or hitting a rock, add player to new position
    grid.children[playerRow].children[playerColumn].appendChild(player);
  }
}



// ----
// Create enemy element
const enemy = document.createElement('div');
enemy.classList.add('enemy');

// Get random starting position for enemy
let enemyRow = Math.floor(Math.random() * 8);
let enemyColumn = Math.floor(Math.random() * 8);

// Check if cell is already occupied
while (grid.children[enemyRow].children[enemyColumn].innerHTML !== '') {
  enemyRow = Math.floor(Math.random() * 8);
  enemyColumn = Math.floor(Math.random() * 8);
}

// Add enemy to starting position
grid.children[enemyRow].children[enemyColumn].appendChild(enemy);

// Move enemy towards player every 2 seconds
setInterval(() => {
    // Remove enemy from current position
    grid.children[enemyRow].children[enemyColumn].removeChild(enemy);
  
    // Check if enemy is above, below, or at the same row as the player
    if (enemyRow < playerRow) {
      enemyRow++; // Move enemy down
    } else if (enemyRow > playerRow) {
      enemyRow--; // Move enemy up
    }
  
    // Check if enemy is to the left, right, or at the same column as the player
    if (enemyColumn < playerColumn) {
      enemyColumn++; // Move enemy right
    } else if (enemyColumn > playerColumn) {
      enemyColumn--; // Move enemy left
    }
    // Check if enemy hits player
  if (enemyRow === playerRow && enemyColumn === playerColumn) {
    // Show alert message and reload page when closed
    alert('You lost!')
    location.reload();
  } else {
    // Add enemy to new position
    grid.children[enemyRow].children[enemyColumn].appendChild(enemy);
  }
  
    
}, 1000); // Update enemy position every 2 seconds






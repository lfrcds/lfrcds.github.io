// Function to handle the like button click
function likeButtonClicked() {
    // Check if the like button has already been pressed
    if (localStorage.getItem('likeCount')) {
        alert("You have already liked this!");
    } else {
        // Increment the like count
        var likeCount = parseInt(localStorage.getItem('likeCount')) || 0;
        likeCount++;
        localStorage.setItem('likeCount', likeCount);

        // Update the display
        document.getElementById('likeCount').textContent = likeCount;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
  
    function createStar(isSymbol = false) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      if (isSymbol) {
        star.innerHTML = '✦'; // Insert the desired symbol here
      }
      
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(star);
    }
  
    for (let i = 0; i < 100; i++) {
      if (Math.random() < 0.05) {
        createStar(true); // Create symbol star (rarer)
      } else {
        createStar(); // Create regular star
      }
    }
  });
  
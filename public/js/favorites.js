// Assume you have a button with the class "favorite-button"
const favoriteButton = document.querySelector('.favorite-button');
const itemId =  ""; // Replace with the actual item ID

favoriteButton.addEventListener('click', () => {
  // Make a request to the backend API to save the favorite
  fetch('/api/favorites', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ itemId }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Favorite saved:', data);
      // Update the UI to reflect the change, if needed
    })
    .catch(error => {
      console.error('Error saving favorite:', error);
    });
});


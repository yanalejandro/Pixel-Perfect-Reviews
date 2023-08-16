const button = document.querySelector('#fav');
const review_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1];

async function add (event) {
    event.preventDefault();

    const response = await fetch(`/api/favorites`, {
        method: 'POST',
        body: JSON.stringify({
            reviewId: review_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        // reload current game page to show added review
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}


button.addEventListener('click', add);

// // Assume you have a button with the class "favorite-button"
// const favoriteButton = document.querySelector('.favorite-button');
// const reviewId =  ""; // Replace with the actual item ID

// favoriteButton.addEventListener('click', () => {
//   // Make a request to the backend API to save the favorite
//   fetch('/api/favorites', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ reviewId }),
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Favorite saved:', data);
//       // Update the UI to reflect the change, if needed
//     })
//     .catch(error => {
//       console.error('Error saving favorite:', error);
//     });
// });


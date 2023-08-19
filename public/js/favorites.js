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
        alert("This is already in your favorites!");
    }
}


button.addEventListener('click', add);



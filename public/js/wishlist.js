const button = document.querySelector('#wish');
const game_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1];

async function add (event) {
    event.preventDefault();

    const response = await fetch(`/api/wishList`, {
        method: 'POST',
        body: JSON.stringify({
            gameId: game_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        // reload current game page to show added review
        document.location.reload();
    } else {
        alert("This is already in your wishlist!");
    }
}


button.addEventListener('click', add);


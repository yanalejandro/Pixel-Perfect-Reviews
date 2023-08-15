// search game api (if user can't find their game in our database)
async function newFormHandler (event) {
    event.preventDefault();

    // get searched game title from what user types in
    const title = document.querySelector('input[name="game-title"]').value;

    // go to api search page
    document.location.replace(`newgames/search/${title}`);
}

document.querySelector('.search-newgame').addEventListener('submit', newFormHandler);
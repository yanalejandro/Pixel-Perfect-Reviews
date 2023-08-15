async function newFormHandler (event) {
    event.preventDefault();

    // get searched game title from what user types in
    const title = document.querySelector('input[name="game-title"]').value;

    // go to search page
    document.location.replace(`games/search/${title}`);
}

document.querySelector('.search-game').addEventListener('submit', newFormHandler);
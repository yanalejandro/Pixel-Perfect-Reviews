async function newFormHandler (event) {
    event.preventDefault();

    // get searched game title
    const title = document.querySelector('input[name="game-title"]').value;

    // get and search games currently reviewed
    const response = await fetch(``, {

    });

    if (response.ok) {
        // if game is in db
        // use id from search to bring up game/id route
    }
    else {
        // if game can't be found in db
        const newResponse = await fetch(`https://api.igdb.com/v4/games`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Client-ID': 'pr4r1gm8l2x1xvmfz4tr9ag5qdkf8c',
                'Authorization': 'Bearer tedb7dkatie4n0yz7renxmuvja7rm9'
            },
            body: `search "${title}"; fields name, summary, cover, total_rating;`
        });

        if (newResponse.ok) {
            const searchResults = await newResponse.json();

            // create new game with data collected
            // then use new id to bring up game/id route
        }

        else {
            // game could not be found
        }
    }
}

document.querySelector('.search-game').addEventListener('submit', newFormHandler);
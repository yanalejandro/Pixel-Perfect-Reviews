async function newFormHandler (event) {
    event.preventDefault();

    // get info from selected game (queries will need to be changed to match what is in handlebars)
    // these queries are temporary and will probably be changed to reference data-attributes added in later
    const id = document.querySelector('#id').value;
    const title = document.querySelector('#title').value;
    const summary = document.querySelector('#summary').value;
    const rating = document.querySelector('#rating').value;
    const coverId = document.querySelector('#coverId').value;

    // default image file
    let image_file = `https://st4.depositphotos.com/2381417/26959/i/1600/depositphotos_269592716-stock-photo-thumbnail-images-placeholder-forums-blogs.jpg`;


    // if there is no cover id provided (set equal to 0 when added in handlebar)
    if (coverId == 0) {
        image_file = `https://st4.depositphotos.com/2381417/26959/i/1600/depositphotos_269592716-stock-photo-thumbnail-images-placeholder-forums-blogs.jpg`;
    }
    else {
        // get image file from api
        const newResponse = await fetch(`https://api.igdb.com/v4/covers`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Client-ID': 'pr4r1gm8l2x1xvmfz4tr9ag5qdkf8c',
                'Authorization': 'Bearer tedb7dkatie4n0yz7renxmuvja7rm9',
                'Content-Type': 'text/plain'
            },
            body: `fields alpha_channel,animated,checksum,game,game_localization,height,image_id,url,width;where id=${coverId};`
        });

        if (newResponse.ok) {
            const imageResults = await newResponse.json();

            // test
            console.log(imageResults);

            // may need to double check that this is saving properly
            image_file = imageResults.url;

            // test
            console.log(image_file);
        }
    }

    // create new game
    const response = await fetch(`/api/games`, {
        method: 'POST',
        body: JSON.stringify({
            id,
            title,
            image_file,
            summary,
            rating
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        // go to newly created game page
        document.location.replace(`/games/${id}`);
    } else {
        alert(response.statusText);
    }
}
document.querySelector('.new-review-form').addEventListener('submit', newFormHandler);
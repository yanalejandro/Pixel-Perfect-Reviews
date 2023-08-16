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
        alert(response.statusText);
    }
}


button.addEventListener('click', add);


// class VideoGameWishlist {
//   constructor(connection) {
//       this.db = connection;
//   }

//   addGame(game, callback) {
//       const sql = 'INSERT INTO games (title) VALUES (?)';
//       this.db.query(sql, [game], (err, result) => {
//           if (err) {
//               console.error('Error adding game:', err);
//               return callback(err);
//           }
//           console.log(`${game} added to the video game wishlist.`);
//           callback(null, result);
//       });
//   }

//   removeGame(game, callback) {
//       const sql = 'DELETE FROM games WHERE title = ?';
//       this.db.query(sql, [game], (err, result) => {
//           if (err) {
//               console.error('Error removing game:', err);
//               return callback(err);
//           }
//           if (result.affectedRows === 0) {
//               console.log(`${game} not found in the video game wishlist.`);
//           } else {
//               console.log(`${game} removed from the video game wishlist.`);
//           }
//           callback(null, result);
//       });
//   }

//   viewWishlist(callback) {
//       const sql = 'SELECT title FROM games';
//       this.db.query(sql, (err, rows) => {
//           if (err) {
//               console.error('Error viewing wishlist:', err);
//               return callback(err);
//           }
//           if (rows.length > 0) {
//               console.log("Video Game Wishlist:");
//               rows.forEach(row => {
//                   console.log(`- ${row.title}`);
//               });
//           } else {
//               console.log("Video Game Wishlist is empty.");
//           }
//           callback(null, rows);
//       });
//   }
// }

// // event listener for adding to wishlist, view wishlist and removing from wishlist


async function newFormHandler (event) {
  event.preventDefault();
  const title = document.querySelector('input[name="review-title"]').value;
  const review = document.querySelector('input[name="review"]').value;
  const hour_played = document.querySelector('input[name="hours-played"]').value;

  // may need to change if recommend is not an input type (user should either put yes or no which will become 1 or 0)
  const recommendation = document.querySelector('input[name="recommend"]').value;

  // get game id from end of url
  const game_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  // get current date YYYY-MM-DD
  const d = new Date();
  const date_posted = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();

  // set votes to 0
  const funny = 0;
  const helpful = 0;

  const response = await fetch(`/api/reviews`, {
    method: 'POST',
    body: JSON.stringify({
      date_posted,
      funny,
      helpful,
      hour_played,
      recommendation,
      review,
      title,
      game_id
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
document.querySelector('.new-review-form').addEventListener('submit', newFormHandler);


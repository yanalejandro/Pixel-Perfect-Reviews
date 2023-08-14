async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="game-title"]').value.trim();
  const review_text = document.querySelector('input[name="review-text"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      review_text
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    document.location.replace('/profile/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-review-form').addEventListener('submit', editFormHandler);
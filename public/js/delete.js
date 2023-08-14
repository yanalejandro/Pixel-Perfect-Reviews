async function deleteFormHandler (event) {
  event.preventdefault()
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/reviews/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      review_id: id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.delete-review-btn').addEventListener('click', deleteFormHandler);

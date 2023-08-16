const loginFormHandler = async (event) => {
  event.preventDefault();


  const username = document.querySelector('#username-login').value.trim();
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password && email) {
    const response = await fetch ('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
      });
    if (response.ok) {
      // if user is signed in go to their profile
      document.location.replace('/profile');
    } else {
      alert('Could not log in!');
    }
  }
};

document  
.querySelector('#login-form').addEventListener('submit', loginFormHandler);


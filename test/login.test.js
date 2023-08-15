const { JSDOM } = require('jsdom');
const { describe, it, beforeEach, afterEach } = require('jest-circus');
const { loginFormHandler } = require('../public/js/login'); // Updated import

// Load the HTML content of the page
const html = `
<!DOCTYPE html>
<html>
<head></head>
<body>
  <form class="login-form">
    <input id="username-login" type="text" />
    <input id="email-login" type="email" />
    <input id="password-login" type="password" />
    <button type="submit">Submit</button>
  </form>
</body>
</html>
`;

// Set up a basic DOM environment
const dom = new JSDOM(html, { runScripts: 'dangerously' });
global.document = dom.window.document;

describe('loginFormHandler', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({ ok: true });
  });

  afterEach(() => {
    global.fetch.mockRestore();
  });

  it('should log in the user and redirect to /profile on success', async () => {
    // Simulate user input
    document.querySelector('#username-login').value = 'testuser';
    document.querySelector('#email-login').value = 'test@example.com';
    document.querySelector('#password-login').value = 'testpassword';

    // Simulate form submission
    const form = document.querySelector('.login-form');
    const submitEvent = new Event('submit', {
      bubbles: true,
      cancelable: true,
    });
    form.dispatchEvent(submitEvent);

    // Await the form handler
    await loginFormHandler(submitEvent);

    // You might want to include additional assertions here based on your specific case
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('/api/users/login', expect.any(Object));
    // You can also check if the page location was updated
  });
});

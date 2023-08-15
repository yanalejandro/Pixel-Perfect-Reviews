const { JSDOM } = require('jsdom');
const { describe, it, beforeEach, afterEach } = require('jest-circus');
const { editFormHandler } = require('../public/js/edit'); // Update with the actual path

// Mock the fetch function
global.fetch = require('node-fetch'); // You might need to install node-fetch: npm install node-fetch
jest.spyOn(global, 'fetch').mockResolvedValue({ ok: true });

// Load the HTML content of the page
const html = `
<!DOCTYPE html>
<html>
<head></head>
<body>
  <form class="edit-review-form">
    <input type="text" name="game-title" value="Test Title" />
    <input type="text" name="review-text" value="Test Review Text" />
    <button type="submit">Submit</button>
  </form>
</body>
</html>
`;

// Set up a basic DOM environment
const dom = new JSDOM(html, { runScripts: 'dangerously' });
global.document = dom.window.document;

describe('editFormHandler', () => {
  beforeEach(() => {
    // Replace the location.replace function with a mock
    global.document.location.replace = jest.fn();
  });

  afterEach(() => {
    // Restore the original location.replace function
    global.document.location.replace.mockRestore();
    global.fetch.mockRestore();
    global.window.alert.mockRestore();
  });

  it('should update the review and redirect on success', async () => {
    const form = document.querySelector('.edit-review-form');
    const submitEvent = new global.window.Event('submit', {
      bubbles: true,
      cancelable: true,
    });

    // Simulate user input
    document.querySelector('input[name="game-title"]').value = 'Updated Title';
    document.querySelector('input[name="review-text"]').value = 'Updated Review Text';

    await editFormHandler(submitEvent);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('/api/posts/123', expect.any(Object)); // Replace 123 with actual ID
    expect(global.document.location.replace).toHaveBeenCalledTimes(1);
    expect(global.document.location.replace).toHaveBeenCalledWith('/profile/');
  });

  it('should show an alert on failure', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue(new Error('Failed to update'));
    jest.spyOn(global.window, 'alert').mockImplementation(() => {}); // Mock the alert function

    const form = document.querySelector('.edit-review-form');
    const submitEvent = new global.window.Event('submit', {
      bubbles: true,
      cancelable: true,
    });

    await editFormHandler(submitEvent);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('/api/posts/123', expect.any(Object)); // Replace 123 with actual ID
    expect(global.document.location.replace).not.toHaveBeenCalled();
    expect(global.window.alert).toHaveBeenCalledWith('Failed to update');
  });
});

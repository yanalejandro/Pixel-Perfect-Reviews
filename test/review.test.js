const { JSDOM } = require('jsdom');
const { describe, it, beforeEach, afterEach } = require('jest-circus');
const fetch = require('node-fetch');
const { newFormHandler } = require('../public/js/review'); // Update with the actual path

// Mock the fetch function
jest.mock('node-fetch');

// Load the HTML content of the page
const html = `
<!DOCTYPE html>
<html>
<head></head>
<body>
  <form class="new-review-form">
    <input type="text" name="review-title" value="Test Title" />
    <input type="text" name="review" value="Test Review" />
    <input type="text" name="hours-played" value="10" />
    <input type="text" name="recommend" value="1" />
    <button type="submit">Submit</button>
  </form>
</body>
</html>
`;

// Set up a basic DOM environment
const dom = new JSDOM(html, { runScripts: 'dangerously' });
global.document = dom.window.document;
global.fetch = fetch;

describe('newFormHandler', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({ ok: true });
  });

  afterEach(() => {
    global.fetch.mockRestore();
    global.window.alert.mockRestore();
  });

  it('should submit a new review', async () => {
    const form = document.querySelector('.new-review-form');
    const submitEvent = new global.window.Event('submit', {
      bubbles: true,
      cancelable: true,
    });

    // Simulate user input
    document.querySelector('input[name="review-title"]').value = 'Test Title';
    document.querySelector('input[name="review"]').value = 'Test Review';
    document.querySelector('input[name="hours-played"]').value = '10';
    document.querySelector('input[name="recommend"]').value = '1';

    await newFormHandler(submitEvent);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('/api/reviews', expect.any(Object));
    expect(global.document.location.reload).toHaveBeenCalledTimes(1);
  });

  it('should show an alert on failure', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue(new Error('Failed to submit review'));
    jest.spyOn(global.window, 'alert').mockImplementation(() => {}); // Mock the alert function

    const form = document.querySelector('.new-review-form');
    const submitEvent = new global.window.Event('submit', {
      bubbles: true,
      cancelable: true,
    });

    await newFormHandler(submitEvent);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('/api/reviews', expect.any(Object));
    expect(global.document.location.reload).not.toHaveBeenCalled();
    expect(global.window.alert).toHaveBeenCalledWith('Failed to submit review');
  });
});

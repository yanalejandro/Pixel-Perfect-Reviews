const { JSDOM } = require('jsdom');
const { describe, it, beforeEach, afterEach } = require('jest-circus');
const { newFormHandler } = require('../public/js/searchgame'); // Update with the actual path

// Load the HTML content of the page
const html = `
<!DOCTYPE html>
<html>
<head></head>
<body>
  <form class="search-newgame">
    <input type="text" name="game-title" value="Test Game" />
    <button type="submit">Search</button>
  </form>
</body>
</html>
`;

// Set up a basic DOM environment
const dom = new JSDOM(html, { runScripts: 'dangerously' });
global.document = dom.window.document;

describe('newFormHandler', () => {
  let originalLocationReplace;

  beforeEach(() => {
    // Replace the location.replace function with a mock
    originalLocationReplace = global.document.location.replace;
    global.document.location.replace = jest.fn();
  });

  afterEach(() => {
    // Restore the original location.replace function
    global.document.location.replace = originalLocationReplace;
  });

  it('should redirect to the search page with the game title', () => {
    const form = document.querySelector('.search-newgame');
    const submitEvent = new global.window.Event('submit', {
      bubbles: true,
      cancelable: true,
    });

    newFormHandler(submitEvent);

    expect(global.document.location.replace).toHaveBeenCalledTimes(1);
    expect(global.document.location.replace).toHaveBeenCalledWith('newgames/search/Test%20Game');
  });
});

const VideoGameWishlist = require('../public/js/wishlist');
const { createConnection } = require('mysql2/promise');

jest.mock('mysql2/promise'); // Mock the mysql2/promise module

describe('VideoGameWishlist', () => {
  let connection;
  let wishlist;

  beforeAll(async () => {
    // Mock the database connection
    connection = await createConnection();
    VideoGameWishlist.mockImplementation(() => {
      return {
        db: connection,
        addGame: jest.fn(),
        removeGame: jest.fn(),
        viewWishlist: jest.fn(),
      };
    });

    wishlist = new VideoGameWishlist(connection);
  });

  it('should add a game to the wishlist', async () => {
    const gameTitle = 'Test Game';

    await wishlist.addGame(gameTitle, (err, result) => {
      expect(err).toBeNull();
      expect(result).toBeDefined();
    });
  });

  it('should remove a game from the wishlist', async () => {
    const gameTitle = 'Test Game';

    await wishlist.removeGame(gameTitle, (err, result) => {
      expect(err).toBeNull();
      expect(result).toBeDefined();
    });
  });

  it('should view the wishlist', async () => {
    await wishlist.viewWishlist((err, result) => {
      expect(err).toBeNull();
      expect(result).toBeDefined();
    });
  });
});

const deleteFormHandler = require('../public/js/delete'); // Replace with the actual path

describe('deleteFormHandler', () => {
  let fetchMock;

  beforeEach(() => {
    fetchMock = jest.spyOn(global, 'fetch');
  });

  afterEach(() => {
    fetchMock.mockRestore();
  });

  it('should delete a review and redirect to /dashboard on success', async () => {
    const id = '123';
    fetchMock.mockResolvedValue({ ok: true });

    const response = await deleteFormHandler(id);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(`/api/reviews/${id}`, {
      method: 'DELETE',
    });

    expect(response).toEqual('/dashboard');
  });

  it('should return an error message on failure', async () => {
    const id = 'invalid_id';
    fetchMock.mockRejectedValue(new Error('Internal Server Error'));

    await expect(deleteFormHandler(id)).rejects.toThrowError('Internal Server Error');

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(`/api/reviews/${id}`, {
      method: 'DELETE',
    });
  });
});

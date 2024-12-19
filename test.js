const request = require('supertest');
const app = require('./server'); // Adjust the path to your server file

describe('API Tests', () => {
  it('should return a working message from the test endpoint', async () => {
    const response = await request(app).get('/api/test');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('API is working!');
  });

  it('should analyze the image', async () => {
    const response = await request(app)
      .post('/api/analyze-image')
      .send({ image: 'data:image/jpeg;base64,...' }); // Replace with actual base64 data
    expect(response.status).toBe(200); // Adjust based on expected output
  });
});

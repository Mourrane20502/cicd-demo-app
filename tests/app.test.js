const request = require('supertest');
const app = require('../server');

describe('Tests de l\'application CI/CD Demo', () => {

  test('GET / → doit retourner Hello World', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hello World');
    expect(response.text).toContain('CI/CD Demo');
  });

  test('GET /health → doit retourner status OK', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('OK');
    expect(response.body.version).toBeDefined();
  });

});
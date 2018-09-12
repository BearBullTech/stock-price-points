const request = require('supertest');
const express = require('express');

const app = express();

describe('GET /data', () => {
  it('respond with json', (done) => {
    request(app)
      .get('/user')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

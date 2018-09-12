const request = require('supertest');
const express = require('express');
const { mongoose } = require('../database/index.js');

const app = express();

afterAll(() => {
  mongoose.connection.close();
});

describe('GET success response', () => {
  test(
    'it should respond with 200',
    async (done) => {
      await request(app)
        .get('/data')
        .then((res) => {
          expect(res.statusCode).toBe(200);
          done();
        });
    },
    6000,
  );
});

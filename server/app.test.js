const request = require('supertest');
const express = require('express');
const { mongoose } = require('../database/index.js');

const app = express();

afterAll(){
  mongoose.connection.close()
}

describe('GET success response', () => {
  it('respond with json', (done) => {
    request(app)
      .get('/user')
      .expect(200, done);
  });
});

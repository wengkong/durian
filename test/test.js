var request = require('supertest');
var app = require('../app.js');

describe('GET /users', function() {
  it('should respond with respond with a resource', function(done) {
    request(app).get('/users').expect('respond with a resource', done);
  })
});

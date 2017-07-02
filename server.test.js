'use strict';

const chai = require('chai');
const expect = chai.expect;

chai.use(require('chai-http'));

describe('Web Server', function() {
    let server;
    
    beforeEach(function() {
        delete require.cache[require.resolve('./server.js')];
        server = require('./server.js');
    });
    
    afterEach(function(done) {
        server.close(done);
    });
    
    it('should respond to GET requests on /', async function() {
        const response = await chai.request(server).get('/');
        expect(response).to.have.status(200);
    });
    
    it('should serve an index page', async function() {
        const response = await chai.request(server).get('/');
        expect(response).to.be.html;
    });
});
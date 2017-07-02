'use strict';

const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');

chai.use(require('chai-http'));

describe('File uploading API', function() {
    let server;
    
    beforeEach(function() {
        delete require.cache[require.resolve('../server.js')];
        server = require('../server.js');
    });
    
    afterEach(function(done) {
        server.close(done);
    });
    
    it('should accept POST requests to /api/files', async function() {
        try {
            const response = await chai.request(server).post('/api/files').send('Hello, Server!');
            expect(response).to.have.status(200);
        } catch (err) {
            throw err;
        }
    });
    
    it('should return a JSON', async function() {
        try {
            const response = await chai.request(server).post('/api/files').send('Hello, Server!');
            expect(response).to.be.json;
        } catch (err) {
            throw err;
        }
    });
    
    it('should contain the file size of a file POSTed to /api/files', async function() {
        const testFile = fs.readFileSync('./test/testfile.txt'); //test file with a size of 33 bytes
        try {
            const response = await chai.request(server).post('/api/files').attach('file', testFile, 'testfile.txt');
            expect(response.body.fileSize).to.equal(33);
        } catch (err) {
            throw err;
        }
    });
});
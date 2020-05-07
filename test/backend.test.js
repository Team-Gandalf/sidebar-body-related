const db = require('../database/config.js');
const mongoose = require('mongoose');
const databaseName = 'steamy'
const app = require('../server/index.js');
const supertest = require('supertest');
const request = supertest(app); //testing server
require("regenerator-runtime/runtime");

beforeAll(async () => { const url = `mongodb://127.0.0.1/${databaseName}`; await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }); });

describe('test if server is online', () => { 
    test('should successfully make a request', async (done) => {     
        const res = await request.get('/mainbody/');
        expect(res.statusCode).toBe(200);
        // expect(JSON.stringify(res)).toBe('{}')
        done();  
    });
});

describe('test if related content return valid output', () => { 
    test('should successfully make a request to related content', async (done) => {     
        const res = await request.get('/related-content');
        expect(res.statusCode).toBe(200);
        // expect(res.body).toBe(null);   
        done();  
    });
});


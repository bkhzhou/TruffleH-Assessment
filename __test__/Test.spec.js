const request = require('supertest');
const express = require('express');
const app = express();
const router = require('../routes/items');
app.use(express.json());
app.use('/items', router)

const test = { 
    name: "Alpha Beta",
    address: "123 Good Ave",
    hospital: "Random Hospital",
    service: "01-01-2023",
    amount: 100
};


describe("Testing API endpoints", () => {
    it("POST /items - adding a medical bill", async () => {
        const res = await request(app)
            .post('/items')
            .send(test)
            .expect('Content-Type',/json/)
            .expect(200)
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('name', 'Alpha Beta')
    });

    it("GET /items - return list of medical bills", async () => {
        const res = await request(app).get('/items');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body).toHaveLength(1)
    });
});

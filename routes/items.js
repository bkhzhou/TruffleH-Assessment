const express = require('express')
const router = express.Router();

let items = [];

router.post('/add', (req, res) => {
    const patient = {
        name: req.query.name,
        address: req.query.address,
        hospital: req.query.hospital,
        service: req.query.service,
        amount: req.query.amount
    }
    items.push(patient)
    res.send('Patient added')
});

router.get('/', (req, res) => {
    res.send(items)
});


module.exports = router;
const express = require('express')
const router = express.Router();

let items = [];

router.post('/', (req, res) => {
    const patient = {
        name: req.body.name,
        address: req.body.address,
        hospital: req.body.hospital,
        service: req.body.service,
        amount: req.body.amount
    }
    items.push(patient)
    console.log(req.body)
    res.send(req.body)
});

router.get('/', (req, res) => {
    res.send(items)
});


module.exports = router;

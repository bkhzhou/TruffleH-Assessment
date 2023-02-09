const express = require('express');
const app = express();

app.use(express.json());

app.get('/',  (req, res) => {
    console.log('Successful')
})

const itemsRouter = require('./routes/items');

app.use('/items', itemsRouter)

app.listen(3000, () => console.log('Server listening on port 3000'));
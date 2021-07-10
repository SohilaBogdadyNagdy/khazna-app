
var express = require('express');
const cors = require('cors');
const app = express();
const host = '0.0.0.0';
const port = 80;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Products');
});

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);

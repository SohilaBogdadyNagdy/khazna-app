
var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 80;
const host = '0.0.0.0';

const router = express.Router();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);

const userController = require('./controller/index')

router.post('/signup', userController.signup);
router.post('/login', userController.login);

app.use('/api/auth', router);

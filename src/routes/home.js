const express = require('express'); 
const router = express.Router();

const homecontrollers = require('../app/controllers/Homcontrollers');

router.get('/', homecontrollers.index);
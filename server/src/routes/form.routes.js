'use strict'

const formController = require('../controller/form.controller');
const express = require('express');
const api = express.Router();

api.post('/addForm', formController.addForm);


module.exports = api; 
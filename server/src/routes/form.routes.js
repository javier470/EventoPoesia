'use strict'

const formController = require('../controller/form.controller');
const express = require('express');
const api = express.Router();

api.post('/addForm', formController.addForm);
api.get('/getForms', formController.getForms);

module.exports = api; 
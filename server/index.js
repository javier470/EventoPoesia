'use strict'

const mongoConfig = require('./configs/mongoConfig');
const app = require('./configs/app');
const port = 3000;

mongoConfig.init();


app.listen(port,()=>{
    console.log(`Running in port ${port}`);
});
'use strict'

const mongoose = require('mongoose');

exports.init=()=>{
    const uriMongo = 'mongodb://127.0.0.1:27017/eventoPoesia'
    mongoose.Promise = global.Promise;

    mongoose.connection.on('error', ()=>{
        console.log('Server| Could not connect to Server');
        mongoose.disconnect;
    });
    mongoose.connection.on('connecting', ()=>{
        console.log('Server| Try connecting');
    });
    mongoose.connection.on('connected', ()=>{
        console.log('Server| Connected');
    });
    mongoose.connection.once('open', ()=>{
        console.log('Server| Connected to database');
    });
   mongoose.connection.on('reconnected', ()=>{
       console.log('Server| Reconnected to Server');
   });
   mongoose.connection.on('disconnected', ()=>{
       console.log('Server| Disconnected');
   });

   mongoose.connect(uriMongo, {
       connectTimeoutMS: 3000,
       maxPoolSize: 100,
       useNewUrlParser: true
   }).catch(err=>console.log(err));
}
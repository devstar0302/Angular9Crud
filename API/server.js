const express = require('express');
    path = require('path');
    bodyParser = require('body-parser'),
    cors = require('cors');
    mongoose = require('mongoose');
    config = require('./DB.js');

    const productRoute = require('./routes/product.route');
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/ng8crud',  { useNewUrlParser: true }).then(
        () => {console.log('Database is Connected')},
        err => {console.log('Can not connect to the database' + err)}
    );

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.get('/', (req, res) => {
        res.json({
          message: 'Hello!  There\'s not much to see here :) Please grab one of our front-end samples for use with this sample resource server'
        });
      });
    app.use('/products', productRoute);
  
    let port = process.env.port || 4000;

    const server = app.listen(port, function(){
        console.log('Listening on port ' + port);
    });
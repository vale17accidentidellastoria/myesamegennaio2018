const express = require('express');
const bodyParser = require('body-parser');
const area = require('./area');

const app = express();
app.use(bodyParser.json());


app.get('/:inputs', function(req,res){

    var lato1 = parseInt(req.query.side1);
    var lato2 = parseInt(req.query.side2);
    var result = lato1*lato2;
    //res.send(result.toString());
    var json = JSON.stringify({
        area: result
    });
    res.end(json);
});

app.listen((process.env.PORT || 3000));

console.log('Server running at http://localhost:3000/');
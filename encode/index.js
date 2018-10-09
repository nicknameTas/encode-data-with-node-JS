var app = require('express')();
var bodyParser = require('body-parser');
var encode = require('./encode');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/token', (request, response) => {
     const { text } = request.body;
     var data = encode(text);

     console.log(data);
     response.send(data);
});

app.listen(3000, () => {
    console.log('Running Server Port 3000');
});
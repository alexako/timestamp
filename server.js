var server = require('express')
var app = server()
var moment = require("moment")

app.get('/', function (req, res) {
    res.send('Timestamp Project!');
});

app.get('/:datestring', function(req, res) {
    var myDate;
    if (/^\d{8,}$/.test(req.params.datestring)) {
        myDate = moment(req.params.datestring, "X");
    } else {
        myDate = moment(req.params.datestring, "MMMM D, YYYY");
    }
    
    if (myDate.isValid()) {
        res.json({
            unix: myDate.format("X"),
            natural: myDate.format("MMMM D, YYYY")
        });
    } else {
        res.json({
            unix: null,
            natural: null
        });
    }
})

app.listen(8080, function() {
    console.log('Example app');
});
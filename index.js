
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('<h1>Hello Coder.Tokyo</h1>');  //localhost:3000
});
app.get('/users', function(req, res) {
    res.send('<h1>Hello.Tokyo</h1>');  //localhost:3000/users
});
app.listen(3000, function() {
    console.log('Server listening on port 3000');
});


/*
var express = require('express');
var app = express();

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
    res.render('index', {
        name: 'AAA'
    });
});
app.get('/users', function(req, res) {
    res.render('users/index', {
        users: [
            { id: 1, name: 'Thinh'},
            { id: 2, name: 'Hung'}
        ]
    });
});
app.listen(3000, function() {
    console.log('Server listening on port 3000');
});
*/

/*
var express = require('express');
var app = express();

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

var users = [
    { id: 1, name: 'Thinh' },
    { id: 2, name: 'Hung' }
]

app.get('/', function (req, res) {
    res.render('index', {
        name: 'AAA'
    });
});
app.get('/users', function (req, res) {
    res.render('users/index', {
        users: users
    });
});

app.get('users/search', function(req, res) {
    var q = req.query.q;
    var matchedUsers = users.filter(function(user) {
            return user.name.indexOf(q) !== -1;
    });
    res.render('users/index', {
        users: matchedUsers
    })
})
*/


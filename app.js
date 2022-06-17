var express = require('express');

var mysql = require('mysql2');

var app = express();

var connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bruh@123',
    database: 'test'
})

function uploadLogin(a, b) {
    var sql = "insert into users (user, password) values (a, b)'";
    connect.query(sql, function(err) {
        if (err) throw err;
        console.log('success');
    })
}

function getUsers() {
    var sql = "select name from users";
    connect.query(sql, function(err, result, fields) {
        if (err) throw err;
        console.log('printed names:\n' + result);
    })
}

connect.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
    var sql = "insert into users (user, password) values ('jake', 'fromstatefarm')";
    connect.query(sql, function(err, result) {
        if (err) throw err;
        console.log("record inserted");
    })
})

// connect.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log('Result: ' + result);
    // });

// insert into <table> (var1, var2) values ('val1', 'val2');
var express = require('express');
var router = express.Router();
var db = require('./../core/db/models/task'); // connect db module

router.get('/gettask', function (req, res) {
    db.getTask().then(function (data) {
        res.send(data);
    },
    function (error) {
        res.status(500).end();
    });
});

router.post('/addtask', function (req, res) {
    var task = {
        task_id: Math.random(),
        task_text: req.body.task_text
    };

    db.saveTask(task).then(function (data) {
        res.status(200).end();
    },
    function (error) {
        res.status(500).end();
    });
});

router.put('/edittask/:id', function (req, res) {
    var task = {
        task_id: req.params.id,
        task_text: req.body.task_text
    };

    db.setTask(task, req.params.id).then(function (data) {
        res.status(200).end();
    },
    function (error) {
        res.status(500).end();
    });
});

router.delete('/removetask/:id', function (req, res) {
    db.removeTask(req.params.id).then(function (data) {
        res.status(200).end();
    },
    function (error) {
        res.status(500).end();
    });
});

module.exports = router;
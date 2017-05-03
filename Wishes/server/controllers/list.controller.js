var express = require('express');
var router = express.Router();
var path = require('path');
//    List = require('../models/list');

var lists = [
    {
        name: 'AAA',
        description: 'AAA AAA AAA',
        year: '2017',
        id: 1
    },
    {
        name: 'BBB',
        description: 'BBB BBB BBB',
        year: '2016',
        id: 2
    }
];

function getOne(id, data) {
    var res = null;
    for (var i = 0; i < lists.length; i++) {
        if (lists[i].id === id) {
            if (data) lists[i] = data;
            res = lists[i];
        }
    }
    return res;
}

module.exports = {
    show: () => {    //all
        return lists;
    },
    get: (id) => {    //one
        return getOne(id);
    },
    create: (data) => {
        lists.push(data);
        return data;
    },
    update: (data) => {
        return getOne(id, data);
    }
};


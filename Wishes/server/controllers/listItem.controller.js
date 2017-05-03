var express = require('express');
var router = express.Router();
var path = require('path');
//    ListItem = require('../models/listItem');

var listItems = [
    {
        name: 'aaa',
        description: 'aaa aaa aaa',
        id: 11,
        listId: 1
    },
    {
        name: 'bbb',
        description: 'bbb bbb bbb',
        id: 22,
        listId: 2
    }
];

module.exports =  {
    get: () => {
        return listItems;
    },
    create: (data) => {
        listItems.push(data);
        return data;
    },
    update: (data) => {
        return listItems;
    },
    delete: () => {
        return listItems;
    }

};
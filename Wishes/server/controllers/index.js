var express = require('express');
var router = express.Router();
var path = require('path');
var listCtrl = require('./list.controller');
var listItemCtrl = require('./listItem.controller');

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

router.routeAction = function(socket, action) {
    var data = () => {
        switch (action.type) {
            case 'GET_LIST_DATA':
                return listCtrl.get(action.payload);

            case 'UPDATE_LIST_DATA':
                return listCtrl.update(action.payload);

            case 'GET_LIST_ITEMS':
                return listItemCtrl.get();

            case 'UPDATE_LIST_ITEMS':
                return listItemCtrl.create(action.payload);

            case 'GET_LISTS':
                return listCtrl.show(action.payload);
        }
    }

    socket.emit(action.type.toLowerCase(), {
        data: data(),
        status: 'OK'
    });

}



module.exports = router;
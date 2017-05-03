import { connection } from '../constants/socket';

export function getListItems(data) {
    return (dispatch) => {
        dispatch({
            type: 'GET_LIST_ITEMS_REQUEST',
            payload: data
        })

        connection.socket.emit('action', {
            type: 'GET_LIST_ITEMS',
            payload: data
        });

        connection.socket.on('get_list_items', (response) => {
            dispatch({
                type: 'GET_LIST_ITEMS',
                payload: response.data
            })
        });
    }
}

export function getListItemProgress(data) {
    return (dispatch) => {
        dispatch({
            type: 'GET_LIST_ITEM_PROGRESS_REQUEST',
            payload: data
        })

        connection.socket.emit('action', {
            type: 'GET_LIST_ITEM_PROGRESS',
            payload: data
        });

        connection.socket.on('get_list_items', (response) => {
            dispatch({
                type: 'GET_LIST_ITEM_PROGRESS',
                payload: response.data
            })
        });
    }
}

export function setListItemData(data) {
    return (dispatch) => {
        dispatch({
            type: 'SET_LIST_ITEM_REQUEST',
            payload: data.status
        })

        connection.socket.emit('action', {
            type: 'UPDATE_LIST_ITEMS',
            payload: data
        });

        connection.socket.on('update_list_items', (response) => {
            dispatch({
                type: 'UPDATE_LIST_ITEMS',
                payload: response.data
            })
        });
    }
}
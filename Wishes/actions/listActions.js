import { connection } from '../constants/socket';

export function setListData(data) {
    return (dispatch) => {
        dispatch({
            type: 'SET_NEW_LIST_DATA_REQUEST',
            payload: data
        });
        connection.socket.emit('action', {
            type: 'UPDATE_LIST_DATA',
            payload: data
        });

        connection.socket.on('update_list_data', (response) => {
            dispatch({
                type: 'UPDATE_LIST_DATA',
                payload: response.data
            })
        });
    }
}

export function getListData(data) {
    return (dispatch) => {
        dispatch({
            type: 'GET_LIST_DATA_REQUEST',
            payload: data
        });

        connection.socket.emit('action', {
            type: 'GET_LIST_DATA',
            payload: data  //list id
        });

        connection.socket.on('get_list_data', (response) => {
            dispatch({
                type: 'GET_LIST_DATA',
                payload: response.data
            })
        });
    }
}

export function getLists(data) {
    return (dispatch) => {
        dispatch({
            type: 'GET_LISTS_REQUEST',
            payload: data
        });

        connection.socket.emit('action', {
            type: 'GET_LISTS',
            payload: data
        });

        connection.socket.on('get_lists', (response) => {
            dispatch({
                type: 'GET_LISTS',
                payload: response.data
            })
        });
    }
}


const initialState = {
    data: [],
    status: null,
    buffer: null,
    fetching: false
};

export default function listitemsdata(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_LIST_ITEMS':
            return { ...state, data: state.data.concat(action.payload), fetching: false }

        case 'GET_LIST_ITEMS':
            return { ...state, data: action.payload, fetching: false }

        case 'GET_LIST_ITEMS_REQUEST':
            return { ...state, fetching: true }

        case 'GET_LIST_ITEMS_SUCCESS':
            return { ...state, status: action.payload, fetching: false }

        case 'SET_LIST_ITEM_REQUEST':
            return { ...state, buffer: action.payload, fetching: true }

        case 'SET_LIST_ITEM_SUCCESS':
            return { ...state, status: action.payload, fetching: false }

        default:
            return state;
    }

}

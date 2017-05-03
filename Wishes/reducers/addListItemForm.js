const initialState = {
    data: {
        name: '',
        description: '',
        place: ''
    },
    status: null,
    buffer: null,
    fetching: false
};

export default function listitemsstate(state = initialState, action) {
    switch (action.type) {
        case 'SET_LIST_ITEM_DATA':
            return { ...state, data: action.payload, fetching: false }

        case 'GET_LIST_ITEM_DATA_REQUEST':
            return { ...state, buffer: action.payload, fetching: true }

        case 'GET_LIST_ITEM_DATA_SUCCESS':
            return { ...state, status: action.payload, fetching: false }

        case 'GET_LIST_ITEM_DATA_ERROR':
            return { ...state, status: action.payload, fetching: false }

        default:
            return state;
    }

}

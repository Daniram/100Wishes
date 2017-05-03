const initialState = {
    data: {},
    status: null,
    buffer: null,
    fetching: false
};

export default function listdata(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_LIST_DATA':
            return { ...state, data: action.payload, fetching: false }

        case 'GET_LIST_DATA':
            return { ...state, data: action.payload, fetching: false }

        case 'SET_NEW_LIST_DATA_REQUEST':
            return { ...state, fetching: true }

        case 'GET_LIST_DATA_REQUEST':
            return { ...state, buffer: action.payload, fetching: true }

        default:
            return state;
    }

}

const initialState = {
    data: {
        year: '2017',
        name: '',
        description: ''
    },
    fetching: false
};

export default function liststate(state = initialState, action) {
    switch (action.type) {
        case 'SET_LIST_DATA':
            return { ...state, data: action.payload }

        case 'GET_LIST_DATA_REQUEST':
            return { ...state, data: action.payload, fetching: true }

        case 'GET_LIST_DATA_SUCCESS':
            return { ...state, data: action.payload, fetching: false }

        case 'GET_LIST_DATA_ERROR':
            return { ...state, data: action.payload, fetching: false }

        default:
            return state;
    }

}

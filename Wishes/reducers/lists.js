const initialState = {
    data: {},
    status: null,
    buffer: null,
    fetching: false
};

export default function listdata(state = initialState, action) {
    switch (action.type) {
        case 'GET_LISTS_REQUEST':
            return { ...state, data: action.payload, fetching: false }

        case 'GET_LISTS':
            return { ...state, data: action.payload, fetching: false }

        case 'UPDATE_LISTS':
            return { ...state, data: action.payload, fetching: false }

        default:
            return state;
    }

}

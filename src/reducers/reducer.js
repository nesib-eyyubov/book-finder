const initialState = {
    data: {},
    startIndex: 0
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'STORE':
            return {
                ...state,
                data: action.payload.data,
            }
        case 'NEXT_PAGE':
            return {
                ...state,
                startIndex: ((action.payload.number - 1) * 12)
            }
        default:
            return state;
    }
}

export default reducer;
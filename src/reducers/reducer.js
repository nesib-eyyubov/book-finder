const initialState = {
    data: {},
    text: 'sp',
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STORE':
            return {
                ...state,
                data: action.payload.data,
                text: action.payload.text,
                isLoading: action.payload.isLoading
            }
        default:
            return state;
    }
}

export default reducer;
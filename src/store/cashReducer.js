const defaultState = {
    cash: 0,
    loading: true
}

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD':
            return {...state, cash: state.cash + action.payload}
        case 'REMOVE':
            return {...state, cash: state.cash - + action.payload}
        default:
            return state;
    }
}
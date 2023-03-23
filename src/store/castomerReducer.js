const defaultState = {
    customers: []
}

export const castomerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {...state, cash: state.cash + action.payload}
        case 'REMOVE_USER':
            return {...state, cash: state.cash - + action.payload}
        default:
            return state;
    }
}
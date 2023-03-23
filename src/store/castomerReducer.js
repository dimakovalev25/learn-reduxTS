const defaultState = {
    customers: []
}

export const castomerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return {...state, customers: [...state.customers, action.payload]}
        case 'REMOVE_CUSTOMER':
            return {...state, customers: state.customers.filter(item => item.id !== action.payload )}
        default:
            return state;
    }
}
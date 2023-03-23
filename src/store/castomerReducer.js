const defaultState = {
    customers: []
}


//good practice
const ADD_CUSTOMERS = 'ADD_CUSTOMERS';
const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';



export const castomerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]}
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(item => item.id !== action.payload )}
        default:
            return state;
    }
}


//action creator!
export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const addCustomersAction = (payload) => ({type: ADD_CUSTOMERS, payload});
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload});
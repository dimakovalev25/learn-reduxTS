import {addCustomersAction} from "../store/castomerReducer";

export const fetchCustomers = () => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addCustomersAction(json)))
    }
}
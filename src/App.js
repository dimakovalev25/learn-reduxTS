import {useDispatch, useSelector} from "react-redux";
import {useCallback, useState} from "react";
import {fetchCustomers} from "./asyncAction/customers";

function App() {
    const state = useSelector(state => state.castomerReducer)
    console.log(state)

    const dispatch = useDispatch();
    const cash = useSelector(state => state.cashReducer.cash)
    const customers = useSelector(state => state.castomerReducer.customers)

    const [customer, setCustomer] = useState('');
    const [email, setPhone] = useState('');
    // console.log(customer, email)

    const onButtonRemove = () => {
        dispatch({type: 'REMOVE', payload: 5})
    }
    const onButtonAdd = () => {
        dispatch({type: 'ADD', payload: 5})
    }

    const inputHandlerName = (e) => {
        setCustomer(e.target.value)
    }

    const inputHandlerPhone = (e) => {
        setPhone(e.target.value)
    }

    const onFormSubmit = useCallback((event) => {
    }, []);

    const onCustomerAdd = () => {
        if (email.length > 4 && customer.length > 2) {

            dispatch({type: 'ADD_CUSTOMER', payload: {name: customer, email: email, id: email}})
            setPhone('');
            setCustomer('');


        } else {
            alert('error')
        }
    }

    const onCustomerRemove = (customer) => {
        dispatch({type: 'REMOVE_CUSTOMER', payload: customer.id })
    }

    // const onDownloadCustomers = () => {
    //     // dispatch({type: 'ADD_CUSTOMERS'})
    //     fetchCustomers()
    // }


    return (
        <div className="App">
            <h4>Money: {cash} $</h4>
            <button style={{margin: '5px'}} className="waves-effect waves-light btn" onClick={() => onButtonAdd()}>add
                cash
            </button>
            <button style={{margin: '5px'}} className="waves-effect waves-light btn"
                    onClick={() => onButtonRemove()}>remove cash
            </button>
            <hr/>
            <h4>Customers List:</h4>

            {customers.length > 0 ?
                <div>
                    {customers.map(item =>
                        <div>
                            <span>customer: {item.name} </span>
                            <span> email: {item.email}</span>
                            <button style={{margin: '5px'}} className="waves-effect waves-light btn"
                                    onClick={() => onCustomerRemove(item)}>delete
                            </button>
                            <br/>
                        </div>
                    )}
                </div>
                : <h6>Customers not found!</h6>}

            <button style={{margin: '5px'}} className="waves-effect waves-light btn" onClick={() => onCustomerAdd()}>add
                customer
            </button>

            <button style={{margin: '5px'}} className="waves-effect waves-light btn" onClick={() => dispatch(fetchCustomers())}>download
                customers from server
            </button>


            <form className="col s12" onSubmit={onFormSubmit}>
                <div className="row">
                    <div className="input-field col s4">
                        <i className="material-icons prefix"></i>
                        <input value={customer} onChange={inputHandlerName} style={{margin: 0, padding: 0}} placeholder={'name'}
                               id="icon_prefix" type="text" className="input validate"/>
                    </div>
                    <div className="input-field col s4">
                        <i className="material-icons prefix"></i>
                        <input value={email} onChange={inputHandlerPhone} style={{margin: 0, padding: 0}} placeholder={'email'}
                               id="icon_telephone" type="email" className="input validate"/>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default App;

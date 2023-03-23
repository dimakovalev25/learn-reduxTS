import {useDispatch, useSelector} from "react-redux";
import {useCallback, useState} from "react";
import {castomerReducer} from "./store/castomerReducer";

function App() {
    const state = useSelector(state => state.castomerReducer)
    console.log(state)

    const dispatch = useDispatch();
    const cash = useSelector(state => state.cashReducer.cash)
    const customers = useSelector(state => state.castomerReducer.customers)

    const [customer, setCustomer] = useState('');
    const [phoneCustomer, setPhone] = useState('');
    console.log(customer, phoneCustomer)

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
        if (phoneCustomer.length > 4 && customer.length > 2) {

            dispatch({type: 'ADD_CUSTOMER', payload: {name: customer, phoneCustomer: phoneCustomer, id: phoneCustomer}})
            setPhone('');
            setCustomer('');


        } else {
            alert('error')
        }
    }

    const onCustomerRemove = (customer) => {

        dispatch({type: 'REMOVE_CUSTOMER', payload: customer.id })
    }


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
                        <div onClick={() => onCustomerRemove(item)}>
                            <h6>customer: {item.name}</h6>
                            <h6>phone: {item.phoneCustomer}</h6>
                            <br/>
                        </div>
                    )}
                </div>
                : <h6>Customers not found!</h6>}

            <button style={{margin: '5px'}} className="waves-effect waves-light btn" onClick={() => onCustomerAdd()}>add
                customer
            </button>
            <button style={{margin: '5px'}} className="waves-effect waves-light btn"
                    onClick={() => onCustomerRemove()}>delete customer
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
                        <input value={phoneCustomer} onChange={inputHandlerPhone} style={{margin: 0, padding: 0}} placeholder={'phone'}
                               id="icon_telephone" type="tel" className="input validate"/>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default App;

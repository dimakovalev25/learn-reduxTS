import {useDispatch, useSelector} from "react-redux";
import {useCallback, useState} from "react";

function App() {

    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash)
    const state = useSelector(state => state)

    console.log(state)

    const onButtonRemove = () => {
        dispatch({type: 'REMOVE' , payload: 5})
    }

    const onButtonAdd = () => {
        dispatch({type: 'ADD', payload: 5})
    }

    return (
        <div className="App">
            <h1>redux</h1>
            <h1>{cash}</h1>
            <button onClick={() => onButtonAdd()}>add</button>
            <button onClick={() => onButtonRemove()}>remove</button>
        </div>
    );
}

export default App;

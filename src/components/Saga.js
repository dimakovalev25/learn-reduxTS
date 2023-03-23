import React, {useEffect} from 'react';

const SagaComponent = () => {


    function* generatorFunc() {
        for (let i = 0; i<2; i++ ){
            yield i;
        }
    }

    const iter = generatorFunc();
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());




    return (
        <div>
            <h5>Redux Saga</h5>
        </div>
    );
};

export default SagaComponent;

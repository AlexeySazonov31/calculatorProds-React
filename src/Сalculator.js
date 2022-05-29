import React from "react";
import Products from "./Products";
import TotalCost from "./TotalCost";
import {useState} from 'react';
import reactUuid from 'react-uuid';

function id(){
    return reactUuid();
}

function Calculator(){

    const [ notes, setNotes ] = useState( [] );
    const [ value1, setValue1 ] = useState('');
    const [ value2, setValue2 ] = useState('');
    const [ value3, setValue3 ] = useState('');
    
    function addProduct(){
        const newProduct = {id: id(), name: value1, cost: value2, amount: value3};
        setNotes( [...notes, newProduct] );
        setValue1('');
        setValue2('');
        setValue3('');
    }

    return <div className="parent">
        <h2>Product Calculator</h2>
        <div className="addProduct">
            <input type='text' placeholder="name" value={value1} onChange={ event => setValue1( event.target.value ) }/>
            <input type='number' placeholder="cost" value={value2} onChange={ event => setValue2( event.target.value ) }/>
            <input type='number' placeholder="amount" value={value3} onChange={ event => setValue3( event.target.value ) }/>
            <button onClick={ () => addProduct() }>Add</button>
        </div>
        <div className="products">
            <h2>Products:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Amount</th>
                        <th>Sum</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <Products notes={notes} removeProduct={setNotes}/>
                <TotalCost notes={notes}/>
            </table>
        </div>
    </div>
}

export default Calculator;
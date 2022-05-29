import React from "react";

function Products({notes,removeProduct}){
    const result = notes.map( (item) => {
        return <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.cost}</td>
            <td>{item.amount}</td>
            <td>{item.amount * item.cost}</td>
            <td className="removeTd" onClick={() => removeProduct( notes.filter( note => note.id !== item.id ) )}>remove</td>
        </tr>
    } )

    return <tbody>
        {result}
    </tbody>
}

export default Products;
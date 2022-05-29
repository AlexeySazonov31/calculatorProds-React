import React from "react";

function TotalCost({ notes }){
    let summ = 0;
    for( let obj of notes ){
        summ += (+obj.cost * +obj.amount);
    }

    return <tfoot>
        <tr>
            <td colSpan='3' className="totalCostTd">Total: </td>
            <td className="totalCost">{summ}</td>
        </tr>
    </tfoot>
}

export default TotalCost;
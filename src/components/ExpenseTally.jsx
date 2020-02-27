import React from 'react';



const ExpenseTally = (props) => {
  console.log()
    return (
        <div>
        {

           
            props.expense.map((props) => {

                let arr = Object.values(props)
                const total = arr.reduce((sum, value) => (typeof value == 'number' ? sum + value : sum), 0)
                console.log(total)
                return total
            })}
    </div>
)
}

export default ExpenseTally;

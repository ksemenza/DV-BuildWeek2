import React, {useState} from 'react';
import{addPersonal} from '../redux_components/budgetActions'
import { connect } from 'react-redux';

const ExpenseTally = (props) => {    
    const amt = props.personal
    const userID = localStorage.getItem('user_id')
    const testUserID = 7
 
    const [tallyP, setTallyP] = useState({   

        others: '',
        user_id:testUserID
    })
    

    const arr = Object.values(amt)
    console.log(`tally line 13`)
    console.log(arr)

    let sum = 0

    for(let i = 1; i < 8; i++){
         sum += arr[i]
    }

    setTallyP(sum)

    console.log(`tally line 22`)
    console.log(tallyP)

return(
        <div>
{sum}      
    </div>
)
}


const mapStateToProps = state => {
    console.log(`tally mapProps line 40`)
    console.log(state)

    const {tally} =state
    return { 
        expenseTally:tally    }
}
export default connect(mapStateToProps)(ExpenseTally)




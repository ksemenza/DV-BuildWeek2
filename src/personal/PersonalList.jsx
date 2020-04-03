import React from 'react'
import {connect} from 'react-redux'
import {getPersonal} from '../redux_components/budgetActions'
import Personal from  './Personal'
import ExpenseTally from '../component/ExpenseTally'

const PersonalList = props => {
    console.log(`P List line 8`)
    console.log(props.personal)
    const personalProps = props.personal
    console.log(personalProps)


    return (
        <div className='budget-list-cta'>
         <button onClick={props.getPersonal}>Show Personal Budget</button>

            {!props.personalBudget && <h3>Click for Amount</h3>}
            <div className='budget-box'>
             
        
                {personalProps && personalProps.map(pExpense => {
                    console.log(`list line 24`)
                       console.log(pExpense)
                       
                    return (
                        <Personal  key={pExpense.id} personalExp={pExpense}/>
                      
                       
                    )
                    
                })}

               
            </div>
        </div>
        
    )
}

const mapStateToProps = state => {
    console.log(`p list line 31`)
    console.log(state.personalBudget)
    return {
        personal: state.personalBudget,
        isGettingPersonal: state.isGettingPersonal,
        error:state.error
     
    }
}
export default connect(mapStateToProps, {getPersonal})(PersonalList)
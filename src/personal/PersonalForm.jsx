import React, { useState } from 'react';
import { connect } from 'react-redux';
import{addPersonal} from '../redux_components/budgetActions'
import ExpenseTally from '../component/ExpenseTally';

const PersonalForm = (props) => {

    const userID = localStorage.getItem('user_id')
    const testUserID = 7
    
    const [personal, setPersonal] = useState({   

    transportation: '',
    food: '',
    healthInsurance: '',
    carInsurance: '',
    healthCare: '',
    carLoans: '',
    personalLoans: '',
    other: '',
    user_id:testUserID
})


    const [totalP, setTotalP] = useState({  
    })
    
 

    console.log(`p form line 27`)
    console.log(personal)

    const handleChanges = e => {
        setPersonal({...personal, [e.target.name]: e.target.value})

    }

    console.log(`form line 35`)
    console.log(personal.transportation)

    const handleSubmit = e => {
        e.preventDefault();
        props.addPersonal(personal)

        setPersonal({
    transportation: '',
    food: '',
    healthInsurance: '',
    carInsurance: '',
    healthCare: '',
    carLoans: '',
    personalLoans: '',
    other: '',
    user_id:testUserID
        })
    }


    return (
        <div>
        <h2 className='formTitle'>Personal Expenses</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor='transportation'>Transportation: </label>
            <input
                id='transportation'
                name='transportation'
                type='number'
                onChange={handleChanges}
                value={personal.transportation}
            />
            <br />

            <label htmlFor='food'>Food: </label>
            <input
              id='food'
                name='food'
                type='number'
                onChange={handleChanges}
                value={personal.food}
            />
            <br />

            <label htmlFor='healthInsurance'>Health Insurance: </label>
            <input
                id='healthInsurance'
                name='healthInsurance'
                type='number'
                onChange={handleChanges}
                value={personal.healthInsurance}
            />
            <br />

            <label htmlFor='carInsurance'>Car Insurance: </label>
            <input
                        name='carInsurance'
                type='number'
                onChange={handleChanges}
                value={personal.carInsurance}
            />
            <br />

            <label htmlFor='healthCare'>Health Care: </label>
            <input
                id='healthCare'
                name='healthCare'
                type='number'
                onChange={handleChanges}
                value={personal.healthCare}
            />
            <br />
{/* 
TODO  (fix no total BE values) temporary solution:
*/}

            <label htmlFor='carLoans'>Loans: </label>
            <input
                id='carLoans'
                name='carLoans'
                type='number'
                onChange={handleChanges}
                value={personal.carLoans}
            />
            <br />

            {/* 
TODO  (fix no total BE values) temporary solution: personalLoans === total
*/}

<label htmlFor='personalLoans'>Other: </label>
            <input
                id='personalLoans'
                name='personalLoans'
                type='number'
                onChange={handleChanges}
                value={personal.personalLoans}
            />
            <br />


            <label htmlFor='other'>Total: </label>
            <input
                id='other'
                name='other'
                type='number'
                onChange={handleChanges}
                value={personal.other}
            /> 
            <br />

         
            <button type='submit'>Submit</button>

        </form>
      
        {props.isAddingPersonal && <p>Submitting Personal Expenses...</p>}

  
        </div>
    )


}

const mapStateToProps = state => {
    console.log(`personal form line 140`)
    console.log(state)
    console.log(state.personal)

    return { 
        isAddingPersonal: state.isAddingPersonal
    }
}
export default connect(mapStateToProps, {addPersonal})(PersonalForm)



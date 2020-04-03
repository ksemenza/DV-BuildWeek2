import React, {useState} from 'react'
import {connect} from 'react-redux'
import {deletePersonal, editPersonal} from '../redux_components/budgetActions'
import ExpenseTally from '../component/ExpenseTally'


const Personal = props => {
    const [editing, setEditing] = useState(false)
    const [totalP, setTotalP] = useState([])

    //MOCK USER ID
    const testUserID = 7


    console.log(`pExpAmt Personal line 15`)
    const pExpAmt = props.personalExp
    console.log(pExpAmt)

// 
    console.log(`arr Personal line 20`)
    const arr = Object.values(pExpAmt)
    console.log(arr)
    
    let sum = 0
    for(let i = 1; i < 8; i++){
         sum += arr[i]
         console.log(arr[i])
    }

    console.log(`sum Personal line 30`)
    console.log(sum)

    
    const [expenseEditP, setExpenseEditP] = useState({
        id:props.personalBudget.id,
        transportation: props.personalBudget.transportation,
        food: props.personalBudget.food,
        healthInsurance: props.personalBudget.healthCare,
        carInsurance: props.personalBudget.carInsurance,
        healthCare: props.personalBudget.healthCare,
        carLoans: props.personalBudget.carLoans,
        personalLoans: props.personalBudget.personalLoans,
        other: props.personalBudget.other,
        user_id:testUserID
    },[])


//HANDLE DEL ONCLICK PERSONAL
    const handleDeleteClick = e => {
        console.log(`Personal Card onClick delete Line 23`)
        console.log(props.personalBudget.id)
        props.deletePersonal(props.personalBudget.id)
    }

    const editMode = e => {
        console.log(`Personal Card editMode Line 30`)
        console.log(props.personalBudget.id)
        setEditing(!editing)
    }

    const submitEdit = e => {
        e.preventDefault()
        console.log(`submitEdit expenseEditP  Line 64`)
        console.log(expenseEditP)
        const pExpSend = {...expenseEditP, id: props.personalBudget.id}

        console.log(`submitEdit pExpSend  Line 67`)
        console.log(pExpSend)
        props.expenseEditP(pExpSend)
        setEditing(false)
    }


    const handleChanges = e => {
        setExpenseEditP({...expenseEditP, [e.EventTarget.name]: e.target.value})
    }

    return (
        <div className='personal-card-cta'>
            <h2>Personal</h2>
            <p>Transportation: {props.personalExp.transportation}</p>
            <p>Food: {props.personalExp.food}</p>
            <p>Health Insurance: {props.personalExp.healthInsurance}</p>
            <p>Car Insurance: {props.personalExp.carInsurance}</p>
            <p>Health Car: {props.personalExp.healthCare}</p>
            <p>Car Loans: {props.personalExp.carLoans}</p>
            <p>Personal Loans: {props.personalExp.personalLoans}</p>
            <p>Other: {props.personalExp.other}</p>
            <p>Total: {sum}</p>
        </div>
    )

}

const mapStateToProps = state => {
    console.log(`personal 92`)
    console.log(state)

    return state
}

export default connect(mapStateToProps, {deletePersonal, editPersonal})(Personal)
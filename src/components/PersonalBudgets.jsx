import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userFetch } from '../actions';
import data from '../assets/data'
import Dashboard from './Dashboard'

const PersonalBudgets = () => {
    
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userFetch())
    }, [dispatch])

    console.log("State from PersonalBudget line 16: ", state);

    // console.log(props)
    return(
        <div>
            <h4>{state.data.user.username}</h4>
             <ul>
                 <li>Transportation: {state.data.personalBudget[0].transportation}</li>
                 <li>Food: {state.data.personalBudget[0].food}</li>
                 <li>Health Insurance: {state.data.personalBudget[0].healthInsurance}</li>
                 <li>Car Insurance{state.data.personalBudget[0].carInsurance}</li>
                 <li>Car Loans: {state.data.personalBudget[0].carLoans}</li>
                 <li>Health Care: {state.data.personalBudget[0].healthCare}</li>
                 <li>PersonalLoans: {state.data.personalBudget[0].personalLoans}</li>
                 <li>Other: {state.data.personalBudget[0].other}</li>
             </ul>
        </div>
    )
}

export default PersonalBudgets
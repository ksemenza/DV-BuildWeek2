import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { withFormik, Form, Field } from 'formik'
import axios from 'axios'
import axiosAuth from '../utils/axiosAuth'
import * as Yup from 'yup';
import { BorderWrap, TitleHeader, FormWarp, FieldCta, ErrorPrompt } from '../assets/Styles'
import Dashboard from './Dashboard';
import ExpenseTally from '../component/ExpenseTally'



const PersonalForm = ({ values, errors, touched, status }, props) => {
    const [expenses, setExpenses] = useState([]);
    const { push } = useHistory();
    useEffect(() => {
        status && setExpenses(personalExpenses => [...personalExpenses, status]);
    }, [status]);
    return (
        <div>
               
            <BorderWrap>
                <TitleHeader>Personal Expenses</TitleHeader>
                <Form>
                <FormWarp >
                        <FieldCta>
                            <label htmlFor='transportation' style={{ color: `black` }}>
                                <Field id='transportation' value={values.transportation}  type='number' name='transportation' placeholder='Transporation' style={{ padding: `5px` }} />
                                {touched.transportation && errors.transportation && (<ErrorPrompt>{errors.transportation}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='food'>
                                <Field id='food' value={values.food} type='number' name='food' placeholder='Food' style={{ padding: `5px` }} />
                                {/* {touched.food && errors.food && (<ErrorPrompt>{errors.food}</ErrorPrompt>)} */}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='healthInsurance'>
                                <Field id='healthInsurance' value={values.healthInsurance} type='number' name='healthInsurance' placeholder='Health Insurance' style={{ padding: `5px` }} />
                                {touched.healthInsurance && errors.healthInsurance && (<ErrorPrompt>{errors.healthInsurance}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='carInsurance'>
                                <Field id='carInsurance' value={values.carInsurance} type='number' name='carInsurance' placeholder='Car Insurance' style={{ padding: `5px` }} />
                                {touched.carInsurance && errors.carInsurance && (<ErrorPrompt>{errors.carInsurance}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='healthCare'>
                                <Field id='healthCare' value={values.healthCare} type='number' name='healthCare' placeholder='Health Care' style={{ padding: `5px` }} />
                                {touched.healthCare && errors.healthCare && (<ErrorPrompt>{errors.healthCare}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='carLoans'>
                                <Field id='carLoans' value={values.carLoans} type='number' name='carLoans' placeholder='Car Loans' style={{ padding: `5px` }} />
                                {touched.carLoans && errors.carLoans && (<ErrorPrompt>{errors.carLoans}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='personalLoans'>
                                <Field id='personalLoans' value={values.otherExpense} type='number' name='personalLoans' placeholder='Personal Loan' style={{ padding: `5px` }} />
                                {touched.otherExpense && errors.otherExpense && (<ErrorPrompt>{errors.otherExpense}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='other'>
                                <Field id='other' value={values.other} type='number' name='other' placeholder='Other Expenses' style={{ padding: `5px` }} />
                                {touched.otherExpense && errors.otherExpense && (<ErrorPrompt>{errors.otherExpense}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <ExpenseTally expense={expenses}/>
                   
                    </FormWarp>
                    <button type='submit'>Next</button>
                
                </Form>

             
          
            </BorderWrap>
          

        </div>
    )
};

const FormikPersonalForm = withFormik({


    mapPropsToValues({ transportation, food, healthInsurance, carInsurance, healthCare, carLoans, personalLoans, other }) {
        return {
            transportation: transportation || '',
            food: food || '',
            healthInsurance: healthInsurance || '',
            carInsurance: carInsurance || '',
            healthCare: healthCare || '',
            carLoans: carLoans || '',
            personalLoans: personalLoans || '',
            other: other || '',
            user_id: 7
   
        };
    },
    /*Yup validating user input and error prompt*/

    validationSchema: Yup.object().shape({
        transportation: Yup.string().min(0, 'Amount is to small')
            .max(50, 'Amount is to large')
            .required('Amount Required')

    }),

    handleSubmit(expenses, { setStatus, resetForm }) {
        axiosAuth.post(`/personal`, expenses)
            .then(res => {
             console.log(res.data)
                setStatus(res.data);
                resetForm();
            })
            .catch(err => console.log(err.response));
    }
}, [])(PersonalForm);

export default FormikPersonalForm;
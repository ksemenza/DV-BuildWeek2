import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { withFormik, Form, Field } from 'formik'
import axios from 'axios'
import * as Yup from 'yup';
import ExpenseTally from './ExpenseTally'
import { BorderWrap,  FormWarp, FieldCta, ErrorPrompt } from '../assets/Styles'


const MoveForm = ({ values, errors, touched, status }, props) => {

    const [expenses, setExpenses] = useState([]);
    const { push } = useHistory();

    useEffect(() => {
        status && setExpenses(expense => [...expense, status]);
    }, [status]);
    return (
        <div>
               
            <BorderWrap>
                <div>
                <h2>Moving Expenses</h2>
                </div>
                <div><h3> <ExpenseTally expense={expenses}/></h3></div>
                <Form>
                    <FormWarp>
                        <FieldCta>
                            <label htmlFor='hotelCosts' style={{ color: `black` }}>
                                <Field id='hotelCosts' value={values.hotelCosts} type='number' name='hotelCosts' placeholder='Hotel Costs' style={{ padding: `5px` }} />
                                {touched.hotelCosts && errors.hotelCosts && (<ErrorPrompt>{errors.hotelCosts}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='rentalDeposit'>
                                <Field id='rentalDeposit' value={values.rentalDeposit} type='number' name='rentalDeposit' placeholder='Rental Deposit' style={{ padding: `5px` }} />
                                {/* {touched.rentalDeposit && errors.rentalDeposit && (<ErrorPrompt>{errors.rentalDeposit}</ErrorPrompt>)} */}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='utilities'>
                                <Field id='utilities' value={values.utilities} type='number' name='utilities' placeholder='Utility Setup' style={{ padding: `5px` }} />
                                {touched.utilities && errors.utilities && (<ErrorPrompt>{errors.utilities}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='storage'>
                                <Field id='storage' value={values.storage} type='number' name='storage' placeholder='Car Insurance' style={{ padding: `5px` }} />
                                {touched.storage && errors.storage && (<ErrorPrompt>{errors.storage}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='carRental'>
                                <Field id='carRental' value={values.carRental} type='number' name='carRental' placeholder='Health Insurance' style={{ padding: `5px` }} />
                                {touched.carRental && errors.carRental && (<ErrorPrompt>{errors.carRental}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='gas'>
                                <Field id='gas' value={values.gas} type='number' name='gas' placeholder='Health Insurance' style={{ padding: `5px` }} />
                                {touched.gas && errors.gas && (<ErrorPrompt>{errors.gas}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='cellphoneFees '>
                                <Field id='cellphoneFees ' value={values.cellphoneFees } type='number' name='cellphoneFees ' placeholder='Health Insurance' style={{ padding: `5px` }} />
                                {touched.cellphoneFees  && errors.cellphoneFees  && (<ErrorPrompt>{errors.cellphoneFees }</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='movingTruck'>
                                <Field id='movingTruck' value={values.movingTruck} type='number' name='movingTruck' placeholder='Health Insurance' style={{ padding: `5px` }} />
                                {touched.movingTruck && errors.movingTruck && (<ErrorPrompt>{errors.movingTruck}</ErrorPrompt>)}
                            </label>
                        </FieldCta>

                        <FieldCta>
                            <label htmlFor='incomeLoss '>
                                <Field id='incomeLoss ' value={values.incomeLoss } type='number' name='incomeLoss ' placeholder='Income Loss ' style={{ padding: `5px` }} />
                                {touched.incomeLoss  && errors.incomeLoss  && (<ErrorPrompt>{errors.incomeLoss }</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='other'>
                                <Field id='other' value={values.other} type='number' name='other' placeholder='Other Expenses' style={{ padding: `5px` }} />
                                {touched.other && errors.other && (<ErrorPrompt>{errors.other}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        {/* FIELD TEMPLATE
                        <FieldCta>
                            <label htmlFor=''></label>
                            <Field type='text' name='' placeholder='' style={{ padding: `5px` }} />
                            {touched. && errors. && (<ErrorPrompt>{errors.}</ErrorPrompt>)}
                        </FieldCta> */}
                    </FormWarp>
                    <button type='submit' >Next</button>
             
                </Form>
        
            </BorderWrap>
           

        </div>
    )
};

const FormikPersonalForm = withFormik({
    mapPropsToValues({ id, hotelCosts, rentalDeposit, utilities, storage, rent, carRental , gas,
         cellphoneFees,movingTruck, mentalHealth, incomeLoss, other,user_id }) {
        return {
            
         
            hotelCosts: hotelCosts || '',
            rentalDeposit: rentalDeposit || '',
            utilities: utilities || '',
            storage: storage || '',
            rent: rent || '',
            carRental: carRental || '',
            gas: gas || '',
            cellphoneFees: cellphoneFees || '',
            movingTruck: movingTruck || '',
            mentalHealth: mentalHealth || '',
            incomeLoss: incomeLoss || '' ,
            other: other || '',
            user_id: ''
        };
    },
    /*Yup validating user input and error prompt*/

    validationSchema: Yup.object().shape({
        hotelCosts: Yup.string().min(0, 'Amount is to small')
            .max(50, 'Amount is to large')
            .required('Amount Required')

    }),

    handleSubmit(expenses, { setStatus, resetForm }) {
        axios.post('https://reqres.in/api/users', expenses)
            .then(res => {
                console.log(res.data);
                setStatus(res.data);
                resetForm();
            })
            .catch(err => console.log(err.response));
    }
}, [])(MoveForm);

export default FormikPersonalForm;
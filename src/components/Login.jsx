import React, { useState } from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ values, errors, touched, status }) => {
  const [message, setMessage] = useState([]);

  const { push } = useHistory();

  //Submits ----

  const handleSubmit = (values, { setStatus, resetForm }) => {
    axios.post(`https://dvscalculator.herokuapp.com/auth/login
    `, values)

      .then(res => {
        setMessage([...message, values]);
        setStatus(res.data);
        resetForm();
        console.log("Login.jsx Line 23, token", res.data.token)
        localStorage.setItem("token", res.data.token);
        alert(res.data.message)
      })
      .catch(err => console.log(err))
      .finally();
  };

  // Checking Validations !! ----
  const SignupSchema = () =>
    Yup.object().shape({
      username: Yup.string().min(3, `Name Too Short!`),

      password: Yup.string().required(`Password required`)
    });

  // REturn STARTS HERE  - -------------
  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{ username: ``, password: `` }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}>
        {({ values }) => {
          return (
            <Form className='formbody'>
              <Field
                className='formFields'
                name='username'
                type='text'
                placeholder='Username'
              />
              <ErrorMessage name='name' component='div' className='red' />
              <Field
                className='formFields'
                name='password'
                type='password'
                placeholder='Password'
              />
              <ErrorMessage name='password' component='div' className='red' />
              &nbsp;
              <input type='submit' />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
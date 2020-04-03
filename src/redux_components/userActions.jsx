

import axios from 'axios'

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

const LOGIN_API = `https://dvscalculator.herokuapp.com/auth/login`
const REGISTER_API = `https://dvscalculator.herokuapp.com/auth/register`

//REGISTER USER START
export const registerUser = (newUser, history) => dispatch => {
    console.log(`action register`)
    dispatch({ type: REGISTER_REQUEST });
    axios
      .post(REGISTER_API, newUser)
      .then(res => {
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        localStorage.setItem('token', res.data.token)
        history.push("/dashboard");
      })
      .catch(err => {
        dispatch({ type: REGISTER_FAILURE, payload:err.data });
      });
  };
  
  //LOGIN USER START
  export const loginUser = (user, history) => dispatch => {
  
    dispatch({ type: LOGIN_REQUEST });
    axios
      .post(LOGIN_API, user)
      .then(res => {
        localStorage.setItem("token", res.data.user);
        localStorage.setItem('userID', res.data.user.user_id)
  
        console.log(res.data)
        dispatch({type:LOGIN_SUCCESS, payload: res.data})
        history.push('/dashboard');
        // console.log(res.data.user.user_id)
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAILURE, payload: err.data });
      });
  };
  
  //LOGOUT USER START
  export const logoutUser = () => dispatch => {
    dispatch({ type: LOGOUT_REQUEST });
    localStorage.removeItem("token");
    const tokenCheck = localStorage.getItem("token");
    if (tokenCheck === null) {
      dispatch({ type: LOGOUT_SUCCESS });
    } else {
      dispatch({ type: LOGOUT_FAILURE });
    }
  };
  
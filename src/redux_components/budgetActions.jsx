import axiosAuth from '../utils/axiosAuth'

//ADD PERSONAL EXPORTS
export const ADD_PERSONAL_REQUEST= 'ADD_PERSONAL_REQUEST'
export const ADD_PERSONAL_SUCCESS = 'ADD_PERSONAL_SUCCESS'
export const ADD_PERSONAL_FAILURE = 'ADD_PERSONAL_FAILURE'
//DEL PERSONAL EXPORTS
export const DELETE_PERSONAL_REQUEST= 'DELETE_PERSONAL_REQUEST'
export const DELETE_PERSONAL_SUCCESS = 'DELETE_PERSONAL_SUCCESS'
export const DELETE_PERSONAL_FAILURE = 'DELETE_PERSONAL_FAILURE'
//GET PERSONAL EXPORTS
export const GET_PERSONAL_REQUEST= 'GET_PERSONAL_REQUEST'
export const GET_PERSONAL_SUCCESS = 'GET_PERSONAL_SUCCESS'
export const GET_PERSONAL_FAILURE = 'GET_PERSONAL_FAILURE'
//EDIT PERSONAL EXPORTS
export const EDIT_PERSONAL_REQUEST= 'GET_PERSONAL_REQUEST'
export const EDIT_PERSONAL_SUCCESS = 'GET_PERSONAL_SUCCESS'
export const EDIT_PERSONAL_FAILURE = 'GET_PERSONAL_FAILURE'
//ADD RELOCATE EXPORTS
export const ADD_RELOCATE_REQUEST= 'ADD_RELOCATE_REQUEST'
export const ADD_RELOCATE_SUCCESS = 'ADD_RELOCATE_SUCCESS'
export const ADD_RELOCATE_FAILURE = 'ADD_RELOCATE_FAILURE'
//DEL RELOCATE EXPORTS
export const DELETE_RELOCATE_REQUEST= 'DELETE_RELOCATE_REQUEST'
export const DELETE_RELOCATE_SUCCESS = 'DELETE_RELOCATE_SUCCESS'
export const DELETE_RELOCATE_FAILURE = 'DELETE_RELOCATE_FAILURE'
//GET RELOCATE EXPORTS
export const GET_RELOCATE_REQUEST= 'GET_RELOCATE_REQUEST'
export const GET_RELOCATE_SUCCESS = 'GET_RELOCATE_SUCCESS'
export const GET_RELOCATE_FAILURE = 'GET_RELOCATE_FAILURE'
//EDIT RELOCATE EXPORTS
export const EDIT_RELOCATE_REQUEST= 'GET_RELOCATE_REQUEST'
export const EDIT_RELOCATE_SUCCESS = 'GET_RELOCATE_SUCCESS'
export const EDIT_RELOCATE_FAILURE = 'GET_RELOCATE_FAILURE'

//ADD PERSONAL
const userID = localStorage.getItem('user_id')
const P_ID = null
const R_ID = null

//PERSONAL  
/* GET ~ POST*/
const PERSONAL_API =`/personal`
/* PUT ~ DEL */ 
const PERSONAL_ID_API =`personal/${P_ID}`

//RELOCATE  
/* GET ~ POST*/
const RELOCATE_API =`/relocate`
/* PUT ~ DEL */ 
const RELOCATE_ID_API =`users/${userID}/relocate/${R_ID}`


export const addPersonal = (personalBudget) => dispatch => {
    dispatch({type: ADD_PERSONAL_REQUEST})
    axiosAuth().post(`${PERSONAL_API}`, personalBudget)
    .then (res => {
        console.log(`ADD personal line 59`)
        console.log(res.data)
        dispatch({type: ADD_PERSONAL_SUCCESS, payload: res.data})
    })  
        .catch(err => {
            dispatch({type: ADD_PERSONAL_FAILURE, payload: err.data})
            console.log(err)
        })
   
}
//GET PERSONAL
export const getPersonal = (personalBudget) =>  dispatch => {
  dispatch({type:GET_PERSONAL_REQUEST}, personalBudget)
  axiosAuth().get(`${PERSONAL_API}`)
  .then(res => {
    console.log(`GET Personal line 73`)
    console.log(res.data.personalBudget)
    dispatch({type:GET_PERSONAL_SUCCESS, payload: res.data.personalBudget})
  })
    .catch(err => {
      console.log(err)
      dispatch({type:GET_PERSONAL_FAILURE, payload:err.data})
    })
 
}
//DEL PERSONAL
export const deletePersonal = personalBudget =>  dispatch => {
  dispatch({type:DELETE_PERSONAL_REQUEST})
  axiosAuth().delete(`${PERSONAL_API}/${personalBudget.id}`, {

  })
  .then(res => {
    console.log(res)
    dispatch({type:DELETE_PERSONAL_SUCCESS, payload: res.data})

    .catch(err => {
      console.log(err)
      dispatch({type:DELETE_PERSONAL_FAILURE, payload: err.data})
    })
  })
}

//EDIT PERSONAL
export const editPersonal = personal =>  dispatch => {
  dispatch({type:EDIT_PERSONAL_REQUEST})
  axiosAuth().put(`${PERSONAL_API}/${personal.id}`, personal)
  .then(res => {
      console.log(`EDIT personal line 105`)
    console.log(res.data)
    dispatch({type:EDIT_PERSONAL_SUCCESS, payload: res.data})
    .catch(err => {
      console.log(err)
      dispatch({type:EDIT_PERSONAL_FAILURE, payload:err.data})
    })
  })
}


//ADD RELOCATE
export const addRelocate = (relocate) => dispatch => {

    dispatch({type: ADD_RELOCATE_REQUEST})
    console.log(relocate)
    axiosAuth().post(`${RELOCATE_API}`, relocate)
    .then (res => {
        console.log(res)
        console.log(relocate)
        dispatch({type: ADD_RELOCATE_SUCCESS, payload: res.data})
        .catch(err => {
            console.log(err)
        })
    })
}

//GET RELOCATE
export const getRelocate = (relocate) =>  dispatch => {
  dispatch({type:GET_RELOCATE_REQUEST})
  axiosAuth().get(`${RELOCATE_API}`, {
    params:relocate,
  })
  .then(res => {
    console.log(res)
    dispatch({type:GET_RELOCATE_SUCCESS, payload: res.data})

    .catch(err => {
      console.log(err)
      dispatch({type:GET_RELOCATE_FAILURE})
    })
  })
}

//DEL RELOCATE
export const deleteRelocate = () =>  dispatch => {
  dispatch({type:DELETE_RELOCATE_REQUEST})
  axiosAuth().delete(`${RELOCATE_ID_API}`, {

  })
  .then(res => {
    console.log(res)
    dispatch({type:DELETE_RELOCATE_SUCCESS, payload: res.data})

    .catch(err => {
      console.log(err)
      dispatch({type:DELETE_RELOCATE_FAILURE})
    })
  })
}

//EDIT RELOCATE
export const editRelocate = (searchParms) =>  dispatch => {
  dispatch({type:EDIT_RELOCATE_REQUEST})
  axiosAuth().put(`${RELOCATE_ID_API}`, {
    params:searchParms,
  })
  .then(res => {
    console.log(res)
    dispatch({type:GET_RELOCATE_SUCCESS, payload: res.data})

    .catch(err => {
      console.log(err)
      dispatch({type:GET_RELOCATE_FAILURE})
    })
  })
}



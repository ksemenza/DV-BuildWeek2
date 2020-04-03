
    import {
    ADD_PERSONAL_REQUEST,
    ADD_PERSONAL_SUCCESS,
    ADD_PERSONAL_FAILURE,
    
    GET_PERSONAL_REQUEST,
    GET_PERSONAL_SUCCESS,
    GET_PERSONAL_FAILURE,

    DELETE_PERSONAL_REQUEST,
    DELETE_PERSONAL_SUCCESS,
    DELETE_PERSONAL_FAILURE,

    EDIT_PERSONAL_REQUEST,
    EDIT_PERSONAL_SUCCESS,
    EDIT_PERSONAL_FAILURE,

    ADD_RELOCATE_REQUEST,
    ADD_RELOCATE_SUCCESS,
    ADD_RELOCATE_FAILURE,
    
    GET_RELOCATE_REQUEST,
    GET_RELOCATE_SUCCESS,
    GET_RELOCATE_FAILURE,

    DELETE_RELOCATE_REQUEST,
    DELETE_RELOCATE_SUCCESS,
    DELETE_RELOCATE_FAILURE,

    EDIT_RELOCATE_REQUEST,
    EDIT_RELOCATE_SUCCESS,
    EDIT_RELOCATE_FAILURE
    } from '../redux_components/budgetActions'

    const userID = localStorage.getItem('user_id')

const initialState = {
    user_id:userID,
    personalBudget:[],
    relocateBudget:[],
    isLoggedIn:true,
    isRegister:true,
    isAddingPersonal:false,
    isAddingRelocate:false,
    isGettingPersonal:false,
    isGettingRelocate:false,
    isEditingPersonal:false,
    isEditingRelocate:false,
    isDeletingPersonal:false,
    isDeletingRelocate:false

}

    const budgetReducer = (state = initialState, action) => {
        console.log(`budget reducer line 22`)
        console.log(state, action)

        switch(action.type) {
//TODO ADD PERSONAL
            case ADD_PERSONAL_REQUEST: 
            console.log(state, action)
                return{
                    ...state,
                  isAddingPersonal:true
                };
            case ADD_PERSONAL_SUCCESS: 
            console.log(state, action)
                return {
                    ...state,
                    isAddingPersonal:false,
                    payload:action.payload,
                    error:'ADD PERSONAL ERR'
                }
            case ADD_PERSONAL_FAILURE:
                console.log(state, action)
                return {
                    ...state,
                    isAddingPersonal:false,
                    error:'FAILURE TO ADD PERSONAL'
                }
//TODO GET PERSONAL
            case GET_PERSONAL_REQUEST: 
            console.log(state, action)
                return{
                    ...state,
                  isGettingPersonal:true,
               
                };
            case GET_PERSONAL_SUCCESS: 
                console.log(state, action)
                    return {
                        ...state,
                        personalBudget:action.payload,
                        isGettingPersonal:false,
                        error: 'GET PERSONAL SUCCESS ERROR'
                    }
                case GET_PERSONAL_FAILURE:
                    console.log(state, action)
                    return {
                        ...state,
                        error:action.payload,
                        isGettingPersonal:false,
            
                    }
// TODO EDIT PERSONAL       
                    case EDIT_PERSONAL_REQUEST:
                        return{
                       ...state,
                       isEditingPersonal: true,
                       error:action.payload
                       }

                       case EDIT_PERSONAL_SUCCESS:
                        return {
                       ...state,
                       isEditingPersonal:false,
                       payload:action.payload,
                       error:'EDIT PERSONAL SUCCESS ERROR',
                        }
                       case EDIT_PERSONAL_FAILURE:
                       return{
                       ...state,
                       isEditingPersonal:false,
                       error: action.payload,
            
                    }
//TODO DEL PERSONAL
                       case DELETE_PERSONAL_REQUEST:
                       return {
                       ...state,
                       isDeletingPersonal: true
                       }
                       case DELETE_PERSONAL_SUCCESS:
                       return{
                       ...state,
                       isDeletingPersonal:false,
                       payload:action.payload,
                       error:'DEL PERSONAL SUCCESS ERROR'
                       }
                       case DELETE_PERSONAL_FAILURE:
                       return{
                       ...state,
                       isDeletingPersonal:false,
                       error:action.payload
                       }

//TODO ADD RELOCATE
                       case ADD_RELOCATE_REQUEST: 
                       console.log(state, action)
                           return{
                               ...state,
                             isAddingRelocate:true
                           };
                       case ADD_RELOCATE_SUCCESS: 
                       console.log(state, action)
                           return {
                               ...state,
                               isAddingRelocate:false,
                               payload:action.payload,
                               error:'ADD RELOCATE ERR'
                           }
                       case ADD_RELOCATE_FAILURE:
                           console.log(state, action)
                           return {
                               ...state,
                               isAddingRelocate:false,
                               payload:'FAILURE TO ADD RELOCATE'
                           }
//TODO GET RELOCATE
                       case GET_RELOCATE_REQUEST: 
                       console.log(state, action)
                           return{
                               ...state,
                             isGettingRelocate:true,
                             error:'GET RELOCATE REQ ERROR'
                           };
                       case GET_RELOCATE_SUCCESS: 
                           console.log(state, action)
                               return {
                                   ...state,
                                   payload:action.payload,
                                   isGettingRelocate:false,
                                   error: 'GET RELOCATE SUCCESS ERROR'
                               }
                           case GET_RELOCATE_FAILURE:
                               console.log(state, action)
                               return {
                                   ...state,
                                   error:action.payload,
                                   isGettingRelocate:false,
                                   error:`GET RELOCATE FAIL ERROR`
                               }
//TODO EDIT RELOCATE       
                               case EDIT_RELOCATE_REQUEST:
                                   return{
                                  ...state,
                                  isEditingRelocate: true,
                                  error:'EDIT RELOCATE REQ ERROR'
                                  }
                       
                                  case EDIT_RELOCATE_SUCCESS:
                                   return {
                                  ...state,
                                  isEditingRelocate:false,
                                  payload:action.payload,
                                  error:'EDIT RELOCATE SUCCESS ERROR',
                                   }
                                  case EDIT_RELOCATE_FAILURE:
                                  return{
                                  ...state,
                                  isEditingRelocate:false,
                                  error: action.payload,
                               }
                               
//TODO DEL RELOCATE
                                  case DELETE_RELOCATE_REQUEST:
                                  return {
                                  ...state,
                                  isDeletingRelocate: true,
                                  error:'EDIT RELOCATE REQ ERROR'
                                  }
                                  case DELETE_RELOCATE_SUCCESS:
                                  return{
                                  ...state,
                                  isDeletingRelocate:false,
                                  payload:action.payload,
                                  error:'DEL RELOCATE SUCCESS ERROR'
                                  }
                                  case DELETE_RELOCATE_FAILURE:
                                  return{
                                  ...state,
                                  isDeletingRelocate:false,
                                  error:action.payload
                                  }
                           default:
                           return state
        }
    }

    export default budgetReducer
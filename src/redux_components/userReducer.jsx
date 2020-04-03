import {  
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,

    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE
} from '../redux_components/userActions'


const initialState = {
    username:'',
    password:null,
    pBudget:[],
    rBudget:[],
    isLoggedIn:false,
    isLoggingIn:false,
    isRegistered:false,
    isRegistering:false,
    isLoggingOut:false,
    isLoggedOut:false
}

const userReducer = (state = initialState, action) => {
    console.log(state, action)

//REGISTER REQ
    switch(action.type) {
        case REGISTER_REQUEST:
            console.log(state, action)
            return {
                ...state,
                isRegistered:false,
                isRegistering:true,
                error:'REG REQ ERR'
            }

//REGISTER SUCCESS
            case REGISTER_SUCCESS:
                console.log(state, action)
                return {
                    ...state,
                    isLoggedIn:false,
                    isRegistered:true,
                    isRegistering:false,
                    user_id:action.payload.user.user_id,
                    username: action.payload.user.username,
                    pBudget:[action.payload.pBudget],
                    rBudget:[action.payload.rBudget],
                    error:`REG SUCCESS ERR`
                }

//REGISTER FAILURE 
                case REGISTER_FAILURE:
                    return {
                        ...state,
                        isRegistered:false,
                        error:`REG FAIL ERR`
                    }

//LOGIN START
        case LOGIN_REQUEST: 
        return{
            ...state,
            isLoggingIn:true,
            isRegistered:true, 
            error:`LOGIN REQ ERR`  
        }

        case LOGIN_SUCCESS:
            console.log(state, action)
            return {
                ...state,
                isLoggedIn: true,
                isLoggingIn:false,
                user_id:action.payload.user.user_id,
                username:action.payload.user.username,
                pBudget:[action.payload.user.pBudget],
                rBudget:[action.payload.user.rBudget],
                error:`LOGIN SUCCESS ERR`
            }

            case LOGIN_FAILURE:
                // console.log(state, action)
                return {
                    ...state,
                    isLoggedIn: false,
                    error: 'LOGIN FAIL ERR'
                };
//LOGOUT START
                case LOGOUT_REQUEST:
                    console.log(state, action)
                    return {
                        ...state,
                        isLoggingOut: true,
                        error:`LOGOUT REQ ERR`
                    };
//SUCCESS    
                case LOGOUT_SUCCESS:
                    console.log(state, action)
                    return {
                        ...state,
                        isLoggingOut: false,
                        isLoggedIn: false,
                        user_id:null,
                        username:'',
                        pBudget:[],
                        rBudget:[],
                        error:'LOGOUT SUCCESS ERR',
                        isLoggedOut: false
                    };
// FAILURE
                case LOGOUT_FAILURE:
                    console.log(state, action)
                    return {
                        ...state,
                        isLoggingOut: false,
                        isLoggedIn:true,
                        error:'LOGOUT FAILURE ERR'
                    };
                    default:
                        return state
    }

}

export default userReducer
export const DATA_START = "FETCHING_DATA_START";
export const DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const DATA_FAILURE = "FETCHING_DATA_FAILURE";
export const EDITING_STATE = "EDITING_STATE";
export const FORM_STATE = "FORM_STATE";
export const RESET_FORM = "RESET_FORM";
export const EDITING_STATE_CHANGE = "EDITING_STATE_CHANGE";

const uuidv4 = require("uuid/v4");

const initialState = {
  user: {
    firstname: "",
    lastname: "",
    username: "",
    personal:[
      { 
        id: null,
        title: "",
        transport: 0,
        food: 0,
        rent: 0,
        utilities: 0,
        car: 0,
        loans:0,
        other: 0,
        notes: ""
      },
    ]
  },
  editing: false,
  isloading: false,
  error: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_START:
      return{
        ...state,
        isloading: true
      };
    case DATA_SUCCESS:
      return{
        ...state,
        isloading: false,
        user: action.payload
      }
    case EDITING_STATE:
      return {
        ...state,
        editing: !state.editing,
        user: {
          ...state.user,
          id: action.id,
          username: action.username
        }
      };
    case EDITING_STATE_CHANGE:
      return {
        ...state,
        editing:
          state.editing === false ? !state.editing : (state.editing = true),
          user: {
            ...state.user,
            id: action.id,
            username: action.username,
          }
      };
    case FORM_STATE: {
      return {
        ...state,
          user: {
            ...state.user,
            [action.username]: action.value
          }
      };
    }
    case RESET_FORM: {
      return {
        ...state,
        user : {
          id: uuidv4(),
          username: "",
        }
      };
    }
    default: 
    return state;
  }
}
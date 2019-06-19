import { combineReducers } from 'redux'

const counter = (state = 15, action) => {
  return state;
};

const user = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_EMAIL":
      return {...state, email: action.payload}
    case "UPDATE_PASSWORD":
      return {...state, password: action.payload}
    default:
        return state;
  }
};

    const rootReducer = combineReducers({
        counter,
        user
    })


export default rootReducer
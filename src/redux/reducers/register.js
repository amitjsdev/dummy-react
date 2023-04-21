import { actionTypes } from "../actions/RegisterActions";
const initialState = {
  email:"",
  captcha:""
};

const register = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_LIST:
      return {
        ...state,userList: action.payload
      };
    default:
      return state;
  }
}
export default register;

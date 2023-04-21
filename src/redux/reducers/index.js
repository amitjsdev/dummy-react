import { combineReducers } from "redux";
// import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import register from "./register";
import users from './user';

export const history = createBrowserHistory();
const appReducer = combineReducers({
  loading: '',
  register: register,
  users: users,
//   order: orderReducer,

  router: connectRouter(history),
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_USERS_PERSIST") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

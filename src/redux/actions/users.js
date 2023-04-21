import * as type from '../types';
import { UserService } from "../../services/UserService";

export function getUsers(users) {
  return { 
    type: type.GET_USERS_REQUESTED,
    payload: users,
  }
}



export function getApi(data) {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      UserService.getApi(data)
        .then((res) => {
            // console.log('UserService--',res)
          // dispatch(stopLoading());
          // dispatch(getUsers(res.data));
          resolve(res.data);
        })
        .catch((ex) => {
          // dispatch(stopLoading());
          reject(ex);
        });
    });
}
import { ENCRYPT_KEY } from "../../constant";
import { UserService } from "../../services/UserService";
import { startLoading, stopLoading } from "./LoadingActions";

/** seting action types */
export const actionTypes = {
  GET_USER_LIST: "GET_USER_LIST",
};

/*
 * Action creators for login
 */

export function getUserData(data) {
  return {
    type: actionTypes.GET_USER_LIST,
    payload: data,
  };
}

export function getUsersList(data) {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      UserService.getUsersList(data)
        .then((res) => {
            // console.log('UserService--',res)
          dispatch(stopLoading());
          dispatch(getUserData(res.data));
          resolve(res);
        })
        .catch((ex) => {
          dispatch(stopLoading());
          reject(ex);
        });
    });
}


export function requestEncryption(data) {
  
  let CryptoJS = require("crypto-js");
  // Encrypt
  let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), ENCRYPT_KEY);
  return ciphertext.toString();

  // // Decrypt
  // var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), ENCRYPT_KEY);
  // var plaintext = bytes.toString(CryptoJS.enc.Utf8);
  // console.log('ciphertext--',plaintext)
  // debugger
}
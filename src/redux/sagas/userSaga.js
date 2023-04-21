import { call, put, takeEvery } from 'redux-saga/effects'
import {getApi} from "../actions/users";


   //for multiple api you need to create new function

function* fetchUsers(action) {
   try {
      const users = yield call(getApi());
      yield put({type: 'GET_USERS_SUCCESS', users: users});
   } catch (e) {
      yield put({type: 'GET_USERS_FAILED', message: e.message});
   }
}

function* userSaga() {
   yield takeEvery('GET_USERS_REQUESTED', fetchUsers);

   //for multiple api you need to use another yield takeEverygetUserList eg.below
   yield takeEvery('GET_USERS_DATA', fetchUsers);


}

export default userSaga;
import * as ActionTypes from '../constants/actionTypes';

// AXIOS
import axios from 'axios';
const apiUrl = 'http://localhost:9000/users';
const client = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const loginAsync = (email, password) => {
  return (dispatch) => {
    dispatch(login_Pending());
    client.post('/login', { email: email, password: password })
      .then((response) => {
        dispatch(login_Success(response.data));
      })
      .catch((error) => {
        dispatch(login_Error(error));
      });
  };
}
// CÁC DISPATCH báo trạng thái của ASYNC
// Action Creator
const login_Success = (loggedInUser) => ({
  type: ActionTypes.LOGIN_SUCCESS, // ACTION TYPE
  loggedInUser: loggedInUser // PARAMETER
});

// Action Creator
const login_Pending = () => ({
  type: ActionTypes.LOGIN_PENDING, // ACTION TYPE  
});

// Action Creator
const login_Error = (error) => ({
  type: ActionTypes.LOGIN_ERROR, // ACTION TYPE
  error: error // PARAMETER
});
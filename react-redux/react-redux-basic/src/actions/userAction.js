import * as ActionTypes from '../constants/actionTypes';

// AXIOS
import axios from 'axios';
const apiUrl = 'https://slacklivechat.com/users';
const client = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

// API
// ------------------------------------------------------------
export const getUsersAsync = () => {
  return (dispatch) => {
    dispatch(getUsers_Pending());

    client.get('/')
      .then((response) => {
        dispatch(getUsers_Success(response.data));
      })
      .catch((error) => {
        dispatch(getUsers_Error(error));
      });
  };
}
// CÁC DISPATCH báo trạng thái của ASYNC
const getUsers_Success = (data) => ({
  type: ActionTypes.USER_GET_SUCCESS, // ACTION TYPE
  users: data // PARAMETER
});

const getUsers_Pending = () => ({
  type: ActionTypes.USER_GET_PENDING, // ACTION TYPE  
});

const getUsers_Error = (error) => ({
  type: ActionTypes.USER_GET_ERROR, // ACTION TYPE
  error: error // PARAMETER
});

// ------------------------------------------------------------

export const createUsersAsync = () => {
  return (dispatch) => {
    dispatch(createUsers_Pending());

    client.post('/')
      .then((response) => {
        dispatch(createUsers_Success(response.data));
      })
      .catch((error) => {
        dispatch(createUsers_Error(error));
      });
  };
}
// CÁC DISPATCH báo trạng thái của ASYNC
const createUsers_Success = (data) => ({
  type: ActionTypes.USER_CREATE_SUCCESS, // ACTION TYPE
  newUser: data // PARAMETER
});

const createUsers_Pending = () => ({
  type: ActionTypes.USER_CREATE_PENDING, // ACTION TYPE  
});

const createUsers_Error = (error) => ({
  type: ActionTypes.USER_CREATE_ERROR, // ACTION TYPE
  error: error // PARAMETER
});
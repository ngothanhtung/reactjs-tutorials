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
import * as ActionTypes from '../constants/actionTypes';

// AXIOS
import axios from 'axios';
const baseUrl = 'https://training.softech.cloud/api/training/users';
const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoidHVuZ250IiwiZnVsbG5hbWUiOiJUdW5nIE5nbyIsImVtYWlsIjoidHVuZ250QHNvZnRlY2guZWR1LnZuIn0sImlhdCI6MTY2MDM5MTkzNSwiZXhwIjoxNjYwNDc4MzM1LCJhdWQiOiJzb2Z0ZWNoLmNsb3VkIiwiaXNzIjoic29mdGVjaC5jbG91ZCIsInN1YiI6IjYyZWYxZmZiN2RkZGNjMTM5NDU0NTAzMSJ9.y3ozuYk1bkLGI9YV_g_kLzQ2zYFQz0T71emrxF1T9Nhv6zHnU8LAB_-yUKwpE3NhT7htb3r3qyUJO2_Xk2ktpQ';
const client = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token,
  },
});

// API
// ------------------------------------------------------------
// Get users
// ------------------------------------------------------------
export const getUsersAsync = () => {
  return (dispatch) => {
    dispatch(getUsers_Pending());
    client
      .get('/')
      .then((response) => {
        dispatch(getUsers_Success(response.data));
      })
      .catch((error) => {
        dispatch(getUsers_Error(error));
      });
  };
};
// CÁC DISPATCH báo trạng thái của ASYNC
const getUsers_Success = (data) => ({
  type: ActionTypes.USER_GET_SUCCESS, // ACTION TYPE
  users: data, // PARAMETER
});

const getUsers_Pending = () => ({
  type: ActionTypes.USER_GET_PENDING, // ACTION TYPE
});

const getUsers_Error = (error) => ({
  type: ActionTypes.USER_GET_ERROR, // ACTION TYPE
  error: error, // PARAMETER
});

// ------------------------------------------------------------
// Create user
// ------------------------------------------------------------
export const createUserAsync = (user) => {
  return (dispatch) => {
    dispatch(createUser_Pending());
    client
      .post('/register', user)
      .then((response) => {
        dispatch(createUser_Success(response.data.result.data));
      })
      .catch((error) => {
        dispatch(createUser_Error(error));
      });
  };
};
// CÁC DISPATCH báo trạng thái của ASYNC
// Action Creator
const createUser_Success = (data) => ({
  type: ActionTypes.USER_CREATE_SUCCESS, // ACTION TYPE
  newUser: data, // PARAMETER
});

// Action Creator
const createUser_Pending = () => ({
  type: ActionTypes.USER_CREATE_PENDING, // ACTION TYPE
});

// Action Creator
const createUser_Error = (error) => ({
  type: ActionTypes.USER_CREATE_ERROR, // ACTION TYPE
  error: error, // PARAMETER
});

// ------------------------------------------------------------
// DELETE USER
// ------------------------------------------------------------
export const deleteUserAsync = (id) => {
  return (dispatch) => {
    dispatch(deleteUser_Pending());
    client
      .delete('/' + id)
      .then((response) => {
        dispatch(deleteUser_Success(id));
      })
      .catch((error) => {
        dispatch(deleteUser_Error(error));
      });
  };
};
// CÁC DISPATCH báo trạng thái của ASYNC
// Action Creator
const deleteUser_Success = (id) => ({
  type: ActionTypes.USER_DELETE_SUCCESS, // ACTION TYPE
  id: id, // PARAMETER
});

// Action Creator
const deleteUser_Pending = () => ({
  type: ActionTypes.USER_DELETE_PENDING, // ACTION TYPE
});

// Action Creator
const deleteUser_Error = (error) => ({
  type: ActionTypes.USER_DELETE_ERROR, // ACTION TYPE
  error: error, // PARAMETER
});

// ------------------------------------------------------------
// UPDATE USER
// ------------------------------------------------------------
export const updateUserAsync = (id, data) => {
  return (dispatch) => {
    dispatch(updateUser_Pending());
    client
      .put('/' + id, {
        user: {
          // Not include _id
          userName: data.userName,
          fullName: data.fullName,
          password: data.password,
          email: data.email,
          phoneNumber: data.phoneNumber,
        },
      })
      .then((response) => {
        dispatch(updateUser_Success(response.data));
      })
      .catch((error) => {
        dispatch(updateUser_Error(error));
      });
  };
};

// CÁC DISPATCH báo trạng thái của ASYNC
// Action Creator
export const selectUser = (selectedUser) => ({
  type: ActionTypes.USER_SELECT, // ACTION TYPE
  selectedUser: selectedUser, // PARAMETER
});
// Action Creator
const updateUser_Success = (user) => ({
  type: ActionTypes.USER_UPDATE_SUCCESS, // ACTION TYPE
  user: user, // PARAMETER
});

// Action Creator
const updateUser_Pending = () => ({
  type: ActionTypes.USER_UPDATE_PENDING, // ACTION TYPE
});

// Action Creator
const updateUser_Error = (error) => ({
  type: ActionTypes.USER_UPDATE_ERROR, // ACTION TYPE
  error: error, // PARAMETER
});

import * as ActionTypes from '../constants/actionTypes';

// DEFAULT STATE
const defaultState = {
  users: [],
  loading: false,
  error: null,
  selectedUser: null,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    // --------------------------------------------------------------------------------------------
    // GET USERS
    // --------------------------------------------------------------------------------------------
    case ActionTypes.USER_GET_PENDING:
      return { ...state, loading: true };
    case ActionTypes.USER_GET_SUCCESS:
      return {
        ...state,
        users: action.users,
        loading: false,
        error: null,
      };
    case ActionTypes.USER_GET_ERROR:
      return { ...state, error: action.error, loading: false };
    // --------------------------------------------------------------------------------------------
    // CREATE USER
    // --------------------------------------------------------------------------------------------
    case ActionTypes.USER_CREATE_PENDING:
      return { ...state, loading: true };
    case ActionTypes.USER_CREATE_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.newUser],
        loading: false,
        error: null,
      };
    case ActionTypes.USER_CREATE_ERROR:
      return { ...state, error: action.error, loading: false };
    // --------------------------------------------------------------------------------------------
    // DELETE USER
    // --------------------------------------------------------------------------------------------
    case ActionTypes.USER_DELETE_PENDING:
      return { ...state, loading: true };
    case ActionTypes.USER_DELETE_SUCCESS:
      const usersAfterDeleted = state.users.filter((element) => {
        return element._id !== action.id;
      });

      return {
        ...state,
        users: usersAfterDeleted,
        loading: false,
        error: null,
      };
    case ActionTypes.USER_DELETE_ERROR:
      return { ...state, error: action.error, loading: false };

    // --------------------------------------------------------------------------------------------
    // UPDATE USER
    // --------------------------------------------------------------------------------------------
    case ActionTypes.USER_SELECT:
      return { ...state, selectedUser: action.selectedUser };
    case ActionTypes.USER_UPDATE_PENDING:
      return { ...state, loading: true };
    case ActionTypes.USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ActionTypes.USER_UPDATE_ERROR:
      return { ...state, error: action.error, loading: false };
    // --------------------------------------------------------------------------------------------
    // DEFAULT
    default:
      return state;
  }
};

export default userReducer;

// Notes:
// Object.assign method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Spread syntax:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

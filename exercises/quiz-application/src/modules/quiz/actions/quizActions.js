import * as ActionTypes from '../constants/actionTypes';

// AXIOS
import axios from 'axios';
const apiUrl = 'http://localhost:9000/questions';
const client = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getQuestionsAsync = () => {
  return (dispatch) => {
    dispatch(getQuestions_Pending());
    client.get('/')
      .then((response) => {
        dispatch(getQuestions_Success(response.data));
      })
      .catch((error) => {
        dispatch(getQuestions_Error(error));
      });
  };
}
// CÁC DISPATCH báo trạng thái của ASYNC
// Action Creator
const getQuestions_Success = (questions) => ({
  type: ActionTypes.GET_QUESTIONS_SUCCESS, // ACTION TYPE
  questions: questions // PARAMETER
});

// Action Creator
const getQuestions_Pending = () => ({
  type: ActionTypes.GET_QUESTIONS_PENDING, // ACTION TYPE  
});

// Action Creator
const getQuestions_Error = (error) => ({
  type: ActionTypes.GET_QUESTIONS_ERROR, // ACTION TYPE
  error: error // PARAMETER
});

// Action Creator
export const postAnswer = (score) => ({
  type: ActionTypes.POST_ANSWER, // ACTION TYPE
  score: score // PARAMETER
});
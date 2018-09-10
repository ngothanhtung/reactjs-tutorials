import { connect } from 'react-redux';
import { getQuestionsAsync, postAnswer } from '../actions/quizActions';
import QuizComponent from '../components/QuizComponent';

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  loading: state.quizReducer.loading,
  questions: state.quizReducer.questions,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  getQuestionsAsync: () => dispatch(getQuestionsAsync()),
  postAnswer: (score) => dispatch(postAnswer(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizComponent);
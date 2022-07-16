import { connect } from 'react-redux';
import MusicPlayerComponent from '../components/MusicPlayerComponent';

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  activeSong: state.musicReducer.activeSong
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayerComponent);



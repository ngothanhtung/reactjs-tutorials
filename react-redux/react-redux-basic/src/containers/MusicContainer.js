import { connect } from 'react-redux';

import { play } from '../actions/musicAction';
import MusicPlayerComponent from '../components/MusicPlayerComponent';

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  songs: state.musicReducer.songs,
  activeSong: state.musicReducer.activeSong
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  play: (song) => dispatch(play(song)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayerComponent);



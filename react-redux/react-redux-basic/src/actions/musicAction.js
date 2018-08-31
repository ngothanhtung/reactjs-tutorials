import * as ActionTypes from '../constants/actionTypes';
// MUSIC
// Action Creator
export const play = (song) => ({
  type: ActionTypes.MUSIC_PLAY, // ACTION TYPE  
  song: song
});

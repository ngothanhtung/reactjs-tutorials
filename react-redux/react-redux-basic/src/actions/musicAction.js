import * as ActionTypes from '../constants/actionTypes';
// MUSIC
export const play = (song) => ({
  type: ActionTypes.MUSIC_PLAY, // ACTION TYPE  
  song: song
});

import * as ActionTypes from '../constants/actionTypes';

// DEFAULT STATE
const defaultState = {
  songs: [
    {
      title: 'Bông Hồng Thủy Tinh',
      artist: 'Trần Lập (Bức Tường)',
      url: 'http://data16.chiasenhac.com/downloads/1009/1/1008280-3c20366c/128/Bong%20Hong%20Thuy%20Tinh%20-%20Buc%20Tuong%20[128kbps_MP3].mp3'
    },
    {
      title: 'Ngày Hôm Qua',
      artist: 'Trần Lập (Bức Tường)',
      url: 'http://data16.chiasenhac.com/downloads/1009/1/1008282-22d09b3a/128/Ngay%20Hom%20Qua%20-%20Buc%20Tuong%20[128kbps_MP3].mp3'
    }
  ],
  activeSong: null
};

const musicReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.MUSIC_PLAY:
      return { ...state, activeSong: action.song };

    default:
      return state;
  }
}

export default musicReducer;

// Notes: 
// Object.assign method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Spread syntax:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
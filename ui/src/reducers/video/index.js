import {
  SET_GID,
  SET_MANIFEST_STATE,
  SET_TRACKS,
  SET_SHOW_SUB_SWITCHER,
  UPDATE_TRACK,
  UPDATE_VIDEO
} from "../../actions/types.js";

import trackReducer from "./track";

const video = {
  ready: false,
  current: 0,
  list: []
};

const audio = {
  ready: false,
  current: 0,
  list: []
};

const subtitle = {
  ready: false,
  current: -1,
  list: []
};

const tracks = {
  video,
  audio,
  subtitle
};

const manifest = {
  loading: false,
  loaded: false,
  virtual: {
    loaded: false
  }
};

const initialState = {
  tracks,
  manifest,
  gid: null,
  player: null,
  showSubSwitcher: false,
  canPlay: false,
  waiting: false,
  seeking: false,
  fullscreen: false,
  muted: false,
  paused: false,
  error: null,
  textTrackEnabled: false,
  mediaID: null,
  prevSubs: null,
  episode: null,
  buffer: 0,
  currentTime: 0,
  duration: 0,
  currentCue: "",
  idleCount: 0
};

export default function videoReducer(state = initialState, action) {
  switch(action.type) {
    case SET_GID:
      return {
        ...state,
        gid: action.gid
      };
    case UPDATE_VIDEO:
      return {
        ...state,
        ...action.data
      };
    case SET_TRACKS:
      return {
        ...state,
        tracks: trackReducer(state.tracks, action)
      };
    case UPDATE_TRACK:
      return {
        ...state,
        tracks: trackReducer(state.tracks, action)
      };
    case SET_SHOW_SUB_SWITCHER:
      return {
        ...state,
        showSubSwitcher: action.state
      };
    case SET_MANIFEST_STATE:
      return {
        ...state,
        manifest: {
          ...state.manifest,
          ...action.state
        }
      };
    default:
      return state;
  }
}

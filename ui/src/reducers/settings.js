import {
  FETCH_USER_SETTINGS_START,
  FETCH_USER_SETTINGS_OK,
  FETCH_USER_SETTINGS_ERR,
  FETCH_GLOBAL_SETTINGS_START,
  FETCH_GLOBAL_SETTINGS_OK,
  FETCH_GLOBAL_SETTINGS_ERR
} from "../actions/types.js";

const globalSettings = {
  fetching: false,
  fetched: false,
  error: null,
  data: {}
};

const userSettings = {
  fetching: false,
  fetched: false,
  error: null,
  data: {}
};

const initialState = {
  globalSettings,
  userSettings
};

export default function settingsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USER_SETTINGS_START:
      return {
        ...state,
        userSettings: {
          fetching: true,
          fetched: false,
          error: null,
          data: {}
        }
      };
    case FETCH_USER_SETTINGS_OK:
      return {
        ...state,
        userSettings: {
          ...state.userSettings,
          fetching: false,
          fetched: true,
          data: action.payload
        }
      };
    case FETCH_USER_SETTINGS_ERR:
      return {
        ...state,
        userSettings: {
          ...state.userSettings,
          fetching: false,
          fetched: true,
          error: action.payload
        }
      };
    case FETCH_GLOBAL_SETTINGS_START:
      return {
        ...state,
        globalSettings: {
          fetching: true,
          fetched: false,
          error: null,
          data: {}
        }
      };
    case FETCH_GLOBAL_SETTINGS_OK:
      return {
        ...state,
        globalSettings: {
          ...state.globalSettings,
          fetching: false,
          fetched: true,
          data: action.payload
        }
      };
    case FETCH_GLOBAL_SETTINGS_ERR:
      return {
        ...state,
        globalSettings: {
          ...state.globalSettings,
          fetching: false,
          fetched: true,
          error: action.payload
        }
      };
    default:
      return state;
  }
}

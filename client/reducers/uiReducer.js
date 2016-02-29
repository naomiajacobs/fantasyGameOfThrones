import {combineReducers} from 'redux';
import * as constants from '../services/actionConstants.jsx'

const loggedIn = (state = false, action) => {
  switch(action.type) {
    case constants.LOGIN_SUCCESS:
      return true;
    case constants.SIGNUP_SUCCESS:
      return true;
    case constants.LOGOUT:
      return false;
    default:
      return state;
  }
}

const contentDisplay = (state = 'HOME', action) => {
  switch(action.type) {
    case constants.CHANGE_MAIN_COMPONENT:
      return action.payload.tab;
    case constants.CREATE_LEAGUE_SUCCESS:
      return 'HOME';
    case constants.CHANGE_ROSTER_PLAYER:
      return 'ROSTERS';
    case constants.LEAVE_LEAGUE_SUCCESS: 
      return 'HOME';
    case constants.ACCEPT_INVITATION_SUCCESS:
      return 'HOME';
    case constants.LOGOUT:
      return 'HOME';
    default:
      return state;
  }
};

const authDisplay = (state = 'LOGIN', action) => {
  switch(action.type) {
    case constants.CHANGE_AUTH_DISPLAY:
      return action.payload.authDisplay;
    case constants.LOGOUT:
      return 'LOGIN';
    default:
      return state;
  }
};

const rosterPlayer = (state = {}, action) => {
  switch(action.type) {
    case constants.CHANGE_ROSTER_PLAYER:
      return action.payload.user;
    case constants.LEAVE_LEAGUE_SUCCESS: 
      return {};
    case constants.LOGOUT:
      return {};
    default:
      return state;
  }
};

const tradeDisplay = (state = {dropCharId: null, addCharId: null}, action) => {
  switch(action.type) {
    case 'CHANGE_CHAR_TO_DROP':
      return { dropCharId: action.payload.dropCharId, addCharId: state.addCharId };
    case 'CHANGE_CHAR_TO_ADD':
      return { dropCharId: state.dropCharId, addCharId: action.payload.addCharId };
    default:
      return state;
  }
};

export default combineReducers({
  contentDisplay,
  authDisplay,
  rosterPlayer,
  tradeDisplay,
  loggedIn
});
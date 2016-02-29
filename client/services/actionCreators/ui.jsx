import network from '../network.jsx';
import * as constants from '../actionConstants.jsx'

export const navigateTo = (tab)  => {
  return {
    type: constants.CHANGE_MAIN_COMPONENT,
    payload: {tab}
  }
};

export const changeAuthDisplay = (authDisplay) => {
  return {
    type: constants.CHANGE_AUTH_DISPLAY,
    payload: {authDisplay}
  }
};

export const changeRosterPlayer = (user) => {
  return {
    type: constants.CHANGE_ROSTER_PLAYER,
    payload: {user}
  }
};
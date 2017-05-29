export const defaultState = {};

export default (state = defaultState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
  case 'DISPLAY_NOTIFICATION':
    if (newState[action.key]) {
      clearTimeout(newState[action.key].timeoutId);
    }
    newState[action.key] = {
      message: action.message,
      type: action.level,
      timeoutId: action.timeoutId
    };
    return newState;
  case 'DISMISS_NOTIFICATION':
    delete newState[action.key];
    return newState;
  case 'DISMISS_ALL_NOTIFICATIONS':
    newState = {};
    return newState;
  default:
    return state;
  }
};

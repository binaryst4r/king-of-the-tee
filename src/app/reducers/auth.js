import {getGolfer} from 'utils/golfer';

export const defaultState = {
  id: getGolfer() ? getGolfer().id : null,
  email: getGolfer() ? getGolfer().email : null,
  error: null,
  client: getGolfer() ? getGolfer().client : null,
  expiry: getGolfer() ? getGolfer().expiry : null,
  token: getGolfer() ? getGolfer().authentication_token : null,
  loading: false
};

export default (state = defaultState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
  case 'AUTH_RESPONSE':
    newState.loading = null;
    newState.error = null;
    newState.id = action.payload.id;
    newState.client = action.payload.client;
    newState.expiry = action.payload.expiry;
    newState.token = action.payload.authentication_token;
    newState.email = action.payload.email;
    return newState;
  case 'AUTH_ERROR':
    newState.client = null;
    newState.token = null;
    newState.token = null;
    newState.error = action.error;
    return newState;
  case 'AUTH_REQUEST':
    newState.loading = true;
    return newState;
  default:
    return state;
  }
};

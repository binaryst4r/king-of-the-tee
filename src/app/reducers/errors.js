export default (state = {}, action) => {
  switch (action.type) {
  case 'API_ERROR':
    let newState = Object.assign({}, state);
    newState.errors = newState.errors || [];
    newState.errors.push(action.error);
    return newState;
  default:
    return state;
  }
};

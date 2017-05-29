import { combineReducers } from 'redux';
import errors from './errors';
import notifications from './notifications';
import {reducer as formReducer} from 'redux-form';
import resources from './resources';
import auth from './auth';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
  errors,
  auth,
  form: formReducer,
  notifications,
  resources,
  routing: routerReducer
});

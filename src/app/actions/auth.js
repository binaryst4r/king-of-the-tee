import {patch, post, remove} from 'lib/request';
import _ from 'underscore';
//constants
const KOTT_API_URL = process.env.KOTT_API_URL;
//utils
import {makeAuthHeader} from 'utils/auth';
import {getGolfer, setGolfer, clearGolfer} from 'utils/golfer';
//actions
import {actions} from 'actions/resources';
import {error, success} from 'actions/notifications';
import {push} from 'react-router-redux';
const notifySuccess = success.bind(null, 'api_success');
const notifyError = error.bind(null, 'api_error');

export const authRequest = () => ({
  type: 'AUTH_REQUEST'
});

export const authResponse = (payload) => ({
  type: 'AUTH_RESPONSE',
  payload
});

export const login = (payload) => {
  return (dispatch) => {
    dispatch(authRequest());
    return post(`${KOTT_API_URL}/golfer/auth/sign_in`, payload)
      .then(response => {
        let golfer = response.data.data;
        let golferData = {
          id: golfer.slug,
          authentication_token: response.headers['access-token'],
          client: response.headers['client'],
          expiry: response.headers['expiry'],
          email: golfer.email,
          first_name: golfer.first_name,
          last_name: golfer.last_name
        }
        console.log('set golfer')
        setGolfer(golferData);
        dispatch(authResponse(golferData));
        dispatch(push('/account'));
      })
      .catch(response => {
        response.data.errors.map((message) => {
          return dispatch(notifyError(message));
        })
      });
  };
}

export const register = (payload, redirect='/account') => {
  return (dispatch) => {
    dispatch(authRequest());
    return post(`${KOTT_API_URL}/golfers/auth`, payload)
      .then(response => {
        let golfer = response.data.data;
        let golferData = {
          id: golfer.slug,
          authentication_token: response.headers['access-token'],
          client: response.headers['client'],
          expiry: response.headers['expiry'],
          email: golfer.email
        }
        setGolfer(golferData);

        dispatch(authResponse(golferData));
        if (!redirect) {
          return dispatch(actions.fetchGolfer(golfer.slug));
        }

        return dispatch(push(redirect));
      })
      .catch(response => {
        response.data.errors.full_messages.map((message) => {
          return dispatch(notifyError(message));
        })
      });
  };
}

export const logout = () => {
  return (dispatch) => {
    let golfer = getGolfer();
    console.log(golfer);
    let authHeader = makeAuthHeader(golfer.email, golfer.authentication_token);
    dispatch(authRequest());
    remove(`${KOTT_API_URL}/golfers/auth/sign_out`, {}, authHeader)
      .then(response => {
        dispatch(authResponse({
          id: null,
          email: null
        }));
        clearGolfer();
        clearLocation();
        dispatch(push('/'));
      })
      .catch(err => {
      });
  };
}

export const requestPasswordReset = (payload) => {
  return (dispatch) => {
    dispatch(authRequest());
    return post(`${KOTT_API_URL}/golfer/auth/password`, payload)
      .then(response => {
        dispatch(authResponse({
          id: null,
          email: null
        }));
        clearGolfer();
        dispatch(notifySuccess('Success! Check your email for password reset instructions.'));
        dispatch(push('/authentication'));
      })
      .catch(response => {
        response.data.errors.map((message) => {
          return dispatch(notifyError(message));
        })
      });
  };
}

export const passwordReset = (payload) => {
  return (dispatch) => {
    dispatch(authRequest());
    return patch(`${KOTT_API_URL}/golfer/auth/password`, payload, makeAuthHeader())
      .then(response => {
        let golfer = response.data.data;
        let golferData = {
          id: golfer.slug,
          authentication_token: response.headers['access-token'],
          client: response.headers['client'],
          expiry: response.headers['expiry'],
          email: golfer.email,
          first_name: golfer.first_name,
          last_name: golfer.last_name
        }
        setGolfer(golferData);
        dispatch(authResponse(golferData));
        dispatch(push('/account/info'));
      })
      .catch(err => {
      });
  };
}

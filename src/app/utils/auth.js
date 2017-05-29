import cookie from 'react-cookie';

export const makeAuthHeader = () => {
	let golfer = cookie.load(process.env.GOLFER_COOKIE);
	if (golfer) {
	  return {
			'uid': golfer.email,
	  	'access-token': golfer.authentication_token,
      'expiry': golfer.expiry,
      'client': golfer.client
	  }
	}
  return null;
};

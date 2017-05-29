import cookie from 'react-cookie';

export const setLocation = (payload) => {
	return cookie.save(process.env.LOCATION_COOKIE, payload, {path: '/'});
}

export const getLocation = () => {
  return cookie.load(process.env.LOCATION_COOKIE);
}

export const clearLocation = () => {
	return cookie.remove(process.env.LOCATION_COOKIE, {path: '/'});
}

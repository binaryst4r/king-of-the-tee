import cookie from 'react-cookie';

export const setGolfer = (payload) => {
	return cookie.save(process.env.GOLFER_COOKIE, payload, {path: '/'});
}

export const getGolfer = () => {
  return cookie.load(process.env.GOLFER_COOKIE);
}

export const clearGolfer = () => {
	return cookie.remove(process.env.GOLFER_COOKIE, {path: '/'});
}

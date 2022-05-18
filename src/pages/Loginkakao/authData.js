export const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
export const URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

import { useSetRecoilState } from 'recoil';
import { message } from 'antd';
import authAtom from '../_state/auth';

import useFetchWrapper from '../_helpers/fetch_wrapper';

export default function useUserActions() {
  const baseUrl = `${process.env.REACT_APP_API_BASE}`;
  const fetchWrapper = useFetchWrapper();
  const setAuth = useSetRecoilState(authAtom);

  function login(email, password) {
    return fetchWrapper.post(`${baseUrl}/v1/auth/login`, { email, password })
      .then((user) => {
        const saveUser = {
          data: user.user,
          token: user.token,
          at: user.token.accessToken,
        };

        // store user details and jwt token in local storage
        // to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(saveUser));
        setAuth(saveUser);

        // get return url from location state or default to home page
        // const { from } = history.location.state || { from: { pathname: '/' } };
        // history.push('/collections');
        window.location.reload(false);
      })
      .catch((error) => {
        message.error(error);
      });
  }

  function logout() {
    // remove user from local storage, set auth state to null and redirect to login page
    localStorage.removeItem('user');
    setAuth(null);
  }

  function signup(firstName, lastName, email, password) {
    return fetchWrapper.post(`${baseUrl}/v1/auth/register`, {
      firstName, lastName, email, password,
    })
      .then((user) => {
        const saveUser = {
          data: user.user,
          token: user.token,
          at: user.token.accessToken,
        };

        localStorage.setItem('user', JSON.stringify(saveUser));
        setAuth(saveUser);

        window.location.reload(false);
      })
      .catch((error) => {
        message.error(error);
      });
  }

  return {
    login,
    logout,
    signup,
  };
}
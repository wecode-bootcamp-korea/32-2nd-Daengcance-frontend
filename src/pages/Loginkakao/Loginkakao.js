import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { REST_API_KEY, REDIRECT_URI } from './authData';
import styled from 'styled-components';

const Loginkakao = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const authCode = location.search.split('=')[1];
  const kakaoAccessUri = `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${authCode}`;

  useEffect(() => {
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: kakaoAccessUri,
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          alert('통신을 다시 시도해주십시오.');
        }
      })
      .then(data => sendToken(data.access_token));
  }, []);

  const sendToken = kakaoAccessToken => {
    fetch(`http://10.58.6.132:8000/users/login/kakao`, {
      method: 'post',
      headers: {
        Authorization: kakaoAccessToken,
      },
    })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('nickname', res.nickname);

        navigate('/');
      });
  };

  return <Login>로그인중입니다</Login>;
};

export default Loginkakao;

const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

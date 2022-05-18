import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { REST_API_KEY, REDIRECT_URI } from './authData';

const Loginkakao = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const authCode = location.search.split('=')[1];
  const kakaoAccessUri = `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${authCode}`;

  useEffect(() => {
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
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
    fetch(`http://10.58.0.52:8000/users/login/kakao`, {
      method: 'POST',
      headers: {
        Authorization: kakaoAccessToken,
      },
    })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('nickname', res.nickname);
        alert('환영합니다!');
        navigate('/');
      });
  };

  return <div>로그인중입니다</div>;
};

export default Loginkakao;

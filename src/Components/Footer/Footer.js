import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { URI } from '../../pages/Login/authData';
import { INFO_LIST, SERVICE_LIST, COMPANY_LIST } from './footerData';

const Footer = ({ isDarkMode }) => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('nickname');
    navigate('/');
  };

  return (
    <StyledFooter isDarkMode={isDarkMode}>
      <Container isDarkMode={isDarkMode}>
        <Info isDarkMode={isDarkMode}>
          <Sub isDarkMode={isDarkMode}> 주식회사 댕캉스</Sub>
          {INFO_LIST.map((info, idx) => (
            <InfoDesc isDarkMode={isDarkMode} key={idx}>
              {info}
            </InfoDesc>
          ))}
          <Right>© Daengcance. All Rights Reserved</Right>
        </Info>
        <Desc>
          <Description>
            <Service isDarkMode={isDarkMode}>
              <Sub isDarkMode={isDarkMode}> 댕캉스 서비스</Sub>
              {SERVICE_LIST.map((service, i) => (
                <ServiceDesc isDarkMode={isDarkMode} key={i}>
                  {service}
                </ServiceDesc>
              ))}
            </Service>
            <Company isDarkMode={isDarkMode}>
              <Sub isDarkMode={isDarkMode}> 회사에 대하여</Sub>
              {COMPANY_LIST.map((company, idx) => (
                <ComDesc isDarkMode={isDarkMode} key={idx}>
                  {company}
                </ComDesc>
              ))}
            </Company>
            <User isDarkMode={isDarkMode}>
              <Sub isDarkMode={isDarkMode}>댕캉스 계정</Sub>
              <UserDesc isDarkMode={isDarkMode}>
                {isLogin ? (
                  <div onClick={handleLogout}>로그아웃</div>
                ) : (
                  <a href={URI}>로그인</a>
                )}
              </UserDesc>
            </User>
          </Description>
        </Desc>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  display: flex;
  width: 100%;
  height: 360px;
  margin: 0 auto;
  border-top: 1px solid rgb(231, 233, 235);
  background-color: ${props => (props.isDarkMode ? 'rgba(0,0,0,80%)' : '#fff')};
  transition: all 200ms ease-in;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: ${props => (props.isDarkMode ? 'white' : 'rgb(56, 60, 72)')};

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

const Sub = styled.p`
  padding-bottom: 30px;
  color: ${props => (props.isDarkMode ? 'white' : 'rgb(56, 60, 72)')};
  font-size: 15px;
  font-weight: 600;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 55px 28px 0;
  padding-bottom: 10px;
  color: ${props => (props.isDarkMode ? 'white' : 'rgb(56, 60, 72)')};

  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
  }
`;

const InfoDesc = styled.p`
  font-size: 13px;
  line-height: 24px;
  color: ${props => (props.isDarkMode ? 'white' : 'rgb(56, 60, 72)')};
`;

const Right = styled.div`
  padding-top: 12px;
  font-size: 12px;
  color: rgb(157, 164, 180);
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    margin-left: 40px;
  }
`;
const Description = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 55px;
  margin-right: 80px;
  color: ${props => (props.isDarkMode ? 'white' : 'rgb(56, 60, 72)')};
`;

const Service = styled(Title)``;

const Company = styled(Title)``;

const User = styled(Title)``;

const ServiceDesc = styled.p`
  padding-bottom: 10px;
  font-size: 13px;
  line-height: 24px;
  color: ${props => (props.isDarkMode ? 'white' : 'rgb(56, 60, 72)')};
`;

const ComDesc = styled.p`
  padding-bottom: 10px;
  font-size: 13px;
  line-height: 24px;
  color: ${props => (props.isDarkMode ? 'white' : 'rgb(56, 60, 72)')};
`;

const UserDesc = styled.div`
  font-size: 13px;
  line-height: 24px;
  cursor: pointer;
  color: ${props => (props.isDarkMode ? 'white' : 'rgb(56, 60, 72)')};
`;

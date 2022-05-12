import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { INFO_LIST, SERVICE_LIST, COMPANY_LIST } from './footerData';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Info>
          <Sub> 주식회사 댕캉스</Sub>
          {INFO_LIST.map((info, idx) => (
            <InfoDesc key={idx}>{info}</InfoDesc>
          ))}
          <Right>© Daengcance. All Rights Reserved</Right>
        </Info>
        <Desc>
          <Description>
            <Service>
              <Sub> 댕캉스 서비스</Sub>
              {SERVICE_LIST.map((service, i) => (
                <ServiceDesc key={i}>{service}</ServiceDesc>
              ))}
            </Service>
            <Company>
              <Sub> 회사에 대하여</Sub>
              {COMPANY_LIST.map((company, idx) => (
                <ComDesc key={idx}>{company}</ComDesc>
              ))}
            </Company>
            <User>
              <Sub>댕캉스 계정</Sub>

              <UserDesc to="/login">로그인</UserDesc>
            </User>
          </Description>
        </Desc>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

const baseTitle = css`
  display: flex;
  flex-direction: column;
  margin-top: 55px;
  margin-right: 80px;
`;

const StyledFooter = styled.div`
  max-width: 1000px;
  height: 360px;
  margin: 0 auto;
  border-top: 1px solid rgb(231, 233, 235);
  display: flex;
  background-color: #fff;
`;

const Container = styled.div`
  width: 100%;
  // border: 1px solid tomato;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;
const Sub = styled.p`
  font-size: 15px;
  color: rgb(56, 60, 72);
  font-weight: 600;
  padding-bottom: 30px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 10px;
  margin-top: 55px;
  margin-left: 28px;
  margin-right: 28px;
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
  }
`;

const InfoDesc = styled.p`
  font-size: 13px;
  color: rgb(56, 60, 72);
  line-height: 24px;
`;

const Right = styled.div`
  font-size: 12px;
  color: rgb(157, 164, 180);
  padding-top: 12px;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between;
  align-items: flex-end; */
  @media (max-width: 1000px) {
    margin-left: 40px;
  }
`;
const Description = styled.div`
  display: flex;
  justify-content: space-between;
  /* @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  } */
`;
//반복되는 부분 하나의 변수를 주어
const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 55px;
  margin-right: 80px;
`;

const Service = styled(Title)``;

const Company = styled(Title)``;

const User = styled(Title)``;

// const User = styled.div`
//   ${baseTitle};
// `;

const ServiceDesc = styled.p`
  font-size: 13px;
  color: rgb(56, 60, 72);
  line-height: 24px;
  padding-bottom: 10px;
`;

const ComDesc = styled.p`
  font-size: 13px;
  color: rgb(56, 60, 72);
  line-height: 24px;
  padding-bottom: 10px;
`;

// const User = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 55px;
//   margin-right: 28px;
// `;

const UserDesc = styled(Link)`
  font-size: 13px;
  color: rgb(56, 60, 72);
  line-height: 24px;
  cursor: pointer;
`;

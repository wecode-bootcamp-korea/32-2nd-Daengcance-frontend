import React from 'react';
import styled from 'styled-components';

const DetailProSitter = ({ name }) => {
  return (
    <DetailProSitterWrapper>
      <DetailProSitterDesTitle>
        🏅 {name}님은 프로 펫시터입니다
      </DetailProSitterDesTitle>
      <DetailProSitterDes>
        프로 펫시터는 다수의 예약 진행 경험과 함께,
        <br /> 높은 고객 만족도를 받은 펫시터입니다.
      </DetailProSitterDes>
    </DetailProSitterWrapper>
  );
};

export default DetailProSitter;

const DetailProSitterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding: 30px;
  width: 80%;
  font-size: 12px;
  background-color: #d3d3d360;
`;

const DetailProSitterDesTitle = styled.p`
  font-size: 20px;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
`;

const DetailProSitterDes = styled.div`
  line-height: 1.5;
  margin-top: 20px;
  font-size: 15px;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;

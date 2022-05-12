import React from 'react';
import styled from 'styled-components';

const DetailNormalSitter = () => {
  return (
    <DetailProSitterWrapper>
      <DetailProSitterTitle> ℹ️ 신원 및 환경 검증 완료</DetailProSitterTitle>
      <DetailProSitterDes>
        5단계 신원 검증 및 돌봄 환경의 안전성 검증이 완료된 펫시터입니다.
      </DetailProSitterDes>
    </DetailProSitterWrapper>
  );
};

export default DetailNormalSitter;

const DetailProSitterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding: 30px;
  width: 80%;
  background-color: #d3d3d360;
`;

const DetailProSitterTitle = styled.p`
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
  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;

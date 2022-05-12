import React from 'react';
import DetailNormalSitter from './DetailNormalSitter';
import DetailProSitter from './DetailProSitter';
import DetailUsableService from './DetailUsableService';
import styled from 'styled-components';

const DetailSitterInfo = ({ data }) => {
  const { name, title, grade, address, information, useableService, type } =
    data;
  return (
    <DetailSitterInfoWrapper>
      <DetailSitterInfoPTag>
        {address} 펫시터 ∙ {name}님
      </DetailSitterInfoPTag>
      <DetailSitterInfoPTagBottom>{title}</DetailSitterInfoPTagBottom>
      <DetailSitterInfoFilterWrapper>
        {type.map((filter, idx) => (
          <DetailSitterInfoFilter key={idx}>#{filter}</DetailSitterInfoFilter>
        ))}
        <DetailSitterInfoFilter>#{address} 펫시터</DetailSitterInfoFilter>
      </DetailSitterInfoFilterWrapper>
      {grade === '프로' ? (
        <DetailProSitter name={name} />
      ) : (
        <DetailNormalSitter name={name} />
      )}
      <DetailIntroduceSitterWrapper>
        <DetailIntroduceSitter>{name}님을 소개합니다.</DetailIntroduceSitter>
        <DetailIntroduceSitterDes>{information}</DetailIntroduceSitterDes>
        <DetailUsableService useableService={useableService} />
      </DetailIntroduceSitterWrapper>
    </DetailSitterInfoWrapper>
  );
};

export default DetailSitterInfo;

const DetailSitterInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const DetailSitterInfoFilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: gray;
  margin-top: 10px;
  line-height: 1.5;
  width: 80%;
`;
const DetailSitterInfoFilter = styled.p`
  font-size: 15px;
  margin-left: 8px;
  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;
const DetailIntroduceSitterWrapper = styled.div`
  padding: 20px;
  margin-top: 150px;
  width: 100%;
`;
const DetailIntroduceSitter = styled.p`
  width: 100%;
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
`;
const DetailIntroduceSitterDes = styled(DetailIntroduceSitter)`
  letter-spacing: 1.3px;
  line-height: 1.7;
  color: gray;
  font-weight: bold;
  font-size: 13px;
  @media (max-width: 1000px) {
    font-size: 11px;
  }
`;
const DetailSitterInfoPTag = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  width: 80%;
  font-size: 15px;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
`;
const DetailSitterInfoPTagBottom = styled(DetailSitterInfoPTag)`
  margin-top: 25px;
  font-size: 25px;
  width: 80%;
  @media (max-width: 1000px) {
    font-size: 25px;
  }
`;

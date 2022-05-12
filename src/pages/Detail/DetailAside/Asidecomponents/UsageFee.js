import React from 'react';
import styled from 'styled-components';

const UsageFee = ({ price }) => {
  return (
    <UsageFeeWrapper>
      <UsageFeeTop>
        <UsageFeeTitle>이용 요금</UsageFeeTitle>
        <UsageFeePerDay>1박케어</UsageFeePerDay>
      </UsageFeeTop>
      <UsageFeeBottom>
        <UsageFeeBottomLeft>
          <UsageDog>소형견</UsageDog>
          <UsageStandard>7키로 미만</UsageStandard>
        </UsageFeeBottomLeft>
        <UsageFeeBottomRight>
          <UsageFeeHowMuch>{price}원</UsageFeeHowMuch>
        </UsageFeeBottomRight>
      </UsageFeeBottom>
    </UsageFeeWrapper>
  );
};

export default UsageFee;

const UsageFeeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  height: 180px;
  padding: 20px;
  border: 1px solid #dfe3e9;
  box-shadow: 5px 5px 5px #dfe3e9;
  border-radius: 10px;
  @media (max-width: 1000px) {
    width: 100vw;
  }
`;

const UsageFeeTop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0px;
  padding-bottom: 20px;
  border-bottom: 1px solid #dfe3e9;
`;

const UsageFeeTitle = styled.p`
  font-size: 18px;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
`;

const UsageFeePerDay = styled(UsageFeeTitle)`
  font-size: 13px;
  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;

const UsageFeeBottom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
`;

const UsageFeeBottomLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const UsageDog = styled.p`
  font-size: 18px;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
`;

const UsageStandard = styled.p`
  margin-left: 15px;
  font-size: 13px;
  color: gray;
  @media (max-width: 1000px) {
    font-size: 10px;
  }
`;

const UsageFeeBottomRight = styled.div`
  margin-left: 10px;
`;

const UsageFeeHowMuch = styled(UsageDog)``;

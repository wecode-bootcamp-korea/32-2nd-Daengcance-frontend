import React from 'react';
import SitterLocation from './Asidecomponents/SitterLocation';
import UsageDate from './Asidecomponents/UsageDate';
import UsageFee from './Asidecomponents/UsageFee';
import styled from 'styled-components';

const DetailAside = ({ data, setData, plusCount, minusCount }) => {
  return (
    <DetailAsideWrapper>
      <UsageDate
        setData={setData}
        plusCount={plusCount}
        minusCount={minusCount}
        data={data}
      />
      <UsageFee price={data.price} />
      <SitterLocation location={data} />
    </DetailAsideWrapper>
  );
};

export default DetailAside;

const DetailAsideWrapper = styled.div`
  flex-direction: column;
  width: 380px;
  padding: 10px;
  @media (max-width: 1000px) {
    position: relative;
  }
`;

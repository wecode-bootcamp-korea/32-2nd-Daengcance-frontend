import React from 'react';
import DetailSitterInfo from './DetailSitterInfo';
import styled from 'styled-components';

const DetailMain = ({ data }) => {
  return (
    <DetailMainWrapper>
      <DetailSitterInfo data={data} />
    </DetailMainWrapper>
  );
};

export default DetailMain;

const DetailMainWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

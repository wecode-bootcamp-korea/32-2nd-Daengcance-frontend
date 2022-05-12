import React from 'react';
import styled from 'styled-components';
import LocationMap from './LocationMap';

const SitterLocation = ({ location }) => {
  return (
    <LocationWrapper>
      <LocationTop>
        <LocationTitle>펫시터님 위치</LocationTitle>
        <LocationDes>{location.address}</LocationDes>
      </LocationTop>
      <LocationMapWrapper>
        <LocationMap location={location} />
      </LocationMapWrapper>
    </LocationWrapper>
  );
};

export default SitterLocation;

const LocationWrapper = styled.div`
  height: 420px;
  margin-top: 50px;
  border: 1px solid #dfe3e9;
  box-shadow: 5px 5px 5px #dfe3e9;
  border-radius: 10px;
  padding: 20px;
  @media (max-width: 1000px) {
    width: 100vw;
  }
`;

const LocationTop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

const LocationTitle = styled.p`
  font-size: 20px;
  @media (max-width: 1000px) {
    font-size: 18px;
  }
`;

const LocationDes = styled.p`
  font-size: 13px;
  color: gray;
  @media (max-width: 1000px) {
    font-size: 13px;
  }
`;

const LocationMapWrapper = styled.div`
  margin-top: 30px;
  height: 100px;
`;

import React from 'react';
import PetSitterItem from '../PetSitterItem/PetSitterItem';
import styled from 'styled-components';

const PetSitterList = ({ isDarkMode, data }) => {
  return (
    <PetSitterItems>
      {data.map((item, index) => (
        <PetSitterItem isDarkMode={isDarkMode} key={index} item={item} />
      ))}
    </PetSitterItems>
  );
};

export default PetSitterList;

const PetSitterItems = styled.div`
  margin-top: 55px;
`;

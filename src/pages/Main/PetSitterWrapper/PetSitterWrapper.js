import React, { useState } from 'react';
import PetSitterList from '../PetSitterList/PetSitterList';
import SortButton from '../../../Components/Button/SortButton';
import styled from 'styled-components';

const SORT_BTN_LIST = [
  { id: 1, text: '인기순', query: 'many_comments' },
  { id: 2, text: '가격순', query: 'low_price' },
];

const PetSitterWrapper = ({ isDarkMode, updateCheckedList, data }) => {
  const [currentSortBtn, setCurrentSortBtn] = useState('인기순');

  return (
    <PetSitterContainer>
      <PetSitterSort>
        <SortContainer>
          {SORT_BTN_LIST.map(item => (
            <SortButton
              key={item.id}
              handleSort={() => setCurrentSortBtn(item.text)}
              updateCheckedList={updateCheckedList}
              currentSortBtn={currentSortBtn}
              type="sort"
              item={item}
            />
          ))}
          <SortIcon src="/images/Main/sort-solid.svg" />
        </SortContainer>
      </PetSitterSort>
      <PetSitterList isDarkMode={isDarkMode} data={data} />
    </PetSitterContainer>
  );
};

export default PetSitterWrapper;

const PetSitterContainer = styled.section`
  width: 100%;
`;

const PetSitterSort = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center; ;
`;

const SortIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 12px;
`;

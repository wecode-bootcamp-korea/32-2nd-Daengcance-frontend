import React from 'react';
import styled from 'styled-components';

const FilterButton = ({
  handleFilter,
  currentFilterBtn,
  updateCheckedList,
  type,
  item,
}) => {
  const handleClick = () => {
    handleFilter(item.id);
    updateCheckedList(type, item.id);
  };
  return (
    <FilterBtn onClick={handleClick} isClicked={currentFilterBtn === item.id}>
      {item.text}
    </FilterBtn>
  );
};

export default FilterButton;

const FilterBtn = styled.button`
  margin-right: 14px;
  border: 1.5px solid
    ${props => (props.isClicked ? props.theme.btnColor : '#bbc1cc')};
  border-radius: 28px;
  color: ${props => (props.isClicked ? props.theme.btnColor : '#bbc1cc;')};
  font-size: 14px;
  font-weight: bold;
  padding: 16px 32px;
  transition: all 200ms ease-out;
`;

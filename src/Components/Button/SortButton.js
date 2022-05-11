import React from 'react';
import styled from 'styled-components';

const SortButton = ({
  handleSort,
  updateCheckedList,
  currentSortBtn,
  type,
  item,
}) => {
  const handleClick = () => {
    handleSort(item);
    updateCheckedList(type, item.query);
  };

  return (
    <SortBtn onClick={handleClick} isClicked={currentSortBtn === item.text}>
      {item.text}
    </SortBtn>
  );
};
export default SortButton;

const SortBtn = styled.button`
  margin-left: 12px;
  color: ${props => (props.isClicked ? '#71A1FF' : '#bbc1cc')};
  font-size: 16px;
  transition: color 200ms ease-out;
`;

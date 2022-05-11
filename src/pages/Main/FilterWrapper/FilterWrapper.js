import React, { useState } from 'react';
import FilterButton from '../../../Components/Button/FilterButton';
import styled from 'styled-components';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const FILTER_BTN_LIST = [
  { id: 1, text: '픽업 가능' },
  { id: 2, text: '반려동물 없음' },
  { id: 3, text: '마당 있음' },
];

const FilterWrapper = ({
  isDarkMode,
  setAddress,
  setModalVisible,
  updateCheckedList,
  address,
  reserveDate,
}) => {
  const [currentFilterBtn, setCurrentFilterBtn] = useState(null);

  const handleFilter = itemID => {
    itemID === currentFilterBtn
      ? setCurrentFilterBtn(null)
      : setCurrentFilterBtn(itemID);
  };

  const openPost = e => {
    e.target.value || setModalVisible(prev => ({ ...prev, postModal: true }));
  };

  const openCalendar = () => {
    setModalVisible(prev => ({ ...prev, calendarModal: true }));
  };

  const changeAddress = e => {
    setAddress(e.target.value);
  };

  return (
    <FilterContainer>
      <FilterTop>
        <FilterLocation>
          <FilterTitle>어디에 사시나요?</FilterTitle>
          <LocationInputWrapper>
            <SearchIcon src="/images/Main/search.svg" />
            <LocationInput
              isDarkMode={isDarkMode}
              onClick={openPost}
              onChange={changeAddress}
              value={address}
            />
          </LocationInputWrapper>
        </FilterLocation>
        <FilterDate>
          <FilterTitle>언제 맡기시나요?</FilterTitle>
          <DateInputContainer>
            <CalendarIcon src="/images/Main/calendar.svg" />
            <DateInput isDarkMode={isDarkMode} onClick={openCalendar}>
              {reserveDate.startDate || '체크인 날짜'}
            </DateInput>
            <ArrowRightIcon src="/images/Main/arrowRight.svg" />
            <DateInput isDarkMode={isDarkMode} onClick={openCalendar}>
              {reserveDate.endDate || '체크아웃 날짜'}
            </DateInput>
          </DateInputContainer>
        </FilterDate>
      </FilterTop>
      <FilterBottom>
        <FilterTitle>원하시는 조건을 선택하세요</FilterTitle>
        <BottomBtnContainer>
          {FILTER_BTN_LIST.map(item => (
            <FilterButton
              key={item.id}
              handleFilter={handleFilter}
              currentFilterBtn={currentFilterBtn}
              updateCheckedList={updateCheckedList}
              type="filter"
              item={item}
            />
          ))}
        </BottomBtnContainer>
      </FilterBottom>
    </FilterContainer>
  );
};

export default FilterWrapper;

const FilterContainer = styled.section`
  width: 100%;
  /* margin-top: 180px; */
  padding-top: 180px;
  padding-bottom: 85px;
`;

const FilterTop = styled.div`
  display: flex;
  width: 100%;
`;

const FilterLocation = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 25px);
  margin-right: 50px;
`;

const FilterTitle = styled.p`
  margin-bottom: 27px;
  font-size: 14px;
`;

const LocationInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.theme.btnGray};
  padding: 0 24px 0 17px;
`;

const LocationInput = styled.input.attrs(() => ({
  placeholder: '동 이름을 검색하세요 (예. 논현동)',
}))`
  flex-basis: 100%;
  height: 52px;
  margin: 0 12px;
  font-size: 17px;
  border: none;
  background-color: ${props => props.isDarkMode && '#333333'};
  transition: background-color 200ms ease-in;
  &::placeholder {
    color: ${props => props.isDarkMode && '#fff'};
  }
`;

const SearchIcon = styled.img`
  width: 25px;
  height: 25px;
`;

const FilterDate = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 25px);
`;

const DateInputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 52px;
  border: 1px solid ${props => props.theme.btnGray};
  padding: 0 24px 0 17px;
`;

const CalendarIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 12px; ;
`;

const DateInput = styled.div`
  width: 150px;
  padding-left: 12px;
  color: ${props => (props.isDarkMode ? '#fff' : '#757575')};
  /* color: #757575; */
  font-size: 17px;
  font-family: sans-serif;
  cursor: pointer;
`;

const ArrowRightIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 24px;
`;

const FilterBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 70px;
`;

const BottomBtnContainer = styled.div`
  width: 100%;
`;

import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import styled from 'styled-components';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const MainCalendarModal = ({ setModalVisible, updateCheckedList }) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const closeCalendarModal = e => {
    e.target === e.currentTarget &&
      setModalVisible(prev => ({ ...prev, calendarModal: false }));
  };

  const handleChange = item => {
    const startDate = new Date(
      item.selection.startDate.getTime() -
        item.selection.startDate.getTimezoneOffset() * 60000
    )
      .toISOString()
      .slice(0, 10);
    const endDate =
      item.selection.endDate &&
      new Date(
        item.selection.endDate.getTime() -
          item.selection.endDate.getTimezoneOffset() * 60000
      )
        .toISOString()
        .slice(0, 10);

    setDate([item.selection]);
    updateCheckedList('calendar', { startDate, endDate });
  };

  return (
    <ModalBackground onClick={closeCalendarModal}>
      <ModalContainer>
        <DateRange
          minDate={new Date()}
          months={2}
          direction="horizontal"
          editableDateInputs={true}
          onChange={handleChange}
          moveRangeOnFirstSelection={false}
          ranges={date}
        />
      </ModalContainer>
    </ModalBackground>
  );
};

export default MainCalendarModal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 200, 80%);
`;

const ModalContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

import React from 'react';
import styled from 'styled-components';

const PassedReservation = ({ reservePassed }) => {
  return (
    <>
      {reservePassed.length !== 0 ? (
        reservePassed.map((passedReserve, idx) => (
          <MyReservationWrapper key={idx}>
            <ReservationInfo>
              <ReservationInfoLeft>
                <SitterName>{passedReserve.sittername} 펫시터님</SitterName>
                <ReservationDate>
                  {passedReserve.reservationStartDate}부터{' '}
                  {passedReserve.reservationEndDate}까지
                </ReservationDate>
              </ReservationInfoLeft>
              <ReservationCount>
                소형견 {passedReserve.petcount}마리
              </ReservationCount>
            </ReservationInfo>
          </MyReservationWrapper>
        ))
      ) : (
        <PassedReservationWrapper>
          <NonePassedReservation>
            지난 예약 내역이 없습니다.
          </NonePassedReservation>
        </PassedReservationWrapper>
      )}
    </>
  );
};

export default PassedReservation;

const PassedReservationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 50%;
`;

const NonePassedReservation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  font-size: 20px;
`;

const MyReservationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 80px;
  margin-bottom: 20px;
  padding: 0px 50px;
  border: 1px solid #509bff80;
  border-radius: 5px;
  opacity: 0.5;
  @media (max-width: 1000px) {
    justify-content: space-around;
    width: 450px;
    padding: 0px 10px;
  }
`;

const ReservationInfo = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    margin-bottom: 5px;
    align-items: center;
  }
`;

const ReservationInfoLeft = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    display: block;
  }
`;

const SitterName = styled.p`
  margin-left: 20px;
  font-size: 17px;
  @media (max-width: 1000px) {
    margin-bottom: 10px;
    font-size: 16px;
  }
`;
const ReservationDate = styled(SitterName)``;
const ReservationCount = styled(SitterName)``;

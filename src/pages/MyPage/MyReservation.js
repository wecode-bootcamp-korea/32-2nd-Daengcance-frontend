import React from 'react';
import styled from 'styled-components';

const MyReservation = ({ reserveNow, cancelRes }) => {
  return (
    <>
      {reserveNow.length !== 0 ? (
        reserveNow.map((reserveNows, idx) => (
          <MyReservationWrapper key={idx}>
            <ReservationInfoLeft>
              <SitterName>{reserveNows.sittername} 펫시터님</SitterName>
              <ReservationDate>
                {reserveNows.reservationStartDate}부터{' '}
                {reserveNows.reservationEndDate}까지
              </ReservationDate>
              <ReservationCount>
                소형견 {reserveNows.petcount}마리
              </ReservationCount>
            </ReservationInfoLeft>
            <ReservationInfoRight>
              {reserveNows.cancelStatus ? (
                <ReservationStatus cancelStatus={reserveNows.cancelStatus}>
                  요청 중
                </ReservationStatus>
              ) : (
                <ReservationStatus cancelStatus={reserveNows.cancelStatus}>
                  취소 확인 중
                </ReservationStatus>
              )}
              <CancelReservation
                cancelStatus={reserveNows.cancelStatus}
                onClick={() => cancelRes(reserveNows.id)}
              >
                요청 취소
              </CancelReservation>
            </ReservationInfoRight>
          </MyReservationWrapper>
        ))
      ) : (
        <NonePassedReservation>예약 내역이 없습니다.</NonePassedReservation>
      )}
    </>
  );
};

export default MyReservation;

const NonePassedReservation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin-bottom: 20px;
  font-size: 20px;
  @media (max-width: 1000px) {
    width: 450px;
  }
`;

const MyReservationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 80px;
  margin-bottom: 20px;
  padding: 0px 10px;
  border: 1px solid #509bff80;
  border-radius: 5px;
  @media (max-width: 1000px) {
    padding: 10px 10px;
    width: 450px;
  }
`;

const ReservationInfoLeft = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 3%;
  }
`;

const SitterName = styled.p`
  margin-left: 20px;
  font-size: 15px;
  @media (max-width: 1000px) {
    font-size: 13px;
    margin-bottom: 8px;
  }
`;
const ReservationDate = styled(SitterName)``;
const ReservationCount = styled(SitterName)``;

const ReservationInfoRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
  }
`;

const ReservationStatus = styled.p`
  margin-right: 20px;
  color: ${props => (props.cancelStatus ? 'black' : 'red')};
  @media (max-width: 1000px) {
    font-size: 13px;
  }
`;

const CancelReservation = styled.button`
  border-style: none;
  width: 100px;
  height: 40px;
  color: white;
  background-color: #509bff;
  opacity: ${props => (props.cancelStatus ? '1' : '0.5')};
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: 1000px) {
    width: 70px;
    font-size: 12px;
  }
`;

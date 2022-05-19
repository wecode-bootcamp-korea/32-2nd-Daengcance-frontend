import React, { useState } from 'react';
import MyReservation from './MyReservation';
import MyReview from './MyReview';
import PassedReservation from './PassedReservation';
import styled from 'styled-components';

const reviewData = [
  {
    id: '1',
    text: '우리 아이가 정말 좋은 시설에 다녀온 것 같아요! 덕분에 오랜만에 마음 편한 여행을 다녀왔습니다.',
    sitter: '유동혁',
    date: '2022-06-04 20:12',
  },
  {
    id: '2',
    text: '펫시터님께서 엄청 꼼꼼하세요! 매일마다 사진도 보내주시고 우리 아이가 잘 케어받고 있구나를 느끼게 해 주십니다.',
    sitter: '이수광',
    date: '2022-01-24 20:12',
  },
];

const reservationData = [
  {
    id: 1,
    sittername: '장형원',
    reservationStartDate: '2022-05-23',
    reservationEndDate: '2022-05-24',
    petcount: 2,
    cancelStatus: true,
    reservationState: 'loading',
  },
  {
    id: 2,
    sittername: '최지수',
    reservationStartDate: '2022-06-01',
    reservationEndDate: '2022-06-03',
    petcount: 1,
    cancelStatus: true,
    reservationState: 'loading',
  },
  {
    id: 3,
    sittername: '유동혁',
    reservationStartDate: '2021-07-13',
    reservationEndDate: '2021-07-15',
    petcount: 3,
    cancelStatus: true,
    reservationState: 'passed',
  },
  {
    id: 4,
    sittername: '이수광',
    reservationStartDate: '2022-01-20',
    reservationEndDate: '2022-01-23',
    petcount: 2,
    cancelStatus: true,
    reservationState: 'passed',
  },
];

const MyPage = () => {
  const [isNowReserve, setIsNowReserve] = useState(true);
  const [reviews, setReviews] = useState(reviewData);
  const [reserve, setReserve] = useState(reservationData);

  const reserveNow = reserve.filter(
    state => state.reservationState === 'loading'
  );
  const reservePassed = reserve.filter(
    state => state.reservationState === 'passed'
  );

  const goDelete = id => {
    if (window.confirm('리뷰를 삭제하시겠습니까?')) {
      setReviews(reviews.filter(review => review.id !== id));
      alert('리뷰가 삭제되었습니다.');
    }
  };

  const cancelRes = id => {
    const reserveIdx = reserve.findIndex(reserve => reserve.id === id);
    if (reserve[reserveIdx].cancelStatus) {
      if (window.confirm('예약을 취소 요청하시겠습니까?')) {
        alert('요청되었습니다.');
        const newReserve = [...reserve];
        newReserve[reserveIdx].cancelStatus = false;
        setReserve(newReserve);
      }
    } else {
      alert('이미 취소요청되었습니다. 변경하시려면 고객센터로 문의바랍니다.');
    }
  };

  return (
    <MyPageWrapper>
      <MyPageWrapperDiv>
        <MyPageTitle>예약내역</MyPageTitle>
        <ReservationState>
          <StatusBtnWrapper>
            <StatusNowBtn
              isNowReserve={isNowReserve}
              onClick={() => setIsNowReserve(true)}
            >
              진행중인 예약
            </StatusNowBtn>
            <StatusPassedBtn
              isNowReserve={isNowReserve}
              onClick={() => setIsNowReserve(false)}
            >
              지난 예약
            </StatusPassedBtn>
          </StatusBtnWrapper>
          {isNowReserve ? (
            <MyReservation cancelRes={cancelRes} reserveNow={reserveNow} />
          ) : (
            <PassedReservation reservePassed={reservePassed} />
          )}
        </ReservationState>
        <MyReviewWrapper>
          <MyReviewTitle>내가 쓴 리뷰</MyReviewTitle>
          <ReviewState>
            {reviews.length === 0 ? (
              <NoneReview>내가 쓴 리뷰가 없습니다</NoneReview>
            ) : (
              reviews.map((review, idx) => (
                <MyReview
                  key={idx}
                  goDelete={() => goDelete(review.id)}
                  review={review}
                  setReviews={setReviews}
                />
              ))
            )}
          </ReviewState>
        </MyReviewWrapper>
      </MyPageWrapperDiv>
    </MyPageWrapper>
  );
};

export default MyPage;

const MyPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 200px;
  }
`;

const MyPageWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 1000px;
  min-height: 700px;
  padding: 40px;
  @media (max-width: 1000px) {
    padding: 20px;
    width: 500px;
  }
`;

const MyPageTitle = styled.p`
  display: block;
  margin-bottom: 20px;
  font-size: 30px;
  padding: 20px 0px;
  border-bottom: 1px dashed black;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;

const ReservationState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1000px) {
    width: 500px;
  }
`;

const StatusBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 800px;
  height: 60px;
  @media (max-width: 1000px) {
    width: 400px;
  }
`;

const StatusNowBtn = styled.button`
  width: 400px;
  height: 50px;
  border-style: none;
  background-color: white;
  font-size: 20px;
  padding-bottom: 10px;
  border-bottom: ${props =>
    props.isNowReserve ? '1px solid blue' : '1px solid white'};
  cursor: pointer;
  @media (max-width: 1000px) {
    font-size: 18px;
  }
`;

const StatusPassedBtn = styled(StatusNowBtn)`
  border-bottom: ${props =>
    props.isNowReserve ? '1px solid white' : '1px solid blue'};
`;

const MyReviewWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
`;

const MyReviewTitle = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 30px;
  padding: 20px 0px;
  border-bottom: 1px dashed black;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;

const ReviewState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const NoneReview = styled.p`
  margin: 50px 0px;
  font-size: 20px;
`;

import React from 'react';
import styled from 'styled-components';

const MyReview = ({ review, goDelete }) => {
  const { text, date, sitter } = review;

  const reviewMonth = (new Date(date).getMonth() + 1).toString();
  const reviewDate = new Date(date).getDate().toString();
  const reviewHour = new Date(date).getHours().toString();
  const reviewMinute = new Date(date).getMinutes().toString();

  return (
    <MyReviewWrapper>
      <MyReviewLeft>
        <ReviewSitterName>{sitter} 펫시터님</ReviewSitterName>
        <ReviewContent>{text}</ReviewContent>
      </MyReviewLeft>
      <MyReviewRight>
        <ReviewTime>
          {reviewMonth}월 {reviewDate}일 {reviewHour}시 {reviewMinute}분
        </ReviewTime>
        <ReviewDelete onClick={goDelete}>삭제</ReviewDelete>
      </MyReviewRight>
    </MyReviewWrapper>
  );
};

export default MyReview;

const MyReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0px 50px;
  border: 1px solid #509bff80;
  border-radius: 5px;
  width: 100%;
  min-height: 80px;
  @media (max-width: 1000px) {
    width: 450px;
    padding: 0px 10px;
    margin-bottom: 20px;
  }
`;

const MyReviewLeft = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 10px;
    width: 300px;
    align-items: start;
    justify-content: center;
    width: 50%;
  }
`;

const ReviewSitterName = styled.p`
  display: flex;
  justify-content: center;
  width: 200px;
  margin-right: 20px;
  text-align: right;
  @media (max-width: 1000px) {
    width: 100px;
    font-size: 14px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 0.5px solid blue;
  }
`;

const ReviewContent = styled.p`
  margin-right: 10px;
  font-size: 15px;
  width: 500px;
  line-height: 1.5;
  @media (max-width: 1000px) {
    width: 100%;
    white-space: normal;
  }
`;

const MyReviewRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 40%;
  @media (max-width: 1000px) {
    width: 40%;
  }
`;

const ReviewTime = styled.p`
  margin-right: 10px;
  font-size: 15px;
  @media (max-width: 1000px) {
    font-size: 13px;
  }
`;
const ReviewDelete = styled.button`
  border-style: none;
  background-color: white;
  color: red;
  font-size: 15px;
  margin-right: 10px;
  cursor: pointer;
`;

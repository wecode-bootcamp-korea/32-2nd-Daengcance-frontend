import React from 'react';
import styled from 'styled-components';

const ReviewDetail = ({ setIsModal, detailData, setDetailData, mockData }) => {
  const changeNextData = () => {
    setDetailData(prev => {
      if (prev.id < mockData.length) {
        return mockData.filter(
          data => Number(prev.id) + 1 === Number(data.id)
        )[0];
      }
      return prev;
    });
  };

  const changePrevData = () => {
    setDetailData(prev => {
      if (prev.id > 1) {
        return mockData.filter(
          data => Number(prev.id) - 1 === Number(data.id)
        )[0];
      }
      return prev;
    });
  };

  return (
    <>
      <Background onClick={() => setIsModal(false)} />
      <ReviewDetailBox>
        <Header>👍 서울 동작구 상도동 펫시터 후기</Header>
        <CoverBox>
          <Card>
            <BtnFix>
              <LeftArrow onClick={changePrevData} src="images/Left.png" />
              <RightArrow onClick={changeNextData} src="images/Right.png" />
              <Cover src={detailData.img} />
            </BtnFix>
            <CardTop>
              <Title>
                {detailData.name} 보호자님
                <SubTitle>
                  {detailData.address} 펫시터님과 함께 했어요.
                </SubTitle>
              </Title>
              <Line />
              <Text>{detailData.text}</Text>
            </CardTop>
            <Line />
            <CardBottom>
              <Info>이 후기의 펫시터가 궁금하다면?</Info>
              <InfoBox>
                <Profile src="/images/profile.jpg" />
                <ProfileText>
                  훔바룸바 펫시터 · {detailData.address}
                </ProfileText>
              </InfoBox>
            </CardBottom>
          </Card>
        </CoverBox>
        <ReviewBtn onClick={() => setIsModal(false)}>
          상세 후기창 닫기
        </ReviewBtn>
      </ReviewDetailBox>
    </>
  );
};

export default ReviewDetail;

const Background = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  justify-items: center;
  top: 0;
  left: 0;
  background-color: black;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  z-index: 50;
`;

const ReviewDetailBox = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 800px;
  width: 100%;
  height: auto;
  padding: 50px;
  z-index: 100;
  position: absolute;
  background-color: white;
  border-radius: 35px;
`;

const Header = styled.div`
  margin-bottom: 40px;
  font-size: 30px;
  font-weight: 700;
`;

const BtnFix = styled.div`
  position: relative;
`;

const LeftArrow = styled.img`
  position: absolute;
  width: 50px;
  left: -14%;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    padding: 5px;
    transition: all 0.5s;
  }
`;

const RightArrow = styled.img`
  position: absolute;
  width: 50px;
  right: -14%;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    padding: 5px;
    transition: all 0.5s;
  }
`;

const Card = styled.div`
  max-width: 800px;
  height: auto;
  border-radius: 20px;
  padding: 10px;
  box-shadow: rgb(235 235 235) 1px 1px 12px 7px;
  margin: 0 40px;
  background-color: white;
`;

const CoverBox = styled.div`
  display: flex;
  align-items: center;
`;

const Cover = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 12px;
`;

const CardTop = styled.div`
  padding: 20px;
`;

const Title = styled.div`
  font-size: 26px;
  margin-bottom: 15px;
`;

const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 200;
  margin: 20px 0px;
  color: rgb(77, 80, 85);
`;

const Text = styled.div`
  line-height: 30px;
  height: auto;
  margin: 20px 0px;
  color: rgb(77, 80, 85);
`;

const Line = styled.div`
  width: 90%;
  height: 1.2px;
  background-color: rgb(235, 235, 235);
  margin: 0 auto;
`;

const CardBottom = styled.div`
  padding: 20px;
`;

const Info = styled.div`
  font-size: 20px;
  margin-top: 15px;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f5f1f1;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    transition: all 0.4s;
  }
`;

const Profile = styled.img`
  margin-right: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileText = styled.div``;

const ReviewBtn = styled.div`
  margin-top: 40px;
  width: 56%;
  padding: 20px;
  text-align: center;
  border-radius: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.4s;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    transition: all 0.4s;
  }
`;

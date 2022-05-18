import React from 'react';
import styled from 'styled-components';

function Cards({
  data,
  data: { name, siter, address, text, img },
  setDetailData,
  activeModal,
}) {
  const handleClick = () => {
    activeModal();
    setDetailData(data);
  };

  return (
    <Card>
      <Cover src={img} />
      <CardTop>
        <Title>{name} 보호자님</Title>
        <Text>{text}</Text>
        <MoreBtn onClick={handleClick}>내용 더 보기</MoreBtn>
      </CardTop>
      <Line />
      <CardBottom>
        <Info>이 후기의 펫시터가 궁금하다면?</Info>
        <InfoBox>
          <Profile src="/images/profile.jpg" />
          <ProfileText>
            {siter} 펫시터 · {address}
          </ProfileText>
        </InfoBox>
      </CardBottom>
    </Card>
  );
}

export default Cards;

const Card = styled.div`
  width: 465px;
  height: auto;
  border-radius: 20px;
  padding: 10px;
  box-shadow: rgb(235 235 235) 1px 1px 12px 7px;
  margin-bottom: 30px;
  transition: all 0.2s;
  &:hover {
    padding: 20px;
    transition: all 0.2s;
  }
`;

const Cover = styled.img`
  width: 100%;
  height: auto;
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

const Text = styled.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.8em;
  height: 9em;
  color: rgb(77, 80, 85);
`;

const MoreBtn = styled.div`
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  margin-top: 15px;
  background-color: #f5f1f1;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    transition: all 0.4s;
  }
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

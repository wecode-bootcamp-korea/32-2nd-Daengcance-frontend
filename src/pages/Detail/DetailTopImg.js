import React from 'react';
import styled from 'styled-components';

const DetailTopImg = ({ houseImg }) => {
  return (
    <DetailTopImgWrapper>
      {houseImg.map((img, idx) => (
        <SeperatedImg key={idx} src={img} />
      ))}
    </DetailTopImgWrapper>
  );
};

export default DetailTopImg;

const DetailTopImgWrapper = styled.div`
  width: 100%;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const SeperatedImg = styled.img.attrs(props => ({
  alt: '집 이미지',
}))`
  width: 50%;
  height: 580px;
  padding: 20px;
  box-sizing: border-box;
  transition: 0.2s;
  &:hover {
    transition: 0.5s;
    transform: scale(1.05, 1.05);
  }
  @media (max-width: 1000px) {
    width: 100vw;
    height: 400px;
  }
  @media (min-width: 2000px) {
    height: 800px;
  }
`;

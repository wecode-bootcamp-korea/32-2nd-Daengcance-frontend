import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailTopImg from './DetailTopImg';
import DetailMain from './DetailMain/DetailMain';
import DetailAside from './DetailAside/DetailAside';
import styled from 'styled-components';

const Detail = () => {
  const [detailData, setData] = useState({});
  const { detailId } = useParams();

  console.log(detailId);

  useEffect(() => {
    fetch(`http://10.58.2.75:8000/petsitters/detail/${detailId}`)
      .then(response => response.json())
      .then(data => setData(data.result));
  }, []);

  const plusCount = countDay => {
    if (countDay !== 0) {
      if (detailData.count === 6) {
        alert('최대 6마리까지만 선택 가능합니다');
      } else {
        const newCount = { ...detailData };
        newCount.count++;
        setData(newCount);
      }
    } else {
      alert('날짜를 먼저 선택해주세요');
    }
  };

  const minusCount = () => {
    if (detailData.count === 0) {
      setData(detailData);
    } else {
      const newCount = { ...detailData };
      newCount.count--;
      setData(newCount);
    }
  };

  if (!detailData.id) return <>데이터가 없습니다!</>;

  return (
    <DetailWrapper>
      <DetailTopImg houseImg={detailData.petsitter_image} />
      <DetailBottomWapper>
        <DetailMain data={detailData} />
        <DetailAside
          plusCount={plusCount}
          minusCount={minusCount}
          data={detailData}
          setData={setData}
        />
      </DetailBottomWapper>
    </DetailWrapper>
  );
};

export default Detail;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DetailBottomWapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-right: 50px;
  padding: 0px 20px;
  width: 75%;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
`;

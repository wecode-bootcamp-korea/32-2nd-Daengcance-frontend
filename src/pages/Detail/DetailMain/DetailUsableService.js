import React from 'react';
import styled from 'styled-components';

const useableService = [
  {
    title: '퍼피 케어',
    des: '1년 미만 퍼피 돌밤 가능',
  },
  {
    title: '노견 케어',
    des: '8년 이상 노견 돌봄 가능',
  },
  {
    title: '장기 예약',
    des: '14일 이상 돌봄 가능',
  },
  {
    title: '실내 놀이',
    des: '터그놀이, 노즈워크 등',
  },
  {
    title: '매일 산책',
    des: '산책 및 실외 배변 가능',
  },
  {
    title: '목욕 가능',
    des: '비용은 펫시터와 협의',
  },
  {
    title: '응급처치',
    des: '응급 상황 시 병원 이동 가능',
  },
  {
    title: '약물 복용',
    des: '경구(입) 약물 복용 가능',
  },
  {
    title: '모발 관리',
    des: '눈물 또는 빗질 관리 가능',
  },
  {
    title: '집앞 픽업',
    des: '비용은 펫시터와 협의',
  },
];

const DetailUsableService = () => {
  return (
    <DetailUsableServiceWrapper>
      <DetailUseableServiceTitle>이용가능서비스</DetailUseableServiceTitle>
      <DetailUseableEachServiceWrapper>
        {useableService.map((service, idx) => (
          <DetailUseableEachService key={idx}>
            <DetailUseableEachServiceTitle>
              {service.title}
            </DetailUseableEachServiceTitle>
            <DetailUseableEachServiceDes>
              {service.des}
            </DetailUseableEachServiceDes>
          </DetailUseableEachService>
        ))}
      </DetailUseableEachServiceWrapper>
    </DetailUsableServiceWrapper>
  );
};

export default DetailUsableService;

const DetailUsableServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const DetailUseableServiceTitle = styled.p`
  margin-top: 150px;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
`;

const DetailUseableEachServiceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px 20px 20px 40px;
`;
const DetailUseableEachService = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 70px;
  margin-top: 20px;
  margin-left: 15px;
  background-color: white;
  @media (max-width: 1000px) {
    width: 100px;
  }
`;

const DetailUseableEachServiceTitle = styled.p`
  font-size: 15px;

  @media (max-width: 1000px) {
    font-size: 13px;
  }
`;

const DetailUseableEachServiceDes = styled.p`
  margin-top: 10px;
  font-size: 13px;
  color: gray;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 11px;
  }
`;

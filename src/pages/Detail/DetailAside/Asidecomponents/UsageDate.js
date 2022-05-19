import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import styled from 'styled-components';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useNavigate } from 'react-router';

const UsageDate = ({ plusCount, minusCount, setData, data }) => {
  const navigate = useNavigate();
  const { count, price } = data;
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: 'selection',
    },
  ]);

  const convertDateString = {
    startDate: new Date(
      date[0].startDate.getTime() -
        date[0].startDate.getTimezoneOffset() * 60000
    )
      .toISOString()
      .slice(0, 10),
    endDate: new Date(
      date[0].endDate.getTime() - date[0].endDate.getTimezoneOffset() * 60000
    )
      .toISOString()
      .slice(0, 10),
  };

  const countDate = () => {
    const date1 = new Date(convertDateString.startDate);
    const date2 = new Date(convertDateString.endDate);
    const dateDays = (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);
    return dateDays;
  };

  const countDay = countDate();

  const amountPrice = parseInt(price * count * countDay * 1.1).toLocaleString();

  const successOrder = () => {
    if (parseInt(amountPrice) && countDay !== 0) {
      if (window.confirm('예약을 요청하시겠습니까?')) {
        alert(
          convertDateString.startDate +
            '부터 ' +
            convertDateString.endDate +
            '까지 예약이 요청되었습니다.'
        );
        navigate('/mypage');
        setDate([
          {
            startDate: new Date(),
            endDate: addDays(new Date(), 0),
            key: 'selection',
          },
        ]);
        const newCount = { ...count };
        newCount.count = 0;
        setData(newCount);
      }
    }
  };
  const orderBtnActive = countDay && count >= 1;

  return (
    <UsageDateWrapper>
      <UsageDateTop>
        <UsageDateTopTitle>언제 펫시터가 필요한가요?</UsageDateTopTitle>
        <ShowDateDiv>
          <ShowDateInputTop
            readOnly
            placeholder={convertDateString.startDate}
          />
          ~
          <ShowDateInputBottom
            readOnly
            placeholder={convertDateString.endDate}
          />
        </ShowDateDiv>
        <DateRange
          showDateDisplay={false}
          minDate={new Date()}
          onChange={item => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
        />
      </UsageDateTop>
      <UsageDateMiddle>
        <UsageDateMiddleTitle>맡기시는 반려동물</UsageDateMiddleTitle>
        <HandleCount>
          <p>소형견</p>
          <UsageMinusCountBtn onClick={minusCount}>-</UsageMinusCountBtn>
          <CountStyle>{count}</CountStyle>
          <UsagePlusCountBtn onClick={() => plusCount(countDay)}>
            +
          </UsagePlusCountBtn>
        </HandleCount>
        {count !== 0 && (
          <>
            <PriceAmount>
              <p>합계금액</p>
              <div>{amountPrice}원</div>
            </PriceAmount>
            <WholeDayPrice>
              <p>{countDay}박 비용</p>
              <p>{(price * count * countDay).toLocaleString()}원</p>
            </WholeDayPrice>
            <VAT>
              <p>부가세 10%</p>
              <p>{(price * count * countDay * 0.1).toLocaleString()}원</p>
            </VAT>
          </>
        )}
      </UsageDateMiddle>
      <UsageDateBtn orderBtnActive={orderBtnActive} onClick={successOrder}>
        예약 요청
      </UsageDateBtn>
    </UsageDateWrapper>
  );
};

export default UsageDate;

const ShowDateDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`;

const ShowDateInputTop = styled.input.attrs({
  type: 'password',
})`
  border-style: none;
  width: 48%;
  height: 35px;
  font-size: 18px;
  text-align: center;
  &::placeholder {
    color: black;
    font-weight: 600;
  }
  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

const ShowDateInputBottom = styled.input.attrs({
  type: 'password',
})`
  border-style: none;
  width: 48%;
  height: 35px;
  font-size: 18px;
  text-align: center;
  &::placeholder {
    color: black;
    font-weight: 600;
  }
  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

const WholeDayPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 15px;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;
const VAT = styled(WholeDayPrice)``;

const UsageDateWrapper = styled.div`
  padding: 15px;
  box-shadow: 5px 5px 5px #dfe3e9;
  border-radius: 10px;
  border: 1px solid #dfe3e9;
  @media (max-width: 1000px) {
    width: 100vw;
  }
`;

const UsageDateTop = styled.div``;

const UsageDateTopTitle = styled.p`
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 18px;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
`;

const UsageDateMiddle = styled.div`
  padding: 20px;
`;

const UsageDateMiddleTitle = styled.p`
  height: auto;
  font-size: 18px;
  margin-bottom: 50px;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
`;

const HandleCount = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0px 0px 0px;
  font-size: 15px;
  font-weight: bold;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
`;

const UsagePlusCountBtn = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid #71a2ff;
  border-radius: 50%;
  color: #71a2ff;
  font-weight: bold;
  font-size: 15px;
  @media (max-width: 1000px) {
    width: 30px;
    height: 30px;
    font-size: 15px;
  }
`;

const UsageMinusCountBtn = styled(UsagePlusCountBtn)``;

const CountStyle = styled.p`
  font-size: 20px;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
`;

const PriceAmount = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0px;
  border-bottom: 2px solid #dfe3e9;
  padding-bottom: 10px;
  font-size: 16px;
  @media (max-width: 1000px) {
    font-size: 13px;
  }
`;

const UsageDateBtn = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  letter-spacing: 2px;
  color: white;
  font-weight: 700;
  border-radius: 5px;
  font-size: 16px;
  background-color: ${props =>
    props.orderBtnActive ? '#71a2ff' : '#71a2ff80'};
  cursor: ${props => (props.orderBtnActive ? 'pointer' : 'not-allowed')};
  @media (max-width: 1000px) {
    width: 100%;
    height: 50px;
    font-size: 15px;
  }
`;

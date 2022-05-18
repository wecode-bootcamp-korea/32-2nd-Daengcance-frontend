import React, { useState } from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import Cards from './Card/Cards';
import Hidden from './ReviewHidden/Hidden';
import ReviewDetail from './ReviewDetail/ReviewDetail';

const Review = () => {
  const [mockData, setMockData] = useState(data);
  const [detailData, setDetailData] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const [writeModal, setWriteModal] = useState(false);
  const [hidden, setHidden] = useState(false);

  const activeModal = () => {
    setIsModal(prev => !prev);
  };

  return (
    <ReviewBox>
      {isModal && (
        <ReviewDetail
          detailData={detailData}
          setIsModal={setIsModal}
          setDetailData={setDetailData}
          mockData={mockData}
        />
      )}
      <Header>
        DaengCance 펫시터 후기
        <HeaderLogo
          src="/images/title2.png"
          onClick={() => {
            setHidden(!hidden);
          }}
        />
        <WriteOnOff
          onClick={() => {
            setWriteModal(!writeModal);
          }}
        >
          리뷰 작성하기
        </WriteOnOff>
      </Header>
      {hidden && <Hidden />}
      <WriteBox writeModal={writeModal}>
        <WriteBoxTop>
          <InputBox>
            <p>😉 이미지를 업로드해주세요. ※필수</p>
            <InputLabel>업로드</InputLabel>
            <InputImage type="file" accept="image/*" id="InputImage" />
          </InputBox>
          <SelectBox>
            <p>🤗 어떤 펫시터에게 맡겼었나요?</p>
            <SelectList>
              <select>
                <option value="김춘복">김춘복</option>
                <option value="옥분이">옥분이</option>
                <option value="황쌍철">황쌀철</option>
                <option value="곽두철">곽두철</option>
                <option value="김옥자">김옥자</option>
                <option value="형순옥">형순옥</option>
              </select>
            </SelectList>
          </SelectBox>
        </WriteBoxTop>
        <Textarea
          cols={100}
          rows={10}
          placeholder="리뷰 내용을 작성해주세요."
        />
        <WriteBtn>
          <button type="submit" style={{ color: 'white' }}>
            리뷰 작성
          </button>
        </WriteBtn>
      </WriteBox>
      <VideoBox writeModal={writeModal}>
        <Video
          autoPlay
          loop
          muted
          source
          src="/video/Dog.mp4"
          type="video/mp4"
        />
        <VideoText>
          열뤄분의 갱얼쥐스
          <br />
          댕캉스가 성심성의를 다해 맡아드립니다.
        </VideoText>
      </VideoBox>
      <Main>
        {mockData.map(data => {
          return (
            <Cards
              data={data}
              setDetailData={setDetailData}
              key={data.id}
              isModal={isModal}
              setIsModal={setIsModal}
              activeModal={activeModal}
            />
          );
        })}
      </Main>
    </ReviewBox>
  );
};

export default Review;

const ReviewBox = styled.div`
  max-width: 1000px;
  height: auto;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 800;
  font-family: 'EarlyFontDiary';
`;

const WriteBox = styled.div`
  position: absolute;
  display: ${props => (props.writeModal ? 'flex' : 'none')};
  flex-direction: column;
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  border-radius: 20px;
  height: auto;
  padding: 10px;
  box-shadow: rgb(235 235 235) 1px 1px 12px 7px;
  margin-bottom: 30px;
  z-index: 2;
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-family: 'GmarketSansMedium';
  margin-bottom: 20px;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
`;

const SelectBox = styled.div`
  display: flex;
  align-items: center;
`;

const WriteBoxTop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

const InputImage = styled.input`
  display: none;
`;

const InputLabel = styled.label.attrs({
  for: 'InputImage',
})`
  padding: 5px 20px;
  border-radius: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-left: 10px;
  transition: all 0.5s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    transition: all 0.5s;
  }
`;

const SelectList = styled.div`
  margin-left: 10px;
  border: none;
`;

const WriteBtn = styled.button`
  border: 1px solid black;
  border-radius: 18px;
  padding: 10px 100px;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.5s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    transition: all 0.5s;
  }
`;

const WriteOnOff = styled.div`
  font-size: 16px;
  font-family: 'GmarketSansMedium';
  border: 0.5px solid black;
  padding: 10px;
  border-radius: 30px;
  margin-left: 20px;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: black;
    transition: all 0.5s;
  }
`;

const HeaderLogo = styled.img`
  width: 42px;
  margin-left: 15px;
`;

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  height: auto;
  padding: 10px;
  justify-content: space-between;
`;

const VideoBox = styled.div`
  opacity: ${props => (props.writeModal ? '0%' : '100%')};
  transition: all 0.3s ease-in;
  position: relative;
  margin-bottom: 30px;
`;

const Video = styled.video`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
`;

const VideoText = styled.div`
  color: white;
  position: absolute;
  bottom: 30px;
  left: 30px;
  line-height: 25px;
  font-size: 20px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
`;

const data = [
  {
    id: '1',
    img: 'https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985_960_720.jpg',
    name: '김춘자',
    text: '우리집 갱얼쥐는 힙휍 갱월쥐~ 사료 먹을 때도 너무나도 갱갱갱! 우리집 갱얼쥐는 힙휍 갱월쥐~ 사료 먹을 때도 너무나도 갱갱갱! 우리집 갱얼쥐는 힙휍 갱월쥐~ 사료 먹을 때도 너무나도 갱갱갱! 우리집 갱얼쥐는 힙휍 갱월쥐~ 사료 먹을 때도 너무나도 갱갱갱! 우리집 갱얼쥐는 힙휍 갱월쥐~ 사료 먹을 때도 너무나도 갱갱갱!',
    sitter: '김춘복',
    address: '서울 마포구 관악동',
  },
  {
    id: '2',
    img: 'https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077_960_720.jpg',
    name: '김옥분',
    text: '나는 아무 생각이 없다. 나는 아무 생각이 없다. 나는 아무 생각이 없다. 나는 아무 생각이 없다. 나는 아무 생각이 없다. 나는 아무 생각이 없다. 나는 아무 생각이 없다. 나는 아무 생각이 없다. 나는 아무 생각이 없다. 나는 아무 생각이 없다. 나는 아무 생각이 없다. 나는 아무 생각이 없다.나는 아무 생각이 없다.  ',
    sitter: '김춘복',
    address: '서울 마포구 관악동',
  },
  {
    id: '3',
    img: 'https://cdn.pixabay.com/photo/2022/04/05/20/21/jack-russell-terrier-7114378_960_720.jpg',
    name: '양반킴',
    text: '왈왈왈 으르렁 컹컹 월월 으르르르르르 왈왈왈 으르렁 컹컹 월월 으르르르르르 왈왈왈 으르렁 컹컹 월월 으르르르르르 왈왈왈 으르렁 컹컹 월월 으르르르르르 왈왈왈 으르렁 컹컹 월월 으르르르르르 왈왈왈 으르렁 컹컹 월월 으르르르르르 왈왈왈 으르렁 컹컹 월월 으르르르르르 왈왈왈 으르렁 컹컹 월월 으르르르르르 왈왈왈 으르렁 컹컹 월월 으르르르르르 왈왈왈 으르렁 컹컹 월월 으르르르르르 왈왈왈 으르렁 컹컹 월월 으르르르르르 왈왈왈 으르렁 컹컹 월월 으르르르르르 왈왈왈 으르렁 컹컹 월월 으르르르르르 왈왈왈 으르렁 컹컹 월월 으르르르르르 왈왈왈 으르렁 컹컹 월월 으르르르르르 왈왈왈 으르렁 컹컹 월월 으르르르르르 왈왈왈 으르렁 컹컹 월월 으르르르르르 왈왈왈 으르렁 컹컹 월월 으르르르르르 ',
    sitter: '김춘복',
    address: '서울 마포구 관악동',
  },
  {
    id: '4',
    img: 'https://cdn.pixabay.com/photo/2018/03/18/18/06/australian-shepherd-3237735_960_720.jpg',
    name: '자옥쓰',
    text: '깨갱 깨갱 깨갱 끼얏호우우우 깨갱 깽깽 끄으으응 컹컹컹 깨갱 깨갱 깨갱 끼얏호우우우 깨갱 깽깽 끄으으응 컹컹컹 깨갱 깨갱 깨갱 끼얏호우우우 깨갱 깽깽 끄으으응 컹컹컹 깨갱 깨갱 깨갱 끼얏호우우우 깨갱 깽깽 끄으으응 컹컹컹 깨갱 깨갱 깨갱 끼얏호우우우 깨갱 깽깽 끄으으응 컹컹컹 깨갱 깨갱 깨갱 끼얏호우우우 깨갱 깽깽 끄으으응 컹컹컹 깨갱 깨갱 깨갱 끼얏호우우우 깨갱 깽깽 끄으으응 컹컹컹 깨갱 깨갱 깨갱 끼얏호우우우 깨갱 깽깽 끄으으응 컹컹컹 깨갱 깨갱 깨갱 끼얏호우우우 깨갱 깽깽 끄으으응 컹컹컹 깨갱 깨갱 깨갱 끼얏호우우우 깨갱 깽깽 끄으으응 컹컹컹 깨갱 깨갱 깨갱 끼얏호우우우 깨갱 깽깽 끄으으응 컹컹컹 깨갱 깨갱 깨갱 끼얏호우우우 깨갱 깽깽 끄으으응 컹컹컹 깨갱 깨갱 깨갱 끼얏호우우우 깨갱 깽깽 끄으으응 컹컹컹 깨갱 깨갱 깨갱 끼얏호우우우 깨갱 깽깽 끄으으응 컹컹컹 ',
    sitter: '김춘복',
    address: '서울 마포구 관악동',
  },
  {
    id: '5',
    img: 'https://cdn.pixabay.com/photo/2020/03/22/15/25/fetch-4957501_960_720.jpg',
    name: '이희옥',
    text: '컹컹컹 우르르렁 컹컹 컹컹컹 ! 컹컹컹 우르르렁 컹컹 컹컹컹 ! 컹컹컹 우르르렁 컹컹 컹컹컹 ! 컹컹컹 우르르렁 컹컹 컹컹컹 ! 컹컹컹 우르르렁 컹컹 컹컹컹 ! 컹컹컹 우르르렁 컹컹 컹컹컹 ! 컹컹컹 우르르렁 컹컹 컹컹컹 ! 컹컹컹 우르르렁 컹컹 컹컹컹 ! 컹컹컹 우르르렁 컹컹 컹컹컹 ! 컹컹컹 우르르렁 컹컹 컹컹컹 ! 컹컹컹 우르르렁 컹컹 컹컹컹 ! 컹컹컹 우르르렁 컹컹 컹컹컹 ! 컹컹컹 우르르렁 컹컹 컹컹컹 ! 컹컹컹 우르르렁 컹컹 컹컹컹 ! 컹컹컹 우르르렁 컹컹 컹컹컹 ! 컹컹컹 우르르렁 컹컹 컹컹컹 ! 컹컹컹 우르르렁 컹컹 컹컹컹 ! 컹컹컹 우르르렁 컹컹 컹컹컹 ! ',
    sitter: '김춘복',
    address: '서울 마포구 관악동',
  },
  {
    id: '6',
    img: 'https://cdn.pixabay.com/photo/2021/05/29/07/06/shiba-6292660_960_720.jpg',
    name: '원춘복',
    text: '아르르르르르르릉 아르르르르르르르르 크르르르르 으어어어으으으어어어크러얼 아르르르르르르릉 아르르르르르르르르 크르르르르 으어어어으으으어어어크러얼 아르르르르르르릉 아르르르르르르르르 크르르르르 으어어어으으으어어어크러얼 아르르르르르르릉 아르르르르르르르르 크르르르르 으어어어으으으어어어크러얼 아르르르르르르릉 아르르르르르르르르 크르르르르 으어어어으으으어어어크러얼 아르르르르르르릉 아르르르르르르르르 크르르르르 으어어어으으으어어어크러얼 아르르르르르르릉 아르르르르르르르르 크르르르르 으어어어으으으어어어크러얼 아르르르르르르릉 아르르르르르르르르 크르르르르 으어어어으으으어어어크러얼 ',
    sitter: '김춘복',
    address: '서울 마포구 관악동',
  },
  {
    id: '7',
    img: 'https://cdn.pixabay.com/photo/2019/12/30/16/07/chihuahua-4730005_960_720.jpg',
    name: '강덕배',
    text: '오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... 오늘도 코스피 지수가 메리크리스마스... ',
    sitter: '김춘복',
    address: '서울 마포구 관악동',
  },
  {
    id: '8',
    img: 'https://cdn.pixabay.com/photo/2021/02/06/06/29/dog-5987025_960_720.jpg',
    name: '쌍철두',
    text: '넷플릭스는 보는 것보다 주가보는게 더 재밌네요 ^^ !! 넷플릭스는 보는 것보다 주가보는게 더 재밌네요 ^^ !! 넷플릭스는 보는 것보다 주가보는게 더 재밌네요 ^^ !! 넷플릭스는 보는 것보다 주가보는게 더 재밌네요 ^^ !! 넷플릭스는 보는 것보다 주가보는게 더 재밌네요 ^^ !! 넷플릭스는 보는 것보다 주가보는게 더 재밌네요 ^^ !! 넷플릭스는 보는 것보다 주가보는게 더 재밌네요 ^^ !! 넷플릭스는 보는 것보다 주가보는게 더 재밌네요 ^^ !! 넷플릭스는 보는 것보다 주가보는게 더 재밌네요 ^^ !! 넷플릭스는 보는 것보다 주가보는게 더 재밌네요 ^^ !! 넷플릭스는 보는 것보다 주가보는게 더 재밌네요 ^^ !! 넷플릭스는 보는 것보다 주가보는게 더 재밌네요 ^^ !! 넷플릭스는 보는 것보다 주가보는게 더 재밌네요 ^^ !! 넷플릭스는 보는 것보다 주가보는게 더 재밌네요 ^^ !! 넷플릭스는 보는 것보다 주가보는게 더 재밌네요 ^^ !! 넷플릭스는 보는 것보다 주가보는게 더 재밌네요 ^^ !! ',
    sitter: '김춘복',
    address: '서울 마포구 관악동',
  },
  {
    id: '9',
    img: 'https://cdn.pixabay.com/photo/2017/07/11/18/12/funny-expression-2494538_960_720.jpg',
    name: '강마철',
    text: '대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 대출은 산와머니 ',
    sitter: '김춘복',
    address: '서울 마포구 관악동',
  },
  {
    id: '10',
    img: 'https://cdn.pixabay.com/photo/2015/05/28/15/24/malinois-and-border-collie-788032_960_720.jpg',
    name: '강철곤',
    text: '더 이상 쓸말이 없네요 더 이상 쓸말이 없네요 더 이상 쓸말이 없네요 더 이상 쓸말이 없네요 더 이상 쓸말이 없네요 더 이상 쓸말이 없네요 더 이상 쓸말이 없네요 더 이상 쓸말이 없네요 더 이상 쓸말이 없네요 더 이상 쓸말이 없네요 더 이상 쓸말이 없네요 더 이상 쓸말이 없네요 더 이상 쓸말이 없네요 더 이상 쓸말이 없네요 더 이상 쓸말이 없네요 더 이상 쓸말이 없네요 더 이상 쓸말이 없네요 더 이상 쓸말이 없네요 더 이상 쓸말이 없네요 더 이상 쓸말이 없네요 더 이상 쓸말이 없네요 더 이상 쓸말이 없네요 ',
    sitter: '김춘복',
    address: '서울 마포구 관악동',
  },
  {
    id: '11',
    img: 'https://cdn.pixabay.com/photo/2017/05/06/10/32/dog-2289451_960_720.jpg',
    name: '두철용',
    text: '정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 정신나갈거같애 ',
    sitter: '김춘복',
    address: '서울 마포구 관악동',
  },
];

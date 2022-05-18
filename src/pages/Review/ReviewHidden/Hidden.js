import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Time from './Time.js';

const Hidden = () => {
  const [user, setUser] = useState([]);
  const [list, setList] = useState([]);
  const [isRace, setIsRace] = useState(false);
  useEffect(() => {
    list.length !== 0 &&
      list.length === user.length &&
      alert(list.map((list, idx) => ` ${idx + 1}등 : ${list}\n`));
  }, [list]);
  const userInput = e => {
    let userList = e.target.value.split(',');
    setUser(userList);
  };
  const startRact = () => {
    setIsRace(!isRace);
  };
  return (
    <RaceBox>
      <InputBox>
        <Maker src="./images/maker.png" isRace={isRace} />
        <Title>&copy; DUCK WOO</Title>
        <Input
          type="text"
          onChange={userInput}
          placeholder="경견을 생성해주세요 ... 🐕"
        />
        <Start onClick={startRact}>시작</Start>
        <Point src="./images/flag.gif" />
      </InputBox>
      {user.map(user => (
        <Time isStart={isRace} setList={setList} name={user} />
      ))}
    </RaceBox>
  );
};

export default Hidden;

const Start = styled.button`
  background-color: green;
  font-family: 'GmarketSansMedium';
  color: white;
  padding: 10px;
  height: 40px;
  transition: all 0.3s;
  &:hover {
    transition: all 0.5s;
    background-color: black;
    color: yellow;
  }
`;

const Maker = styled.img`
  position: absolute;
  width: 80px;
  left: 0;
  top: -5px;
`;

const RaceBox = styled.div`
  margin-bottom: 5px;
`;

const InputBox = styled.div`
  position: relative;
  text-align: center;
  height: 110px;
  background-image: url(./images/crowd.gif);
`;

const Title = styled.p`
  padding: 10px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  background-color: yellow;
  height: 30px;
  /* width: 130px; */
  /* margin: 0 /auto; */
`;

const Input = styled.input`
  margin-top: 20px;
  font-family: 'GmarketSansMedium';
  height: 40px;
  padding: 10px;
  max-width: 400px;
  width: 100%;
  &::placeholder {
    text-align: center;
  }
`;

const Point = styled.img`
  width: 50px;
  position: absolute;
  right: 100px;
  bottom: -40px;
`;

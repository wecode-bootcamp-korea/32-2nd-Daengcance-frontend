import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const Time = ({ name, setList, isStart }) => {
  const [transX, setTransX] = useState(0);
  useEffect(() => {
    if (isStart) {
      const timer = setInterval(() => {
        setTransX(transX < 880 ? transX + Math.floor(Math.random() * 10) : 880);
      }, 50);
      return () => {
        clearInterval(timer);
      };
    }
  }, [transX, isStart]);
  useEffect(() => {
    transX === 880 && setList(prev => [...prev, name]);
  }, [transX]);
  return (
    <Track>
      <First trnasX={transX}>
        <Name>{name}</Name>
        <Run src="./images/run.gif" />
      </First>
    </Track>
  );
};
export default Time;
const First = styled.div`
  margin-top: 20px;
  transform: translateX(${props => props.trnasX}px);
  transition: all 0.5s;
`;

const Name = styled.div`
  display: inline;
  background-color: black;
  color: white;
  padding: 2px;
`;

const Run = styled.img`
  width: 40px;
  height: auto;
`;

const Track = styled.div`
  margin-bottom: 10px;
  border-bottom: 2px solid;
  max-width: 880px;
`;

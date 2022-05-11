import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = ({ isDarkMode }) => {
  return <LoadingSpinner isDarkMode={isDarkMode}>Loading...</LoadingSpinner>;
};

export default Loading;

const spinLoading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  /* background: ${props => (props.isDarkMode ? '#333333' : '#ffffff')}; */
  background: #ffffff;

  background: linear-gradient(
    to right,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  animation: ${spinLoading} 1.4s infinite linear;
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: rgb(223, 227, 234);
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }

  &:after {
    background: ${props => (props.isDarkMode ? '#333333' : '#ffffff')};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

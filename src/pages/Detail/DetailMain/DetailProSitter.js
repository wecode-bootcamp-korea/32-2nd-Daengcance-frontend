import React from 'react';
import styled from 'styled-components';

const DetailProSitter = ({ name }) => {
  return (
    <DetailProSitterWrapper>
      <DetailProSitterDesTitle>
        đ {name}ëě íëĄ íŤěí°ěëë¤
      </DetailProSitterDesTitle>
      <DetailProSitterDes>
        íëĄ íŤěí°ë ë¤ěě ěě˝ ě§í ę˛˝íęłź í¨ęť,
        <br /> ëě ęł ę° ë§ěĄąëëĽź ë°ě íŤěí°ěëë¤.
      </DetailProSitterDes>
    </DetailProSitterWrapper>
  );
};

export default DetailProSitter;

const DetailProSitterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding: 30px;
  width: 80%;
  font-size: 12px;
  background-color: #d3d3d360;
`;

const DetailProSitterDesTitle = styled.p`
  font-size: 20px;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
`;

const DetailProSitterDes = styled.div`
  line-height: 1.5;
  margin-top: 20px;
  font-size: 15px;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;

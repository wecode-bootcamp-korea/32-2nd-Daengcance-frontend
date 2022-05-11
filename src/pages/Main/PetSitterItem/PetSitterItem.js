import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const PetSitterItem = ({
  isDarkMode,
  item: {
    id,
    petsitter_image,
    address,
    grade,
    title,
    type,
    comment_count,
    price,
  },
}) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <PetSitterItemContainer onClick={goToDetail}>
      <PetSitterImg imgURL={petsitter_image} />
      <PetSitterInfo>
        <PetSitterInfoHeader>
          <PetSitterAddressAndGrade>
            {address} ・ <PetSitterGrade>{grade}</PetSitterGrade>
          </PetSitterAddressAndGrade>
          <PetSitterTitle>{title}</PetSitterTitle>
        </PetSitterInfoHeader>
        <PetSitterDetail>
          <PetSitterDatailLeft>
            <PetSiterFiltedType isDarkMode={isDarkMode}>
              {type.join(' ・ ')}
            </PetSiterFiltedType>
            <PetSiterCommentCount isDarkMode={isDarkMode}>
              후기 {comment_count}개
            </PetSiterCommentCount>
          </PetSitterDatailLeft>
          <PetSitterDatailRight>
            <PetSitterPrice isDarkMode={isDarkMode}>
              ₩{price.toLocaleString()}
            </PetSitterPrice>
          </PetSitterDatailRight>
        </PetSitterDetail>
      </PetSitterInfo>
    </PetSitterItemContainer>
  );
};

export default PetSitterItem;

const PetSitterItemContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 55px;
  border: 1px solid ${props => props.theme.btnGray};
  border-radius: 5px;
  padding: 3px;
  box-shadow: 0.5px 0.5px 5px 0px rgba(0, 0, 0, 0.15);
`;

const PetSitterImg = styled.div`
  width: 40%;
  height: 250px;
  background-image: url(${props => props.imgURL[0]});
  background-size: 100% 100%;
  border-radius: 5px;
  transition: background-image 300ms ease-in;
  &:hover {
    background-image: url(${props => props.imgURL[1]});
  }
`;

const PetSitterInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: auto;
  width: 70%;
  padding: 30px 33px 0px 38px;
`;

const PetSitterInfoHeader = styled.div`
  border-bottom: 1px solid ${props => props.theme.btnGray};
  padding-bottom: 20px;
`;

const PetSitterAddressAndGrade = styled.p`
  font-size: 13px;
`;

const PetSitterGrade = styled.span`
  color: ${props => props.theme.btnColor};
`;

const PetSitterTitle = styled(PetSitterAddressAndGrade)`
  margin-top: 14px;
  font-size: 18px;
`;

const PetSitterDetail = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;
`;

const PetSitterDatailLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PetSiterFiltedType = styled.p`
  color: ${props => (props.isDarkMode ? '#bbc1cc' : '#5e636d')};
  margin-bottom: 80px;
  font-size: 13px;
`;

const PetSiterCommentCount = styled.span`
  color: ${props => (props.isDarkMode ? '#bbc1cc' : '#5e636d')};
  font-size: 12px;
`;

const PetSitterDatailRight = styled.div`
  display: flex;
  align-items: flex-end;
`;

const PetSitterPrice = styled.span`
  color: ${props => (props.isDarkMode ? '#bbc1cc' : '#5e636d')};
`;

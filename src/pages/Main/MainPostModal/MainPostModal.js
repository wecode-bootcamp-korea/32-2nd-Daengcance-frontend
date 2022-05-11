import React from 'react';
import Postcode from '../DaumPostCode/DaumPostCode';
import styled from 'styled-components';

const MainPostModal = ({ setModalVisible, setAddress, updateCheckedList }) => {
  const closePostModal = e => {
    e.target === e.currentTarget &&
      setModalVisible(prev => ({ ...prev, postModal: false }));
  };

  return (
    <ModalBackground onClick={closePostModal}>
      <ModalContainer>
        <Postcode
          setModalVisible={setModalVisible}
          setAddress={setAddress}
          updateCheckedList={updateCheckedList}
        />
      </ModalContainer>
    </ModalBackground>
  );
};

export default MainPostModal;

const ModalBackground = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 200, 80%);
`;

const ModalContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

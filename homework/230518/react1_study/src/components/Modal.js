import React, { useState } from "react";
import styled from "styled-components";

const Modal = (props) => {
  const { setModal, name, track } = props;

  const onClose = () => {
    setModal(false);
  };

  return (
    <Wrapper>
      <Container>
        <ModalTop />
        <ModalContents>
          <p className="track">{track}</p>
          <p className="name">{name}님 환영합니다</p>
        </ModalContents>
        <CloseBtn onClick={onClose}>닫기</CloseBtn>
      </Container>
    </Wrapper>
  );
};
export default Modal;

const Wrapper = styled.div`
  width: 1920px;
  height: 1080px;

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  margin-top: -213px;

  animation: modal-bg-show 0.3s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Container = styled.div`
  width: 678px;
  height: 322.82px;
  aspect-ratio: 2.1/1;
  min-width: 400px;

  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 24px;
  background-color: #f5f5f5;
  button {
    min-width: 100px;
    margin-top: 6%;

    border-radius: 24.5px;
    border: none;
    color: white;
    background-color: #81a7d3;
  }
  // 모달 애니메이션
  animation: modal-show 0.3s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -20px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;
const ModalTop = styled.div`
  width: 678px;
  height: 60px;

  border-radius: 24px 24px 0 0;
  background-color: #bddaef;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
const ModalContents = styled.div`
  margin-top: 30px;
  opacity: 0.8;
  margin-bottom: -30px;
  font-family: "Noto Sans";

  .track {
    font-weight: 700;
    font-size: 18px;
    color: #3da0fc;
  }
  .name {
    font-weight: 600;
    font-size: 25px;
    color: #333333;
  }
`;
const CloseBtn = styled.button`
  width: 157px;
  height: 43px;
  aspect-ratio: 4.06/1;
  background: #81a7d3;
  border-radius: 24.5px;
  font-family: "Noto Sans";
`;

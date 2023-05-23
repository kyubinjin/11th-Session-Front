import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./components/Modal";

import design from "./images/design.png";
import front from "./images/front.png";
import back from "./images/back.png";

function App() {
  const [modal, setModal] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    track: "",
  });

  const { name, track } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onTrackSelect = (selectedTrack) => {
    setInputs({ ...inputs, track: selectedTrack });
  };

  const openModal = () => {
    setModal(true);
  };

  return (
    <Wrapper1>
      <Wrapper2>
        <Title>
          <p>Create a nameModal</p>
          <p>이름 모달 만들기</p>
        </Title>
        <InputWrapper>
          <div className="line" />
          <p>아기 사자의 이름을 입력해 주세요</p>
          <Input
            placeholder=""
            name="name"
            onChange={onChange}
            value={name}
          ></Input>
          <p className="trackText">트랙을 선택해주세요</p>
          <TrackWrapper>
            <div onClick={() => onTrackSelect("기획&디자인")}>
              <img src={design} alt="design" />
              <p>기획&디자인</p>
            </div>
            <div onClick={() => onTrackSelect("프론트엔드")}>
              <img src={front} alt="front" />
              <p>프론트엔드</p>
            </div>
            <div onClick={() => onTrackSelect("백엔드")}>
              <img src={back} alt="back" />
              <p>백엔드</p>
            </div>
          </TrackWrapper>
          <RegisterBtn onClick={openModal}>이름 모달 만들기</RegisterBtn>
        </InputWrapper>
        {modal ? <Modal setModal={setModal} name={name} track={track} /> : null}
      </Wrapper2>
    </Wrapper1>
  );
}

export default App;

const Wrapper1 = styled.div`
  width: 1920px;
  height: 1080px;
  background-color: #d8e4ec;
  font-family: "Noto Sans";
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper2 = styled.div`
  width: 754px;
  height: 654px;
  aspect-ratio: 1.27 /1;
  min-width: 502px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
`;
const Title = styled.div`
  width: 270px;
  height: 65px;
  margin-top: 53px;
  p {
    margin: 0;
    color: #333333;
    font-family: "Noto Sans";
  }
  :nth-child(1) {
    font-weight: 300;
    font-size: 15px;
    color: gray;
  }
  :nth-child(2) {
    font-weight: 600;
    font-size: 35px;
    width: 270px;
    height: 48px;
    color: black;
  }
`;
const InputWrapper = styled.div`
  width: 641px;
  height: 431px;
  .line {
    width: 641px;
    border: 0.75px solid #d7d7d7;
    margin: 6.7% 0;
  }
  p {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    margin-left: 60px;
    font-family: "Noto Sans";
    color: black;
  }
  .trakText {
    width: 194px;
    height: 30px;
    color: #414141;
    margin-bottom: 40px;
    font-family: "Noto Sans";
    font-weight: 500;
  }
`;

const Input = styled.input`
  width: 516px;
  height: 50px;
  aspect-ratio: 7.6/1;
  margin-bottom: 30px;
  margin-top: 10px;
  padding-left: 10px;

  border: 0.8px solid #979797;
  box-shadow: 0px 1px 8px rgba(156, 156, 156, 0.15);
  border-radius: 5px;
  outline: none;
  font-size: 15px;
`;

const TrackWrapper = styled.div`
  width: 415px;
  height: 85px;
  padding: 0 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 100px;
  div {
    width: 100px;
    height: 100px;
  }
  img {
    width: 60px;
    height: 60px;
    filter: drop-shadow(0px 2px 18px rgba(0, 0, 0, 0.1));
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 35px;
  }
  p {
    width: 100px;
    height: 20px;
    margin: 0 0 10% 0;
    color: #333333;
    font-size: 15px;
    font-weight: 500;
    margin-top: 15px;
    font-family: "Noto Sans";
    display: flex;
    flex-direction: column;
    align-items: center;

    &:nth-child(1) {
      margin-left: 5px;
    }

    &:nth-child(2) {
      margin-left: 17px;
    }

    &:nth-child(3) {
      margin-left: 30px;
    }
  }
`;

const RegisterBtn = styled.button`
  width: 397px;
  height: 45px;
  aspect-ratio: 7.6/1;
  background-color: #81a7d3;
  color: white;
  border-radius: 24.5px;
  border: none;
  font-size: 17px;
  margin-top: 50px;
  font-family: "Noto Sans";
`;

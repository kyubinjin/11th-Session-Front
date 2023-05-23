import React, { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  return (
    <>
      <Name name="아기사자" nth="11" isFE="true" />
      <Counter />
      <Input />
      <hr />
      <button onClick={openModal}>모달 열기</button>
      {modal ? <Modal setModal={setModal} /> : null}
    </>
  );
}

const Modal = (props) => {
  const { setModal } = props;

  const style = {
    width: "100px",
    height: "100px",
    display: "flex",

    backgroundColor: "orange",
    marginTop: "30px",
    justifyContent: "center",
    alignItems: "center",
  };

  const deleteModal = () => {
    setModal(false);
  };
  return (
    <>
      <div style={style}>
        <button onClick={deleteModal}>모달 삭제</button>
      </div>
    </>
  );
};

export default Modal;

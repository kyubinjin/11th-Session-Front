import React from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../redux/counterSlice"; // import 필수

const HomePage = () => {
  const { number } = useSelector((state) => state.counter);
  const onIncrease = () => dispatch(increase()); // 실질적으로 값 바꾸게 해주는 dispatch에 increase 전달
  const onDecrease = () => dispatch(decrease());
  return (
    <>
      {/* counter 실습 */}
      <div>
        <h1>{number}</h1>
        <div>
          <button onClick={onIncrease}>+</button>
          <button onClick={onDecrease}>-</button>
        </div>
      </div>
      <LinkWrapper>
        <a href="/login">login</a>
      </LinkWrapper>
    </>
  );
};

export default HomePage;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

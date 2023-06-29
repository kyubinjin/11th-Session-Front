//Mypage
import React from "react";
import { useSelector } from "react-redux";

const MyPage = () => {
<<<<<<< HEAD
  const { userID, userName } = useSelector((state) => state.user);
=======
  const { userName, userID } = useSelector((state) => state.user);
>>>>>>> 5f203ca49e4bcc0ca53c9ce0ae58fd33448dac41
  return (
    <>
      <div>
        <div>
          {userName}({userID})님 반갑습니다.
        </div>
      </div>
    </>
  );
};

export default MyPage;

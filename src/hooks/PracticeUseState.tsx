import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const PracticeUseState = () => {
  type User = {
    name: string;
    count: number;
  };

  const [user, setUser] = useState<User>({ name: "Chii", count: 0 });
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickChangeCount = () => {
    /*
    잘못된 예제
    - 객체의 속성을 직접 변경하면 리액트가 감지하지 못해 렌더링이 일어나지 않는다.
    Object.is(prevState, nextState)가 true라고 보고 리렌더를 생략한다.
    
    user.age = Number(inputRef.current?.value);
    setUser(user);
    */

    // 올바른 예제
    setUser({ ...user, count: Number(inputRef.current?.value) });
  };

  // count 값에 따라 이미지를 결정하는 함수
  const getImageByCount = (count: number) => {
    if (count <= 0) {
      return "/src/assets/chii_good.jpg";
    } else if (count > 0 && count <= 5) {
      return "/src/assets/chii_tear.jpg";
    } else {
      return "/src/assets/chii.jpg";
    }
  };

  return (
    <>
      <div>
        <h2>useState 연습</h2>
        <img
          src={getImageByCount(user.count)}
          alt="chii"
          style={{ width: "300px", height: "300px", objectFit: "cover" }}
        />
        <p>이름: {user.name}</p>
        <p>딱밤 맞을 횟수: {user.count}</p>
      </div>
      <div>
        <input ref={inputRef} type="number" />
        <button onClick={onClickChangeCount}>변경</button>
      </div>
      <div>
        <p>
          객체의 속성을 직접 변경하면 리액트가 감지하지 못해 렌더링이 일어나지
          않는다. <br />
          Object.is(prevState, nextState) === true이기 때문에 리렌더를 생략한다.
        </p>
        <p>
          React는 useState에서 참조(Reference) 가 바뀌어야 변경으로 인식한다.
          <br />
          원본을 직접 수정하지 말고(mutation), 새 객체/배열을 만들어
          교체해야한다.
        </p>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link to="/">홈</Link>
      </div>
    </>
  );
};

export default PracticeUseState;

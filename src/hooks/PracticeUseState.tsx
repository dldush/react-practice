import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const PracticeUseState = () => {
  type User = {
    name: string;
    age: number;
  };

  const [user, setUser] = useState<User>({ name: "John", age: 20 });
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickChangeAge = () => {
    /*
    잘못된 예제
    - 객체의 속성을 직접 변경하면 리액트가 감지하지 못해 렌더링이 일어나지 않는다.
    Object.is(prevState, nextState)가 true라고 보고 리렌더를 생략한다.
    
    user.age = Number(inputRef.current?.value);
    setUser(user);
    */

    // 올바른 예제
    setUser({ ...user, age: Number(inputRef.current?.value) });
  };

  return (
    <>
      <div>
        <h2>useState 연습</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
      </div>
      <div>
        <input ref={inputRef} type="number" />
        <button onClick={onClickChangeAge}>변경</button>
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

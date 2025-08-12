import { useState, useCallback, memo } from "react";
import { Link } from "react-router-dom";

type ChildProps = {
  label: string;
  handleClick: () => void;
};

const Child = memo(function Child({ label, handleClick }: ChildProps) {
  console.log("딱밤 때릴 사람 입장!", label);
  return <button onClick={handleClick}>{label}</button>;
});

export default function PracticeUseCallback() {
  const [count, setCount] = useState(0);
  const [reset, setReset] = useState(true);

  const badDdakbam = () => setCount((c) => c + 1);

  const goodDdakbam = useCallback(() => setCount((c) => c + 1), [reset]);

  return (
    <>
      <h2>useCallback 연습</h2>

      <img src="/src/assets/chii.jpg" alt="chii" />

      <p>딱밤 때린 횟수: {count}</p>
      <p>console을 확인하면 딱밤 때리는 사람이 누구인지 알 수 있다.</p>

      <div
        style={{
          display: "flex",
          gap: 8,
          marginTop: 12,
          flexDirection: "column",
        }}
      >
        <Child label="딱밤 때리기 (1번 방)" handleClick={badDdakbam} />
        <Child
          label="딱밤 때리기 (2번 방(useCallback))"
          handleClick={goodDdakbam}
        />
        <button onClick={() => setReset((r) => !r)}>새 사람 부르기</button>
        <br />
        <div>
          <p>
            리액트는 리렌더링이 발생하면 컴포넌트를 다시 로드하며, 그 과정에서
            함수는 새로운 함수로 생성된다.(기존 값을 참조하지 않고 새로
            만들어짐)
            <br />
            <br />
            1번 방은 useCallback을 사용하지 않아 컴포넌트가 다시 리렌더링 될
            때마다 버튼이 참조하고 있는 함수의 주소가 변경되어 리렌더링 된다.
            <br />
            <br />
            useCallback은 의존성 배열에 넣은 값이 바뀌지 않으면, 계속 같은
            함수를 참조한다(리렌더링이 발생하지 않음).
            <br />
            2번 방은 useCallback을 사용하여 컴포넌트가 리렌더링 되어도 버튼이
            참조하고 있는 함수의 주소가 변경되지 않아 리렌더링 되지 않는다.
            <br />
            <br />
            useCallback의 의존성 배열에 reset이라는 불리언 값을 넣어줬다.
            <br />새 사람 부르기를 누르면 reset이 변경되며, 의존성 배열의 값이
            변경되어 useCallback 버튼도 리렌더링 된다.
          </p>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Link to="/">홈</Link>
      </div>
    </>
  );
}

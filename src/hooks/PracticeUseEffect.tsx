import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PracticeUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 5) {
      alert("치이카와는 5대 이상 때리면 버틸 수 없습니다 ㅜㅜ");
      setCount(5);
    }
  }, [count]);

  return (
    <>
      <h2>useEffect 연습</h2>
      <div>
        <img src="/src/assets/chii.jpg" alt="chii" />
        <p>때린 횟수: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>딱밤 때리기</button>
      </div>
      <div>
        <p>
          useEffect는 컴포넌트 마운트 이후 실행된다. <br />
          useEffect(setup, deps)로 사용되며 setup에는 콜백함수, deps는 의존성
          배열로 구성되어 있다. <br />
          useEffect에 사용된 모든 반응형 변수는 모두 의존성 배열에 선언되어야
          하며, 의존성 배열이 변경되면 콜백함수가 실행된다. <br />
          의존성 배열이 비어있다면 컴포넌트가 마운트될 때만 실행된다. <br />
          의존성 배열이 없다면 컴포넌트가 리렌더링 될 때마다 실행된다. <br />
          <br />
          useEffect에 return문을 작성하여 cleanup 함수를 반환할 수 있다. <br />
          cleanup 함수는 컴포넌트가 언마운트되거나 의존성 배열이 변경되어
          콜백함수가 실행되기 전에 실행된다. <br />
        </p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Link to="/">홈</Link>
      </div>
    </>
  );
};

export default PracticeUseEffect;

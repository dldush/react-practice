import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const PracticeUseMemo = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const expensiveCalculation = (num: number) => {
    console.log("어려운 계산을 하는중!");
    let count = 0;
    for (let i = 2; i <= num; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) count++;
    }
    return count;
  };

  const primeCount = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]); 
  return (
    <div>
      <h2>useMemo 연습</h2>
      <img src="/src/assets/chii_study.jpg" alt="chii" style={{ width: "300px", height: "300px", objectFit: "cover" }}/>
      <p>useMemo를 사용해서 치이카와의 공부를 지켜주자</p>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <p>소수 개수: {primeCount}</p>
      </div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="딴 생각 시키기기"
        />
        <p>다른 생각중: {text}...</p>
      </div>
      <div>
        <p>
          useMemo는 메모이제이션을 사용해서 계산 결과를 저장해두고,<br/> 의존성 배열이 변경되지 않으면 이전 결과를 재사용한다.
        </p>
      </div>
      <div>
        <Link to="/">홈</Link>
      </div>
    </div>
  );
};

export default PracticeUseMemo;

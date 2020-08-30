import React from "react";
import { Link } from "react-router-dom";

// 프리젠테이셔널 컴포넌트 --> 리덕스 스토어에 직접적으로 접근하지 않고
// 필요한 값 또는 함수를 props 로만 받아와서 사용하는 컴포넌트입니다.

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = (e) => {
    // e.target.value 의 타입은 문자열이기 때문에 숫자로 변환해주어야 합니다.
    onSetDiff(parseInt(e.target.value, 10)); //10은 10진수라는 뜻
  };
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
      <Link to="/">
        <div>투ㅡ두로</div>
      </Link>
    </div>
  );
}

export default Counter;

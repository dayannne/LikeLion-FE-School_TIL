import React, { useState } from 'react';

function Resume(props) {
  const [like, setLike] = useState(0);

  function clickLike() {
    // +1 은 기존의 like 값과 1을 더해 새로운 값을 반환하는것이고
    // ++ 변수의 값 자체를 직접적으로 변경하려는 시도입니다.
    if (like === '') {
      setLike('like');
    } else {
      setLike('');
    }
  }

  const myColor = props.color;
  const styleColor = { color: myColor };

  return (
    <div style={{ border: 'solid 1px', width: '500px' }}>
      <h1>{props.name} 자기소개서</h1>
      <h1>{props.hello}</h1>
      <h2>취미 : {props.hobby}</h2>
      <h2>좋아하는 음식 : {props.food}</h2>
      <h2>
        좋아하는 색 : <span style={styleColor}>{myColor}</span>
      </h2>
      <button onClick={clickLike}>like</button>
      <span>{like}</span>
    </div>
  );
}

export default Resume;

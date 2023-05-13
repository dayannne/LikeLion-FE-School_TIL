import React from 'react';
import styled, { css } from 'styled-components';

export default function App5() {
  const OneBg = css`
    background-color: royalblue;
    color: white;
  `;
  const One  cr = css`1`;
  const Two = styled.button`
    ${OneBg}
  `;
  const Three = styled.button``;

  return (
    <div>
      <One>One</One>
      <Two>버튼1</Two>
      <Three>버튼2</Three>
      <button>버튼3</button>
    </div>
  );
}

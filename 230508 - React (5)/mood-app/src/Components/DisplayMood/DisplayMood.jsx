import React from 'react';
import './DisplayMood.css';

export default function DisplayMood(props) {
  return (
    <div className="container">
      {props.mood ? `기분이 ${props.mood}` : '당신의 기분을 선택해 주세요!'}
    </div>
  );
}

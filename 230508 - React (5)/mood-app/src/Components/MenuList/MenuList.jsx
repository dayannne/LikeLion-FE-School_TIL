import React from 'react';
import MenuListItem from '../MenuListItem/MenuListItem';
import './MenuList.css';

export default function MenuList(props) {
  const moods = ['좋아요!😀', '정말 좋아요!😊', '최고예요!👍', '미쳤어요!🤪'];
  return (
    <u className="container-list">
      {moods.map((moodEl) => {
        // mood : 기분의 텍스트, isSelected : 현재 사용자의 기분이 맞는지 전달, onClick=>props.onItemclick : 현재 기분, App.js의 currentMood를 바꿀 수 있는 함수
        return (
          <MenuListItem
            mood={moodEl}
            isSelected={props.mood === moodEl}
            onClickEvt={props.onItemClick}
          />
        );
      })}
    </u>
  );
}

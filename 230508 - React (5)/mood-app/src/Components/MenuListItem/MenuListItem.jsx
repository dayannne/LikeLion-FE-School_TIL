import React from 'react';
import './MenuListItem.css';

export default function MenuListItem(props) {
  const onItemClick = () => {
    props.onClickEvt(props.mood);
  };

  const getBackgroundColor = () => {
    if (props.isSelected) {
      return 'skyblue';
    }
  };

  return (
    <li>
      <button
        className="btn-item"
        onClick={onItemClick}
        style={{ backgroundColor: getBackgroundColor() }}
      >
        기분이 : {props.mood}
      </button>
    </li>
  );
}

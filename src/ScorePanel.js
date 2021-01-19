import React from 'react';

export default function ScorePanel(props) {

  const {red, blue} = props;

  return (
      <view style={{flexDirection: 'row'}}>
        <text style={{color: 'red'}}>{red}</text>
        <text> - </text>
        <text style={{color: 'blue'}}>{blue}</text>
      </view>
  )
}
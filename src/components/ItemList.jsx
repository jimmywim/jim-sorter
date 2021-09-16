import React from 'react';

export function ItemList(props) {
  return (
    <div>
      <p>{props.title}</p>
      {
        props.showItems ?
        props.items.map((item, index) => {
          return (
            <div key={index}>{item.name} ({item.rank})</div>
          )
        })
        :
        <div>Items hidden until game complete</div>
      }
    </div>
  );
}
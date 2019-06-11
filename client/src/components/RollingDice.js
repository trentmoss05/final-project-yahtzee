import React from "react";
import Die from "./Die";

export default function RollingDice(props) {
  const dice = props.dice.map((x, i) => {
    let die = <Die index={i} value={x} selected={props.selected} />;
    if (x === 0) die = <svg />;
    return <div key={i}>{die}</div>;
  });

  return (
    <div>
      <div>{dice.slice(0, 2)}</div>
      <div>{dice.slice(2)}</div>
    </div>
  );
}

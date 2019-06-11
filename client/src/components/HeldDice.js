import React from "react";
import Die from "./Die";

export default function HeldDice(props) {
  const dice = props.dice.map((x, i) => {
    let die = <Die key={i} index={i} value={x} selected={props.selected} />;
    if (x === 0)
      die = <svg viewBox="0 0 120 120" key={i} className="die empty" />;
    return die;
  });

  return <div className="diceContainer">{dice}</div>;
}

HeldDice.propTypes = {
  dice: React.PropTypes.array.isRequired,
  selected: React.PropTypes.func.isRequired
};

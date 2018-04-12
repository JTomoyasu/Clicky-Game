import React from "react";

const Counter = props => (
  <div>
    Score: {props.score}
    <br></br>
    Highscore: {props.highscore}
    <span> </span>
  </div>
);

export default Counter;

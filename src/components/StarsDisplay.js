import React from "react";
import utils from "../MathScience";

const StarsDisplay = (props) => (
  <>
    {utils.range(1, props.stars).map((starId) => (
      <div key={starId} className="star"></div>
    ))}
  </>
);

export default StarsDisplay;

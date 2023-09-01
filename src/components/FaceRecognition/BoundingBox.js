import React from "react";

const BoundingBox = ({ boxTop, boxRight, boxBottom, boxLeft }) => {
  return (
    <div
      className="bounding-box"
      style={{ top: boxTop, right: boxRight, bottom: boxBottom, left: boxLeft }}
    ></div>
  );
};

export default BoundingBox;

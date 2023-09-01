import React from "react";
import "./FaceRecognition.css";
import BoundingBox from "./BoundingBox";

const FaceRecognition = ({ imageUrl, box, boxes }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} width="500px" heigh="auto" />
        {boxes.map((box, key) => (
          <BoundingBox
            key={key + box.topRow}
            boxTop={box.topRow}
            boxRight={box.rightCol}
            boxBottom={box.bottomRow}
            boxLeft={box.leftCol}
          />
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;

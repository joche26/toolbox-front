import React from "react";
import './style.css';
const Line = ({ size }) => {
  const height = 20;
  const width = {
    small: "25%",
    medium: "50%",
    large: "75%",
    mLarge: "91%",
    xLarge: "100%",
  };
  return (
    <div
      className="placeholder-content"
      style={{ height, width: width[size || "xLarge"] }}
    />
  );
};

export default Line;
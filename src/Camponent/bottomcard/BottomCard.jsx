import React from "react";
import "./bottomCard.scss";

const BottomCard = ({ data }) => {
  return (
    <div className="b-cardContainer">
      <div className="header">
        <span className="name">{data.name}</span>
        <span className="designation">{data.designation}</span>
      </div>
      <div className="cardContent">{data.content}</div>
    </div>
  );
};

export default BottomCard;

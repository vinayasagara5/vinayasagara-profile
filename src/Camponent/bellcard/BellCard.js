import React from "react";
import "./bellcard.scss";
import { ReactComponent as BellThree } from "../../assets/BellThree.svg";

const BellCard = () => {
  return (
    <div className="bellCardConteiner">
      <div className="bellIconCard">
        <div className="icon">
          <BellThree />
        </div>
        <div className="saveIcon">Save</div>
      </div>
      <div className="bellIconContent">
        We’ll be sending notifications to you here
      </div>
      <div className="bellIconInput"></div>
    </div>
  );
};

export default BellCard;

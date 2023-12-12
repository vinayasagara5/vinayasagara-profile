import React from "react";
import "./clockCard.scss";
import { ReactComponent as Clock } from "../../assets/Clock.svg";
import { ReactComponent as Checkmark } from "../../assets/Checkmark.svg";
import { ReactComponent as ArrowDropDown } from "../../assets/ArrowDropDown.svg";

const ClockCard = () => {
  return (
    <div className="clockbellCardConteiner">
      <div className="clockbellIconCard">
        <div className="icon">
          <Clock />
        </div>
        <div className="clocksaveIcon">
          <Checkmark />
        </div>
      </div>
      <div className="clockbellIconContent">
        <p>Notify me when any wallet dormant for</p>
        <div className="clockdropDown">
          <ArrowDropDown />
        </div>
        <p>becomes active</p>
      </div>
    </div>
  );
};

export default ClockCard;

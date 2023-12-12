import React from "react";
import "./barchart.scss";
import { ReactComponent as BarChart } from "../../assets/BarChart.svg";
import { ReactComponent as Checkmark } from "../../assets/Checkmark.svg";
import { ReactComponent as DropDownIcon } from "../../assets/DropDownIcon.svg";

const BarChartCard = () => {
  return (
    <div className="barbellCardConteiner">
      <div className="barbellIconCard">
        <div className="icon">
          <BarChart />
        </div>
        <div className="barsaveIcon">
          <Checkmark />
        </div>
      </div>
      <div className="barbellIconContent">
        <p>Notify me when any wallets move more than</p>
        <div className="bardropDown">
          <DropDownIcon />
        </div>
      </div>
    </div>
  );
};

export default BarChartCard;

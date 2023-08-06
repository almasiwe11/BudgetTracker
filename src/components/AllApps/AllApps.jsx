import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";

import { BsFillTrophyFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { BsClipboard2Pulse } from "react-icons/bs";
import { BsClipboard2PulseFill } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsDatabaseAdd } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import { GiMoneyStack } from "react-icons/gi";
const AllApps = () => {
  return (
    <div className="allApps">
      <span className="budget">
        <AiOutlineDollarCircle className="budget-svg" />
      </span>
      <span className="habits">
        <BsFillTrophyFill className="budget-svg" />
      </span>
      <span className="todos">
        <AiFillCheckCircle className="budget-svg" />
      </span>
    </div>
  );
};

export default AllApps;

import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
const AllApps = () => {
  return (
    <div className="allApps">
      <span className="budget">
        <AiOutlineDollarCircle className="budget-svg" />
      </span>
      <span className="habits">
        {" "}
        <AiFillCheckCircle className="budget-svg" />
      </span>
      <span className="todos">
        {" "}
        <AiOutlineDollarCircle className="budget-svg" />
      </span>
    </div>
  );
};

export default AllApps;

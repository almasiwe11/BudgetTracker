import { AiOutlineDollarCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";

import { BsFillTrophyFill } from "react-icons/bs";

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

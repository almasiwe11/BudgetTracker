import React from "react";
import { FcMoneyTransfer } from "react-icons/fc";
import { GiPayMoney } from "react-icons/gi";
const GainLoss = ({ setAddBudget }) => {
  return (
    <div className="gain-loss">
      <FcMoneyTransfer
        className="paycheck"
        onClick={() => setAddBudget("gain")}
      />
      <GiPayMoney className="spendMoney" onClick={() => setAddBudget("loss")} />
    </div>
  );
};

export default GainLoss;

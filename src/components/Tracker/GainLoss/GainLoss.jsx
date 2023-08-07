import React from "react";
import { FcMoneyTransfer } from "react-icons/fc";
import { GiPayMoney } from "react-icons/gi";
const GainLoss = ({ setAddBudget }) => {
  return (
    <div className="gain-loss">
      <FcMoneyTransfer
        className="paycheck"
        onClick={() => setAddBudget(true)}
      />
      <GiPayMoney className="spendMoney" onClick={() => setAddBudget(true)} />
    </div>
  );
};

export default GainLoss;

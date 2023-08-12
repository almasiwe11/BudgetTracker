/* eslint-disable react/prop-types */
import { FcMoneyTransfer } from "react-icons/fc";
import { GiPayMoney } from "react-icons/gi";
const GainLoss = ({ setAddBudget, setCurrentPage, totalPages }) => {
  return (
    <div className="gain-loss">
      <FcMoneyTransfer
        className="paycheck"
        onClick={() => {
          setAddBudget("gain");
          totalPages > 1 && setCurrentPage(totalPages);
        }}
      />
      <GiPayMoney
        className="spendMoney"
        onClick={() => {
          setAddBudget("loss");
          totalPages > 1 && setCurrentPage(totalPages);
        }}
      />
    </div>
  );
};

export default GainLoss;

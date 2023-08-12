/* eslint-disable react/prop-types */
import { FaWallet } from "react-icons/fa";
import { TfiExchangeVertical } from "react-icons/tfi";
import { BsFillCalendarMonthFill } from "react-icons/bs";
import { isSameMonth, parseJSON } from "date-fns";
import { useTotal } from "../../../customHooks/useTotal";
const Wallet = ({ trackList, initialBank }) => {
  const initialBudget = initialBank.replace(/[^\d.]/g, "");

  const total = useTotal(trackList);
  const wallet = total + Number(initialBudget);

  const thisMonth = trackList.filter((track) =>
    isSameMonth(parseJSON(track.selectedDay), new Date())
  );

  const thisMonthGained = thisMonth.filter((track) => track.type === "gain");
  const monthGained = useTotal(thisMonthGained);

  const thisMonthSpent = thisMonth.filter(
    (record) => record.type === "loss" || record.gained === "Return"
  );
  const monthSpent = useTotal(thisMonthSpent);

  const diff = monthGained + monthSpent;

  function giveStyle(value) {
    if (value <= 0) {
      const lossStyle = {
        fill: "#dc2626",
      };
      return lossStyle;
    }

    if (value > 0) {
      const gainStyle = {
        fill: "#16a34a",
      };
      return gainStyle;
    }
  }

  return (
    <div className="rightHeader">
      <div className="wallet">
        <FaWallet className="wallet-icon" style={giveStyle(wallet)} />
        <span>{wallet.toLocaleString()}</span>
      </div>

      <div className="wallet">
        <TfiExchangeVertical className="wallet-icon" style={giveStyle(diff)} />
        <span>{diff.toLocaleString()}</span>
      </div>

      <div className="wallet">
        <BsFillCalendarMonthFill
          className="wallet-icon"
          style={giveStyle(monthSpent)}
        />
        <span>{monthSpent.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default Wallet;

import React from "react";
import { FaWallet } from "react-icons/fa";
import { TfiExchangeVertical } from "react-icons/tfi";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsFillCalendarMonthFill } from "react-icons/bs";
import { NumericFormat } from "react-number-format";
import { isSameMonth, parseJSON, isSameDay } from "date-fns";

const Wallet = ({ trackList, initialBank }) => {
  const initialBudget = initialBank.replace(/[^\d.]/g, "");
  const total = trackList.reduce((acc, track) => {
    const amount = parseFloat(track.amount.replace(/[^\d.]/g, ""));
    if (track.type === "gain") {
      return acc + Number(amount);
    } else if (track.type === "loss") {
      return acc - Number(amount);
    }
  }, 0);

  const wallet = total + Number(initialBudget);
  const diff = wallet - Number(initialBudget);
  const thisMonthSpent = trackList
    .filter((track) => isSameMonth(parseJSON(track.selectedDay), new Date()))
    .filter((record) => record.type === "loss");

  //

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

  const monthSpent = thisMonthSpent.reduce((acc, track) => {
    const amount = parseFloat(track.amount.replace(/[^\d.]/g, ""));
    if (track.type === "gain") {
      return acc + Number(amount);
    } else if (track.type === "loss") {
      return acc - Number(amount);
    }
  }, 0);

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

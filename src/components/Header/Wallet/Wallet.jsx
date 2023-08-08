import React from "react";
import { FaWallet } from "react-icons/fa";
import { TfiExchangeVertical } from "react-icons/tfi";
import { GiTakeMyMoney } from "react-icons/gi";

export const Wallet = ({ trackList }) => {
  const total = trackList.reduce((acc, track) => {
    const amount = parseFloat(track.amount.replace(/\s/g, "").replace(",", ""));
    if (track.type === "gain") {
      return acc + Number(amount);
    } else if (track.type === "loss") {
      return acc - Number(amount);
    }
  }, 0);
  console.log(total);
  return (
    <div className="rightHeader">
      <div className="wallet">
        <FaWallet className="wallet-icon" />
        <span>{total}</span>
      </div>

      <div className="wallet">
        <TfiExchangeVertical className="wallet-icon" />
        <span>-20 000</span>
      </div>

      {/*  <div className="wallet">
        <GiTakeMyMoney className="wallet-icon" />
        <span>-20 000</span>
      </div> */}
    </div>
  );
};

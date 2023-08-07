import React from "react";
import { BiDollar } from "react-icons/bi";
import { TfiExchangeVertical } from "react-icons/tfi";

export const Wallet = () => {
  return (
    <div className="rightHeader">
      <div className="wallet">
        <BiDollar className="wallet-icon" />
        <span>200 000</span>
      </div>

      <div className="wallet">
        <TfiExchangeVertical className="wallet-icon" />
        <span>-20 000</span>
      </div>
    </div>
  );
};

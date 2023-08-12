import { useState } from "react";
import { NumericFormat } from "react-number-format";

const InitialBank = ({ setInitialBank }) => {
  const [amount, setAmount] = useState("");

  function handleAmount(e) {
    setAmount(e.target.value);
  }

  function handleEnter(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("Initial-bank", JSON.stringify(amount));
    setInitialBank(amount);
  }

  return (
    <div className="initial-bank">
      <p>Initial Bank </p>
      <NumericFormat
        className="initial-bank-input"
        placeholder="Enter your current bank account"
        thousandSeparator
        value={amount}
        onChange={handleAmount}
        onKeyDown={handleEnter}
      />
    </div>
  );
};

export default InitialBank;

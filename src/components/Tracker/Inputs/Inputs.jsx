import React, { useState } from "react";

const Inputs = () => {
  const [type, setType] = useState("Needs");
  const [amount, setAmount] = useState("");

  let owing;
  if (type === "Owing") owing = true;

  function handleAmount(e) {
    let value = e.target.value;
    value = value.replace(/\s/g, "");
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    setAmount(value);
  }

  return (
    <div className={`inputs ${owing ? "four-inputs" : "three-inputs"}`}>
      <select
        className="type"
        name="type"
        id="type"
        onChange={(e) => setType(e.target.value)}
        value={type}
      >
        <option value="Owing">Owing</option>
        <option value="Purchase">Purchase</option>
        <option value="Education">Education</option>
        <option value="Needs">Needs</option>
        <option value="Shopping">Shopping</option>
        <option value="Car">Car</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Relationship">Relationship</option>
        <option value="Family">Family</option>
        <option value="Friendship">Friendship</option>
        <option value="Going Out">Going</option>
        <option value="Travel">Travel</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Investment">Investment</option>
        <option value="Other">Other</option>
      </select>

      {owing && (
        <input className="to-who" type="text" placeholder="Stop owing money" />
      )}
      <input
        className="description"
        type="text"
        placeholder="Enter the description"
      />
      <input
        className="amount"
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={handleAmount}
      />
    </div>
  );
};

export default Inputs;

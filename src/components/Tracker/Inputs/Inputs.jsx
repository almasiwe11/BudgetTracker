import React, { useState } from "react";
import Gained from "../Gained/Gained";
import Spent from "../Spent/Spent";

const Inputs = ({
  type,
  setTrackList,
  setAddBudget,
  selectedDay,
  spentStorage = "Needs",
  gainedStorage = "Salary",
  descriptionStorage = "",
  toWhoStorage = "",
  amountStorage = "",
  disabled = false,
}) => {
  const [spent, setSpent] = useState(spentStorage);
  const [gained, setGained] = useState(gainedStorage);
  const [amount, setAmount] = useState(amountStorage);
  const [description, setDescription] = useState(descriptionStorage);
  const [toWho, setToWho] = useState(toWhoStorage);

  let owing;
  if (spent === "Owing") owing = true;

  function handleAmount(e) {
    let value = e.target.value;
    value = value.replace(/\s/g, "");
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    setAmount(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      type,
      amount,
      description,
      selectedDay,
    };

    if (type === "gain") {
      data.gained = gained;
    } else {
      data.spent = spent;
    }

    if (toWho) data.toWho = toWho;

    setTrackList((prev) => [...prev, data]);
    setAddBudget(false);
  }

  const readOnlyInput = {
    width: description && `${description.length * 8}px `,
    padding: "0",
  };

  function handleEnter(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }
  // {}
  return (
    <form
      onSubmit={handleSubmit}
      className={`inputs ${
        disabled ? "disabled" : owing ? "four-inputs" : "three-inputs"
      }`}
    >
      {type === "gain" ? (
        <Gained gained={gained} setGained={setGained} disabled={disabled} />
      ) : (
        <Spent spent={spent} setSpent={setSpent} disabled={disabled} />
      )}

      {owing && (
        <input
          className={`to-who ${type === "gain" ? "gain" : "loss"} `}
          type="text"
          placeholder="Stop owing money"
          value={toWho}
          onChange={(e) => setToWho(e.target.value)}
          readOnly={disabled}
        />
      )}
      <input
        className={`description ${type === "gain" ? "gain" : "loss"} `}
        type="text"
        placeholder="Enter the description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        readOnly={disabled}
        // style={disabled && readOnlyInput}
      />
      <input
        className={`amount ${type === "gain" ? "gain" : "loss"}`}
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={handleAmount}
        onKeyDown={handleEnter}
        readOnly={disabled}
      />
    </form>
  );
};

export default Inputs;

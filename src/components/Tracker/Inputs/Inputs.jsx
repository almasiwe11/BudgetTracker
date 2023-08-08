import React, { useState } from "react";
import Gained from "../Gained/Gained";
import Spent from "../Spent/Spent";

const Inputs = ({ type, setTrackList, setAddBudget, selectedDay }) => {
  const [spent, setSpent] = useState("Needs");
  const [gained, setGained] = useState("Salary");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [toWho, setToWho] = useState("");

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
    setTrackList((prev) => [
      ...prev,
      toWho
        ? { spent, toWho, amount, description, type, selectedDay, gained }
        : { spent, amount, description, type, selectedDay, gained },
    ]);
    setAddBudget(false);
  }

  function handleEnter(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`inputs ${owing ? "four-inputs" : "three-inputs"}`}
    >
      {type === "gain" ? (
        <Gained gained={gained} setGained={setGained} />
      ) : (
        <Spent spent={spent} setSpent={setSpent} />
      )}

      {owing && (
        <input
          className={`to-who ${type === "gain" ? "gain" : "loss"} `}
          type="text"
          placeholder="Stop owing money"
          value={toWho}
          onChange={(e) => setToWho(e.target.value)}
        />
      )}
      <input
        className={`description ${type === "gain" ? "gain" : "loss"} `}
        type="text"
        placeholder="Enter the description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className={`amount ${type === "gain" ? "gain" : "loss"}`}
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={handleAmount}
        onKeyDown={handleEnter}
      />
    </form>
  );
};

export default Inputs;

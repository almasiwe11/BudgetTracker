/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import Gained from "../Gained/Gained";
import Spent from "../Spent/Spent";

const Inputs = ({
  type,
  setTrackList,
  setAddBudget,
  selectedDay,
  id,
  spentEditing = "Needs",
  gainedEditing = "Salary",
  descriptionEditing = "",
  toWhoEditing = "",
  amountEditing = "",
  editing,
  setEditing,
  idEditing,
}) => {
  const [spent, setSpent] = useState(spentEditing);
  const [gained, setGained] = useState(gainedEditing);
  const [amount, setAmount] = useState(amountEditing);
  const [description, setDescription] = useState(descriptionEditing);
  const [toWho, setToWho] = useState(toWhoEditing);

  let owing;
  if (spent === "Owing" || gained === "Return") owing = true;

  function handleAmount(e) {
    let value = e.target.value;
    value = value.replace(/\s/g, "");
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    setAmount(value);
  }

  function handleSubmit(e) {
    if (!amount.length) {
      setAddBudget(false);
      return;
    }
    e.preventDefault();
    const obj = {
      id,
      spent: type === "loss" ? spent : null,
      toWho: toWho ? toWho : null,
      amount,
      description,
      type,
      selectedDay,
      gained: type === "gain" ? gained : null,
    };

    if (editing) {
      setTrackList((prev) =>
        prev.map((track) => {
          if (track.id === idEditing) {
            return obj;
          }
          return track;
        })
      );
      setEditing(false);
    } else {
      setTrackList((prev) => [...prev, obj]);
      setAddBudget(false);
    }
  }

  function handleEnter(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`inputs `}>
      {type === "gain" ? (
        <Gained gained={gained} setGained={setGained} />
      ) : (
        <Spent spent={spent} setSpent={setSpent} />
      )}
      {owing && (
        <input
          className={`to-who ${type === "gain" ? "gain" : "loss"} `}
          type="text"
          placeholder={spent === "Owing" ? "To Who" : "Who Gave Back"}
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
      <NumericFormat
        className={`amount ${type === "gain" ? "gain" : "loss"}`}
        placeholder="Amount"
        thousandSeparator
        value={amount}
        onChange={handleAmount}
        onKeyDown={handleEnter}
      />
    </form>
  );
};

export default Inputs;

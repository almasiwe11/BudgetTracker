import React, { useState } from "react";

const Inputs = ({ type, setTrackList, setAddBudget }) => {
  const [spent, setSpent] = useState("Needs");
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
        ? { spent, toWho, amount, description }
        : { spent, amount, description },
    ]);
    resetInputs();
  }

  function resetInputs() {
    setSpent("Needs");
    setAmount("");
    setDescription("");
    setToWho("");
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
      <select
        className={`spent`}
        name="spent"
        id="spent"
        onChange={(e) => setSpent(e.target.value)}
        value={spent}
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
        <input
          className={`to-who `}
          type="text"
          placeholder="Stop owing money"
          value={toWho}
          onChange={(e) => setToWho(e.target.value)}
        />
      )}
      <input
        className={`description `}
        type="text"
        placeholder="Enter the description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className={`amount`}
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

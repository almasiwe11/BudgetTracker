import React from "react";

const Spent = ({ spent, setSpent, disabled }) => {
  return (
    <select
      className={`spent loss`}
      name="spent"
      id="spent"
      onChange={(e) => setSpent(e.target.value)}
      value={spent}
      disabled={disabled}
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
  );
};

export default Spent;

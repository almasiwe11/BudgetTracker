import React from "react";

const Gained = ({ gained, setGained }) => {
  return (
    <select
      className={`gained gain `}
      name="gained"
      id="gained"
      onChange={(e) => setGained(e.target.value)}
      value={gained}
    >
      <option value="Salary">Salary</option>
      <option value="Investment">Investment</option>
      <option value="Real-Estate">Real-Estate</option>
      <option value="Return">Return</option>
      <option value="Business">Business</option>
      <option value="Other">Other</option>
    </select>
  );
};

export default Gained;

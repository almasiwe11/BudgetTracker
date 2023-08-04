import React, { useState } from "react";
import { sub, format, add, isFuture, startOfMonth } from "date-fns";
const Header = ({ setToday, today }) => {
  const year = format(today, "yyyy");
  const month = format(today, "MMMM");

  let disabled = true;
  if (!isFuture(add(startOfMonth(today), { months: 1 }))) disabled = false;

  function handlePrevMonth() {
    setToday((today) => sub(today, { months: 1 }));
  }

  function handleNextMonth() {
    setToday((today) => add(today, { months: 1 }));
  }

  return (
    <div className="header">
      <button className="switchMonth" onClick={handlePrevMonth}>
        ◀
      </button>
      <span className="currentMonth">
        <p> {year}</p>
        <p> {month}</p>
      </span>
      <button
        className={`switchMonth ${disabled && "disabled"}`}
        onClick={handleNextMonth}
        disabled={disabled}
      >
        ▶
      </button>
    </div>
  );
};

export default Header;

/* eslint-disable react/prop-types */
import React from "react";

const Header = ({
  month,
  year,
  showEntireMonth,
  handlePrev,
  handleNext,
  disabled,
  setShowEntireMonth,
}) => {
  return (
    <div className="header">
      <button
        className={showEntireMonth ? "btnWeek" : "hide"}
        onClick={handlePrev}
      >
        ◀
      </button>
      {month} {year}
      <button
        className={showEntireMonth ? "btnWeek" : "hide"}
        onClick={handleNext}
        disabled={disabled}
      >
        ▶
      </button>
      <span
        className="toggleView"
        onClick={() => setShowEntireMonth((prev) => !prev)}
      >
        📅
      </span>
    </div>
  );
};

export default Header;

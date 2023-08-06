/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Logo from "./Logo/Logo";
import Date from "./Date/DateMonth";
import ToggleView from "./ToggleView/ToggleView";

const Header = ({
  showEntireMonth,
  handlePrev,
  handleNext,
  disabled,
  setShowEntireMonth,
  selectedDay,
  setSelectedDay,
  setToday,
}) => {
  return (
    <div className="header">
      <Logo />
      <Date
        setSlectedDay={setSelectedDay}
        selectedDay={selectedDay}
        handleNext={handleNext}
        handlePrev={handlePrev}
        showEntireMonth={showEntireMonth}
        setToday={setToday}
        disabled={disabled}
      />
      <ToggleView
        setShowEntireMonth={setShowEntireMonth}
        showEntireMonth={showEntireMonth}
      />
    </div>
  );
};

export default Header;

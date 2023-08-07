/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Logo from "./Logo/Logo";
import Date from "./Date/DateMonth";
import ToggleView from "./ToggleView/ToggleView";

import { Wallet } from "./Wallet/Wallet";

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
    <>
      <Logo />
      <Date
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        handleNext={handleNext}
        handlePrev={handlePrev}
        showEntireMonth={showEntireMonth}
        setToday={setToday}
        disabled={disabled}
        setShowEntireMonth={setShowEntireMonth}
      />
      <Wallet />
    </>
  );
};

export default Header;

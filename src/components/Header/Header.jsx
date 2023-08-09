/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Logo from "./Logo/Logo";
import Date from "./Date/DateMonth";

import Wallet from "./Wallet/Wallet";

const Header = ({
  showEntireMonth,
  handlePrev,
  handleNext,
  disabled,
  setShowEntireMonth,
  selectedDay,
  setSelectedDay,
  setToday,
  initialBank,
  trackList = { trackList },
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
      <Wallet trackList={trackList} initialBank={initialBank} />
    </>
  );
};

export default Header;

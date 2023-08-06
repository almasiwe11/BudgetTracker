/* eslint-disable react/prop-types */
import React from "react";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { BsFillTrophyFill } from "react-icons/bs";
import { BsCalendarCheck } from "react-icons/bs";
import { BsCalendarMinus } from "react-icons/bs";
import { BsCalendarMinusFill } from "react-icons/bs";
import { BsCalendarCheckFill } from "react-icons/bs";
import { BsClipboard2Pulse } from "react-icons/bs";
import { BsClipboard2PulseFill } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsDatabaseAdd } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import { GiMoneyStack } from "react-icons/gi";

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
        {showEntireMonth ? (
          <IoIosCloseCircle className="close-icon" />
        ) : (
          <BsFillCalendar2WeekFill className="calendar-icon" />
        )}
      </span>
    </div>
  );
};

export default Header;

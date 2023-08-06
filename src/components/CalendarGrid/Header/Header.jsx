/* eslint-disable react/prop-types */
import React from "react";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import { BiSolidChevronLeftCircle } from "react-icons/bi";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";

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
      <AiOutlineLeftCircle
        className={showEntireMonth ? "btnWeek" : "hide"}
        onClick={handlePrev}
      />
      {month} {year}
      <AiOutlineRightCircle
        className={showEntireMonth ? "btnWeek" : "hide"}
        onClick={handleNext}
        disabled={disabled}
      />
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

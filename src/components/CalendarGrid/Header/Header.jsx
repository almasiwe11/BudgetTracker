/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { format, isFuture, isSameDay, isSameMonth, isSameWeek } from "date-fns";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";
import { VscDebugStepBack } from "react-icons/vsc";

const Header = ({
  month,
  year,
  showEntireMonth,
  handlePrev,
  handleNext,
  disabled,
  setShowEntireMonth,
  selectedDay,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);

  let goBack = false;
  const formatted = format(selectedDay, "MMMM y");

  if (!isSameWeek(new Date(), selectedDay)) goBack = true;

  return (
    <div className="header">
      {isHovered ? (
        <AiFillLeftCircle
          className={showEntireMonth ? "btnWeek" : "hide"}
          onClick={handlePrev}
          onMouseLeave={() => setIsHovered(false)}
        />
      ) : (
        <AiOutlineLeftCircle
          className={showEntireMonth ? "btnWeek" : "hide"}
          onClick={handlePrev}
          onMouseEnter={() => setIsHovered(true)}
        />
      )}
      {formatted}
      {isHoveredRight ? (
        <AiFillRightCircle
          className={showEntireMonth ? "btnWeek" : "hide"}
          onClick={handleNext}
          onMouseLeave={() => setIsHoveredRight(false)}
        />
      ) : (
        <AiOutlineRightCircle
          className={showEntireMonth ? "btnWeek" : "hide"}
          onClick={handleNext}
          disabled={disabled}
          onMouseEnter={() => setIsHoveredRight(true)}
        />
      )}

      {goBack && <VscDebugStepBack />}

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

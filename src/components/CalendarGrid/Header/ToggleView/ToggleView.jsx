import React from "react";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
const ToggleView = ({ setShowEntireMonth, showEntireMonth }) => {
  return (
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
  );
};

export default ToggleView;

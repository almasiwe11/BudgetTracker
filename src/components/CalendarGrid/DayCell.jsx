/* eslint-disable react/prop-types */
import React from "react";
import { format, isFuture, isSameDay, isSameMonth } from "date-fns";
const DayCell = ({
  day,
  setSelectedDay,
  showEntireMonth,
  today,
  setShowEntireMonth,
}) => {
  const formattedDay = format(day, "dd");
  const nameDay = format(day, "EE");
  let wrongMonth = false;
  if (!isSameMonth(today, day) || isFuture(day)) wrongMonth = true;

  let markToday;
  if (isSameDay(new Date(), day)) markToday = true;

  function handleClick() {
    if (!isFuture(day)) setSelectedDay(day);
    showEntireMonth && setShowEntireMonth(false);
  }
  return (
    <div
      className={`dayCell ${markToday && "markToday"} ${
        wrongMonth && "wrongMonth"
      }`}
      onClick={handleClick}
    >
      <div>{formattedDay}</div>
      {!showEntireMonth && <span>{nameDay}</span>}
    </div>
  );
};

export default DayCell;

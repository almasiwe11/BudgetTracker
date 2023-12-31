/* eslint-disable react/prop-types */
import React from "react";
import { format, isFuture, isSameDay, isSameMonth } from "date-fns";
const DayCell = ({
  day,
  setSelectedDay,
  showEntireMonth,
  setShowEntireMonth,
  selectedDay,
  setToday,
}) => {
  const formattedDay = format(day, "d");
  const nameDay = format(day, "EE");
  let selected = false;
  let wrongMonth = false;
  if (!isSameMonth(selectedDay, day) || isFuture(day)) wrongMonth = true;
  if (isSameDay(selectedDay, day) && !isSameDay(selectedDay, new Date()))
    selected = true;
  let markToday;
  if (isSameDay(new Date(), day)) markToday = true;

  function handleClick() {
    if (isFuture(day)) return;
    setSelectedDay(day);
    setToday(day);
    showEntireMonth && setShowEntireMonth(false);
  }

  return (
    <div
      className={`dayCell ${markToday && "markToday"} ${
        wrongMonth && "wrongMonth"
      } ${selected && "selectedDay"}`}
      onClick={handleClick}
    >
      <div>{formattedDay}</div>
      {!showEntireMonth && <span>{nameDay}</span>}
    </div>
  );
};

export default DayCell;

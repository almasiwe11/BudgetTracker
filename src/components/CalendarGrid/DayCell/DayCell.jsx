/* eslint-disable react/prop-types */
import React from "react";
import { format, isFuture, isSameDay, isSameMonth } from "date-fns";
const DayCell = ({
  day,
  setSelectedDay,
  showEntireMonth,
  today,
  setShowEntireMonth,
  selectedDay,
}) => {
  const formattedDay = format(day, "dd");
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

import React from "react";
import { format, isSameDay, isSameMonth } from "date-fns";
const DayCell = ({ day, setSelectedDay, showEntireMonth, today }) => {
  const formattedDay = format(day, "dd");
  const nameDay = format(day, "EE");
  const wrongMonth = !isSameMonth(today, day);
  let markToday;
  if (isSameDay(new Date(), day)) markToday = true;
  return (
    <div
      className={`dayCell ${markToday && "markToday"} ${
        wrongMonth && "wrongMonth"
      }`}
      onClick={() => setSelectedDay(day)}
    >
      <div>{formattedDay}</div>
      {!showEntireMonth && <span>{nameDay}</span>}
    </div>
  );
};

export default DayCell;

import React from "react";
import { format, isSameDay } from "date-fns";
const DaySmall = ({ day, setSelectedDay, showEntireMonth }) => {
  const formattedDay = format(day, "dd");
  const nameDay = format(day, "EE");
  let markToday;
  if (isSameDay(new Date(), day)) markToday = true;
  return (
    <div className={`day-small ${markToday && "small-today"}`}>
      <div>{formattedDay}</div>
      {!showEntireMonth && <span>{nameDay}</span>}
    </div>
  );
};

export default DaySmall;

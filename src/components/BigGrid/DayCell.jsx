import React from "react";
import { sub, format, isSameMonth, isSameDay } from "date-fns";
const DayCell = ({ day, today }) => {
  const formattedDay = format(day, "d");
  const wrongMonth = !isSameMonth(today, day);
  let markToday;
  if (isSameDay(new Date(), day)) markToday = true;

  return (
    <div className={`dayCell ${wrongMonth && "wrongMonth"} `}>
      <div className={`${markToday && "today"} dayNumber`}> {formattedDay}</div>
    </div>
  );
};

export default DayCell;

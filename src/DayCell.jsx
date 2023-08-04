import React from "react";
import { sub, format, isSameMonth } from "date-fns";
const DayCell = ({ day, today }) => {
  const formattedDay = format(day, "d");
  const wrongMonth = !isSameMonth(today, day);

  return (
    <div className={`dayCell ${wrongMonth && "wrongMonth"}`}>
      {formattedDay}
    </div>
  );
};

export default DayCell;

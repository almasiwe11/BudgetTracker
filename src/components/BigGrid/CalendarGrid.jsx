import React from "react";
import { format, add, startOfMonth, isMonday, sub } from "date-fns";
import DayCell from "./DayCell";
const CalendarGrid = ({ today }) => {
  const startMonthDay = startOfMonth(today);
  const startMonday = findMonday(startMonthDay);
  const array = [...Array(42)].map((_, i) => add(startMonday, { days: i }));
  const weekDays = [...Array(7)].map((_, i) =>
    format(add(startMonday, { days: i }), "EEEE")
  );

  function findMonday(startMonthDay) {
    let currentDay = startMonthDay;
    while (!isMonday(currentDay)) {
      currentDay = sub(currentDay, { days: 1 });
    }
    return currentDay;
  }

  return (
    <div className="calendarGrid">
      {weekDays.map((day) => (
        <div className="weekDay">{day}</div>
      ))}
      {array.map((day) => (
        <DayCell day={day} today={today} />
      ))}
    </div>
  );
};

export default CalendarGrid;

import React from "react";
import {
  format,
  add,
  startOfMonth,
  isMonday,
  sub,
  isFuture,
  startOfWeek,
} from "date-fns";
import DaySmall from "./DaySmall";
const SmallGrid = ({ today, setToday }) => {
  const startMonday = startOfWeek(today);
  const weekDays = [...Array(7)].map((_, i) => add(startMonday, { days: i }));

  let disabled = true;
  if (!isFuture(add(startOfWeek(today), { weeks: 1 }))) disabled = false;

  function handlePrevWeek() {
    setToday((today) => sub(today, { weeks: 1 }));
  }

  function handleNextWeek() {
    setToday((today) => add(today, { weeks: 1 }));
  }

  return (
    <div className="smallGrid">
      <div className="small-date">August 2023</div>
      <div className="small-week">
        <button onClick={handlePrevWeek}>◀</button>
        {weekDays.map((day) => (
          <DaySmall day={day} />
        ))}
        <button onClick={handleNextWeek} disabled={disabled}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default SmallGrid;

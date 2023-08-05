import React, { useState } from "react";
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
const SmallGrid = ({ today, setToday, setSelectedDay }) => {
  const [showEntireMonth, setShowEntireMonth] = useState(true);
  const startMonday = startOfWeek(today, { weekStartsOn: 1 });
  const month = format(today, "MMMM");
  const year = format(today, "yyyy");
  const weekDays = [...Array(showEntireMonth ? 42 : 7)].map((_, i) =>
    add(startMonday, { days: i })
  );
  const weekDaysName = [...Array(7)].map((_, i) =>
    format(add(startMonday, { days: i }), "EEEE")
  );

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
      <div className="small-date">
        {month} {year}
      </div>

      <div className={showEntireMonth ? "showEntireMonth" : "small-week"}>
        {weekDaysName.map((day) => (
          <div className="weekDay">{day}</div>
        ))}
        <button
          className={showEntireMonth ? "showMonthBtnLeft" : "btnWeek"}
          onClick={handlePrevWeek}
        >
          ◀
        </button>
        {weekDays.map((day) => (
          <DaySmall
            day={day}
            setSelectedDay={setSelectedDay}
            showEntireMonth={showEntireMonth}
          />
        ))}
        <button
          className={showEntireMonth ? "showMonthBtnRight" : "btnWeek"}
          onClick={handleNextWeek}
          disabled={disabled}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default SmallGrid;

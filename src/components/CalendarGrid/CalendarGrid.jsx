/* eslint-disable react/prop-types */
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
import DayCell from "./DayCell";
import Header from "./Header";
import DayNames from "./DayNames";
const CalendarGrid = ({ today, setToday, setSelectedDay }) => {
  const [showEntireMonth, setShowEntireMonth] = useState(false);
  let startMonday;
  if (showEntireMonth) {
    const startMonthDay = startOfMonth(today);
    startMonday = startOfWeek(startMonthDay, { weekStartsOn: 1 });
  } else {
    startMonday = startOfWeek(today, { weekStartsOn: 1 });
  }

  const month = format(today, "MMMM");
  const year = format(today, "yyyy");
  const monthDays = [...Array(showEntireMonth ? 42 : 7)].map((_, i) =>
    add(startMonday, { days: i })
  );
  const weekDaysName = [...Array(7)].map((_, i) =>
    format(add(startMonday, { days: i }), "EEEE")
  );

  let disabled = true;
  if (!isFuture(add(startOfWeek(today), { weeks: 1 }))) disabled = false;

  function handlePrev() {
    if (showEntireMonth) {
      setToday((today) => sub(today, { months: 1 }));
    } else {
      setToday((today) => sub(today, { weeks: 1 }));
    }
  }

  function handleNext() {
    !showEntireMonth && setToday((today) => add(today, { weeks: 1 }));
    showEntireMonth && setToday((today) => add(today, { months: 1 }));
  }

  return (
    <div className="calendarGrid">
      <Header
        month={month}
        year={year}
        showEntireMonth={showEntireMonth}
        handleNext={handleNext}
        handlePrev={handlePrev}
        disabled={disabled}
        setShowEntireMonth={setShowEntireMonth}
      />
      <div className={showEntireMonth ? "showEntireMonth" : "showWeek"}>
        {showEntireMonth && <DayNames weekDaysName={weekDaysName} />}

        <button
          className={showEntireMonth ? "hide" : "btnWeek"}
          onClick={handlePrev}
        >
          ◀
        </button>

        {monthDays.map((day) => (
          <DayCell
            day={day}
            setSelectedDay={setSelectedDay}
            showEntireMonth={showEntireMonth}
            key={day}
            today={today}
          />
        ))}
        <button
          className={showEntireMonth ? "hide" : "btnWeek"}
          onClick={handleNext}
          disabled={disabled}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default CalendarGrid;

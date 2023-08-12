/* eslint-disable react/prop-types */
import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";
import { format, add, startOfMonth, startOfWeek } from "date-fns";
import DayCell from "./DayCell/DayCell";
import DayNames from "./DayNames/DayNames";
const CalendarGrid = ({
  today,
  setToday,
  setSelectedDay,
  selectedDay,
  handleNext,
  handlePrev,
  showEntireMonth,
  setShowEntireMonth,
  disabled,
}) => {
  let startMonday;
  if (showEntireMonth) {
    const startMonthDay = startOfMonth(today);
    startMonday = startOfWeek(startMonthDay, { weekStartsOn: 1 });
  } else if (selectedDay) {
    startMonday = startOfWeek(today, { weekStartsOn: 1 });
  }

  const monthDays = [...Array(showEntireMonth ? 42 : 7)].map((_, i) =>
    add(startMonday, { days: i })
  );
  const weekDaysName = [...Array(7)].map((_, i) =>
    format(add(startMonday, { days: i }), "EEEE")
  );

  return (
    <div className="calendarGrid">
      <div className={showEntireMonth ? "showEntireMonth" : "showWeek"}>
        {showEntireMonth && <DayNames weekDaysName={weekDaysName} />}

        <AiOutlineLeftCircle
          className={showEntireMonth ? "hide" : "btnMonth"}
          onClick={handlePrev}
        />

        {monthDays.map((day) => (
          <DayCell
            day={day}
            setSelectedDay={setSelectedDay}
            showEntireMonth={showEntireMonth}
            setToday={setToday}
            key={day}
            today={today}
            setShowEntireMonth={setShowEntireMonth}
            selectedDay={selectedDay}
          />
        ))}
        <AiOutlineRightCircle
          className={showEntireMonth ? "hide" : "btnMonth"}
          onClick={handleNext}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default CalendarGrid;

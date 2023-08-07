import { useState } from "react";
import CalendarGrid from "./components/CalendarGrid/CalendarGrid";
import Tracker from "./components/Tracker/Tracker";
import AllApps from "./components/AllApps/AllApps";
import Header from "./components//Header/Header";
import { isFuture, sub, add, startOfWeek } from "date-fns";
function App() {
  const [today, setToday] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(today);

  const [showEntireMonth, setShowEntireMonth] = useState(false);
  function handlePrev() {
    if (showEntireMonth) {
      setToday((today) => sub(today, { months: 1 }));
    } else {
      setToday((today) => sub(today, { weeks: 1 }));
    }
  }

  function handleNext() {
    if (!disabled) {
      !showEntireMonth && setToday((today) => add(today, { weeks: 1 }));
      showEntireMonth && setToday((today) => add(today, { months: 1 }));
    }
  }

  let disabled = true;
  if (!isFuture(add(startOfWeek(today), { weeks: 1 }))) disabled = false;

  return (
    <div className="app">
      <Header
        showEntireMonth={showEntireMonth}
        handleNext={handleNext}
        handlePrev={handlePrev}
        disabled={disabled}
        setShowEntireMonth={setShowEntireMonth}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        setToday={setToday}
      />
      <AllApps />
      <CalendarGrid
        today={today}
        setToday={setToday}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        showEntireMonth={showEntireMonth}
        setShowEntireMonth={setShowEntireMonth}
        disabled={disabled}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
      <Tracker selectedDay={selectedDay} />
    </div>
  );
}

export default App;

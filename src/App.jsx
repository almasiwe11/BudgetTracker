import { useState, useEffect } from "react";
import CalendarGrid from "./components/CalendarGrid/CalendarGrid";
import Tracker from "./components/Tracker/Tracker";
import AllApps from "./components/AllApps/AllApps";
import Header from "./components//Header/Header";
import Owers from "./components/Owers/Owers";
import Stats from "./components/Stats/Stats";
import InitialBank from "./components/InitialBank/InitialBank";
import { isFuture, sub, add, startOfWeek } from "date-fns";
function App() {
  const [today, setToday] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(today);
  const [initialBank, setInitialBank] = useState(
    localStorage.getItem("Initial-bank") || ""
  );
  const [showTracker, setShowTracker] = useState("Day-by-Day");

  const [trackList, setTrackList] = useState(
    JSON.parse(localStorage.getItem("trackList")) || []
  );

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

  /* useEffect(() => {
    const initial = localStorage.getItem("Initial-bank");
  }, []); */

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
        trackList={trackList}
        initialBank={initialBank}
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
      <Tracker
        selectedDay={selectedDay}
        trackList={trackList}
        setTrackList={setTrackList}
      />
      <Owers trackList={trackList} />
      <Stats trackList={trackList} selectedDay={selectedDay} />
      {!initialBank && <InitialBank setInitialBank={setInitialBank} />}
    </div>
  );
}

export default App;

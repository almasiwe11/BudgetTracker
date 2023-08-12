import { useState } from "react";
import CalendarGrid from "./components/CalendarGrid/CalendarGrid";
import Tracker from "./components/Tracker/Tracker";
import AllApps from "./components/AllApps/AllApps";
import Owers from "./components/Owers/Owers";
import Stats from "./components/Stats/Stats";
import InitialBank from "./components/InitialBank/InitialBank";
import { isFuture, sub, add, startOfWeek } from "date-fns";
import Logo from "./components/Header/Logo/Logo";
import DateMonth from "./components/Header/Date/DateMonth";
import Wallet from "./components/Header/Wallet/Wallet";
function App() {
  const [today, setToday] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(today);
  const [initialBank, setInitialBank] = useState(
    localStorage.getItem("Initial-bank") || ""
  );
  const [filterTracker, setFilterTracker] = useState(false);
  const [trackList, setTrackList] = useState(
    () => JSON.parse(localStorage.getItem("trackList")) || []
  );
  const [trackEntireMonth, setTrackEntireMonth] = useState(false);

  const [showEntireMonth, setShowEntireMonth] = useState(false);
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
    <div className="app">
      <>
        <Logo />
        <DateMonth
          setSelectedDay={setSelectedDay}
          selectedDay={selectedDay}
          handleNext={handleNext}
          handlePrev={handlePrev}
          showEntireMonth={showEntireMonth}
          setToday={setToday}
          setShowEntireMonth={setShowEntireMonth}
          today={today}
        />
        <Wallet
          trackList={trackList}
          initialBank={initialBank}
          selectedDay={selectedDay}
        />
      </>
      {/* <AllApps /> */}
      <CalendarGrid
        today={today}
        setToday={setToday}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        showEntireMonth={showEntireMonth}
        setShowEntireMonth={setShowEntireMonth}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
      <Tracker
        showEntireMonth={showEntireMonth}
        selectedDay={selectedDay}
        trackList={trackList}
        setTrackList={setTrackList}
        filterTracker={filterTracker}
        setFilterTracker={setFilterTracker}
        trackEntireMonth={trackEntireMonth}
        setTrackEntireMonth={setTrackEntireMonth}
      />
      <Owers trackList={trackList} />
      <Stats
        trackList={trackList}
        selectedDay={selectedDay}
        setFilterTracker={setFilterTracker}
        setTrackEntireMonth={setTrackEntireMonth}
      />
      {!initialBank && <InitialBank setInitialBank={setInitialBank} />}
    </div>
  );
}

export default App;

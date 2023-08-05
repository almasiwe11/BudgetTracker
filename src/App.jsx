import { useState } from "react";
import CalendarGrid from "./components/CalendarGrid/CalendarGrid";
import Body from "./Body/Body";
function App() {
  const [today, setToday] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(today);
  return (
    <>
      <CalendarGrid
        today={today}
        setToday={setToday}
        setSelectedDay={setSelectedDay}
      />
      <Body />
    </>
  );
}

export default App;

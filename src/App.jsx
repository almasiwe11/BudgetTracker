import { useState } from "react";
import CalendarGrid from "./components/CalendarGrid/CalendarGrid";
import Body from "./components/Body/Body";
function App() {
  const [today, setToday] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(today);
  console.log(selectedDay);
  return (
    <div className="app">
      <CalendarGrid
        today={today}
        setToday={setToday}
        setSelectedDay={setSelectedDay}
      />
      <Body selectedDay={selectedDay} />
    </div>
  );
}

export default App;

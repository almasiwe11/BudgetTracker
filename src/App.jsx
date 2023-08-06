import { useState } from "react";
import CalendarGrid from "./components/CalendarGrid/CalendarGrid";
import Body from "./components/Body/Body";
import AllApps from "./components/AllApps/AllApps";
function App() {
  const [selectedDay, setSelectedDay] = useState(new Date());
  return (
    <div className="app">
      <AllApps />
      <CalendarGrid
        today={today}
        setToday={setToday}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
      />
      <Body selectedDay={selectedDay} />
    </div>
  );
}

export default App;

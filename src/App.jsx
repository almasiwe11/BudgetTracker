import { useState } from "react";
import CalendarGrid from "./CalendarGrid";
import Header from "./Header";
function App() {
  const [today, setToday] = useState(new Date());
  return (
    <>
      <Header setToday={setToday} today={today} />
      <CalendarGrid today={today} />
    </>
  );
}

export default App;

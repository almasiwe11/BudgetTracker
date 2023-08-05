import { useState } from "react";
import SmallGrid from "./components/SmallGrid/SmallGrid";
import BigGrid from "./components/BigGrid/BigGrid";
import Body from "./Body/Body";
function App() {
  const [today, setToday] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(today);
  return (
    <>
      <SmallGrid
        today={today}
        setToday={setToday}
        setSelectedDay={setSelectedDay}
      />
      <Body />
    </>
  );
}

export default App;

{
  /* <BigGrid today={today} setToday={setToday} /> */
}

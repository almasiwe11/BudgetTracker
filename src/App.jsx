import { useState } from "react";
import SmallGrid from "./components/SmallGrid/SmallGrid";
import BigGrid from "./components/BigGrid/BigGrid";
function App() {
  const [today, setToday] = useState(new Date());
  return (
    <>
      <SmallGrid today={today} setToday={setToday} />
    </>
  );
}

export default App;

{
  /* <BigGrid today={today} setToday={setToday} /> */
}

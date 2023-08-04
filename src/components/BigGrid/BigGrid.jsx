import React from "react";
import CalendarGrid from "./CalendarGrid";
import Header from "./Header";
const BigGrid = ({ today, setToday }) => {
  return (
    <div>
      <Header setToday={setToday} today={today} />
      <CalendarGrid today={today} />
    </div>
  );
};

export default BigGrid;

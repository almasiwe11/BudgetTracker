import React from "react";

const DayNames = ({ weekDaysName }) => {
  return (
    <>
      {weekDaysName.map((day) => (
        <div className="weekDay" key={day}>
          {day}
        </div>
      ))}
    </>
  );
};

export default DayNames;

/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { isSameMonth, parseJSON, format, isSameYear } from "date-fns";

const Stats = ({ trackList, selectedDay }) => {
  const [period, setPeriod] = useState("Selected Month");
  const [display, setDisplay] = useState("Number");
  const formatted = format(selectedDay, "MMMM y");

  let allLossesDuringPeriod;

  const loss = trackList.filter((track) => track.type === "loss");
  /*   const theMonthLoss = loss.filter((track) =>
     isSameMonth(parseJSON(track.selectedDay), selectedDay)
  ) */
  if (period === "Selected Month") {
    allLossesDuringPeriod = loss.filter((track) =>
      isSameMonth(parseJSON(track.selectedDay), selectedDay)
    );
  } else if (period === "All Time") {
    allLossesDuringPeriod = loss;
  } else if (period === "This Year") {
    allLossesDuringPeriod = loss.filter((track) =>
      isSameYear(parseJSON(track.selectedDay), selectedDay)
    );
  }

  const spentTotalDuringPeriod = allLossesDuringPeriod.reduce((acc, spent) => {
    const amount = parseFloat(spent.amount.replace(/[^\d.]/g, ""));
    return acc + Number(amount);
  }, 0);

  const types = [];
  let expenditure = [];
  for (let i = 0; i < allLossesDuringPeriod.length; i++) {
    if (types.indexOf(allLossesDuringPeriod[i].spent) === -1) {
      const spentOn = allLossesDuringPeriod.filter(
        (loss) => loss.spent === allLossesDuringPeriod[i].spent
      );
      const totalSpentOn = spentOn.reduce((acc, spent) => {
        const amount = parseFloat(spent.amount.replace(/[^\d.]/g, ""));
        return acc + Number(amount);
      }, 0);
      const obj = {
        type: allLossesDuringPeriod[i].spent,
        totalSpent: totalSpentOn,
      };
      types.push(allLossesDuringPeriod[i].spent);
      expenditure.push(obj);
    }
  }

  console.log(expenditure);

  return (
    <div className="stats">
      <div className="stats-header">
        {formatted}
        <select
          name="period"
          id="period"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option value="All Time">All Time</option>
          <option value="This Year">This Year</option>
          <option value="Selected Month">Selected Month</option>
        </select>

        <select
          name="display"
          id="display"
          value={display}
          onChange={(e) => setDisplay(e.target.value)}
        >
          <option value="Percentage">Percentage</option>
          <option value="Number">Number</option>
        </select>
      </div>
      {expenditure
        .sort((a, b) => b.totalSpent - a.totalSpent)
        .map((type) => {
          let showSpentType;
          if (display === "Percentage") {
            showSpentType = `${(
              (type.totalSpent / spentTotalDuringPeriod) *
              100
            ).toFixed(2)}%`;
          } else {
            showSpentType = type.totalSpent.toLocaleString();
          }
          /* 
         type: allLossesDuringPeriod[i].spent,
          totalSpent:totalSpentOn */

          return (
            <li key={type.id}>
              {type.type} {showSpentType}
            </li>
          );
        })}
    </div>
  );
};

export default Stats;

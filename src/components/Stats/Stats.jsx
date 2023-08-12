/* eslint-disable react/prop-types */
import { useState } from "react";
import { isSameMonth, parseJSON, format, isSameYear } from "date-fns";
import { useTotal } from "../../customHooks/useTotal";

const Stats = ({
  trackList,
  selectedDay,
  setFilterTracker,
  setTrackEntireMonth,
  period,
  setPeriod,
}) => {
  const [display, setDisplay] = useState("Number");
  const formatted = format(selectedDay, "MMMM y");
  let dataOfThePeriod;

  if (period === "Selected Month") {
    dataOfThePeriod = trackList.filter((track) =>
      isSameMonth(parseJSON(track.selectedDay), selectedDay)
    );
  } else if (period === "All Time") {
    dataOfThePeriod = trackList;
  } else if (period === "This Year") {
    dataOfThePeriod = trackList.filter((track) =>
      isSameYear(parseJSON(track.selectedDay), selectedDay)
    );
  }

  const allLossesDuringPeriod = dataOfThePeriod.filter(
    (track) => track.type === "loss"
  );
  const moneyReturnDuringPeriod = dataOfThePeriod.filter(
    (track) => track.gained === "Return"
  );

  const spentTotalDuringPeriod = useTotal(allLossesDuringPeriod);

  const types = [];
  let expenditure = [];
  for (let i = 0; i < allLossesDuringPeriod.length; i++) {
    if (!types.includes(allLossesDuringPeriod[i].spent)) {
      const spentOn = allLossesDuringPeriod.filter(
        (loss) => loss.spent === allLossesDuringPeriod[i].spent
      );
      const totalSpentOn = useTotal(spentOn);
      const obj = {
        type: allLossesDuringPeriod[i].spent,
        totalSpent: Math.abs(totalSpentOn),
      };
      types.push(allLossesDuringPeriod[i].spent);
      expenditure.push(obj);
    }
  }

  if (types.indexOf("Owing") !== -1) {
    const moneyBackTotal = useTotal(moneyReturnDuringPeriod);
    expenditure = expenditure.map((expend) => {
      if (expend.type === "Owing") {
        const newTotal = expend.totalSpent - moneyBackTotal;
        return { ...expend, totalSpent: newTotal };
      } else {
        return expend;
      }
    });
  }

  function handleStat(type) {
    setFilterTracker(type);
    setTrackEntireMonth(true);
  }

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
              (Math.abs(type.totalSpent) / Math.abs(spentTotalDuringPeriod)) *
              100
            ).toFixed(2)}%`;
          } else {
            showSpentType = type.totalSpent.toLocaleString();
          }
          return (
            <li
              key={type.id}
              onClick={() => handleStat(type.type)}
              className="stat"
            >
              {type.type} {showSpentType}
            </li>
          );
        })}
    </div>
  );
};

export default Stats;

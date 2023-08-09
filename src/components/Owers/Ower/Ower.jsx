import React, { useState } from "react";
import { format, parseJSON } from "date-fns";
const Ower = ({ owerTrackList, owerName }) => {
  const [showDetails, setShowDetails] = useState(false);

  const totalOwing = owerTrackList.reduce((acc, owing) => {
    const amount = parseFloat(owing.amount.replace(/[^\d.]/g, ""));
    if (owing.spent === "Owing") {
      return acc + Number(amount);
    } else if (owing.gained === "Return") {
      return acc - Number(amount);
    }
  }, 0);

  return (
    <ul className="ower" onClick={() => setShowDetails((prev) => !prev)}>
      {owerName} {totalOwing.toLocaleString()}
      {showDetails &&
        owerTrackList.map((owing) => {
          let style;
          if (owing.spent === "Owing") {
            style = {
              color: "#dc2626",
            };
          } else if (owing.gained === "Return") {
            style = {
              color: "#16a34a",
            };
          }
          return (
            <li key={owing.id} style={style}>
              {`
            ${format(parseJSON(owing.selectedDay), "PPP")} - ${owing.amount}
            `}
            </li>
          );
        })}
    </ul>
  );
};

export default Ower;

import React, { useState } from "react";
import { format, parseJSON } from "date-fns";
import { useTotal } from "../../../customHooks/useTotal";
const Ower = ({ owerTrackList, owerName }) => {
  const [showDetails, setShowDetails] = useState(false);

  const totalOwing = Math.abs(useTotal(owerTrackList));

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
            ${format(parseJSON(owing.selectedDay), "PPP")} - ${Math.abs(
                owing.amount
              )}
            `}
            </li>
          );
        })}
    </ul>
  );
};

export default Ower;

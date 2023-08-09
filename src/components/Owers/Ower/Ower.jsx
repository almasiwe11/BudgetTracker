import React, { useState } from "react";
import { format, parseJSON } from "date-fns";
const Ower = ({ owerTrackList, owerName }) => {
  const [showDetails, setShowDetails] = useState(false);

  const totalOwing = owerTrackList.reduce((acc, owing) => {
    const amount = parseFloat(owing.amount.replace(/[^\d.]/g, ""));
    return acc + Number(amount);
  }, 0);

  return (
    <ul className="ower" onClick={() => setShowDetails((prev) => !prev)}>
      {owerName} {totalOwing.toLocaleString()}
      {showDetails &&
        owerTrackList.map((owing) => (
          <li key={owing.id}>
            {`
            ${format(parseJSON(owing.selectedDay), "PPP")} - ${owing.amount}
            `}
          </li>
        ))}
    </ul>
  );
};

export default Ower;

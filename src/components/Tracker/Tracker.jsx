import React, { useState } from "react";
import Inputs from "./Inputs/Inputs";
import { format } from "date-fns";

import GainLoss from "./GainLoss/GainLoss";
const Tracker = ({ selectedDay }) => {
  const [addBudget, setAddBudget] = useState(false);
  const selectedD = format(selectedDay, "do LLLL");
  return (
    <div className="tracker">
      <div className="selected-date">{selectedD}</div>
      {addBudget && <Inputs />}
      <GainLoss setAddBudget={setAddBudget} />
    </div>
  );
};

export default Tracker;

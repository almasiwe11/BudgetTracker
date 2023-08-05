import React from "react";
import { format } from "date-fns";
const Body = ({ selectedDay }) => {
  const selectedD = format(selectedDay, "do LLLL");
  return <div>{selectedD}</div>;
};

export default Body;

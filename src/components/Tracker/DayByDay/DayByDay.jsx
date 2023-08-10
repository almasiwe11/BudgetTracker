/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { nanoid } from "nanoid";
import Inputs from "../Inputs/Inputs";
import Track from "../Track/Track";
import GainLoss from "../GainLoss/GainLoss";
import NextPage from "../../NextPage/NextPage";

const DayByDay = ({
  trackList,
  selectedList,
  addBudget,
  setAddBudget,
  setTrackList,
  selectedDay,
}) => {
  const [displayedItems, setDisplayedItems] = useState(selectedList);
  let display;
  if (selectedList.length > 1) {
    display = displayedItems;
  } else {
    display = selectedList;
  }
  return (
    <div className="day-by-day">
      {display.map((track) => (
        <Track
          key={track.id}
          spent={track.spent}
          gained={track.gained}
          description={track.description}
          toWho={track.toWho}
          amount={track.amount}
          type={track.type}
          trackList={trackList}
          setTrackList={setTrackList}
          id={track.id}
          disabled={true}
          selectedDay={track.selectedDay}
        />
      ))}
      {addBudget && (
        <Inputs
          type={addBudget}
          setAddBudget={setAddBudget}
          setTrackList={setTrackList}
          selectedDay={selectedDay}
          id={nanoid()}
        />
      )}
      <GainLoss setAddBudget={setAddBudget} />
      <NextPage
        itemsPerPage={12}
        array={selectedList}
        setDisplayedItems={setDisplayedItems}
        addBudget={addBudget}
      />
    </div>
  );
};

export default DayByDay;

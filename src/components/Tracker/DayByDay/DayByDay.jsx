/* eslint-disable react/prop-types */
import { useState } from "react";
import { nanoid } from "nanoid";
import Inputs from "../Inputs/Inputs";
import Track from "../Track/Track";
import GainLoss from "../GainLoss/GainLoss";
import Pagination from "../../Pagination/Pagination";
import { usePagination } from "../../../customHooks/usePagination";

const DayByDay = ({
  trackList,
  selectedList,
  addBudget,
  setAddBudget,
  setTrackList,
  selectedDay,
}) => {
  const itemsPerPage = 12;
  const {
    currentPage,
    totalPages,
    handleNext,
    handlePrev,
    displayedItems,
    setCurrentPage,
  } = usePagination(selectedList, itemsPerPage);

  return (
    <div className="day-by-day">
      {displayedItems.map((track) => (
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
      <GainLoss
        setAddBudget={setAddBudget}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
      <Pagination
        currentPage={currentPage}
        handlePrev={handlePrev}
        handleNext={handleNext}
        totalPages={totalPages}
      />
    </div>
  );
};

export default DayByDay;

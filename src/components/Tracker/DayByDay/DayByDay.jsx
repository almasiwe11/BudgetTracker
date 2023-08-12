/* eslint-disable react/prop-types */
import { useState } from "react";
import { nanoid } from "nanoid";
import Inputs from "../Inputs/Inputs";
import Track from "../Track/Track";
import GainLoss from "../GainLoss/GainLoss";
import Pagination from "../../Pagination/Pagination";

const DayByDay = ({
  trackList,
  selectedList,
  addBudget,
  setAddBudget,
  setTrackList,
  selectedDay,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(selectedList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = selectedList.slice(startIndex, endIndex);

  function handlePrev() {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  }

  function handleNext() {
    if (currentPage === totalPages) return;
    setCurrentPage((prev) => prev + 1);
  }

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
      <GainLoss setAddBudget={setAddBudget} />
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

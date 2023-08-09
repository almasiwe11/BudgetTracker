/* eslint-disable react/prop-types */
import { set } from "date-fns";
import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Inputs from "../Inputs/Inputs";
import { format, parseJSON } from "date-fns";

const Track = ({
  spent,
  description,
  amount,
  toWho,
  type,
  gained,
  id,
  setTrackList,
  selectedDay,
  showDate = false,
}) => {
  const [editing, setEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  function handleDelete(id) {
    setTrackList((prev) => prev.filter((track) => track.id !== id));
  }

  return (
    <>
      {editing ? (
        <Inputs
          spentEditing={spent}
          gainedEditing={gained}
          descriptionEditing={description}
          toWhoEditing={toWho}
          amountEditing={amount}
          type={type}
          idEditing={id}
          editing={editing}
          setEditing={setEditing}
          setTrackList={setTrackList}
          selectedDay={selectedDay}
        />
      ) : (
        <div
          className={`track ${type === "gain" ? "green" : "red"}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {showDate && <p>{format(parseJSON(selectedDay), "do ")}</p>}
          {type === "gain" ? <p>{gained}</p> : <p>{spent}</p>}
          {toWho && <p>{toWho}</p>}
          <p>{description}</p>
          <p>{amount} tg</p>
          {isHovered && (
            <>
              <RiDeleteBin6Fill
                className="delete"
                onClick={() => handleDelete(id)}
              />
              <button className="edit" onClick={() => setEditing(true)}>
                Edit
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Track;

/*   <Inputs
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
     editing={editing}
     setEditing={setEditing}
   />; */

/* eslint-disable react/prop-types */
import { set } from "date-fns";
import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Track = ({
  spent,
  description,
  amount,
  toWho,
  type,
  gained,
  id,
  setTrackList,
}) => {
  function handleDelete(id) {
    setTrackList((prev) => prev.filter((track) => track.id !== id));
  }
  return (
    <div className={`track ${type === "gain" ? "green" : "red"}`}>
      {type === "gain" ? <p>{gained}</p> : <p>{spent}</p>}
      {toWho && <p>{toWho}</p>}
      <p>{description}</p>
      <p>{amount} tg</p>
      <RiDeleteBin6Fill className="delete" onClick={() => handleDelete(id)} />
    </div>
  );
};

export default Track;

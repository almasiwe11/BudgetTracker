import React from "react";

const Track = ({ spent, description, amount, toWho, type, gained }) => {
  return (
    <div className={`track ${type === "gain" ? "green" : "red"}`}>
      {type === "gain" ? <p>{gained}</p> : <p>{spent}</p>}
      {toWho && <p>{toWho}</p>}
      <p>{description}</p>
      <p>{amount} tg</p>
    </div>
  );
};

export default Track;

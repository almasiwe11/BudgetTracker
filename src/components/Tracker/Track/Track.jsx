import React from "react";

const Track = ({ spent, description, amount, toWho }) => {
  return (
    <div className="track">
      <p>{spent}</p>
      {toWho && <p>{toWho}</p>}
      <p>{description}</p>
      <p>{amount} tg</p>
    </div>
  );
};

export default Track;

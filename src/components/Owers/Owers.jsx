import React from "react";
import { isFuture, sub, add, startOfWeek } from "date-fns";
import Ower from "./Ower/Ower";

const Owers = ({ trackList }) => {
  let friends = [];
  const owers = trackList
    .filter((track) => track.toWho)
    .filter((record) => record.type === "loss");
  for (let i = 0; i < owers.length; i++) {
    if (friends.indexOf(owers[i].toWho) === -1) friends.push(owers[i].toWho);
  }

  return (
    <div className="owers">
      <h2>Owing me money</h2>
      {friends.map((friend) => (
        <Ower
          key={friend}
          owerTrackList={owers.filter((owing) => owing.toWho === friend)}
          owerName={friend}
        />
      ))}
    </div>
  );
};

export default Owers;

import React from "react";

const PlayerCard = ({ player }) => {
  let { bck, number, name, lastname } = player;
  return (
    <div className="player_card_wrapper">
      <div className="player_card_thmb" style={{ background: `#f2f9ff` }} />
      <div className="player_card_nfo">
        <div className="player_card_number">{number}</div>
        <div className="player_card_name">
          <span>{name}</span>
          <span>{lastname}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;

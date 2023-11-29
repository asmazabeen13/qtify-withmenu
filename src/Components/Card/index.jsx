import React from "react";
import "./card.css";

const Card = ({ imgSrc, followersCount, label, numberOfSongs }) => {
  return (
    <div className="card-wrapper">
      <div className="card" title={`Number of Songs: ${numberOfSongs}`}>
        <div className="card-img-frame">
          <img src={imgSrc} className="card-img" alt={label} />
        </div>
        <div className="card-content">
          <span className="card-content-pill">{followersCount} FOLLOWS</span>
        </div>
      </div>
      <p className="card-label"> {label}</p>
    </div>
  );
};

export default Card;

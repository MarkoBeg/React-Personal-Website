import React from "react";
import "./Card.css";

export default function Card({
  title,
  img,
  text,
  info,
  color,
  background,
  border,
  picture,
}) {
  return (
    <div className="card-section">
      <div className="card-size">
        <div className="card">
          <div
            className="front-card"
            style={{
              background: background,
              border: border,
              backgroundImage: `url( ${picture})`,
            }}
          >
            {img && <img src={img} alt="project"></img>}
            <h2 style={{ color: color }}>{title}</h2>
          </div>
          <div className="back-card">
            <h3>{info}</h3>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

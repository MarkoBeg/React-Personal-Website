import React from "react";
import "./PictureInfo.css";

export default function PictureInfo({ img, text, title }) {
  return (
    <div className="picture-info">
      <div className="info">
        {img && <img src={img} alt=""></img>}
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

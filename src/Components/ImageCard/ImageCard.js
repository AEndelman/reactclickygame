import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="monkimg">
    <div className="img-container">
    <img onClick={() => props.selectPhoto(props.id)} className="removed" alt={props.name} src={props.image}  alt={props.name} src={props.image}  />
    </div>
  </div>
);

export default ImageCard;

import React from "react";

function CardImg(props) {
  return props.imgUrl ? (
    <img src={props.imgUrl} className="card-img-top" alt="..." />
  ) : null;
}

export default CardImg;
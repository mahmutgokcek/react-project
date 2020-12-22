import React from "react"

function CardSubTitle(props) {
  return props.subTitle ? (
   <h5 className="card-title">{props.subTitle}</h5> ) : null;

}
export default CardSubTitle;
import React from "react"

function CardTitle(props) {
  return props.title ? (
   <h5 className="card-title">{props.title}</h5> ) : null;

}
export default CardTitle;
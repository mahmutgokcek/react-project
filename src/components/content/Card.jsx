import React from "react";
import CardImg from "../content/CardImg";
import CardTitle from "../content/CardTitle";
import CardSubTitle from "../content/CardSubTitle";


function Card(props) {
  const { title, subTitle, imgUrl } = props.item;
  return (
    <div>
      <div className="card">
        <CardImg imgUrl = {imgUrl}/>
          <div className="card-body">
            <CardTitle title = {title}/>
            <p className="card-text">
              <CardSubTitle subTitle = {subTitle} />
            </p>
            <a href="#" className="btn btn-primary">
              Favorilere Ekle
            </a>
          </div>
        </div>
    </div>
  );
}
export default Card;

import React from "react";
import CardImg from "../content/CardImg";
import CardTitle from "../content/CardTitle";
import CardSubTitle from "../content/CardSubTitle";

function Card(props) {
  const [like, setLike] = React.useState(
    Number(localStorage.getItem("like")) || 0
  );

  const likeHandler = event => {
    event.target.name == "like" ? setLike(like + 1) : null;
  };

  const [dissLike, setDissLike] = React.useState(
    Number(localStorage.getItem("disslike")) || 0
  );

  const dissLikeHandler = event => {
    event.target.name == "dissLike" ? setDissLike(dissLike - 1) : null;
  };

  localStorage.setItem("like", like);
  localStorage.setItem("disslike", dissLike);

  const { title, subTitle, imgUrl } = props.item;
  return (
    <div>
      <div className="card">
        <CardImg imgUrl={imgUrl} />
        <div className="card-body">
          <CardTitle title={title} />
          <p className="card-text">
            <CardSubTitle subTitle={subTitle} />
          </p>
          <div class="like" className="d-flex">
            <button name="like" onClick={likeHandler} className="w-50 me-2">
              Like: {like}
            </button>
            <button name="dissLike" onClick={dissLikeHandler} className="w-50">
              Disslike: {dissLike}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;

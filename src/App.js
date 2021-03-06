import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/main/Header";
import Banner from "./components/main/Banner"
import BannerText from "./components/main/BannerText"
import CARD_INFO from "./components/data/card-info";
import Footer from "./components/main/Footer";
import Card from "./components/content/Card";


export default function App() {

  const CardInfo = CARD_INFO.map((cardinfo,index) 
  => {console.log(cardinfo,index);
  const colSize = 6;
  return (
    <div className= {`col-sm-${colSize} mb-3`}>
      <Card key = {index} item = {cardinfo}/>
    </div>
  );
});
  return (
    <div>
        <Header />
      <Banner />
      <BannerText />
      <div className = "container mt-3 mb-5 pb-3">
        <div className = "row">
          {CardInfo}
        </div>
      </div>
      <div className="footer fixed-bottom">
        <Footer />
      </div>
    </div>
  );
}

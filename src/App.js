import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Header";
import Card from "./components/Card";


export default function App() {
  return (
    <div className = "container-fluid">
      <div className = "header">
        <Header />
      </div>
      <div className = "card-content">
        <Card />
      </div>
    </div>
  );
}

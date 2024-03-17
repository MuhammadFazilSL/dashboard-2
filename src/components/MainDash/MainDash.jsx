import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = (props) => {
  let heading = "";
  if(props.selected===0){
    heading = "Dashboard"
  }
  if(props.selected===1){
    heading = "Orders"
  }
  if(props.selected===2){
    heading = "Customers"
  }
  if(props.selected===3){
    heading = "Products"
  }
  console.log(props.cardsDatadashboard)
  return (
    <div className="MainDash">
      <h1>{heading}</h1>
      <Cards cardsdata={props.cardsDatadashboard}/>
      <Table selected={props.selected}/>
    </div>
  );
};

export default MainDash;

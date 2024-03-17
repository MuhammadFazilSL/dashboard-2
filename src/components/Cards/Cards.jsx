import React from "react";
import "./Cards.css";

import Card from "../Card/Card";

const Cards = (cardsdata) => {
  console.log(cardsdata.cardsdata)
  return (
    <div className="Cards">
      {cardsdata.cardsdata.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

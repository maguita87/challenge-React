import React from "react";
import Features from "./Features";
import FeaturesDescription from "./FeaturesDescription";
import RegisterBox from "./RegisterBox";
const Main = () => {
  const information = [
    {
      id: 0,
      label: "Foreing Exchange Control",
      title: "Control of currency changes",
      paragraph:
        "This module is responsible for tracking the exchange rate, it is updated as soon it receives new data and is synchronized with the table. You can independently indicate which courses you want to see on your page, just add them to the table.",
      img: "./img/img-currency.png",
    },
    {
      id: 1,
      label: "Technical Support",
      title: "Solve your issues instantly",
      paragraph:
        "The technical support of our service is working at a completely new level, we are trying to solve your problems instantly, you just need to describe your problem and we immediatly pounce for its solution. Our technical assistants work around the clock.",
      img: "./img/img.png",
    },
    {
      id: 2,
      label: "Foreing Exchange Control",
      title: "Track your transactions",
      paragraph:
        "Tracking purchases always allows you to be aware of where your money is, you are always aware of how much money you spent and how much you have on the card, so you can control all your transactions from one card.",
      img: "./img/img-track.png",
    },
  ];

  return (
    <>
      <Features />
      {information.map((info, index) => (
        <div key={index}>
          <FeaturesDescription info={info} />
        </div>
      ))}
      <RegisterBox />
    </>
  );
};

export default Main;

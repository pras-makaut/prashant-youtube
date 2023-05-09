import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const nameList = [
    "All",
    "Mixes",
    "Gaming",
    "News",
    "Live",
    "Pawan Singh",
    "Bhojpri",
    "Cricket",
    "Football",
    "Messi",
    "Salman Khan",
    "The Kerala Story",
  ];
  return (
    <div className="flex flex-wrap">
      {nameList.map((name, idx) => (
        <Button name={name} key={idx} />
      ))}
    </div>
  );
};

export default ButtonList;

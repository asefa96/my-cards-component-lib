import React from "react";
import { FC } from "react";
import "./TransitionCard.scss";
import { TransitionCardType } from "./TransitionCard.types";

const TransitionCard: FC<TransitionCardType> = (props: TransitionCardType) => {
  return (
    <>
      <div className="card">
        <img src={props.image} />
        <div className="info">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button onClick={props.buttonAction}>{props.buttonText}</button>
        </div>
      </div>
    </>
  );
};

export default TransitionCard;

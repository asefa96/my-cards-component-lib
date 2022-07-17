import React from "react";
import { FC } from "react";
import "./HoveredOpenCard.scss";
import { HoveredOpenCardType } from "./HoveredOpenCard.types";

const HoveredOpenCard: FC<HoveredOpenCardType> = (
  props: HoveredOpenCardType
) => {
  return (
    <>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      ></link>
      <div className="card__hoveredOpen">
        <div className="image">
          <img src={props.image} />
        </div>
        <div className="details">
          <div className="center">
            <h1>
              {props.title}
              <br />
              <span>{props.subtitle}</span>
            </h1>
            <p>
              {props.content}
            </p>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoveredOpenCard;

import React from "react";
import "./styles.scss";

export default function Cover(props) {
  Cover.defaultProps = {
    title: "Title goes here",
    size: "small",
    bgColor: "#ebe6e4",
    color: "#4a4a4a",
    margin: "medium"
  };

  return (
    <div
      className={`
      uk-cover-container uk-height-${props.size} 
      uk-flex
      uk-margin-${props.margin}-top
      uk-margin-${props.margin}-bottom
      `}
      style={{ backgroundColor: props.bgColor }}
    >
      <h1
        style={{ color: props.color }}
        className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical"
      >
        {props.title}
      </h1>
    </div>
  );
}

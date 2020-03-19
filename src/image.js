import React from "react";
import "./styles.scss";

Image.defaultProps = {
  size: "medium",
  margin: "medium"
};
export default function Image(props) {
  return (
    <div
      className={`
        uk-cover-container uk-height-${props.size} 
        uk-margin-${props.margin}-top
        uk-margin-${props.margin}-bottom
        `}
    >
      {/* <div className="uk-inline-clip uk-transition-toggle" tabindex="0"> */}
      <img
        src="https://4bc3c611vkso1vlr592w9fyz-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/cafe-cash.jpg"
        alt=""
        // className="uk-transition-scale-up uk-transition-opaque"
        data-uk-cover
      />
      <div className="uk-overlay-default uk-position-cover" />
      <canvas width="600" height="400" />
      {/* <div className="uk-overlay uk-position-top">
          <span className="uk-badge">
            <span data-uk-icon="icon: tag" /> POS, Cafe
          </span>
        </div> */}
    </div>
  );
}

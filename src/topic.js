import React from "react";
import "./styles.scss";

export default function Topic(props) {
  return (
    <div
      className="uk-card uk-card-small uk-card-default uk-grid-collapse uk-margin"
      data-uk-grid
    >
      <div className="uk-card-media-left uk-cover-container uk-width-1-3">
        <img
          src="https://4bc3c611vkso1vlr592w9fyz-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/cafe-cash.jpg"
          alt=""
          data-uk-cover
        />
        <canvas width="600" height="400" />
      </div>
      <div className="uk-width-2-3">
        <div className="uk-card-body">
          <h3 className="uk-h5">Media Left</h3>
          <p className="uk-text-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}

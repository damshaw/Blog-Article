import React from "react";
import { render } from "react-dom";
import "./styles.scss";
import { checkPropTypes } from "prop-types";

export default function Video(props) {
  return (
    <div className={props.size}>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          <div className="uk-cover-container ">
            <iframe
              title="video-1"
              src="https://player.vimeo.com/video/368723910?playsinline=1&loop=1"
              width="1920"
              height="1080"
              frameborder="0"
              allowfullscreen
              data-uk-responsive
              data-uk-video="automute: true;autoplay:false"
            />
          </div>
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">Lorem ipsum dolor</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
      </div>
    </div>
  );
}

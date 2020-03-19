import React from "react";
import { render } from "react-dom";
import "./styles.scss";
import PostMeta from "./postMeta";
import Image from "./image";

export default function Card(props) {
  const hasImage = props;
  let image;

  if (hasImage) {
    image = <Image />;
  }

  return (
    <div className={`card-post ${props.size}`}>
      <div className="uk-card uk-card-small uk-card-default">
        {image}
        <div className="uk-card-body">
          <div className="uk-overlay caption uk-position-top">
            {/* <span className="uk-badge uk-box-shadow-large">
              <span data-uk-icon="icon: tag" /> POS, Cafe
            </span> */}
          </div>
          <span className="uk-badge read-time uk-margin-remove grey-light uk-align-right">
            <span uk-icon="icon: clock" /> 3 minute read
            {/* <p class="uk-text-meta uk-margin-remove-top">
              <time style={{ color: "#f8f8f8" }} datetime="2016-04-01T19:00">
                April 01, 2016
              </time>
            </p> */}
          </span>
          <span className="uk-badge cat uk-align-left uk-padding-remove uk-margin-remove xuk-box-shadow-large">
            <span data-uk-icon="icon: tag" /> POS, Cafe
          </span>
          <h3 className="uk-card-title">Lorem ipsum dolor</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod sed do tempor incididunt.
          </p>
          <hr />
          {/* <span data-uk-icon="icon: user" /> by damshaw */}
          <p class="uk-text-meta uk-align-left uk-margin-remove">
            <span data-uk-icon="icon: calendar" />
            <time datetime="2016-04-01T19:00"> April 01, 2016</time>
          </p>
          {/* <span
            style={{ color: "#b0b0b0" }}
            className="uk-badge uk-margin-remove grey-mid uk-align-left"
          >
            <span uk-icon="icon: clock" /> 3 minute read
          </span> */}
          <a className="uk-align-right uk-button uk-button-text" href="#/">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

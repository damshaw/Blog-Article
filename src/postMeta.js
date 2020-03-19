import React from "react";
import "./styles.scss";

export default function PostMeta(props) {
  return (
    <div className="uk-article-meta uk-flex">
      {/* <div>
        <span uk-icon="icon: calendar" /> 10 May 2019
      </div> */}
      <div>
        <span uk-icon="icon: pencil" /> Written on
        <time className="grey-mid" datetime="2016-04-01T19:00">
          {" "}
          April 01, 2016{" "}
        </time>
        by damshaw in INSIGHTS
      </div>
      {/* <div className="uk-align-right">
        <span uk-icon="icon: tag" /> 
        POS, Cafe, Insights
      </div> */}
      <div className="uk-align-right">
        <span uk-icon="icon: clock" /> 3 minute read
      </div>
    </div>
  );
}

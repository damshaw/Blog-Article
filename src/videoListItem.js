import React from "react";
import "./styles.scss";

export default function VideoListItem(props) {
  return (
    <div className="uk-card uk-card-default video-list-item ">
      <div className="uk-cover-container ">
        <iframe
          title="video-2"
          src="https://player.vimeo.com/video/368723910?autoplay=0&loop=0"
          width="1920"
          height="1080"
          frameborder="0"
          allowfullscreen
          data-uk-responsive
          data-uk-video="automute: true;autoplay:false"
        />
      </div>
    </div>
  );
}

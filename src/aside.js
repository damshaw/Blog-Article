import React from "react";
import "./styles.scss";
import Card from "./card";
import Post from "./post";
import Video from "./video";
import Cover from "./cover";
import ListItem from "./listItem";
import VideoListItem from "./videoListItem";
import Topic from "./topic";
import PostMeta from "./postMeta";

export default function Aside(props) {
  return (
    <div
      className="uk-width-1 uk-width-1-4@m"
      data-uk-scrollspy="cls:uk-animation-fade;offset-top:-1000;hidden:true"
    >
      <div
        className="aside"
        style={{ zIndex: "980" }}
        data-uk-sticky="offset: 48; bottom: true;media: 960"
      >
        <div className="uk-container uk-container-large uk-section">
          <div className="most-popular uk-card uk-card-small uk-margin uk-card-default">
            <div className="uk-card-header">
              <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                <div className="uk-width-auto">
                  <span data-uk-icon="icon: heart; ratio: 1" />
                </div>
                <div className="uk-width-expand">
                  <h3 className="uk-h4 uk-margin-remove-bottom">
                    Most Popular
                  </h3>
                </div>
              </div>
            </div>
            <div className="uk-card-body">
              <ul className="uk-list uk-list-divider">
                <ListItem />
                <ListItem />
                <ListItem />
              </ul>
            </div>
          </div>

          <Cover
            title="Book a demo"
            size="small"
            bgColor="rgba(255,239,224,1);"
            color="#ff800a"
          />

          <div className="your-list uk-card uk-card-small  uk-margin uk-card-default">
            <div className="uk-card-header">
              <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                <div className="uk-width-auto">
                  <span data-uk-icon="icon: star; ratio: 1" />
                </div>
                <div className="uk-width-expand">
                  <h3 className="uk-h4 uk-margin-remove-bottom">
                    Your Reading List
                  </h3>
                </div>
              </div>
            </div>
            <div className="uk-card-body">
              <ul className="uk-list uk-list-divider">
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

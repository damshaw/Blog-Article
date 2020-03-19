import React from "react";
import { useFetch } from "./hooks";
import blogData from "./blogData";

import { render } from "react-dom";
import "./styles.scss";

import Card from "./card";
import Post from "./post";
import Image from "./image";

import Video from "./video";
import Cover from "./cover";
import ListItem from "./listItem";
import VideoListItem from "./videoListItem";
import Topic from "./topic";
import PostMeta from "./postMeta";
import Aside from "./aside";
export default function App() {
  // const [data, loading] = useFetch(
  //   "https://www.kounta.com/wp-json/wp/v2/posts/"
  // );
  // console.log(data);
  return (
    <div className="App">
      {/* <div className="">
        <div data-uk-grid className="uk-grid-collapse">
          <div className="uk-width-1 uk-width-1-2@m">
            <Cover
              title="Kounta Blog 2020 Layout"
              size="large"
              margin="remove"
            />
          </div>
          <div className="uk-width-1 uk-width-1-2@m">
            <div className="uk-cover-container uk-height-1-1">
              <img
                src="https://www.kounta.com/wp-content/uploads/2019/02/Kounta_Homepage_BG.jpg"
                alt=""
                data-uk-cover
              />
            </div>
          </div>
        </div>
      </div> */}
      {/* <Cover title="Kounta Blog 2020 Layout" size="large" margin="remove" /> */}
      {/* {loading ? (
        "Loading..."
      ) : (
        <ul>
          {data.map(({ id, title }) => (
            <li key={id}>
              id: {id}
              title: {title.rendered}
            </li>
          ))}
        </ul>
      )} */}
      <div className="uk-cover-container header uk-margin-large-bottom">
        <div className="uk-container uk-container-small">
          <div
            className={`
      uk-cover-container uk-height-auto
      uk-flex
      uk-margin-medium-top
      uk-margin-remove-bottom
      `}
            style={{ backgroundColor: "transparent" }}
          >
            <article className="uk-article uk-text-left uk-margin-auto uk-margin-auto-vertical">
              <h1 className="uk-article-title ">
                <a className="uk-link-reset" href="/">
                  Sed aliquam ultrices mauris
                </a>
              </h1>
              <p className="uk-text-lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <PostMeta />
              <p className="uk-text-meta grey-mid ">
                <time className="grey-mid" datetime="2016-04-01T19:00">
                  April 01, 2016
                </time>
              </p>
            </article>
          </div>
        </div>
      </div>
      <div className="uk-container uk-container-medium">
        <div className="uk-cover-container">
          <img
            src="https://www.kounta.com/wp-content/uploads/2019/02/Kounta_Homepage_BG.jpg"
            alt=""
            // data-uk-cover
          />
        </div>
      </div>
      <div className="uk-container uk-container-small">
        <div data-uk-grid>
          {/* <div className="uk-width-1 uk-width-3-4@m"> */}
          <div className="uk-width-1 uk-width-4-4@m">
            <Post />
            <Cover
              title="Book a demo CTA"
              size="small"
              bgColor="rgba(255,239,224,1);"
              color="#ff800a"
              margin="small"
            />
            <Cover
              title="Sign up CTA"
              size="small"
              bgColor="rgba(255,239,224,1);"
              color="#ff800a"
              margin="small"
            />
            <Cover
              title="Talk to expert CTA"
              size="small"
              bgColor="rgba(255,239,224,1);"
              color="#ff800a"
              margin="small"
            />
            <Cover
              title="Products CTA"
              size="small"
              bgColor="rgba(255,239,224,1);"
              color="#ff800a"
              margin="small"
            />
            <Cover
              title="Related Topics CTA"
              size="small"
              bgColor="rgba(255,239,224,1);"
              color="#ff800a"
              margin="small"
            />

            <Cover
              title="Get started for free"
              size="small"
              bgColor="rgba(255,239,224,1);"
              color="#ff800a"
              margin="small"
            />
            <br />
          </div>
          {/* <Aside /> */}
        </div>
      </div>
      <div
        className="uk-cover-container uk-height-small
      uk-flex"
        data-uk-sticky="top: 0;bottom:0"
      >
        <h1 className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
          Book a demo
        </h1>
      </div>
      <Cover title="Footer" size="medium" margin="remove" />
    </div>
  );
}

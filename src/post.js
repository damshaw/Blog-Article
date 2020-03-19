import React from "react";
import "./styles.scss";
import PostMeta from "./postMeta";
import Image from "./image";
export default function Post(props) {
  return (
    <div className="uk-container uk-container-large uk-section">
      <article className="uk-article">
        {/* <h1 className="uk-article-title">
          <a className="uk-link-reset" href="/">
            Sed aliquam ultrices mauris
          </a>
        </h1>
        <p className="uk-text-lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p> */}
        {/* <PostMeta /> */}

        <p className="uk-text-lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Image size="large" />

        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Image size="large" />

        <h3>Lorem ipsum dolor sit amet</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2>Lorem ipsum dolor sit amet</h2>
        <h3>Lorem ipsum dolor sit amet</h3>
        <h4>Lorem ipsum dolor sit amet</h4>
        <h5>Lorem ipsum dolor sit amet</h5>
        <h6>Lorem ipsum dolor sit amet</h6>

        <blockquote>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          illum aperiam sed officia sit ex. Rem dolorum itaque quasi neque ea
          architecto, dicta molestiae corporis, voluptates dolore eligendi
          numquam. Veritatis? - Foobar
        </blockquote>
        <hr />
        <section>
          <dl>
            <dt>Definition List Title</dt>
            <dd>Definition list division.</dd>
            <dt>Kitchen Sink</dt>
            <dd>
              Used in expressions to describe work in which all conceivable (and
              some inconceivable) sources have been mined. In this case, a bunch
              of markup.
            </dd>
            <dt>aside</dt>
            <dd>Defines content aside from the page content</dd>
            <dt>blockquote</dt>
            <dd>Defines a section that is quoted from another source</dd>
          </dl>
        </section>
        <hr />
        <section>
          <ul>
            <li>
              Unordered List item one
              <ul>
                <li>
                  Nested list item
                  <ul>
                    <li>Level 3, item one</li>
                    <li>Level 3, item two</li>
                    <li>Level 3, item three</li>
                    <li>Level 3, item four</li>
                  </ul>
                </li>
                <li>List item two</li>
                <li>List item three</li>
                <li>List item four</li>
              </ul>
            </li>
            <li>List item two</li>
            <li>List item three</li>
            <li>List item four</li>
          </ul>
          <hr />
          <ol>
            <li>
              List item one
              <ol>
                <li>
                  List item one
                  <ol>
                    <li>List item one</li>
                    <li>List item two</li>
                    <li>List item three</li>
                    <li>List item four</li>
                  </ol>
                </li>
                <li>List item two</li>
                <li>List item three</li>
                <li>List item four</li>
              </ol>
            </li>
            <li>List item two</li>
            <li>List item three</li>
            <li>List item four</li>
          </ol>
        </section>
        <hr />
      </article>
    </div>
  );
}

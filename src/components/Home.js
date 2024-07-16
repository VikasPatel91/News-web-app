import React from "react";
import { Container, Alert } from "react-bootstrap";

import "./Home.css";
const Home = () => {
  return (
    <>
      <div>
        <Container>
          <Alert variant={"success"} className={"mt-4 text-center"}>
            <h4>Welcome To News App</h4>
          </Alert>
        </Container>
        <div className="home">
          <div>
            Offers a personalized news feed based on your interests and browsing
            history. It covers a wide range of topics from various sources.
          </div>
          <div>
            Curates news articles, blogs, and other content based on topics
            you're interested in. It's known for its visually appealing
            magazine-style layout.
          </div>
          <div>
            Available on iOS devices, Apple News provides personalized news
            recommendations and a curated feed from trusted sources.
          </div>
          <div>
            Allows you to subscribe to your favorite news websites, blogs, and
            YouTube channels to create a personalized news feed.
          </div>
          <div>
            {" "}
            Offers a comprehensive coverage of news from around the world,
            including articles, videos, and live updates.
          </div>
          <div>
            Renowned for its unbiased reporting, Reuters app provides up-to-date
            news on various topics including business, politics, and technology.
          </div>
          <div>
            CNN's app offers breaking news alerts, live video streams, and
            in-depth coverage of current events.
          </div>
          <div>
            While not solely a news app, Reddit has numerous communities
            (subreddits) dedicated to news and current events, where users share
            articles and discuss various topics.
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

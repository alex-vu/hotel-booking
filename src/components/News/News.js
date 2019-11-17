import React from "react";
import NewsSectionTitle from "./NewsSectionTitle";
import NewsCard from "./NewsCard";
import NewsHighlight from "./NewsHighlight";
import NewsList from "./NewsList";
import "./News.css";

class News extends React.Component {
  state = {};
  render() {
    return (
      <section className="news">
        <div className="container grid">
          <div className="columns">
            <div className="column col-9 col-md-12">
              <NewsSectionTitle text="News" />
              <NewsHighlight />
              <NewsList />
            </div>
            <div className="column col-3 col-md-12">
              <NewsSectionTitle text="Blog" />
              <NewsCard />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default News;

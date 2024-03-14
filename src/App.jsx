import React from "react";
import newsData from "/mockdata";

import Card from "./components/Card";

function App() {
  console.log(newsData);
  const title = "Top news";
  return (
    <div className="container px-3 is-max-desktop mb-5">
      <h1>{title}</h1>
      <div className="news-list columns is-flex-wrap-wrap is-justify-content-space-between">
        {newsData.news.map(newsItem => (
          <Card key={newsItem.id} title={newsItem.title} text={newsItem.text} image={newsItem.image} publish_date={newsItem.publish_date} />
        ))}
      </div>
    </div>
  );
}
export default App;

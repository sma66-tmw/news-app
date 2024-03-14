import React from "react";
import newsData from "/mockdata";

import Card from "./components/Card";

function App() {
  console.log(newsData);
  const title = "Top news"
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {newsData.news.map((newsItem => <li>{newsItem.title}</li>))}
      </ul>
      <Card />
    </>
  );
}
export default App;

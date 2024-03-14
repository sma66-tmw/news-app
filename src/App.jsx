import React from "react";
import newsData from "/mockdata";
function App() {
  console.log(newsData);
  const title = "Top news"
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {newsData.news.map((newsItem => <li>{newsItem.title}</li>))}
      </ul>
    </>
  );
}
export default App;

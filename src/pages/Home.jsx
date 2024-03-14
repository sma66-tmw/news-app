import Card from "../components/Card";

import newsData from "/mockData";

export default function Home() {
  return (
    <div className="container px-3 is-max-desktop mb-5">
      <div className="news-list columns is-flex-wrap-wrap is-justify-content-space-between">
        {newsData.news.map((newsItem) => (
          <Card key={newsItem.id} {...newsItem} />
        ))}
      </div>
    </div>
  );
}

import Card from "../components/Card";

import newsData from "/mockData";

export default function Home() {

  const selectedTopic = "FINANCE";
  const selectedSource = "FOX";

  return (
    <div className="container px-3 is-max-desktop mb-5">
    <div className="mb-5 is-justify-content-space-between is-flex">
      <div className="field">
        <label className="label">Topic</label>
        <div className="control">
          <div className="select is-rounded">
            <select value={selectedTopic}>
                <option value="ENVIRONMENT">ENVIRONMENT</option>
                <option value="FINANCE">FINANCE</option>
                <option value="SPORTS">SPORTS</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">News Source</label>
        <div className="control">
          <div className="select is-rounded">
            <select value={selectedSource}>
                <option value="CNN">CNN</option>
                <option value="BBC">BBC</option>
                <option value="FOX">FOX</option>
            </select>
          </div>
        </div>
      </div>
    </div>
      <div className="news-list columns is-flex-wrap-wrap is-justify-content-space-between">
        {newsData.news.map((newsItem) => (
          <Card key={newsItem.id} {...newsItem} />
        ))}
      </div>
    </div>
  );
}

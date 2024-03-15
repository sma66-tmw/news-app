import { useState, useEffect } from "react";

import Card from "../components/Card";

import newsData from "/mockData";
import {SOURCES_LIST, TOPICS} from "../utils/constants"

export default function Home() {

  const [filters, setFilters] = useState({
    topic: TOPICS[0],
    source: SOURCES_LIST[0]
  })

  //useEffect with an empty dependency array. This will run on the first render only
  useEffect(() => {
    console.log("Home component rendered")
  }, []);

  function handleTopicChange(event) {
    setFilters({...filters, topic: event.target.value});
  }
  function handleSourceChange(event) {
    setFilters({...filters, source: event.target.value});
  }

  console.log("rendering Home component");
  return (
    <div className="container px-3 is-max-desktop mb-5">
    <div className="mb-5 is-justify-content-space-between is-flex">
      <div className="field">
        <label className="label">Topic</label>
        <div className="control">
          <div className="select is-rounded">
            <select value={filters.topic} onChange={handleTopicChange}>
                {TOPICS.map(topic => <option key={topic} value={topic}>{topic}</option>)}
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">News Source</label>
        <div className="control">
          <div className="select is-rounded">
            <select value={filters.source} onChange={handleSourceChange}>
                {SOURCES_LIST.map(source => <option key={source} value={source}>{source}</option>)}
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

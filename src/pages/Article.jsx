import { useLocation } from "react-router-dom";

export default function Article() {

  const { state: article } = useLocation();

  return (
    <div className="article container px-3 is-max-desktop mb-5">
      <div className="box">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={
                article.image ||
                "https://bulma.io/images/placeholders/1280x960.png"
              }
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <h2 className="title">{article.title}</h2>
            <p className="mb-1 has-text-weight-bold">
              {article.publish_date}
              {article.author && <>{" | " + article.author}</>}
            </p>
            <br />
            <p>{article.text}</p>
            <h6 className="title has-text-centered my-5">
              <a href={article.url} target="_blank">
                View full published article &#x2197;
              </a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

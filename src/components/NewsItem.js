import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date,source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
        <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '90%',zIndex:'1'}}>
                 {source}
               
              </span>
          <img
            src={
              !imageUrl
                ? "https://aniportalimages.s3.amazonaws.com/media/details/ANI-20221011025633.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              
            </h5>
            <p className="card-text">{description}</p>
            <p class="card-text">
              <small class="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm   btn-success"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

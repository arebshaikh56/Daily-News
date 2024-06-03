import React, { Component } from "react";


export class NewsItems extends Component {
  render() {
    let {title , description, imageUrl, newsUrl, author, publishedAt,source} = this.props;
    return (
      <div>
        <div className="card" >
          <img src={imageUrl?imageUrl:"https://responsive.fxempire.com/v7/_fxempire_/2024/05/Natural-Gas-Snow-2.jpg?func=cover&q=70&width=700"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small class="text-body-secondary"> By {author? author: 'Unknown' } on {new Date(publishedAt).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-primary btn-dark">
              Read more
            </a>
          </div>
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger " style={{zIndex: '1', left:'90%'}}>
          {source}
          </span>
        </div>
      </div>
    );
  }
}

export default NewsItems;

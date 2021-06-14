import React, { Component } from "react";

export default class ResultView extends Component {
  render() {
    const { book } = this.props;
    return (
      <div>
        <div className="pg3-background">
          {/* <img
            className="bg-pg3"
            src="https://i.pinimg.com/originals/90/de/6a/90de6a722188fc9a9c0835db1f0e5500.jpg"
            alt="background"
          /> */}
          <img
            className="book-img-holder"
            src="https://media.istockphoto.com/photos/book-picture-id147705864?k=6&m=147705864&s=612x612&w=0&h=Pp0LSPgc4Z8y94pCke0zxLzJv7Sa9mw3WaHcIdExaPc="
            alt="book cover"
          />
        </div>
        <div className="new-background">
          <p className="rec-book-title">Recommended book:</p>
          <div className="keys">
            <p className="title">Title:</p>
            <p className="author">Author:</p>
            {/* <p className="genre">Genre:</p> */}
            {/* <p className="emotions">Emotions:</p> */}
            <p className="wiki-link">Wiki link:</p>
          </div>
          <p className="summary-title">Summary:</p>
          <p className="summary-text">{book.summary}</p>
          <div className="values">
            <p className="title">{book.title}</p>
            <p className="author">{book.author}</p>
            {/* <p className="genre">{JSON.parse(book.genre)[0]}</p> */}
            {/* <p className="emotions">happy, nostalgic</p> */}
            <a
              href={`${book.wikipedia_link}`}
              className="wiki-link"
            >{`${book.wikipedia_link}`}</a>
            
          </div>
          {/* <button className="button" type="submit">
                suggest
              </button> */}
        </div>
      </div>
    );
  }
}

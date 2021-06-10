import React, { Component } from "react";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div className='corner-circles'>
          <img src='/images/large-purple-ellipse.png' alt='corner purple ellipse'/>
          <img src='/images/large-yellow-ellipse.png' alt='large yellow ellipse'/>
          <img src='/images/small-purple-ellipse.png' alt='small purple ellipse'/>
          <img src='/images/small-yellow-ellipse.png' alt='small yellow ellipse'/>
        </div>
        <div>
          <h1>bibliofeels</h1>
          <p>for the love of books.</p>
          <a href='#'> {/**a place holder for the routing */}
            <button>get started</button>
          </a>
        </div>
      </div>
    );
  }
}
